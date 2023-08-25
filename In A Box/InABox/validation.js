function validate(form)
	{
		// Creating Variable
		var name = document.register.uname.value;
		var regname = /^[a-zA-Z ]+$/;
		var regcap = /^[A-Z]/
		var email = document.register.mail.value;
		var regmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		var pass = document.register.ps.value;
		var cpass = document.register.cps.value;
		var ph = document.register.phone.value;
		var add = document.register.address.value;
		

		// Name Validation
		if (name.length === 0) 
			{
				document.getElementById('v1').innerHTML = "Please Enter Your  Name!";
            	return false;
         	}
        else if (regname.test(name) === false)
        	{
        		document.getElementById('v1').innerHTML = "Please Enter Your  Name Only Words!";
        		return false;
        	}
        else if (regcap.test(name) === false)
        	{
        		document.getElementById('v1').innerHTML = "Your  Name must start with Capital Letter. eg. Jessi Lim!";
        		return false;
        	}
		else if (!checkLength(name,4,50))	
			{
		 		document.getElementById('v1').innerHTML = "Name must be between 4 and 50 words!";
				return false;
			}
		else
			{
			 	document.getElementById('v1').innerHTML = "";
		 	}
		// Email Validation
		if (email.length === 0)	
			{
				document.getElementById('v2').innerHTML = "Please Fill Your Email Address!";
				return false;
			}	
		else if (regmail.test(email) === false)	
			{
				document.getElementById('v2').innerHTML = "Invalid Email Format!";
				return false;
			}
		else if (!checkLength(email,4,30))	
			{
		 		document.getElementById('v2').innerHTML = "Email Address must be between 4 and 30 characters!";
				return false;
			}
		else
			{
			 	document.getElementById('v2').innerHTML = "";
		 	}
		// Password Validation
		if (pass.length === 0) 
			{
				document.getElementById('v3').innerHTML = "Please Fill Your Password!";
				return false;
			}
		else if (!checkLength(pass,8,30))	
			{
				document.getElementById('v3').innerHTML = "Password Lenght must be between 8 and 30 characters!";
				return false;
			}
		else
			{
			 	document.getElementById('v3').innerHTML = "";
		 	}
		// For Confirm Password Validation
		if (cpass.length === 0) 
			{
				document.getElementById('v4').innerHTML = "Please Fill Your Password to Confirm!";
				return false;
			}
		else if(pass!=cpass)	
			{
				document.getElementById("v4").innerHTML = "Confirm Password isn't match with Password!";
				return false;
			}
		else
			{
			 	document.getElementById('v4').innerHTML = "";
		 	}
		// For Gender Validation
		if(!checkRadioArray(form.gender))	
			{
				document.getElementById("v5").innerHTML = "Please Choose Your Gender!"
				return false;
			}
		else
			{
			 	document.getElementById('v5').innerHTML = "";
		 	}
		
		// For Phone Number Validation
		if (ph.length === 0) 	
			{
				document.getElementById('v6').innerHTML = "Please Fill Your Phone Number!";
				return false;
			}
		else if (isNaN(ph))	
			{
				document.getElementById('v6').innerHTML = "Please Fill Only Numbers!";
				return false;
			}
		else if (!checkLength(ph,11,11))	
			{
				document.getElementById('v6').innerHTML = "Your Phone Number must be 11 digits!";
				return false;
			}
		else
			{
			 	document.getElementById('v6').innerHTML = "";
		 	}
		// For Address Validation
		if (add.length === 0) 	
			{
				document.getElementById('v7').innerHTML = "Please Fill Your Address!";
				return false;
			}
		else if (!checkLength(add,6,256))	
			{
				document.getElementById('v7').innerHTML = "Your Address must between 6 and 256 characters!";
				return false;
			}
		else
			{
			 	alert("Register Successful");
		 	}
		//For Register Successful
		return true;
	}

function valid(form)
	{
		// Creating Variable
		var email = document.login.mail.value;
		var regmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		var pass = document.login.ps.value;
		
		// Email Validation
		if (email.length === 0)	
			{
				document.getElementById('vi1').innerHTML = "Please Fill Your Email Address!";
				return false;
			}	
		else if (regmail.test(email) === false)	
			{
				document.getElementById('vi1').innerHTML = "Invalid Email Format!";
				return false;
			}
		else if (!checkLength(email,4,30))	
			{
		 		document.getElementById('vi1').innerHTML = "Email Address must be between 4 and 30 characters!";
				return false;
			}
		else
			{
			 	document.getElementById('vi1').innerHTML = "";
		 	}
		// Password Validation
		if (pass.length === 0) 
			{
				document.getElementById('vi2').innerHTML = "Please Fill Your Password!";
				return false;
			}
		else if (!checkLength(pass,8,30))	
			{
				document.getElementById('vi2').innerHTML = "Password Lenght must be between 8 and 30 characters!";
				return false;
			}
		else
			{
			 	document.getElementById('vi2').innerHTML = " ";
		 	}
		//For Login Successful
		return true;
	}

function newpassvalid(form)
	{
		// Creating Variable
		var newpass = document.newpassword.nps.value;
		var newconfirmpass = document.newpassword.ncps.value;
		
		// Password Validation
		if (newpass.length === 0) 
			{
				document.getElementById('npvi1').innerHTML = "Please Fill Your New Password!";
				return false;
			}
		else if (!checkLength(newpass,8,30))	
			{
				document.getElementById('npvi1').innerHTML = "Password Lenght must be between 8 and 30 characters!";
				return false;
			}
		else
			{
			 	document.getElementById('npvi1').innerHTML = "";
		 	}
		// For Confirm Password Validation
		if (newconfirmpass.length === 0) 
			{
				document.getElementById('npvi2').innerHTML = "Please Fill Your New Confirm Password to Confirm!";
				return false;
			}
		else if(newpass!=newconfirmpass)	
			{
				document.getElementById("npvi2").innerHTML = "Confirm Password isn't match with Password!";
				return false;
			}
		else
			{
			 	document.getElementById('npvi2').innerHTML = "";
		 	}
		//For Login Successful
		return true;
	}

// Checking the length of input
function checkLength(text, min, max)
	{ 		
		min = min || 1; 		
		max = max || 10000;
		if (text.length < min || text.length> max) 
		{ 
			return false;
		}
 		return true;
 	}
// Checking that radio button is select or not
function checkRadioArray(radioButtons)	
	{
		for (var i=0; i < radioButtons.length; i++)
			{
				if (radioButtons[i].checked===true)	{
														return true;
													}
			}
		return false;
	}
							