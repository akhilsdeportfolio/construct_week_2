checkoutPage = (shoppingBag_id) => {
  //console.log("Sample Function...");
  getShoppingBagDetails(shoppingBag_id);
};

getShoppingBagDetails = (shoppingBag_id) => {
  fetch(`http://localhost:5000/shoppingBagDetails/details/${shoppingBag_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      createProducts(res.items);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

createProducts = (items) => {
  var total = 0;
  for (k in items) {
    var e = items[k];
    console.log(e);
    var main_div = document.createElement("div");

    var image_div = document.createElement("div");

    var details_div = document.createElement("div");

    var image = document.createElement("img");
    image.src = e.product_id.images[0];

    image_div.append(image);

    var name = document.createElement("p");
    name.textContent = e.product_id.name;
    name.setAttribute("id", "product_name");

    var color = document.createElement("p");
    color.textContent = "Color: " + e.product_id.color;

    var brand = document.createElement("p");
    brand.textContent = "Brand: " + e.product_id.brand_id.brand_name;

    var quantiy = document.createElement("p");
    quantiy.textContent = "Qty: " + e.quantity;

    var price = document.createElement("p");
    price.textContent = "₹" + e.product_id.price;
    price.setAttribute("id", "product_price");

    if (e.quantity > 1) {
      total = total + e.product_id.price * e.quantity;
    } else {
      total = total + e.product_id.price;
    }

    details_div.append(name, color, brand, quantiy, price);

    main_div.append(image_div, details_div);

    var product_checkout_div = document.getElementById("checkout-image-div");

    product_checkout_div.append(main_div);
  }

  var items_price = document.getElementById("items_price");

  items_price.textContent = "₹" + total;
  item_price_value = total;
};
