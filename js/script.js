function submitFunc() {
  var textValue = document.getElementById('your-name').value;
  console.log(textValue);
  var error = false;
  if(textValue === "")
  {
    document.getElementById("message").innerHTML = "Error: No data in name";
    document.getElementById("errorMessage").style.visibility="visible";
    console.log("Error: No data in name ");
    error = true;
  }
  if(!(document.getElementById('question').checked))
  {
    document.getElementById("message").innerHTML = "Error: wrong answer to check box";
    document.getElementById("errorMessage").style.visibility="visible";
    console.log("Error: wrong answer.");
    error = true;
  }
  if(!error)
  {
    document.getElementById("errorMessage").style.visibility="hidden";
    document.getElementById("form").style.display='none';
    document.getElementById("successMessage").style.visibility = "visible";
  }
}
