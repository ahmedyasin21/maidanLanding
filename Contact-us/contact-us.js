function msgprint() {  
  emailjs.send("service_mcwv8iw","template_k4m3col",{
  from_name: document.getElementById("fullName").value,
  email_id: document.getElementById("email").value,
  message: document.getElementById("Message").value,
  phone: document.getElementById("phone").value,
  
  }).then(function(response) {
     console.log('Contact with customer service if the issue is not resolve with in 2days', response.status, response.text);
     alert("Contact with customer service if the issue is not resolve with in 2days ")
  }, function(error) {
     console.log('FAILED...', error);
     alert("FAILED : "+response.status)
  });
  console.log("egee")
   alert("You succesfully submiit a massage!");  
}  

// nav burger
function onClickManu(){
   document.getElementById("navbarSupportedContent").classList.toggle("show");
}

