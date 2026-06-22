const friends = [
  { name: "신우", city: "충북 영동", lat: 36.175, lon: 127.7834 },
  { name: "명규", city: "충북 영동", lat: 36.175, lon: 127.7834 },
  { name: "기훈", city: "충북 영동", lat: 36.175, lon: 127.7834 },
  { name: "도민", city: "구미", lat: 36.1195, lon: 128.3446 },
  { name: "규암", city: "전주", lat: 35.8242, lon: 127.148 },
  { name: "승준", city: "부천", lat: 37.5034, lon: 126.766 },
  { name: "경덕", city: "대전", lat: 36.3504, lon: 127.3845 },
  { name: "병민", city: "부산", lat: 35.1796, lon: 129.0756 },
];

const originPlaces = [
  {
    city: "충북 영동",
    people: ["신우", "명규", "기훈"],
    lat: 36.175,
    lon: 127.7834,
    labelClass: "label-down is-home",
  },
  { city: "구미", people: ["도민"], lat: 36.1195, lon: 128.3446, labelClass: "label-right" },
  { city: "전주", people: ["규암"], lat: 35.8242, lon: 127.148, labelClass: "label-down-left" },
  { city: "부천", people: ["승준"], lat: 37.5034, lon: 126.766, labelClass: "label-up" },
  { city: "대전", people: ["경덕"], lat: 36.3504, lon: 127.3845, labelClass: "label-left" },
  { city: "부산", people: ["병민"], lat: 35.1796, lon: 129.0756, labelClass: "label-right" },
];

const destinations = [
  { name: "서울", region: "수도권", tag: "도심 산책", lat: 37.5665, lon: 126.978 },
  { name: "인천", region: "수도권", tag: "바다 노을", lat: 37.4563, lon: 126.7052 },
  { name: "수원", region: "경기", tag: "성곽 코스", lat: 37.2636, lon: 127.0286 },
  { name: "춘천", region: "강원", tag: "호수 드라이브", lat: 37.8813, lon: 127.7298 },
  { name: "속초", region: "강원", tag: "동해 바다", lat: 38.207, lon: 128.5918 },
  { name: "강릉", region: "강원", tag: "커피 바다", lat: 37.7519, lon: 128.8761 },
  { name: "원주", region: "강원", tag: "산책 여행", lat: 37.3422, lon: 127.9202 },
  { name: "태안", region: "충남", tag: "해변 캠프", lat: 36.7456, lon: 126.298 },
  { name: "보령", region: "충남", tag: "서해 바다", lat: 36.3334, lon: 126.6128 },
  { name: "대전", region: "충청", tag: "중간 지점", lat: 36.3504, lon: 127.3845 },
  { name: "청주", region: "충청", tag: "가벼운 모임", lat: 36.6424, lon: 127.489 },
  { name: "영동", region: "충북", tag: "홈그라운드", lat: 36.175, lon: 127.7834 },
  { name: "군산", region: "전북", tag: "시간 여행", lat: 35.9677, lon: 126.7366 },
  { name: "전주", region: "전북", tag: "한옥 골목", lat: 35.8242, lon: 127.148 },
  { name: "담양", region: "전남", tag: "대나무 숲", lat: 35.321, lon: 126.9882 },
  { name: "광주", region: "광주", tag: "맛집 투어", lat: 35.1595, lon: 126.8526 },
  { name: "목포", region: "전남", tag: "항구 여행", lat: 34.8118, lon: 126.3922 },
  { name: "여수", region: "전남", tag: "밤바다", lat: 34.7604, lon: 127.6622 },
  { name: "순천", region: "전남", tag: "정원 산책", lat: 34.9506, lon: 127.4872 },
  { name: "대구", region: "대구", tag: "먹거리", lat: 35.8714, lon: 128.6014 },
  { name: "안동", region: "경북", tag: "고즈넉함", lat: 36.5684, lon: 128.7294 },
  { name: "구미", region: "경북", tag: "친구 소환", lat: 36.1195, lon: 128.3446 },
  { name: "경주", region: "경북", tag: "유적 산책", lat: 35.8562, lon: 129.2247 },
  { name: "포항", region: "경북", tag: "해돋이", lat: 36.019, lon: 129.3435 },
  { name: "울산", region: "울산", tag: "바위 해안", lat: 35.5384, lon: 129.3114 },
  { name: "부산", region: "부산", tag: "바다 도시", lat: 35.1796, lon: 129.0756 },
  { name: "통영", region: "경남", tag: "섬 여행", lat: 34.8544, lon: 128.4332 },
  { name: "제주", region: "제주", tag: "비행기 찬스", lat: 33.4996, lon: 126.5312 },
  { name: "가평", region: "경기", tag: "계곡 휴식", lat: 37.8315, lon: 127.5099 },
  { name: "양평", region: "경기", tag: "강변 산책", lat: 37.4912, lon: 127.4876 },
  { name: "파주", region: "경기", tag: "출판도시", lat: 37.7599, lon: 126.78 },
  { name: "강화", region: "인천", tag: "섬 드라이브", lat: 37.7465, lon: 126.4877 },
  { name: "홍천", region: "강원", tag: "숲속 여행", lat: 37.6972, lon: 127.8885 },
  { name: "평창", region: "강원", tag: "고원 바람", lat: 37.3705, lon: 128.3906 },
  { name: "정선", region: "강원", tag: "산골 기차", lat: 37.3806, lon: 128.6609 },
  { name: "양양", region: "강원", tag: "서핑 바다", lat: 38.0754, lon: 128.619 },
  { name: "제천", region: "충북", tag: "호반 여행", lat: 37.1326, lon: 128.191 },
  { name: "단양", region: "충북", tag: "절벽 풍경", lat: 36.9845, lon: 128.3655 },
  { name: "천안", region: "충남", tag: "가벼운 합류", lat: 36.8151, lon: 127.1139 },
  { name: "공주", region: "충남", tag: "백제 산책", lat: 36.4465, lon: 127.119 },
  { name: "부여", region: "충남", tag: "유적 여행", lat: 36.2757, lon: 126.9098 },
  { name: "익산", region: "전북", tag: "미륵사지", lat: 35.9483, lon: 126.9576 },
  { name: "남원", region: "전북", tag: "광한루", lat: 35.4164, lon: 127.3904 },
  { name: "보성", region: "전남", tag: "녹차밭", lat: 34.7715, lon: 127.0799 },
  { name: "고흥", region: "전남", tag: "우주 바다", lat: 34.6112, lon: 127.2849 },
  { name: "진주", region: "경남", tag: "남강 야경", lat: 35.18, lon: 128.1076 },
  { name: "창원", region: "경남", tag: "도심 바다", lat: 35.2279, lon: 128.6811 },
  { name: "김해", region: "경남", tag: "가야 여행", lat: 35.2285, lon: 128.8894 },
  { name: "거제", region: "경남", tag: "섬 바다", lat: 34.8806, lon: 128.621 },
  { name: "서귀포", region: "제주", tag: "폭포 바다", lat: 33.2541, lon: 126.5601 },
];

const mapProjection = {
  baseX: 48.18494078,
  baseY: 63.37690848,
  originLon: 127.7,
  originLat: 36,
  lonToX: 17.98656105,
  latToX: -0.3463103,
  lonToY: 1.95218072,
  latToY: -20.48396205,
};

const mapPositions = {
  대전: { x: 37.37, y: 57.08 },
  "충북 영동": { x: 46.9, y: 65.5 },
  영동: { x: 46.9, y: 65.5 },
  부산: { x: 73.65, y: 84.61 },
  제주: { x: 80.2, y: 95.0 },
  서귀포: { x: 83.8, y: 96.8 },
};

const wheel = document.querySelector("#wheel");
const drawButton = document.querySelector("#drawButton");
const clearButton = document.querySelector("#clearButton");
const slotProvince = document.querySelector("#slotProvince");
const slotCity = document.querySelector("#slotCity");
const slotTag = document.querySelector("#slotTag");
const candidateButton = document.querySelector("#candidateButton");
const candidateCount = document.querySelector("#candidateCount");
const candidateDialog = document.querySelector("#candidateDialog");
const candidateList = document.querySelector("#candidateList");
const closeCandidateButton = document.querySelector("#closeCandidateButton");
const destinationName = document.querySelector("#destinationName");
const destinationNote = document.querySelector("#destinationNote");
const resultMeta = document.querySelector("#resultMeta");
const distanceHint = document.querySelector("#distanceHint");
const distanceList = document.querySelector("#distanceList");
const routeLayer = document.querySelector("#routeLayer");
const pinLayer = document.querySelector("#pinLayer");
const targetLayer = document.querySelector("#targetLayer");
const mapStage = document.querySelector("#mapStage");

let currentRotation = 0;
let isDrawing = false;
let tickTimer = null;
let friendStatus = {};
let friendHomeTaunt = {};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function project(lat, lon) {
  const lonOffset = lon - mapProjection.originLon;
  const latOffset = lat - mapProjection.originLat;
  const x = mapProjection.baseX + mapProjection.lonToX * lonOffset + mapProjection.latToX * latOffset;
  const y = mapProjection.baseY + mapProjection.lonToY * lonOffset + mapProjection.latToY * latOffset;
  return {
    x: clamp(x, 6, 94),
    y: clamp(y, 5, 96),
  };
}

function mapPoint(place) {
  const position = mapPositions[place.city] || mapPositions[place.name];
  if (position) return position;
  return project(place.lat, place.lon);
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function distanceKm(from, to) {
  const earthRadiusKm = 6371;
  const dLat = toRad(to.lat - from.lat);
  const dLon = toRad(to.lon - from.lon);
  const lat1 = toRad(from.lat);
  const lat2 = toRad(to.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(earthRadiusKm * c);
}

const routeHubs = {
  "충북 영동": { rail: "영동역", bus: "영동시외버스터미널", road: "영동IC", airport: "청주공항" },
  구미: { rail: "구미역", bus: "구미종합터미널", road: "구미IC", airport: "대구공항" },
  전주: { rail: "전주역", bus: "전주시외버스터미널", road: "전주IC", airport: "군산공항" },
  부천: { rail: "부천역", bus: "부천종합터미널", road: "수도권순환고속도로", airport: "김포공항" },
  대전: { rail: "대전역", bus: "대전복합터미널", road: "대전IC", airport: "청주공항" },
  부산: { rail: "부산역", bus: "부산종합버스터미널", road: "부산IC", airport: "김해공항" },
};

const destinationHubs = {
  서울: "서울역",
  인천: "인천종합터미널",
  수원: "수원역",
  춘천: "춘천역",
  속초: "속초시외버스터미널",
  강릉: "강릉역",
  원주: "원주역",
  태안: "태안터미널",
  보령: "보령종합터미널",
  대전: "대전역",
  청주: "청주시외버스터미널",
  영동: "영동역",
  군산: "군산역",
  전주: "전주역",
  담양: "담양공용버스터미널",
  광주: "광주송정역",
  목포: "목포역",
  여수: "여수엑스포역",
  순천: "순천역",
  대구: "동대구역",
  안동: "안동역",
  구미: "구미역",
  경주: "신경주역",
  포항: "포항역",
  울산: "울산역",
  부산: "부산역",
  통영: "통영종합버스터미널",
  제주: "제주공항",
  가평: "가평역",
  양평: "양평역",
  파주: "파주역",
  강화: "강화터미널",
  홍천: "홍천터미널",
  평창: "평창역",
  정선: "정선터미널",
  양양: "양양종합여객터미널",
  제천: "제천역",
  단양: "단양역",
  천안: "천안아산역",
  공주: "공주역",
  부여: "부여시외버스터미널",
  익산: "익산역",
  남원: "남원역",
  보성: "보성역",
  고흥: "고흥공용버스터미널",
  진주: "진주역",
  창원: "창원중앙역",
  김해: "김해여객터미널",
  거제: "고현버스터미널",
  서귀포: "제주공항",
};

function isHomeground(from, destination) {
  return from.city === destination.name || (from.city === "충북 영동" && destination.name === "영동");
}

function routeSuggestion(from, destination, km) {
  const origin = routeHubs[from.city] || { rail: `${from.city}역`, bus: `${from.city}터미널`, road: from.city, airport: "가까운 공항" };
  const targetHub = destinationHubs[destination.name] || `${destination.name}터미널`;

  if (isHomeground(from, destination)) {
    return {
      mode: "동네 집결",
      path: `${from.city} 안에서 바로 모이기`,
      note: "이번 판은 홈그라운드",
    };
  }

  if (destination.region === "제주") {
    return {
      mode: "항공",
      path: `${from.city} → ${origin.airport} → 제주공항 → ${destination.name}`,
      note: "섬 여행은 비행기로 잡는 게 편함",
    };
  }

  if (km <= 80) {
    return {
      mode: "자차",
      path: `${from.city} → ${origin.road} → ${destination.name}`,
      note: "가까운 편이라 바로 이동 추천",
    };
  }

  if (targetHub.endsWith("역")) {
    return {
      mode: "기차",
      path: `${origin.rail} → ${targetHub} → ${destination.name}`,
      note: "도착 후 택시나 버스로 마무리",
    };
  }

  if (km >= 230) {
    return {
      mode: "기차+버스",
      path: `${origin.rail} → 가까운 환승역 → ${targetHub} → ${destination.name}`,
      note: "장거리라 운전보다 환승 추천",
    };
  }

  return {
    mode: "고속버스",
    path: `${origin.bus} → ${targetHub} → ${destination.name}`,
    note: "터미널 기준으로 잡으면 무난함",
  };
}

function formatTravelTime(totalMinutes) {
  const rounded = Math.max(10, Math.round(totalMinutes / 5) * 5);
  const hours = Math.floor(rounded / 60);
  const minutes = rounded % 60;

  if (hours === 0) return `약 ${minutes}분`;
  if (minutes === 0) return `약 ${hours}시간`;
  return `약 ${hours}시간 ${minutes}분`;
}

function estimateTravelTime(route, km, destination) {
  if (route.mode === "동네 집결") return "약 20분 이내";
  if (route.mode === "항공") {
    const islandTransfer = destination.name === "서귀포" ? 95 : 55;
    return formatTravelTime(145 + islandTransfer);
  }
  if (route.mode === "자차") return formatTravelTime((km / 62) * 60 + 20);
  if (route.mode === "기차") return formatTravelTime((km / 115) * 60 + 55);
  if (route.mode === "기차+버스") return formatTravelTime((km / 85) * 60 + 80);
  return formatTravelTime((km / 72) * 60 + 45);
}

function randomDestination() {
  return destinations[Math.floor(Math.random() * destinations.length)];
}

function setSlot(destination) {
  slotProvince.textContent = destination.region;
  slotCity.textContent = destination.name;
  slotTag.textContent = destination.tag;
}

function setSlotTicking(isTicking) {
  [slotProvince, slotCity, slotTag].forEach((slot) => {
    slot.classList.toggle("is-ticking", isTicking);
  });
}

function renderCandidateList() {
  candidateList.innerHTML = destinations
    .map(
      (destination, index) => `
        <article class="candidate-card">
          <span class="candidate-number">${index + 1}</span>
          <div>
            <strong>${destination.name}</strong>
            <span>${destination.region} · ${destination.tag}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function openCandidateDialog() {
  renderCandidateList();
  if (candidateDialog.showModal) {
    candidateDialog.showModal();
    return;
  }
  candidateDialog.setAttribute("open", "");
}

function closeCandidateDialog() {
  if (candidateDialog.close) {
    candidateDialog.close();
    return;
  }
  candidateDialog.removeAttribute("open");
}

function personLabel(name) {
  const status = friendStatus[name];
  const taunt = status === "farthest" ? '<span class="loser-taunt">ㅋㅋㅅㄱ</span>' : "";
  const homeTaunt = friendHomeTaunt[name] ? '<span class="home-taunt">야르~</span>' : "";
  const icon =
    status === "nearest"
      ? '<span class="person-icon crown" aria-label="가장 가까움">👑</span>'
      : status === "farthest"
        ? '<span class="person-icon sad" aria-label="가장 멂">😢</span>'
        : "";
  return `<span class="person-name ${status || ""}">${name}${homeTaunt}${taunt}${icon}</span>`;
}

function renderOriginPins() {
  pinLayer.innerHTML = "";

  originPlaces.forEach((place) => {
    const point = mapPoint(place);
    const pin = document.createElement("div");
    pin.className = `place-pin ${place.labelClass}`;
    pin.style.setProperty("--x", `${point.x}%`);
    pin.style.setProperty("--y", `${point.y}%`);
    pin.setAttribute("title", `${place.people.join(", ")} - ${place.city}`);

    const dot = document.createElement("span");
    dot.className = "pin-dot";

    const badge = document.createElement("span");
    badge.className = "pin-badge";
    badge.innerHTML = `${place.people.map(personLabel).join(" · ")}<small>${place.city}</small>`;

    pin.append(dot, badge);
    pinLayer.append(pin);
  });
}

function renderEmptyDistance() {
  distanceList.innerHTML = `<div class="distance-empty">아직 뽑힌 여행지가 없습니다.</div>`;
}

function resetGame() {
  if (isDrawing) return;
  friendStatus = {};
  friendHomeTaunt = {};
  routeLayer.innerHTML = "";
  targetLayer.innerHTML = "";
  resultMeta.hidden = true;
  resultMeta.innerHTML = "";
  destinationName.textContent = "아직 추첨 전";
  destinationNote.textContent = "버튼을 누르면 회전판과 슬롯이 같이 돌아갑니다.";
  distanceHint.textContent = "추첨 후 친구별 직선거리가 가까운 순서로 정렬됩니다.";
  slotProvince.textContent = "READY";
  slotCity.textContent = "PICK";
  slotTag.textContent = "GO";
  drawButton.querySelector("span").textContent = "추첨 시작";
  renderOriginPins();
  renderEmptyDistance();
}

function renderRoutes(destination) {
  routeLayer.innerHTML = "";
  const targetPoint = mapPoint(destination);
  const namespace = "http://www.w3.org/2000/svg";

  originPlaces.forEach((place, index) => {
    const point = mapPoint(place);
    const line = document.createElementNS(namespace, "line");
    line.setAttribute("class", "route-line");
    line.setAttribute("x1", point.x);
    line.setAttribute("y1", point.y);
    line.setAttribute("x2", targetPoint.x);
    line.setAttribute("y2", targetPoint.y);
    line.style.animationDelay = `${index * 75}ms`;
    routeLayer.append(line);
  });
}

function renderTarget(destination) {
  const point = mapPoint(destination);
  targetLayer.innerHTML = `
    <div class="target-pin" style="--x:${point.x}%; --y:${point.y}%">
      <span class="target-core"></span>
      <span class="target-badge">${destination.name}<br><small>${destination.region} · ${destination.tag}</small></span>
    </div>
  `;
}

function renderDistances(destination) {
  const rows = originPlaces
    .map((place) => {
      const km = distanceKm(place, destination);
      const route = routeSuggestion(place, destination, km);
      return {
        ...place,
        name: place.people.join(" · "),
        km,
        isHomeground: isHomeground(place, destination),
        route: {
          ...route,
          time: estimateTravelTime(route, km, destination),
        },
      };
    })
    .sort((a, b) => a.km - b.km || a.name.localeCompare(b.name, "ko"));

  const nearest = rows[0];
  const farthest = rows[rows.length - 1];
  const minKm = nearest.km;
  const maxKm = farthest.km;
  const average = Math.round(rows.reduce((total, row) => total + row.km, 0) / rows.length);

  friendStatus = {};
  friendHomeTaunt = {};
  rows.forEach((row) => {
    row.people.forEach((person) => {
      if (row.km === minKm) friendStatus[person] = "nearest";
      if (row.km === maxKm && maxKm !== minKm) friendStatus[person] = "farthest";
      if (row.isHomeground) friendHomeTaunt[person] = true;
    });
  });
  renderOriginPins();

  distanceHint.textContent = `${destination.name}까지 직선거리 기준입니다. 실제 이동거리는 교통편에 따라 달라질 수 있습니다.`;
  resultMeta.hidden = false;
  resultMeta.innerHTML = `
    <span>가장 가까움 ${nearest.name} ${nearest.km}km</span>
    <span>평균 ${average}km</span>
    <span>가장 멂 ${farthest.name} ${farthest.km}km</span>
  `;

  distanceList.innerHTML = rows
    .map((row, index) => {
      const isNearest = row.km === minKm;
      const isFarthest = row.km === maxKm && maxKm !== minKm;
      const farthestClass = isFarthest ? " is-farthest" : "";
      const nearestClass = isNearest ? " is-nearest" : "";
      const statusBadge = isNearest
        ? '<span class="mood-badge crown" aria-label="가장 가까움">👑</span>'
        : isFarthest
          ? '<span class="mood-badge sad" aria-label="가장 멂">😢</span>'
          : "";
      const tauntBadge = isFarthest ? '<span class="loser-taunt">ㅋㅋㅅㄱ</span>' : "";
      const homeTauntBadge = row.isHomeground ? '<span class="home-taunt">야르~</span>' : "";
      return `
        <article class="distance-card${nearestClass}${farthestClass}">
          <span class="distance-rank">${index + 1}</span>
          <div class="distance-main">
            <p class="distance-name">${row.name}${homeTauntBadge}${tauntBadge}${statusBadge}</p>
            <p class="distance-city">${row.city} 출발</p>
            <p class="route-plan">
              <span class="route-mode">추천 ${row.route.mode}</span>
              <span class="route-time">${row.route.time}</span>
              <span>${row.route.path}</span>
              <small>${row.route.note}</small>
            </p>
          </div>
          <strong class="distance-km">${row.km}km</strong>
        </article>
      `;
    })
    .join("");
}

function celebrate() {
  const colors = ["#0f8b8d", "#e95d4f", "#f2bd42", "#4177b7", "#3f8f4a"];
  const stageRect = mapStage.getBoundingClientRect();

  for (let i = 0; i < 34; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--confetti-color", colors[i % colors.length]);
    piece.style.setProperty("--fall-x", `${Math.random() * stageRect.width - stageRect.width / 2}px`);
    piece.style.left = `${stageRect.left + stageRect.width / 2}px`;
    piece.style.top = `${stageRect.top + 22}px`;
    piece.style.animationDelay = `${Math.random() * 0.22}s`;
    document.body.append(piece);
    window.setTimeout(() => piece.remove(), 1100);
  }
}

function finishDraw(destination) {
  window.clearInterval(tickTimer);
  tickTimer = null;
  setSlotTicking(false);
  setSlot(destination);

  destinationName.textContent = destination.name;
  destinationNote.textContent = `${destination.region}의 ${destination.tag} 코스가 당첨됐습니다. 지도에서 각자 출발선을 확인해 보세요.`;

  renderRoutes(destination);
  renderTarget(destination);
  renderDistances(destination);
  celebrate();

  isDrawing = false;
  drawButton.disabled = false;
  drawButton.querySelector("span").textContent = "다시 추첨";
}

function drawTrip() {
  if (isDrawing) return;

  const destination = randomDestination();
  const destinationIndex = destinations.findIndex((item) => item.name === destination.name);
  const selectedAngle = (destinationIndex / destinations.length) * 360;
  const fullTurns = 6 + Math.floor(Math.random() * 3);
  const finishAngle = 360 - selectedAngle + Math.random() * 18;
  const nextRotation = currentRotation + fullTurns * 360 + finishAngle;
  const duration = 3300 + Math.floor(Math.random() * 650);

  isDrawing = true;
  drawButton.disabled = true;
  drawButton.querySelector("span").textContent = "돌아가는 중";
  friendStatus = {};
  friendHomeTaunt = {};
  renderOriginPins();
  targetLayer.innerHTML = "";
  routeLayer.innerHTML = "";
  resultMeta.hidden = true;
  destinationName.textContent = "추첨 중";
  destinationNote.textContent = "회전판과 슬롯이 동시에 후보지를 섞고 있습니다.";

  setSlotTicking(true);
  tickTimer = window.setInterval(() => setSlot(randomDestination()), 78);

  const animation = wheel.animate(
    [
      { transform: `rotate(${currentRotation}deg)` },
      { transform: `rotate(${nextRotation}deg)` },
    ],
    {
      duration,
      easing: "cubic-bezier(0.12, 0.82, 0.14, 1)",
      fill: "forwards",
    },
  );

  currentRotation = nextRotation % 360;
  animation.onfinish = () => {
    wheel.style.transform = `rotate(${currentRotation}deg)`;
    finishDraw(destination);
  };
}

drawButton.addEventListener("click", drawTrip);
clearButton.addEventListener("click", resetGame);
candidateButton.addEventListener("click", openCandidateDialog);
closeCandidateButton.addEventListener("click", closeCandidateDialog);
candidateDialog.addEventListener("click", (event) => {
  if (event.target === candidateDialog) closeCandidateDialog();
});

candidateCount.textContent = `${destinations.length}곳`;
renderCandidateList();
renderOriginPins();
renderEmptyDistance();
