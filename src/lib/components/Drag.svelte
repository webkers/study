<script>
	// @ts-nocheck
	import { draggable } from '@neodrag/svelte';
	import '$lib/assets/css/drag.css'
	import BtnPrev from '$lib/assets/images/btn_prev.png'
	import BtnNext from '$lib/assets/images/btn_next.png'

	export let contents = null;
	export let widthScale = 1;
	export let setPageNo = function (page) {}

	let answerEl = [];
	let cardsPositions = [];

	resetCardPosition ();

	function movePage (pageNo) {
		resetCardPosition ();
		setPageNo(pageNo)
	}

	function resetCardPosition () {
		if(contents?.cards) {
			for( const card of contents.cards) {
				cardsPositions.push({ x: 0, y: 0 });
			}
		}
	}

	function handleDrag (e, idx) {
		const { index } = snapDrag(e.target, idx);
		if(answerEl[index]) {
			answerEl[index].style.border = "5px solid #5d64f0";
		}else {
			for( const el of answerEl) {
				el.style.border = "none";
			}
		}
	}

	function handleDragEnd (e, idx) {
		const { answer:targetAnswer, index } = snapDrag(e.target, idx);

		for( const el of answerEl) {
			el.style.border = "none";
		}

		if(targetAnswer) {
			if(e.target.innerText !== targetAnswer) {
				cardsPositions[idx] = { x: 0, y: 0 };
			}
		}else {
			cardsPositions[idx] = { x: 0, y: 0 };
		}
	}

	function snapDrag (target, idx) {
		const snapGap = 30; // snap 자석 효과의 강도조절
		const targetRect = target.getBoundingClientRect();
		if(answerEl?.length) {
			for( const [index, el] of answerEl.entries() ) {
				const rect = el.getBoundingClientRect();
				if(Math.abs(targetRect.y - rect.y) < snapGap && Math.abs(targetRect.x - rect.x) < snapGap) {
					target.style.transform = `translate( 0px, 0px)`;
					const gapRect = target.getBoundingClientRect();
					cardsPositions[idx] = { x: (rect.x - gapRect.x) / widthScale, y: (rect.y - gapRect.y) / widthScale };
					return {answer: contents.answers[index], index};
				}
			}
		}
		return {answer: "", index: null};
	}

</script>


<div class="container">
	{#if contents?.title}
	<div class="title">
		{contents?.title}
	</div>
	{/if} 
	{#if contents?.answers}
	<div class="answer">
		{#each contents.answer_grids as grid, idx}
		<div class={`col-${grid}`} bind:this={answerEl[idx]} ></div>
		{/each}
	</div>
	{/if}
	{#if contents?.cards}
	<div class="card-list">
		<ul>
			{#each contents.grids as grid, idx}
				<li class={`col-${grid}`} 
					use:draggable={{ bounds: 'body', applyUserSelectHack: true, position: cardsPositions[idx], onDrag: ({ offsetX, offsetY}) => {
						cardsPositions[idx] = { x: offsetX, y: offsetY };
					} 
					}}
					on:neodrag={(e) => handleDrag(e, idx)}
					on:neodrag:end={ (e) => handleDragEnd(e, idx)}
				>{contents.cards[idx]}</li>
			{/each}
		</ul>
	</div>
	{/if}
	{#if contents?.prev_page}
	<div class="btn-prev">
		<button on:click={ () => movePage(contents.prev_page) }>
			<img src={BtnPrev} alt="이전으로" >
		</button>
	</div>
	{/if}
	{#if contents?.next_page}
	<div class="btn-next">
		<button on:click={ () => movePage(contents.next_page) }>
			<img src={BtnNext} alt="다음으로">
		</button>
	</div>
	{/if}
</div>

