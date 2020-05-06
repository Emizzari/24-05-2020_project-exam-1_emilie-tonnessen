// Declare API
const nextLaunchAPI = "https://api.spacexdata.com/v3/launches/next";


//Fetch json API
async function fetchNextLaunch() {
    try {
        const response = await fetch(nextLaunchAPI);

        const nextLaunch = await response.json();

        // Display Function in order
        displayNextLaunch(nextLaunch);
        displayCountdown(nextLaunch);
    } catch (error) {
        console.log(error);
    }
 }

// Call the fetch function
fetchNextLaunch();

// Converting to date
function convertDate(launchDate) {
    let date = new Date(launchDate * 1000);
    return date.toLocaleDateString();
}


// DISPLAY NEXT LAUNCH ---------------------------------------------------------
function displayNextLaunch(nextLaunch) {
    // console.log(nextLaunch);
    
    // Target the container
    const nextLaunchWrap = document.querySelector(".next-launch");
    
    let html = "";

        html +=
            `
                <h2 class="border-bottom">next launch</h2>
                <h5 class="border-bottom__below">mission: ${nextLaunch.mission_name}</h5>
                <h5><span class="bold">Date:</span> ${convertDate(nextLaunch.launch_date_unix)}</h5>
                <h5><span class="bold">site:</span> ${nextLaunch.launch_site.site_name}</h5>
                <h5><span class="bold">rocket:</span> ${nextLaunch.rocket.rocket_name}</h5>
            `
        ;

        if (!nextLaunch.details) {
            html +=
                `
                        <p class="details"> 
                            <span class="italic">No current details at this moment.</span>
                        </p>
                    `
                ;
        }
        else {
            html +=
                `
                        <p class="details">${nextLaunch[i].details}</p>`;
        }

        
                
        html +=   
            `                     
                <div class="countdown-wrap"> 
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
            `
        ;
    

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
        var countdownWrap = document.querySelector(".countdown-wrap");

        var timeinterval = setInterval(function () {
            var t = getTimeRemaining(endtime);

            countdownWrap.innerHTML =
                `<div id="countdown__launch"><div class="ct-block_launch"><p class="ct-letters__launch">days</p><p class="ct-numbers__launch">` + t.days + `</p></div>` +
                `<div class="ct-block__launch"><p class="ct-letters__launch">hours</p><p class="ct-numbers__launch">` + t.hours + `</p></div>` +
                `<div class="ct-block__launch"><p class="ct-letters__launch">minutes</p><p class="ct-numbers__launch">` + t.minutes + `</p></div>` +
                `<div class="ct-block__launch"><p class="ct-letters__launch">seconds</p><p class="ct-numbers__launch">` + t.seconds + `</p></div></div>`
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
// Declare API
const upcomingLaunchesAPI = "https://api.spacexdata.com/v3/launches/upcoming";


//Fetch json API
async function fetchUpcomingLaunches() {
    try {
        const response = await fetch(upcomingLaunchesAPI);

        const upcomingLaunches = await response.json();

        // Display Function in order
        displayUpcomingLaunches(upcomingLaunches);
    } catch (error) {
        console.log(error);
    }
}

// Call the fetch function
fetchUpcomingLaunches();

function displayUpcomingLaunches(upcomingLaunches){

    const upcomingLaunchesContainer = document.querySelector(".upcoming-launch-wrap");

    let html = "";

    // Function starting at 1 as the "next launch" section displays that one
    for (let i = 1; i < upcomingLaunches.length; i++) {
        html += 
            `
                <div class="dd-btn-container"> 
                    <input type="checkbox" id="toggle_id-${i}" class="checkbox"/>
                    <label for="toggle_id-${i}" class="dd-btn">
                            <h6>${upcomingLaunches[i].mission_name} - ${convertDate(upcomingLaunches[i].launch_date_unix)}</h6>  
                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </label>
                    <div class="dd-btn-content">
                        <h5><span class ="bold">rocket: </span>${upcomingLaunches[i].rocket.rocket_name}</h5>  
                        <h5><span class ="bold">site: </span>${upcomingLaunches[i].launch_site.site_name}</h5>  
            `
        ;

        if (!upcomingLaunches[i].details) {
            html +=     `<p class="details"><span class="italic">No current details at this moment.</span></p>`;
        }
        else {
            html +=     `<p class="details">${upcomingLaunches[i].details}</p>`;
        }

        html += 
            `
                    </div>   
                </div>
            `
        ;
    }

    upcomingLaunchesContainer.innerHTML = html;
}
// END OF UPCOMING LAUNCHES ------------------------------------------------------




// DISPLAY COMPLETED LAUNCHES: ---------------------------------------------------
// Declare API
const completedLaunchesAPI = "https://api.spacexdata.com/v3/launches/past";


//Fetch json API
async function fetchCompletedLaunches() {
    try {
        const response = await fetch(completedLaunchesAPI);

        const completedLaunches = await response.json();

        // Display Function in order
        displayCompletedLaunches(completedLaunches);
    } catch (error) {
        console.log(error);
    }
}

// Call the fetch function
fetchCompletedLaunches();

function displayCompletedLaunches(completedLaunches) {
    console.log(completedLaunches);

    const completedLaunchesContainer = document.querySelector(".completed-launch-wrap");

    let html = "";

    // Backwards loop
    for (var i = completedLaunches.length - 1; i >= 0; i--) {
        
        html +=
            `
                <div class="dd-btn-container">
                    <input type="checkbox" id="toggle_id-${i}" class="checkbox"/>
                    <label for="toggle_id-${i}" class="dd-btn">
                            <h6>${completedLaunches[i].mission_name} - ${convertDate(completedLaunches[i].launch_date_unix)}</h6>  
                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </label>
                    <div class="dd-btn-content">
                        <h5><span class ="bold">rocket: </span>${completedLaunches[i].rocket.rocket_name}</h5>  
                        <h5><span class ="bold">site: </span>${completedLaunches[i].launch_site.site_name}</h5>
                        <p class="details">${completedLaunches[i].details}</p>
                    </div>
                </div>
            `
            ;
    }

    completedLaunchesContainer.innerHTML = html;
}
// END OF COMPLETED LAUNCHES -----------------------------------------------------



document.querySelector(".toggle").addEventListener("click", function (e) {
    e.target.parentNode.click(); // propagate the click event to the label
});