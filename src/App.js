import "./App.css";

import WithWheather from "./hocs/WithWheather";
import CurrentWeather from "./components/CurrentWeather";
import FutureForecast from "./components/FutureForecast";
import Footer from "./components/Footer";

function App() {
	return (
		<WithWheather>
			<CurrentWeather />
			<FutureForecast />
			<Footer />
		</WithWheather>
	);
}

export default App;
