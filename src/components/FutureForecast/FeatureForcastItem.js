function FeatureForcastItem({ dayInfo }) {
	return (
		<div className="container">
			<h3 className="day">Mon</h3>
			<div className="weatherIcon">
				<div className="partlycloudy">
					<div className="inner"></div>
				</div>
			</div>
			<p className="conditions">{dayInfo.description}</p>
			<p className="tempRange">
				<span className="high">{dayInfo.maxTemp}</span> |{" "}
				<span className="low">{dayInfo.lowTemp}</span>
			</p>
		</div>
	);
}

export default FeatureForcastItem;
