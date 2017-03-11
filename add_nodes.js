function addNode(ele, attr, content){
"use strict";
  var node = document.createDocumentFragment(),
    voidElements = ['area','base','br','col','embed','hr','img','input','keygen','link','menuitem','meta','param','source','track','wbr'];

  //If no element specified, return empty document fragment.
  if(!ele){
    return node;
  }

  //Ensure specified node name is valid.
  //Otherwise, return empy document fragment.
  try{
    node = document.createElement(ele);
  }
  catch(e){
    try{console.error('Invalid node name: %c'+ele.toString(), "font-weight:bold; font-style:italic;");} catch(e){}
    return node;
  }

  // Attributes are optional.
  // If attr is not an object, assign content to attr and attr to null.
  if(attr && (attr.nodeType || typeof(attr) === 'string')){
    content = attr;
    attr = null;
  }

  // Iterate attributes object
  for(var key in attr){
    if(attr.hasOwnProperty(key)){
      node.setAttribute(key, attr[key].toString());
    }
  }

  // Ensure content exists.
  // Ensure element can contain content: tags like <img> and <br> can't.
  if(content && voidElements.indexOf(ele) < 0){
    // Content needs to be a node. So convert if string specified.
    if(typeof(content) === 'string'){
      content = document.createTextNode(content);
    }

    // appendChild only takes DOM nodes.
    if(content.nodeType){
      node.appendChild(content);
    }
  }

  return node;
}