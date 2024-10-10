const seoButtons = document.querySelectorAll('.seo_button');
const seo = [];

AddWindowEventListeners();

const SeoButtonClickHandler = (event) => {
  const button = event.target;

  const elements = seo.filter((p) => p?.dataset.target === button.id);
  elements.forEach((elem) => {
    switch (elem.nodeName) {
      case 'DIV': {
        elem.classList.toggle('grid-rows-0fr');
        elem.classList.toggle('grid-rows-1fr');
        if (elem.classList.contains('grid-rows-1fr')) {
          button.textContent = 'Zwiń ';
        } else {
          button.textContent = 'Rozwiń ';
        }
        button.nextElementSibling.classList.toggle('rotate-180');
        break;
      }
      case 'P': {
        elem.classList.toggle('hidden');
        break;
      }
      default:
        break;
    }
  });
};

const AddSeoButtonsEventListeners = () => {
  seoButtons.forEach((button) => {
    const div = button.parentElement.previousElementSibling;
    const paragraph = div.firstElementChild;
    const accordion = div.lastElementChild;
    seo.push(paragraph);
    seo.push(accordion);
    button.addEventListener('click', SeoButtonClickHandler);
  });
};

function AddWindowEventListeners() {
  window.addEventListener('load', () => AddSeoButtonsEventListeners());
}
