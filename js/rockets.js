// API: --------------------------------------------------------------------------
const rocketsAPI = "https://api.spacexdata.com/v3/rockets";
const roadsterAPI = "https://api.spacexdata.com/v3/roadster";

//Fetch  API
async function fetchVehicles() {
    try {
        // Roadster
        const responseRoadsterAPI = await fetch(roadsterAPI);
        const roadster = await responseRoadsterAPI.json();
        displayRoadster(roadster);

        // Rockets
        const responseRocketsAPI = await fetch(rocketsAPI);
        const rockets = await responseRocketsAPI.json();
        displayRockets(rockets);
        
    } catch (error) {
        console.log(error);
    }
}

fetchVehicles();
// END OF API --------------------------------------------------------------------



// DATE FORMAT: ------------------------------------------------------------------
function convertDate(dateFormate) {
    let date = new Date(dateFormate * 1000);
    return date.toLocaleDateString();
}
// END OF DATE FORMAT ------------------------------------------------------------



// DISPLAY ROCKETS LAUNCHES: -----------------------------------------------------
function displayRockets(rockets) {
    const rocketsContainer = document.querySelector(".rockets-wrap");

    let html = "";

    for (let i = 0; i < rockets.length; i++) {
        html += `<div class="dd-container">
                    <input type="checkbox" id="toggle_id-${i}" class="checkbox"/>
                    <label for="toggle_id-${i}" class="dd-btn">
                        <h6 class="dd-btn__title">${rockets[i].rocket_name} - `;

                        if (rockets[i].active === true) {
                            html += `active`;
                        } else {
                            html += `inactive`;
                        }
                                     
        html += `       </h6>  
                        <div class="dd-btn__icon grid__center">
                            <div class="dd-btn__icon-1"></div>
                            <div class="dd-btn__icon-2"></div> 
                        </div>
                    </label>
                    <div class="dd-content vehicle">
                        <img class="vehicle-img" src="${rockets[i].flickr_images[i]}" alt="${rockets[i].rocket_name}">
                        <div class="dd-content__panel">
                            <h5 class="dd-content__headline">technical overview</h5>

                            <h6 class="dd-content__title">company</h6>
                            <p class="dd-content__description">${rockets[i].company}</p>

                            <h6 class="dd-content__title">country</h6>
                            <p class="dd-content__description">${rockets[i].country}</p>

                            <h6 class="dd-content__title">first flight</h6>
                            <p class="dd-content__description">${rockets[i].first_flight}</p>

                            <h6 class="dd-content__title">engine</h6>
                            <p class="dd-content__description">${rockets[i].engines.type} ${rockets[i].engines.version}</p>

                            <h6 class="dd-content__title">height</h6>
                            <p class="dd-content__description">${rockets[i].height.meters} m</p>

                            <h6 class="dd-content__title">diameter</h6>
                            <p class="dd-content__description">${rockets[i].diameter.meters} m</p>

                            <h6 class="dd-content__title">mass</h6>
                            <p class="dd-content__description">${rockets[i].mass.kg} kg</p>

                            <h6 class="dd-content__title">success rate</h6>
                            <p class="dd-content__description">${rockets[i].success_rate_pct} %</p>

                            <h6 class="dd-content__title">details</h6>
                            <p class="dd-content__description">${rockets[i].description}</p>
                       
                            <a class="wiki" href="${rockets[i].wikipedia}">
                                <p class="dd-content__description">
                                  wikipedia
                                </p>
                            </a>

                        </div>                          
                    </div>
                </div>`;
    }

    rocketsContainer.innerHTML = html;
}
// END OF ROCKETS LAUNCHES: ------------------------------------------------------



// DISPLAY ROADSTER LAUNCHES: ----------------------------------------------------
function displayRoadster(roadster) {
    const roadsterContainer = document.querySelector(".roadster-wrap");

    let html = "";

    html += `   <div class="dd-container">
                    <div class="dd-content">
                        <img class="vehicle-img" src="${roadster.flickr_images}" alt="${roadster.name}">
                        <div class="dd-content__panel">
                            <h5 class="dd-content__headline">${roadster.name}</h5>

                            <h6 class="dd-content__title">launch date</h6>
                            <p class="dd-content__description">${convertDate(roadster.launch_date_unix)}</p>

                            <h6 class="dd-content__title">earth distance</h6>
                            <p class="dd-content__description">${roadster.earth_distance_km} km</p>

                            <h6 class="dd-content__title">mars distance</h6>
                            <p class="dd-content__description">${roadster.mars_distance_km} km</p>

                            <h6 class="dd-content__title">orbit type</h6>
                            <p class="dd-content__description">${roadster.orbit_type}</p>

                            <h6 class="dd-content__title">details</h6>
                            <p class="dd-content__description">${roadster.details}</p>
                                    
                            <a href='${roadster.video}'><div class="yt">YouTube Video</div></a>
                            <a href="${roadster.wikipedia}"><div class="wiki">Wikipedia</div></a>
                        </div> 
                    </div> 
                </div>
            `;
    
    roadsterContainer.innerHTML = html;
}
// END OF ROADSTER LAUNCHES: -----------------------------------------------------