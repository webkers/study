<script>
	// @ts-nocheck
	import '$lib/assets/css/scratch.css'
	import { fabric } from "fabric"
	import BtnPrev from '$lib/assets/images/btn_prev.png'
	import BtnNext from '$lib/assets/images/btn_next.png'
  import { onMount } from 'svelte';

	export let contents = null;
	export let setPageNo = function (page) {}

	console.log({contents})

	let cards = [];

	function movePage (pageNo) {
		setPageNo(pageNo)
	}

	function initCanvas () {
		if(contents.cards?.length) {
			for(const [index, card] of contents.cards.entries() ) {

				const canvas = new fabric.Canvas(`card-canvas-${index}`, { 
					selection: false,
					width: 430,
					height: 200,
					isDrawingMode: true
				});

				canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
				canvas.freeDrawingBrush.width = 30;
				canvas.freeDrawingBrush.color = '#FFFFFF';

				fabric.loadSVGFromURL('http://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg?5153', function(objects, options) {
					const svg = fabric.util.groupSVGElements(objects, options);
					svg.left = 50;
					svg.top = 50;
					svg.globalCompositeOperation = "source-in"
					svg.scaleToWidth(100);
					svg.scaleToHeight(100);
					canvas.add(svg);
					canvas.renderAll();
				});



				const card = {

				}
			}
		}
	}

	onMount( () => {
		initCanvas ();
	})

</script>

<div class="container scratch-block">
	{#if contents?.title}
	<div class="title">
		{contents?.title}
	</div>
	{/if} 

	{#if contents?.question}
	<div class="question">
		{contents?.question}
	</div>
	{/if}
	{#if contents?.cards}
	<div class="cards">
		{#each contents.cards as card, index}
			<div class="card-item">
				<canvas id={`card-canvas-${index}`} />
			</div>
		{/each}
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