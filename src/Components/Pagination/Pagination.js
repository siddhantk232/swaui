import React from 'react';
import { StyledPagination } from '../UI/StyledPagination/StyledPagination';

export default function Pagination({ currentPage, setCurrentPage }) {
	return (
		<StyledPagination>
			<button
				className="pre"
				disabled={currentPage === 1}
				onClick={() => {
					setCurrentPage(currentPage - 1);
				}}
			>
				&lt;
			</button>
			<button disabled>{currentPage}</button>
			<button
				className="pre"
				disabled={currentPage === 9}
				onClick={() => {
					setCurrentPage(currentPage + 1);
				}}
			>
				&gt;
			</button>
		</StyledPagination>
	);
}
