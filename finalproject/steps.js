$(document).ready(function () {
  $("#bt").click(function () {
    var result = "";
    result +=squarearea();
    result += validatetext();
    result += validateFName();
    result += validateLName();
    result += validateEmail();
    result += validatePhoneno();
    result += City();
    result += validatepin();
    
  
    if (result == "") {
      
      var data={};
      data.plan= $(".radio:checked").val();
      data.build=$("#ba").val();
      data.ward= $("#war").val();
      data.hall= $("#war1").val();
      data.study= $("#war2").val();
      data.fname= $("#fn").val();
      data.lname= $("#ln").val();
      data.email= $("#em").val();
      data.phone=$("#phone").val();
      data.city=$("#cit").val();
      data.address=$("#area").val();
      data.pin=$("#pincode").val();
                    $.ajax({
                        type:"POST",
                        url:"http://localhost:4013/createapp/",
                        data:JSON.stringify(data),
                        contentType:"application/json; charset=utf-8",
                        dataType:"json",
                        success:function(d){
                          swal(
                            "Thank you",
                            "Your Appoinment has been recorded.Our Team Will Respond you in 24 hrs",
                            "success"
                          );
                        },
                        error:function(jqxhr){
                            alert('Error in inserting the data into data base');
                        }
                    })  

return true;
} else {
window.alert(result);
return false;
}

  function squarearea() {
    var b = document.getElementById("ba").value;
    if (b == "") return "Enter Build Area\n";
     else return "";
  }
  function validatetext() {
    var box = document.getElementById("area").value;
    if (box == "") return "Enter Full Address\n";
    else return "";
  }
  function validatepin() {
    var reg = /^[0-9]{6}$/;
    var pin = document.getElementById("pincode").value;
    if (pin == "") return "ENTER PIN CODE\n";
    if (reg.test(pin)) return "";
    else return "INVALID PIN CODE";
  }
  function validateFName() {
    var regn = /^[a-zA-Z\s]*$/;
    var name = document.getElementById("fn").value;
    if (name == "") return "ENTER FIRST NAME\n";
  
    if (regn.test(name)) return "";
    else return "INVALID NAME\n";
  }
  function validateLName() {
    var regl = /^[a-zA-Z\s]*$/;
    var name1 = document.getElementById("ln").value;
    if (name1 == "") return "ENTER LAST NAME\n";
    if (regl.test(name1)) return "";
    else return "INVALID NAME\n";
  }
  
  function validateEmail() {
    var reg1 = /^[a-zA-z0-9._-]{6,25}[@][a-z]{3,15}[.][a-z]{2,6}$/;
    var uid = document.getElementById("em").value;
  
    if (uid == "") return "ENTER EMAIL ID\n";
  
    if (reg1.test(uid)) return "";
    else return "ENTER CORRECT EMAIL ID\n";
  }
  
  function validatePhoneno() {
    var num = /^[6-9][0-9]{9}$/;
    var psd = document.getElementById("phone").value;
    if (psd == "") {
      return "ENTER PHONE NUMBER\n";
    }
    if (num.test(psd)) return "";
    else return "ENTER VALID PHONE NUMBER\n";
  }
  function City() {
    var city = document.getElementById("cit").value;
    var regc = /^[a-zA-Z\s]*$/;
    if (city == "") return "PLEASE ENTER CITY NAME\n";
    if (regc.test(city)) return "";
    else return "INVALID CITY NAME\n";
  }
});
});
  function res() {
    document.getElementById("myForm").reset();
  }
  function increaseValue() {
    var value = parseInt(document.getElementById("war").value);
    if (value < 100) value++;
    else if (value > 100) value = value;
    document.getElementById("war").value = value;
  }

  function decreaseValue() {
    var value = parseInt(document.getElementById("war").value);
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
    document.getElementById("war").value = value;
  }
  function increaseValue1() {
    var value = parseInt(document.getElementById("war1").value);
    if (value < 100) value++;
    else if (value > 100) value = value;
    document.getElementById("war1").value = value;
  }

  function decreaseValue1() {
    var value = parseInt(document.getElementById("war1").value);
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
    document.getElementById("war1").value = value;
  }
  function increaseValue2() {
    var value = parseInt(document.getElementById("war2").value);
    if (value < 100) value++;
    else if (value > 100) value = value;
    document.getElementById("war2").value = value;
  }

  function decreaseValue2() {
    var value = parseInt(document.getElementById("war2").value);
    value = isNaN(value) ? 0 : value;
    value < 1 ? (value = 1) : "";
    value--;
    document.getElementById("war2").value = value;
  }  