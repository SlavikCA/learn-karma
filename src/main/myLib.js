function calculate (a, b) {
  return a + b;
}

function calculateAndPrint (a, b) {
  document.getElementById('p2').innerHTML = calculate(a,b);
}

function calculateAndSend (a, b) {
       var xmlHttp = new XMLHttpRequest();
       xmlHttp.onreadystatechange = function() {
           if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
               console.log(xmlHttp.responseText);
               document.getElementById('p3b').appendChild(document.createTextNode(xmlHttp.responseText));
               }
       }
       var value = a + b;
       xmlHttp.open("GET", 'index.html?param1=' + value, true); // these parameter is ignored currently
       xmlHttp.send(null);
}

function printCode () {
    document.write(document.currentScript.parentNode.getAttribute('onclick'));
}
