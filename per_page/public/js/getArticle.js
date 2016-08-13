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
    console.log(posts);
    posts.forEach(function(article){
        //articles' title and content
        var title = article.title;
        var excerpt = article.excerpt;
        var url = article.url;

        buildArtiTag(title,excerpt,url);

        //console.log('The article name is: ' + article.title)
        //console.log('The article name is: ' + article.excerpt) 
        //article.content
    })

}

// problem can get txt-sec
function buildArtiTag(title,excerpt,url){
    var getDiv = document.getElementsByClassName('txt-sec');
    console.log(getDiv);

    for(var ele in getDiv){
        var H2 = document.createElement('h2');
        var articleP = document.createElement('p');
        var articleA = document.createElement('a');

        H2.innerHTML(title);
        articleP.innerText(excerpt);
        articleA.setAttribute('href',url)
        ele.appendChild(H2);
        ele.appendChild(articleP);
        ele.appendChild(articleA);
    }

 /*   getDiv.forEach(function(ele){
        

    })*/

}


window.onload = function() {
    var subname = '/api/get_recent_posts/?callback=show_posts_widget&read_more=More&count=2'
    getJsonp(subname);

}