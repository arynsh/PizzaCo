//business logic
var toppingPrice = {"Cheese":2, "Veggies":2, "Bacon":2};

function Pizza(inputSize, getToppings, prices) {
  this.size = inputSize;
  this.toppings = getToppings;
  this.price = prices;
}

Pizza.prototype.getPrice = function () {
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i]) {
      this.price += toppingPrice[this.toppings[i]];
    }
  };
  if (this.size === 2) {
    this.price += 10;
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
    var prices= 10;
    var iWantPizza = new Pizza(inputSize, getToppings, prices);

    iWantPizza.getPrice();
    $("#results").show();
    $(".output").text(iWantPizza.price);
  });
});
