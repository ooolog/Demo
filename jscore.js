function test(){
	for (var i = 0; i < 10; i++) {
		(function(li){
			setTimeout(function(){
			console.log(li);	
		},0)
		})(i);
		
	}
}

//test();


function f1(){
	var n=999;
	nAdd=function(){n+=1}
	function f2(){
		console.log(n);
	}
	return f2;
}

var result=f1();
result();
nAdd();
result();
var result2=f1();
//result2();