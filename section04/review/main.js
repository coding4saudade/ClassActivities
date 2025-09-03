// let menuItems = document.querySelectorAll('nav li');
// let home = menuItems[0];
// home.innerText = "Matt";
// // home.style.color = "blue";
// home.classList.add('red-background');
// console.info(home);

// let list = document.querySelector("ul");
// let children = list.children;
// console.info(children)

// list.parentElement.outerHTML = "<div><h2>Nav Here</h2></div>";

const navItems = [
  { text: "Home", href: "/" },
  { text: "Login", href: "#login" },
  { text: "Register", href: "Register.html" },
  { text: "Contact", href: "Contact.html" },
  { text: "Foobar", href: "Foobar.html" },
];

let navHtml = "<nav><ul>";
for (let item of navItems) {
  navHtml += `<li><a href="${item.href}">${item.text}</a></li>`
}
navHtml += "</ul></nav>"

let mainNav = document.querySelector("#main-nav");
mainNav.outerHTML = navHtml;