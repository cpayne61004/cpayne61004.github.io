// Name: Carter Payne
// File: homework2.js
// Date Created: 2025-10-20
// Date Updated: 2025-10-23
// Description: Javascript for Patient Form
 
//This is to display the data review pop up 
 function reviewdata1(){
  let formcontents = document.getElementById("registration");
  let formoutput;
  let datatype;
  let i;
  formoutput = "<table class='output'><th>Name</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
    datatype = formcontents.elements[i].type;
    switch (datatype){
      case "checkbox":
        if (formcontents.elements[i].checked){
          formoutput = formoutput + "<tr><td>"+formcontents.elements[i].name+"</td>";
          formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
        }
        break;
      case "radio":
        if (formcontents.elements[i].checked){
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

//to created text that indicated whether passwords are matching
function passwordmatch() {
  passvalue = document.getElementById("pass");
  repassvalue = document.getElementById("repass");
  if (passvalue.value==repassvalue.value) {
    document.getElementById("passcheck").innerHTML = "The Passwords Match"
  }
  else {
    document.getElementById("passcheck").innerHTML = "The Passwords Do Not Match"
  }
}

//creating variables in order to set the min and max options for input type="date" that are dynamic
const currday = new Date();
const maxDate = currday.toISOString().split('T')[0];
const minDate = new Date(currday.getFullYear() - 120, currday.getMonth(), currday.getDate()).toISOString().split('T')[0];
const birthdateInput = document.getElementById("birthdate");
birthdateInput.setAttribute('max', maxDate);
birthdateInput.setAttribute('min', minDate);