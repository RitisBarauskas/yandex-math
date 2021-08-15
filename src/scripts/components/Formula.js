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
        this._secondEqual = this._formula.querySelector('.formula__second-equal');
        this._secondA = this._formula.querySelector('.formula__second-a');
        this._secondX = this._formula.querySelector('.formula__second-x');
        this._firstPlus = this._formula.querySelector('.formula__first-plus');
        this._firstPoints = this._formula.querySelector('.formula__first-points');
        this._thirdA = this._formula.querySelector('.formula__third-a');
        this._secondY = this._formula.querySelector('.formula__second-y');
        this._secondPlus = this._formula.querySelector('.formula__second-plus');
        this._secondPoints = this._formula.querySelector('.formula__second-points');
        this._secondB = this._formula.querySelector('.formula__second-b');
        this._thirdX = this._formula.querySelector('.formula__third-x');
        this._thirdPlus = this._formula.querySelector('.formula__third-plus');
        this._thirdPoints = this._formula.querySelector('.formula__third-points');
        this._thirdB = this._formula.querySelector('.formula__third-b');
        this._thirdY = this._formula.querySelector('.formula__third-y');
    }

    update(page) {
        if (page === 1) {
            this._buttonBack.style.display = 'none';
            this._buttonRefresh.style.display = 'none';
            this._buttonNext.style.display = 'block';
            this._arrowAX.style.display = 'none';
            this._arrowAY.style.display = 'none';
            this._arrowBX.style.display = 'none';
            this._arrowBY.style.display = 'none';
            this._secondA.style.display = 'none';
            this._secondX.style.display = 'none';
            this._firstPlus.style.display = 'none';
            this._secondEqual.style.display = 'none';
            this._thirdA.style.display = 'none';
            this._secondY.style.display = 'none';
            this._secondPlus.style.display = 'none';
            this._secondB.style.display = 'none';
            this._thirdX.style.display = 'none';
            this._thirdPlus.style.display = 'none';
            this._thirdB.style.display = 'none';
            this._thirdY.style.display = 'none';
        } else if (page === 2) {
            this._buttonBack.style.display = 'block';
            this._arrowAX.style.display = 'block';
            this._secondEqual.style.display = 'none';
            this._secondA.style.display = 'none';
            this._secondX.style.display = 'none';
            this._firstPlus.style.display = 'none';
            this._firstPoints.style.display = 'none';
        } else if (page === 3) {
            this._secondEqual.style.display = 'block';
            this._secondA.style.display = 'block';
            this._secondX.style.display = 'block';
            this._firstPlus.style.display = 'block';
            this._firstPoints.style.display = 'block';
            this._arrowAY.style.display = 'none';
        } else if (page === 4) {
            this._arrowAY.style.display = 'block';
            this._firstPoints.style.display = 'block';
            this._thirdA.style.display = 'none';
            this._secondY.style.display = 'none';
            this._secondPlus.style.display = 'none';
            this._secondPoints.style.display = 'none';
        } else if (page === 5) {
            this._firstPoints.style.display = 'none';
            this._thirdA.style.display = 'block';
            this._secondY.style.display = 'block';
            this._secondPlus.style.display = 'block';
            this._secondPoints.style.display = 'block';
            this._arrowAY.style.display = 'block';
            this._arrowAX.style.display = 'block';
            this._arrowBX.style.display = 'none';
        } else if (page === 6) {
            this._arrowAY.style.display = 'none';
            this._arrowAX.style.display = 'none';
            this._arrowBX.style.display = 'block';
            this._secondPoints.style.display = 'block';
            this._secondB.style.display = 'none';
            this._thirdX.style.display = 'none';
            this._thirdPlus.style.display = 'none';
            this._thirdPoints.style.display = 'none';
        } else if (page === 7) {
            this._secondPoints.style.display = 'none';
            this._secondB.style.display = 'block';
            this._thirdX.style.display = 'block';
            this._thirdPlus.style.display = 'block';
            this._thirdPoints.style.display = 'block';
            this._arrowBY.style.display = 'none';
        } else if (page === 8) {
            this._arrowBY.style.display = 'block';
            this._thirdPoints.style.display = 'block';
        } else if (page === 9) {
            this._arrowBX.style.display = 'none';
            this._arrowBY.style.display = 'none';
            this._thirdPoints.style.display = 'none';
            this._thirdB.style.display = 'block';
            this._thirdY.style.display = 'block';
            this._buttonNext.style.display = 'none';
            this._buttonBack.style.display = 'none';
            this._buttonRefresh.style.display = 'block';
        }
        this._paginator.textContent = `${page} из 9`;

    }

}

export default Formula;