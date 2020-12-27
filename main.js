const navThresh = .25;
const iconThresh = .05;
const pageNames = ["about", "skills", "experience", "projects", "contact"];

const navAdjust = function(event) {
    height = window.innerHeight;
    currY = window.scrollY;
    if (currY > height * navThresh) {
        var elems = document.querySelectorAll('.nav-bar');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.width = "15%";
            elems[i].style.height = "25%";
            elems[i].style.marginLeft = "84%";
            elems[i].style.marginRight = "0%";
            elems[i].style.flexDirection = "column";
            elems[i].style.marginTop = "0%";
        }
        var elems = document.querySelectorAll('.nav-link');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.fontSize = "1.5vw";
            elems[i].style.textAlign = "right";
            elems[i].style.opacity = Math.abs((height * navThresh) - currY)/(height * navThresh);
        }
        var elems = document.querySelectorAll('.home-link');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
            elems[i].style.opacity = Math.abs((height * navThresh) - currY)/(height * navThresh);
        }
    } else {
        var elems = document.querySelectorAll('.nav-bar');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.width = "70%";
            elems[i].style.height = "4%";
            elems[i].style.marginLeft = "15%";
            elems[i].style.marginRight = "15%";
            elems[i].style.flexDirection = "row";
            elems[i].style.marginTop = "0%";
        }
        var elems = document.querySelectorAll('.nav-link');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.fontSize = "2.5vw";
            elems[i].style.textAlign = "left";
            elems[i].style.opacity = Math.abs((height * navThresh) - currY)/(height * navThresh);
        }
        var elems = document.querySelectorAll('.home-link');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
            elems[i].style.opacity = Math.abs((height * navThresh) - currY)/(height * navThresh);
        }
    }
}

const navPointer = function(event) {
    var currY = window.scrollY;
    var height = window.innerHeight;
    var currPage = Math.round(currY/height);
    console.log(currPage);
    var pages = document.querySelectorAll(".nav-link");
    for (var i = 0; i < pages.length; i++) {
        if (i + 1 == currPage) {
            pages[i].innerHTML = "<span class='nav-pointer'>>  </span>" + pageNames[i];
        } else {
            pages[i].innerHTML = pageNames[i];
        }
    }
}

const adjustIcons = function(event) {
    var currY = window.scrollY;
    var height = window.innerHeight;
    var icons = document.querySelector(".icons");
    if (currY < iconThresh * height) {
        icons.style.left = String(15 * (iconThresh * height - currY) / (iconThresh * height) + 1) + "%";
        icons.style.bottom = String(40 * (iconThresh * height - currY) / (iconThresh * height) + 1) + "%";
    } else {
        icons.style.left = "1%";
        icons.style.bottom = "1%";
    }
    var icons = document.querySelectorAll(".icon");
    if (currY < iconThresh * height) {
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.maxHeight = String(2 * (iconThresh * height - currY) / (iconThresh * height) + 2.5) + "%";
            icons[i].style.maxWidth = String(2 * (iconThresh * height - currY) / (iconThresh * height) + 2.5) + "%";
        }
    } else {
        for (var i = 0; i < icons.length; i++) {
            icons[i].style.maxHeight = "2.5%";
            icons[i].style.maxWidth = "2.5%";
        }
    }
}

window.addEventListener("scroll", navAdjust);
window.addEventListener("scroll", navPointer);
window.addEventListener("scroll", adjustIcons);