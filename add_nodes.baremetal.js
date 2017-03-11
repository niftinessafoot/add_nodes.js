function add_node(ele, attr, content){
  //Arguments: STRING, OBJECT, STRING|NODE
  var node = document.createElement(ele);
  for(var key in attr){
    node.setAttribute(key, attr[key]);
  }
  if(typeof(content) === 'string'){
    content = document.createTextNode(content);
  }
  node.appendChild(content);
  return node;
}