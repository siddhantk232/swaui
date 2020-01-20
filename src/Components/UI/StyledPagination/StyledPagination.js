import styled from 'styled-components';

export const StyledPagination = styled.div`
	display: flex;
	justify-content: space-between;
	width: 10%;
	margin: 20px 0;

	button {
		border: 2px solid rgb(253, 195, 0);
		background-color: transparent;
		color: #fff;
		font-size: 1.2rem;

		&:focus {
			outline: none;
		}

		&:hover {
			cursor: pointer;
		}
	}

	button[disabled] {
		cursor: initial;
	}

	button.pre[disabled] {
		color: rgba(255, 255, 255, 0.5);
	}
`;
