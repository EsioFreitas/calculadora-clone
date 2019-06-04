class CalcController {
    constructor() {
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this.locale = 'pt-BR';
        this._currentDate;
        this._operation = [];
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000)
    }

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    setError() {
        this.displayCalc = 'ERROR'
    }

    isOperator(value){
        console.log(['/','*','-','+', '%'].indexOf(value) > -1)
        return (['/','*','-','+', '%'].indexOf(value) > -1);
    }

    addOperation(value) {   
        if ( isNaN(this._operation[this._operation.length - 1]) ) {
            if (this.isOperator(value)) {
                this._operation[this._operation.length - 1] = value;

            } else if ( isNaN(value) ) {
            } else{
                this._operation.push(value);
            }
        } else {
            let newValue = this._operation[this._operation.length - 1].toString() + value.toString();
            this._operation[this._operation.length - 1] = parseInt(newValue);

        }
    }

    execBtn(value) {
        switch (value) {
            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
                break;
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');

        buttons.forEach((btn, idx) => {
            this.addEventListenerAll(btn, 'click', e => {
                this.execBtn(btn.className.baseVal.replace('btn-', ''))
                console.log(this._operation)
            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            })
        })

    }

    addEventListenerAll(el, events, fn) {
        events.split(' ').forEach(event => {
            el.addEventListener(event, fn, false);
        })
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this.locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(value) {
        return this._timeEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        return this._displayCalcEl.innerHTML = value;
    }

    get currentDate() {
        return new Date();
    }

    set currentDate(value) {
        return this._currentDate = value;
    }
}