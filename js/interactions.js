// scroll to top once you reach the bottom
window.addEventListener('scroll', () => {
    // spacio escrolable
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    console.log(Math.ceil(scrolled));
    console.log(scrollable);
    console.log("total" + document.documentElement.scrollHeight);
    // redondeando scrolled
    if ((Math.ceil(scrolled)) === scrollable) {
        document.getElementById("home").scrollIntoView();
        console.log(scrolled);
        console.log(scrollable);
    }
    // como scroll bottom sin crear un ciclo infinito, pendiente CAAM
    // else {
    //     if ((Math.ceil(scrolled)) === scrollable - scrollable) {
    //         document.getElementById("").scrollIntoView();
    //     }
    // }
    // }
});