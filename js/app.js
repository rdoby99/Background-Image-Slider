(function() {
    const imageContainer = document.querySelector('.img-container');
    const buttons = document.querySelectorAll('.btn');
    let imgArray = ['./img/contBcg-0.jpeg', './img/contBcg-1.jpeg', './img/contBcg-2.jpeg', './img/contBcg-3.jpeg', './img/contBcg-4.jpeg'];
    let counter = 0;

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (button.classList.contains('btn-left')) {
                counter--;
                if (counter < 0) {
                    counter = imgArray.length -1;
                };
                imageContainer.style.backgroundImage = 'url(' + imgArray[counter] + ')';
            } else {
                counter++;
                if (counter > imgArray.length -1) {
                    counter = 0;
                };
                imageContainer.style.backgroundImage = 'url(' + imgArray[counter] + ')';
            }
        })
    })

    

})();
