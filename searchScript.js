// Get the iframe element
var iframe = document.getElementById("search-frame");

// Get the document object of the iframe
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

// Get the element from the iframe document
const searchbox = iframeDoc.getElementById("search_form_input_homepage");

// detect when the person presses ctrl + f
document.addEventListener("keydown", (event) => {
    // check if Ctrl + F has been pressed
    if (event.ctrlKey && event.key === "f") {
        event.preventDefault();
        searchbox.focus();
    }
});