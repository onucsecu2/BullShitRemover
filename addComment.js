var arr="//*[@class='_72vr']/span";
var elements=document.evaluate(arr,document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null);

try {
    var thisNode = elements.iterateNext();

    while (thisNode) {
 
        // thisNode.onmouseover = function() {thisNode.style.backgroundColor = "red";};
        thisNode.addEventListener("mouseover", function(event){
        	event.target.style.color ="red";
        	event.target.style.outline = "5px dashed yellow";
        },true);
        thisNode.addEventListener("mouseout", function(event){
        	event.target.style.outline = "";
        	event.target.style.color ="";
        },true);
        thisNode = elements.iterateNext();
    }   
}
catch (e) {
    console.log( 'Error: Document tree modified during iteration ' + e );
}
