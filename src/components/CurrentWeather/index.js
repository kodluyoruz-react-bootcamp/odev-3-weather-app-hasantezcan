import { useWheather } from "../../contexts/WheatherContex";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CurrentWeather() {
	const { todayData } = useWheather();
	console.log("DAILY DATA in COMPONENTS", todayData);

	// setLocation({
	// 	lat: 38.7829724,
	// 	lon: 41.0466272,
	// });

	return (
		<div id="current" className="wrapper">
			<nav>
				<button id="locateBtn">
					<FontAwesomeIcon icon={faLocationArrow} />
				</button>
			</nav>
			<h1 className="location">Denizli</h1>
			<h2 className="date">{todayData.date}</h2>
			<div className="weatherIcon">
				<img className="weatherIcon" id="current" src={todayData.icon} alt="" />
			</div>
			{todayData && (
				<>
					<p className="temp">{todayData.temp}</p>
					<p className="conditions">{todayData.description}</p>
				</>
			)}
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
