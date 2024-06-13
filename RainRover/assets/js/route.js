/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright ChaitanyaBadukale 2024 All rights reserved
 * @author chaitanyabadukale <chaitanyabadukale757@gmail.com>
 */

'use strict';

import { updateWeather, error404 } from "./app.js";
const defaultLocation = "#/weather?lat= 20.9333&lon=77.75004"; // London

const currentLocation = function () {
    window.navigator.geolocation.getCurrentPosition(res => {
        const { latitude, longitude } = res.coords;

        updateWeather(latitude, longitude);
    }, err => {
        window.location.hash = defaultLocation;
    });
}

/**
 * 
 * @param {string} query Searched query
 */

const searchedLocation = query => {
    const params = new URLSearchParams(query);
    const lat = params.get("lat");
    const lon = params.get("lon");
    updateWeather(parseFloat(lat), parseFloat(lon));
};

const routes = new Map([
    ["/current-location", currentLocation],
    ["/weather", searchedLocation]
]);

const checkHash = function () {
    const requestURL = window.location.hash.slice(1);
    const [route, query] = requestURL.includes("?") ? requestURL.split("?") : [requestURL];

    if (routes.has(route)) {
        routes.get(route)(query);
    } else {
        error404();
    }
}

window.addEventListener('hashchange', checkHash);

window.addEventListener("load", function () {
    if (!window.location.hash) {
        window.location.hash = "#/current-location";
    } else {
        checkHash();
    }
});
