<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
jQuery(document).ready(function($){$('#signManifest').submit(function(e){e.preventDefault();console.log('request sended');console.log('Object sended: '+$('#signManifest').serialize());if($('#inputName')[0].value===''){alert("Veuillez saisir un nom s'il vous plaît.")}
if($('#inputFirstName')[0].value===''){alert("Veuillez saisir un prénom s'il vous plaît.")}
if($('#inputExpert')[0].value===''){alert("Veuillez saisir votre expertise s'il vous plaît.")}
if($('#inputLabo')[0].value===''){alert("Veuillez saisir votre labo / entreprise s'il vous plaît.")}
if($('#inputLabo')[0].value===''){alert("Veuillez saisir votre lieu d'exercice s'il vous plaît.")}
if($('#inputLocation')[0].value===''){alert("Veuillez saisir votre lieu d'exercice s'il vous plaît.")}
if($('#inputEmail')[0].value===''){alert("Veuillez saisir votre email s'il vous plaît.")}
if($('#inputName')[0].value===''&&$('#inputFirstName')[0].value===''&&$('#inputExpert')[0].value===''&&$('#inputLabo')[0].value===''&&$('#inputLocation')[0].value===''&&$('#inputEmail')[0].value===''){$.ajax({type:'POST',url:'https://neguentropia.org/sign_manifest.php',data:$('#signManifest').serialize(),success:function(response){alert("Success");$('#signManifest').fadeOut("slow")},error:function(xhr,ajaxOptions,thrownError){alert('Fonctionnalité en cours de développement - Erreur de la requête status: '+xhr.status);alert(thrownError)}});return!1})})}
</script>
<!-- end Simple Custom CSS and JS -->
