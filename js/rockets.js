// API: --------------------------------------------------------------------------
const rocketsAPI = "https://api.spacexdata.com/v3/rockets";
const roadsterAPI = "https://api.spacexdata.com/v3/roadster";

//Fetch  API
async function fetchVehicles() {
    try {
        const responseRocketsAPI = await fetch(rocketsAPI);
        const responseRoadsterAPI = await fetch(roadsterAPI);
        

        const rockets = await responseRocketsAPI.json();
        const roadster = await responseRoadsterAPI.json();
        

        displayRockets(rockets);
        displayRoadster(roadster);
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
    console.dir(rockets); // Remove when finished

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
                        <i class="fas fa-plus"></i>
                        <i class="fas fa-minus"></i>
                    </label>
                        <div class="dd-content vehicle">
                            <img class="vehicle-img" src="${rockets[i].flickr_images[i]}" alt="${rockets[i].rocket_name}">
                            <div class="vehicle-wrap">
                            <h5 class="vehicle-headline">technical overview</h5>

                            <h6 class="vehicle-title">company</h6>
                            <p class="vehicle-number">${rockets[i].company}</p>

                            <h6 class="vehicle-title">country</h6>
                            <p class="vehicle-number">${rockets[i].country}</p>

                            <h6 class="vehicle-title">first flight</h6>
                            <p class="vehicle-number">${rockets[i].first_flight}</p>

                            <h6 class="vehicle-title">engine</h6>
                            <p class="vehicle-number">${rockets[i].engines.type} ${rockets[i].engines.version}</p>

                            <h6 class="vehicle-title">height</h6>
                            <p class="vehicle-number">${rockets[i].height.meters} m</p>

                            <h6 class="vehicle-title">diameter</h6>
                            <p class="vehicle-number">${rockets[i].diameter.meters} m</p>

                            <h6 class="vehicle-title">mass</h6>
                            <p class="vehicle-number">${rockets[i].mass.kg} kg</p>

                            <h6 class="vehicle-title">success rate</h6>
                            <p class="vehicle-number">${rockets[i].success_rate_pct} %</p>

                            <h6 class="vehicle-title">details</h6>
                            <p class="vehicle-number">${rockets[i].description}</p>
                       
                            <a class="wiki" href="${rockets[i].wikipedia}">wikipedia</a>
                        </div>                          
                    </div>
                </div>`;
    }

    rocketsContainer.innerHTML = html;
}
// END OF ROCKETS LAUNCHES: ------------------------------------------------------



// DISPLAY ROADSTER LAUNCHES: ----------------------------------------------------
function displayRoadster(roadster) {
    console.dir(roadster);

    const roadsterContainer = document.querySelector(".roadster-wrap");

    let html = "";

    
    html += `   <div class="roadster">
                    <img class="vehicle-img" src="${roadster.flickr_images}" alt="${roadster.name}">
                    <div class="vehicle-wrap">
                        <h5 class="vehicle-headline">${roadster.name}</h5>

                        <h6 class="vehicle-title">launch date</h6>
                        <p class="vehicle-number">${convertDate(roadster.launch_date_unix)}</p>

                        <h6 class="vehicle-title">earth distance</h6>
                        <p class="vehicle-number">${roadster.earth_distance_km} km</p>

                        <h6 class="vehicle-title">mars distance</h6>
                        <p class="vehicle-number">${roadster.mars_distance_km} km</p>

                        <h6 class="vehicle-title">orbit type</h6>
                        <p class="vehicle-number">${roadster.orbit_type}</p>

                        <h6 class="vehicle-title">details</h6>
                        <p class="vehicle-number">${roadster.details}</p>
                                
                        <a href='${roadster.video}'><div class="yt">YouTube Video</div></a>
                        <a href="${roadster.wikipedia}"><div class="wiki">Wikipedia</div></a>
                    </div> 
                </div>
            `;
    
    roadsterContainer.innerHTML = html;
}
// END OF ROADSTER LAUNCHES: -----------------------------------------------------