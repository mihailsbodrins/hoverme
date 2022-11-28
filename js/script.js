const headerRu = document.getElementById('text-ru');
const headerEn = document.getElementById('text-en');
const textHide = 'text-hide';

headerRu.addEventListener('click', changeTextRuToEn);

function changeTextRuToEn() {
  headerRu.classList.add(textHide);
  headerEn.classList.remove(textHide);
};


headerEn.addEventListener('click', changeTextEnToRu);

function changeTextEnToRu() {
  headerEn.classList.add(textHide);
  headerRu.classList.remove(textHide);
}

