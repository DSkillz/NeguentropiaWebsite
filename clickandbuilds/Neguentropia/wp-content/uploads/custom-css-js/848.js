<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
window.document.onload=function(e){}
function fadeIn(element,duration=3000){element.style.display='';element.style.opacity=0;var last=+new Date();var tick=function(){element.style.opacity=+element.style.opacity+(new Date()-last)/duration;last=+new Date();if(+element.style.opacity<1){(window.requestAnimationFrame&&requestAnimationFrame(tick))||setTimeout(tick,16)}};tick()}
document.addEventListener("DOMContentLoaded",(event)=>{fadeIn(document.getElementById('i'),600)})
</script>
<!-- end Simple Custom CSS and JS -->
