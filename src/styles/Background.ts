import styled from 'styled-components'

const BackgroundContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	min-width: 100vw;
	min-height: 100vh;
	background: linear-gradient(15deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.8) 70.71%);
	img:first-child {
		position: absolute;
		top: 50px;
		left: calc(100vw - 200px);
		height: 50px;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Poppins', sans-serif;
	}

	@media only screen and (max-width: 960px) {
		justify-content: center;
		padding: 20px;
		img {
			display: none;
		}
	}
`

export default BackgroundContainerStyled
