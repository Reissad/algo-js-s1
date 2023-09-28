let names= []
names.push (["viencent",21],["paul",15],["erwan",30])

names.forEach(name=>{
    name.forEach(element =>{
        let string
        if(element>=18){
            string = " ,il est majeur"

           
        }else{
            if (typeof element === 'string'){
                string =" "

            }else{
                string =" ,il est mineur"
            }
        
        }
            
        console.log(element+=string)     
        
    })
    
})



userID= {

    FirstName: " Gabriel",
    lastName:" Money",
    Birthday:" 01/01/2000",
    passion:" les usa",

}

let history =  userID.FirstName+userID.lastName+ " est née le"+ userID.Birthday+" il est passionné par"+ userID.passion
console.log(history)




