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
      console.log(res);
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
