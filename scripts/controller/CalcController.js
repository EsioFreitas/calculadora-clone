class CalcController {
    constructor() {
        this._displayCalc = '0';
        this._currentDate;
        this.initialize();
    }

    initialize(){
        let displayCalcEl = document.querySelector('#display');
        let dataEl = document.querySelector('#data');
        let timeEl = document.querySelector('#hora');
        
        displayCalcEl.innerHTML = '05';
        dataEl.innerHTML = '20/05/2019';
        timeEl.innerHTML = '00:00';
    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(value) {
        this._currentDate = value;
    }
}