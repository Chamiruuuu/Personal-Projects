

const Questions = [
    {
        question: "1.Which planet is known as the Red Planet?",
        options: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "2.What is the capital of France?",
        options: [
            { text: "Berlin", correct: false },
            { text: "Madrid", correct: false },
            { text: "Paris", correct: true },
            { text: "Rome", correct: false }
        ]
    },
    {
        question: "3.Which element has the chemical symbol 'O'?",
        options: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Silver", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "4.Who wrote 'Romeo and Juliet'?",
        options: [
            { text: "Mark Twain", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare",correct:true },
            { text: "George Orwell", correct: false }
        ]
    },
    {
        question: "5.What is the largest ocean on Earth?",
        options: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    }
];


let CurrentIndex = 0
let Score = 0

const score = document.getElementById("score")

const btn = document.getElementById("next-btn")

function RenderQuestion(){

    
    const btn = document.getElementById("next-btn")

    const question = document.getElementById("question")
    const optionsContainer = document.getElementById("ul")


    const CurrentQuestion = Questions[CurrentIndex];
    question.innerHTML = CurrentQuestion.question;

    optionsContainer.innerHTML = "";

    CurrentQuestion.options.forEach((Option) => {
        const li = document.createElement("li");
        li.textContent = Option.text;
        optionsContainer.appendChild(li); 

        btn.disabled = true
    
        li.addEventListener("click", () => {
            const ListQuestion = document.querySelectorAll("li")

            btn.disabled = false


            if(Option.correct){
                li.classList.add("OptionCorrect");
                Score += 1;
                score.textContent = `Your Score: ${Score}`

            }else{
                li.classList.add("Incorrect");
            }

            ListQuestion.forEach((items) =>{
                items.style.pointerEvents = "none"
                })


            })
        });

    }

const restart = document.getElementById("restart-btn")
restart.addEventListener("click", ()=>{
    CurrentIndex = 0
    Score = 0
    score.textContent = `Your Score: ${Score}`
    RenderQuestion()
})

btn.addEventListener("click", ()=>{
    CurrentIndex++

    if(CurrentIndex < Questions.length){
        RenderQuestion()
    }else{
        alert("Quiz Finished")
    }

    })
RenderQuestion()