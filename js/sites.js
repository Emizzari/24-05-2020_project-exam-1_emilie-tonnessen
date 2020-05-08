// API: --------------------------------------------------------------------------
const launchPadsAPI = "https://api.spacexdata.com/v3/launchpads";


//Fetch  API
async function fetchLaunchPads() {
    try {
        const responselaunchPads = await fetch(launchPadsAPI);

        const launchPads = await responselaunchPads.json();

        displayLaunchPads(launchPads);
    } catch (error) {
        console.log(error);
    }
}

fetchLaunchPads();
// END OF API --------------------------------------------------------------------



// DISPLAY ROCKETS LAUNCHES: -----------------------------------------------------
function displayLaunchPads(launchPads) {
    console.dir(launchPads); // Remove when finished

    const launchPadsContainer = document.querySelector(".launch-pads-wrap");

    let html = "";

    for (let i = 0; i < launchPads.length; i++) {
        html += `<div class="dd-container">
                    <input type="checkbox" id="toggle_id-${i}" class="checkbox"/>
                    <label for="toggle_id-${i}" class="dd-btn">
                        <h6 class="dd-btn__title">${launchPads[i].name} - <span class="italic">${launchPads[i].status}</span></h6>  
                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </label>

                    <div class="dd-content">
                    <iframe class="map" src="https://maps.google.com/maps?q=${launchPads[i].location.latitude},${launchPads[i].location.longitude}&hl=en&z=10&amp;output=embed" height="400px" width="100%"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <div class="site-wrap">
                            <h6 class="vehicle-title">${launchPads[i].name}</h6>
                            <p class="vehicle-number">${launchPads[i].site_name_long}</p>

                            <h6 class="vehicle-title">location</h6>
                            <p class="vehicle-number">${launchPads[i].location.name}, ${launchPads[i].location.region}</p>

                            <h6 class="vehicle-title">attempted launches</h6>
                            <p class="vehicle-number">${launchPads[i].attempted_launches}</p>

                            <h6 class="vehicle-title">successful launches</h6>
                            <p class="vehicle-number">${launchPads[i].successful_launches}</p>

                            <h6 class="vehicle-title">details</h6>
                            <p class="vehicle-number">${launchPads[i].details}</p>
                            
                            <a class="wiki" href="${launchPads[i].wikipedia}">wikipedia</a>
                        </div>
                    </div>   
                </div>
                `;
    }

    launchPadsContainer.innerHTML = html;
}
// END OF ROCKETS LAUNCHES: ------------------------------------------------------