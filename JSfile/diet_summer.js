var type_week_tableForm = document.forms.type_week_table; 

function removeAll () {
    window.location.reload();
}


function loadTableData() {

    console.log("ok");
    var row = document.getElementById("breakfast");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Breakfast</B>";
    var x = row.insertCell(1);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Drink";
    var x = row.insertCell(2);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Drink";
    var x = row.insertCell(3);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Drink";
    var x = row.insertCell(4);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Drink";
    var x = row.insertCell(5);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Drink";
    var x = row.insertCell(6);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Drink";
    var x = row.insertCell(7);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Drink";
  
    var row = document.getElementById("lunch");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Lunch</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(2);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(3);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(4);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(5);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(6);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(7);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";

    var row = document.getElementById("meal");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Meal</B>";
    var x = row.insertCell(1);
    x.innerHTML = "1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(2);
    x.innerHTML = "1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(3);
    x.innerHTML = "None";
    var x = row.insertCell(4);
    x.innerHTML = "1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(5);
    x.innerHTML = "1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(6);
    x.innerHTML = "None";
    var x = row.insertCell(7);
    x.innerHTML = "None";

    var row = document.getElementById("dinner");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Dinner</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(2);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(3);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(4);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(5);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(6);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(7);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>1 Fruit<br>or<br>1 Yogurt";

    var row = document.getElementById("sport_program");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Sport Program</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Long running<br>1h";
    var x = row.insertCell(2);
    x.innerHTML = "Abdominals <br>30 min<br><br>Muscle cladding<br>30 min";
    var x = row.insertCell(3);
    x.innerHTML = "Break";
    var x = row.insertCell(4);
    x.innerHTML = "Long running at higher speed<br>45 min";
    var x = row.insertCell(5);
    x.innerHTML = "Legs and booty <br>30 min<br><br>Muscle cladding<br>30 min";
    var x = row.insertCell(6);
    x.innerHTML = "Break";
    var x = row.insertCell(7);
    x.innerHTML = "Break";  
  }