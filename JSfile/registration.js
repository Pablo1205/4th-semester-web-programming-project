
function Validation()  {
    var fn = document.getElementById("fname").value;
    var ln = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var ad = document.getElementById("ad").value;
    var zipc = document.getElementById("zip").value;
    var city = document.getElementById("city").value;
    
    if(fn== "") {
        alert("Please enter your first name");
        return false;
    }
    if(ln == "") {
        alert("Please enter your last name");
        return false;
    }
    if(mail == "") {
        alert("Please enter your mail");
        return false;
    }
    if(ad== "") {
        alert("Please enter your adress");
        return false;
    }
    if(zipc == "") {
        alert("Please enter your Zipcode");
        return false;
    }
    if(city== "") {
        alert("Please enter your city");
        return false;
    }
    return true;
}

function Va (){
    var gender =  getGender();
    var chD = getChd();
    if (Validation()==true){
        alert( "This is a summary of your information : \n" +
        "Your first name : " + document.getElementById("fname").value  + 
        "\nYour last name : " + document.getElementById("lname").value +
        "\nYour gender : " + gender +
        "\nYour mail : " + document.getElementById("mail").value +
        "\nYour adress : " + document.getElementById("ad").value +
        "\nYour Zipcode : " + document.getElementById("zip").value +
        "\nYour city : " + document.getElementById("city").value  +
        "\nYour choice of diets : " + chD
        );
    }
}

function getGender(){
    var g = document.querySelectorAll('input');
    for (var i = 0; i < g.length; i++) {
        if ( g[i].checked === true ) break;
		}
	return g[i].value;
    
}

function getChd()
{
    var select = document.getElementById( 'chd' ),
    
    index = select.selectedIndex;
    
    return select.options[ index ].value ; 
}


