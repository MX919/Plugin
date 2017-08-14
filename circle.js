

第一种写法
for(var i=0;i<ali.length;i++){
	(function(m){

		ali[m].onclick=function(){
			for(var j=0;j<ali.length;j++){
				ali[j].style.background="#ccc";
			}			
			ali[m].style.background="red"
		}
	})(i)
}
第二种写法
var index;
for(var i=0;i<ali.length;i++){
	ali[i].index=i;
	ali[i].onclick=function(){
//		alert(this.index)
		for(var j=0;j<ali.length;j++){
			ali[j].style.background="#ccc";
		}
		this.style.background="red";
//		这种用法 如果你想调用它自己的索引值 this.index
		index=this.index;
	}
	
}