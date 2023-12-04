<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function($){$('#signManifest').submit(function(e){e.preventDefault();console.log($('#signManifest').serialize());$.ajax({type:'POST',url:'https://neguentropia.org/sign_manifest.php',data:$('#signManifest').serialize(),success:function(response){alert("Success");$('#signManifest').fadeOut("slow")},error:function(xhr,ajaxOptions,thrownError){alert('Fonctionnalité en cours de développement - Erreur de la requête status: '+xhr.status);alert(thrownError)}});return!1})})
</script>
<!-- end Simple Custom CSS and JS -->
