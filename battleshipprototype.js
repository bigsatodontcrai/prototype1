window.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');
    let content2 = document.getElementById('content2');
    let content3 = document.getElementById('content3');
    setup(content, markSquare);
    setup(content2, markShip);
    let resetButton = document.querySelector('.reset');
    allShips(content3, 5);
    
    resetButton.addEventListener('click', () => {
        breakdown(content);
        setup(content, markSquare);
        breakdown(content2);
        setup(content2, markShip);
    });
});