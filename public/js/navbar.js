function dropDown(a) {

    var show1 = document.querySelector("#main-content")
    var show = document.querySelector(`.${a}-content`)
    show1.style.display = "block";
    // show.style.display="block";
    show.style.height = "500px"

    var rem = document.getElementsByClassName("navEle")

    for (var i = 0; i < rem.length; i++) {
        if (rem[i].textContent != a) {
            var remo = document.querySelector(`.${rem[i].textContent}-content`)
            remo.style.height = "0px";

            rem[i].style.color = "rgba(0, 0, 0, 0.3)"
            rem[i].style.textDecoration = "none"
        } else {
            rem[i].style.color = "#393939"
            rem[i].style.textDecoration = "underline"
        }
    }
}

function searchBar() {
    var bar = document.querySelector("#inputBox")
    bar.style.height = "70px";
}

function removeBar() {
    var bar = document.querySelector("#inputBox")
    bar.style.height = "0px";
}

function signBar() {
    var bar = document.querySelector("#signIN")
    bar.style.display = "block";
}

function removeSignBar() {
    var bar = document.querySelector("#signIN")
    bar.style.display = "none";
}

function removeDropdown() {
    var show = document.querySelector("#main-content")
    show.style.display = "none";

    var reset = document.getElementsByClassName("navEle")

    for (var i = 0; i < reset.length; i++) {
        if (reset[i].textContent != "Sale") {
            reset[i].style.color = "#393939"
        }
        reset[i].style.textDecoration = "none"
    }
}



window.onload = () => {
    verfiyUserDetails();
}

var userDetails;
verfiyUserDetails = async () => {
    var account = document.getElementById('your-account');
    var wishlist = document.getElementById('your-wishlist');
    var signin = document.getElementById('sign-in-btn');
    var signup = document.getElementById('sign-up-btn');
    var signout = document.getElementById('signout');

    var user_id = localStorage.getItem('uid');
    var shopping_bag_id = localStorage.getItem('sid');
    var wishlist_id = localStorage.getItem('wid');

    if (user_id) {
        userDetails = await getUserDetails(user_id);

        signin.style.display = 'none';
        signup.style.display = 'none';

        let welcomeMessage = document.getElementById('welcome_message');
        welcomeMessage.innerText = `Hi ${userDetails.first_name}`;

        var accountLink = document.getElementById('your-account-link');
        accountLink.setAttribute('href', `/myaccount/${user_id}`);

        var wishlistLink = document.getElementById('your-wishlist-link');
        wishlistLink.setAttribute('href', `/myaccount/${user_id}/wishlist`);

        var shoppingBag = document.getElementById('bag-icon-text');
        shoppingBag.setAttribute('href', `/shoppingBagDetails/${shopping_bag_id}`);

        var items = await getShoppingBagItems(shopping_bag_id);
        var quantity = 0;

        for (k in items) {
            quantity += items[k].quantity;
        }

        var itemsInBag = document.getElementById('itemsInBag');
        itemsInBag.innerText = `(${quantity})`;

        signout.onclick = () => {
            localStorage.setItem('uid', "");
            localStorage.setItem('sid', "");
            localStorage.setItem('wid', "");
            window.location.href = '/';
        }

    } else if (!user_id) {

        account.style.display = 'none';
        wishlist.style.display = 'none';
        signout.style.display = 'none';
    }
}

getUserDetails = async (user_id) => {
    const response = await fetch(`https://nordstrom-cloned.herokuapp.com/users/${user_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json();
    const user = data.userDetails;

    return user;
};

getShoppingBagItems = async (shopping_bag_id) => {
    const response = await fetch(`https://nordstrom-cloned.herokuapp.com/shoppingBagDetails/details/${shopping_bag_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json();
    const items = data.items;

    return items;
}

