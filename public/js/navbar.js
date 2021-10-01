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