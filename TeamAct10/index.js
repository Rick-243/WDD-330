// import { getJSON, getLocation } from '../TeamAct10/utilities.js';
// import defaultExport from './Quake.js';

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// navigator.geolocation.getCurrentPosition(youAreHere);

// function youAreHere(position) {
//     let radius = "maxradiuskm=100";
//     console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
//     let newUrl = baseUrl + "&latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude + "&" + radius;
//     console.log(newUrl);

//     return newUrl;
// }

// defaultExport.getEarthQuakesByRadius(getLocation, 100);

import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();