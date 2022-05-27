function lightModeIndex() {
    var target1 = document.body;
    target1.classList.toggle("dark-mode");
    if (document.getElementById("switch").checked === true) {
        document.getElementById("switch").backgroundImage = "images/sun.jpeg";
        document.getElementById("Resume").src = "images/resume_black.png";
        document.getElementById("Mail").src = "images/mail_white.png";
        document.getElementById("GitHub").src = "images/github_black.png";
        document.getElementById("wca").src = "images/rubik.png";
        document.getElementById("tab1").style.color = "black";
        document.getElementById("tab2").style.color = "black";
        document.getElementById("tab3").style.color = "black";
        document.getElementById("button").style.backgroundImage = "url('images/menu_black.png')";
        document.getElementById("button").style.backgroundColor = "white";
    } else {
        document.getElementById("switch").backgroundImage = "images/moon.jpeg";
        document.getElementById("Resume").src = "images/resumelogo.png";
        document.getElementById("Mail").src = "images/mail_black.png";
        document.getElementById("GitHub").src = "images/githublogo2.png";
        document.getElementById("wca").src = "images/rubik_dark.png";
        document.getElementById("tab1").style.color = "white";
        document.getElementById("tab2").style.color = "white";
        document.getElementById("tab3").style.color = "white";
        document.getElementById("button").style.backgroundImage = "url('images/menu_white.png')";
        document.getElementById("button").style.backgroundColor = "black";
    }
}

function lightModeNormal() {
    var target1 = document.body;
    target1.classList.toggle("dark-mode");
    if (document.getElementById("switch").checked === true) {
        document.getElementById("tab1").style.color = "black";
        document.getElementById("tab2").style.color = "black";
        document.getElementById("tab3").style.color = "black";
        document.getElementById("button").style.backgroundImage = "url('images/menu_black.png')";
        document.getElementById("button").style.backgroundColor = "white";
    } else {
        document.getElementById("tab1").style.color = "white";
        document.getElementById("tab2").style.color = "white";
        document.getElementById("tab3").style.color = "white";
        document.getElementById("button").style.backgroundImage = "url('images/menu_white.png')";
        document.getElementById("button").style.backgroundColor = "black";
    }
}
function showTabs() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}