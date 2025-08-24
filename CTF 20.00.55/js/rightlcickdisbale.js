
// Disable right-click on the entire document
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

if (window.console && (window.console.firebug || window.console.exception)) {
    alert('Please close the console to continue.');
}