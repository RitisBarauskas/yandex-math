class Formula {
    constructor(page) {
        this.page = page;
        this._formula = document.querySelector('.formula');
        this._arrowAX = this._formula.querySelector('.formula__arrow-ax');
        this._arrowAY = this._formula.querySelector('.formula__arrow-ay');
        this._arrowBX = this._formula.querySelector('.formula__arrow-bx');
        this._arrowBY = this._formula.querySelector('.formula__arrow-by');
        this._bottonGroup = document.querySelector('.button-group');
        this._buttonNext = this._bottonGroup.querySelector('.button-group__next');
        this._buttonBack = this._bottonGroup.querySelector('.button-group__back');
        this._buttonRefresh = this._bottonGroup.querySelector('.button-group__refresh');
        this._paginator = this._bottonGroup.querySelector('.button-group__paginator');
    }

    update(page) {
        console.log(page);
        if (page === 1) {
            this._buttonBack.style.display = 'none';
            this._buttonRefresh.style.display = 'none';
            this._buttonNext.style.display = 'block';
        } else if (page === 2) {
            this._buttonBack.style.display = 'block';
        } else if (page === 3) {
        } else if (page === 4) {
        } else if (page === 5) {
        } else if (page === 6) {
        } else if (page === 7) {
        } else if (page === 8) {
        } else if (page === 9) {
            this._buttonNext.style.display = 'none';
            this._buttonBack.style.display = 'none';
            this._buttonRefresh.style.display = 'block';
        }
        this._paginator.textContent = `${page} из 9`;

    }

}

export default Formula;