document.getElementById('search-input').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let appItems = document.getElementsByClassName('app-item');

    Array.from(appItems).forEach(function(item) {
        let appName = item.getAttribute('data-name').toLowerCase();
        if (appName.includes(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});