const letters ="abcdefghijklmnopqrstuvwxyz" ;
let lettersContainer = document.querySelector(".letters")
let lettersArray = Array.from(letters);

let wrongTries = 0;

let theDraw = document.querySelector(".the-draw")

let playerName = document.querySelector(".game-name");
let start = document.querySelector(".start");
let selectName = document.querySelector(".start input");
let startBtn = document.querySelector(".start span")

startBtn.addEventListener("click",()=>{
    if(selectName.value == ""){
        alert("please type your name")
    }else{
        playerName.innerHTML = selectName.value
        start.remove();
        
    }
})

lettersArray.forEach((letter)=>{
    let span = document.createElement("span");
    span.classList.add("letter-box")
    let spanText = document.createTextNode(letter.toUpperCase());
    span.appendChild(spanText);
    lettersContainer.appendChild(span)

})

const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }
  let keys = Object.keys(words)
  let categoryName = Math.floor(Math.random()* keys.length)
  let radnomCategory = keys[categoryName];
  let categoryValue = words[radnomCategory]
  let randomValue = Math.floor(Math.random()* categoryValue.length)
  let randomValueValue = categoryValue[randomValue]

  
  let emptyLettersArray = Array.from(randomValueValue);
  let emptyLetters = document.querySelector(".empty-letters");
  selectWord();
  function selectWord() {
    let category = document.querySelector(".category span").innerHTML = radnomCategory;

  
emptyLettersArray.forEach((Element)=>{
      let emptySpan = document.createElement("span");
      emptyLetters.appendChild(emptySpan);
    if(Element === " "){
        emptySpan.classList.add("space")
        emptySpan.innerHTML = "-"
    }
  })
}
  let emptyLettersArrayArray  = Array.from(randomValueValue.toLowerCase());
   
  let guessArray = Array.from(document.querySelectorAll(".empty-letters span"))
document.addEventListener("click", e=>{
    let theStatus = false;
    if(e.target.className=== "letter-box"){
        e.target.classList.add("clicked")
        let chosenLetter = e.target.innerHTML;
        
        emptyLettersArrayArray.forEach((el,wordIndex)=>{
            if(chosenLetter.toLowerCase() === el){
                
                guessArray.forEach((le,letterIndex)=>{
                    
                    if(letterIndex === wordIndex){
                        le.innerHTML = chosenLetter
                        le.classList.add("done")
                        theStatus = true;
                        
                        
                    
                    }
                    
                })
                
                        
                        
            }
            
        })
        let endGame = document.querySelector(".end");
        let endText = document.querySelector(".end p");
        let doneSpans = guessArray.filter(span => span.classList.contains("done"));
        if(doneSpans.length === randomValueValue.length){
            endGame.style.display = "flex"
            endText.innerHTML = `Congrats! You won with ${wrongTries} wrong tries`
        }if(theStatus !== true){
            wrongTries++
            theDraw.classList.add(`wrong${wrongTries}`)

        }if(wrongTries == 8){
        endGame.style.display = "flex"
        endText.innerHTML = `Game over`
        }
    }

})


let reBtn = document.querySelector(".end span");
reBtn.addEventListener("click",()=>{
    location.reload();
})








function counter() {

    return this.count++
}

const obj = {
        count : 0,
        counter: counter

}
obj.counter()
console.log(obj.count)