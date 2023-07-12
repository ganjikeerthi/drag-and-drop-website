const originalContainers = document.getElementById('left').innerHTML;
let right = document.getElementById("right");
let left = document.getElementById("left");
const container2Message = right.querySelector('#dragMessage');
const successMessage = right.querySelector('#successMessage');

function resetContainers() {
    left.innerHTML = originalContainers;
    right.innerHTML = "";
    right.appendChild(container2Message);
    successMessage.textContent = "";

    const items = document.querySelectorAll('.list');

    items.forEach(item => {
        item.addEventListener('dragstart', dragStart);
        item.addEventListener('dragend', dragEnd);
    });
}

const items = document.querySelectorAll('.list');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

right.addEventListener('dragover', dragOver);
right.addEventListener('drop', drop);

let draggedItem = null;

function dragStart(event) {
    draggedItem = this;
    this.classList.add('dragging');
}

function dragEnd() {
    draggedItem = null;
    this.classList.remove('dragging');
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    right.appendChild(draggedItem);
    right.removeChild(container2Message);
    successMessage.textContent = `${draggedItem.textContent} dropped successfully`;

    setTimeout(function() {
        successMessage.textContent = "";
    }, 2000); // Hide the success message after 2 seconds
}
