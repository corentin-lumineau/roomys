const showLandingModals = () => {

  const showElement = (element) => {
    element.classList.remove("d-none");
  }
  const hideElement = (element => {
    element.classList.add("d-none");
  })

  const navbar = document.getElementById("navbar-home");
  const aboutItem = document.getElementById("about");
  const servicesItem = document.getElementById("services");
  const casesItem = document.getElementById("cases");
  const recrutItem = document.getElementById("recrut");
  const contactItem = document.getElementById("contact");

  const modaleAbout = document.getElementById("about-modale");
  const modaleServices = document.getElementById("services-modale");
  const modaleCases = document.getElementById("cases-modale");
  const modaleRecrut = document.getElementById("recrut-modale");
  const modaleContact = document.getElementById("contact-modale");
  
  hideElement(modaleAbout);
  hideElement(modaleServices);
  hideElement(modaleCases);
  hideElement(modaleRecrut);
  hideElement(modaleContact);


  aboutItem.addEventListener("mouseenter", (event) => {
    showElement(modaleAbout);
    hideElement(modaleServices);
    hideElement(modaleCases);
    hideElement(modaleRecrut);
    })

  servicesItem.addEventListener("mouseenter", (event) => {
    showElement(modaleServices);
    hideElement(modaleAbout);
    hideElement(modaleCases);
    hideElement(modaleRecrut);
    hideElement(modalContact);
    })
  
  casesItem.addEventListener("mouseenter", (event) => {
    showElement(modaleCases);
    hideElement(modaleServices);
    hideElement(modaleAbout);
    hideElement(modaleRecrut);
    hideElement(modaleContact);
  })

  recrutItem.addEventListener("mouseenter", (event) => {
    showElement(modaleRecrut);
    hideElement(modaleServices);
    hideElement(modaleAbout);
    hideElement(modaleCases);
    hideElement(modaleContact);
  })

    recrutItem.addEventListener("mouseenter", (event) => {
    showElement(modaleRecrut);
    hideElement(modaleServices);
    hideElement(modaleAbout);
    hideElement(modaleCases);
    hideElement(modaleContact);
  })  
  
  contactItem.addEventListener("mouseenter", (event) => {
  showElement(modaleContact);
  hideElement(modaleServices);
  hideElement(modaleAbout);
  hideElement(modaleCases);
  hideElement(modaleRecrut);
  })

  navbar.addEventListener("click", () => {
    hideElement(modaleServices);
    hideElement(modaleAbout);
    hideElement(modaleCases);
    hideElement(modaleContact);
    hideElement(modaleRecrut);
  })
}

export { showLandingModals };
