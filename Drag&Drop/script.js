const dropArea = document.querySelector('.drop-area');
const images = dropArea.querySelectorAll('img');
const targets = dropArea.querySelectorAll('.target');
const message = document.querySelector('.message');
const submitButton = document.getElementById('submit-button');
const exitButton = document.getElementById('exit-button');


let score = 0;
let matchedCount = 0;

images.forEach(image => {
    image.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', image.alt);
    });
});

targets.forEach(target => {
    target.addEventListener('drop', (event) => {
        event.preventDefault();

        const droppedImage = event.dataTransfer.getData('text/plain');
        const targetName = target.querySelector('p').textContent;

        if (droppedImage == targetName) {
            target.style.border = '2px solid green';

            if (droppedImage == "Add") images[1].classList.add('correct');
            else if (droppedImage == "Multiply") images[0].classList.add('correct');
            else if (droppedImage == "Divide") images[2].classList.add('correct');

            matchedCount++;

            if (matchedCount === targets.length) {
                updateMessage();
                score = 1;
            }
        } else {
            target.style.border = '2px solid red';
        }
    });

    target.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    target.addEventListener('dragleave', () => {
        target.style.border = '2px solid #ccc';
    });
});

submitButton.addEventListener('click', () => {
    // var audio = new Audio("./sound.mp3")
    // audio.play();
    checkAllMatched();
    exitButton.style.display = 'block'; 
});

function updateMessage() {
    // message.textContent = `Quiz completed! Score: ${score}`;
}

function checkAllMatched() {
    if (matchedCount === targets.length) {
        var audio = new Audio("./sound.mp3")
        audio.play();
        message.textContent = "Quiz completed! Score: " + score;
         exitButton.style.display = 'block'; 
    } else {
         message.textContent = "Quiz in progress. Score: " + score;
    }
}

exitButton.addEventListener('click', () => {
    // Add logic to navigate to the next page or perform any other actions
    window.location.href = '../startquiz/index.html'; 
    // Replace '../startquiz/index.html' with the actual URL of your next page
});
