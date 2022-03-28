var cpt = 0;

function Validation()  {
    var h = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var w = document.getElementById("weight").value;
    var id_w = document.getElementById("id_weight").value;

    
    if(h== "") {
        alert("Please enter your height");
        return false;
    }
    if(age== "") {
        alert("Please enter your age");
        return false;
    }
    if(w == "") {
        alert("Please enter your weight");
        return false;
    }
    if(id_w== "") {
        alert("Please enter your ideal weight");
        return false;
    }
    return true;
}


function ShowResult(id1)
{
        if(document.getElementById(id1).style.visibility=="hidden")
        {
            document.getElementById(id1).style.visibility="visible";
        }else{
            document.getElementById(id1).style.visibility="visible";
        }
        return true;
}

function ShowBtns(id1,id2)
{
        if(document.getElementById(id1).style.visibility=="hidden")
        {
            document.getElementById(id1).style.visibility="visible";
        }else{
            document.getElementById(id1).style.visibility="visible";
        }
        if(document.getElementById(id2).style.visibility=="hidden")
        {
            document.getElementById(id2).style.visibility="visible";
        }else{
            document.getElementById(id2).style.visibility="visible";
        }
        return true;
}

function addElem () {
    if (Validation()==true) {
        ShowResult('result');
    
        const newItem = document.createElement('tr')
        const genderTd = document.createElement('td')
        const heightTd = document.createElement('td')
        const weightTd = document.createElement('td')
        const id_weightTd = document.createElement('td')
        const bonestructTd = document.createElement('td')
        const imcTd = document.createElement('td')
        var powerH = (document.newUser.height.value)*(document.newUser.height.value)

        genderTd.textContent = document.newUser.gender.value
        heightTd.textContent = document.newUser.height.value
        weightTd.textContent = document.newUser.weight.value
        id_weightTd.textContent = document.newUser.id_weight.value
        bonestructTd.textContent = document.newUser.Bone_structure.value
        imcTd.textContent = ((document.newUser.weight.value)/powerH)*10000;
            
        newItem.append(genderTd, heightTd, weightTd, id_weightTd,bonestructTd, imcTd )
        /* le premier élément dans le document qui contient la classe "datatable" est retourné*/
        const table = document.querySelector('.datatable tbody')

        table.appendChild(newItem)

        if (imcTd.textContent<18.5){
            alert("BE CAREFUL, you are underwieght !! ")
        }else if (imcTd.textContent>18.5 && imcTd.textContent<25){
            alert( "Don't worry, you are in the norm")
        }else if (imcTd.textContent>25){
            alert("BE CAREFUL, you are overweight !");
        }else if (imcTd.textContent>30){
            alert("BE CAREFUL, you reach the obesity !");
        }else {
        }if (imcTd.textContent>35){
            alert("BE CAREFUL, you are in severe obesity !!");
        }
    }

        /*cpt=cpt+1;
        if (cpt>=5){
            ShowBtns('prevpage','nextpage'); 
        }else{
            //après les 5 ils deviennent
        }
    }else{
        alert("You have to complete the form");
        
    }*/
}

/*
function addElem2 (gender, height, weight, id_weight,bonestruct,imc) {
    
    const newItem = document.createElement('tr')
    const genderTd = document.createElement('td')
    const heightTd = document.createElement('td')
    const weightTd = document.createElement('td')
    const id_weightTd = document.createElement('td')
    const bonestructTd = document.createElement('td')
    const imcTd = document.createElement('td')
    /*var powerH = (height)*(height)

    genderTd.textContent =gender
    heightTd.textContent = height
    weightTd.textContent = weight
    id_weightTd.textContent = id_weight
    bonestructTd.textContent = bonestruct
    imcTd.textContent = ((imc)/powerH)*10000;
    var powerH = (document.newUser.height.value)*(document.newUser.height.value)
        
    genderTd.textContent = document.newUser.gender.value
    heightTd.textContent = document.newUser.height.value
    weightTd.textContent = document.newUser.weight.value
    id_weightTd.textContent = document.newUser.id_weight.value
    bonestructTd.textContent = document.newUser.Bone_structure.value
    imcTd.textContent = ((document.newUser.weight.value)/powerH)*10000;

    newItem.append(genderTd, heightTd, weightTd, id_weightTd,bonestructTd, imcTd )
    /* le premier élément dans le document qui contient la classe "datatable" est retourné
    const table = document.querySelector('.datatable tbody')

    table.appendChild(newItem)
    
}

function Prev(){
    const nextpage = document.getElementById('nextpage');
    const prevpage = document.getElementById('prevpage');
    var i;
    nextpage.disabled=false;
    prevpage.disabled=false;
    removeTasks();

    if (cpt<=5){
        prevpage.disabled=true;
    };

    cpt=cpt-5;

    for (i=cpt ;i<5+cpt;i++){ 
        addElem2(gender[i], height[i], weight[i], id_weight[i],bonestruct[i],imc[i]);
    }
}

function Next(){
    const nextpage = document.getElementById('nextpage');
    const prevpage = document.getElementById('prevpage');
    prevpage.disabled=false;
    var i;
    removeTasks();

    if (cpt>=100){
        nextpage.disabled=true;
    };

    cpt=cpt+5;

    for (i=cpt ;i<5+cpt;i++){
        addElem2(gender[i], height[i], weight[i], id_weight[i],bonestruct[i],imc[i]);
    }
}

function removeTasks() {
    const tasks = document.querySelector('.datatable tbody')
    while (tasks.firstChild) {
    tasks.removeChild(tasks.firstChild)
    }
}
*/