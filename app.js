var listofActivities = [];

var input = document.getElementById("input");

var todolist = document.getElementById("todolist");

document.getElementById("button").onclick = click;


function click() {
    listofActivities.push(input.Value);
    console.log(listofActivities);

    input.Value = " ";
    showlist();
}

function showlist(){
    todolist,innerhtml= " ";
    listofActivities.forEach(function(n,i) {
        todolist.innerhtml += "<li>" + n + 
        "<a onclick= 'editItem(" + i + ")'>Edit</a>" + 
        "<a onclick= 'deleteItem(" + i + ")'>&times | </a></li>";
        
    })

}

function deleteItem(i){
    listofActivities.splice(i,1);
    showlist()
}

function editItem(i){
    var newValue = prompt(" Please insert your new value");
    listofActivities.splice(i, 1, newValue);
    showlist()
} 
