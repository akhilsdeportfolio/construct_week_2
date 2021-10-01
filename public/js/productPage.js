let sortBy = (value) =>{

    if (value === 'lowToHigh') {
            sorting(1)
        } else if (value === 'highToLow') {
            sorting(-1)
        }else if(value==="newest"){
            window.location.href = `http://localhost:5000/products`
        }
    }


    function sorting(x) {

        window.location.href = `http://localhost:5000/products/${x}/sort`

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




    // async function addfilter(brand){

    //     // let x = encodeURI(`http://localhost:5000/products/filters?brands=${brand}`)

        
    //     // let response = await fetch(x)

    //     // let data = await response.json();

    //     // console.log(data)

    //     window.location.href = encodeURI(`http://localhost:5000/products/filters?brands=${brand}`)
        
    // }


    // 
    
    //let response = await fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyCmuTsKYLleCQb2xTJCcVihwjwRRN92u7Q')

    
    // window.location.href = encodeURI(`http://localhost:5000/products/filters?brands=${brand},${brand},${brand}&color=${color}`)


    let currentArray; let products;

    let data_div = document.getElementById('product-grid-data');

    async function createProductCatalogue(pro) {


        products = await allProducts()

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
            description.href=`http://localhost:5000/products/${product._id}`
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

        })
    }


    async function allProducts(){
        
        let response = await fetch("http://localhost:5000/products/all")

        products = await response.json();
        
        return products
    }

    let pro;

    createProductCatalogue(pro)
