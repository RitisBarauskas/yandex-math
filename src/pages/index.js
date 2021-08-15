import './index.css';
import Formula from "../scripts/components/Formula";

const buttonNext = document.querySelector('.button-group__next');
const buttonRefresh = document.querySelector('.button-group__refresh');
const buttonBack = document.querySelector('.button-group__back');

let page = 1;
const formula = new Formula(page);
buttonNext.addEventListener('click', () => {
    page++;
    formula.update(page);
})

buttonRefresh.addEventListener('click', () => {
    page = 1;
    formula.update(page);
})

buttonBack.addEventListener('click', () => {
    page--;
    formula.update(page);
})