let Clos = document.querySelectorAll("#Close");
let selectedProducts = document.getElementById("products");
let sidePanel = document.getElementById("side-panel");
let AddToCard = document.querySelectorAll(".add-to-cart");

let totalPrice = 0;

function updateTotalPrice() {
  document.getElementById("price").innerText =
    "Total: $" + totalPrice.toFixed(2);
}

AddToCard.forEach(function (button) {
  button.addEventListener("click", function () {
    const price = parseFloat(
      button.parentElement.querySelector(".price").textContent.slice(1)
    );
    totalPrice += price;
    updateTotalPrice();
    const productName =
      button.parentElement.querySelector(".title").textContent;
    const productPrice =
      button.parentElement.querySelector(".price").textContent;
    const li = document.createElement("li");
    li.textContent = productName + " " + "-" + " " + productPrice;
    selectedProducts.appendChild(li);
    sidePanel.style.right = "0";
  });
});

Clos.forEach(function (Clos) {
  Clos.addEventListener("click", function () {
    sidePanel.style.right = "-300px";
    sidePanel.style.opacity = "0";
  });
});

AddToCard.forEach(function (AddToCard) {
  AddToCard.addEventListener("click", function (event) {
    if (
      !sidePanel.contains(event.target) &&
      event.target !== selectedProducts
    ) {
      sidePanel.style.right = "0px";
      sidePanel.style.opacity = "1";
    }
  });
});
