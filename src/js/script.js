class Somar {
    constructor() {
        this.input1 = window.document.getElementById("txtn1");
        this.input2 = window.document.getElementById("txtn2");
        this.sumResponse = window.document.getElementById("res");

        this.input1.addEventListener('input', this.calculateSum.bind(this));
        this.input2.addEventListener('input', this.calculateSum.bind(this));
    }

    calculateSum() {
        let n1 = Number(this.input1.value);
        let n2 = Number(this.input2.value);

        if (n1 > 0 || n2 > 0) {
            let sum = n1 + n2;
            this.sumResponse.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${sum}`;
        } else {
            window.alert('Não é possível realizar a soma com ambos números zerados');
        }
    }
}

const somarInstance = new Somar();
