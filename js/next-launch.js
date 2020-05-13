// Declare API
const nextLaunchAPI = "https://api.spacexdata.com/v3/launches/next";


//Fetch json API
async function fetchNextLaunch() {
    try {
        const response = await fetch(nextLaunchAPI);

        const nextLaunch = await response.json();

        displayNextLaunch(nextLaunch);
    } catch (error) {
        console.log(error);
    }
}

// Call the fetch function
fetchNextLaunch();


// Displaying the countdown timer
function displayNextLaunch(nextLaunch) {
    console.log(nextLaunch);

    
    

    


    var deadline = nextLaunch.launch_date_utc;
    console.log(deadline);

    // Calculate the time remaining (not my code!! ned to document!!!)
    function getTimeRemaining(endtime) {
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

    function initializeClock(id, endtime) {
        var clock = document.querySelector(".CT-wrap__tr");

        var timeinterval = setInterval(function () {
            var t = getTimeRemaining(endtime);

            clock.innerHTML = 
                `<div id="CT">
                     <div class="CT-block"><p class="CT-letters">days</p><p class="CT-numbers">` + t.days + `</p></div>` +
                    `<div class="CT-block"><p class="CT-letters">hours</p><p class="CT-numbers">` + t.hours + `</p></div>` +
                    `<div class="CT-block"><p class="CT-letters">minutes</p><p class="CT-numbers">` + t.minutes + `</p></div>` +
                    `<div class="CT-block"><p class="CT-letters">seconds</p><p class="CT-numbers">` + t.seconds + `</p></div>
                </div>`                
            ;

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);
    }

    initializeClock('countdown', deadline);
}
