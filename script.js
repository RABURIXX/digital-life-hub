
const questions = [
    {
        question: "What does IT stand for?",
        choices: [
            "Internet Tools",
            "Information Technology",
            "International Training",
            "Information Transfer"
        ],
        answer: "Information Technology"
    },
    {
        question: "Which is an example of online communication?",
        choices: [
            "Video call",
            "Paper notebook",
            "Pencil",
            "Whiteboard"
        ],
        answer: "Video call"
    },
    {
        question: "What should you do with your password?",
        choices: [
            "Share it with strangers",
            "Post it online",
            "Keep it private",
            "Use your birthday only"
        ],
        answer: "Keep it private"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const quiz = document.getElementById("quiz");
    const q = questions[currentQuestion];

    quiz.innerHTML = `
        <h3>${q.question}</h3>
        <div class="quiz-choices">
            ${q.choices.map(choice => `
                <button class="quiz-option"
                    onclick="checkAnswer('${choice.replace(/'/g, "\\'")}')">
                    ${choice}
                </button>
            `).join("")}
        </div>
        <p>Question ${currentQuestion + 1} of ${questions.length}</p>
    `;
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `
            <h3>Quiz Completed!</h3>
            <p>Your score: ${score} out of ${questions.length}</p>
            <button class="quiz-option" onclick="startQuiz()">Try Again</button>
        `;
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const button = document.getElementById("dark-mode-btn");

    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
    } else {
        button.textContent = "🌙 Dark Mode";
    }
}
