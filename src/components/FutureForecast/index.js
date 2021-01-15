import React from "react";

function FutureForecast() {
	return (
		<div id="future" className="wrapper">
			<div className="container">
				<h3 className="day">Mon</h3>
				<div className="weatherIcon">
					<div className="partlycloudy">
						<div className="inner"></div>
					</div>
				</div>
				<p className="conditions">Partly Cloudy</p>
				<p className="tempRange">
					<span className="high">64</span> | <span className="low">48</span>
				</p>
			</div>
			<div className="container">
				<h3 className="day">Tue</h3>
				<div className="weatherIcon">
					<div className="mostlycloudy">
						<div className="inner"></div>
					</div>
				</div>
				<p className="conditions">Mostly Cloudy</p>
				<p className="tempRange">
					<span className="high">57</span> | <span className="low">45</span>
				</p>
			</div>
			<div className="container">
				<h3 className="day">Wed</h3>
				<div className="weatherIcon">
					<div className="rain">
						<div className="inner"></div>
					</div>
				</div>
				<p className="conditions">Chance of Rain</p>
				<p className="tempRange">
					<span className="high">63</span> | <span className="low">59</span>
				</p>
			</div>
		</div>
	);
}

export default FutureForecast;
