export default class Counter {
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
