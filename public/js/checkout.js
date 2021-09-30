var item_price_value;

checkoutPage = (shoppingBag) => {
  var required_value;
  var total_price = document.getElementById("total_price");
  var required_event;
  var d = document.getElementById("continue");
  var ordernum = document.getElementById("orderId");
  var to_check;
  var c = document.getElementById("anotherbtn");

  var shoppingBag_id = shoppingBag._id;
  var user_id = shoppingBag.user_id;

  getShoppingBagDetails(shoppingBag_id);
  getUserAddress(user_id);
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
  var total_price = document.getElementById("total_price");
  var total = 0;
  for (k in items) {
    var e = items[k];
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

  console.log(total_price);
  total_price.textContent = "₹" + (item_price_value + 2487 + 2360);
};

function required(num) {
  var req = document.getElementsByClassName("required");

  for (var i = 0; i < req.length; i++) {
    req[i].style.borderColor = "white";
  }

  event.currentTarget.style.borderColor = "#2a9dcc";

  required_event = (
    event.currentTarget.children[0].children[1].children[0].textContent +
    "\n" +
    event.currentTarget.children[0].children[1].children[1].textContent +
    "\n" +
    event.currentTarget.children[1].children[0].textContent
  ).toUpperCase();

  var element = event.currentTarget.children[2];

  if (num == 2) {
    element.children[0].textContent = "₹3,325";
    required_value = 3325;
  } else if (num == 3) {
    element.children[0].textContent = "₹3,428";
    required_value = 3428;
  } else if (num == 4) {
    element.children[0].textContent = "₹3,628";
    required_value = 3628;
  } else {
    element.children[0].textContent = "₹2,487";
    required_value = 2487;
  }

  total_price.textContent =
    "₹" + Number(item_price_value + required_value + 2360);
  var shipping_price = document.getElementById("shipping_price");
  shipping_price.textContent = element.children[0].textContent;
}

getUserAddress = (user_id) => {
  console.log(user_id);
  fetch(`http://localhost:5000/address/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};
