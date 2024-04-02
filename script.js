let inputButtons = document.querySelectorAll('.inputs input');
let displayBox = document.querySelector('.display input');
inputButtons.forEach(btn => {
    btn.addEventListener('click' ,function(){
        switch(this.value){
            case 'AC':
                displayBox.value = ''
                break;
            case 'DEL':
                displayBox.value = displayBox.value.substring(0,displayBox.value.length-1)
                break;
            case '=':
                displayBox.value = eval(displayBox.value);
                break;
            default :
                displayBox.value += this.value;
        }
    })
})