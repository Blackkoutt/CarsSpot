const tabs = document.querySelectorAll('input[name="cars"]');
let photoGalleries = [...document.querySelectorAll('.photo_gallery')];
const galleryScroll = document.querySelector('.gallery_scroll');
const dots = [...document.querySelectorAll('#photo_gallery_nav input[type="radio"]')];
const gap = 64;
let isMouseDownFlag = false;
let startX = 0;
let scrollLeft = 0;
let actual_gallery = photoGalleries.find((g) => g.classList.contains('flex'));

AddWindowEventListeners();

const SetActiveDot = () => {
  const imgWidth = actual_gallery.firstElementChild.offsetWidth;
  const imgAndGapWidth = imgWidth + gap / 2;
  const imgIndex = Math.floor(Math.ceil(galleryScroll.scrollLeft + imgWidth / 2) / imgAndGapWidth);
  if (imgIndex < dots.length) {
    dots[imgIndex].checked = true;
  }
};

const UpdateGallery = (event) => {
  photoGalleries.forEach((g) => {
    g.classList.remove('flex');
    g.classList.add('hidden');
  });

  const tab = event.target;

  actual_gallery = photoGalleries.find((g) => g.dataset.target === tab.id);

  if (tab.checked) {
    actual_gallery.classList.remove('hidden');
    actual_gallery.classList.add('flex');
  }
};

const DotClickScrollGallery = (event) => {
  event.preventDefault();

  const dot = event.target;
  const index = dots.indexOf(dot);
  const figures = [...actual_gallery.children].slice(0, -1);

  if (index < figures.length) {
    const offsetLeft = (figures[index].offsetWidth + gap) * index;
    galleryScroll.scrollTo({
      left: offsetLeft,
      behavior: 'smooth',
    });
  }
};

const HandleGaleryResize = () => {
  photoGalleries = [...document.querySelectorAll('.photo_gallery')];
  const actualWindowSize = window.outerWidth;
  if (actualWindowSize < 1280) {
    galleryScroll.style.width = `${actualWindowSize - 20}px`;
  } else {
    const paddingLeft = (actualWindowSize - 1264) / 2;
    galleryScroll.style.width = `${actualWindowSize - paddingLeft}px`;
  }
};

const StartManualScrolling = (event) => {
  event.preventDefault();
  isMouseDownFlag = true;
  startX = event.pageX - galleryScroll.offsetLeft;
  scrollLeft = galleryScroll.scrollLeft;
};

const ManualScrolling = (event) => {
  if (!isMouseDownFlag) return;
  event.preventDefault();
  const x = event.pageX - galleryScroll.offsetLeft;
  const walk = (x - startX) * 1.5;
  galleryScroll.scrollLeft = scrollLeft - walk;
};

const EndManualScrolling = () => (isMouseDownFlag = false);

const AddDotsEventListeners = () => {
  dots.forEach((dot) => {
    dot.addEventListener('click', DotClickScrollGallery);
  });
};

const AddTabsEventListeners = () => {
  tabs.forEach((tab) => {
    tab.addEventListener('change', UpdateGallery);
  });
};

const AddGalleryScrollEventListeners = () => {
  galleryScroll.addEventListener('scroll', SetActiveDot);
  galleryScroll.addEventListener('mousedown', StartManualScrolling);
  galleryScroll.addEventListener('mousemove', ManualScrolling);
  galleryScroll.addEventListener('mouseup', EndManualScrolling);
  galleryScroll.addEventListener('mouseleave', EndManualScrolling);
};

function AddWindowEventListeners() {
  window.addEventListener('load', () => {
    AddDotsEventListeners();
    AddTabsEventListeners();
    AddGalleryScrollEventListeners();
    HandleGaleryResize();
  });
  window.addEventListener('resize', () => {
    HandleGaleryResize();
  });
}
