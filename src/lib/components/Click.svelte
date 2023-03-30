<script>
	// @ts-nocheck

	import '$lib/assets/css/click.css'
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

</script>


<div class="container click-block">
	{#if contents?.title}
	<div class="title">
		{contents?.title}
	</div>
	<div class="qa-content">
		<div class="question">{contents?.question_s}</div>
		<button class="answer" on:click={ () => mode = "answer"}>
			{#if mode === "answer"}
				{contents?.answer_e}
			{:else}
				{contents?.answer_s}
			{/if}
			
		</button>
		<div class="question">{contents?.question_e}</div>
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

