window.alert("hi");
function validate(){
    var result = " ";
    result += validateName();
    result += validateEmail();
    result += validatePassword();
    result += validateTerms();

    if(result == "") return true;
    alert("validation Result: \n\n"+reuslt);
    return false;

}
function validateName(){
    var name = document.getElementsByName("name")[0].nodeValue;
    if(name.length<=2)
    return "Name should be at least three characters.\n";
    return "";
}
function validatePassword()
{
    var password =valueOf("passwprd");
    var retype = valueOf("retype_password");
    if(password.length<=6)
    return "password should be at leat 6 characters.\n";
    if(password ! = retype)
    return "password do not match.\n";
}
function validateEmail()
{
    var email =valueOf("email");
    var retype = valueOf("retype_email");
    if(email.indexof('@') == -1)
    return "Email should be a valid address\n";
    if(email ! = retype)
    return "Email addresses do not match.\n";
}
function validateTerms(){
    var terms = document.getElementsByName("terms")[0];
    if(!terms.checked)
    return "Please accept the terms and Service and Privacy policy";
    return "";
}
function valueOf(name){
    return document.getElementsByName(name)[0].value;
}