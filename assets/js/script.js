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



// FILTER SYSTEM (scoped per section)

const projectSections = document.querySelectorAll(".projects");

projectSections.forEach(section => {

  const select = section.querySelector("[data-select]");
  const selectItems = section.querySelectorAll("[data-select-item]");
  const selectValue = section.querySelector("[data-selecct-value]");
  const filterBtns = section.querySelectorAll("[data-filter-btn]");
  const filterItems = section.querySelectorAll("[data-filter-item]");

  // toggle select (mobile dropdown)
  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });
  }

  const filterFunc = function (selectedValue) {

    filterItems.forEach(item => {
      if (selectedValue === "all" || selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

  };

  // select dropdown (mobile)
  selectItems.forEach(item => {
    item.addEventListener("click", function () {

      const selectedValue = this.innerText.toLowerCase();

      if (selectValue) selectValue.innerText = this.innerText;
      if (select) elementToggleFunc(select);

      filterFunc(selectedValue);

    });
  });

  // filter buttons (desktop)
  let lastClickedBtn = filterBtns[0];

  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {

      const selectedValue = this.innerText.toLowerCase();

      if (selectValue) selectValue.innerText = this.innerText;

      filterFunc(selectedValue);

      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;

    });
  });

});



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