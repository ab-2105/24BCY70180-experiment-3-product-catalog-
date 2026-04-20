
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('sort-dropdown');
    const productList = document.getElementById('product-list');
    const products = Array.from(document.getElementsByClassName('product-card'));

    dropdown.addEventListener('change', function() {
        const sortValue = this.value;

        const sorted = products.sort((a, b) => {
            const priceA = parseInt(a.getAttribute('data-price'));
            const priceB = parseInt(b.getAttribute('data-price'));

            if (sortValue === 'low') return priceA - priceB;
            if (sortValue === 'high') return priceB - priceA;
            return 0;
        });

        sorted.forEach(card => productList.appendChild(card));
    });
});