var Tasks=[];
var i=0,j=0;

function addElement(){
    var v = document.getElementById("input").value;
    var value = v.trim();
    if(value !== ""){
        Tasks[i]=value;
        i++;
        print();
        alert("Task Added");
    }
    else{
        alert("You must write something");
    }
    document.getElementById("input").value="";
}

function print(){
    var T_txt=" ", U_txt=" ";
       
    Tasks.forEach(add)
    function add(value){
        T_txt = T_txt + `<div class="item"><div>${value}</div></div>`+ "\n";
        U_txt = U_txt + `<div class="item row">
                            <div class="col-2"><input type="checkbox" id="${value}"></div>
                            <div class="col-8">${value}</div>
                            <div class="col-2"><i class="fa fa-trash" onclick={deleteElement(${value})}></i></div>
                        </div>`
    }
    document.getElementById("task").innerHTML = T_txt;
    document.getElementById("updates").innerHTML = U_txt;
}

function deleteElement(ele){
    for(j=0; j< Tasks.length; j++){
        if(Tasks[j] == ele.id){
            Tasks.splice(j,1);
        }
    }
    i=Tasks.length;
    print();
}

function Onsubmit(){
    notDone=[];
    for(j=0; j< Tasks.length; j++){
        t = document.getElementById(Tasks[j]);
        if(t.checked == false)
        {
            notDone.push(Tasks[j]);
        }
        
    }
    Tasks=notDone;
    i=notDone.length;
    print();
}