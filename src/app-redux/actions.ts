import { Identifier } from "schema/app";

export const IDENTIFIER_UPDATE = "identifier/Update";
export type IDENTIFIER_UPDATE = typeof IDENTIFIER_UPDATE;

export interface IdentifierUpdate {
	type: IDENTIFIER_UPDATE;
	identifier?: Identifier;
}

export const UpdateIdentifier = (
	identifier?: Identifier
): IdentifierUpdate => ({
	type: IDENTIFIER_UPDATE,
	identifier,
});
