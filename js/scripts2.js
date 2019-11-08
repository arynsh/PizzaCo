//business logic
function Pizza(inputSize, getToppings, prices) {
  this.size = inputSize;
  this.toppings = getToppings;
  this.price = prices;
}



// Pizza.prototype.getPrice = function () {
//   if (this.size === 1 && this.toppings === 1) {
//     this.price = 10;
//   } else if (this.size === 1 && this.toppings === 2) {
//     this.price = 12;
//   } else if (this.size === 1 && this.toppings === 3) {
//     this.price = 12;
//   } else if (this.size === 2 && this.toppings === 1) {
//     this.price = 12;
//   } else if (this.size === 2 && this.toppings === 2) {
//     this.price = 14;
//   } else {                // } else if (this.size === 2 &&& this.toppings === 3) {
//     this.price = 14;
//   }
// }

//user logic
$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();

    var getToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputTopping = $(this).val();
      getToppings.push(inputTopping);
    });

    var inputSize = parseInt($("#size").val());
    var prices= 0;
    var iWantPizza = new Pizza(inputSize, getToppings, prices);

    var toppingPrice = {"Cheese":12, "Veggies":12, "Bacon":12};

    console.log("This is " + iWantPizza);
    for (var i = 0; i < getToppings.length; i++) {
      // console.log(getToppings[i]);
        iWantPizza.price += toppingPrice[getToppings[i]];
      }
    };

    // iWantPizza.getPrice();
    $("#results").show();
    $(".output").append(iWantPizza.price);
  });
});
