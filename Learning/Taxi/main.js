class humain {
    constructor(Firstname, LastName, MentalHealth ){
        this.Firstname=Firstname
        this.LastName=LastName
        this.MentalHealth=MentalHealth





    }
}


//// init mains variables////
var passager= new humain("Gabriel", "Monier", 5)
var Redlight=30
var TaxiSwitch=0
var Radiomusic = ["polog-PopOut", "Tjay-ZooYork", "Wejdene-Annissa", "Polog-Rapstar", "LilMosey-Stuck in a Dream"]

function switchMusics (){
    Redlight-=1 //// remove 1 redlight
    let randomRadioIndex = Math.floor(Math. random() * Radiomusic.length) /// generate int between [0,RadioMusicLenght]
        
    console.log(Radiomusic[randomRadioIndex]+" se lance sur la radio lors du "+Redlight+" feu rouge")     /// get value with the index generate randomly

    


//// lets check what music is in the speakers////


    if (Radiomusic[randomRadioIndex] === "Wejdene-Annissa"){  //// check if the musics is "Wejdene-Annissa"
        passager.MentalHealth-=1  ///// remove 1 mentalHeatlh 

            if(passager.MentalHealth<=0){
                console.log("les oreilles de "+passager.Firstname+" explose "+ passager.Firstname+" "+ passager.LastName+ " est annoncé mort a la télévision francaise pour intolérance a wejdene")

            }else{

                TaxiSwitch+=1        ///// how many time the passenger switch of Taxi because of the music                                                                  
                console.log(passager.Firstname+" a désormais  "+passager.MentalHealth+" pt de santé mental...")     
                console.log(passager.Firstname+" sort violament du Taxi en se bouchant les oreilles et rentre dans un nouveau taxi...")

            }




        
    }else{
        console.log(passager.Firstname+ " apprécie la musique")
    }
    




    if (Redlight<=0 && passager.MentalHealth>0){

        console.log(passager.Firstname+" "+passager.LastName+" est bien rentré chez lui. il a changé de taxi "+TaxiSwitch + " fois")
    }
   
}



while (passager.MentalHealth>0 && Redlight>0){


    switchMusics()






    
}

