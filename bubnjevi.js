document.addEventListener("keypress", function(e) {
    zvuk(e.key);
})

let gumbi = document.querySelectorAll('button');
gumbi.forEach(gumb => gumb.addEventListener('click', function() {
    zvuk(this.innerHTML);
    gumb.classList.add("animacija");

    setTimeout(function() {
        gumb.classList.remove("animacija");
    }, 100);
}));



function zvuk(key) {
    switch (key) {
        case "q":
            let zvuk1 = new Audio("zvukovi/crash.mp3");
            zvuk1.play();
            break;

        case "w":
            let zvuk2 = new Audio('zvukovi/kick-bass.mp3');
            zvuk2.play();
            break;

        case "e":
            let zvuk3 = new Audio('zvukovi/snare.mp3');
            zvuk3.play();
            break;

        case "r":
            let zvuk4 = new Audio('zvukovi/tom-1.mp3');
            zvuk4.play();
            break;

        case "t":
            let zvuk5 = new Audio('zvukovi/tom-2.mp3');
            zvuk5.play();
            break;

        case "z":
            let zvuk6 = new Audio('zvukovi/tom-3.mp3 ');
            zvuk6.play();
            break;

        case "u":
            let zvuk7 = new Audio('zvukovi/tom-4.mp3');
            zvuk7.play();
            break;
    }
}