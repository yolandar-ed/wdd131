// 1. Footer Updates: Current Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// 2. Define static variables matching your HTML content (Metric units)
const temp = 33; // 33 °C
const windSpeed = 5; // 5 km/h

// 3. One-line function to calculate Metric Wind Chill factor
function calculateWindChill(t, v) {
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

// 4. Check conditions and display Wind Chill in the Weather section
const weatherDetails = document.querySelector(".weather-details");
let windChillDisplay = "N/A";

// Metric limits: Temperature <= 10 °C AND Wind speed > 4.8 km/h
if (temp <= 10 && windSpeed > 4.8) {
    windChillDisplay = `${calculateWindChill(temp, windSpeed)} °C`;
}

// Create and append the new Wind Chill row to your weather details list
const windChillItem = document.createElement("div");
windChillItem.className = "weather-item";
windChillItem.innerHTML = `
    <dt>Wind Chill</dt>
    <dd>${windChillDisplay}</dd>
`;
weatherDetails.appendChild(windChillItem);
