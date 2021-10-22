var modal = document.getElementById("simpleModal")

var blur_effect = document.getElementById("product-grid-header")

window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
        blur_effect.removeAttribute("class", "blur")
        localStorage.setItem("flag", "false")
    }
})

var closeBtn = document.getElementById("closeBtn")
closeBtn.addEventListener("click", function () {
    modal.style.display = "none"
    blur_effect.removeAttribute("class", "blur")
    localStorage.setItem("flag", "false")
})


function pageContent() {

    var completeDiv1 = document.createElement("div");
    completeDiv1.setAttribute("id", "completeDiv")

    var completeDiv2 = document.createElement("div");
    completeDiv2.setAttribute("id", "completeDiv2")

    var insideDiv1 = document.createElement("div");
    var insideDiv2 = document.createElement("div");
    var insideDiv3 = document.createElement("div");

    var highlight = document.createElement("h3")
    highlight.setAttribute("id", "highlight")

    var line = document.createElement("p")

    var linktext = document.createElement("a")
    linktext.setAttribute("href", "")

    var highlight_array = ["Get a $40 Bonus Note!", "Pick Up Today—in Store or Curbside"]
    var line_array = ["An exclusive offer for new Nordstrom credit cardmembers. Restrictions apply", ""]
    var link_array = ["Apply Now", "Set Your Store"]
    var i = 0;


    var images = ["https://n.nordstrommedia.com/id/2127fce3-8923-40ae-afb0-f792b13dfce8.jpeg?h=600&w=1608", "https://n.nordstrommedia.com/id/b518bc18-f2f8-41c1-b52c-53e56ff66053.jpeg?h=600&w=1608"]

    var displayimage = document.createElement("img")

    displayimage.setAttribute("id", "coverImg")


    var insideline = document.createElement("p")

    var insidelineDiv = document.createElement("div")

    insideline_array = ["Global perspectives meet classic clothing. See American style through a whole new lens.", ""]

    var insidetext1 = document.createElement("a")
    insidetext1.setAttribute("href", "")

    insidetext1_array = ["Explore", ""]

    var insidetext2 = document.createElement("a")
    insidetext2.setAttribute("href", "")


    insidetext2_array = ["Shop", ""]

    var insidetext = document.createElement("div")

    insidelineDiv.append(insideline)
    insidetext.append(insidetext1, insidetext2)


    var divOverImage = document.createElement("div")
    divOverImage.setAttribute("id", "divOverImage")

    divOverImage.append(insidelineDiv, insidetext)

    // console.log(divOverImage)


    var h3content = document.createElement("h2")
    h3_array = ["", "Fall's Best Denim"]

    var pcontent = document.createElement("p")
    pcontent_array = ["", "Get into fresh silhouettes and washes from MOTHER, Good American and more."]

    var acontent = document.createElement("a")
    acontent_array = ["", "Jeans & Denim"]

    var anotherDiv = document.createElement("div")

    anotherDiv.append(h3content, pcontent, acontent)
    anotherDiv.setAttribute("id", "anotherDiv")

    function changeContent() {

        highlight.textContent = highlight_array[i]
        line.textContent = line_array[i]
        linktext.textContent = link_array[i]
        displayimage.src = images[i]


        insideline.textContent = insideline_array[i]
        insidetext1.textContent = insidetext1_array[i]
        insidetext2.textContent = insidetext2_array[i]

        h3content.textContent = h3_array[i]
        pcontent.textContent = pcontent_array[i]
        acontent.textContent = acontent_array[i]

        if (i < highlight_array.length - 1) {
            i++

            if (line_array[i] == "") {
                highlight.style.marginTop = "10px"
            } else {
                highlight.style.marginTop = "5px"
            }
        } else {
            i = 0
        }

        setTimeout(changeContent, 3000)
    }

    changeContent();

    var btn1 = document.createElement("button")
    btn1.setAttribute("id", "leftArrowbtn")


    btn1.addEventListener("mouseover", function () {
        var select = document.querySelector("#leftArrowbtn")
        select.setAttribute("class", "mouseIn")
    })

    btn1.addEventListener("mouseleave", function () {
        var select = document.querySelector("#leftArrowbtn")
        select.setAttribute("class", "mouseOut")
    })

    var btn2 = document.createElement("button")
    btn2.setAttribute("id", "rightArrowbtn")

    btn2.addEventListener("mouseover", function () {

        var select = document.querySelector("#rightArrowbtn")
        select.setAttribute("class", "mouseIn")
    })

    btn2.addEventListener("mouseleave", function () {
        var select = document.querySelector("#rightArrowbtn")
        select.setAttribute("class", "mouseOut")
    })

    var leftArrow = document.createElement("h1")
    leftArrow.textContent = "<"
    leftArrow.setAttribute("class", "arrow")

    var rightArrow = document.createElement("h1")
    rightArrow.textContent = ">"
    rightArrow.setAttribute("class", "arrow")

    btn1.append(leftArrow)
    btn2.append(rightArrow)

    insideDiv1.append(btn1)
    insideDiv3.append(btn2)
    insideDiv2.append(highlight, line, linktext)

    completeDiv1.append(insideDiv1, insideDiv2, insideDiv3)
    completeDiv2.append(displayimage, divOverImage, anotherDiv)

    var mainDiv = document.createElement("div")
    mainDiv.append(completeDiv1, completeDiv2)

    mainDiv.setAttribute("id", "mainDiv")

    insideDiv2.addEventListener("mouseover", function () {
        var arrows = document.querySelectorAll(".arrow")

        for (var i = 0; i < arrows.length; i++) {
            arrows[i].style.color = "black"
        }
    })

    insideDiv2.addEventListener("mouseleave", function () {
        var arrows = document.querySelectorAll(".arrow")

        for (var i = 0; i < arrows.length; i++) {
            arrows[i].style.color = "rgb(245, 241, 241)"
        }
    })

    // document.body.append(mainDiv)

    blur_effect.append(mainDiv)


    //section from boots 

    var boots = document.createElement("div")
    boots.setAttribute("id", "boots")


    var boot1 = document.createElement("div")

    var boot1_img = document.createElement("img")
    boot1_img.src = "https://n.nordstrommedia.com/id/53ef2c80-f556-4df2-810c-3882cdff97a2.jpeg?h=600&w=804"

    var boot1_content = document.createElement("div")

    var boot1_h3 = document.createElement("h4")
    boot1_h3.textContent = "Trending Now: Lug-Sole Boots"

    var boot1_p = document.createElement("p")
    boot1_p.textContent = "Instantly update your outfits with this hot style."

    var boot1_a = document.createElement("a")
    boot1_a.textContent = "Boots"

    boot1_content.append(boot1_h3, boot1_p, boot1_a)

    boot1.append(boot1_img, boot1_content)


    var boot2 = document.createElement("div")

    var boot2_img = document.createElement("img")
    boot2_img.src = "https://n.nordstrommedia.com/id/ac185c19-10a1-49b3-ba83-6b384027020e.jpeg?h=600&w=804"

    var boot2_content = document.createElement("div")

    var boot2_h3 = document.createElement("h4")
    boot2_h3.textContent = "Set the Tone for Fall"

    var boot2_p = document.createElement("p")
    boot2_p.textContent = "Embrace the new season by giving your home a cozy refresh with chic accent pieces."

    var boot2_a = document.createElement("a")
    boot2_a.textContent = "All Home"

    boot2_content.append(boot2_h3, boot2_p, boot2_a)

    boot2.append(boot2_img, boot2_content)

    boots.append(boot1, boot2)

    blur_effect.append(boots)

    //black section

    var black_main_div = document.createElement("div")
    black_main_div.setAttribute("id", "black_main_div")

    var black_div = document.createElement("div")
    black_div.setAttribute("id", "black_div")

    var black = document.createElement("img")
    black.src = "https://n.nordstrommedia.com/id/dd10e890-214f-4c97-882a-5fc81d780eef.jpeg?h=200&w=1608"

    var black_p = document.createElement("p")
    black_p.textContent = "Shop the brands and get to know visionary creatives from the Black community."

    var black_inside_div = document.createElement("div")

    var black1_a = document.createElement("a")
    black1_a.textContent = "Explore Diversity, Inclusion & Belonging"

    var black2_a = document.createElement("a")
    black2_a.textContent = "Shop Black-Owned & Black-Founded Brands"

    black_inside_div.append(black1_a, black2_a)

    black_div.append(black_p, black_inside_div)

    black_main_div.append(black, black_div)

    blur_effect.append(black_main_div)

    //Nike section 

    var nike_main_div = document.createElement("div")
    nike_main_div.setAttribute("id", "nike_main_div")

    var nike_div = document.createElement("div")
    nike_div.setAttribute("id", "nike_div")

    var nike = document.createElement("img")
    nike.src = "https://n.nordstrommedia.com/id/86765119-fa40-4962-b532-c3367a388339.jpeg?h=600&w=1608"

    var nike_p = document.createElement("p")
    nike_p.textContent = "Y2K vibes have landed. Find exclusive styles, limited-quantity drops and more from the coolest brands in the game."

    var nike_inside_div = document.createElement("div")

    var nike1_a = document.createElement("a")
    nike1_a.textContent = "Shop NxN"

    var nike2_a = document.createElement("a")
    nike2_a.textContent = "Explore NxN"

    nike_inside_div.append(nike1_a, nike2_a)

    nike_div.append(nike_p, nike_inside_div)

    nike_main_div.append(nike, nike_div)

    blur_effect.append(nike_main_div)

    //orange lady

    var orange_main_div = document.createElement("div")
    orange_main_div.setAttribute("id", "orange_main_div")

    var orange_div = document.createElement("div")
    orange_div.setAttribute("id", "orange_div")

    var orange = document.createElement("img")
    orange.src = "https://n.nordstrommedia.com/id/0dbc4a07-61be-4801-b2c4-d7fb068f30f2.jpeg?h=600&w=1608"


    var orange_h4_div = document.createElement("div")
    orange_h4_div.setAttribute("id", "orange_h4_div")

    var orange1_h4 = document.createElement("h4")
    orange1_h4.textContent = "New Season,"
    var orange2_h4 = document.createElement("h4")
    var orange2_h4_strong = document.createElement("strong")
    orange2_h4_strong.textContent = "New Mood"

    orange2_h4.append(orange2_h4_strong)

    orange_h4_div.append(orange1_h4, orange2_h4)

    var orange_p = document.createElement("p")
    orange_p.textContent = "Discover the most coveted designer styles for fall."

    var orange_a = document.createElement("a")
    orange_a.textContent = "Designer"

    orange_div.append(orange_h4_div, orange_p, orange_a)

    orange_main_div.append(orange, orange_div)

    blur_effect.append(orange_main_div)


    //hoody guy

    var hoody_main_div = document.createElement("div")
    hoody_main_div.setAttribute("id", "hoody_main_div")

    var hoody_div = document.createElement("div")
    hoody_div.setAttribute("id", "hoody_div")

    var hoody = document.createElement("img")
    hoody.src = "https://n.nordstrommedia.com/id/aa2b1579-becf-478a-81a9-dda1b019988d.jpeg?h=598&w=1606"

    var hoody_h4_div = document.createElement("div")
    hoody_h4_div.setAttribute("id", "hoody_h4_div")

    var hoody_h4 = document.createElement("h4")
    hoody_h4.textContent = "Sustainable Style"

    var hoody_p = document.createElement("p")
    hoody_p.textContent = "Discover tentree, Teva and more brands that prioritize our one and only earth. "

    hoody_h4_div.append(hoody_h4, hoody_p)

    var hoody_a_div = document.createElement("div")
    hoody_a_div.setAttribute("id", "hoody_a_div")

    var hoody_a1 = document.createElement("a")
    hoody_a1.textContent = "Explore Sustainable Style"

    var hoody_a2 = document.createElement("a")
    hoody_a2.textContent = "tentree"

    var hoody_a3 = document.createElement("a")
    hoody_a3.textContent = "Teva"

    hoody_a_div.append(hoody_a1, hoody_a2, hoody_a3)

    hoody_div.append(hoody_h4_div, hoody_a_div)

    hoody_main_div.append(hoody, hoody_div)

    blur_effect.append(hoody_main_div)


    //shop by category

    var shop_main_div = document.createElement("div")
    shop_main_div.setAttribute("id", "shop_main_div")

    var shop_h4 = document.createElement("h4")

    var shop_p = document.createElement("p")

    var shop_strong = document.createElement("strong")
    shop_strong.textContent = "SHOP BY CATEGORY"

    shop_p.append(shop_strong)

    shop_h4.append(shop_p)


    var shop_img_div = document.createElement("div")
    shop_img_div.setAttribute("id", "shop_img_div")

    var shop_1_div = document.createElement("div")

    var shop_1img_div = document.createElement("img")
    shop_1img_div.src = "https://n.nordstrommedia.com/id/527b7d79-1633-4cad-a0b2-76a5fb208e61.jpeg?h=363&w=266"

    var shop_1h5_div = document.createElement("h5")
    shop_1h5_div.textContent = "Women"

    shop_1_div.append(shop_1img_div, shop_1h5_div)


    var shop_2_div = document.createElement("div")

    var shop_2img_div = document.createElement("img")
    shop_2img_div.src = "https://n.nordstrommedia.com/id/21ecbf01-ee99-4915-8e9f-5fa539fb9389.jpeg?h=363&w=266"

    var shop_2h5_div = document.createElement("h5")
    shop_2h5_div.textContent = "Designer"

    shop_2_div.append(shop_2img_div, shop_2h5_div)


    var shop_3_div = document.createElement("div")

    var shop_3img_div = document.createElement("img")
    shop_3img_div.src = "https://n.nordstrommedia.com/id/ccc9698a-a156-482b-a3d7-68adc29af954.jpeg?h=365&w=268"

    var shop_3h5_div = document.createElement("h5")
    shop_3h5_div.textContent = "Men"

    shop_3_div.append(shop_3img_div, shop_3h5_div)


    var shop_4_div = document.createElement("div")

    var shop_4img_div = document.createElement("img")
    shop_4img_div.src = "https://n.nordstrommedia.com/id/f477f59e-065c-456f-b8b2-80f6a950775a.jpeg?h=365&w=268"

    var shop_4h5_div = document.createElement("h5")
    shop_4h5_div.textContent = "Home"

    shop_4_div.append(shop_4img_div, shop_4h5_div)


    var shop_5_div = document.createElement("div")

    var shop_5img_div = document.createElement("img")
    shop_5img_div.src = "https://n.nordstrommedia.com/id/2f21958a-5c74-4299-a4c4-a3819c693734.jpeg?h=365&w=268"

    var shop_5h5_div = document.createElement("h5")
    shop_5h5_div.textContent = "Kids"

    shop_5_div.append(shop_5img_div, shop_5h5_div)


    var shop_6_div = document.createElement("div")

    var shop_6img_div = document.createElement("img")
    shop_6img_div.src = "https://n.nordstrommedia.com/id/6a83c715-5219-4cea-925f-0a1b75afe0df.jpeg?h=365&w=268"

    var shop_6h5_div = document.createElement("h5")
    shop_6h5_div.textContent = "Beauty & Fragrance"

    shop_6_div.append(shop_6img_div, shop_6h5_div)


    shop_img_div.append(shop_1_div, shop_2_div, shop_3_div, shop_4_div, shop_5_div, shop_6_div)

    shop_main_div.append(shop_h4, shop_img_div)

    blur_effect.append(shop_main_div)

    //Stay in touch

    var touch_main_div = document.createElement("div")
    touch_main_div.setAttribute("id", "touch_main_div")

    var touch_img_div = document.createElement("img")
    touch_img_div.src = "https://n.nordstrommedia.com/id/97312f94-3d15-428d-bf49-70656690cf33.jpeg?h=200&w=1608"

    var touch_text_div = document.createElement("div")
    touch_text_div.setAttribute("id", "touch_text_div")

    var touch_h2 = document.createElement("h2")
    touch_h2.textContent = "Stay in Touch"

    var touch_p = document.createElement("p")
    touch_p.textContent = "Sign up and stay in the know! Fashion, beauty, upcoming sales and events—we'll bring it all to you."

    var touch_a = document.createElement("a")
    touch_a.textContent = "Sign Up for Email"
    touch_a.setAttribute("href", "signin.html")

    touch_text_div.append(touch_h2, touch_p, touch_a)

    touch_main_div.append(touch_img_div, touch_text_div)

    blur_effect.append(touch_main_div)

}

pageContent();

// window.onload = calculateItemsInBag;

// var bagIcon = document.getElementById('bag-icon-text');
// var items = document.getElementById('itemsInBag');

// function calculateItemsInBag() {
//     items.innerText = "";
//     if (localStorage.getItem('logeduser') != null) {
//         var logeduser = JSON.parse(localStorage.getItem('logeduser'));
//         var key = `bag_${logeduser.email}`;
//         var bag = JSON.parse(localStorage.getItem(key));
//         localStorage.setItem('bag', JSON.stringify([]));
//     } else if (localStorage.getItem('logeduser') === null) {
//         var bag = JSON.parse(localStorage.getItem('bag'));
//         key = 'bag';
//     }


//     var totalItems = 0;

//     bag.forEach(function (product) {
//         totalItems += product.quantity;
//     })

//     items.innerText = `(${totalItems})`;
// }

// if (!localStorage.getItem("flag")) {
//     localStorage.setItem("flag", "true")
// }

// window.onload = function (e) {

//     if (localStorage.getItem("flag") == "true") {
//         modal.style.display = "block"
//         blur_effect.setAttribute("class", "blur")
//     }
// }