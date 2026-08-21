fetch("./article1.md")
.then(response => response.text())
.then(markdown => {
    document.getElementById("article1").innerHTML = marked.parse(markdown);
});

fetch("./about.md")
.then(response => response.text())
.then(markdown => {
    document.getElementById("about").innerHTML = marked.parse(markdown);
});