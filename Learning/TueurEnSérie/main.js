class character{
    constructor (Name, Death, Atk, DeathAtk){
        this.name =Name
        this.Death=Death
        this.atk=Atk
        this.deathatk=DeathAtk
    }

}


var Jason =new character("Jason", 0.1, 0.9, 0.5)
var NameList= ["jack","Kaleb","Donald","Alex","juliette","brandon"]
var survivors=[]

for(let i=0; i< NameList.length; i++){

let RandomIndex= Math.floor(Math. random() * NameList.length)
console.log(NameList.length)
survivors.push(new character(RandomIndex, 0.5,0.2,0.8))
NameList.splice(RandomIndex)




}



