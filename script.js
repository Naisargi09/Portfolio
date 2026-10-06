// ================= NAVBAR ================= 
let links = document.querySelectorAll(".nav-link"); 
links.forEach(function(link) { 
    link.onclick = function() { 
        let menu = document.querySelector(".navbar-collapse"); 
        if (menu.classList.contains("show")) { 
            new bootstrap.Collapse(menu).hide(); 
        } 
    }; 
}); 
// ================= SCROLL ANIMATION ================= 
let cards = document.querySelectorAll( 
    ".project-card, .certificate-card, .skill-card" 
); 
window.onscroll = function() { 
    cards.forEach(function(card) { 
        let position = card.getBoundingClientRect().top; 
        if (position < window.innerHeight - 100) { 
            card.style.opacity = "1"; 
            card.style.transform = "translateY(0)"; 
        } 
    }); 
}; 
// Initial card style 
cards.forEach(function(card) { 
    card.style.opacity = "0"; 
    card.style.transform = "translateY(30px)"; 
    card.style.transition = "0.6s"; 
});