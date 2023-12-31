// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

// 指定秒後に動作させる
window.setTimeout( animation, 1100 );

const map = L.map('map').setView([35.70579628381622, 139.75185694454206], 6);

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">国土地理院</a> contributors'
}).addTo(map);

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
  options: {
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


L.marker([40.84706, 140.756836],{ icon: pinkIcon }).addTo(map).bindPopup('モンド').openPopup();
L.marker([32.741882375217145, 129.8755789817545],{ icon: pinkIcon }).addTo(map).bindPopup('璃月').openPopup();
L.marker([35.03955444314564, 135.72925382626568],{ icon: pinkIcon }).addTo(map).bindPopup('稲妻').openPopup();
L.marker([35.543750241135456, 134.23650426196167],{ icon: pinkIcon }).addTo(map).bindPopup('スメール').openPopup();
L.marker([26.220869641944454, 127.72006362505604],{ icon: whiteIcon }).addTo(map).bindPopup('フォンテーヌ').openPopup();
L.marker([33.369800221704416, 131.4718443957435],{ icon: whiteIcon }).addTo(map).bindPopup('ナタ').openPopup();
L.marker([43.10256772039619, 141.27275973976438],{ icon: whiteIcon }).addTo(map).bindPopup('スネージナヤ').openPopup();

const circle = L.circle([43.373112, 142.294922], {
  color: 'red', //円の輪郭線の色
  fillColor: '#f03', //円の塗りつぶしの色
  fillOpacity: 0.3, //塗りつぶしの不透明度
  radius: 200000 //半径、メートルで指定
}).addTo(map);

circle.bindPopup("タルタリヤの庭");

// 多角形の表示
const polygon = L.polygon([
  [23.120154, 122.739258],
  [24.467151, 127.749023],
  [32.03602, 131.846924],
  [33.614619, 129.91333]

], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.3
}).addTo(map);

polygon.bindPopup("タルタリヤの行動範囲");



// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);
