import styled from 'styled-components'

const BackgroundCenterContainerStyled = styled.div`
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Poppins', sans-serif;
	}
	padding: 20px;
	display: flex;

	justify-content: center;
	min-width: 100vw;
	min-height: 100vh;
	background: linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9) 70.71%);

	@media only screen and (max-width: 960px) {
		align-items: center;
	}
`

export default BackgroundCenterContainerStyled
