# 게임 컬렉션 메뉴

React + Tailwind CSS로 만든 현대적인 웹 애플리케이션으로, 6개의 클래식 HTML5 게임을 포함한 메뉴 인터페이스입니다.

## 🎮 포함된 게임

- **Pachinko Slot**: 잭팟 기능이 있는 일본 스타일 슬롯 머신
- **Snake**: 장애물과 최고 점수가 있는 클래식 뱀 게임
- **Tetris**: 레벨, 홀드, 점수 시스템이 있는 테트리스
- **Breakout**: 패들과 공으로 벽돌을 깨는 게임
- **Flappy Bird**: 파이프를 피하며 날아다니는 게임
- **2048**: 숫자를 합쳐 2048에 도달하는 게임

## ✨ 기능

- **현대적인 UI**: Tailwind CSS로 반응형 디자인
- **설정 패널**: 소리 효과와 다크 테마 토글
- **지속적인 점수**: localStorage에 최고 점수 저장
- **소리 효과**: Web Audio API 통합 (비활성화 가능)
- **모바일 친화적**: 데스크톱과 모바일에서 작동
- **자동 배포**: Vercel과 연결된 지속적 배포

## 🚀 라이브 데모

[라이브 사이트 보기](https://grok-project-21-3as5sczof-dongyeol-jungs-projects.vercel.app)

## 🛠️ 기술 스택

- **프론트엔드**: React 18, React Router DOM
- **스타일링**: Tailwind CSS 3.4
- **빌드 도구**: Vite
- **배포**: Vercel
- **게임**: HTML5 Canvas, JavaScript ES6+
- **오디오**: Web Audio API

## 📁 프로젝트 구조

```
src/
├── App.jsx          # 라우팅과 설정이 있는 메인 앱
├── main.jsx         # React 진입점
└── index.css        # Tailwind 지시문

public/
├── *.html           # 개별 게임 파일
└── ...

package.json         # 의존성과 스크립트
vite.config.js       # Vite 설정
tailwind.config.js   # Tailwind 설정
```

## 🏃‍♂️ 로컬 개발

1. 저장소 클론:
   ```bash
   git clone https://github.com/mxten777/grok_project_21.git
   cd grok_project_21
   ```

2. 의존성 설치:
   ```bash
   npm install
   ```

3. 개발 서버 시작:
   ```bash
   npm run dev
   ```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기.

## 📦 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist/` 디렉터리에 생성됩니다.

## 🎵 설정

- **소리 효과**: 게임 소리 켜기/끄기
- **다크 테마**: 메뉴 테마 전환

설정은 브라우저의 localStorage에 저장됩니다.

## 🎯 게임 조작법

### Pachinko Slot
- "Start" 클릭으로 회전
- +/- 버튼으로 베팅 조절
- 최대 베팅 버튼
- 자동 회전 토글
- 설정 버튼으로 난이도 조절

### Snake
- 화살표 키로 이동
- 벽과 자신을 피함
- 먹이를 먹어 성장

### Tetris
- 화살표 키: 이동 및 회전
- 스페이스: 하드 드롭
- C: 홀드 피스
- 아래 화살표: 소프트 드롭

### Breakout
- 마우스나 화살표 키로 패들 이동
- 모든 벽돌을 깨면 승리

### Flappy Bird
- 스페이스나 클릭으로 날개짓
- 파이프 피하기

### 2048
- 화살표 키로 타일 슬라이드
- 같은 숫자 합치기
- 2048에 도달하면 승리

## 🤝 기여

1. 저장소 포크
2. 기능 브랜치 생성
3. 변경사항 만들기
4. 로컬 테스트
5. 커밋 및 푸시
6. 풀 리퀘스트 생성

## 📄 라이선스

이 프로젝트는 교육 및 데몬스트레이션 목적입니다.

## 👨‍💻 작성자

React와 Tailwind CSS로 ❤️ 만들어졌습니다.