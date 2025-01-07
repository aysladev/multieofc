document.querySelector('textarea').addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        
        const textarea = event.target;
        const commentText = textarea.value.trim();

        if (commentText) {
            const commentSection = document.querySelector('.comments');
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `<p>${commentText}</p>`;
            commentSection.appendChild(newComment);
            textarea.value = ''; // Limpa o campo de texto
        }
    }
});
