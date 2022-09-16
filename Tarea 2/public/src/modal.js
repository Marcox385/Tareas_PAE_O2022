// IS727272 - Cordero Hernández, Marco Ricardo
// Abrir modal y prevenir scroll
Array.from(document.getElementsByClassName('seymour')).forEach(btn => {
    btn.addEventListener('click', e => {
        const modalElem = e.target.nextElementSibling;
    
        modalElem.showModal();
        modalElem.id = 'activeModal';
        modalElem.style.display = 'block';
        document.querySelector("body").style.overflow = 'hidden';
    });
});

// Cerrar modal
Array.from(document.getElementsByTagName('dialog')).forEach(diag => {
    diag.addEventListener('click', (e) => {
        const rect = diag.getBoundingClientRect();
        if (e.clientY < rect.top || e.clientY > rect.bottom ||
            e.clientX < rect.left || e.clientX > rect.right) {
            diag.removeAttribute('id');
            diag.style.display = 'none';
            document.querySelector("body").style.overflow = 'visible';
            diag.close();
        }
    });
});

document.body.addEventListener('keydown', (e) => {
    try {
        const activeModal = document.getElementById('activeModal');
        activeModal.style.display = 'none';
        document.querySelector("body").style.overflow = 'visible';
        activeModal.removeAttribute('id');
    } catch (e) {
        return;
    }
})