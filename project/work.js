function validate() {
    var result = "";
    result += validateFirstName();
    result += validateSecondName();
    result += validateEmail();
    result += validatenumber();
    result += validaterooms();
    result += validateNoofPersons();
   
  
  
    if (result == "") return true;
    else alert("Validation Result:\n\n" + result);
  
    return false;
  }
  
  function validateFirstName() {
    var name = document.getElementById("txt").value;
    if (name.length <= 3) return "Name should be at least three characters.\n";
    else return "";
  }
  
  function validateSecondName() {
    var n = document.getElementById("txt1").value;
    if (n.length <= 3) return "Name should be at least three characters.\n";
    else return "";
  }
  
  function validateEmail() {
    var email = document.getElementById("txtemail").value;
    if (email.indexOf("@") == -1) return "Email should be a valid address.\n";
  
    else return "";
  }
  
  
  function validaterooms() {
    var room = document.getElementById("noofrooms").value;
    if (room <= 0)
      return "Please give a number ";
    else return "";
  }
  function validatenumber()
  {
      var num = document.getElementById("number").value;
      if(/^[6-9][0-9]{9}$/.test(num)){
          return "";
      }
      else{
          return "please give a valid number"
      }
  }
  function validateNoofPersons() {
    var nu = document.getElementById("noofpersons").value;
    if (nu >= 25)
      return "Please enter number less than 25";
    else return "";
  }
  