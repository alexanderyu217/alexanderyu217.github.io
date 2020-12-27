const thresh = .25;
const pageNames = ["about", "skills", "experience", "projects", "contact"];

const navAdjust = function(event) {
    height = window.innerHeight;
    currY = window.scrollY;
    if (currY > height * thresh) {
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
            elems[i].style.opacity = Math.abs((height * thresh) - currY)/(height * thresh);
        }
        var elems = document.querySelectorAll('.home-link');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "block";
            elems[i].style.opacity = Math.abs((height * thresh) - currY)/(height * thresh);
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
            elems[i].style.opacity = Math.abs((height * thresh) - currY)/(height * thresh);
        }
        var elems = document.querySelectorAll('.home-link');
        for (var i = 0; i < elems.length; i++) {
            elems[i].style.display = "none";
            elems[i].style.opacity = Math.abs((height * thresh) - currY)/(height * thresh);
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
    if (currY < thresh * height) {
        icons.style.left = String(15 * (thresh * height - currY) / (thresh * height) + 1) + "%";
        icons.style.bottom = String(44 * (thresh * height - currY) / (thresh * height) + 1) + "%";
    } else {
        icons.style.left = "1%";
        icons.style.bottom = "1%";
    }
}

window.addEventListener("scroll", navAdjust);
window.addEventListener("scroll", navPointer);
window.addEventListener("scroll", adjustIcons);