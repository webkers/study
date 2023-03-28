import { writable } from 'svelte/store';

export const pageData = writable([
	{
		"page":"01",
		"type": "movie",
		"prev_page": "",
		"next_page": "06",
	},
	{
		"page": "06_01",
		"type": "click",
		"title": "문법 '-어서'는 두 개의 문장을 연결해서 말할 때 사용합니다.",
		"question_s": "예쁜 꽃을 볼 수",
		"question_e": "봄이 좋아요",
		"answer_s": "있어요. 그래서",
		"answer_e": "있어서",
		"prev_page": "01",
		"next_page": "06_02",
	},
	{
		"page": "06_02",
		"type": "click",
		"title": "문법 '-어서'는 두 개의 문장을 연결해서 말할 때 사용합니다.",
		"question_s": "물놀이를 할 수",
		"question_e": "여름이 좋아요.",
		"answer_s": "있어요. 그래서",
		"answer_e": "있어서",
		"prev_page": "06_01",
		"next_page": "06_03",
	},
	{
		"page": "06_03",
		"type": "click",
		"title": "문법 '-어서'는 두 개의 문장을 연결해서 말할 때 사용합니다.",
		"question_s": "여름에는 날씨가",
		"question_e": "물놀이를 해요.",
		"answer_s": "더워요. 그래서",
		"answer_e": "더워서",
		"prev_page": "06_02",
		"next_page": "06_04",
	}
])