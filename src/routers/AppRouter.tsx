import React, { useEffect, useState } from "react";
import { Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Layout, message } from "antd";

import { UpdateIdentifier } from "app-redux/actions";
import { ApplicationState } from "schema/app";

import { Login } from "modules/auth";

import Route from "./Route";

export default function AppRouters() {
	const [ready, setReady] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const identifier = useSelector((state: ApplicationState) => state.identifier);

	// useEffect(() => {
	// 	if (identifier?.access_token)
	// 		UserApi.current()
	// 			.then((user) => {
	// 				dispatch(UpdateUser(user));
	// 				setReady(true);
	// 			})
	// 			.catch((err) => {
	// 				message.error(err.message);
	// 				setReady(true);
	// 				dispatch(UpdateIdentifier(undefined));
	// 			});
	// 	else setReady(true);
	// }, [identifier.access_token]);

	return ready ? (
		<Switch>
			{/* <Route path="/" exact component={Home} />
			<Route path="/cli-login" component={CliLogin} />
			<Route path="/login" component={Login} isAuth />
			<Route path="/dashboard" component={Developer} isPrivate />
			<Route path="/admin" component={AdminDashboard} isPrivate />
			<Route path="/personal" component={Personal} isPrivate /> */}
			{/* redirect user to Home page if route does not exist and user is not authenticated */}
			<Route component={Login} />
		</Switch>
	) : (
		<Layout>
			<Layout.Content style={{ height: "100vh" }}>
				<Spin
					tip="Loading..."
					style={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "(-50%, -50%)",
					}}
				></Spin>
			</Layout.Content>
		</Layout>
	);
}
