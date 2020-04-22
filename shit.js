
// var script = document.createElement('script');
// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
// var arr=['এই লকডাউনের সময় শুধু শুধু বসে না থেকে'];
// var targetNode1 = document.getElementById('timeline_story_column');
// var targetNode2 = document.getElementById('contentArea');
// var ele=null;
// (targetNode1===null)?ele=targetNode2:ele=targetNode1;
var count=0;
var lastScrollTop = 0;
window.addEventListener('scroll',function(){
	var st = window.pageYOffset || document.documentElement.scrollTop;
	  if (st > lastScrollTop){
      // downscroll code
      	removeBullshit();
   	} 
   	lastScrollTop = st <= 0 ? 0 : st;
});
// Select the node that will be observed for mutations

// var targetNode1 = document.getElementById('timeline_story_column');
// var targetNode2 = document.getElementById('contentArea');
// // Options for the observer (which mutations to observe)
// if(targetNode2===null){
// 	const targetNode=targetNode1;
// 	const config = { attributes: false, childList: true, subtree: true };

// 	// Callback function to execute when mutations are observed
// 	const callback = function(mutationsList, observer) {
// 	    // Use traditional 'for loops' for IE 11
// 	    for(let mutation of mutationsList) {
// 	        if (mutation.type === 'childList') {
// 	        	removeBullshit();
// 	            console.log('A child node has been added or removed.');
// 	        }
// 	    }
// 	};

// 	// Create an observer instance linked to the callback function
// 	const observer = new MutationObserver(callback);

// 	// Start observing the target node for configured mutations
// 	observer.observe(targetNode, config);

// 	// Later, you can stop observing
// 	//observer.disconnect();
// 	function removeBullshit() {
// 		console.log('called ');
// 		var ele=null;
// 		var i;
// 		var count=0;
// 		ele=document.evaluate(xpath,document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null);
// 		for (i = 0; i < arr.length; i++) {
// 			// ele=document.evaluate(arr[i],document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
			
// 			if(ele!==null){
// 				try {
// 				    var thisNode = ele.iterateNext();
// 				    while (thisNode) {
// 				    	var nextNode;
// 				        if(thisNode.textContent.includes(arr[i])){
// 				        	nextNode=ele.iterateNext()
// 				        	thisNode.remove();
// 							console.log('bullshit/scam removed');
// 							count++;
// 							chrome.runtime.sendMessage({greeting: count});

// 				        }
// 				        thisNode = nextNode;
// 				    }   
// 				}
// 				catch (e) {
// 				    console.log( 'Error: Document tree modified during iteration ' + e );
// 				}

// 			}
// 		}
// 	}
// }else{
// 	const targetNode=targetNode2;
// 	const config = { attributes: false, childList: true, subtree: true };

// 	// Callback function to execute when mutations are observed
// 	const callback = function(mutationsList, observer) {
// 	    // Use traditional 'for loops' for IE 11
// 	    for(let mutation of mutationsList) {
// 	        if (mutation.type === 'childList') {
// 	        	removeBullshit();
// 	            console.log('A child node has been added or removed.');
// 	        }
// 	    }
// 	};

// 	// Create an observer instance linked to the callback function
// 	const observer = new MutationObserver(callback);

// 	// Start observing the target node for configured mutations
// 	observer.observe(targetNode, config);

// 	// Later, you can stop observing

function removeBullshit(){
var cont=['এই লকডাউনের সময় শুধু শুধু বসে না থেকে'];
var arr="//*[@class='_72vr']/span";
var elements=document.evaluate(arr,document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null);

try {
    var thisNode = elements.iterateNext();

    while (thisNode) {
    	if(thisNode.textContent.includes(cont[0])){
    			thisNode.remove();
				console.log('bullshit/scam removed');
				count++;
				chrome.runtime.sendMessage({greeting: count});
    	}
        thisNode = elements.iterateNext();
    }   
}
catch (e) {
    console.log( 'Error: Document tree modified during iteration ' + e );
}

}