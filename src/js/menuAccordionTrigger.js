const mainNav = document.querySelector('.main_nav');
const callUsBtn = document.querySelector('.call-us-btn');
const menuCollapsedBtn = document.querySelector('.menu_collapsed_button');
const mainMenuCollapsed = document.querySelector('.main_menu_collapsed ');
const smWidth = 640;

let isMenuCollapsed = false;

AddWindowEventListeners();

const TriggerAccordion = () => {
  mainMenuCollapsed.classList.toggle('grid-rows-0fr');
  mainMenuCollapsed.classList.toggle('grid-rows-1fr');
  mainMenuCollapsed.classList.toggle('shadow-xl');

  if (mainMenuCollapsed.classList.contains('grid-rows-0fr')) {
    setTimeout(() => {
      mainMenuCollapsed.classList.remove('bg-primary_background');
    }, 420);
  } else {
    mainMenuCollapsed.classList.add('bg-primary_background');
  }
};

const AddCollapsedMenuBtnEventListener = () =>
  menuCollapsedBtn.addEventListener('click', TriggerAccordion);

const ChangeMenuAppearance = () => {
  if (window.outerWidth <= smWidth && !isMenuCollapsed) {
    mainNav.remove();
    callUsBtn.remove();

    const divInAccordion = mainMenuCollapsed.firstElementChild;
    divInAccordion.appendChild(mainNav);
    divInAccordion.appendChild(callUsBtn);

    isMenuCollapsed = true;
  } else if (!isMenuCollapsed) {
    menuCollapsedBtn.parentElement.before(callUsBtn);
    callUsBtn.before(mainNav);
  } else {
    isMenuCollapsed = false;
  }
};

function AddWindowEventListeners() {
  window.addEventListener('load', () => {
    ChangeMenuAppearance();
    AddCollapsedMenuBtnEventListener();
  });

  window.addEventListener('resize', () => {
    ChangeMenuAppearance();
  });
}
