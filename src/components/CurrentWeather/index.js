import { useWheather } from "../../contexts/WheatherContex";

function CurrentWeather() {
	const { dailyData } = useWheather();
	console.log("DAILY DATA in COMPONENTS", dailyData);

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
			{/* <p className="temp">{dailyData.temp}</p>
			<p className="conditions">{dailyData.description}</p> */}
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
