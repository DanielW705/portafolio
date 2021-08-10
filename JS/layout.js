const hamburger = document.getElementById("hamburger").querySelector("button");
const navbar = document.getElementById("navbar-part2");
const buttons = navbar.querySelectorAll("li");
const selector = document.getElementById("selector");
const port1 = document.getElementById("TuniIMG");
window.addEventListener(
  "resize",
  () => {
    const x = selector.style.top;
    const y = selector.style.left;
    if (window.innerWidth < 1024) {
      selector.style.removeProperty("left");
      if (y == "28px") {
        selector.style.top = "5%";
      } else if (y == "228px") {
        selector.style.top = "36.5%";
      } else if (y == "428px") {
        selector.style.top = "68.5%";
      }
    } else {
      selector.style.removeProperty("top");
      if (x == "5%") {
        selector.style.left = "28px";
      } else if (x == "36.5%") {
        selector.style.left = "228px";
      } else if (x == "68.5%") {
        selector.style.left = "428px";
      }
    }
  },
  false
);
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const headerheigth = document.querySelector("header").offsetHeight;
  nav.classList.toggle("sticky", window.scrollY > headerheigth);
});
buttons.forEach((li) => {
  const button = li.querySelector("button");
  button.addEventListener(
    "click",
    () => {
      if (window.innerWidth < 1024) {
        if (button.getAttribute("data-pos") === "P") {
          selector.style.top = "5%";
        } else if (button.getAttribute("data-pos") === "A") {
          selector.style.top = "36.5%";
        } else if (button.getAttribute("data-pos") === "B") {
          selector.style.top = "68.5%";
        }
      } else {
        if (button.getAttribute("data-pos") === "P") {
          selector.style.left = "28px";
        } else if (button.getAttribute("data-pos") === "A") {
          selector.style.left = "228px";
        } else if (button.getAttribute("data-pos") === "B") {
          selector.style.left = "428px";
        }
      }
    },
    false
  );
});
hamburger.addEventListener(
  "click",
  () => {
    if (hamburger.hasAttribute("data-open")) {
      hamburger.removeAttribute("data-open");
    } else {
      hamburger.setAttribute("data-open", true);
    }
    navbar.classList.toggle("navopen", hamburger.hasAttribute("data-open"));
  },
  false
);
port1.addEventListener("click", () => {
  Swal.fire({
    title: "<h1>Hola Mundo</h1>",
    background: "#fff url(./img/TUNI.jpg) no-repeat center",
    width: "400px",
    height: "400px"
  });
});
