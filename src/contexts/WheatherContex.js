import { createContext, useEffect, useState } from "react";
import axios from "axios";

const WheatherContext = createContext(null);

const ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&`;

export const WheatherProvider = ({ children }) => {
	const [data, setData] = useState("");

	const [location, setLocation] = useState({
		lat: 38.7829724,
		lon: 41.0466272,
	});
	const [dailyData, setDailyData] = useState({});
	// const [weeklyData, setWeeklyData] = useState("");

	useEffect(() => {
		async function getData() {
			const {data} = await axios.get(
				`${ENDPOINT}lat=${location.lat}&lon=${location.lon}`
			);

			// console.log(data);
			// console.log(data.current.temp);

			// const gun = {
			// 	data.current.temp,
			// }
			
			await setDailyData(data.current);
			console.log(data.current.temp);
			console.log(data.current.weather[0].description);

			// await setWeeklyData(data.daily);
		}
		await getData();
	}, [location]);

	const values = {
		dailyData,
		setLocation,
	};

	return (
		<WheatherContext.Provider value={values}>
			{children}
		</WheatherContext.Provider>
	);
};

export default WheatherContext;
