let string = "";
let buttons = document.querySelectorAll('.button');
let input = document.querySelector('.input');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{

        let value = e.target.innerHTML;

        if(value === '='){
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if(value === 'clear'){
            string = "";
            input.value = "";
        }

        // ✅ Backspace working
        else if(value === '⌫'){
            string = string.slice(0, -1);
            input.value = string;
        }

        else{
            string += value;
            input.value = string;
        }
    });
});