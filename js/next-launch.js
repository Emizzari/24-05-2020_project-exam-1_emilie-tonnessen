// API: --------------------------------------------------------------------------
const nextLaunchAPI = "https://api.spacexdata.com/v3/launches/next";

//Fetch json API
async function fetchNextLaunch() {
    try {
        const response = await fetch(nextLaunchAPI);
        const nextLaunch = await response.json();
        displayCountdown(nextLaunch);
    } catch (error) {
        console.log(error);
    }
}

// Call the fetch function
fetchNextLaunch();
// END OF API --------------------------------------------------------------------



// DISPLAY COUNTDOWN TIMER: ------------------------------------------------------
function displayCountdown(nextLaunch) {
    var launchDate = nextLaunch.launch_date_utc;

    function remainingTime(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());

        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function countdownTimer(id, endtime) {
        var countdownContainer = document.querySelector(".CT-wrap__tr");

        var timeInterval = setInterval(function () {
            var time = remainingTime(endtime);

            let html ="";

            html += 
                `<div id="CT">
                     <div class="CT-block"><p class="CT-letters">days</p><p class="CT-numbers">` + time.days + `</p></div>` +
                    `<div class="CT-block"><p class="CT-letters">hours</p><p class="CT-numbers">` + time.hours + `</p></div>` +
                    `<div class="CT-block"><p class="CT-letters">minutes</p><p class="CT-numbers">` + time.minutes + `</p></div>` +
                    `<div class="CT-block"><p class="CT-letters">seconds</p><p class="CT-numbers">` + time.seconds + `</p></div>
                </div>`;

            countdownContainer.innerHTML = html;

            // If the countdown hits 0, clear the timer
            if (time.total <= 0) {
                clearInterval(timeInterval);
            }
        // update every 1 second
        }, 1000);
    }
    countdownTimer('countdown', launchDate);
}
// END OF COUNTDOWN TIMER  -------------------------------------------------------