// Design two objects, HtmlElement and HtmlSelectElement.
// HtmlElement has "click" instance method and "focus" prototype method.

// const e = new HtmlElement();
// e.click() and e.focus();

// Then, create "HtmlSelectElement" with items(optional), addItem, removeItem members.
// HtmlSelectElement needs to inherit "click" and "focus" methods.

function HtmlElement() {
  this.click = function () {
    console.log(`CLICK`);
  };
}

HtmlElement.prototype.focus = function () {
  console.log(`FOCUS`);
};

const e = new HtmlElement();
e.click();
e.focus();

HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlSelectElement(items = []) {
  HtmlElement.call(this);

  this.items = items;

  this.showItems = function () {
    if (!this.items) return (this.items = []);
    else return this.items;
  };

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    if (this.items.length && this.items.includes(item)) {
      let itemIndex = this.items.indexOf(item);
      if (itemIndex !== -1) this.items.splice(itemIndex, 1);
    } else {
      throw new Error("Name of element not found");
    }
    console.log(`Removed "${item}" from array`);
    return this.items;
  };
}

const arr = ["div", "span", "article", "main", "footer", "nav"];
const selectElement = new HtmlSelectElement(arr);

console.log(selectElement.showItems());

selectElement.addItem("li");
selectElement.addItem("aside");

console.log(selectElement.showItems());
console.log(selectElement.removeItem("main"));
console.log(selectElement.removeItem("span"));
console.log(selectElement.showItems());

// testing with empty new instance

const emptyElement = new HtmlSelectElement([]);
console.log(emptyElement.showItems());
emptyElement.addItem("customTag");
console.log(emptyElement.showItems());

selectElement.focus();
selectElement.click();
