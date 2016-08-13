/*//ie XDR request
function getArticle(url) {

    var xhr = new XDomainRequest(); // 


   xhr.onreadystatechange = function(){
   		if(xhr.readyState == 4){
   			if((xhr.status >= 200 && xhr.status < 300) || xhr.status ==304){
   				document.getElementById("text_title1").innerHTML = xhr.responseText.title;	

   			}else{
   				console.log("ERROR");
   			}
   		}
   }


    xhr.onerr = function() {
        alert("Error");
    }

    xhr.timeout = 3000;
    xhr.ontimeout = function() {
        console.log("request out of time");
    }


    xhr.open(
        "GET", //DOMString method   "GET", "POST", "PUT", "DELETE"
        url // the file is requestd
    );


    xhr.send(null);
}
*/



function getJsonp(subName) {

    var domain = "http://int-double.com";

    var url = domain + subName;

    // new script tag
    var script = document.createElement('script');
    //add src 
    script.setAttribute('src', url);
    //append the script tag into html
    document.getElementsByTagName('head')[0].appendChild(script);

    //don't need to new variable here
    show_posts_widget = function(data) {
        solov(data);
    }


}

function solov(data) {

    var posts = data.posts;

    posts.forEach(function(article){
        //articles' title and content
       console.log('The article name is: ' + article.title) 
        //article.content
    })

/*    var posts0 = data.posts[0];
    var posts1 = data.posts[1];

    var title = posts0.title;
    var content = posts0.content;

    var title1 = posts1.title;
    var content1 = posts1.content;

    console.log('The article name is: ' + title);
    console.log('The second article name is: ' + title1);
*/
    // console.log('\n Content:  ' + content);

}



window.onload = function() {
    var subname = '/api/get_recent_posts/?callback=show_posts_widget&read_more=More&count=2'
    getJsonp(subname);

}