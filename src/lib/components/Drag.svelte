<script>
	// @ts-nocheck
	import { draggable } from '@neodrag/svelte';
	import '$lib/assets/css/drag.css'
	import BtnPrev from '$lib/assets/images/btn_prev.png'
	import BtnNext from '$lib/assets/images/btn_next.png'

	export let contents = null;
	export let setPageNo = function (page) {}

	let mode = "question";

	console.log({contents})

	function movePage (pageNo) {
		mode = "question";
		setPageNo(pageNo)
	}

	function handleDragStart (e) {
		console.log({e});
	}

	function handleDragEnd (e) {
		const rect = e.target.getBoundingClientRect();
		console.log({rect});
		console.log(e.target.style);
		// e.srcElement.style.transform = "translate3d( 0px, 0px, 0px)"
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
		{#each contents.answer_grids as grid}
		<div class={`col-${grid}`}></div>
		{/each}
	</div>
	{/if}
	{#if contents?.cards}
	<div class="card-list">
		<ul>
			{#each contents.grids as grid, idx}
				<li class={`col-${grid}`} 
					use:draggable={{ bounds: 'body', applyUserSelectHack: true }}
					on:neodrag:start={handleDragStart}
					on:neodrag:end={handleDragEnd}
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

