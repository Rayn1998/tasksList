export default class TaskItem {
    constructor(text, countersUpdate, tasksCounter, completedCounter) {
        this.text = text;
		this.textField = document.querySelector('.item-template').content;
		this.element = this.textField.querySelector('.item').cloneNode(true);
		this.checkBox = this.element.querySelector('.checkbox');
		this.elementText = this.element.querySelector('.text');
		this.delButton = this.element.querySelector('.button');

        this.tasksCounter = tasksCounter;
        this.completedCounter = completedCounter;

        this.updateTasksCount = countersUpdate.updateTasksCounter;
        this.updateRemainedCount = countersUpdate.updateRemainedCounter;
        this.updateCompletedCount = countersUpdate.updateCompletedCounter;
        this.setRemainedCount = countersUpdate.setRemainedCounter;
        this.getCounters = countersUpdate.getValues;
	}

	_setEventListeners() {
		this.delButton.addEventListener('click', () => {
            this.updateTasksCount(-1);
            this.checkBox.checked && this.updateCompletedCount(-1);
            this.setRemainedCount(this.getCounters()[0] - this.getCounters()[1]);
			this.element.remove();
		})
		this.checkBox.addEventListener('click', () => {
			if (this.checkBox.checked) {
				this.crossText();
                this.updateCompletedCount(1);
                this.updateRemainedCount(-1);
			} else {
				this.unCrossText();
                this.updateCompletedCount(-1);
                this.updateRemainedCount(1);
			} 
		})
	}

	crossText() {
		this.elementText.style.textDecoration = 'line-through';
	}

	unCrossText() {
		this.elementText.style.textDecoration = 'none';
	}

	getItem() {
		this._setEventListeners();
		this.elementText.textContent = this.text;
		return this.element;
	}
}