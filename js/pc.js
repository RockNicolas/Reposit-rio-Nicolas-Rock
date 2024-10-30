    document.getElementById('thumbnail').onclick = function() {
    document.getElementById('modal').style.display = 'block';

    }

    document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = 'none';

    }

    window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}