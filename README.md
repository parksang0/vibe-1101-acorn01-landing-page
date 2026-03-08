# IntoTheSec의 보안이야기

반응형 랜딩 페이지입니다. HTML, CSS, JavaScript로 구성되어 있으며 모바일·태블릿·데스크톱에서 모두 보기 좋게 동작합니다.

## 구성

- **Title Bar** — "IntoTheSec의 보안이야기" (스크롤 시 상단바 스타일 변경)
- **Top Image & Slogan** — Unsplash 배경 이미지 + 헤드라인 "반응형 웹페이지"
- **Middle YouTube Clips** — 4개의 YouTube 섬네일 카드 (동일 영상 링크)
- **Bottom** — GitHub Repos 링크 (cloud-vibe-1007-docker)
- **Contact Bar** — 에이콘출판 도토리 / 이메일 / GitHub 프로필 링크

## 실행 방법

1. 이 폴더를 로컬에 클론하거나 다운로드합니다.
2. `index.html`을 브라우저에서 열거나, 로컬 서버로 루트를 지정해 실행합니다.

```bash
# 예: Python으로 간단 서버 실행
python -m http.server 8080
# 브라우저에서 http://localhost:8080 접속
```

## 파일 구조

| 파일 | 설명 |
|------|------|
| `index.html` | 메인 HTML 구조 및 섹션 마크업 |
| `style.css` | 반응형 스타일, 그리드·카드·히어로 레이아웃 |
| `script.js` | 스크롤 이동, 맨 위로 가기 버튼, GitHub 버튼 등 |

## 기술 스택

- **HTML5** — 시맨틱 마크업
- **CSS3** — CSS 변수, Flexbox/Grid, 미디어 쿼리, 반응형 디자인
- **Vanilla JavaScript** — 스크롤·버튼 인터랙션

## 반응형 breakpoint

- **데스크톱** — YouTube 카드 4열
- **~960px** — 카드 2열
- **~720px** — 히어로·버튼 레이아웃 조정
- **~520px** — 카드 1열, 여백 축소
