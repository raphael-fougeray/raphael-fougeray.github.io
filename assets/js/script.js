'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
if (testimonialsItem.length > 0) {
  for (let i = 0; i < testimonialsItem.length; i++) {

    testimonialsItem[i].addEventListener("click", function () {

      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

      testimonialsModalFunc();

    });

  }
}

// add click event to modal close button
if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}

// ===== OUTREACH =====

// custom select variables
const selectOutreach = document.querySelector(".outreach [data-select]");
const selectItemsOutreach = document.querySelectorAll(".outreach [data-select-item]");
const selectValueOutreach = document.querySelector(".outreach [data-selecct-value]");
const filterBtnOutreach = document.querySelectorAll(".outreach [data-filter-btn]");

selectOutreach.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItemsOutreach.length; i++) {
  selectItemsOutreach[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValueOutreach.innerText = this.innerText;
    elementToggleFunc(selectOutreach);
    filterFuncOutreach(selectedValue);

  });
}

// filter variables
const filterItemsOutreach = document.querySelectorAll(".outreach [data-filter-item]");

const filterFuncOutreach = function (selectedValue) {

  for (let i = 0; i < filterItemsOutreach.length; i++) {

    if (selectedValue === "all") {
      filterItemsOutreach[i].classList.add("active");
    } else if (selectedValue === filterItemsOutreach[i].dataset.category) {
      filterItemsOutreach[i].classList.add("active");
    } else {
      filterItemsOutreach[i].classList.remove("active");
    }

  }

}

// add event in all filter button items
let lastClickedBtnOutreach = filterBtnOutreach[0];

for (let i = 0; i < filterBtnOutreach.length; i++) {

  filterBtnOutreach[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValueOutreach.innerText = this.innerText;
    filterFuncOutreach(selectedValue);

    lastClickedBtnOutreach.classList.remove("active");
    this.classList.add("active");
    lastClickedBtnOutreach = this;

  });

}

// ===== PORTFOLIO =====

// custom select variables
const selectPortfolio = document.querySelector(".portfolio [data-select]");
const selectItemsPortfolio = document.querySelectorAll(".portfolio [data-select-item]");
const selectValuePortfolio = document.querySelector(".portfolio [data-selecct-value]");
const filterBtnPortfolio = document.querySelectorAll(".portfolio [data-filter-btn]");

selectPortfolio.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItemsPortfolio.length; i++) {
  selectItemsPortfolio[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValuePortfolio.innerText = this.innerText;
    elementToggleFunc(selectPortfolio);
    filterFuncPortfolio(selectedValue);

  });
}

// filter variables
const filterItemsPortfolio = document.querySelectorAll(".portfolio [data-filter-item]");

const filterFuncPortfolio = function (selectedValue) {

  for (let i = 0; i < filterItemsPortfolio.length; i++) {

    if (selectedValue === "all") {
      filterItemsPortfolio[i].classList.add("active");
    } else if (selectedValue === filterItemsPortfolio[i].dataset.category) {
      filterItemsPortfolio[i].classList.add("active");
    } else {
      filterItemsPortfolio[i].classList.remove("active");
    }

  }

}

// add event in all filter button items
let lastClickedBtnPortfolio = filterBtnPortfolio[0];

for (let i = 0; i < filterBtnPortfolio.length; i++) {

  filterBtnPortfolio[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValuePortfolio.innerText = this.innerText;
    filterFuncPortfolio(selectedValue);

    lastClickedBtnPortfolio.classList.remove("active");
    this.classList.add("active");
    lastClickedBtnPortfolio = this;

  });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Lightbox
document.addEventListener("click", function (e) {

  const img = e.target.closest(".project-img img");

  if (!img) return;

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  console.log("CLICK OK");

  lightbox.style.display = "block";
  lightboxImg.src = img.src;

});

// Close button
document.querySelector(".lightbox-close").onclick = function () {
  document.getElementById("lightbox").style.display = "none";
};

// Click outside
document.getElementById("lightbox").onclick = function (e) {
  if (e.target.id === "lightbox") {
    this.style.display = "none";
  }
};

console.log("JS chargé");