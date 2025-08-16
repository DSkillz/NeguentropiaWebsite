jQuery(document).on('submit', '#signManifest', function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    jQuery.ajax({
        type: "POST",
        url: "sign_manifest_manager.php",
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {
            jQuery("#thankYouMessage").html("<h2>Merci pour votre signature !</h2>");
            jQuery("#signManifest").hide();
        },
        error: function (xhr, status, error) {
            jQuery("#thankYouMessage").html("<h2>Une erreur s'est produite : " + error + ". Veuillez réessayer plus tard.</h2>");
        }
    });
});