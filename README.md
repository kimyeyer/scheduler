## 폴더 구조
src/
├── components/              # 재사용 가능한 컴포넌트
│   ├── calendar/            # 캘린더 관련 컴포넌트
│   ├── routine/             # 루틴 관련 UI 컴포넌트
│   └── common/              # 공통 UI 컴포넌트
│
├── app/                     # 라우터 및 페이지
│   └── page.tsx             # Home - 일정 메인화면
│
├── hooks/                   # 커스텀 훅
│
├── store/                   # Zustand 상태 관리
│
├── service/                 # Supabase API 연동 서비스
│
├── types/                   # 타입 정의
│
├── lib/                     # 외부 라이브러리 관련
│
├── func/                    # 유틸 함수
│
└── assets/                  # 정적 자산
    ├── images/
    └── css/
        └── globals.css# cal
