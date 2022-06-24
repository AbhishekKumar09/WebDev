var myTodolist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myTodolist.length; i++)
 {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u{1F5D1}");
  span.className = "remove";
  span.appendChild(txt);
  myTodolist[i].appendChild(span);
 }

var list = document.querySelector("ul");
list.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
}, false);

var close = document.getElementsByClassName("remove");
var i;
for (i = 0; i < close.length; i++)
{
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "")
  {
    alert("You need to write something!");
  } 
  else
  {
    document.getElementById("myTodo").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u{1F5D1}");
  span.className = "remove";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++)
  {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
