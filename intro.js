/*Popup signup : script of the appearance of the signup form*/
const form = document.querySelector('.signup_form')
const insc = document.querySelector('.insc')
const body = document.querySelector('.body')
const signup_body = document.querySelector('.signup_body')
insc.addEventListener('click', pop)

function pop() {
    if (form.classList.contains('active') && insc.classList.contains('active')) {
        form.classList.remove('active')
        insc.classList.remove('active')
        body.classList.remove('active')
        signup_body.classList.remove('active')
    }
    else {
        form.classList.add('active')
        insc.classList.add('active')
        body.classList.add('active')
        signup_body.classList.add('active')
    }
}
/* end*/

const xmark = document.querySelector(".x")

xmark.addEventListener("click", close)

function close() {
    if(form.classList.contains('active') && insc.classList.contains('active')){
        form.classList.remove('active')
        insc.classList.remove('active')
        body.classList.remove('active')
        signup_body.classList.remove('active')
    }
}




/*=================================================N AME=============================================*/
/*----------------------DECLARATIONS--------------------------------*/
const nameinput = document.querySelector(".nom");
const nalerts = document.querySelector(".nalert")
const name = nameinput.value;
/*----------------------END OF DECLARATIONS--------------------------------*/
nameinput.addEventListener("blur", nameverif);
nameinput.addEventListener('input', nreset)
/*----------------------EVENT LISTENERS--------------------------------*/
/*--------------------FUNCTIONS--------------------------------*/
function nameverif() {
    if (lengthverification(nameinput.value) == false) {
        nalerts.innerHTML = "Name must exceed three characters and without digit"
        nalerts.style.color = "red"
        return false
    } else {
        nalerts.innerHTML = nameinput.value + " is valid"
        nalerts.style.color = "green"
        return true
    }
}

function nreset() {
    nalerts.innerHTML = ""
    subalerts.innerHTML = "";

}
/*--------------------END OF FUNCTIONS---------------------------*/

/*=================================================PRENOM=============================================*/
/*----------------------DECLARATIONS--------------------------------*/
const prenominput = document.querySelector(".prenom");
const palerts = document.querySelector(".palert")
/*----------------------END OF DECLARATIONS--------------------------------*/

/*----------------------EVENT LISTENERS--------------------------------*/
prenominput.addEventListener("blur", prenomverif);
prenominput.addEventListener('input', preset)
/*----------------------END EVENT LISTENERS--------------------------------*/

/*--------------------FUNCTIONS--------------------------------*/
function prenomverif() {
    if (lengthverification(prenominput.value) == false) {
        palerts.innerHTML = "Name must exceed three characters and without digit"
        palerts.style.color = "red"
        return false
    } else {
        palerts.innerHTML = prenominput.value + " is valid"
        palerts.style.color = "green"
        return true
    }
}

function preset() {
    palerts.innerHTML = ""
    subalerts.innerHTML = "";

}
/*--------------------END OF FUNCTIONS---------------------------*/


/*=================================================EMAIL=============================================*/
/*----------------------DECLARATIONS--------------------------------*/
const emailinput = document.getElementById('mail')
const emailalerts = document.querySelector('.emailalert')
const email = emailinput.value;

/*----------------------END OF DECLARATIONS--------------------------------*/

/*----------------------EVENT LISTENERS--------------------------------*/
emailinput.addEventListener('blur', emailverif)
emailinput.addEventListener('input', emailreset)
/*----------------------END EVENT LISTENERS--------------------------------*/
/*--------------------FUNCTIONS--------------------------------*/

function emailreset() {
    emailalerts.innerHTML = "";
    subalerts.innerHTML = "";

}
function emailverif() {
    const index = emailinput.value.indexOf("@")
    if (index > -1) {
        if (index == 0) {
            emailalerts.innerHTML = "Please enter a part before @." + emailinput.value + "  is incomplete"
            emailalerts.style.color = "red";
            return false;
        }
        if (index + 1 != emailinput.value.length) {
            emailalerts.innerHTML = emailinput.value + "  is valid"
            emailalerts.style.color = "green"
            return true;
        }
        else {
            emailalerts.innerHTML = "Please enter a part following @." + emailinput.value + "  is incomplete"
            emailalerts.style.color = "red";
            return false;
        }
    }

    else {
        emailalerts.innerHTML = "email must be filled in and  contain '@'";
        emailalerts.style.color = "red";
        return false;
    }

}

    
/*--------------------END OF FUNCTIONS---------------------------*/


/*=================================================SUBMIT=============================================*/
/*----------------------DECLARATIONS--------------------------------*/
const submitbtn = document.querySelector(".sub")
const subalerts = document.querySelector(".subalert")
const elements = document.querySelector(".allelements")
/*----------------------END OF DECLARATIONS--------------------------------*/

/*-----------------------EVENT LISTENERS--------------------------------*/
submitbtn.addEventListener("click", DisablDefaultAction)
submitbtn.addEventListener("click", validation)
/*--------------------END EVENT LISTENERS--------------------------------*/

/*--------------------FUNCTIONS--------------------------------*/

function DisablDefaultAction(event) {
    event.preventDefault();
}


function validation() {
    if (nameverif() == false || prenomverif() == false || emailverif() == false || check.checked == false || radiocheck() == false) {
        subalerts.innerHTML = "Data submit failed!";
        subalerts.style.color = "red";
        return false;
    } else {
        submitbtn.innerHTML = "Fermer";
         submitbtn.classList.replace("sub", "submit2");
        form.classList.add("success");
       elements.remove();
       const successtext = document.createElement("p");
       successtext.textContent="Merci pour votre inscription";
       successtext.classList.add("successtext");
       form.appendChild(successtext);
        subalerts.innerHTML="";
       const closeButton = document.createElement("button");
       closeButton.innerHTML= "Fermer";
       closeButton.classList.add("close");
       form.appendChild(closeButton);
             return true;
    }
}

function thanks(){
    if(validation()== true){
        form.classList.add("success");
    }
}
/*--------------------END FUNCTIONS--------------------------------*/


// function clear(elements){
 
//    for(let i =0; i <elements.length; i++){
//     elements[i].remove();
    
//    }
// }

/*Global Functions */
function ContainsADigit(str) {
    for (var i = 0; i < str.length; i++) {
        if (isNaN(str[i]) == false) {
            return true;

        } else {
            return false;
        }
    }
}

function lengthverification(str) {
    if (str.length <= 3) {
        return false;
    } else {
        return true;
    }
}

const check = document.querySelector(".check")


function radiocheck() {
    var radios = document.getElementsByName("city");

    var isChecked = false;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            subalerts.innerHTML=""
            isChecked = true;
            break;
        }
    }
    if (!isChecked) {
        alert("Please select a city");
        return false;
    }

    return true;
}

const closebtn = document.querySelector(".submit2");

closebtn.addEventListener("click", closebtnClick);

function closebtnClick() {
    form.classList.remove("active");
}

