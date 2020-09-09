window.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById('content');
    let ocean = document.getElementById('ocean');
    let base = document.getElementById('base');
    setup(content, markSquare);
    setup(ocean, markShip);
    let resetButton = document.querySelector('.reset');
    
    //content2.setAttribute("ondrop","dropShip(event)");
    resetButton.addEventListener('click', () => {
        breakdown(content);
        setup(content, markSquare);
        breakdown(ocean);
        setup(ocean, markShip);
    });
});