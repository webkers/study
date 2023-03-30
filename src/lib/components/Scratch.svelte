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

	let drawingMode = false;
	let cards = [];

	function movePage (pageNo) {
		setPageNo(pageNo)
	}

	function initCanvas () {
		if(contents.cards?.length) {
			for(const [index, c] of contents.cards.entries() ) {

				const canvas = new fabric.Canvas(`card-canvas-${index}`, { 
					selection: false,
					width: 430,
					height: 200,
					preserveObjectStacking: true
				});

				let svg;
				fabric.loadSVGFromURL(c.before, function(objects, options) {
					svg = fabric.util.groupSVGElements(objects, options);

					svg.left = 0;
					svg.top = 0;
					svg.scaleX = svg.width / canvas.width;
					svg.scaleY = svg.height / canvas.height;
					svg.evented =  false;
					svg.globalCompositeOperation = "xor"

					canvas.add(svg);
					canvas.renderAll();
				})

				canvas.on("mouse:down", function (options) {
					drawingMode = true;
				})

				canvas.on("mouse:up", function (options) {
					drawingMode = false;
				})

				canvas.on("mouse:move", function (options) {
						if(drawingMode) drawDot(options.absolutePointer.x, options.absolutePointer.y);
						canvas.bringToFront(svg)
						canvas.renderAll();
				})

				function drawDot(x, y) {
					const circle = new fabric.Circle({
						radius: 30,
						left: x,
						top: y,
						originX: 'center',
						originY: 'center',
						evented: false,
						fill: 'white',
						strokeWidth: 3
					});
					canvas.add(circle);
				}

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
			<div class="card-item" style={`background:url(${card.after}) 100% 100%`}>
				<canvas id={`card-canvas-${index}`} />
				<div class="card-frame">
					<img src="../src/lib/assets/images/scratch/card_frame.png" alt="">
				</div>
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