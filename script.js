function hideLoad() {
  setTimeout(
    function() {
      document.getElementById('loading').style.display='none';
      document.getElementById('webpage').style.display='inline-block';
    }, 2000
  );
}

document.addEventListener("load", hideLoad());

function changeDef(event) {
  if (event) {
    event.currentTarget.querySelector('.projectselimage').style.filter = "blur(8px)";
  } else {
    document.getElementById("projectselimage1").style.filter = "blur(8px)";
  }
}

// Add hover effects for experience cards
document.addEventListener('DOMContentLoaded', function() {
  const experienceCards = document.querySelectorAll('.experiencecard');
  
  experienceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});