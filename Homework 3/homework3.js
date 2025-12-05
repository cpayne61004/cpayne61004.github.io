// Name: Carter Payne
// File: homework3.js
// Date Created: 2025-10-20
// Date Updated: 2025-11-10
// Description: Javascript for Patient Form
// To start error check
function errors()
  {
    var error_indicator = 0;
  }
//To validate first name
function valifirstname()
{
  x = document.getElementById("fname").value;
  if(x.length<2)
  {
    document.getElementById("name_error").innerHTML = "First name too short.";
    error_indicator = 1;
  }
  else
  {
    if(x.match(/^[a-zA-Z'-]+$/))
    {
    document.getElementById("name_error").innerHTML = "";
    }
    else
    {
    document.getElementById("name_error").innerHTML = "Invalid characters in first name.";
    error_indicator = 1;
    }
  }
}
//To validate middle initial
function valimiddlein()
{
  x = document.getElementById("midin").value;
  if(x.length>0)
  {
    if(x.match(/^[a-zA-Z]+$/))
    {
    document.getElementById("name_error").innerHTML = "";
    }
    else
    {
    document.getElementById("name_error").innerHTML = "Invalid characters in middle initial.";
    error_indicator = 1;
    }
  }
}
//To validate last name
function valilastname()
{
  x = document.getElementById("lname").value;
  if(x.length<2)
  {
    document.getElementById("name_error").innerHTML = "Last name too short.";
    error_indicator = 1;
  }
  else
  {
    if(x.match(/^[a-zA-Z3-5'-]+$/))
    {
    document.getElementById("name_error").innerHTML = "";
    }
    else
    {
    document.getElementById("name_error").innerHTML = "Invalid characters in last name.";
    error_indicator = 1;
    }
  }
}
//To validate social security number
function valisocsec()
{
  x = document.getElementById("socsec").value;
  if(x.length<8)
  {
    document.getElementById("socsec_error").innerHTML = "Social security number too short.";
    error_indicator = 1;
  }
  else
  {
    if(x.match(/^[1-9-]+$/))
    {
    document.getElementById("socsec_error").innerHTML = "";
    }
    else
    {
    document.getElementById("socsec_error").innerHTML = "Invalid characters in social security number.";
    error_indicator = 1;
    }
  }
}
//To validate first address
function valiaddr1()
{
  x = document.getElementById("addr1").value;
  if(x.length<2)
  {
    document.getElementById("addr1_error").innerHTML = "Enter something in address field.";
    error_indicator = 1;
  }
  else
  {
    document.getElementById("addr1_error").innerHTML ="";
  }
}
//To validate city
function valicity()
{
  x = document.getElementById("city").value;
  if(x.length<2)
  {
    document.getElementById("citystatezip_error").innerHTML = "City name too short.";
    error_indicator = 1;
  }
  else
  {
    document.getElementById("citystatezip_error").innerHTML = "";
  }
}
//To validate state
function valistate()
{
  x = document.getElementById("state").value;
  if(x=="")
  {
    document.getElementById("citystatezip_error").innerHTML = "Please choose a state.";
    error_indicator = 1;
  }
  else
  {
    document.getElementById("citystatezip_error").innerHTML = "";
  }
}
//To validate zip code
function valizip()
{
  x = document.getElementById("zip").value;
  if(x.length<4)
  {
    document.getElementById("citystatezip_error").innerHTML = "Zip code too short.";
    error_indicator = 1;
  }
  else
  {
    if(x.match(/[1-9-]+$/))
    {
    document.getElementById("citystatezip_error").innerHTML = "";
    }
    else
    {
    document.getElementById("citystatezip_error").innerHTML = "Invalid characters in zip code.";
    error_indicator = 1;
    }
  }
}
//To validate phone number
function valiphone()
{
  x = document.getElementById("phone").value;
  if(x.length<12)
  {
    document.getElementById("phone_error").innerHTML = "Phone number too short.";
    error_indicator = 1;
  }
  else
  {
    if(x.match(/[1-9-]+$/))
    {
    document.getElementById("phone_error").innerHTML = "";
    }
    else
    {
    document.getElementById("phone_error").innerHTML = "Invalid characters in phone number.";
    error_indicator = 1;
    }
  }
}
//To validate email address
function valiemail()
{
  x = document.getElementById("email").value;
  if(x.length<1)
  {
    document.getElementById("email_error").innerHTML = "Please enter email.";
    error_indicator = 1;
  }
  else
  {
    if(x.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/))
    {
    document.getElementById("email_error").innerHTML = "";
    }
    else
    {
    document.getElementById("email_error").innerHTML = "Improper email format.";
    error_indicator = 1;
    }
  }
}
//To validate user id
function valiuserid()
{
  x = document.getElementById("userid").value;
  if(x.length<4)
  {
    document.getElementById("userid_error").innerHTML = "User ID must be at least 5 characters.";
    error_indicator = 1;
  }
  else
  {
    if(x.match(/^[^0-9]+[a-zA-Z0-9._%+-]+$/))
    {
    document.getElementById("userid_error").innerHTML = "";
    }
    else
    {
    document.getElementById("userid_error").innerHTML = "Improper user ID format.";
    error_indicator = 1;
    }
  }
}
//To validate first password
function valipassword()
{
  x = document.getElementById("pass").value;
  if(x.length<8)
  {
    document.getElementById("passcheck2").innerHTML = "Password too short.";
    error_indicator = 1;
  }
  else
  {
    document.getElementById("passcheck2").innerHTML = "";
  }
  if(x.match(/[a-z]/))
    {
    document.getElementById("passcheck3").innerHTML = "";
    }
  else
  {
    document.getElementById("passcheck3").innerHTML = "Must contain at least 1 lowercase letter.";
    error_indicator = 1;
  }
  if(x.match(/[A-Z]/))
    {
    document.getElementById("passcheck4").innerHTML = "";
    }
  else
  {
    document.getElementById("passcheck4").innerHTML = "Must contain at least 1 uppercase letter.";
    error_indicator = 1;
  }
  if(x.match(/[0-9]/))
    {
    document.getElementById("passcheck5").innerHTML = "";
    }
  else
  {
    document.getElementById("passcheck5").innerHTML = "Must contain at least 1 number.";
    error_indicator = 1;
  }
  if(x.match(/[!@#%^&*+=\/.,`~]/))
    {
    document.getElementById("passcheck6").innerHTML = "";
    }
  else
  {
    document.getElementById("passcheck6").innerHTML = "Must contain at least 1 special character: ! @ # % ^ & * + = \ / . , ` ~";
    error_indicator = 1;
  }
}
//to create text that indicated whether passwords are matching
function passwordmatch() 
{
  passvalue = document.getElementById("pass");
  repassvalue = document.getElementById("repass");
  if (passvalue.value==repassvalue.value) 
  {
    document.getElementById("passcheck").innerHTML = "The Passwords Match";
  }
  else 
  {
    document.getElementById("passcheck").innerHTML = "The Passwords Do Not Match";
    error_indicator = 1;
  }
}
//To validate everything so submit button can be enabled
function datacheck()
{
  error_indicator = 0;
  valifirstname();
  valimiddlein();
  valilastname();
  valisocsec();
  valiaddr1();
  valicity();
  valistate();
  valizip();
  valiphone();
  valiemail();
  valiuserid();
  valipassword();
  passwordmatch();
  if (error_indicator != 0)
    {
      alert("Please Fix Indicated Errors")
    }
  else 
  {
    document.getElementById("submit").disabled = false;
  }
}
//This is to display the data review pop up 
 function reviewdata1()
 {
  let formcontents = document.getElementById("registration");
  let formoutput;
  let datatype;
  let i;
  formoutput = "<table class='output'><th>Name</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) 
  {
    datatype = formcontents.elements[i].type;
    switch (datatype)
    {
      case "checkbox":
        if (formcontents.elements[i].checked)
        {
          formoutput = formoutput + "<tr><td>"+formcontents.elements[i].name+"</td>";
          formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (formcontents.elements[i].checked)
        {
          formoutput = formoutput + "<tr><td>"+formcontents.elements[i].name+"</td>";
          formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
        }
        break;
      case "button": case "submit": case "reset":
        break;
      default:
        formoutput = formoutput + "<tr><td>"+formcontents.elements[i].name+"</td>";
        formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
    }
  } 
  formoutput += "</table>";
  document.getElementById("formdataoutputted").innerHTML = formoutput;
  }

//This is to diplay pain level slider value
let slider = document.getElementById("painlevel");
let output = document.getElementById("displaypain");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value
}
//creating variables in order to set the min and max options for input type="date" that are dynamic
const currday = new Date();
const maxDate = currday.toISOString().split('T')[0];
const minDate = new Date(currday.getFullYear() - 120, currday.getMonth(), currday.getDate()).toISOString().split('T')[0];
const birthdateInput = document.getElementById("birthdate");
birthdateInput.setAttribute('max', maxDate);
birthdateInput.setAttribute('min', minDate);


