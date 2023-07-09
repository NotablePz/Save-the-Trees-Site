reasons =[
    " 2. Trees provide housing to millions of species that protect us from disease",
    " 3. Trees cool our streets and cities",
    " 4. Trees protect against floods and water pollution",
    " 5. Trees ease the mind during stressful times"
]
images = [
    "Trees2.jpeg",
    "Trees3.png",
    "Trees4.jpeg",
    "Trees5.png"
]
var i=0
function next(){
if(i==3){
    i=0
}
  document.getElementById("reasonone").innerHTML= reasons[i]
  document.getElementById("imageone").src= images[i]
  i++
}
