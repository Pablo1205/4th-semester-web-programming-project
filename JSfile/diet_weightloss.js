var type_week_tableForm = document.forms.type_week_table; 

function removeAll () {
    window.location.reload();

}


function loadTableData() {

    var row = document.getElementById("breakfast");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Breakfast</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Green tea<br>+<br>Apple";
    var x = row.insertCell(2);
    x.innerHTML = "Green tea<br>+<br>Grain bread";
    var x = row.insertCell(3);
    x.innerHTML = "1 Fruit<br>+<br>Orange juice or coffee";
    var x = row.insertCell(4);
    x.innerHTML = "Cereals <br<+<br> Milk";
    var x = row.insertCell(5);
    x.innerHTML = "1 Apple<br>+<br>Green tea";
    var x = row.insertCell(6);
    x.innerHTML = "Bread <br>+<br>Butter<br>+<br>Green tea";
    var x = row.insertCell(7);
    x.innerHTML = "What you want";
  
    var row = document.getElementById("lunch");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Lunch</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Pasta<br>+<br>Steak<br>+<br>Fruit";
    var x = row.insertCell(2);
    x.innerHTML = "100g of rice<br>+<br>200g of chicken<br>+<br>Cottage cheese with red berries";
    var x = row.insertCell(3);
    x.innerHTML = "Mashed potatoes<br>+<br>Steak<br>+<br>Red fruit and fromage blanc";
    var x = row.insertCell(4);
    x.innerHTML = "Pasta<br>+<br>Protein (what you want)";
    var x = row.insertCell(5);
    x.innerHTML = "Tomatoes<br>+<br>Potatoes<br>+<br>Ham<br>+<br>1 Fruit";
    var x = row.insertCell(6);
    x.innerHTML = "Pasta<br>+<br>Steak";
    var x = row.insertCell(7);
    x.innerHTML = "Vegetables<br>+<br>Ham<br>+<br>1 Yogurt";

    var row = document.getElementById("meal");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Meal</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Cereal bart<br>+<br>water";
    var x = row.insertCell(2);
    x.innerHTML = "Cereal bart<br>+<br>water";
    var x = row.insertCell(3);
    x.innerHTML = "None";
    var x = row.insertCell(4);
    x.innerHTML = "1 Fruit<br>or<br>1 Yogurt";
    var x = row.insertCell(5);
    x.innerHTML = "Cereal bar";
    var x = row.insertCell(6);
    x.innerHTML = "Cereal bar <br>+<br>Orange juice";
    var x = row.insertCell(7);
    x.innerHTML = "None";

    var row = document.getElementById("dinner");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Dinner</B>";
    var x = row.insertCell(1);
    x.innerHTML = "100g green bean<br>260g codfish<br>+<br>Yogurt";
    var x = row.insertCell(2);
    x.innerHTML = "An artichoke<br>+<br>100g green bean<br>+<br>Yogurt";
    var x = row.insertCell(3);
    x.innerHTML = "Ratatouille<br>+<br>Chicken<br>+<br>Dessert (what you want)";
    var x = row.insertCell(4);
    x.innerHTML = "Tomtato velet<br>+<br>1 Apple";
    var x = row.insertCell(5);
    x.innerHTML = "Carrots and Courgette<br>+<br>Rice<br>+<br>Salmon<br>+<br>1 Fruit";
    var x = row.insertCell(6);
    x.innerHTML = "Salad <br>+<br>Beef and carrots<br>+<br>1 Yogurt and A fruit";
    var x = row.insertCell(7);
    x.innerHTML = "Salad<br>+<br>Chicken Breast<br>+<br>1 Fruit<br>";

    var row = document.getElementById("sport_program");

    var x = row.insertCell(0);
    x.innerHTML = "<B>Sport Program</B>";
    var x = row.insertCell(1);
    x.innerHTML = "Jogging for 5 min";
    var x = row.insertCell(2);
    x.innerHTML = "1 video of your program";
    var x = row.insertCell(3);
    x.innerHTML = "Break";
    var x = row.insertCell(4);
    x.innerHTML = "1 video of your program";
    var x = row.insertCell(5);
    x.innerHTML = "Jogging for 20min";
    var x = row.insertCell(6);
    x.innerHTML = "2 hours with your coach";
    var x = row.insertCell(7);
    x.innerHTML = "Break";  
  }