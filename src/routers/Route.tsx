import React from "react";
import {
	Route,
	Redirect,
	RouteProps,
	RouteComponentProps,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { ApplicationState } from "schema/app";

type Props = {
	component:
		| React.ComponentType<RouteComponentProps<any>>
		| React.ComponentType<any>;
	isPrivate?: boolean;
	isAuth?: boolean;
};

export default function RouteWrapper({
	component,
	isPrivate,
	isAuth,
	...rest
}: Props) {
	const identifier = useSelector((state: ApplicationState) => state.identifier);

	const signed =
		identifier.access_token != null && identifier.access_token != "";
	/**
	 * Redirect user to SignIn page if he tries to access a private route
	 * without authentication.
	 */
	if (isPrivate == true && !signed) {
		return <Redirect to="/login" />;
	}
	/**
	 * Redirect user to Main page if he tries to access a non private route
	 * (SignIn or SignUp) after being authenticated.
	 */
	if (isAuth && signed) {
		return <Redirect to="/dashboard" />;
	}

	/**
	 * If not included on both previous cases, redirect user to the desired route.
	 */
	return <Route component={component} {...rest} />;
}
