(function () {

    function clock() {

        let analogClock = document.querySelectorAll('.clock-container');

        for (let i = 0; i < analogClock.length; i++) {

            let timezone = parseFloat(analogClock[i].getAttribute('data-time'));
            let operator = analogClock[i].getAttribute('data-operator');

            let hour = analogClock[i].querySelector('.clock-hour');
            let minute = analogClock[i].querySelector('.clock-minute');
            let second = analogClock[i].querySelector('.clock-second');

            let now = new Date();
            now.setMilliseconds(operator + timezone * 60 * 60 * 1000);

            let h = now.getHours();
            let m = now.getMinutes();
            let s = now.getSeconds();
            let ms = now.getMilliseconds();

            second.style.transform = `rotate(${s * 6 + ms * .006}deg)`;
            minute.style.transform = `rotate(${m * 6 + s * .1}deg)`;
            hour.style.transform = `rotate(${h * 30 + m * .5}deg)`;
        };
        setTimeout(clock, 20);
        }

    clock();

})();
