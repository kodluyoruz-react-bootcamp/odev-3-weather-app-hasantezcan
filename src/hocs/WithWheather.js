import { useEffect, useState } from "react";
import { WheatherProvider } from "../contexts/WheatherContex";

import axios from "axios";
const ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&`;

const WithWheather = ({ children }) => {
	const [todayData, setTodayData] = useState({});
	const [weeklyData, setWeeklyData] = useState({});
	const [location, setLocation] = useState({
		lat: 38.7829724,
		lon: 41.0466272,
	});

	function createDate(dt, type) {
		var day = new Date(dt * 1000);
		if (type === "long") {
			let options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			};
			return day.toLocaleString("en-us", options);
		} else {
			return day.toLocaleString("en-us", { weekday: "long" });
		}
	}

	function fetchIconUrl(icon) {
		return `http://openweathermap.org/img/wn/${icon}@2x.png`;
	}

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(
				`${ENDPOINT}lat=${location.lat}&lon=${location.lon}`
			);

			// Create our wheather objects
			let todayInfo;
			let featureForcasts;

			if (data) {
				todayInfo = {
					date: createDate(data.current.dt, "long"),
					temp: data.current.temp,
					description: data.current.weather[0].description,
					icon: fetchIconUrl(data.current.weather[0].icon),
				};

				featureForcasts = data.daily.map((day, i) => ({
					date: createDate(day.dt, "small"),
					maxTemp: day.temp.max,
					minTemp: day.temp.min,
					description: day.weather[0].description,
					icon: fetchIconUrl(day.weather[0].icon),
				}));
			}

			setTodayData(todayInfo);
			setWeeklyData(featureForcasts);
		}

		fetchData();
	}, [location]);

	const values = {
		todayData,
		weeklyData,
		location,
		setLocation,
	};

	console.log("TODAY DATA IN HOCS", todayData);
	console.log("WEEKLYDATA DATA IN HOCS", weeklyData);

	return <WheatherProvider value={values}>{children}</WheatherProvider>;
};

export default WithWheather;
