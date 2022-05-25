function lightMode() {
    var target1 = document.body;
    target1.classList.toggle("dark-mode");
    if (document.getElementById("switch").checked === true) {
        document.getElementById("switch").backgroundImage = "images/sun.jpeg";
        document.getElementById("Resume").src = "images/resume_black.png";
        document.getElementById("GitHub").src = "images/github_black.png";
        document.getElementById("wca").src = "images/rubik.png";
        document.getElementById("tab1").style.color = "black";
        document.getElementById("tab2").style.color = "black";
    } else {
        document.getElementById("switch").backgroundImage = "images/moon.jpeg";
        document.getElementById("Resume").src = "images/resumelogo.png";
        document.getElementById("GitHub").src = "images/githublogo2.png";
        document.getElementById("wca").src = "images/rubik_dark.png";
        document.getElementById("tab1").style.color = "white";
        document.getElementById("tab2").style.color = "white";
    }
}