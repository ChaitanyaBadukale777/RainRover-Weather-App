/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright ChaitanyaBadukale 2024 All rights reserved
 * @author chaitanyabadukale <chaitanyabadukale757@gmail.com>
 */

'use strict';

export const weekDayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/**
 * 
 * @param {number} dateUnix Unix date in seconds 
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date String. format: "Sunday 10, Jan"
 */
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName}, ${date.getUTCDate()}, ${monthName}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. format: "HH:MM AM/PM"
 */
export const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${period}`;
}

/**
 * 
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. format: "HH AM/PM"
 */
export const getHours = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours % 12 || 12} ${period}`;
}

/**
 * 
 * @param {number} mps Meters per second
 * @returns {number} Km per hr
 */
export const mps_to_kmh = mps => {
    const kmph = mps * 3600;
    return kmph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is satisfactory, and air pollution poses little or no risk"
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable. However, there may be a risk of health effects"
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is less likely to be affected"
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects, members of sensitive groups may experience more serious health effects"
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency. The entire population is more likely to be affected"
    }
}
