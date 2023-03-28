// @ts-nocheck
import { error } from '@sveltejs/kit';
 
export function load({ params }) {
	return {
		pageNo: params.pno,
	};

  throw error(404, 'Not found');
}