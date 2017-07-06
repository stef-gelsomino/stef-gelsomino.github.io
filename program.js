window.onload = function(){
    var result = "OLE " + 1;

    var kids = document.getElementById('results').children; // .innerHTML = '<h1>' + result + '</h1>';

    console.log("kids has size = " + kids.length);

    var h1Counter = 0;
    
    for (var i=0; i<kids.length; i++) {
        console.log("iterating on kid " + kids[i].tagName);
        if (kids[i].tagName.toLowerCase() === 'h1') {
            h1Counter++;
            if (h1Counter == 2) {
                kids[i].innerHTML += " -> " + result;
            }
        }
    }
}
