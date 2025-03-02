document.getElementById('discover').addEventListener('click',
    function (event) {
        event.preventDefault();
        window.location.href = './discovery.html'
    }
)

document.getElementById('btn-one').addEventListener('click',
    function () {
        completedCard('btn-one')
        activityDiv('task-one')
        alert('Board Updated Successfully')
    }
)
document.getElementById('btn-two').addEventListener('click',
    function () {
        completedCard('btn-two')
        activityDiv('task-two')
        alert('Board Updated Successfully')
    }
)
document.getElementById('btn-three').addEventListener('click',
    function () {
        completedCard('btn-three')
        activityDiv('task-three')
        alert('Board Updated Successfully')
    }
)
document.getElementById('btn-four').addEventListener('click',
    function () {
        completedCard('btn-four')
        activityDiv('task-four')
        alert('Board Updated Successfully')
    }
)
document.getElementById('btn-five').addEventListener('click',
    function () {
        completedCard('btn-five')
        activityDiv('task-five')
        alert('Board Updated Successfully')
    }
)
document.getElementById('btn-six').addEventListener('click',
    function () {
        completedCard('btn-six')
        activityDiv('task-six')
        alert('Board Updated Successfully')
    }
)
let clickedButtons = new Set();

document.querySelectorAll(".btn-completed").forEach((button, index) => {
    button.addEventListener("click", function () {
        clickedButtons.add(index);
        if (clickedButtons.size === 6) {
            alert("Congrats!!!You Have Completed All The Tasks.");
        }
    });
});
document.getElementById('clear-btn').addEventListener('click',
    function (event){
        event.preventDefault();
        let oldContainer=document.getElementById('activity-container');
        oldContainer.innerHTML='';
    }
)
document.getElementById('bg-button').addEventListener('click',
    function(){
        let random=Math.random()*200;
        let randomInt=Math.floor(random)
        let randomOne=Math.random()*300;
        let randomOneInt=Math.floor(randomOne)
        let randomTwo=Math.random()*400;
        let randomTwoInt=Math.floor(randomTwo)
        let randomColor=`rgb(${randomInt},${randomOneInt},${randomTwoInt})`
        document.body.style.backgroundColor=randomColor;
    }
)