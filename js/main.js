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