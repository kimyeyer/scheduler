## 📁 프로젝트 구조

```text
src/
├── components/              # 재사용 가능한 컴포넌트
│   └── features/
│       ├── calendar/        # 캘린더 컴포넌트 관련 (타입, 컴포넌트...)
│       ├── routine/         # 루틴 컴포넌트 관련 (타입, 컴포넌트...)
│       ├── schedule/        # 일정 컴포넌트 관련 (타입, 컴포넌트...)
│       └── common/          # 공통 UI 컴포넌트
│           └── ...          # 탭, 모달, 프로그램스 등
│
├── app/                     # Next.js 앱 라우터
│   └── page.tsx             # 메인 페이지 (일정 관리 홈)
│
├── store/                   # Zustand 전역 상태 관리
│   └── ...                  # 상태 정의
│
├── service/                 # Supabase API 연동
│   └── ...                  # 호출, 파싱 로직
│
├── lib/                     # 외부 라이브러리 설정
│   └── ...                  # 초기화, 설정 등
│
├── func/                    # 유틸 함수 모음
│   └── ...                  # 공용 헬퍼
│
└── assets/                  # 정적 리소스
    ├── images/             # 이미지 파일
    └── css/
        └── globals.css     # 전역 스타일
