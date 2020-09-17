let qte=document.getElementsByClassName("qte")
 
let btnplus=document.getElementsByClassName("btn+")
let btnmoin=document.getElementsByClassName("btn-")
let dislike=document.getElementsByClassName("dislike")
let card=document.getElementsByClassName("card")
let like=document.getElementsByClassName("like")



for (let i = 0; i < btnplus.length; i++) {
   btnplus[i].addEventListener("click",function()
{

       qte[i].innerHTML++
       
   })
   
}
for (let j = 0; j< btnmoin.length; j++) {
   btnmoin[j].addEventListener("click",function()
{

       qte[j].innerHTML--
       
   })
   
}
for (let dl = 0; dl< dislike.length; dl++) {
     dislike[dl].addEventListener("click",function()
{

      
      
        card[dl].parentNode.removeChild(card[dl]);
   })
   
}





    
    
    
    
    
    
    
    