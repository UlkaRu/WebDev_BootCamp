function onHover() {
    $('.icon-share-button #icon-img').attr('src', 'https://www.dropbox.com/s/0dorkaumu98rte6/icon-share-white.svg?raw=1');
}
function offHover() {
    $('.icon-share-button #icon-img').attr('src', 'https://www.dropbox.com/s/0dorkaumu98rte6/icon-share-white.svg?raw=1');
}
// When the user clicks on <div>, open the popup
function onPopup() {
    var x = window.matchMedia("(max-width: 520px)")
    if (x.matches) { // If media query matches
        var element = document.getElementById("toggle-personal-info");
        element.classList.toggle("toggle-personal-info-style");

        var elementTwo = document.getElementById("mobile-bottom-section");
        elementTwo.classList.toggle("mobile-bottom-section-style");

        var elementThree = document.getElementById("share-bottom-section");
        elementThree.classList.toggle("share-bottom-section-style");
    } else {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }
}