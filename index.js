var Tasks=[];
var i=0;

function addElement(){
    var value = document.getElementById("input").value;
    alert("Task added!!");
    Tasks[i]=value;
    i++;

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var t = document.createTextNode(value);
    console.log(t)
    div2.appendChild(t);
    div1.className="item";
    console.log(div2)
    div1.appendChild(div2);


    var div3 = document.createElement("div")
    div3.className="item row";
    var div21 = document.createElement("div")
    div21.className="col-2";
    var ip = document.createElement("input")
    ip.type="checkbox"
    ip.value=value;
    div21.appendChild(ip);
    div3.appendChild(div21);

    var div22 = document.createElement("div")
    div22.className="col-8"
    var t1 = document.createTextNode(value)
    div22.appendChild(t1);
    div3.appendChild(div22);

    var div23 = document.createElement("div")
    div23.className="col-2"
    var i = document.createElement("i");
    i.className="fa fa-trash"
    div23.appendChild(i);
    div3.appendChild(div23);

    console.log(div1)
    console.log(div3)

    if(value === " "){
        alert("You must write something...");
    }
    else{
        document.getElementById("task").appendChild(div1);
        document.getElementById("updates").appendChild(div3);
    }

    document.getElementById("input").value=" ";
}