let ourcamps = document.querySelectorAll('.ourcamp');
let rancamps = document.querySelectorAll('.rancamp');
let parents = document.querySelectorAll(".parent");
let cat = document.querySelector('#cat');
let offsetX;
let offsetY;

const myImage = new Image(200, 200);
myImage.src = "energy/trashbag.png";

ourcamps.forEach(function (ourcamp, index) {
    ourcamp.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('TrueEnergy', index);
        event.dataTransfer.setDragImage(myImage, 100, 25);
    });
});

rancamps.forEach(function (rancamp, index) {
    rancamp.addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('FalseEnergy', index);
        event.dataTransfer.setDragImage(myImage, 100, 25);
    });
});

parents.forEach(function (parent, index) {
    parent.addEventListener('dragover', function (event) {
        event.preventDefault();
    });

    parent.addEventListener('drop', function (event) {
        if (index === 0){
            this.appendChild(ourcamps[event.dataTransfer.getData('TrueEnergy')]);
        };
        if (index === 1){
            this.appendChild(rancamps[event.dataTransfer.getData('FalseEnergy')]);
        };

    });

});

cat.addEventListener('dragstart', function(event){
    console.log(event.offsetX, event.offsetY);
    offsetX = event.offsetX;
    offsetY = event.offsetY;
});

cat.addEventListener('dragend', function(event){
    console.log(event.pageX, event.pageY);
    cat.style.top = (event.pageY - offsetY) + 'px';
    cat.style.left = (event.pageX - offsetX) + 'px';
});