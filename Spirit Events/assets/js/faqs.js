document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        question.setAttribute('aria-expanded', answer.classList.toggle('show'));
    });
});