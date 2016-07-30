var elem = document.getElementById('cat');
console.log(elem);
var nClicks = 0;
elem.addEventListener('click', function(){
  //the element has been clicked... do stuff here
    nClick ++;
    document.getElementById("nClicks").innerHTML = nClicks;
}, false);
