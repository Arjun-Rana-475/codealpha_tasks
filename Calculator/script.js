let display = document.getElementById("display");

let result = document.getElementById("result");


function appendValue(value){

    display.value += value;

    showRealtimeResult();
}


function clearDisplay(){

    display.value = "";

    result.innerText = "= 0";
}


function deleteLast(){

    display.value = display.value.slice(0,-1);

    showRealtimeResult();
}


function calculate(){

    try{

        display.value = eval(display.value);

        result.innerText = "= " + display.value;
    }

    catch{

        result.innerText = "Error";
    }
}


function showRealtimeResult(){

    try{

        if(display.value === ""){

            result.innerText = "= 0";
        }

        else{

            result.innerText = "= " + eval(display.value);
        }
    }

    catch{

        result.innerText = "= ?";
    }
}


document.addEventListener("keydown", function(event){

    let key = event.key;


    if(!isNaN(key) || ['+','-','*','/','.'].includes(key)){

        appendValue(key);
    }


    else if(key === "Enter"){

        calculate();
    }


    else if(key === "Backspace"){

        deleteLast();
    }


    else if(key === "Escape"){

        clearDisplay();
    }
});