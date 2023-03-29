class Test {
	constructor({ text, btnIncr, btnDecr }) {
		this.text = document.querySelector(`.${text}`);
		this.btnIncr = document.querySelector(`.${btnIncr}`);
		this.btnDecr = document.querySelector(`.${btnDecr}`);
		this.state = 0;
	}

	increment() {
		this.state++;
		this.text.textContent = this.state;
	}

	decrement() {
		this.state--;
		this.text.textContent = this.state;
	}

	setEvenListeners() {
		this.btnIncr.addEventListener('click', this.increment.bind(this));
		this.btnDecr.addEventListener('click', this.decrement.bind(this));
	}
}


class TodoItem {
	constructor(text) {
		this.text = text;
		this.textField = document.querySelector('.item-template').content;
		this.element = this.textField.querySelector('.item').cloneNode(true);
		this.checkBox = this.element.querySelector('.checkbox');
		this.elementText = this.element.querySelector('.text');
		this.delButton = this.element.querySelector('.button');
	}

	_setEventListeners() {
		this.delButton.addEventListener('click', () => {
			remainedCounter--;
			remainedAmount.textContent = remainedCounter;
			tasksCounter--;
			tasksAmount.textContent = tasksCounter;
			this.element.remove()
		})
		this.checkBox.addEventListener('click', () => {
			if (this.checkBox.checked) {
				this.crossText();
				completedCounter++;
				completedAmount.textContent = completedCounter;
				remainedCounter--;
				remainedAmount.textContent = remainedCounter;
			} else {
				this.unCrossText();
				completedCounter--;
				completedAmount.textContent = completedCounter;
				remainedCounter++;
				remainedAmount.textContent = remainedCounter;
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

// CLASSES /\/\/\/\
// =====================================


const props = {
	text: 'counter',
	btnIncr: 'btn-incr',
	btnDecr: 'btn-decr',
};

const test = new Test(props);
test.setEvenListeners();

// =============================

const input = document.querySelector('.input-text');
const addButton = document.querySelector('.input-add-btn');
const itemsContainer = document.querySelector('.items');
const tasksAmount = document.querySelector('.amount-count');
const completedAmount = document.querySelector('.completed-count');
const remainedAmount = document.querySelector('.remained-count');

let tasksCounter = 0;
let completedCounter = 0;
let remainedCounter = 0;

console.log(itemsContainer.innerHTML);

addButton.addEventListener('click', () => {
	const data = input.value;
	const item = new TodoItem(data);
	itemsContainer.append(item.getItem());
	input.value = '';
	tasksCounter++;
	remainedCounter++;
	tasksAmount.textContent = tasksCounter;
	remainedAmount.textContent = remainedCounter;
});

