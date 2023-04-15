class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
		this.getCurrentFormattedTime = function () {
			const now = new Date();
			const hours = now.getHours().toString().padStart(2, '0');
			const minutes = now.getMinutes().toString().padStart(2, '0');
			return `${hours}:${minutes}`;
		}
	}



	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some(item => item.time === time && item.callback === callback)) {
			console.warn('Такой звонок уже существует');
		}

		const obj = {
			time: time,
			callback: callback,
			canCall: true,
		};
		this.alarmCollection.push(obj);
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time !== time);
	}

	start() {
		if (this.intervalId) {
			return
		}

		this.intervalId = setInterval(() => {
			const TimeReal = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(acc => {
				if (acc.time === TimeReal && acc.canCall === true) {
					acc.canCall = false;
					acc.callback();
				}
			})
		}, 1000)
	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach(acc => acc.canCall = true)
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}

const myClock = new AlarmClock();



console.log(myClock.start()); // запускаем часы
