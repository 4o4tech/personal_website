

window.onload = function(){
    
    console.log('Hello you are look at me !!! (@~@)')
    
    console.log('\n This website  all of code and image is on the github. \n github: https://github.com/clingk/personal_website.')
    
    console.log('have fun !!!')
    
    
    //call grey section circle animation function
    semi_circle();
    
    //multiple animation  for item_icon span
    mulAnimation();
    
    $(function(){
    $('#dowebok').fullpage();
});
   
    
}


/*

function  semi_circle
animation of the  grey section circle 

*/

function semi_circle(){
    // get grey-section  circle_group  ul>li tags
    var list = document.getElementById("circle_group").getElementsByTagName('li')
    
    
    for(var i=0;i<list.length;i++){
        
        overbind(list[i],'mouseover',over);
        
        
        outbind(list[i],'mouseout',out);
    }
}
    
    // 
    function overbind(element,eventType,callfun){
        element.addEventListener(eventType,callfun,false);
    }

    function outbind(element,eventType,callfun){
        element.addEventListener(eventType,callfun,false);
    }


    function over(e){
        
        var upper = e.target;
/*
        when mouse over upper 
        upper semi-circle animation fill all the cirlce 
        And the lower display set as none 
        
*/
        
        if(upper.className == 'mouseout'){
            
        
            var lower = e.target.parentElement;
            var pLower = lower.getElementsByTagName('p')
            upper.className = 'mouseover';
                      
            for(var j =0;j<pLower.length;j++){
                pLower[j].className = 'low_mouseover';
            }

        }
        
    }

/*
        when mouse out upper 
        
        And the lower display set as block 
        
*/
    function out(e){
        var upper = e.target;
        
        
        if(upper.className == 'mouseover'){
            var lower = e.target.parentElement;

            var pLower = lower.getElementsByTagName('p');
            
            upper.className = 'mouseout';

            for(var j =0;j<pLower.length;j++){

                  pLower[j].className = 'low_mouseout';
             }
            
        }
        
}





  /*
        
    if  project is small   
    use this   function   or  U can try to use  JQuery  (~^~)!!!
                                            15/12/16   u's jimze
    
    multiple animation is control same item animation
    just like: li, div, span...

    need to call aniOpacity function to run the function

*/

function mulAnimation(){
    
//    alert('喵呜~~~    \n  mulAnimation  will run !!!')//test  test  test
    
    
    var liIcon = document.getElementById("item_icon").getElementsByTagName('li');

    for(var i=0; i<liIcon.length;i++){

        liIcon[i].timer = null;
       liIcon[i].alpha = 10;
        liIcon[i].onmouseover = function(){   
            aniOpacity(this,95);
            this.style.boxShadow = '10px 5px 10px rgba(0,0,0,0.75)';
                
        }

        liIcon[i].onmouseout = function(){
            aniOpacity(this,55);
            this.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.75)';
           
        }

    }

    /* contrl the opacity speed of the animation*/

    function aniOpacity(obj,iTarget){
      
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var speed = 0;

            if (obj.alpha >iTarget){
                speed =Math.floor(iTarget-obj.alpha)/10;
                
            }
            else{
                speed =Math.ceil(iTarget-obj.alpha)/10;
            }


            if(obj.alpha == iTarget){
                clearInterval(obj.timer);
            }
            else{
                obj.alpha= Math.ceil(obj.alpha+= speed);


                obj.style.filter = "alpha(opacity:"+obj.alpha+")";//this js is for stupid IE

                obj.style.opacity = obj.alpha/100;
            }
            

        },50)
}
    

}

