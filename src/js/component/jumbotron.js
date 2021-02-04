import React, { useState } from "react";
import proTypes from "prop-types";

export function Jumbotron() {
	let [contador, setContador] = useState(0);

	setInterval(function reloj() {
		return setContador((contador += 1));
	}, 1000);

	return (
		<div className="jumbotron">
			<div className="encima">
				<h1 className="display-4">Reloj</h1>
				<p className="lead">
					00
					{contador}
				</p>
			</div>
			<div className="text-center" />
		</div>
	);
}
