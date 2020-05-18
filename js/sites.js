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
                        <div class="dd-btn__icon grid__center">
                            <div class="dd-btn__icon-1"></div>
                            <div class="dd-btn__icon-2"></div> 
                        </div>
                    </label>

                    <div class="dd-content">
                    <iframe class="map" src="https://maps.google.com/maps?q=${launchPads[i].location.latitude},${launchPads[i].location.longitude}&hl=en&z=10&amp;output=embed" width="100%"  frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        <div class="dd-content__panel">
                            <h6 class="dd-content__title">${launchPads[i].name}</h6>
                            <p class="dd-content__description">${launchPads[i].site_name_long}</p>

                            <h6 class="dd-content__title">location</h6>
                            <p class="dd-content__description">${launchPads[i].location.name}, ${launchPads[i].location.region}</p>

                            <h6 class="dd-content__title">attempted launches</h6>
                            <p class="dd-content__description">${launchPads[i].attempted_launches}</p>

                            <h6 class="dd-content__title">successful launches</h6>
                            <p class="dd-content__description">${launchPads[i].successful_launches}</p>

                            <h6 class="dd-content__title">details</h6>
                            <p class="dd-content__description">${launchPads[i].details}</p>
                                   
                            <a class="wiki" href="${launchPads[i].wikipedia}">
                                <p class="dd-content__description">
                                  wikipedia
                                </p>
                            </a>
                        </div>
                    </div>   
                </div>
                `;
    }

    launchPadsContainer.innerHTML = html;
}
// END OF ROCKETS LAUNCHES: ------------------------------------------------------