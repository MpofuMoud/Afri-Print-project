function shopWithUs() {
  let name = prompt("What is your name?");
  let country = prompt("What country are you shopping from?");
  country = country.toLowerCase();
  country = country.trim();

  if (country === "poland") {
    alert(
      "Hi " + name + ", Please visit our store located in Warsaw, old town"
    );
  } else {
    alert("Hi " + name + ", Thank you for shopping with us!!!");
  }
}
let shopButton = document.querySelector(".shop");

shopButton.addEventListener("click", shopWithUs);
