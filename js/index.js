const navbar = document.querySelector(".navbar")
const mobilenav = document.querySelector(".mobilenav")

mobilenav.addEventListener("click", () => {
   const visibility = navbar.getAttribute("data-visible")=== "off";
   
   if (visibility){
    navbar.setAttribute("data-visible", "on");
    mobilenav.setAttribute("aria-expanded", "true");
   }else {
      navbar.setAttribute("data-visible", "off");
      mobilenav.setAttribute("aria-expanded", "false");
   }
});