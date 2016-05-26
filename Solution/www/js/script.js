 window.onresize = function() {
            document.getElementById("size").innerHTML = window.innerWidth;
 };
 
 
function getDate(){
	var date = new Date();
	var options = {
	  year: 'numeric',
	  month: 'long',
	  day: 'numeric',
	};
	var mydate = date.toLocaleString("ru", options); 
	mydate = mydate.substring(0,mydate.length-2);  // форматирую полученую текущую дату
	
	return mydate;
} 
 
function addComment(){
	
	form = document.getElementById('addcom');
	
	if($('.footer__my-textarea').val() && $('.footer__my-input').val()){ // если данные в полях имеются , то создаём комментарий и отображаем его в хтмл
		var divWrapper = document.createElement('div');
		$(divWrapper).addClass("b-area__comment-block"); 
		
		var authorName = document.createElement('span');
		$(authorName).addClass("comment-name");
		$(authorName).html($('.footer__my-input').val()); 
		
		var date = document.createElement('span'); 
		$(date).addClass("comment-date");
		$(date).html(getDate());
		
		var divComment = document.createElement('div');
		$(divComment).addClass("b-commentary__content");
				
		$(divComment).html($('.footer__my-textarea').val()); 
		
		$(divWrapper).append(authorName); 
		$(divWrapper).append(date); 
		$(divWrapper).append(divComment); 
		
		$('.b-main-comment__area').append(divWrapper);
	}
	
	form.input.value = "";
	form.text.value = "";
	
	
}

document.onkeydown = function(e) {
 var e = e || window.event;
  if (e.ctrlKey && e.keyCode == 13) {
    addComment();
  }
  return true;
}
