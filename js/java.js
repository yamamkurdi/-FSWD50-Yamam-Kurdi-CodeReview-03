for(var i=0; i<teamMembers.length;i++){
	var team =teamMembers[i];
	document.getElementById("our-team").innerHTML+='<div id="container"><img src="'+team.image+'" id ="imgs"><p>'+team.name+'</p>'+team.email+'</div>';
}


function calculateInsurance(){
	var name =	document.getElementById('Name').value;
	var age = document.getElementById('Age').value;
	var horsepower = document.getElementById("Horsepower").value;
	var country = document.getElementById("Country").value;
	if(country=="Austria"){
		var insurance = (horsepower*100)/(Number(age)+50);
		document.getElementById("result").innerHTML=name+" Your insurance costs in "+country+" is: "+Math.floor(insurance)+"€";
	}
	else if(country=="Hungary"){
		var insurance2 = (horsepower*120)/(Number(age)+100);
		document.getElementById("result").innerHTML=name+" Your insurance costs in "+country+" is : "+Math.floor(insurance2)+"€";
	}
	else if(country=="Gereece") {
		var insurance3 = (horsepower*150)/(Number(age+3)+150);
		document.getElementById("result").innerHTML=name+" Your insurance costs in "+country+" is : "+Math.floor(insurance3)+"€";
	}else {
		document.getElementById("result").innerHTML="We don't have information about this country.";
	}
	return false;
}