const containers = document.querySelectorAll('.help-question-wrap');


function dropAnswer () { 
    containers.forEach(container => {
        let btn = container.querySelector('.help_question-show');
        btn.addEventListener('click', () => {
            container.querySelector('.hidden').classList.toggle('help_answer-wrap');
            container.querySelector('.help_question').classList.toggle('active_question');
            container.querySelector('.arrow-down').classList.toggle('hidden_btn');
            container.querySelector('.arrow-down').classList.remove('show_btn');
            container.querySelector('.arrow-up').classList.toggle('show_btn');
            container.querySelector('.arrow-up').classList.remove('hidden_btn');
            container.querySelector('.arrow-up').classList.add('hidden_btn');
        });     
    });
}

document.addEventListener("DOMContentLoaded", dropAnswer)
