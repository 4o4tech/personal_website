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
    var title, excerpt, url;

    var getDiv = [];

    getDiv= $('.txt-sec');

   
    var num = posts.length;
    for (var i = 0; i < num; i++) {
        //posts' title and content
        title = posts[i].title;
        excerpt = posts[i].excerpt;
        url = posts[i].url;

        console.log(title + ' ' + excerpt + ' ' + url);
    
        var H2 = document.createElement('h2');
        var articleP = document.createElement('p');
        var articleA = document.createElement('a');

        console.log('type of H2 ' + typeof(H2));
        $(H2).text(title);
        $(articleP).text(excerpt)
        articleA.setAttribute('href',url);
        $(articleA).text('More');

        getDiv[i].appendChild(H2);
        getDiv[i].appendChild(articleP);
        getDiv[i].appendChild(articleA);



    }

}


window.onload = function() {
    var subname = '/api/get_recent_posts/?callback=show_posts_widget&read_more=More&count=2';
    getJsonp(subname);

}