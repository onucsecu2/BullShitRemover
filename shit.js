
// var script = document.createElement('script');
// script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js";
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
// var arr=['এই লকডাউনের সময় শুধু শুধু বসে না থেকে'];
// var targetNode1 = document.getElementById('timeline_story_column');
// var targetNode2 = document.getElementById('contentArea');
// var ele=null;
// (targetNode1===null)?ele=targetNode2:ele=targetNode1;
var cont=[];
if(typeof localStorage['text']!== 'undefined')
  cont=retriveCache(cont);

var count=0;
var lastScrollTop = 0;
window.addEventListener('scroll',function(){

	var st = window.pageYOffset || document.documentElement.scrollTop;
	  if (st > lastScrollTop && cont.length>0 ){
      // downscroll code
      	if(typeof localStorage['text']!== 'undefined')
          removeBullshit();
   	} 
   	lastScrollTop = st <= 0 ? 0 : st;
});

function removeBullshit(){
  var arr="//*[@role='article']";
  //var arr="//*[@class='_72vr']/span";
  var elements=document.evaluate(arr,document,null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE,null);

  try {
      var thisNode = elements.iterateNext();

      while (thisNode) {
        for(var k=0;k<cont.length;k++){
        	if(thisNode.textContent.includes(cont[k]) && cont[k].length>1){
        			thisNode.remove();

    				console.log('bullshit/scam removed');
    				count++;
    				chrome.runtime.sendMessage({greeting: count});
        	}
        }
          thisNode = elements.iterateNext();
      }   
  }
  catch (e) {
      console.log( 'Error: Document tree modified during iteration ' + e );
  }

}
function retriveCache(cont){
  // let str=localStorage['text'];
  let str=localStorage.getItem('text');
  console.log(str);
  var array = str.split("$");
  return array;
}

