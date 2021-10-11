// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.

// const e = new HtmlElement();
// e.click() and e.focus();

// Then, create "HtmlSelectElement" with items(optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.

class HtmlElement {
  click() {
    console.log("CLICK");
  }
}

class ExtendedHtmlElement extends HtmlElement {
  focus() {
    console.log("FOCUS");
  }
}
const e = new ExtendedHtmlElement();
e.click();
e.focus();

class HtmlSelectElement extends ExtendedHtmlElement {
  constructor(private items: string[] = []) {
    super();
  }

  showItems() {
    return this.items;
  }

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(item: string) {
    if (this.items.length && this.items.includes(item)) {
      let itemIndex: number = this.items.indexOf(item);
      if (itemIndex !== -1) this.items.splice(itemIndex, 1);
    } else {
      throw new Error("Name of element not found");
    }
    console.log(`Removed "${item}" from array`);
    return this.items;
  }
}

const arr: string[] = ["div", "span", "article", "main", "footer", "nav"];
const selectElement = new HtmlSelectElement(arr);

console.log(selectElement.showItems());

selectElement.addItem("li");

console.log(selectElement.showItems());
console.log(selectElement.removeItem("main"));
console.log(selectElement.showItems());

selectElement.focus();
selectElement.click();

const emptyElement = new HtmlSelectElement();
console.log(emptyElement.showItems());
emptyElement.addItem("customTag");
console.log(emptyElement.showItems());
