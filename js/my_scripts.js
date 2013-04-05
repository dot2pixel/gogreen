function listPosts(data){
	
	var output = '<ul data-role="listview" data-filter="true">';
	
	
	
	$.each(data.posts,function(key,val){
		
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		
		var excerpt = tempDiv.innerHTML;
		
		output += '<li>'
		output += '<a href="#blogpost" onclick="showPost('+ val.id +')">'
		output += '<h3>' + val.title +'</h3>'
		output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title +'" />' :
			'<img src="images/icon.png" alt="Go Green Icon" />';
		output += '<p>'+ excerpt +'</p>'
		output += '</a>'
		output += '</li>'
		
	}); // go trough each post
	
	output += '</ul>'
	
	$('#postlist').html(output);
	
	
}//end function

function showPost(id) {
	$.getJSON('http://euricopenelas.com/gogreen/?json=get_post&post_id='+ id + '&callback=?', 
	function(data){
		
	//	console.log(data);
	//console.log(data.posts[0].categories);

		var output = ''
		output += '<h3>' + data.post.title + '</h3>'
		output += data.post.content
		
		$('#mypost').html(output);
	});	// get JSON Data for stories
	
} // showPost

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listCategories(data){
	
	var output = '<ul data-role="listview" data-filter="true">';
	
	
	console.log(data);
	console.log(data.posts[0].categories);
	
	
	$.each(data.posts,function(key,val){
		
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		
		var excerpt = tempDiv.innerHTML;
		
		output += '<li>'
		output += '<a href="#cat-post" onclick="showPostCat('+ val.id +')">'
		output += '<h3>' + val.title +'</h3>'
		output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title +'" />' :
			'<img src="images/icon.png" alt="Go Green Icon" />';
		output += '<p>'+ excerpt +'</p>'
		output += '</a>'
		output += '</li>'
		
	}); // go trough each post
	
	output += '</ul>'
	
	$('#postcategory').html(output);
	
	
}//end function

function showPostCat(id) {
	$.getJSON('http://euricopenelas.com/gogreen/wildlife/?json=get_post&post_id='+ id + '&callback=?', 
	function(data){
		
	//	console.log(data);
	//console.log(data.posts[0].categories);

		var output = ''
		output += '<h3>' + data.post.title + '</h3>'
		output += data.post.content
		
		$('#mypost-cat').html(output);
	});	// get JSON Data for stories
	
} // showPost

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listCategories2(data){
	
	var output = '<ul data-role="listview" data-filter="true">';
	
	
	
	
	$.each(data.posts,function(key,val){
		
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		
		var excerpt = tempDiv.innerHTML;
		
		output += '<li>'
		output += '<a href="#cat-post2" onclick="showPostCat2('+ val.id +')">'
		output += '<h3>' + val.title +'</h3>'
		output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title +'" />' :
			'<img src="images/icon.png" alt="Go Green Icon" />';
		output += '<p>'+ excerpt +'</p>'
		output += '</a>'
		output += '</li>'
		
	}); // go trough each post
	
	$('#postcategory2').html(output);
	
	
}//end function


function showPostCat2(id) {
	$.getJSON('http://euricopenelas.com/gogreen/traveling/?json=get_post&post_id='+ id + '&callback=?', 
	function(data){
		
	//	console.log(data);
	//console.log(data.posts[0].categories);

		var output = ''
		output += '<h3>' + data.post.title + '</h3>'
		output += data.post.content
		
		$('#mypost-cat2').html(output);
	});	// get JSON Data for stories
	
} // showPost

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listCategories3(data){
	
	var output = '<ul data-role="listview" data-filter="true">';
	
	
	
	
	$.each(data.posts,function(key,val){
		
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		
		var excerpt = tempDiv.innerHTML;
		
		output += '<li>'
		output += '<a href="#cat-post3" onclick="showPostCat3('+ val.id +')">'
		output += '<h3>' + val.title +'</h3>'
		output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title +'" />' :
			'<img src="images/icon.png" alt="Go Green Icon" />';
		output += '<p>'+ excerpt +'</p>'
		output += '</a>'
		output += '</li>'
		
	}); // go trough each post
	
	output += '</ul>'
	
	$('#postcategory3').html(output);
	
	
}//end function

function showPostCat3(id) {
	$.getJSON('http://euricopenelas.com/gogreen/saving-energy/?json=get_post&post_id='+ id + '&callback=?', 
	function(data){
		
	//	console.log(data);
	//console.log(data.posts[0].categories);

		var output = ''
		output += '<h3>' + data.post.title + '</h3>'
		output += data.post.content
		
		$('#mypost-cat3').html(output);
	});	// get JSON Data for stories
	
} // showPost

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listCategories4(data){
	
	var output = '<ul data-role="listview" data-filter="true">';
	
	
	
	
	$.each(data.posts,function(key,val){
		
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		
		var excerpt = tempDiv.innerHTML;
		
		output += '<li>'
		output += '<a href="#cat-post4" onclick="showPostCat4('+ val.id +')">'
		output += '<h3>' + val.title +'</h3>'
		output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title +'" />' :
			'<img src="images/icon.png" alt="Go Green Icon" />';
		output += '<p>'+ excerpt +'</p>'
		output += '</a>'
		output += '</li>'
		
	}); // go trough each post
	
	output += '</ul>'
	
	$('#postcategory4').html(output);
	
	
}//end function


function showPostCat4(id) {
	$.getJSON('http://euricopenelas.com/gogreen/water-demands/?json=get_post&post_id='+ id + '&callback=?', 
	function(data){
		
	//	console.log(data);
	//console.log(data.posts[0].categories);

		var output = ''
		output += '<h3>' + data.post.title + '</h3>'
		output += data.post.content
		
		$('#mypost-cat4').html(output);
	});	// get JSON Data for stories
	
} // showPost

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function listCategories5(data){
	
	var output = '<ul data-role="listview" data-filter="true">';
	
	
	
	
	$.each(data.posts,function(key,val){
		
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		
		var excerpt = tempDiv.innerHTML;
		
		output += '<li>'
		output += '<a href="#cat-post5" onclick="showPostCat5('+ val.id +')">'
		output += '<h3>' + val.title +'</h3>'
		output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title +'" />' :
			'<img src="images/icon.png" alt="Go Green Icon" />';
		output += '<p>'+ excerpt +'</p>'
		output += '</a>'
		output += '</li>'
		
	}); // go trough each post
	
	output += '</ul>'
	
	$('#postcategory5').html(output);
	
	
}//end function

function showPostCat5(id) {
	$.getJSON('http://euricopenelas.com/gogreen/recylcling/?json=get_post&post_id='+ id + '&callback=?', 
	function(data){
		
	//	console.log(data);
	//console.log(data.posts[0].categories);

		var output = ''
		output += '<h3>' + data.post.title + '</h3>'
		output += data.post.content
		
		$('#mypost-cat5').html(output);
	});	// get JSON Data for stories
	
} // showPost

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function listCategories6(data){
	
	var output = '<ul data-role="listview" data-filter="true">';
	
	
	
	
	$.each(data.posts,function(key,val){
		
		var tempDiv = document.createElement("tempDiv");
		tempDiv.innerHTML = val.excerpt;
		$("a", tempDiv).remove();
		
		var excerpt = tempDiv.innerHTML;
		
		output += '<li>'
		output += '<a href="#cat-post6" onclick="showPostCat6('+ val.id +')">'
		output += '<h3>' + val.title +'</h3>'
		output += (val.thumbnail) ?
			'<img src="' + val.thumbnail + '" alt="' + val.title +'" />' :
			'<img src="images/icon.png" alt="Go Green Icon" />';
		output += '<p>'+ excerpt +'</p>'
		output += '</a>'
		output += '</li>'
		
	}); // go trough each post
	
	output += '</ul>'
	
	$('#postcategory6').html(output);
	
	
}//end function

function showPostCat6(id) {
	$.getJSON('http://euricopenelas.com/gogreen/children/?json=get_post&post_id='+ id + '&callback=?', 
	function(data){
		
	//	console.log(data);
	//console.log(data.posts[0].categories);

		var output = ''
		output += '<h3>' + data.post.title + '</h3>'
		output += data.post.content
		
		$('#mypost-cat6').html(output);
	});	// get JSON Data for stories
	
} // showPost

// console.log will append all files to the console to easy of use 
//loads all data
//console.log(data);
//loads all posts on array 0
//console.log(data.posts[0].title);
//loads all urls for posts on array 0
//console.log(data.posts[0].url);