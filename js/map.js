document.addEventListener('DOMContentLoaded', function() {

  let mymap = L.map('mapid').setView([39.03717020611688, 58.897160268679954], 3);

  let cartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, © CARTO'
  }).addTo(mymap);

// London office
  L.marker([51.51219917380306, -0.08475550242526746]).addTo(mymap).bindPopup("MARCOSO London");

// Duabia office
  L.marker([25.0693006591998, 55.143657392430214]).addTo(mymap).bindPopup("MARCOSO Dubai");

// egypt office
  L.marker([30.052868823972744, 31.192780012135405]).addTo(mymap).bindPopup("MARCOSO Egypt");

// Bangladesh office
  L.marker([23.78305421569957, 90.39803296965732]).addTo(mymap).bindPopup("MARCOSO Bangladesh");
});
