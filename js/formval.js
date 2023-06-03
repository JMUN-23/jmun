function ValidateForm(){
    var returnVal = true;
    clearErrors();

    var name = document.forms["form"]["name"].value;
    if(name.length == 0){
        seterror("name", "Length of name cannot be zero!!")
        returnVal = false
    }

    var phone = document.forms["form"]["phone"].value;
    var email = document.forms["form"]["email"].value;
    if(email.includes(".com") == false){
        seterror("email", "Email is invalid")

    }
    if(phone.length != 10){
        seterror("phone", "Phone number should have 10 digits")
    }
    console.log(phone)
}

function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    console.log(element)
    element.getElementsByClassName('formerror').innerText = error;
    alert(error)

}
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}