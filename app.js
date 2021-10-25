const numberInput = document.getElementById("number");
const btn = document.getElementById("check-btn");
const attempts = document.getElementById("attempts");
const guide = document.getElementById("guide");
const inputs = document.getElementById("inputs");

let randomNum = Math.floor(Math.random() * 100);
let counter = 0;

function validation(){
    let numb = numberInput.value;
    numb = parseInt(numb);
    if(isNaN(numb) || numb > 100 || numb < 1){
        alert(`Enter a valid number`);
    }else{
        console.log(randomNum);
        counter++;
        attempts.innerHTML = `Number of attempts : ${counter}`;
        if(numb == randomNum){
            guide.innerHTML = `Congrats! You have found it...`;
            btn.style.display = "none";
            const replayBtn = document.createElement("button");
            replayBtn.innerHTML = "Replay"
            replayBtn.id = "check-btn";
            replayBtn.addEventListener("click", () =>{
                location.reload();
            });
            inputs.appendChild(replayBtn);
        }else if(numb > randomNum){
            guide.innerHTML = `Go down`;
        }else{
            guide.innerHTML = `Go up`;
        }
    }
}

btn.addEventListener("click",()=>{
    validation()
})
