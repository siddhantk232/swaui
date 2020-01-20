import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	height: 80%;
	color: ${({ name }) => (name ? '#fff' : 'rgba(255, 255, 255, 0.6)')};
	border-collapse: collapse;
	border-spacing: 0;
	margin-top: 50px;

	th,
	td {
		text-align: left;
		padding: 10px;
	}
`;
