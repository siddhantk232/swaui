import styled from 'styled-components';

export const Row = styled.tr`
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);

	${({ hover }) =>
		hover
			? `&:hover {
		background-color: rgba(255, 255, 255, 0.1);
		cursor: pointer;
	}`
			: null}
`;
