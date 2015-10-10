

window.onload = function(){
    
    semi_circle()
    
}




function semi_circle(){
    
    var group = document.getElementById("circle_group").getElementsByTagName('div')
    
    
    for(var i=0;i<group.length;i++){
        var circle = group[i].childNodes
        
        for(var j=0;j<circle.length;j++){
            var upper = circle[1]
            
            upper.onmouseover = function(){
                upper.style.height = 300 + 'px'
                
                upper.style.borderRadius = 150 +'px'
            }
            
            
            upper.onmouseout = function(){
                upper.style.height = 150 + 'px'
                
                upper.style.borderRadius = 150+'px'+' '+150+'px'+' '+0+'px'+' '+0+'px'
            }
            
        }
    }
    
  
   
    
    
}