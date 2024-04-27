const values='';

function updateDisplay(){
    document.getElementById('display').innerHTML=values || '0';
}

function appendValue(value){
    values+=value;
    updateDisplay();
}

function clearDisplay(){
    values='';
    updateDisplay();
}

function deleteValue(value){
    values=values.slice(0,-1);
    updateDisplay();
}


document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e){
    const key=e.key;
    switch(key){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            appendValue(key);
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            appendValue(key);
            break;
        case 'Enter':
            calculate();
            break;
        case 'Backspace':
            deleteValue();
            break;
        case 'Escape':
            clearDisplay();
            break;
        default:
            break;
    }
}

function isOperator(char){
    return ['+','-','*','/'].includes(char) || char=== '/';
}

