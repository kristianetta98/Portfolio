const links = document.querySelectorAll(".col-lg-9 > span");
for (let i = 0; i < links.length; i++ ) {
    links[i].onclick = function() {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"})
    }
}