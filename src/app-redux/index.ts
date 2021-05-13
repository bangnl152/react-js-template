import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import Cookies from "cookies-js";

import { ApplicationState } from "schema/app";
import reducers from "./reducers";

const { CookieStorage } = require("redux-persist-cookie-storage");

const persistedReducer = persistReducer<ApplicationState>(
	{
		key: "tracnghiem-web-1.0",
		storage: new CookieStorage(Cookies /*, options */),
		whitelist: ["identifier"],
	},
	reducers
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
