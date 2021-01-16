function FeatureForcastItem({ dayInfo }) {
	return (
		<div className="container">
			<h3 className="day">{dayInfo.date}</h3>
			<div className="weatherIcon">
				<img id="future" className="weatherIcon" src={dayInfo.icon} alt="" />
			</div>
			<p className="conditions">{dayInfo.description}</p>
			<p className="tempRange">
				<span className="high">{dayInfo.maxTemp}</span> |
				<span className="low"> {dayInfo.minTemp}</span>
			</p>
		</div>
	);
}

export default FeatureForcastItem;
