$(function(){
	$('.collapse').on('show.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-minus-circle');
	});

	$('.collapse').on('hide.bs.collapse', function(){
		$(this).prev().find('.fa').removeClass().addClass('fa fa-plus-circle');
	});

	$('#myForm').validator({
		feedback: {
			success: 'fa fa-check-circle',
			error: 'fa fa-times-circle'
		}
	});

	$('.form-select').select2({
		minimumResultsForSearch: Infinity,
	});

	new WOW({
		offset: 100
	}).init();
	
	function initialize() {
    var myLatlng = new google.maps.LatLng(-33.870643,151.204910),
    mapOptions = {
        zoom: 11,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        }
	var map = new google.maps.Map(document.getElementById('map'), mapOptions),
	contentString = 'We meet here - 22 Market Street',
	infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 500
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});