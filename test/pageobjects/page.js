/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    open () {
         browser.url(`http://127.0.0.1:5500/index.html`)
    }
}
