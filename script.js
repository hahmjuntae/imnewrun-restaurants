// 🍱 맛집 데이터 (일부 예시)
const restaurants = [
  {
    category: '돈까스',
    name: '카츠요이',
    address: '경기 수원시 장안구 정자천로13번길 36 1층 103호',
    url: 'https://naver.me/xHgpC4ym',
  },
  {
    category: '한식',
    name: '해담',
    address: '경기 수원시 장안구 일월로76번길 22',
    url: 'https://naver.me/GlJ12flN',
  },
  {
    category: '한식',
    name: '삼대째손두부 본점',
    address: '경기 수원시 장안구 정자천로13번길 13-24',
    url: 'https://naver.me/xxYNJzk4',
  },
  {
    category: '분식',
    name: '담은샤브칼국수 직영1호점',
    address: '경기 수원시 장안구 화산로233번길 60 1층',
    url: 'https://naver.me/FO9o5vxF',
  },
  {
    category: '한식',
    name: '부뚜막백반&김치찜',
    address: '경기 수원시 장안구 정자천로13번길 136',
    url: 'https://naver.me/FK5IfiUJ',
  },
  {
    category: '양식',
    name: '아늑',
    address: '경기 수원시 장안구 서부로2106번길 36-4 1층',
    url: 'https://naver.me/FG7xz725',
  },
  {
    category: '분식',
    name: '강릉모녀장칼국수',
    address: '경기 화성시 기안길 9',
    url: 'https://naver.me/5KbMmL8H',
  },
  {
    category: '한식',
    name: '든든한 한끼 나주곰탕',
    address: '경기 수원시 권선구 서부로 1371',
    url: 'https://naver.me/xyTtEAs4',
  },
  {
    category: '커피/차',
    name: '카페나노',
    address: '경기 수원시 장안구 일월로90번길 42-2 성원주택',
    url: 'https://naver.me/xzxm0s8h',
  },
  {
    category: '커피/차',
    name: '수원숭이',
    address: '경기 수원시 장안구 일월로76번길 10-3',
    url: 'https://naver.me/GgWIuAcV',
  },
  {
    category: '찜/탕',
    name: '찜닭에 꽂힌 닭집애 수원본점',
    address: '경기 수원시 장안구 일월로66번길 15 1층',
    url: 'https://naver.me/FFGMuHGd',
  },
  {
    category: '한식',
    name: '김정심양푼찌개',
    address: '경기 수원시 권선구 금곡로197번길 61',
    url: 'https://naver.me/GKUJ33eM',
  },
  {
    category: '구이',
    name: '한우이야기',
    address: '경기 수원시 권선구 서수원로594번길 139',
    url: 'https://naver.me/xgNSjrJF',
  },
  {
    category: '한식',
    name: '시골집',
    address: '경기 수원시 권선구 구운로14번길 25',
    url: 'https://naver.me/G9rBkt60',
  },
  {
    category: '한식',
    name: '산들쌈채',
    address: '경기 수원시 권선구 일월천로4번길 13',
    url: 'https://naver.me/Fpx2c3Jf',
  },
  {
    category: '한식',
    name: '알촌 수원 성균관대점',
    address: '경기 수원시 장안구 서부로2106번길 32',
    url: 'https://naver.me/5dugwFkx',
  },
  {
    category: '커피/차',
    name: '카페인충전',
    address: '경기 수원시 권선구 일월천로15번길 22-23 101호',
    url: 'https://naver.me/58NB6ruK',
  },
  {
    category: '한식',
    name: '초가집',
    address: '경기 수원시 권선구 서수원로594번길 260',
    url: 'https://naver.me/xl0Dba5v',
  },
  {
    category: '커피/차',
    name: '카페쓰리몽키즈',
    address: '경기 수원시 권선구 율전로63번길 5-10',
    url: 'https://naver.me/x2jQYGgK',
  },
  {
    category: '한식',
    name: '강릉해변메밀막국수',
    address: '경기 수원시 권선구 수인로 344-3',
    url: 'https://naver.me/x67utBYx',
  },
  {
    category: '한식',
    name: '굴예찬&갑오징어 구운점',
    address: '경기 수원시 권선구 일월천로15번길 6-3',
    url: 'https://naver.me/Fy2FAhgC',
  },
  {
    category: '한식',
    name: '장터설렁탕',
    address: '경기 수원시 권선구 수인로 257',
    url: 'https://naver.me/FV7YUrIW',
  },
  {
    category: '한식',
    name: '송담추어탕 본점',
    address: '경기 수원시 권선구 구운로86번길 23',
    url: 'https://naver.me/x7nQRoW6',
  },
  {
    category: '구이',
    name: '북극해고등어 서수원점',
    address: '경기 수원시 권선구 금호로 145 1층',
    url: 'https://naver.me/xwmsx64K',
  },
  {
    category: 'nan',
    name: '백세삼계탕 수원파장본점',
    address: '경기 수원시 장안구 경수대로 1200',
    url: 'https://naver.me/GYC963oZ',
  },
  {
    category: '분식',
    name: '천하일면 수원성대점',
    address: '경기 수원시 장안구 화산로233번길 46',
    url: 'https://naver.me/57VZdrcU',
  },
  {
    category: '중식',
    name: '화원루',
    address: '경기 수원시 장안구 서부로2126번길 17',
    url: 'https://naver.me/F9NmroKF',
  },
  {
    category: '중식',
    name: '만다린',
    address: '경기 화성시 만년로 925',
    url: 'https://naver.me/G58VRlAB',
  },
  {
    category: '중식',
    name: '정원',
    address: '경기 수원시 장안구 서부로2123번길 34-3 2층',
    url: 'https://naver.me/G9r5SfrA',
  },
  {
    category: '샌드위치',
    name: '샐러디치오도씨 수원성대점',
    address: '경기 수원시 장안구 서부로2106번길 21 1층 4호',
    url: 'https://naver.me/FW6ZRCmN',
  },
  {
    category: '한식',
    name: '운암명가부대찌개',
    address: '경기 수원시 장안구 수성로258번길 3 메가플러스 202호',
    url: 'https://naver.me/5KbH05qB',
  },
  {
    category: '한식',
    name: '청년밥상',
    address: '경기 수원시 장안구 서부로2136번길 10 1층',
    url: 'https://naver.me/F2Zuq8a0',
  },
  {
    category: '분식',
    name: '참바른 김밥',
    address: '경기 수원시 장안구 서부로2126번길 17',
    url: 'https://naver.me/xSFAVI26',
  },
  {
    category: '분식',
    name: '자연김밥',
    address: '경기 수원시 장안구 서부로 2113 102호',
    url: 'https://naver.me/GYCzqu3Z',
  },
  {
    category: '디저트',
    name: '화이트스노우빙수 성균관대점',
    address: '경기 수원시 장안구 서부로 2132 1층',
    url: 'https://naver.me/5gFOoLkA',
  },
  {
    category: '한식',
    name: '참숯풍천장어직판장',
    address: '경기 수원시 장안구 일월로 86',
    url: 'https://naver.me/FZ27sPWg',
  },
  {
    category: '피자',
    name: '피자헛 천천점',
    address: '경기 수원시 장안구 정자천로13번길 41-3',
    url: 'https://naver.me/FfeotThk',
  },
  {
    category: '분식',
    name: '오늘국수',
    address: '경기 수원시 팔달구 일월로42번길 8-25 102호',
    url: 'https://naver.me/x7nW5B3N',
  },
  {
    category: '한식',
    name: '마포해장뼈다귀',
    address: '경기 수원시 권선구 오목천로 143-1 1, 2층',
    url: 'https://naver.me/5ch7G4el',
  },
  {
    category: '한식',
    name: '전주진피순대',
    address: '경기 수원시 권선구 금호로 77-8',
    url: 'https://naver.me/FpxBcDfA',
  },
  {
    category: '양식',
    name: '소코아 수원호매실점',
    address: '경기 수원시 권선구 서수원로523번길 30-44',
    url: 'https://naver.me/58N69yt3',
  },
  {
    category: '돈까스',
    name: '분카츠 수원정자동 본점',
    address: '경기 수원시 장안구 수성로245번길 18',
    url: 'https://naver.me/58N69yt3',
  },
  {
    category: '일식',
    name: '백소정 수원호매실점',
    address: '경기 수원시 권선구 서수원로577번길 305',
    url: 'https://naver.me/FXwGjwNC',
  },
  {
    category: '멕시칸',
    name: '도스마스 성균관대점',
    address: '경기 수원시 장안구 일월로90번길 26-1 1층 101호',
    url: 'https://naver.me/F9Nj5CPs',
  },
  {
    category: '한식',
    name: '정담명가 남원추어탕',
    address: '경기 수원시 장안구 장안로 353',
    url: 'https://naver.me/5bVsyciq',
  },
  {
    category: '한식',
    name: '춘천닭갈비vs양푼이찌개',
    address: '경기 수원시 권선구 탑동로 63',
    url: 'https://naver.me/FO9ngWpA',
  },
  {
    category: '아시안',
    name: '창타이',
    address: '경기 수원시 권선구 금호로 83-8 1층 115호',
    url: 'https://naver.me/FDnSC2G9',
  },
  {
    category: '한식',
    name: '율천회관',
    address: '경기 수원시 장안구 서부로2126번길 24',
    url: 'https://naver.me/xtgpMia4',
  },
  {
    category: '한식',
    name: '오정설렁탕 수원본점',
    address: '경기 수원시 권선구 고색동 1184',
    url: 'https://naver.me/5hua2d3k',
  },
  {
    category: '분식',
    name: '정가네홍두께손칼국수',
    address: '경기 수원시 권선구 구운로63번길 3 1층',
    url: 'https://naver.me/5hua2d3k',
  },
  {
    category: '한식',
    name: '담솥 수원호매실점',
    address: '경기 수원시 권선구 금곡로 206 우성메디피아2 106호',
    url: 'https://naver.me/5fIp0xRi',
  },
  {
    category: '한식',
    name: '소분 호매실',
    address: '경기 수원시 권선구 금곡로212번길 25 광일프라자 105호',
    url: 'https://naver.me/GzE9MuxY',
  },
  {
    category: '한식',
    name: '오늘도마순대국 수원고색점',
    address: '경기 수원시 권선구 호매실로 21-49 1층',
    url: 'https://naver.me/G8s9BuCu',
  },
  {
    category: '한식',
    name: '백년추어탕',
    address: '경기 수원시 권선구 금호로 143 2층',
    url: 'https://naver.me/xExe9RsJ',
  },
  {
    category: '커피/차',
    name: '텐퍼센트커피 수원율전점',
    address: '경기 수원시 장안구 서부로2181번길 40',
    url: 'https://naver.me/I55WaQ8f',
  },
  {
    category: '한식',
    name: '단골집 수원점',
    address: '경기 수원시 권선구 호매실로 21-4 1동 103~105호',
    url: 'https://naver.me/Fk7fka8n',
  },
  {
    category: '한식',
    name: '순정이네집밥',
    address: '경기 수원시 권선구 금호로 190 1층',
    url: 'https://naver.me/xzxmPV61',
  },
  {
    category: '한식',
    name: '봉궁순대국 본점',
    address: '경기 안산시 상록구 사사안골길 2-2',
    url: 'https://naver.me/5oE44xmp',
  },
  {
    category: '분식',
    name: '바담칼국수',
    address: '경기 수원시 권선구 금곡로197번길 59-6 1층',
    url: 'https://naver.me/GaldWdjn',
  },
  {
    category: '한식',
    name: '순창할매순대족발',
    address: '경기 수원시 권선구 노림로15번길 3',
    url: 'https://naver.me/xGIBw93u',
  },
  {
    category: '한식',
    name: '개성진찹쌀순대 호매실점',
    address: '경기 수원시 권선구 금곡로140번길 95-46',
    url: 'https://naver.me/Fk7FHNZ5',
  },
  {
    category: '중식',
    name: '니하오 차이나',
    address: '경기 수원시 권선구 금곡로102번길 30',
    url: 'https://naver.me/FbO0pbVP',
  },
  {
    category: '중식',
    name: '백년돌판짜장교동짬뽕',
    address: '경기 수원시 권선구 서수원로 340 1층',
    url: 'https://naver.me/FG7xthVY',
  },
  {
    category: '아시안',
    name: '껀룽',
    address: '경기 수원시 팔달구 수성로244번길 25 202동 107호',
    url: 'https://naver.me/FpxamkId',
  },
  {
    category: '양식',
    name: '투파인드피터 호매실점',
    address: '경기 수원시 권선구 금곡로 225 딜라이트2 1층',
    url: 'https://naver.me/FvEgdhli',
  },
  {
    category: '아시안',
    name: '까몬 호매실점',
    address: '경기 수원시 권선구 금곡로 225 딜라이트2 1층',
    url: 'https://naver.me/Gsj2M3r9',
  },
  {
    category: '아시안',
    name: '오리엔탈가든',
    address: '경기 수원시 장안구 만석로19번길 11-7 111호',
    url: 'https://naver.me/xa5RWVqm',
  },
  {
    category: '분식',
    name: '본만두 천천점 ',
    address: '경기 수원시 장안구 정자로 16',
    url: 'https://naver.me/GOPeBPWU',
  },
];

// 🧭 고정 카테고리 (정렬 순서 반영)
const fixedCategories = [
  '한식',
  '중식',
  '일식',
  '양식',
  '분식',
  '돈까스',
  '찜/탕',
  '구이',
  '회/해물',
  '족발/보쌈',
  '치킨',
  '버거',
  '피자',
  '샐러드',
  '아시안',
  '디저트',
  '간식',
  '커피/차',
  '샌드위치',
  '도시락',
  '멕시칸',
  '죽',
];

// 🧮 가나다순 정렬
restaurants.sort((a, b) => {
  const catComp = a.category.localeCompare(b.category, 'ko');
  return catComp !== 0 ? catComp : a.name.localeCompare(b.name, 'ko');
});

// 🏷️ 유틸
const toCategoryId = (name) =>
  name
    .replace(/[\/\s]/g, '')
    .replace(/[()]/g, '')
    .replace(/[^a-zA-Z가-힣0-9]/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

// 🧱 DOM 렌더링
function renderDOM() {
  const app = document.getElementById('app');
  const usedCategories = new Set(restaurants.map((r) => r.category));
  const displayCategories = fixedCategories.filter((cat) => usedCategories.has(cat));

  app.innerHTML = `
    <div class="app-container">
      <header class="app-header">
        <div class="header-content">
          <div class="title-group">
            <h1 class="site-title">아임뉴런 맛집지도 🍽️</h1>
          </div>
          <div class="version-group">
            <div class="version-info"><strong>v0.0.1</strong> (2025.04.17)</div>
            <ul class="version-changes">
              <li>최초 버전 배포 (길찾기 미지원)</li>
            </ul>
          </div>
        </div>
      </header>

      <div class="main-content">
        <div class="map-container">
          <div id="map" class="map-wrapper"></div>
        </div>
        <div class="sidebar">
          <div class="random-selection-area">
            <h2>맛집 랜덤 선택</h2>
            <div id="result" class="placeholder">뽑기를 눌러주세요</div>
            <div class="button-container">
              <button class="spin-button" onclick="startRandomSelection()">뽑기</button>
            </div>
          </div>
          <div class="category-lists">
            <div class="category-section">
              <div class="category-header">
                <input type="radio" name="category" id="all" value="all" class="category-radio" checked onchange="updateFilter(this)" />
                <label class="category-title" for="all">전체</label>
              </div>
            </div>
            ${displayCategories
              .map((category) => {
                const id = toCategoryId(category);
                return `
                <div class="category-section">
                  <div class="category-header">
                    <input type="radio" name="category" id="${id}" value="${category}" class="category-radio" onchange="updateFilter(this)" />
                    <label class="category-title" for="${id}">${category}</label>
                    <button type="button" class="toggle-btn" onclick="toggleCategory(this.closest('.category-section'));">▼</button>
                  </div>
                  <ul class="category-list" id="${id}List"></ul>
                </div>`;
              })
              .join('')}
          </div>
        </div>
      </div>

      <footer class="copyright">© 2025 JunTae Hahm</footer>
    </div>
  `;
}

// 📂 카테고리 리스트 표시
function displayCategories() {
  const usedCategories = new Set(restaurants.map((r) => r.category));
  const displayCategories = fixedCategories.filter((cat) => usedCategories.has(cat));

  displayCategories.forEach((category) => {
    const id = toCategoryId(category);
    const list = document.getElementById(`${id}List`);
    if (!list) return;
    const html = restaurants
      .filter((r) => r.category === category)
      .map((r) => `<li onclick="searchRestaurant('${r.name}')">${r.name}</li>`)
      .join('');
    list.innerHTML = html;
  });

  const allCategory = document.querySelector('.category-section');
  if (allCategory) {
    allCategory.classList.add('selected');
    filtered = restaurants.map((r) => r.name);
  }
}

// 📍 지도 기능
let map, currentMarker, currentInfoWindow, currentLocation;
let allMarkers = [];
const IMNEWRUN_LOCATION = { lat: 37.29212156983492, lng: 126.97552723470535 };

function initMap() {
  map = new naver.maps.Map(document.getElementById('map'), {
    zoom: 16,
    zoomControl: true,
    zoomControlOptions: {
      position: naver.maps.Position.LEFT_CENTER, // ← 기존 RIGHT_CENTER에서 변경
    },
  });

  const buttonWrapper = document.createElement('div');
  buttonWrapper.style.cssText = `
  position:absolute;
  bottom:16px;
  right:16px;
  z-index:1000;
  display:flex;
  flex-direction:row;
  gap:8px;
`;

  const baseStyle = `
  background:white;
  border:2px solid #4f46e5;
  border-radius:8px;
  width:40px;
  height:40px;
  padding:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`;

  // 🏢 회사위치 버튼 (왼쪽)
  const companyBtn = document.createElement('button');
  companyBtn.innerHTML = `<img src="https://cdn.jsdelivr.net/npm/@tabler/icons/icons/building.svg" width="20" height="20" alt="회사위치" />`;
  companyBtn.title = '회사 위치로 이동';
  companyBtn.style.cssText = baseStyle;
  companyBtn.onclick = () => {
    map.setCenter(new naver.maps.LatLng(IMNEWRUN_LOCATION.lat, IMNEWRUN_LOCATION.lng));
  };

  // 📍 현재위치 버튼 (오른쪽)
  const locationBtn = document.createElement('button');
  locationBtn.innerHTML = `<img src="https://cdn.jsdelivr.net/npm/@tabler/icons/icons/current-location.svg" width="20" height="20" alt="현재위치" />`;
  locationBtn.title = '현재 위치로 이동';
  locationBtn.style.cssText = baseStyle;
  locationBtn.onclick = () => {
    if (currentLocation) map.setCenter(currentLocation);
  };

  buttonWrapper.appendChild(companyBtn);
  buttonWrapper.appendChild(locationBtn);
  document.getElementById('map').appendChild(buttonWrapper);

  // 사용자 위치
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLocation = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(currentLocation);
        new naver.maps.Marker({
          position: currentLocation,
          map,
          icon: {
            content: `<div style="width:20px;height:20px;background:#4f46e5;border:3px solid white;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.3);"></div>`,
            anchor: new naver.maps.Point(10, 10),
          },
        });
      },
      () => console.log('위치 정보를 가져올 수 없습니다.'),
    );
  }

  // 아임뉴런 마커
  new naver.maps.Marker({
    position: new naver.maps.LatLng(IMNEWRUN_LOCATION.lat, IMNEWRUN_LOCATION.lng),
    map,
    icon: {
      content: `<div style="position:relative;">
        <div style="position:absolute;top:-48px;left:-24px;">
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 0C15.604 0 8 7.208 8 16.096C8 25 15.875 35.624 24 48C32.125 35.624 40 25 40 16.096C40 7.208 32.396 0 24 0Z" fill="#006fb9"></path>
            <circle cx="24" cy="16" r="11" fill="white"></circle>
            <image href="./src/IMNEWRUN_Logo-only.svg" x="17" y="9" width="14" height="14"></image>
          </svg>
        </div>
      </div>`,
      anchor: new naver.maps.Point(24, 48),
    },
  });

  updateMapMarkers('all'); // 최초 전체 마커 렌더링
}

function updateMapMarkers(category) {
  allMarkers.forEach((m) => m.setMap(null));
  allMarkers = [];

  const targets = category === 'all' ? restaurants : restaurants.filter((r) => r.category === category);

  targets.forEach((r) => {
    naver.maps.Service.geocode({ query: r.address }, (status, res) => {
      if (status !== naver.maps.Service.Status.OK || res.v2.meta.totalCount === 0) return;
      const loc = new naver.maps.LatLng(res.v2.addresses[0].y, res.v2.addresses[0].x);
      const marker = new naver.maps.Marker({
        position: loc,
        map,
        title: r.name,
        icon: {
          content: `<div style="background:#ff0000;width:14px;height:14px;border-radius:50%;border:2px solid white;"></div>`, // 🔻 줄인 크기
          anchor: new naver.maps.Point(7, 7), // 중심점도 수정
        },
      });
      allMarkers.push(marker);
      naver.maps.Event.addListener(marker, 'click', () => searchRestaurant(r.name));
    });
  });
}

// 🔍 검색 및 필터
let currentIndex = 0;
let filtered = [];

function updateFilter(radio) {
  const category = radio.value;
  filtered =
    category === 'all'
      ? restaurants.map((r) => r.name)
      : restaurants.filter((r) => r.category === category).map((r) => r.name);

  updateMapMarkers(category);

  document.querySelectorAll('.category-section.selected').forEach((section) => section.classList.remove('selected'));
  radio.closest('.category-section').classList.add('selected');
}

function toggleCategory(section) {
  section.classList.toggle('collapsed');
}

function startRandomSelection() {
  const resultEl = document.getElementById('result');
  resultEl.classList.remove('placeholder');

  let interval;
  let last = null;
  let slowdown = 50;

  clearInterval(interval);
  interval = setInterval(() => {
    currentIndex = Math.floor(Math.random() * filtered.length);
    const current = filtered[currentIndex];
    if (last !== current) {
      last = current;
      resultEl.textContent = current;
    }
    slowdown += 5;
    if (slowdown > 300) {
      clearInterval(interval);
      resultEl.textContent = filtered[currentIndex];
      searchRestaurant(filtered[currentIndex]);
    }
  }, slowdown);
}

function searchRestaurant(name) {
  const r = restaurants.find((r) => r.name === name);
  if (!r) return;
  if (currentMarker) currentMarker.setMap(null);
  if (currentInfoWindow) currentInfoWindow.close();

  naver.maps.Service.geocode({ query: r.address }, (status, res) => {
    if (status !== naver.maps.Service.Status.OK || res.v2.meta.totalCount === 0) return;

    const loc = new naver.maps.LatLng(res.v2.addresses[0].y, res.v2.addresses[0].x);
    currentMarker = new naver.maps.Marker({ position: loc, map });
    map.setCenter(loc);

    const destLat = res.v2.addresses[0].y;
    const destLng = res.v2.addresses[0].x;

    const naverMapUrl = currentLocation
      ? `nmap://route/walk?slat=${currentLocation.y}&slng=${
          currentLocation.x
        }&sname=현재위치&dlat=${destLat}&dlng=${destLng}&dname=${encodeURIComponent(r.name)}&appname=com.example.myapp`
      : `nmap://route/walk?dlat=${destLat}&dlng=${destLng}&dname=${encodeURIComponent(
          r.name,
        )}&appname=com.example.myapp`;

    const webUrl = currentLocation
      ? `https://map.naver.com/v5/directions/${currentLocation.x},${
          currentLocation.y
        },현재위치,,/${destLng},${destLat},${encodeURIComponent(r.name)},,/walk?c=14,0,0,0,dh`
      : `https://map.naver.com/v5/directions/-/-/${destLng},${destLat},${encodeURIComponent(
          r.name,
        )},,/walk?c=14,0,0,0,dh`;

    currentInfoWindow = new naver.maps.InfoWindow({
      content: `
            <div style="padding:15px;min-width:300px;
                        background:white;
                        border:none;
                        border-radius:12px;
                        box-shadow:0 4px 12px rgba(0,0,0,0.2);
                        z-index:9999">
              <div style="text-align:left;margin-bottom:12px;">
                <h3 style="margin-bottom:6px;font-size:16px;font-weight:bold;color:#111;">${r.name}</h3>
                <div style="font-size:13px;color:#666;">주소: ${r.address}</div>
              </div>
              <div style="display:flex;justify-content:flex-end;gap:8px;">
                <a href="${r.url}" target="_blank" style="display:block;background:#03C75A;color:white;padding:6px 12px;border-radius:6px;text-align:center;text-decoration:none;white-space:nowrap;">네이버 지도에서 보기</a>
                <a href="${naverMapUrl}" onclick="if(!navigator.userAgent.includes('Mobile')){window.open('${webUrl}','_blank');return false;}" style="display:block;background:#4f46e5;color:white;padding:6px 12px;border-radius:6px;text-align:center;text-decoration:none;white-space:nowrap;">길찾기</a>
              </div>
            </div>`,
      disableAnchor: true, // 🧱 말풍선 삼각형 제거
      backgroundColor: null, // 🧼 배경 투명 해제
      borderWidth: 0, // 🧼 테두리 제거
    });
    currentInfoWindow.open(map, currentMarker);
  });
}

window.onload = () => {
  renderDOM();
  initMap();
  displayCategories();
};
