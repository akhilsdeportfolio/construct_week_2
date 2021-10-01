let currentArray; let products;

let data_div = document.getElementById('product-grid-data');


let sortBy = (value) => {

    if (value === 'lowToHigh') {
        sorting(1)
    } else if (value === 'highToLow') {
        sorting(-1)
    } else if (value === "newest") {
        window.location.href= "http://localhost:5000/products/"
    }
}


async function sorting(x) {


    let ids = JSON.parse(localStorage.getItem("productIDs"))

    console.log(ids)

    let response = await fetch(`http://localhost:5000/products/${x}/sort?ids=${ids}`)

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


// /filter/:brand

// filter/?brands=nike,puma,adida&color=pink,red,white


async function addfilter() {

    clearLocalStorge();

    var brandfilters = [];
    var checkbox = document.getElementsByClassName('product-grid-checkmark');
    for (let i = 0; i < checkbox.length; i++) {

        if (checkbox[i].checked) {

            brandfilters.push(checkbox[i].value);

        }
    }

    console.log(brandfilters)


    if (brandfilters.length === 0) {

        data_div.innerHTML = "";
        allProducts()

    } else {

        let brands = []
        let colors = []
        let range = []

        for (let i = 0; i < brandfilters.length; i++) {

            if (brandfilters[i] == "Deny Designs" || brandfilters[i] == "Oliver Gal" || brandfilters[i] == "Chopvalue" || brandfilters[i] == "Marimekko") {
                brands.push(brandfilters[i])
            } else if(brandfilters[i] == "0-2000" || brandfilters[i] == "2001-4000" || brandfilters[i] == "4001-10000" || brandfilters[i] == "More than 10000") {
                range.push(brandfilters[i])
            }else{
                colors.push(brandfilters[i])
            }

        }
        console.log(brands, colors, range)

        let x;

        if (brands.length && colors.length && range.length) {

            let presentbrands = brands.join(",")
            let presentcolors = colors.join(",")
            let presentranges = range.join(",")

            x = encodeURI(`http://localhost:5000/products/filters?brands=${presentbrands}&colors=${presentcolors}&ranges=${presentranges}`)

        } else if (brands.length && colors.length) {

            let presentbrands = brands.join(",")
            let presentcolors = colors.join(",")

            x = encodeURI(`http://localhost:5000/products/filters?brands=${presentbrands}&colors=${presentcolors}`)

        } else if(brands.length && range.length){

            let presentbrands = brands.join(",")
            let presentranges = colors.join(",")

            x = encodeURI(`http://localhost:5000/products/filters?brands=${presentbrands}&ranges=${presentranges}`)

        }else if(colors.length && range.length){

            let presentcolors = colors.join(",")
            let presentranges = range.join(",")

            x = encodeURI(`http://localhost:5000/products/filters?colors=${presentcolors}&ranges=${presentranges}`)

        }else if(brands.length){

            let presentbrands = brands.join(",")

            x = encodeURI(`http://localhost:5000/products/filters?brands=${presentbrands}`)

        }else if(colors.length){
            let presentcolors = colors.join(",")

            x = encodeURI(`http://localhost:5000/products/filters?colors=${presentcolors}`)
        }else{

            let presentranges = range.join(",")

            x = encodeURI(`http://localhost:5000/products/filters?ranges=${presentranges}`)

        }

        console.log(x)
        let response = await fetch(x)

        products = await response.json();

        console.log(products)

        currentArray = products;

        await createProductCatalogue(currentArray)

    }

}


let pr_arr;

function createProductCatalogue(products) {

    currentArray = products

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
        a.href = `http://localhost:5000/products/${product._id}`

        var image = document.createElement('img');
        image.src = product.images[0];

        var description = document.createElement('a');
        description.href = `http://localhost:5000/products/${product._id}`
        description.setAttribute('id', 'product-grid-description');
        description.innerText = product.brand_id.brand_name + " " + product.name;

        var productText = document.createElement('div');
        productText.setAttribute('id', 'product-grid-product-text');

        var quick_view = document.createElement('div');
        quick_view.setAttribute('id', 'product-grid-quick-view');
        var quick_view_text = document.createElement('p');
        quick_view_text.innerText = "Quick View";
        quick_view.appendChild(quick_view_text);


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

            //append
            console.log(localStorage.getItem('productIDs'));
            pr_arr=JSON.parse(localStorage.getItem("productIDs"));
            console.log(typeof pr_arr)
            pr_arr.push(`${product._id}`);

            localStorage.setItem("productIDs",JSON.stringify(pr_arr));
        }

    })
    console.log(JSON.parse(localStorage.getItem("productIDs")).length)
}



function clearLocalStorge()
{
    localStorage.removeItem("productIDs");
}

async function allProducts() {

    let response = await fetch("http://localhost:5000/products/all")

    products = await response.json();

    await createProductCatalogue(products)
}


allProducts()


window.onload = function() {
    localStorage.removeItem("productIDs");
  }

