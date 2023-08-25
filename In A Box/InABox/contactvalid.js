function contactvalid(form)
	{
		// Creating Variable
		var username = document.contact.uname.value;
		var regname = /^[a-zA-Z ]+$/;
		var regcap = /^[A-Z]/
		var useremail = document.contact.mail.value;
		var regmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		var userph = document.contact.phone.value;
		var usermessage = document.contact.msg.value;
		

		// Name Validation
		if (username.length === 0) 
			{
				document.getElementById('cv1').innerHTML = "Please Enter Your  Name!";
            	return false;
         	}
        else if (regname.test(username) === false)
        	{
        		document.getElementById('cv1').innerHTML = "Please Enter Your  Name Only Words!";
        		return false;
        	}
        else if (regcap.test(username) === false)
        	{
        		document.getElementById('cv1').innerHTML = "Your  Name must start with Capital Letter. eg. Jessi Lim!";
        		return false;
        	}
		else if (!checkLength(username,4,50))	
			{
		 		document.getElementById('cv1').innerHTML = "Name must be between 4 and 50 words!";
				return false;
			}
		else
			{
			 	document.getElementById('cv1').innerHTML = "";
		 	}
		// Email Validation
		if (useremail.length === 0)	
			{
				document.getElementById('cv2').innerHTML = "Please Fill Your Email Address!";
				return false;
			}	
		else if (regmail.test(useremail) === false)	
			{
				document.getElementById('cv2').innerHTML = "Invalid Email Format!";
				return false;
			}
		else if (!checkLength(useremail,4,30))	
			{
		 		document.getElementById('cv2').innerHTML = "Email Address must be between 4 and 30 characters!";
				return false;
			}
		else
			{
			 	document.getElementById('cv2').innerHTML = "";
		 	}
		// For Phone Number Validation
		if (userph.length === 0) 	
			{
				document.getElementById('cv3').innerHTML = "Please Fill Your Phone Number!";
				return false;
			}
		else if (isNaN(userph))	
			{
				document.getElementById('cv3').innerHTML = "Please Fill Only Numbers!";
				return false;
			}
		else if (!checkLength(userph,11,11))	
			{
				document.getElementById('cv3').innerHTML = "Your Phone Number must be 11 digits!";
				return false;
			}
		else
			{
			 	document.getElementById('cv3').innerHTML = "";
		 	}
		// For Message Validation
		if (usermsg.length === 0) 	
			{
				document.getElementById('cv4').innerHTML = "Please Fill Your Message!";
				return false;
			}
		else if (!checkLength(usermsg,6,500))	
			{
				document.getElementById('cv4').innerHTML = "Your Address must between 6 and 500 characters!";
				return false;
			}
		else
			{
			 	alert("Message Sent");
		 	}
		//For Register Successful
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