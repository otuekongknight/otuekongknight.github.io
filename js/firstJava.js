window.addEventListener('load', (event) => {
    const update = document.querySelector('#lastupdated');
    update.textContent = document.lastModified;

    const year = document.querySelector('#copyrightyear');
    year.textContent = new Date().getFullYear();
})