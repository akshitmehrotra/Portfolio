function hideLoad() {
  setTimeout(
    function() {
      document.getElementById('loading').style.display='none';
      document.getElementById('webpage').style.display='inline-block';
    }, 2000);
    
}

document.addEventListener("load", hideLoad());

function changeDef(){
  document.getElementById("projectselimage1").style.filer = "blur(8px)";
}