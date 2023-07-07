// THIS IS WHERE ALL THE INTERACTIVITY WILL BE //


window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

