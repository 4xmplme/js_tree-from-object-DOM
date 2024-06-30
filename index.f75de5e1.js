"use strict";
const food = {
    Drink: {
        Wine: {},
        Schnaps: {}
    },
    Fruit: {
        Red: {
            Cherry: {},
            Strawberry: {}
        },
        Yellow: {
            Banana: {},
            Pineapple: {}
        }
    }
};
const body = document.querySelector("body");
const tree = document.createElement("div");
tree.id = "tree";
body.prepend(tree);
function createTree(element, data) {
    const list = document.createElement("ul");
    for(const key in data){
        const listItem = document.createElement("li");
        listItem.textContent = key;
        list.append(listItem);
        if (Object.keys(data[key]).length > 0) createTree(listItem, data[key]);
    }
    element.append(list);
}
createTree(tree, food);

//# sourceMappingURL=index.f75de5e1.js.map
