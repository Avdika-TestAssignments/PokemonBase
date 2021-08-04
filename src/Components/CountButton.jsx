import React from 'react';

import { CountButton } from '../Styles/countButtonStyled';

const Button = (props) => {

	return (
		<CountButton onClick={() => props.handleClick()}>
			{props.buttonText}
		</CountButton>
	)
}

export default Button;
