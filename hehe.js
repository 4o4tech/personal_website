

window.onload = function(){
    
    semi_circle()
    
}




function semi_circle(){
    
    var list = document.getElementById("circle_group").getElementsByTagName('li')
    
    
    for(var i=0;i<list.length;i++){
        
        bind(list[i],'mouseover',cirFun)
        
        
        
    }
}
    
    function bind(element,eventType,callfun){
        element.addEventListener(eventType,callfun,false)
    }
    
    function cirFun(e){
        
        var upper = e.target
        
        var lower = e.target.parentElement
        console.log(lower)
        var pLower = lower.getElementsByTagName('p')

        upper.style.height = 300 + 'px'
                
        upper.style.borderRadius =150 + 'px'
      
        for(var j =0;j<pLower.length;j++){
            console.log(pLower[j])
            pLower[j].style.display = 'none'
            
        }

        
       
        
    }
         
    
