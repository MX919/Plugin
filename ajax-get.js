function ajax(methon,url,async,success){
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest;
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.open(methon,url,async);
	xhr.send();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4){
			if(xhr.status==200){
				success(xhr.responseText);
			}else{
				alert(xhr.status);
			}
		}
	}
}
