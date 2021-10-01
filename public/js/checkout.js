var item_price_value;
var required_event;
var ordernum = document.getElementById("orderId");
var c = document.getElementById("anotherbtn");
var total_price = document.getElementById("total_price");
var shoppingBag_items;
var user_id;
var total;
var user_address;
var userDetails;

checkoutPage = (shoppingBag) => {
  var required_value;
  var shoppingBag_id = shoppingBag._id;
  user_id = shoppingBag.user_id;
  getUserDetails(user_id);
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
      shoppingBag_items = res.items;
      createProducts(res.items);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

createProducts = (items) => {
  var total_price = document.getElementById("total_price");
  total = 0;
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
    element.children[0].textContent = "₹3325";
    required_value = 3325;
  } else if (num == 3) {
    element.children[0].textContent = "₹3428";
    required_value = 3428;
  } else if (num == 4) {
    element.children[0].textContent = "₹3628";
    required_value = 3628;
  } else {
    element.children[0].textContent = "₹2487";
    required_value = 2487;
  }

  var total_price = document.getElementById("total_price");

  total_price.textContent =
    "₹" + Number(item_price_value + required_value + 2360);
  var shipping_price = document.getElementById("shipping_price");
  shipping_price.textContent = element.children[0].textContent;
}

getUserDetails = (user_id) => {
  fetch(`http://localhost:5000/users/${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      userDetails = res.userDetails;
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

getUserAddress = (user_id) => {
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
      user_address = res.address;
      populateUserAddress(res.address);
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

populateUserAddress = (arr) => {
  var address = arr[0];

  var emailInput = document.getElementById("emailInput");
  emailInput.value = userDetails.email;

  var firstName = document.getElementById("firstName");
  firstName.value = userDetails.first_name;

  var lastName = document.getElementById("lastName");
  lastName.value = userDetails.last_name;

  if (address.length != 0) {
    var addressInput = document.getElementById("addressInput");
    addressInput.value = address.address;

    var address2 = document.getElementById("address2");
    address2.value = address.address2;

    if (address.address2 === undefined || address.address2 === null) {
      address2.value = "";
    } else {
      address2.value = address.address2;
    }

    var postal = document.getElementById("Postal");
    postal.value = address.postal_code;

    var city = document.getElementById("city");
    city.value = address.city;

    var region = document.getElementById("region");
    if (address.region === undefined || address.region === null) {
      region.value = "";
    } else {
      region.value = address.region;
    }

    var phone = document.getElementById("phone");
    phone.value = address.phone;

    var country = document.getElementById("Country");
    country.value = address.country;
  }
};

function checkValues() {
  var ordernum = document.getElementById("orderId");

  var c = document.getElementById("anotherbtn");
  var d = document.getElementById("continue");
  if (event.target.textContent.trim() == "Continue>>") {
    var emlLable = document.getElementById("emaillabel");
    var firstNameLabel = document.getElementById("firstNamelabel");
    var lastNameLabel = document.getElementById("lastNamelabel");
    var addLabel = document.getElementById("addresslabel");
    var postLabel = document.getElementById("Postallabel");
    var cityLabel = document.getElementById("citylabel");
    var phonelabel = document.getElementById("phonelabel");
    var Countrylabel = document.getElementById("Countrylabel");

    var eml_input = document.getElementById("emailInput");
    var first_input = document.getElementById("firstName");
    var last_input = document.getElementById("lastName");
    var add_input = document.getElementById("addressInput");
    var post_input = document.getElementById("Postal");
    var city_input = document.getElementById("city");
    var phone_input = document.getElementById("phone");
    var Country_input = document.getElementById("Country");

    if (
      eml_input.value == "" ||
      first_input.value == "" ||
      last_input.value == "" ||
      add_input.value == "" ||
      post_input.value == "" ||
      city_input.value == "" ||
      phone_input.value == "" ||
      Country_input.value == ""
    ) {
      emlLable.style.display = "block";
      firstNameLabel.style.display = "block";
      lastNameLabel.style.display = "block";
      addLabel.style.display = "block";
      postLabel.style.display = "block";
      cityLabel.style.display = "block";
      phonelabel.style.display = "block";
      Countrylabel.style.display = "block";

      eml_input.style.borderColor = "#d30c0c";
      first_input.style.borderColor = "#d30c0c";
      last_input.style.borderColor = "#d30c0c";
      add_input.style.borderColor = "#d30c0c";
      post_input.style.borderColor = "#d30c0c";
      city_input.style.borderColor = "#d30c0c";
      phone_input.style.borderColor = "#d30c0c";
      Country_input.style.borderColor = "#d30c0c";
    } else {
      emlLable.style.display = "none";
      firstNameLabel.style.display = "none";
      lastNameLabel.style.display = "none";
      addLabel.style.display = "none";
      postLabel.style.display = "none";
      cityLabel.style.display = "none";
      phonelabel.style.display = "none";
      Countrylabel.style.display = "none";

      eml_input.style.borderColor = "rgb(206, 198, 198)";
      first_input.style.borderColor = "rgb(206, 198, 198)";
      last_input.style.borderColor = "rgb(206, 198, 198)";
      add_input.style.borderColor = "rgb(206, 198, 198)";
      post_input.style.borderColor = "rgb(206, 198, 198)";
      city_input.style.borderColor = "rgb(206, 198, 198)";
      phone_input.style.borderColor = "rgb(206, 198, 198)";
      Country_input.style.borderColor = "rgb(206, 198, 198)";

      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var addressInput = document.getElementById("addressInput").value;
      var address2 = document.getElementById("address2").value;
      var city = document.getElementById("city").value;
      var region = document.getElementById("region").value;
      var Country = document.getElementById("Country").value;
      var Postal = document.getElementById("Postal").value;

      if (user_address === null || user_address === undefined) {
        addUserAddress(
          addressInput,
          address2,
          city,
          region,
          Country,
          Postal,
          phone_input.value
        );
      }

      document.getElementById("displayname").textContent = (
        firstName +
        " " +
        lastName
      ).toUpperCase();
      document.getElementById("displayAddress").textContent = (
        addressInput +
        "," +
        address2 +
        "," +
        city +
        "," +
        region +
        " " +
        Postal +
        " " +
        Country
      ).toUpperCase();

      document.getElementById("emailInput").value = "";
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("addressInput").value = "";
      document.getElementById("address2").value = "";
      document.getElementById("city").value = "";
      document.getElementById("region").value = "";
      document.getElementById("Country").value = "";
      document.getElementById("Postal").value = "";
      document.getElementById("phone").value = "";

      if (required_event == undefined) {
        required_event =
          "STANDARD IMPORT CHARGES COLLECTED UPON DELIVERY 11–21 BUSINESS DAYS";
      } else {
        document.getElementById("imports").textContent = required_event;
      }

      var gone = document.getElementById("Gone");
      var address_display = document.getElementById("address_display");
      var credit_details = document.getElementById("credit-details");

      if (gone.style.display === "none") {
        gone.style.display = "block";
      } else {
        gone.style.display = "none";
        address_display.style.display = "flex";
        credit_details.style.display = "block";
      }

      d.textContent = "Place Order>>";
    }
  } else {
    placeOrder();
  }
}

function placeOrder() {
  var ordernum = document.getElementById("orderId");
  var c = document.getElementById("anotherbtn");
  var d = document.getElementById("continue");
  var modal = document.getElementById("simpleModal");
  var blur_effect = document.getElementById("entire-body");
  if (event.target.textContent == "SHOP MORE") {
    window.location.href = "landing_page.html";
  } else {
    var cardnumber = document.getElementById("cardnumber");
    var month = document.getElementById("month");
    var code = document.getElementById("code");

    if (cardnumber.value == "" || month.value == "" || code.value == "") {
      cardnumber.style.borderColor = "#d30c0c";
      month.style.borderColor = "#d30c0c";
      code.style.borderColor = "#d30c0c";
    } else {
      let creditArray = [cardnumber.value, month.value, code.value];

      let flag = true;

      for (let i = 0; i < 3; i++) {
        if (!card(creditArray[i].toString(), i)) {
          flag = false;
        }
      }

      if (flag) {
        cardnumber.style.borderColor = "rgb(206, 198, 198)";
        month.style.borderColor = "rgb(206, 198, 198)";
        code.style.borderColor = "rgb(206, 198, 198)";

        d.textContent = "Loading...";
        c.textContent = "Loading...";
        var num = Math.round(Math.random() * 100000);
        setTimeout(function () {
          let total_price = document
            .getElementById("total_price")
            .textContent.trim();
          let items_price = document
            .getElementById("items_price")
            .textContent.trim();
          let shipping_price = document
            .getElementById("shipping_price")
            .textContent.trim();
          let duties_and_tax = 2360;
          let address = document
            .getElementById("displayAddress")
            .textContent.trim();
          let imports = document
            .getElementById("imports")
            .textContent.trim()
            .split("\n");
          modal.style.display = "block";
          blur_effect.setAttribute("class", "blur");
          ordernum.textContent = num;
          //localStorage.setItem(to_check, JSON.stringify([]));
          createOrder(
            total_price,
            items_price,
            shipping_price,
            duties_and_tax,
            address,
            imports
          );
        }, 3000);
      } else {
        cardnumber.style.borderColor = "#d30c0c";
        month.style.borderColor = "#d30c0c";
        code.style.borderColor = "#d30c0c";
      }
    }
  }
}

function card(cardNumber, k) {
  var cardArray = cardNumber.split("");
  for (let i = 0; i < cardArray.length; i++) {
    if (cardArray[i].charCodeAt() > 57 || cardArray[i].charCodeAt() < 48) {
      return false;
    }
  }

  if (k == 0) {
    if (cardArray.length == 16) {
      return true;
    }
  } else if (k == 1) {
    if (cardArray.length == 4) {
      let month = Number(cardNumber.slice(0, 2));
      let year = Number(cardNumber.slice(2, 4));
      if (month >= 1 && month <= 12 && year > 21) {
        return true;
      }
    }
  } else if (k == 2) {
    if (cardArray.length == 3) {
      return true;
    }
  }

  return false;
}

closeModal = (shoppingBag_id) => {
  var modal = document.getElementById("simpleModal");
  var blur_effect = document.getElementById("entire-body");

  modal.style.display = "none";
  blur_effect.setAttribute("class", "noblur");

  //window.location.href = `http://localhost:5000/shoppingBagDetails/${shoppingBag_id}`;
};

addUserAddress = (addressInput, address2, city, region, Country, Postal, phone_input) => {
  fetch(`http://localhost:5000/address`, {
    method: "POST",
    body: JSON.stringify({
      user_id: user_id,
      address: addressInput,
      address2: address2,
      postal_code: Postal,
      city: city,
      region: region,
      phone: phone_input,
      country: Country,
    }),
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

createOrder = (total_price, items_price, shipping_price, duties_and_tax, address, imports) => {
  var products = [];

  var order_number = fetchNewOrderNumber();

  for (k in shoppingBag_items) {
    var item = shoppingBag_items[k];

    var obj = {
      product: item.product_id,
      quantity: item.quantity,
    };

    products.push(obj);
  }

  total_price = Number(total_price.split("").splice(1).join(""));
  items_price = Number(items_price.split("").splice(1).join(""));
  shipping_price = Number(shipping_price.split("").splice(1).join(""));

  imports = imports
    .filter((el) => {
      return el != "";
    })
    .map((el) => {
      return el.trim();
    })
    .join(" ");

  var order = {
    user_id: user_id,
    products: products,
    total_price: total_price,
    items_total_price: items_price,
    shipping_price: shipping_price,
    duties_tax: duties_and_tax,
    delivery_address: address,
    delivery_method: imports
  }

  console.log(order);
};

fetchNewOrderNumber = () => {
  fetch(`http://localhost:5000/orderNumbers/6156b86b69c58a54ec07bd62`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.order_number;
    })
    .catch((err) => {
      console.log("err:", err);
    });
}


uploadOrderDetails()

