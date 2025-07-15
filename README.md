# ARTINUS Frontend Developer 과제

## 🛠️ 개발 환경

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **배포**: Vercel

## 📦 개발 내용

### 1. 상품 목록 페이지

- DummyJson Products API 연동
  - `GET https://dummyjson.com/products?skip=0&limit=20`
- 카드 형태 UI (썸네일, 제목, 가격)
- 무한 스크롤 (Intersection Observer)
- 상품 클릭 시 상세 페이지 이동

### 2. 상품 상세 페이지

- `GET https://dummyjson.com/products/{id}`로 상세 정보 조회
- 썸네일, 제목, 가격, 태그, 설명, 브랜드, 평점, 재고, 카테고리 등 표시
- 로딩 시 스켈레톤 UI 표시

### 3. 공통

- 반응형 UI
- 에러/로딩 처리
- 빌드 최적화 및 정적 배포

## 🚀 빌드 및 실행 방법

```bash
npm install
npm run dev
```

- 브라우저에서 `http://localhost:5173` 접속

## 🌐 배포 URL

- [https://artinus-test.vercel.app/](https://artinus-test.vercel.app/)
