
var i=0;
var parentElem = document.body;

function addElement(){

  i++;

  img = document.createElement("img");
  img.src = "https://picsum.photos/290/290/?"+i;
  img.id= "foto"+i;
  img.alt="Описание изображения";
  if (i%2==0){img.style = "border: 5px solid #00CC00; margin-left:5px; margin-top:5px";}
  if (i%2!=0){img.style = "border: 5px solid #000000; margin-left:5px; margin-top:5px";}
  img.title = "foto"+i;

  var s = "00" + i;
  res = s.substr(s.length-3);

  div2 = document.createElement("span");
  div2.style ="color: white; margin-left: -60px; background: rgb(0, 0, 0); background: rgba(0, 0, 0, 0.7); padding: 1px;";
  div2.innerHTML = "foto"+res;

  parentElem.appendChild(img);
  parentElem.appendChild(div2);


}

