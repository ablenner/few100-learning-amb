import * as fromMath from './math';
import './styles.css';

const number1 = document.getElementById('number1') as HTMLInputElement;
const number2 = document.getElementById('number2') as HTMLInputElement;
const add = document.getElementById('add') as HTMLInputElement;
const result = document.getElementById('result') as HTMLSpanElement;

// console.log({ number1, number2, add });

add.addEventListener('click', function () {
    console.log('clicked', this);
    // this.disabled = true;
    const n1 = number1.valueAsNumber;
    const n2 = number2.valueAsNumber;

    const sum = fromMath.add(n1, n2);
    console.log(sum);
    result.innerText = sum.toString();
    number1.value = '';
    number2.value = '';
    number1.focus();
});
