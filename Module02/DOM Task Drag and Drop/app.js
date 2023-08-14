const draggableItems = document.querySelectorAll(".item");
draggableItems.forEach(item => {
    item.addEventListener("dragstart", dragStart)
    item.addEventListener("dragend", dragEnd)
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
};

function dragOver(event) {
    event.preventDefault();
};

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggableItem = document.getElementById(data);
    event.target.appendChild(draggableItem)
};

function dragEnd(event) {

    const dropzone = event.target.classList.contains("item");
    if (!dropzone) {
        const data = event.dataTransfer.getData("text/plain");
        const draggableItems = document.getElementById(data);
        const unkrankedDropZone = document.getElementById("unranked-drop-zone");
        unkrankedDropZone.appendChild(draggableItems)
    };
};

const dropzones = document.querySelectorAll(".drop-zone")

dropzones.forEach(dropZone => {
    dropZone.addEventListener("dragover", dragOver);
    dropZone.addEventListener("drop", drop);
});

draggableItems.forEach(item => {
    item.addEventListener("dbclick", returnToOrginalPosition);
});

function returnToOrginalPosition(event){
    const data = event.target.id;
    const draggableItem = document.getElementById(data);
    const unkrankedDropZone = document.getElementById("unranked-drop-zone");
    unkrankedDropZone.appendChild(draggableItem)
}



