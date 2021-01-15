import { createContext, useEffect, useState } from "react";
import { WheatherProvider, useWheather } from "../contexts/WheatherContex";
// import WheatherData from "../../data.json"

// import axios from "axios";

// const ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}&`;

const WithWheather = ({ children }) => {
	const [data, setData] = useState({
		lat: 38.783,
		lon: 41.0466,
		timezone: "Europe/Istanbul",
		timezone_offset: 10800,
		current: {
			dt: 1610733742,
			sunrise: 1610685149,
			sunset: 1610720251,
			temp: 274.58,
			feels_like: 270.28,
			pressure: 1016,
			humidity: 88,
			dew_point: 272.85,
			uvi: 0,
			clouds: 100,
			visibility: 93,
			wind_speed: 3.23,
			wind_deg: 212,
			weather: [
				{
					id: 600,
					main: "Snow",
					description: "light snow",
					icon: "13n",
				},
			],
			snow: {
				"1h": 0.2686,
			},
		},
		daily: [
			{
				dt: 1610701200,
				sunrise: 1610685149,
				sunset: 1610720251,
				temp: {
					day: 274.27,
					min: 273.29,
					max: 274.67,
					night: 274.14,
					eve: 274.03,
					morn: 274.06,
				},
				feels_like: {
					day: 270.52,
					night: 269.74,
					eve: 269.07,
					morn: 270,
				},
				pressure: 1015,
				humidity: 90,
				dew_point: 271.82,
				wind_speed: 2.45,
				wind_deg: 212,
				weather: [
					{
						id: 602,
						main: "Snow",
						description: "heavy snow",
						icon: "13d",
					},
				],
				clouds: 91,
				pop: 1,
				snow: 34.91,
				uvi: 2.47,
			},
			{
				dt: 1610787600,
				sunrise: 1610771527,
				sunset: 1610806715,
				temp: {
					day: 275.12,
					min: 274.21,
					max: 275.23,
					night: 275.05,
					eve: 275.04,
					morn: 275.04,
				},
				feels_like: {
					day: 270.73,
					night: 271.41,
					eve: 271.21,
					morn: 270.27,
				},
				pressure: 1016,
				humidity: 86,
				dew_point: 272.85,
				wind_speed: 3.41,
				wind_deg: 183,
				weather: [
					{
						id: 601,
						main: "Snow",
						description: "snow",
						icon: "13d",
					},
				],
				clouds: 100,
				pop: 1,
				snow: 34.43,
				uvi: 1.55,
			},
			{
				dt: 1610874000,
				sunrise: 1610857903,
				sunset: 1610893180,
				temp: {
					day: 274.42,
					min: 273.15,
					max: 275.03,
					night: 273.77,
					eve: 274.05,
					morn: 273.7,
				},
				feels_like: {
					day: 270.03,
					night: 269.9,
					eve: 269.12,
					morn: 269.81,
				},
				pressure: 1011,
				humidity: 89,
				dew_point: 272.06,
				wind_speed: 3.36,
				wind_deg: 160,
				weather: [
					{
						id: 602,
						main: "Snow",
						description: "heavy snow",
						icon: "13d",
					},
				],
				clouds: 100,
				pop: 1,
				snow: 52.9,
				uvi: 2.33,
			},
			{
				dt: 1610960400,
				sunrise: 1610944277,
				sunset: 1610979646,
				temp: {
					day: 272.85,
					min: 268.17,
					max: 274.54,
					night: 268.17,
					eve: 269.75,
					morn: 272.75,
				},
				feels_like: {
					day: 267.36,
					night: 263.55,
					eve: 265.45,
					morn: 268.08,
				},
				pressure: 1014,
				humidity: 95,
				dew_point: 270.11,
				wind_speed: 4.8,
				wind_deg: 209,
				weather: [
					{
						id: 602,
						main: "Snow",
						description: "heavy snow",
						icon: "13d",
					},
				],
				clouds: 100,
				pop: 1,
				snow: 17.88,
				uvi: 2.37,
			},
			{
				dt: 1611046800,
				sunrise: 1611030649,
				sunset: 1611066112,
				temp: {
					day: 272.02,
					min: 267.86,
					max: 272.02,
					night: 268.08,
					eve: 269.52,
					morn: 270.99,
				},
				feels_like: {
					day: 268.93,
					night: 264.34,
					eve: 265.21,
					morn: 267.64,
				},
				pressure: 1012,
				humidity: 95,
				dew_point: 269.4,
				wind_speed: 1.22,
				wind_deg: 192,
				weather: [
					{
						id: 602,
						main: "Snow",
						description: "heavy snow",
						icon: "13d",
					},
				],
				clouds: 100,
				pop: 1,
				snow: 60.82,
				uvi: 1.69,
			},
			{
				dt: 1611133200,
				sunrise: 1611117019,
				sunset: 1611152578,
				temp: {
					day: 266.22,
					min: 258.91,
					max: 266.22,
					night: 258.91,
					eve: 260.35,
					morn: 263.31,
				},
				feels_like: {
					day: 261.58,
					night: 253.86,
					eve: 255.35,
					morn: 259.2,
				},
				pressure: 1024,
				humidity: 91,
				dew_point: 262.48,
				wind_speed: 2.47,
				wind_deg: 38,
				weather: [
					{
						id: 600,
						main: "Snow",
						description: "light snow",
						icon: "13d",
					},
				],
				clouds: 99,
				pop: 0.59,
				snow: 1.98,
				uvi: 2.47,
			},
			{
				dt: 1611219600,
				sunrise: 1611203387,
				sunset: 1611239046,
				temp: {
					day: 261.97,
					min: 256.41,
					max: 261.99,
					night: 257.16,
					eve: 257.7,
					morn: 256.41,
				},
				feels_like: {
					day: 256.59,
					night: 252.03,
					eve: 252.59,
					morn: 251.35,
				},
				pressure: 1036,
				humidity: 83,
				dew_point: 255.04,
				wind_speed: 2.99,
				wind_deg: 48,
				weather: [
					{
						id: 800,
						main: "Clear",
						description: "clear sky",
						icon: "01d",
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 3,
			},
			{
				dt: 1611306000,
				sunrise: 1611289753,
				sunset: 1611325513,
				temp: {
					day: 262.49,
					min: 256.25,
					max: 263.24,
					night: 259.75,
					eve: 259.46,
					morn: 256.25,
				},
				feels_like: {
					day: 257.33,
					night: 254.7,
					eve: 254.4,
					morn: 250.73,
				},
				pressure: 1037,
				humidity: 81,
				dew_point: 254.95,
				wind_speed: 2.7,
				wind_deg: 76,
				weather: [
					{
						id: 800,
						main: "Clear",
						description: "clear sky",
						icon: "01d",
					},
				],
				clouds: 0,
				pop: 0,
				uvi: 3,
			},
		],
	});
	const [location, setLocation] = useState({
		lat: 38.7829724,
		lon: 41.0466272,
	});

	const [todayData, setTodayData] = useState({});
	const [weeklyData, setWeeklyData] = useState({});

	async function fetchData() {
		// const { data } = await axios.get(
		// 	`${ENDPOINT}lat=${location.lat}&lon=${location.lon}`
		// );

		// console.log(data);

		let todayInfo;
		let featureForcasts;

		if (data) {
			todayInfo = {
				temp: data.current.temp,
				description: data.current.weather[0].description,
			};

			featureForcasts = data.daily.map((day, i) => ({
				date: day.dt,
				maxTemp: day.temp.max,
				minTemp: day.temp.min,
				description: day.weather[0].description,
			}));

			// console.log("Weekly", weekly);
			// console.log("Today", today);
		}

		setTodayData(todayInfo);
		setWeeklyData(featureForcasts);
	}

	useEffect(async () => {
		await fetchData();
	}, [location]);

	const values = {
		todayData,
		weeklyData,
		setLocation,
	};

	console.log("TODAY DATA IN HOCS", todayData);
	console.log("WEEKLYDATA DATA IN HOCS", weeklyData);

	return <WheatherProvider value={values}>{children}</WheatherProvider>;
};

export default WithWheather;
