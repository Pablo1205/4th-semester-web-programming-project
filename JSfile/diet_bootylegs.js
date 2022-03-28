var type_week_tableForm = document.forms.type_week_table; 

function removeAll () {
    window.location.reload();
}


function loadTableData() {

    var row = document.getElementById("breakfast");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Breakfast</B>";
    var x = row.insertCell(1);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Protein shakes";
    var x = row.insertCell(2);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Protein shakes";
    var x = row.insertCell(3);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Protein shakes";
    var x = row.insertCell(4);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Protein shakes";
    var x = row.insertCell(5);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Protein shakes";
    var x = row.insertCell(6);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Protein shakes";
    var x = row.insertCell(7);
    x.innerHTML = "1 Fruit<br>+<br>1 Yogurt<br>+<br>1 Protein shakes";
  
    var row = document.getElementById("lunch");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Lunch</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Vegetables<br>+<br>Fish<br>+<br>1 Fruit";
    var x = row.insertCell(2);
    x.innerHTML = "Vegetables<br>+<br>Eggs<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(3);
    x.innerHTML = "Vegetables and Quinoa <br>+<br>1 Fruit";
    var x = row.insertCell(4);
    x.innerHTML = "Vegetables<br>+<br>Rice<br>+<br>White meat<br>+<br>1 Fruit";
    var x = row.insertCell(5);
    x.innerHTML = "Vegetables<br>+<br>White meat<br>+<br>1 Fruit";
    var x = row.insertCell(6);
    x.innerHTML = "Vegetables<br>+<br>Protein<br>+<br>Starchy food<br>+<br>1 Fruit";
    var x = row.insertCell(7);
    x.innerHTML = "Vegetables<br>+<br>Rice<br>+<br>1 Fruit";

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
    x.innerHTML = "Vegetables<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(2);
    x.innerHTML = "Vegetables<br>+<br>Fish<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(3);
    x.innerHTML = "Quinoa<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(4);
    x.innerHTML = "Vegetables<br>+<br>Chicken<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(5);
    x.innerHTML = "Vegetables<br>+<br>Eggs<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(6);
    x.innerHTML = "Vegetables<br>+<br>1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(7);
    x.innerHTML = "Vegetables<br>+<br>Chicken Breast<br>+<br>1 Fruit<br>or<br>1 Yogurt";

    var row = document.getElementById("sport_program");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Sport Program</B>";
    var x = row.insertCell(1);
    x.innerHTML = "10 min of bycicle <br>35 squats";
    var x = row.insertCell(2);
    x.innerHTML = "High & Tight<br>30 min";
    var x = row.insertCell(3);
    x.innerHTML = "Break";
    var x = row.insertCell(4);
    x.innerHTML = "Cardio <br>30 min<br> 100 single leg hip thrust";
    var x = row.insertCell(5);
    x.innerHTML = "Squats<br>30 min<br><br>Muscle cladding<br>30 min";
    var x = row.insertCell(6);
    x.innerHTML = "Cardio<br>10min<br>High & Thight<br>Squats<br>10min";
    var x = row.insertCell(7);
    x.innerHTML = "Break";  
  }