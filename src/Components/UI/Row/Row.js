import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	margin-top: 10px;
	height: 95%;
	color: ${({ name }) => (name ? '#fff' : 'rgba(255, 255, 255, 0.6)')};
	border-collapse: collapse;
	border-spacing: 0;

	th,
	td {
		text-align: left;
		padding: 10px;
	}

	tr {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}
`;
