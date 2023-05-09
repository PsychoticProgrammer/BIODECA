window.onload = function(){
    var fields = [
        document.getElementById('name'),
        document.getElementById('email'),
        document.getElementById('phone'),
        document.getElementById('moreInfo')
    ];
    var modal = document.getElementById('modal');
    let send = document.getElementById('btnSend');
    let btnAccept = document.getElementById('btnAccept');

    send.addEventListener('click',function(){
        if(!notEmpty(fields)){
            alert("YOU SHOULD FILL ALL THE INFORMATION FOR US TO CONTACT WITH YOU");
            return;
        }
        modal.style.visibility = "visible";
        modal.style.opacity = 1;
    });

    btnAccept.addEventListener('click',function(){
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
    });

    onlyLettersField(fields[0]);
    limitedLengthField(30,fields[1]);
    onlyNumbersField(fields[2]);
    limitedLengthField(50,fields[3]);
}

function notEmpty(fields){
    for(let i = 0; i < fields.length; i++){
        if(fields[i].value.trim() == ""){
            return false;
        }
    }
    return true;
}

function onlyNumbersField(inputText){
    inputText.addEventListener('keypress',function(e){
        if(e.keyCode < 48 || e.keyCode > 57 || inputText.value.length >= 10){
            e.preventDefault();
        }
    });
}

function onlyLettersField(inputText){
    inputText.addEventListener('keypress',function(e){
        if(((e.keyCode < 65 || e.keyCode > 90) && 
        (e.keyCode < 97 || e.keyCode > 122)) || inputText.value.length >= 25){
            e.preventDefault();
        }
    });
}

function limitedLengthField(maxLength,inputText){
    inputText.addEventListener('keypress',function(e){
        if(inputText.value.length >= maxLength){
            e.preventDefault();
        }
    });
}