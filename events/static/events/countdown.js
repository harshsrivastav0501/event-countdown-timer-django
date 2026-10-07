const countdowns = document.querySelectorAll(".countdown");


countdowns.forEach(function (countdown) {

    const targetDate = new Date(
        countdown.dataset.date
    ).getTime();


    const timer = setInterval(function () {

        const now = new Date().getTime();

        const difference = targetDate - now;


        if (difference <= 0) {

            countdown.innerHTML =
                "<h3>🎉 Event Started!</h3>";

            clearInterval(timer);

            return;
        }


        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


        const hours = Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );


        const minutes = Math.floor(
            (difference / (1000 * 60)) % 60
        );


        const seconds = Math.floor(
            (difference / 1000) % 60
        );


        countdown.querySelector(".days")
            .textContent = days;

        countdown.querySelector(".hours")
            .textContent = hours;

        countdown.querySelector(".minutes")
            .textContent = minutes;

        countdown.querySelector(".seconds")
            .textContent = seconds;

    }, 1000);

});