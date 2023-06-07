const questionBoxes = document.querySelectorAll('.questionBox');
let activeQuestion = null;

questionBoxes.forEach(questionBox => {
    questionBox.addEventListener('click', () => {
        const question = questionBox.parentNode;
        const answer = question.querySelector('.answer');
        
        const isActive = question.classList.contains('active');

        if (isActive) {
            question.classList.remove('active');
            answer.style.display = 'none';
            activeQuestion = null;
        } else {
            if (activeQuestion) {
            activeQuestion.classList.remove('active');
            activeQuestion.querySelector('.answer').style.display = 'none';
            }

            question.classList.add('active');
            answer.style.display = 'flex';
            activeQuestion = question;
        }
    });
});
