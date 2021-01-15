import React, { useContext } from "react";

const defaultContext = {
	temp: false,
	description: "",
};

const WheatherContext = React.createContext(defaultContext);

export const WheatherProvider = WheatherContext.Provider;
export const useWheather = () => useContext(WheatherContext);
