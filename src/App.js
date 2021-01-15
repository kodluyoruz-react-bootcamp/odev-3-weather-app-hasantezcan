import "./App.css";

import { WheatherProvider } from "./contexts/WheatherContex";
import CurrentWeather from "./components/CurrentWeather";
import FutureForecast from "./components/FutureForecast";
import Footer from "./components/Footer";
import StatusBar from "./components/StatusBar";

function App() {
	return (
		<WheatherProvider>
			<StatusBar />
			<CurrentWeather />
			<FutureForecast />
			<Footer />
		</WheatherProvider>
	);
}

export default App;
