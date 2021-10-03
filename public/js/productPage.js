let currentArray;
let products;


let data_div = document.getElementById('product-grid-data');


let sortBy = (value) => {

    if (value === 'lowToHigh') {
        sorting(1)
    } else if (value === 'highToLow') {
        sorting(-1)
    } else if (value === "newest") {
        window.location.href = "http://nordstrom-cloned.herokuapp.com/products/"
    }
}


async function sorting(x) {


    let ids = JSON.parse(localStorage.getItem("productIDs"))

    console.log(ids)

    let response = await fetch(`http://nordstrom-cloned.herokuapp.com/products/${x}/sort?ids=${ids}`)

    products = await response.json();

    currentArray = products

    await createProductCatalogue(currentArray)

}

function toggleDisplay(divID, id) {
    var div = document.getElementById(divID);
    var icon_id = document.getElementById(id);
    if (div.style.display === "none") {
        div.style.display = "block";
        icon_id.innerText = 'remove';
    } else {
        div.style.display = "none";
        icon_id.innerText = 'add';
    }
}

async function addfilter() {

    clearLocalStorge();

    var filters = [];
    var checkbox = document.getElementsByClassName('product-grid-checkmark');
    for (let i = 0; i < checkbox.length; i++) {

        if (checkbox[i].checked) {

            filters.push(checkbox[i].value);

        }
    }


    if (filters.length === 0) {

        data_div.innerHTML = "";
        allProducts()

    } else {

        let brands = []
        let colors = []
        let range = []

        for (let i = 0; i < filters.length; i++) {

            if (filters[i] == "Deny Designs" || filters[i] == "Oliver Gal" || filters[i] == "Chopvalue" || filters[i] == "Marimekko") {
                brands.push(filters[i])
            } else if (filters[i] == "0-2000" || filters[i] == "2001-4000" || filters[i] == "4001-10000" || filters[i] == "More than 10000") {
                range.push(filters[i])
            } else {
                colors.push(filters[i])
            }

        }

        let x;

        if (brands.length && colors.length && range.length) {

            let presentbrands = brands.join(",")
            let presentcolors = colors.join(",")
            let presentranges = range.join(",")

            x = encodeURI(`http://nordstrom-cloned.herokuapp.com/products/filters?brands=${presentbrands}&colors=${presentcolors}&ranges=${presentranges}`)

        } else if (brands.length && colors.length) {

            let presentbrands = brands.join(",")
            let presentcolors = colors.join(",")

            x = encodeURI(`http://nordstrom-cloned.herokuapp.com/products/filters?brands=${presentbrands}&colors=${presentcolors}`)

        } else if (brands.length && range.length) {

            let presentbrands = brands.join(",")
            let presentranges = colors.join(",")

            x = encodeURI(`http://nordstrom-cloned.herokuapp.com/products/filters?brands=${presentbrands}&ranges=${presentranges}`)

        } else if (colors.length && range.length) {

            let presentcolors = colors.join(",")
            let presentranges = range.join(",")

            x = encodeURI(`http://nordstrom-cloned.herokuapp.com/products/filters?colors=${presentcolors}&ranges=${presentranges}`)

        } else if (brands.length) {

            let presentbrands = brands.join(",")

            x = encodeURI(`http://nordstrom-cloned.herokuapp.com/products/filters?brands=${presentbrands}`)

        } else if (colors.length) {
            let presentcolors = colors.join(",")

            x = encodeURI(`http://nordstrom-cloned.herokuapp.com/products/filters?colors=${presentcolors}`)
        } else {

            let presentranges = range.join(",")

            x = encodeURI(`http://nordstrom-cloned.herokuapp.com/products/filters?ranges=${presentranges}`)

        }

        let response = await fetch(x)

        products = await response.json();

        currentArray = products;

        await createProductCatalogue(currentArray)

    }

}


let pr_arr;

function createProductCatalogue(products) {

    currentArray = products

    console.log(products)

    data_div.innerHTML = "";

    products.forEach(function (product) {

        var div = document.createElement('div');
        div.setAttribute('class', 'product-grid-product-data');

        var p_name = document.createElement('p');
        p_name.innerText = product.name;

        var p_price = document.createElement('p');
        p_price.style.fontWeight = '600';
        p_price.setAttribute('id', 'product-grid-product-price');
        p_price.innerText = "INR " + product.price;

        var p_brand = document.createElement('p');
        p_brand.innerText = product.brand_id.brand_name;

        var a = document.createElement('a');
        a.href = `http://nordstrom-cloned.herokuapp.com/products/${product._id}`

        var image = document.createElement('img');
        image.src = product.images[0];

        var description = document.createElement('a');
        description.href = `http://nordstrom-cloned.herokuapp.com/products/${product._id}`
        description.setAttribute('id', 'product-grid-description');
        description.innerText = product.brand_id.brand_name + " " + product.name;

        var productText = document.createElement('div');
        productText.setAttribute('id', 'product-grid-product-text');

        var quick_view = document.createElement('div');
        quick_view.setAttribute('id', 'product-grid-quick-view');
        var quick_view_text = document.createElement('p');
        quick_view_text.innerText = "Quick View";
        quick_view.appendChild(quick_view_text);

        quick_view.onclick = function () {
            openModal(product);
        }


        if (product.rating) {
            var rating = document.createElement('p');
            for (let i = 1; i <= product.rating; i++) {
                var star = document.createElement('span');
                star.innerHTML = '<span>&#9733;</span>';
                rating.appendChild(star);
            }

            var rating_count = document.createElement('span');
            rating_count.innerText = ` (${product.rating})`;
            rating.appendChild(rating_count);

            productText.append(quick_view, description, p_price, rating);
        } else {
            productText.append(quick_view, description, p_price);
        }

        a.append(image)

        div.append(a, productText);
        div.onmouseenter = function () {
            quick_view.style.visibility = 'visible';
        }

        div.onmouseleave = function () {
            quick_view.style.visibility = 'hidden';
        }
        data_div.appendChild(div);

        var itemCount = document.getElementById('product-grid-itemCount');
        itemCount.innerText = `${currentArray.length} items`;


        if (!localStorage.getItem('productIDs')) {

            localStorage.setItem('productIDs', JSON.stringify([product._id]));

        } else {

            pr_arr = JSON.parse(localStorage.getItem("productIDs"));

            pr_arr.push(`${product._id}`);

            localStorage.setItem("productIDs", JSON.stringify(pr_arr));
        }

    })
}


function clearLocalStorge() {
    localStorage.removeItem("productIDs");
}

async function allProducts() {

    console.log("inside allProducts")

    let response = await fetch("http://nordstrom-cloned.herokuapp.com/products/all")

    products = await response.json();

    await createProductCatalogue(products)
}


allProducts()


window.onload = function () {
    localStorage.removeItem("productIDs");
    verfiyUserDetails();
}



var closeBtn = document.getElementById('product-grid-closeBtn');
var modal = document.getElementById('product-grid-modalBox');
var modalContent = document.getElementById('product-grid-modal-content');
var container = document.getElementById('product-grid-main-container');
var modalImage = document.getElementById('product-grid-modal-img');
var footer = document.getElementById('product-grid-footer');

function openModal(product) {

    var image = document.createElement('img');
    image.src = product.images[0];
    modalImage.appendChild(image);

    var p_name = document.createElement('p');
    p_name.innerText = product.name;
    p_name.setAttribute('id', 'product-grid-modal-product-name');

    var p_brand = document.createElement('p');
    p_brand.innerText = product.brand_id.brand_name.toUpperCase();
    p_brand.setAttribute('id', 'product-grid-modal-product-brand');

    var p_price = document.createElement('p');
    p_price.innerText = "INR " + product.price;
    p_price.setAttribute('id', 'product-grid-modal-product-price');

    var p_priceContent = document.createElement('p');
    p_priceContent.innerText = "Price varies with currency exchange rates and may be different than in store.";
    p_priceContent.setAttribute('id', 'product-grid-modal-product-price-content');

    var p_about = document.createElement('p');
    p_about.innerText = product.description;
    p_about.setAttribute('id', 'product-grid-modal-product-about');

    var p_addToBagBtn = document.createElement('button');
    p_addToBagBtn.innerHTML = `<div><span class="material-icons">shopping_bag</span></div><p id="bagadd">Add to Bag</p>`;
    p_addToBagBtn.setAttribute('id', 'product-grid-modal-product-addToBag');
    p_addToBagBtn.onclick = function () {
        addToBag(product);
    }

    var p_add = document.createElement('p');
    p_add.setAttribute('id', 'product-grid-modal-product-add')
    p_add.innerHTML = `<span class="material-icons">add</span><p id="wish">Add to Wish List</p>`;
    p_add.onmouseover = function () {
        p_add.style.textDecoration = 'underline';
    }
    p_add.onclick = function () {
        addToWishlist(product);
    }

    p_add.onmouseout = function () {
        p_add.style.textDecoration = 'none';
    }

    var p_seeDetails = document.createElement('p');
    p_seeDetails.setAttribute('id', 'product-grid-modal-product-details');
    p_seeDetails.innerText = 'See full details';
    p_seeDetails.style.textDecoration = 'underline';
    p_seeDetails.onmouseover = function () {
        p_seeDetails.style.textDecorationThickness = "2px"
    }
    p_seeDetails.onclick = function () {
        window.location.href = `http://nordstrom-cloned.herokuapp.com/products/${product._id}`
    }

    p_seeDetails.onmouseout = function () {
        p_add.style.textDecoration = 'none';
        p_seeDetails.style.textDecorationThickness = "0px"
    }


    modalContent.append(p_name, p_brand, p_price, p_priceContent, p_about, p_addToBagBtn, p_add, p_seeDetails);
    modal.style.display = 'block';
    container.style.filter = 'blur(6px)';
}

 async function closeModal() {
    modal.style.display = "none";
    modalImage.innerHTML = "";
    modalContent.innerHTML = "";
    container.style.filter = "blur(0px)";

    let sid = localStorage.getItem("sid");

    var items = await getShoppingBagItems(sid);
    var quantity = 0;

    for (k in items) {
        quantity += items[k].quantity;
    }

    var itemsInBag = document.getElementById('itemsInBag');
    itemsInBag.innerText = `(${quantity})`;

}

getShoppingBagItems = async (shopping_bag_id) => {
    const response = await fetch(`http://nordstrom-cloned.herokuapp.com/shoppingBagDetails/details/${shopping_bag_id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    const data = await response.json();
    const items = data.items;

    return items;
}


addToBag = async (product) => {

    let bagadd = document.getElementById('bagadd');

    if (localStorage.getItem('uid')) {

        let sid = localStorage.getItem("sid");

        //shud add the product to the bag

        //if product already present in shopping bag then just increase the quantity of the product using patch

        // 1st - find and get the document using product id & shopping bag id, get the quantity. , flag wud be length of the received collection.
        // 2nd - patch the document and increase the quantity by 1.


        let response = await fetch(`http://nordstrom-cloned.herokuapp.com/shoppingBagDetails/product/${product._id}/${sid}`, (
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ));

        var res = await response.json();
        console.log(res);

        if (res.length) {

            let response = await fetch(`http://nordstrom-cloned.herokuapp.com/shoppingBagDetails/product/${res[0]._id}`, (
                {
                    method: 'PATCH',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "quantity": res[0].quantity + 1,
                    })
                }
            ));

            var res = await response.json();
            console.log(res);

        } else {

            let response = await fetch("http://nordstrom-cloned.herokuapp.com/shoppingBagDetails", (
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "product_id": product._id,
                        "shopping_bag_id": sid,
                        "quantity": 1,
                        "ordered_flag": false,
                    })
                }
            ));

            var res = await response.json();
            console.log(res);
        }

        bagadd.textContent = 'Added To The Bag';

    } else {

        //shud be taken to sigin page
        localStorage.setItem('recently_visited_product_id', product._id);
        window.location.href = "/login"
    }
}


//wid - wishlist id
//sid - shopping bag id

addToWishlist = async (product) => {

    let wish = document.getElementById("wish")
    
    if (localStorage.getItem('uid')) {

        let wid = localStorage.getItem("wid");

        //if product already present in wishlist then dnt add it


        let response = await fetch(`http://nordstrom-cloned.herokuapp.com/wishlistDetails/product/${product._id}/${wid}`, (
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
        ));

        var res = await response.json();

        if (res.length) {
            wish.textContent = "Product has already been added in your wishlist"
        } else {

            let response = await fetch(`http://nordstrom-cloned.herokuapp.com/wishlistDetails`, (
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "wishlist_id": wid,
                        "product_id": product._id,
                    })
                }
            ));

            var res = await response.json();
            console.log(res);

            wish.textContent = "Product Added In Your Wishlist"

        }

    } else {

        //shud be taken to sigin page

        localStorage.setItem('recently_visited_product_id', product._id);
        window.location.href = "/login"
    }


}