var e=document.querySelector("body"),n=document.createElement("div");n.id="tree",e.prepend(n),function e(n,t){var r=document.createElement("ul");for(var a in t){var c=document.createElement("li");c.textContent=a,r.append(c),Object.keys(t[a]).length>0&&e(c,t[a])}n.append(r)}(n,{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.4572dde7.js.map
