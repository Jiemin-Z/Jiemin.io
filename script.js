fetch("about.txt")
.then(response => response.text())
.then(text => {
    document.getElementById("about-text").innerText = Text;
});