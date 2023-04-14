class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (time === undefined || callback === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		for (const item of this.alarmCollection) {
			if (item.time === time) {
				console.warn('Уже присутствует звонок на это же время');
				return;
			}
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

	getCurrentFormattedTime() {
		const now = new Date();
		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId) {
			return
		}

		this.intervalId = setInterval(() => {
			const TimeReal = this.getCurrentFormattedTime();
			this.alarmCollection.forEach(acc => {
				if (acc.time === TimeReal) {
					acc.canCall = false;
					acc.callback();
				} else if (acc.time !== TimeReal) {
					acc.canCall = true
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
		this.alarmCollection.forEach(acc => {
			for (let i of this.alarmCollection) {
				i.canCall = true
			}
		})
	}


	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}

console.log()