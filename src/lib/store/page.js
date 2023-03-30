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
		"prev_page": "",
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
		"next_page": "",
	},
	{
		"page": "07_01",
		"type": "scratch",
		"title": "다음을 긁어서 아래 문법을 적용한 변형 형태를 확인하세요.",
		"question": "적용문법: -어서",
		"cards": [
			{
				"before": "/images/scratch1_s.svg",
				"after": "/images/scratch1_e.svg"
			},
			{
				"before": "/images/scratch1_s.svg",
				"after": "/images/scratch1_e.svg"
			},
		],
		"prev_page": "",
		"next_page": "07_02",
	},
	{
		"page": "07_02",
		"type": "scratch",
		"title": "다음을 긁어서 아래 문법을 적용한 변형 형태를 확인하세요.",
		"question": "적용문법: -어서",
		"cards": [
			{
				"before": "/images/scratch1_s.svg",
				"after": "/images/scratch1_e.svg"
			},
			{
				"before": "/images/scratch1_s.svg",
				"after": "/images/scratch1_e.svg"
			},
		],
		"prev_page": "07_01",
		"next_page": "",
	},
	{
		"page": "13_01",
		"type": "drag",
		"title": "그림을 보고 오른쪽의 어휘를 옮겨 문장을 만드세요.",
		"grids": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		"cards": ["겨울은", "따뜻해서", "재미있어요", "재미있어서", "여름에는", "추워서", "더워서", "좋아요", "좋아서", "어려워서", "땀이나요", "고마워요"],
		"answer_grids": [1, 1, 1],
		"answers": ["여름에는", "더워서", "땀이나요"],
		"prev_page": "",
		"next_page": "13_02",
	},
	{
		"page": "13_02",
		"type": "drag",
		"title": "그림을 보고 오른쪽의 어휘를 옮겨 문장을 만드세요.",
		"grids": [1, 1, 2, 1, 1, 2, 2, 1, 1],
		"cards": ["무서워요", "신나요", "밥을 먹을 수 있어서", "궁금해요", "화가나요", "수영을 할 수 있어서", "스키를 탈 수 있어서", "땀이나요", "고마워요"],
		"answer_grids": [2, 1],
		"answers": ["수영을 할 수 있어서", "신나요"],
		"prev_page": "13_01",
		"next_page": "",
	}
])