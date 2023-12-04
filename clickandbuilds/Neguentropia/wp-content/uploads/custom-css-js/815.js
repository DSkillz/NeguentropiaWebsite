<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">

doc = jQuery(document);
winH = jQuery(window).height();
winW = jQuery(window).width();

doc.ready(function() {
    console.log( "ready!" );
	query = document.getElementById("gt_float_wrapper");
	h = (winH + 160 - (0.9 * winH)).toString() + 'px';
	console.log("static - winH only: " + winH + "  |  " + "h winH calculé: " + h);
	query.style.top = h;
	
	h = (winW * 0.88 - 80).toString() + 'px';
	console.log("static - winW only: " + winW + "  |  " + "h winW calculé: " + h);
	query.style.left = h;
	
});

addEventListener("resize", (event) => {
						winH = jQuery(window).height();
						winW = jQuery(window).width();
						h = (winH + 160 - (0.9 * winH)).toString() + 'px';
						console.log("dynamic - winH only: " + winH + "  |  " + "h winH calculé: " + h);
						query.style.top = h;
	
						h = (winW * 0.88 - 80).toString() + 'px';
						console.log("dynamic - winW only: " + winW + "  |  " + "h winW calculé: " + h);
						query.style.left = h;
					}
				);


</script>
<!-- end Simple Custom CSS and JS -->
