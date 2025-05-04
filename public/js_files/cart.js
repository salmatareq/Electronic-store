// const plusButtons = document.querySelectorAll(".plus");
// const minusButtons = document.querySelectorAll(".minus");

// plusButtons.forEach((plusBtn) => {
//   plusBtn.addEventListener("click", () => {
//     const parent = plusBtn.closest(".quantity-selector");
//     const quantityEl = parent.querySelector(".quantity");
//     let current = parseInt(quantityEl.textContent);
//     quantityEl.textContent = current + 1;
//   });
// });

// minusButtons.forEach((minusBtn) => {
//   minusBtn.addEventListener("click", () => {
//     const parent = minusBtn.closest(".quantity-selector");
//     const quantityEl = parent.querySelector(".quantity");
//     let current = parseInt(quantityEl.textContent);
//     if (current > 1) {
//       quantityEl.textContent = current - 1;
//     }
//   });
// });

const hidden_cart = document.querySelector("#cart_sec");
const x = document.querySelector("#x");
const icon = document.querySelector(".cart");

x.addEventListener("click", function () {
  hidden_cart.style.display = "none";
});

icon.addEventListener("click", function () {
  hidden_cart.style.display = "block";
});

////////////////////////////////
let arr = [];
const buttons = document.querySelectorAll(".cart_button");
const container = document.querySelector("#products");
const num_product = document.querySelector(".num_products");
let counter = 0;
let price_place = document.querySelector(".total_price price");
let totalprice = 0;
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = btn.closest(".card3");
    let has_added = false;
    const imgSrc = card.querySelector(".cardimg3 img").src;
    const title = card.querySelector(".cardbody3 p").textContent;

    const priceText = card.querySelector(".cardbody3 h2").textContent;
    const price = parseFloat(priceText.replace("$", ""));

    arr.forEach((img) => {
      if (imgSrc == img) {
        has_added = true;
      }
    });
    if (!has_added) {
      const newLinkHTML = `
      <div id="product">
        <div id="img"><img src="${imgSrc}" alt="" /></div>
        <div id="details">
         ${title}
          <div class="cart_price">$${priceText}</div>
         
        </div>
        <button class="x_product" >×</button>
      </div>
    `;
      totalprice += price;

      container.insertAdjacentHTML("beforeend", newLinkHTML);
      console.log("clicked");
      counter++;
      num_product.textContent = counter;
      const lastProduct = container.querySelectorAll("#product");
      const lastX =
        lastProduct[lastProduct.length - 1].querySelector(".x_product");

      lastX.addEventListener("click", (e) => {
        const product = lastX.closest("#product");
        const img = product.querySelector("img").src;

        arr = arr.filter((item) => item !== img);
        product.remove();
        counter--;
        num_product.textContent = counter;
        console.log("Removed");
        totalprice -= price;
        price_place.textContent = totalprice;
      });
    }
    price_place.textContent = totalprice;
    arr.push(imgSrc);
  });
});
