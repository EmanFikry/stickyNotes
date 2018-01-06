var text2;
var count=0;		
function saveToLocalStorage()
{
	//bring all tags of div
	var noteContent = document.getElementsByTagName("p");
	for (var i=0; i<noteContent.length;i++)
	{
		var newValue="id:id_"+i+"#$#desc:"+noteContent[i].innerHTML+"#$#color:"+noteContent[i].style.backgroundColor;
		window.localStorage.setItem("id_"+i ,newValue);
	}
	localStorage.setItem("countt",noteContent.length);
}

//get the value from local storage
function getValueLocal()
{
	count = localStorage.getItem("countt");

	for(var j=0;j<count;j++)
	{
		var str = window.localStorage.getItem("id_"+j);

		//if no item found with that ID skip it
        if(!str) continue ;

    	var res = str.split("#$#");
		var idd = res[0].split(":")[1];
		var deesc = res[1].split(":")[1];
	    var ccolor = res[2].split(":")[1];
		var x = document.createElement("p");
    	x.style.backgroundColor=ccolor;
    	x.setAttribute("id", idd);
    	x.setAttribute("contenteditable","true");
    	x.innerHTML=deesc;
    	x.setAttribute("draggable","true");
    	x.setAttribute("class","note");
    	x.style.margin="20px";
		x.setAttribute("ondragstart","drag(event)");

    	document.getElementById("addedNotes").appendChild(x); 	
	}
}

function drop(ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var element = document.getElementById(data);
	element.parentNode.removeChild(element);
	localStorage.removeItem(data);
}

function allowDrop(ev)
{
    ev.preventDefault();
}

function drag(ev)
{
    ev.dataTransfer.setData("text", ev.target.id);
}

function add_newDiv()
{
	if(localStorage.getItem("countt") === null)
	{
		localStorage.setItem("countt",0);
	}
	else
	{
		count=localStorage.getItem("countt");
	}

	//add the new value to the local storage
	color2=document.getElementById("colorchoosen").value;

	//draw the new added note
	var x = document.createElement("p");
    x.style.backgroundColor =color2;
    x.setAttribute("draggable","true");
	x.setAttribute("ondragstart","drag(event)");
	x.setAttribute("class","note");
	x.setAttribute("contenteditable","true");
	x.setAttribute("id","id_"+count);

    document.getElementById("addedNotes").appendChild(x);
}

function removeStickyNote(element)
{
   	element.parentNode.removeChild(element);
}