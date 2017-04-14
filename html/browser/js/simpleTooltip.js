ToolTip.offsetX=20; //смещения подсказки от курсора
ToolTip.offsetY=10; //
function ToolTip(obj, text) {
  if(!obj||obj.nodeType!=1) throw "Illigal argument exception"; //обьект к кому привязываем подсказку
  //-- Разметка подсказки ---
  var tip=document.createElement("DIV");
  tip.className="tool_tip";
  tip.innerHTML=text;
  tip.style.left =" 0px";
  tip.style.top = "0px";
  document.body.appendChild(tip);
  //-- события --
  obj.onmouseout=function (ev) {
      tip.style.visibility="hidden";
  };
  obj.onmousemove=function(ev) { //если не нужно что бы подскасзка бегала, то onmouseover
      tip.style.visibility="visible";
      if(window.event) ev=window.event;
      tip.style.left=ev.clientX + document.body.scrollLeft + ToolTip.offsetX + "px";
      tip.style.top=ev.clientY + document.body.scrollTop + ToolTip.offsetY + "px";
  };
}
//переберем заданные элементы, дадим подказку тем у кого есть аттрибут tooltip
//В аргументах передаем имена рассматриваемых тегов, * все теги
function initToolTips() {
//   return;
    var tags, tooltext;
    for(var i=0; i<arguments.length; i++) {
       tags=document.body.getElementsByTagName(arguments[i]);
       for(var j=0; j<tags.length; j++)
            if((tooltext=tags[j].getAttribute("data-tooltip"))) ToolTip(tags[j], tooltext);
   }
}