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
        //build tag 
        solov(data);
    }

}


//build tag 
function solov(data) {

    var posts = data.posts;
    var title, excerpt, url;
    var getDiv = [];

    getDiv = $('.txt-sec');

    $.each(posts, function(i, article) {
        title = article.title;
        excerpt = $.parseHTML(article.excerpt);
        url = article.url;

        //create title
        var H2 = document.createElement('h2');
        $(H2).text(title);
        getDiv[i].appendChild(H2);

        //get excerpt html
        $.each(excerpt, function(num, el) {
            getDiv[i].appendChild(el)
        })

    })


    /* 
   `for (var i = 0; i < num; i++) {
        //posts' title and content
        title = posts[i].title;

        excerpt = $.parseHTML(posts[i].excerpt);

        url = posts[i].url;
        var H2 = document.createElement('h2');
        // var articleP = document.createElement('p');
        // var articleA = document.createElement('a');

        $(H2).text(title);
        // $(articleP).text(excerpt);


        // articleA.setAttribute('href', url);  
        // $(articleA).text('More');

        getDiv[i].appendChild(H2);

        console.log('type of excerpt is ' + typeof(excerpt) + "\n" + excerpt.length);

        $.each(excerpt,function(num,el){
            getDiv[i].appendChild(el)
        })

        // getDiv[i].appendChild(articleA);

    }
    */
    removeTag();
}

function removeTag(){
    var removeSpan = [];
    removeSpan = $('.screen-reader-text');
    console.log(typeof(removeSpan) +" length is "+ removeSpan.length);
    $.each(removeSpan,function(i,el){
        el.remove();
    })
}


window.onload = function() {
    var subname = '/api/get_recent_posts/?callback=show_posts_widget&read_more=More&count=2';
    
    //connct with blog and build tag
    getJsonp(subname);

    //remove remianer tags

}