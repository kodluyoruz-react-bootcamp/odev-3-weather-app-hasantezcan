import { useEffect, useState } from "react";
import { useWheather } from "../../contexts/WheatherContex";

import FeatureForcastItem from "./FeatureForcastItem";

function FutureForecast() {
	const [loading, setLoading] = useState(true);
	const { weeklyData } = useWheather();

	useEffect(() => {
		if (weeklyData === undefined) {
			setLoading(true);
			console.log("BULAMADI");
		} else {
			setLoading(false);
			console.log("BULDU");
		}
	}, [weeklyData]);

	console.log("WEEKLYDATA in COMPONENTS", weeklyData);

	return (
		<div id="future" className="wrapper">
			{loading && <div>Loading...</div>}

			{!loading &&
				weeklyData.map((day, i) => {
					// <p>{day}</p>
					return <FeatureForcastItem key={i} dayInfo={day} />;
				})}
		</div>
	);
}

export default FutureForecast;
