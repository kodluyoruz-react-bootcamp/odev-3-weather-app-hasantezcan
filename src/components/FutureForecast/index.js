import { useWheather } from "../../contexts/WheatherContex";

import FeatureForcastItem from "./FeatureForcastItem";

function FutureForecast() {
	const { weeklyData } = useWheather();

	console.log("WEEKLYDATA in COMPONENTS", weeklyData);

	return (
		<div id="future" className="wrapper">
			{weeklyData.length &&
				weeklyData.map((day, i) => {
					return <FeatureForcastItem key={i} dayInfo={day} />;
				})}
		</div>
	);
}

export default FutureForecast;
