

window.onload = function(){
    
    
    
    //call grey section circle animation function
    semi_circle()
    
}


/*
function  semi_circle
        animation of the  grey section circle 
*/

function semi_circle(){
    
    var list = document.getElementById("circle_group").getElementsByTagName('li')
    
    
    for(var i=0;i<list.length;i++){
        
        overbind(list[i],'mouseover',over)
        
        
        outbind(list[i],'mouseout',out)
    }
}
    
    function overbind(element,eventType,callfun){
        element.addEventListener(eventType,callfun,false)
    }

     function outbind(element,eventType,callfun){
        element.addEventListener(eventType,callfun,false)
    }


    function over(e){
        
        var upper = e.target
/*
        when mouse over upper 
        upper semi-circle animation fill all the cirlce 
        And the lower display set as none 
        
*/
        
        if(upper.className == 'mouseout'){
            console.log(upper.className)
        
            var lower = e.target.parentElement
    //        console.log(lower)
            var pLower = lower.getElementsByTagName('p')

           
           /* upper.style.height = 300 + 'px'

            upper.style.borderRadius =150 + 'px'*/

            upper.className = 'mouseover'
             
                    
            for(var j =0;j<pLower.length;j++){
    //            console.log(pLower[j])
                pLower[j].className = 'low_mouseover'
            }

        }
        
    }

/*
        when mouse out upper 
        
        And the lower display set as block 
        
*/
    function out(e){
        var upper = e.target
        
        
        if(upper.className == 'mouseover'){
            var lower = e.target.parentElement
//            console.log(lower)
            var pLower = lower.getElementsByTagName('p')

            /*upper.style.height = 150 + 'px'

            upper.style.borderRadius =150 + 'px' +' '+ 150 + 'px'+' '+ 0 + 'px'+' '+0 + 'px'*/
            
             upper.className = 'mouseout'

             
         for(var j =0;j<pLower.length;j++){
//                       console.log(pLower[j])
//            pLower[j].style.display = 'block'
              pLower[j].className = 'low_mouseout'
         }
            
        }
        
}
         
    
