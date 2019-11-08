//business logic
function Pizza(inputSize, inputTopping, prices) {
  this.size = inputSize;
  this.toppings = inputTopping;
  this.price = prices;
}

Pizza.prototype.getPrice = function () {
  if (this.size === 1 && this.toppings === 1) {
    this.price = 10;
  } else if (this.size === 1 && this.toppings === 2) {
    this.price = 12;
  } else if (this.size === 1 && this.toppings === 3) {
    this.price = 12;
  } else if (this.size === 2 && this.toppings === 1) {
    this.price = 12;
  } else if (this.size === 2 && this.toppings === 2) {
    this.price = 14;
  } else {                // } else if (this.size === 2 &&& this.toppings === 3) {
    this.price = 14;
  }
}

//user logic
$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
    var inputSize = parseInt($("#size").val());
    var inputTopping = parseInt($("#toppings").val());
    var prices= 0;
    var iWantPizza = new Pizza(inputSize, inputTopping, prices);
    iWantPizza.getPrice();
    // console.log(iWantPizza.getPrice());
    $("#results").show();
    $(".output").append(iWantPizza.price);
  });
});
