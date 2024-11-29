// Selección de elementos
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('commentInput');
const commentsSection = document.getElementById('commentsSection');

// Almacenar los comentarios en LocalStorage
function loadComments() {
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    commentsSection.innerHTML = '';
    comments.forEach(comment => {
        displayComment(comment);
    });
}

// Mostrar el comentario en el DOM
function displayComment(comment) {
    const div = document.createElement('div');
    div.classList.add('comment');
    div.textContent = comment;
    commentsSection.appendChild(div);
}

// Enviar el formulario
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const comment = commentInput.value.trim();
    if (comment) {
        // Guardar el comentario en LocalStorage
        const comments = JSON.parse(localStorage.getItem('comments')) || [];
        comments.push(comment);
        localStorage.setItem('comments', JSON.stringify(comments));

        // Mostrar el comentario en la página
        displayComment(comment);

        // Limpiar el campo de texto
        commentInput.value = '';
    }
});

// Cargar los comentarios cuando se carga la página
loadComments();
