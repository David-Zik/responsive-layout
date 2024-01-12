"use strict";
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav__link");
const allLinks = document.getElementsByTagName("a");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visibility");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    nav.classList.add("nav--visibility");
  });
});

allLinks.addEventListener("click", (event) => {
  event.preventDefault();
});
