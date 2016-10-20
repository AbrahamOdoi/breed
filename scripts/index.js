﻿(function() {

	document.addEventListener('deviceready', onDeviceReady.bind(this), false);
	var pictureSource;
	var destinationType;
	function onDeviceReady() {
		pictureSource = navigator.camera.PictureSourceType;
		destinationType = navigator.camera.DestinationType;

		document.getElementById("capturePhoto").onclick = function() {
			navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
				quality : 50,

				destinationType : destinationType.DATA_URL
			});
		}

		document.getElementById("geolocationdata").addEventListener("click", function() {
			navigator.geolocation.getCurrentPosition(onPositionSuccess, onPositionError, {
				enableHighAccuracy : true
			});
		});

	};

	function onPhotoDataSuccess(imageData) {

		var smallImage = document.getElementById('smallImage');

		smallImage.style.display = 'block';

		smallImage.src = "data:image/jpeg;base64," + imageData;

	}

	function onFail(message) {

		alert('Failed because: ' + message);

	}

	var onPositionSuccess = function(position) {
		alert('Latitude: ' + position.coords.latitude + '\n' + 'Longitude: ' + position.coords.longitude + '\n');
	};

	function onPositionError(error) {
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	}

})();

