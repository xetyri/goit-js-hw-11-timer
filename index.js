
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate.getTime();
    this.timeCalculation = this.timeCalculation.bind(this);
    this.start();
  }

  renderLayout(root) {
    const layout = ` <h1 class="title">До начала осталось</h1>
    <div class="timer" id="timer-1">
    <div class="field">
      <span class="value" data-value="days">11</span>
      <span class="label">Days</span>
    </div>
    <div class="field">
      <span class="value" data-value="hours">11</span>
      <span class="label">Hours</span>
    </div>
    <div class="field">
      <span class="value" data-value="mins">11</span>
      <span class="label">Minutes</span>
    </div>
    <div class="field">
      <span class="value" data-value="secs">11</span>
      <span class="label">Seconds</span>
    </div>
  </div>`;
    root.insertAdjacentHTML("beforeend", layout);
  }

    
  timeCalculation() {
    const day = document.querySelector('[data-value="days"]');
    const hour = document.querySelector("[data-value='hours']");
    const minute = document.querySelector("[data-value='mins']");
    const second = document.querySelector("[data-value='secs']");
    const timeNow = Date.now();
    
    this.time = this.targetDate - timeNow;
    const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
    day.textContent = days < 10 ? `0${days}` : days;
    const hours = Math.floor(
      (this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hour.textContent = hours < 10 ? `0${hours}` : hours;
    const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
    minute.textContent = mins < 10 ? `0${mins}` : mins;
    const secs = Math.floor((this.time % (1000 * 60)) / 1000);
    second.textContent = secs < 10 ? `0${secs}` : secs;
  }

  start() {
    const body = document.querySelector("body");
    this.renderLayout(body);
    setInterval(this.timeCalculation, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 19, 2021'),
});

timer.startTimer();