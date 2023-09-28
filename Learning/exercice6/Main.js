class Pokemon {
    constructor(Name, atk, Defense, Hp, Luck, Islucky){
        this.name=Name
        this.atk=atk
        this.Defense=Defense
        this.Hp=Hp
        this.luck=Luck
        this.Islucky=Islucky
}
    
    attackPokemon(Pokemon){
        if (this.Hp>0){
        
            if (Math.random(0,1)<Pokemon.luck && Pokemon.Islucky==true){
                console.log(Pokemon.name+ " a esquivé l'attaque")
            }
            else{
                Pokemon.Hp-=(this.atk*Pokemon.Defense) //// j'ai multiplié pour éviter des résulstat négatifs !
                if(Pokemon.Hp<0){
                    console.log(Pokemon.name+" is dead")
                }else {
                    console.log(Pokemon.name+" "+Pokemon.Hp+" HP")
                }
             }
    }    


           
 }
        
            
        
       

        
    }
        


let pikachu= new Pokemon("pickachu",20,0.6,100,0.4,true)
let Tiplouf= new Pokemon("Tiplouf",15,0.3,100,0.3,true)

while (pikachu.Hp>0 && Tiplouf.Hp>0){
    Tiplouf.attackPokemon(pikachu)
    pikachu.attackPokemon(Tiplouf)

}







   






