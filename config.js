/**
 * Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
   groom: {
    name: "샘",
    nameEn: "Groom",
    father: "데이비드 카스카트",
    mother: "파멜라 카스카트",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "슬아",
    nameEn: "Bride",
    father: "이희삼",
    mother: "김명애",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-05-31",
    time: "11:00",
    venue: "남산골 한옥마을",
    hall: "관훈동 민씨가옥",
    address: "서울특별시 중구 필동2가 84-1",
    tel: "02-6358-5533",
    mapLinks: {
      kakao: "https://kko.to/xwalUPalgH",
      naver: "https://naver.me/5gFg3FmY"
    }
  },
  

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걸어돈 두 사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n귀한 걸음 하시어\n축복해 주시면 감사하겠습니다."
  },
  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "둘이 함께 맞이하는 열 번째 봄,\n저희 두 사람 결혼합니다.\n\n앞으로 맞이할 저희의 봄날을 축복해주세요."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
   accounts: {
    groom: [
      { role: "신랑", name: "샘", bank: "국민은행", number: "000-000-000000" },
      { role: "아버지", name: "홍판서", bank: "신한은행", number: "000-000-000000" },
      { role: "어머니", name: "김부인", bank: "우리은행", number: "000-000-000000" }
    ],
    bride: [
      { role: "신부", name: "이슬아", bank: "국민은행", number: "279802-04-067076" },
      { role: "아버지", name: "이희삼", bank: "농협은행", number: "125-02-005566" },
      { role: "어머니", name: "김명애", bank: "농협은행", number: "125-01-080811" }
    ]
  },
  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "샘 ♥ 슬아 결혼합니다",
    description: "2025년 5월 31일, 소중한 분들을 초대합니다."
  }
};
