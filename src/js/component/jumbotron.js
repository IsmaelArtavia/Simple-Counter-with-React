import React, { useState } from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	let [contador, setContador] = useState(0);

	setInterval(function reloj() {
		return setContador((contador += 1));
	}, 1000);

	return (
		<div className="Padre">
			<div className="hijo">
				<div className="jumbotron">
					<div className="encima">
						<p className="lead">
							<i className="far fa-clock" />
							{contador}
						</p>
					</div>
					<div className="text-center" />
				</div>
			</div>
		</div>
	);
}
Jumbotron.propTypes = {
	seconds: PropTypes.number
};
