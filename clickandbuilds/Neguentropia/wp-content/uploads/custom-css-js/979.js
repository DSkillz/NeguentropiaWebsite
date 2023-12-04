<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function($){$('#signManifest').submit(function(e){e.preventDefault();var $form=$(this);$.ajax({type:'POST',url:'https://neguentropia.org/sign_manifest.php',data:$('#signManifest').serialize(),success:function(response){alert("Success");$('#reservationForm').fadeOut("slow")},error:function(xhr,ajaxOptions,thrownError){alert(xhr.status);alert(thrownError)}});return!1})})
</script>
<!-- end Simple Custom CSS and JS -->
