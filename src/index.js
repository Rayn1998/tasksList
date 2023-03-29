import TaskItem from  './components/TaskItem.js';

const input = document.querySelector('.input-text');
const addButton = document.querySelector('.input-add-btn');
const errorText = document.querySelector('.error-text');
const itemsContainer = document.querySelector('.items');
const tasksAmount = document.querySelector('.amount-count');
const completedAmount = document.querySelector('.completed-count');
const remainedAmount = document.querySelector('.remained-count');

let tasksCounter = 0;
let	completedCounter = 0;
let	remainedCounter = 0;

const updateCounters = {
	updateTasksCounter(state) {
		tasksCounter += state;
		tasksAmount.textContent = tasksCounter;
	},

	updateCompletedCounter(state) {
		completedCounter += state;
		completedAmount.textContent = completedCounter;
	},

	updateRemainedCounter(state) {
		remainedCounter += state;
		remainedAmount.textContent = remainedCounter;
	},

	setRemainedCounter(value) {
		remainedCounter = value;
		remainedAmount.textContent = value;
	},

	getValues() {
		return [tasksCounter, completedCounter, remainedCounter];
	}
}

const checkInput = () => {
	if (input.value.length < 3) {
		return false
	} else {
		return true
	}
}

addButton.addEventListener('click', () => {
	const data = input.value;
	const item = new TaskItem(data, updateCounters, tasksCounter, completedCounter);
	if (checkInput()) {
		itemsContainer.append(item.getItem());
		input.value = '';
		updateCounters.updateTasksCounter(1);
		updateCounters.updateRemainedCounter(1);
	} else {
		errorText.textContent = 'Не менее 3х символов';
		setTimeout(() => {
			errorText.textContent = '';
		}, 1000);
	}
});

