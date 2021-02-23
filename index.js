const slider = document.querySelector("#priceRange");
const yearlyDiscount = document.getElementById("checkbox");
let price = {value : 12.00};

console.log(yearlyDiscount.value);

function getDiscount() {
  const priceinit = price.value;
  if (yearlyDiscount.checked === true) {
    price.value = price.value * 65.00 / 100.00;
    document.querySelector("#price").innerHTML = "$"+price.value.toFixed(2);
    price.value = priceinit;
  } else if ( yearlyDiscount.checked === false){
    document.querySelector("#price").innerHTML = "$"+price.value.toFixed(2);
  }

};


function getPrice() {
  const views = parseInt(this.value);


  if (views === 0) {
    price.value = 8.00;
    document.getElementById("pageview").innerHTML = "10k pageviews";
  } else if (views === 25.00) {
    price.value = 12.00;
    document.getElementById("pageview").innerHTML = "50k pageviews";
  } else if (views === 50) {
    price.value = 16.00;
    document.getElementById("pageview").innerHTML = "100k pageviews";
  } else if (views === 75) {
    price.value = 24.00;
    document.getElementById("pageview").innerHTML = "500k pageviews";
  } else if (views <= 100) {
    price.value = 36.00;
    document.getElementById("pageview").innerHTML = "1M pageviews";
  }

  document.querySelector("#price").innerHTML = "$"+price.value.toFixed(2);
}


slider.addEventListener('change', getPrice);
getPrice();

document.addEventListener("change", getDiscount);
getDiscount();

document.addEventListener("click",function(){
console.log(price.value);
});

document.querySelector( ".form-range" ).addEventListener( "input", function(event) {
  const percentage = document.querySelector( ".form-range" ).value;
  document.querySelector(".form-range").style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%)"+percentage +"%, hsl(223, 50%, 87%) "+ percentage + "%, hsl(223, 50%, 87%) 100%)";
});
