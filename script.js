let addBtn = document.getElementById("addBtn");
let textBox = document.getElementById("textBox");
let listBox = document.getElementById("listBox");



function SaveData(){
localStorage.setItem("data" , listBox.innerHTML);

};

function returnData(){
    listBox.innerHTML = localStorage.getItem("data");
   
};



function clicked(){
if(textBox.value === '')
{
    alert("TASK CAN'T BE EMPTY !");
}
else{
let li = document.createElement("li");

li.innerHTML = textBox.value;
listBox.appendChild(li);

let span = document.createElement("span");
li.appendChild(span);


textBox.value = "";
SaveData();
}

}


listBox.addEventListener("click", function(e){
    

    if (e.target.tagName === "LI"){
       
        {
            e.target.classList.toggle("item");
            // e.target.background-color.toggle( greenyellow);
            SaveData();
        };
       
    }

    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        SaveData();
    }

    }
)


returnData();