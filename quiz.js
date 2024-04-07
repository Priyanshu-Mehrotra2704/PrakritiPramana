const questions = [
  {
    question: "In the Bhagavad Gita, the verse emphasizing performing one's duty without attachment to results aligns with the concept of:\n",
    options: ["Immediate gratification", "Sustainable practices", "Detached indifference", "Authoritarian rule"],
    answer: 1 // Index of the correct answer in options array
  },
  {
    question: "The Bhagavad Gita promotes the idea that all beings are interconnected. Harming the environment, based on this concept, would be akin to:",
    options: ["Completing a difficult task", "Achieving spiritual enlightenment", "Harming a part of yourself", "Gaining knowledge"],
    answer: 2
  },
  {
      question: "The Bhagavad Gita's message can inspire us to become:",
      options: ["More mindful stewards of the environment", "Careless and wasteful", "Indifferent to the consequences of our actions", "Focused solely on material success"],
      answer: 0
    },
  {
      question: "The Bhagavad Gita's concept of dharma (righteous duty) extends to:",
      options: ["Putting oneself above all else", "Ignoring the suffering of others", "Exploiting nature for personal gain", "Living in harmony with the environment"],
      answer: 3
    },
  {
      question: "The Bhagavad Gita's concept of dharma (righteous duty) extends to:",
      options: ["Exploiting nature for personal gain", "Living in harmony with the environment", "Ignoring the suffering of others", "Putting oneself above all else"],
      answer: 1
    },
  {
      question: "The Bhagavad Gita's message of interconnectedness suggests that protecting the environment is:",
      options: ["Unimportant in the grand scheme of things", "A burden on human progress", "Essential for our own well-being", "Irrelevant to spiritual growth"],
      answer: 2
    },
  {
      question: "According to the Bhagavad Gita, our actions towards the environment should be motivated by:",
      options: ["Anger and resentment", "Fear and insecurity", "Selfish gain", "A sense of duty and responsibility"],
      answer: 3
    },
  {
      question: "The Bhagavad Gita discourages:",
      options: ["Respect for all living beings", "Fulfilling one's potential", "Sustainable practices", "Following a righteous path"],
      answer: 0
    },
  {
      question: "Seeing the divine in all creation, as suggested in the Bhagavad Gita, would inspire one to:",
      options: ["Focus solely on materialistic pursuits", "Ignore the beauty of the natural world", "Treat the environment with respect and care", "Seek dominance over nature"],
      answer: 2
    },
  {
      question: "The Bhagavad Gita promotes:",
      options: ["Reckless use of resources", "Moderation and mindful consumption", "Excessive indulgence in worldly pleasures", "Disregard for the natural world"],
      answer: 1
    }
      // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("quiz-container");
  questionContainer.innerHTML = ""; // Clear previous content

  const questionElement = document.createElement("p");
  questionElement.textContent = questions[currentQuestion].question;
  questionContainer.appendChild(questionElement);

  const answerOptions = document.createElement("ul");
  questions[currentQuestion].options.forEach((option, index) => {
    const optionElement = document.createElement("li");   
    optionElement.innerHTML = `<input type="radio" id="option${index}" name="answer" value="${index}"> ${option}`;
    answerOptions.appendChild(optionElement);
  });
  questionContainer.appendChild(answerOptions);
}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    if (userAnswer === questions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    if (currentQuestion === questions.length) {
      displayResult();
    } else {
      displayQuestion();
    }
  } else {
    alert("Please select an answer!");
  }
});

function displayResult() {
  const resultContainer = document.getElementById("result");
  resultContainer.textContent = `You scored ${score} out of ${questions.length}`;
  submitButton.disabled = true; // Disable submit button after quiz completion
}

displayQuestion(); // Display the first question on page load
