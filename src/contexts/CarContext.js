import { createContext } from "react";

export const CarContext = createContext();
export const StoreContext = createContext();

export const CarProvider = CarContext.Provider;

export const StoreProvider = StoreContext.Provider;
