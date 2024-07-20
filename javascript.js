function add() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("items").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    var but = document.createElement("button");
    but.classList.add('X');
    li.appendChild(but);
  }
  function del(value){
    value.parentElement.remove();
  }
