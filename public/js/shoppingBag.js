function removeProduct(documentId) {
  fetch(`http://localhost:5000/shoppingBagDetails/${documentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      window.location.href = `http://localhost:5000/shoppingBagDetails/${res.item.shopping_bag_id}`;
    })
    .catch((err) => {
      console.log("err:", err);
    });
}

changeField = (documentId, fieldName, fieldValue) => {
  fetch(`http://localhost:5000/shoppingBagDetails/${documentId}`, {
    method: "PATCH",
    body: JSON.stringify({
      [fieldName]: fieldValue,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      window.location.href = `http://localhost:5000/shoppingBagDetails/${res.item.shopping_bag_id}`;
    })
    .catch((err) => {
      console.log("err:", err);
    });
};

goToCheckout = (user_id) => {
  window.location.href = `http://localhost:5000/checkout/${user_id._id}`;
};

checkShoppingBag = (items) => {
  if (items === null || items.length === 0) {
    var bagData = document.getElementById("shopping-bag-data");
    bagData.innerHTML = "";
    var text = document.createElement("p");
    text.innerHTML = `Your bag is empty.
    <a href='/landingpage'>Click here to continue shopping!</a>`;
    text.setAttribute("id", "shopping-bag-empty");
    bagData.append(text);
    var checkout = document.getElementById("shopping-bag-summary");
    checkout.style.display = "none";
  } else {
    var tag = document.getElementById("shopping-bag-tag");
    var quantity = 0;

    items.forEach((el) => {
      return (quantity += el.quantity);
    });
    tag.innerText = `Shopping Bag (${quantity})`;
  }

  verfiyUserDetails();
};

goToPage = (product_id) => {
  window.location.href = `http://localhost:5000/products/${product_id}`;
};
