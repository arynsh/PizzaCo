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
    console.log(getToppings);



    var inputSize = parseInt($("#size").val());
    var prices= 0;
    var iWantPizza = new Pizza(inputSize, getToppings, prices);
    console.log(iWantPizza);

    var toppingPrice = {"Cheese":2, "Veggies":2, "Bacon":2};

    for (var i = 0; i < getToppings.length; i++) {
      if (getToppings[i]) {
        iWantPizza.price += toppingPrice[i].value;
      }
    };

    iWantPizza.getPrice();
    $("#results").show();
    $(".output").append(iWantPizza.price);
  });
});
