// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

// 指定秒後に動作させる
window.setTimeout( animation, 2000 );

var map = L.map('map').setView([35.70579628381622, 139.75185694454206], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      iconUrl: 'images/ico.png',
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });

  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
  pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });


L.marker([35.70579628381622, 139.75185694454206]).addTo(map).bindPopup('モンド').openPopup();
L.marker([32.741882375217145, 129.8755789817545]).addTo(map).bindPopup('璃月').openPopup();
L.marker([35.03955444314564, 135.72925382626568]).addTo(map).bindPopup('稲妻').openPopup();
L.marker([35.543750241135456, 134.23650426196167]).addTo(map).bindPopup('スメール').openPopup();
L.marker([26.220869641944454, 127.72006362505604]).addTo(map).bindPopup('フォンテーヌ').openPopup();
L.marker([33.369800221704416, 131.4718443957435]).addTo(map).bindPopup('ナタ').openPopup();
L.marker([43.10256772039619, 141.27275973976438]).addTo(map).bindPopup('スネージナヤ').openPopup();
