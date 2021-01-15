import "./App.css";

import WithWheather from "./hocs/WithWheather";
import CurrentWeather from "./components/CurrentWeather";
import FutureForecast from "./components/FutureForecast";
import Footer from "./components/Footer";
import StatusBar from "./components/StatusBar";

function App() {
	return (
		<WithWheather>
			<StatusBar />
			<CurrentWeather />
			<FutureForecast />
			<Footer />
		</WithWheather>
	);
}

export default App;
