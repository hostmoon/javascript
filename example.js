function insert(text){
  var str="<p>";
  str += text;
  str +="</p>";
  document.write(str);
}

window.onload = function(){
  var testdiv = document.getElementById("testdiv");
  var p = document.createElement("p");
  testdiv.appendChild(p);
  var txt = document.createTextNode("test");
  p.appendChild(txt);
  var txt1=document.createTextNode("THIS is");
  var em = document.createElement("em");
  var txt2 =document.createTextNode("my");
  var txt3 =document.createTextNode("content.");

  p.appendChild(txt1);
  em.appendChild(txt2);
  p.appendChild(em);
  p.appendChild(txt3);

  

}
