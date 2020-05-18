// Declare API
const launchAPI = "https://api.spacexdata.com/v3/launches";
const nextLaunchAPI = "https://api.spacexdata.com/v3/launches/next";
const upcomingLaunchesAPI = "https://api.spacexdata.com/v3/launches/upcoming";
const completedLaunchesAPI = "https://api.spacexdata.com/v3/launches/past";

//Fetch json API
async function fetchAPI() {
    try {
        // Next Launch:
        const nextLaunchResponse = await fetch(nextLaunchAPI);
        const nextLaunch = await nextLaunchResponse.json();
        displayNextLaunch(nextLaunch);
        displayCountdown(nextLaunch);

        // Upcoming Launches:
        const upcomingLaunchesResponse = await fetch(upcomingLaunchesAPI);
        const upcomingLaunches = await upcomingLaunchesResponse.json();
        displayUpcomingLaunches(upcomingLaunches);

        // Completed Launches
        const completedLaunchesResponse = await fetch(completedLaunchesAPI);
        const completedLaunches = await completedLaunchesResponse.json();
        displayCompletedLaunches(completedLaunches);

    } catch (error) {
        console.log(error);
    }
}


// Call the fetch function
fetchAPI();


// CONVERT TO DATE FORMAT ------------------------------------------------------
function convertDate(launchDate) {
    let date = new Date(launchDate * 1000);
    return date.toLocaleDateString();
}
// END OF DATE FORMAT ----------------------------------------------------------



// DISPLAY NEXT LAUNCH ---------------------------------------------------------
function displayNextLaunch(nextLaunch) {
    // console.log(nextLaunch);

    // Target the container
    const nextLaunchWrap = document.querySelector(".next-launch");

    let html = "";

    html += `<h2 class="border-bottom">next launch</h2>
                <p class="dd-content__description">${nextLaunch.mission_name}</p>


                <h6 class="dd-content__title">Date:</h6>
                <p class="dd-content__description">${convertDate(nextLaunch.launch_date_unix)}</p>


                <h6 class="dd-content__title">site:</h6> 
                <p class="dd-content__description">${nextLaunch.launch_site.site_name}</hp>


                <h6 class="dd-content__title">rocket:</h6> 
                <p class="dd-content__description">${nextLaunch.rocket.rocket_name}</p>

                <h6 class="dd-content__title">details:</h6> 
            `;

    if (!nextLaunch.details) {
        html += `<p class="details"> 
                        <span class="italic">No current details at this moment.</span>
                    </p>
                `;
    }
    else {
        html += `<p class="details">${nextLaunch.details}</p>`;
    }

    html +=`<div class="CT-wrap__launch"> 
                <div class="loader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>                            
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        `;

    nextLaunchWrap.innerHTML = html;
}
// END OF NEXT LAUNCH: ---------------------------------------------------------



// DISPLAY COUNTDOWN TIMER: ----------------------------------------------------
function displayCountdown(nextLaunch) {

    // Countdown Variable
    var deadline = nextLaunch.launch_date_utc;

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

    // Initiate the timer
    function initializeCountdown(id, endtime) {
        var countdownWrap = document.querySelector(".CT-wrap__launch");

        var timeinterval = setInterval(function () {
            var t = getTimeRemaining(endtime);

            countdownWrap.innerHTML =
                `<div id="CT__launch">` +
                    `<div class="CT-block__launch"><p class="CT-letters__launch">days</p><p class="CT-numbers__launch">` + t.days + `</p></div>` +
                    `<div class="CT-block__launch"><p class="CT-letters__launch">hours</p><p class="CT-numbers__launch">` + t.hours + `</p></div>` +
                    `<div class="CT-block__launch"><p class="CT-letters__launch">minutes</p><p class="CT-numbers__launch">` + t.minutes + `</p></div>` +
                    `<div class="CT-block__launch"><p class="CT-letters__launch">seconds</p><p class="CT-numbers__launch">` + t.seconds + `</p></div>
                </div>`
                ;

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }, 1000);
    }

    initializeCountdown('countdown', deadline);
}
// END OF COUNTDOWN TIMER: -------------------------------------------------------



// DISPLAY UPCOMING LAUNCHES: ----------------------------------------------------
function displayUpcomingLaunches(upcomingLaunches) {
    console.dir(upcomingLaunches);

    const upcomingLaunchesContainer = document.querySelector(".upcoming-launch-wrap");

    let html = "";

    // Function starting at 1 as the "next launch" section displays that one
    for (let i = 1; i < upcomingLaunches.length; i++) {
        html +=
            `
                <div class="dd-container"> 
                    <input type="checkbox" id="toggle_id-${i}" class="checkbox"/>
                    <label class="dd-btn" for="toggle_id-${i}">
                        <h6 class="dd-btn__title">${upcomingLaunches[i].mission_name} - ${convertDate(upcomingLaunches[i].launch_date_unix)}</h6>  
                        <div class="dd-btn__icon grid__center">
                            <div class="dd-btn__icon-1"></div>
                            <div class="dd-btn__icon-2"></div> 
                        </div>
                    </label>
                    <div class="dd-content dd-content__panel">
                        <h6 class="dd-content__title">Rocket</h6>  
                        <p class="dd-content__description">${upcomingLaunches[i].rocket.rocket_name}</p>
                        
                        <h6 class="dd-content__title">Launch site</h6>
                        <p class="dd-content__description">${upcomingLaunches[i].launch_site.site_name}</p>
                        
                        <h6 class="dd-content__title">details</h6>
            `;

        if (!upcomingLaunches[i].details) {
            html += `   <p class="dd-content__description"><span class="italic">No current details at this moment.</span></p>`;
        }
        else {
            html += `   <p class="dd-content__description">${upcomingLaunches[i].details}</p>`;
        }

        html +=`    </div>   
                </div>
            `;
    }

    upcomingLaunchesContainer.innerHTML = html;
}
// END OF UPCOMING LAUNCHES ------------------------------------------------------



// DISPLAY COMPLETED LAUNCHES: ---------------------------------------------------
function displayCompletedLaunches(completedLaunches) {
    // console.log(completedLaunches);

    const completedLaunchesContainer = document.querySelector(".completed-launch-wrap");

    let html = "";

    // Backwards loop
    for (var i = completedLaunches.length - 1; i >= 0; i--) {

        html +=`<div class="dd-container">
                    <input class="checkbox" type="checkbox" id="toggle_id-${i}"/>
                    <label class="dd-btn" for="toggle_id-${i}">
                        <h6 class="dd-btn__title">${completedLaunches[i].mission_name} - ${convertDate(completedLaunches[i].launch_date_unix)}</h6>  
                        <div class="dd-btn__icon grid__center">
                            <div class="dd-btn__icon-1"></div>
                            <div class="dd-btn__icon-2"></div> 
                        </div>
                    </label>
                    <div class="dd-content dd-content__panel">
                        <h6 class="dd-content__title">Rocket</h6>
                        <p class="dd-content__description">${completedLaunches[i].rocket.rocket_name}</p>
                        
                        <h6 class="dd-content__title">Launch site</h6>
                        <p class="dd-content__description">${completedLaunches[i].launch_site.site_name}</p>
                        
                        <h6 class="dd-content__title">details</h6>
                        <p class="dd-content__description">${completedLaunches[i].details}</p>
                    </div> 
                </div>
            `;
    }

    completedLaunchesContainer.innerHTML = html;
}
// END OF COMPLETED LAUNCHES -----------------------------------------------------