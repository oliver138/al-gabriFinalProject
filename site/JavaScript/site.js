function myFunction1() {
    alert("Registration completed successfully Thank you ");
  }
  function myFunction() {
    var n = document.getElementById("navId");
    if (n.className === "nav") {
      n.className += " navRes";
    } else {
      n.className = "nav";
    }
  }