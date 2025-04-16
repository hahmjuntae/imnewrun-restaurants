// 🍱 맛집 데이터
const restaurants = [
  {
    category: '돈까스',
    name: '가츠요이',
    address: '경기 수원시 장안구 일월로76번길 22',
    url: 'https://naver.me/xHgpC4ym',
  },
  {
    category: '한식',
    name: '해담',
    address: '경기 수원시 장안구 정자천로13번길 13-24',
    url: 'https://naver.me/GlJ12flN',
  },
  {
    category: '한식',
    name: '삼대째 순두부',
    address: '경기 수원시 장안구 화산로233번길 60 1층 정성담은샤브칼국수',
    url: 'https://naver.me/xxYNJzk4',
  },
  {
    category: '한식',
    name: '담은 샤브 칼국수',
    address: '경기 수원시 장안구 정자천로13번길 136 부뚜막보쌈김치찜',
    url: 'https://naver.me/FO9o5vxF',
  },
  {
    category: '찜/탕',
    name: '부뚜막 김치찜',
    address: '경기 수원시 장안구 정자천로13번길 136 부뚜막보쌈김치찜',
    url: 'https://naver.me/FK5IfiUJ',
  },
  {
    category: '양식',
    name: '아늑',
    address: '경기 수원시 장안구 서부로2106번길 36-4 1층',
    url: 'https://naver.me/FG7xz725',
  },
  {
    category: '한식',
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
    category: '디저트',
    name: '카페 나노',
    address: '경기 수원시 장안구 일월로90번길 42-2 성원주택',
    url: 'https://naver.me/xzxm0s8h',
  },
  {
    category: '디저트',
    name: '수원숭이',
    address: '경기 수원시 장안구 일월로76번길 10-3',
    url: 'https://naver.me/GgWIuAcV',
  },
  {
    category: '한식',
    name: '닭집애',
    address: '경기 수원시 장안구 일월로66번길 15 1층',
    url: 'https://naver.me/FFGMuHGd',
  },
];

// 🧮 가나다순 정렬: category > name
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
  const uniqueCategories = [...new Set(restaurants.map((r) => r.category))];

  app.innerHTML = `
    <div class="content-container">
      <div class="main-content">
        <h1 class="site-title">🍽️ 아임뉴런 맛집지도</h1>
        <div id="map" class="map-wrapper"></div>
        <div class="main-content-inner">
          <div class="random-selection-area">
            <h2 class="text-xl font-bold text-indigo-600">맛집 랜덤 선택</h2>
            <div id="result" class="placeholder">뽑기를 눌러주세요</div>
            <div class="button-container">
              <button class="spin-button" onclick="startRandomSelection()">뽑기</button>
            </div>
          </div>
          <div class="radio-group">
            <div>
              <input type="radio" name="category" id="all" value="all" class="category-radio" checked onchange="updateFilter()" />
              <label for="all">전체</label>
            </div>
            ${uniqueCategories
              .map((category) => {
                const id = toCategoryId(category);
                return `
                <div>
                  <input type="radio" name="category" id="${id}" value="${category}" class="category-radio" onchange="updateFilter()" />
                  <label for="${id}">${category}</label>
                </div>`;
              })
              .join('')}
          </div>
        </div>
      </div>
      <div class="categories">
        <div class="categories-inner">
          <div class="category-lists">
            ${uniqueCategories
              .map((category) => {
                const id = toCategoryId(category);
                return `
                <div class="category-section">
                  <div class="category-title" onclick="toggleCategory(this)">${category}</div>
                  <ul class="category-list" id="${id}List"></ul>
                </div>`;
              })
              .join('')}
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">© 2025 JunTae Hahm</div>
  `;
}

// 📍 지도 로딩
let map, currentMarker, currentInfoWindow;
const IMNEWRUN_LOCATION = { lat: 37.29212156983492, lng: 126.97552723470535 };

function initMap() {
  map = new naver.maps.Map(document.getElementById('map'), {
    center: new naver.maps.LatLng(IMNEWRUN_LOCATION.lat, IMNEWRUN_LOCATION.lng),
    zoom: 17,
  });

  restaurants.forEach((r) => {
    naver.maps.Service.geocode({ query: r.address }, (status, res) => {
      if (status !== naver.maps.Service.Status.OK || res.v2.meta.totalCount === 0) return;
      const loc = new naver.maps.LatLng(res.v2.addresses[0].y, res.v2.addresses[0].x);
      const marker = new naver.maps.Marker({
        position: loc,
        map,
        title: r.name,
        icon: {
          content: `<div style="background:#ff0000;width:12px;height:12px;border-radius:50%;border:2px solid white;"></div>`,
          anchor: new naver.maps.Point(8, 8),
        },
      });
      naver.maps.Event.addListener(marker, 'click', () => searchRestaurant(r.name));
    });
  });
}

// 🔍 검색 및 랜덤
let currentIndex = 0;
let filtered = [];

function updateFilter() {
  const selected = document.querySelector('input[name="category"]:checked').value;
  filtered =
    selected === 'all'
      ? restaurants.map((r) => r.name)
      : restaurants.filter((r) => r.category === selected).map((r) => r.name);
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

    currentInfoWindow = new naver.maps.InfoWindow({
      content: `
        <div style="padding:15px;">
          <h3 style="margin-bottom:10px;font-size:16px;font-weight:bold;">${r.name}</h3>
          <div style="font-size:13px;color:#666;">주소: ${r.address}</div>
          <a href="${r.url}" target="_blank" style="display:block;margin-top:10px;background:#03C75A;color:white;padding:6px 12px;border-radius:6px;text-align:center;">네이버 지도에서 보기</a>
        </div>`,
    });
    currentInfoWindow.open(map, currentMarker);
  });
}

// 📂 리스트 그리기
function displayCategories() {
  const categories = [...new Set(restaurants.map((r) => r.category))];
  categories.forEach((category) => {
    const id = toCategoryId(category);
    const list = document.getElementById(`${id}List`);
    if (!list) return;
    const html = restaurants
      .filter((r) => r.category === category)
      .map((r) => `<li><a href="#" onclick="searchRestaurant('${r.name}');return false;">${r.name}</a></li>`)
      .join('');
    list.innerHTML = html;
  });
}

function toggleCategory(titleElement) {
  const section = titleElement.parentElement;
  section.classList.toggle('collapsed');
}

window.onload = () => {
  renderDOM();
  initMap();
  updateFilter();
  displayCategories();
};
