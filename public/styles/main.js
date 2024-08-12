document.addEventListener('DOMContentLoaded', function () {
    const addBlogForm = document.getElementById('addBlogForm');
    const blogCardsContainer = document.getElementById('blogCards');

    addBlogForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('blogTitle').value;
        const description = document.getElementById('blogDescription').value;

        if (title && description) {
            const newBlogCard = document.createElement('div');
            newBlogCard.classList.add('blog-card');
            newBlogCard.innerHTML = `
                <h3>${title}</h3>
                <p>${description}</p>
                <button class="delete-btn">Delete</button>
            `;
            blogCardsContainer.appendChild(newBlogCard);


            addBlogForm.reset();

            newBlogCard.querySelector('.delete-btn').addEventListener('click', function () {
                blogCardsContainer.removeChild(newBlogCard);
            });
        }
    });

    document.querySelectorAll('.delete-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            const blogCard = button.parentElement;
            setTimeout(() => blogCardsContainer.removeChild(blogCard), 300);
        });
    });
});
