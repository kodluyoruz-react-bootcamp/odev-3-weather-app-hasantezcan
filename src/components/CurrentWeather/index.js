import { useContext, useEffect } from "react";

import WheatherContext from "../../contexts/WheatherContex";

function CurrentWeather() {
	// useEffect(() => {

	const { dailyData, setLocation } = useContext(WheatherContext);
	console.log(dailyData, setLocation);

	// setLocation({
	// 	lat: 38.7829724,
	// 	lon: 41.0466272,
	// });
	return (
		<div id="current" className="wrapper">
			<nav>
				<button id="locateBtn">
					<i className="fa fa-location-arrow" aria-hidden="true"></i>
				</button>
				<button id="unitBtn" data-units="f">
					f
				</button>
			</nav>
			<h1 className="location">Denizli</h1>
			<h2 className="date">Sunday, January 1, 2017</h2>
			<div className="weatherIcon">
				<div className="sunny">
					<div className="inner"></div>
				</div>
			</div>
			<p className="temp">{dailyData.temp}</p>
			<p className="conditions"></p>
		</div>
	);
}

export default CurrentWeather;

// navigator.geolocation.getCurrentPosition(function (position) {
// 	var latitude = position.coords.latitude;
// 	var longitude = position.coords.longitude;
// });

// function locationSuccess(position) {
// 	var latitude = position.coords.latitude;
// 	var longitude = position.coords.longitude;
// }

// function locationError(error) {
// 	var code = error.code;
// 	var message = error.message;
// }

// navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
