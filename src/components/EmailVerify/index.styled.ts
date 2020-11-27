import styled from 'styled-components'

export const ButtonStyled = styled.button`
	font-family: 'Poppins', sans-serif;
	font-size: 20px;
	width: 100%;
	height: 62px;
	border-radius: 100px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.15s;
	background-color: #0064c9;
	color: #fafafa;
	cursor: pointer;
	font-weight: 600;
	margin-top: 20px;

	&:hover {
		background-color: #0676e5;
	}

	&:active {
		border: none !important;
		background-color: #333;
	}
`

export const LinkStyled = styled.button`
	background: none;
	font-family: 'Poppins', sans-serif;
	font-size: 16px;
	color: #00a4df;
	cursor: pointer;
	font-weight: 600;
`
export const ButtonsWrapper = styled.button`
	background: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	button:first-child {
		margin-right: 20px;
	}

	@media only screen and (max-width: 960px) {
		flex-direction: column;
		justify-content: center;
		button:first-child {
			margin-right: none;
		}
	}
`
