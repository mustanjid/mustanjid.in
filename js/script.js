console.log("Document is connected");

// $(document).on('click', '#main-menu li',function(){
//   $this.addClass('active');
// });

function setupTabs(){
  document.querySelectorAll(".tabs_button").forEach(button =>{
      button.addEventListener("click",() =>{
          const sideBer = button.parentElement;
          const tabsContainer = sideBer.parentElement;
          const tabNumber = button.dataset.forTab;
          const tabToActivate = tabsContainer.querySelector(`.tabs_content[data-tab="${tabNumber}"]`);

          sideBer.querySelectorAll(".tabs_button").forEach(button => {
          button.classList.remove("tabs_button--active");
          })

          tabsContainer.querySelectorAll(".tabs_content").forEach(button => {
              button.classList.remove("tabs_content--active");
          })

          button.classList.add("tabs_button--active");
          tabToActivate.classList.add("tabs_content--active")
      });
  });
}


document.addEventListener("DOMContentLoaded", () =>{
  setupTabs();
  
}); 