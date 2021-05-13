import { Identifier } from "schema/app";
import { IdentifierUpdate, IDENTIFIER_UPDATE } from "../actions";

const initialState: Identifier = {};

export default function (state = initialState, action: IdentifierUpdate) {
	switch (action.type) {
		case IDENTIFIER_UPDATE:
			return { ...state, ...action.identifier };
		default:
			return state;
	}
}
