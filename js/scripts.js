//business logic
function Pizza(inputSize, getToppings, prices) {
  this.size = inputSize;
  this.toppings = getToppings;
  this.price = prices;
}

Pizza.prototype.getPrice = function () {
  if (this.size === 1 && this.toppings === "Cheese") {
    this.price = 10;
  } else if (this.size === 2 && this.toppings === "Cheese") {
    this.price = 12;
  } else if (this.size === 1 && this.toppings === "Cheese", "Veggies") {
    this.price = 15;
  } else if (this.size === 2 && this.toppings === "Cheese", "Veggies") {
    this.price = 16;
  } else if (this.size === 1 && this.toppings === "Cheese", "Veggies", "Bacon") {
    this.price = 16;
  } else if (this.size === 2 && this.toppings === "Cheese", "Veggies", "Bacon") {
    this.price = 18;
  } else {                // } else if (this.size === 2 &&& this.toppings === 3) {
    this.price = 11;
  }
}

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
    console.log(iWantPizza);
    iWantPizza.getPrice();
    // console.log(iWantPizza.getPrice());
    $("#results").show();
    $(".output").append(iWantPizza.price);
  });
});
