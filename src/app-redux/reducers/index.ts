import { combineReducers } from "redux";

import { ApplicationState } from "schema/app";

import identifier from "./identifier";

export default combineReducers<ApplicationState>({
	identifier,
});
