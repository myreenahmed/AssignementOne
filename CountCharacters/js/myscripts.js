//defining function that counts characters
function countChar() {
  var v = document.getElementById("characterinput").value;
  // trimming the spaces
  var len = v.trim().length;

  document.getElementById("result").value = len;
  //ensuring user inputs data
  if (len <= 0) {
    alert("Error!! Please enter your text!");
  }
}