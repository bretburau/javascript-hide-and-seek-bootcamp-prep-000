function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var nodes = document.querySelectorAll('.ranked-list li');
  for(var i=0; i < nodes.length; i++) {
    var nodeInt = parseInt(nodes[i].innerHTML)
    nodeInt += n;
    nodes[i].innerHTML = nodeInt;
  }
}


function deepestChild() {
  var current = document.querySelector('#grand-node');
  console.log(current.hasChildNodes());
  while(current.children.length > 0) {
    current  = current.children[0];

  }
  return current;
}
