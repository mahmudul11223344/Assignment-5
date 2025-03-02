function completedCard(id) {
    document.getElementById(id).disabled = true;
    let value = negativeTask('task-negative')
    let valueNumber = parseInt(value)
    let positiveValue = negativeTask('checked')
    let positiveValueNumber = parseInt(positiveValue)
    let valueChanged = valueNumber - 1;
    let positiveValueChanged = positiveValueNumber + 1;
    setTaskValue('task-negative', valueChanged)
    setTaskValue('checked', positiveValueChanged)
}
function negativeTask(id) {
    let value = document.getElementById(id).innerText;
    return value;
}
function setTaskValue(id, valueChanged) {
    document.getElementById(id).innerText = valueChanged;
}
function activityDiv(id) {
    let now = new Date();
    let currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    console.log(currentTime)
    let taskOne = document.getElementById(id).innerText;
    console.log(taskOne)
    let newElement = document.createElement('div')
    newElement.innerHTML = `<div class="bg-blue-50 p-4 mt-4 rounded-lg">
                        <p>You have complete the task ${taskOne} at ${currentTime}</p>
                    </div>`
    console.log(newElement)
    let newDiv = document.getElementById('activity-container')
    newDiv.appendChild(newElement)
}
let newElementDate = document.createElement('p')
let myDate = new Date();
let dateLive = myDate.toDateString();

let parts = dateLive.split(" ");
let newDateFormat = `${parts[0]}, <br> ${parts[1]} ${parts[2]} ${parts[3]}`;
newElementDate.innerHTML = `<p class="font-semibold">${newDateFormat}</p>`;
let realDate = document.getElementById('date')
realDate.appendChild(newElementDate)