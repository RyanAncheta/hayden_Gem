function showMore(id) {
    var container = document.getElementById(id);
    var hiddenContent = container.querySelector('.hidden-content');
    var showMoreBtn = container.querySelector('.showMoreBtn');

    if (hiddenContent.style.display === 'none' ) {
        hiddenContent.style.display = 'block';
        showMoreBtn.textContent = 'Show Less';
    } else {
        hiddenContent.style.display = 'none';
        showMoreBtn.textContent = 'Show More';
    }
}