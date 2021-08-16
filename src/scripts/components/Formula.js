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
            this._secondA.classList.remove('formula__second-a_show-reverse');
            this._secondA.classList.remove('formula__second-a_show');
            this._secondA.classList.remove('formula__second-x_show-reverse');
            this._secondX.classList.remove('formula__second-x_show');
            this._firstPlus.classList.remove('formula__first-plus_show');
            this._secondEqual.classList.remove('formula__second-equal_show');
            this._thirdA.classList.remove('formula__third-a_show-reverse');
            this._thirdA.classList.remove('formula__third-a_show');
            this._secondY.classList.remove('formula__second-y_show-reverse');
            this._secondY.classList.remove('formula__second-y_show');
            this._secondPlus.classList.remove('formula__second-plus_show');
            this._secondB.classList.remove('formula__second-b_show-reverse');
            this._secondB.classList.remove('formula__second-b_show');
            this._thirdX.classList.remove('formula__third-x_show-reverse');
            this._thirdX.classList.remove('formula__third-x_show');
            this._thirdPlus.classList.remove('formula__third-plus_show');
            this._thirdB.classList.remove('formula__third-b_show');
            this._thirdY.classList.remove('formula__third-y_show');
        } else if (page === 2) {
            this._buttonBack.style.display = 'block';
            this._arrowAX.style.display = 'block';
            this._secondEqual.classList.remove('formula__second-equal_show');
            if (this._secondA.classList.contains('formula__second-a_show')) {
                this._secondA.classList.remove('formula__second-a_show');
                this._secondA.classList.add('formula__second-a_show-reverse');
            }
            if (this._secondX.classList.contains('formula__second-x_show')) {
                this._secondX.classList.remove('formula__second-x_show');
                this._secondX.classList.add('formula__second-x_show-reverse');
            }
            this._firstPlus.classList.remove('formula__first-plus_show');
            this._firstPoints.classList.remove('formula__first-points_show');
        } else if (page === 3) {
            this._secondEqual.classList.add('formula__second-equal_show');
            if (this._secondA.classList.contains('formula__second-a_show-reverse')) {
                this._secondA.classList.remove('formula__second-a_show-reverse');
            }
            if (this._secondX.classList.contains('formula__second-x_show-reverse')) {
                this._secondX.classList.remove('formula__second-x_show-reverse');
            }
            this._secondA.classList.add('formula__second-a_show');
            this._secondX.classList.add('formula__second-x_show');
            this._firstPlus.classList.add('formula__first-plus_show');
            this._firstPoints.classList.add('formula__first-points_show');
            this._arrowAY.style.display = 'none';
        } else if (page === 4) {
            this._arrowAY.style.display = 'block';
            this._firstPoints.classList.add('formula__first-points_show');
            if (this._thirdA.classList.contains('formula__third-a_show')) {
                this._thirdA.classList.remove('formula__third-a_show');
                this._thirdA.classList.add('formula__third-a_show-reverse');
            }
            if (this._secondY.classList.contains('formula__second-y_show')) {
                this._secondY.classList.remove('formula__second-y_show');
                this._secondY.classList.add('formula__second-y_show-reverse');
            }
            this._secondPlus.classList.remove('formula__second-plus_show');
            this._secondPoints.classList.remove('formula__second-points_show');
        } else if (page === 5) {
            this._firstPoints.classList.remove('formula__first-points_show');
            if (this._thirdA.classList.contains('formula__third-a_show-reverse')) {
                this._thirdA.classList.remove('formula__third-a_show-reverse');
            }
            if (this._secondY.classList.contains('formula__second-y_show-reverse')) {
                this._secondY.classList.remove('formula__second-y_show-reverse')
            }
            this._thirdA.classList.add('formula__third-a_show');
            this._secondY.classList.add('formula__second-y_show');
            this._secondPlus.classList.add('formula__second-plus_show');
            this._secondPoints.classList.add('formula__second-points_show');
            this._arrowAY.style.display = 'block';
            this._arrowAX.style.display = 'block';
            this._arrowBX.style.display = 'none';
        } else if (page === 6) {
            this._arrowAY.style.display = 'none';
            this._arrowAX.style.display = 'none';
            this._arrowBX.style.display = 'block';
            this._secondPoints.classList.add('formula__second-points_show');
            if (this._secondB.classList.contains('formula__second-b_show')) {
                this._secondB.classList.remove('formula__second-b_show');
                this._secondB.classList.add('formula__second-b_show-reverse');
            }
            if (this._thirdX.classList.contains('formula__third-x_show')) {
                this._thirdX.classList.remove('formula__third-x_show');
                this._thirdX.classList.add('formula__third-x_show-reverse');
            }
            this._thirdPlus.classList.remove('formula__third-plus_show');
            this._thirdPoints.classList.remove('formula__third-points_show');
        } else if (page === 7) {
            this._secondPoints.classList.remove('formula__second-points_show');
            if (this._secondB.classList.contains('formula__second-b_show-reverse')) {
                this._secondB.classList.remove('formula__second-b_show-reverse')
            }
            this._secondB.classList.add('formula__second-b_show');
            if (this._thirdX.classList.contains('formula__third-x_show-reverse')) {
                this._thirdX.classList.remove('formula__third-x_show-reverse');
            }
            this._thirdX.classList.add('formula__third-x_show');
            this._thirdPlus.classList.add('formula__third-plus_show');
            this._thirdPoints.classList.add('formula__third-points_show');
            this._arrowBY.style.display = 'none';
        } else if (page === 8) {
            this._arrowBY.style.display = 'block';
            this._thirdPoints.classList.add('formula__third-points_show');
        } else if (page === 9) {
            this._arrowBX.style.display = 'none';
            this._arrowBY.style.display = 'none';
            this._thirdPoints.classList.remove('formula__third-points_show');
            this._thirdB.classList.add('formula__third-b_show');
            this._thirdY.classList.add('formula__third-y_show');
            this._buttonNext.style.display = 'none';
            this._buttonBack.style.display = 'none';
            this._buttonRefresh.style.display = 'block';
        }
        this._paginator.textContent = `${page} из 9`;

    }

}

export default Formula;