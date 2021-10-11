"use strict";
class HtmlElement {
    constructor() { }
    click() {
        console.log("CLICK");
    }
    focus() {
        console.log("FOCUS");
    }
}
const e = new HtmlElement();
e.click();
e.focus();
class HtmlSelectElement extends HtmlElement {
    constructor(items = []) {
        super();
        this.items = items;
    }
    showItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        if (this.items.length && this.items.includes(item)) {
            let itemIndex = this.items.indexOf(item);
            if (itemIndex !== -1)
                this.items.splice(itemIndex, 1);
        }
        else {
            throw new Error("Name of element not found");
        }
        console.log(`Removed "${item}" from array`);
        return this.items;
    }
}
const arr = ["div", "span", "article", "main", "footer", "nav"];
const selectElement = new HtmlSelectElement(arr);
console.log(selectElement.showItems());
selectElement.addItem("li");
console.log(selectElement.showItems());
console.log(selectElement.removeItem("main"));
console.log(selectElement.showItems());
selectElement.focus();
selectElement.click();
const emptyElement = new HtmlSelectElement([]);
console.log(emptyElement.showItems());
emptyElement.addItem("customTag");
console.log(emptyElement.showItems());
