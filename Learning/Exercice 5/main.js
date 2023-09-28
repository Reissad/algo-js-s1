

var life=100

function updateplayerlife(damage){

    let newlife= life-damage

    if (newlife<=0){

        console.log("you died")
        
    }else {
        console.log(newlife)
    }   
    
}

updateplayerlife (20) 

