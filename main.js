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

const aboutGeneral = function(event) {
    document.getElementById("profile-photo").src = "media/profile.jpeg";
    document.getElementById("about-text").innerHTML = "Hi! I'm Alex, an engineering student at UC Berkeley who loves building things.<br/><br/>I'm a super hands-on type of learner who's constantly looking for opportunities to tackle new challenges and solve problems.<br/><br/>In my free time I love rock climbing, skiing, playing poker, and hanging out with friends. I've also started dabbling in photography and video editing.";
}

const aboutWushu = function(event) {
    document.getElementById("profile-photo").src = "media/wushu.JPG";
    document.getElementById("about-text").innerHTML = "I was a two-time world champion, two-time pan-american champion, and multi-time national champion in Wushu (Chinese martial arts). <br/><br/>My parents were both professional Wushu athletes from China. My father grew up training on the Beijing Wushu Team with actor Jet-Li. My mother won 32 gold medals in her professional career.<br/><br/>I basically grew up at my family's Wushu school and started training at the age of four. By high school, I was regularly competing for Team USA in international Wushu and Taijiquan competitions. Most recently, I competed for Team USA in Bulgaria in 2018 for the 3rd World Taijiquan Championships. Click <a href='https://youtu.be/EgfUgZUINJE?t=7317' target='_blank'>here</a> for a video."
}

const aboutEngineering = function(event) {
    document.getElementById("profile-photo").src = "media/chassis.png";
    document.getElementById("about-text").innerHTML = "My passion for engineering started when I was very young. I've loved building things for as long as I can remember. I grew up doing things like Science Olympiad and robotics.<br/><br/>In my freshman year of college, I joined Berkeley Formula Racing where I was a member of the electrical department. <br/><br>Currently, I'm pursuing my passion for engineering through personal projects and I'm an incoming Engineering Intern at <a href='https://www.sofi.com/' target='_blank'>SoFi</a>.";
}

window.addEventListener("scroll", navAdjust);
window.addEventListener("scroll", navPointer);
window.addEventListener("scroll", adjustIcons);
document.getElementById("about-general").addEventListener("click", aboutGeneral);
document.getElementById("about-wushu").addEventListener("click", aboutWushu);
document.getElementById("about-engineering").addEventListener("click", aboutEngineering);