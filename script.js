const buttons = document.querySelectorAll(".button")
const topBox = document.querySelector("#actionStageDisplay")
const functions = []
let calculation = 0
buttons.forEach((button) => {
    button.addEventListener("click",(e)=>{
        switch(e.target.textContent){
            case "AC":
                fullDelete()
                break;
            case "DEL":
                deleteFunction()
                break;
            case "=":
                answerFunction()
                break;
            default:
                addNumber(e)
        }
    })
})
function fullDelete(){
    topBox.textContent = ""
}
function deleteFunction(){
   if(topBox.textContent){
    topBox.textContent = topBox.textContent.slice(0,-1)
    topNumbers.pop()
   }
}
function addNumber(e){
    topBox.textContent += e.target.textContent;
}
function answerFunction(){
    try{
        topBox.textContent = eval(topBox.textContent)
    } catch{
        topBox.textContent = "Wrong Process!"
    }
}
