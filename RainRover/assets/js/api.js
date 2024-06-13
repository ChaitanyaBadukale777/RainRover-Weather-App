/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright ChaitanyaBadukale 2024 All rights reserved
 * @author chaitanyabadukale <chaitanyabadukale757@gmail.com>
 */

'use strict';

const api_key = "230b5464f12571fbefc8cac375820b49";


/**
 * Fetch data from server
 * @param {string} URL API url
 * @param {Function} callback callback
 */

export const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data))
    .catch(err => console.error("Error fetching data:", err));
}

export const url = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`;
    },
    airPollution(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`;
    },
    reverseGeo(lat, lon) {
        return `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`;
    },

    /**
     * @param {string} query Search query e.g. "London", "New York"
     * 
     */
    geo(query) {
        return `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`;
    }
};
