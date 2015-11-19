var mapCanvas = document.querySelector(".main-footer .map");
function initialize() {
	var centerMap = new google.maps.LatLng(59.939647, 30.316784);
	var initZoom = 16;
	var mapOptions = {
		center: centerMap,
		zoom: initZoom,
		maxZoom: 18,
		minZoom: 8,
		scrollwheel: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
	var image = {
		url: "img/pinlogo.png",
		anchor: new google.maps.Point(51, 190)
	};
	var markPos = new google.maps.LatLng(59.9385782, 30.3229183);
	var marker = new google.maps.Marker({
		position: markPos,
		icon: image,
		map: map
	});
};
google.maps.event.addDomListener(window, "load", initialize);
mapCanvas.classList.add("map-google");
