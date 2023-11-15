function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.693468631466686, lng: -87.67967437837038 },
    zoom: 12,
  });

  var marker = new google.maps.Marker({
    position: { lat: 41.693468631466686, lng: -87.67967437837038 },
    map: map,
  });

  var infowindow = new google.maps.InfoWindow({
    content: "This is where I went to school",
  });
  infowindow.open(map, marker);

  const icons = {
    gardencenter: {
      icon: "media/garden_center_picture.jpg",
    },
  };

  var features = [
    { position: { lat: 41.95, lng: -87.72 }, type: "gardencenter" },
  ];

  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}

google.maps.event.addDomListener(window, 'load', initMap);
