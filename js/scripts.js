//business logic
function Pizza() {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Pizza.prototype.getPrice = function () {
  if (this.size === 1 && this.toppings === 1) {
    this.price = 10;
  } else if (this.size === 2 && this.toppings === 1) {
    this.price = 12;
  } else if (this.size === 1 && this.toppings === 2) {
    this.price = 14;
  } else if (this.size === 1 && this.toppings === 3) {
    this.price = 14;
  } else if (this.size === 1 && this.toppings === 4) {
    this.price = 14;
  } else if (this.size === 2 &&& this.toppings === 2) {
    this.price = 16;
  } else if (this.size === 2 &&& this.toppings === 3) {
    this.price = 16;
  } else (this.size === 2 &&& this.toppings === 4) {
    this.price = 16;
  }
}

//user logic
$(document).ready(function() {
  $("form#user").submit(function(event) {
    event.preventDefault();
    var inputSize = $("#size").val();
    var topping = $("#toppings").val();
    var iWantPizza = new Pizza(inputSize,topping);
  });
});
