// ================================
// GLOBAL VARIABLES
// ================================
let currentImageIndex = 0;
let galleryImages = [];
let quizAnswered = { 1: false, 2: false, 3: false };
let quizScore = 0;

// ================================
// LOADING SCREEN
// ================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 2000);
});

// ================================
// COUNT-UP TIMER
// ================================
function updateCountup() {
    const startDate = new Date('2022-11-29T00:00:00').getTime();
    const now = new Date().getTime();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountup, 1000);
updateCountup();

// ================================
// CUSTOM CURSOR
// ================================
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
});

// ================================
// SCROLL PROGRESS BAR
// ================================
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('scrollProgress').style.width = progress + '%';
});

// ================================
// STICKY NAVIGATION
// ================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// ================================
// MOBILE MENU TOGGLE
// ================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ================================
// SMOOTH SCROLL
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ================================
// 3D TILT EFFECT (Polaroid)
// ================================
const polaroid = document.querySelector('[data-tilt]');

if (polaroid) {
    polaroid.addEventListener('mousemove', (e) => {
        const rect = polaroid.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        polaroid.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    polaroid.addEventListener('mouseleave', () => {
        polaroid.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
}

// ================================
// TIMELINE - Click to Expand
// ================================
document.querySelectorAll('.timeline-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// ================================
// PHOTO GALLERY
// ================================
const galleryData = [
    { id: 1, caption: 'First date banget ni??', color: '#667eea', image: 'assets/p1.jpeg' },
    { id: 2, caption: 'Keterima Unpad Bareng', color: '#f093fb', image: 'assets/p2.jpeg' },
    { id: 3, caption: 'Duo jukuters sebelum tobat', color: '#fa709a', image: 'assets/p3.jpeg' },
    { id: 4, caption: 'Batik daaayy', color: '#30cfd0', image: 'assets/p4.jpeg' },
    { id: 5, caption: 'Emo boy and girl', color: '#a8edea', image: 'assets/p5.jpeg' },
    { id: 6, caption: 'Wahoooooooooo', color: '#ff9a9e', image: 'assets/p6.jpeg' },
    { id: 7, caption: 'Papa dan Mama', color: '#fbc2eb', image: 'assets/p7.jpeg' },
    { id: 8, caption: 'Hasil karya pelukis handal', color: '#fdcbf1', image: 'assets/p8.jpeg' },
    { id: 9, caption: 'Wishlist utama ni Dufan', color: '#a1c4fd', image: 'assets/p9.jpeg' },
    { id: 10, caption: 'Maimai datee :O', color: '#c2e9fb', image: 'assets/p10.jpeg' },
    { id: 11, caption: 'Nikmat dunia dari game master', color: '#d4fc79', image: 'assets/p11.jpeg' },
    { id: 12, caption: 'Gaya amat billiard di rumah', color: '#96fbc4', image: 'assets/p12.jpeg' },
    { id: 13, caption: 'Makanan favvv nangor butkemmm', color: '#ffecd2', image: 'assets/p13.jpeg' },
    { id: 14, caption: 'Dusun bambu', color: '#fcb69f', image: 'assets/p14.jpeg' },
    { id: 15, caption: 'Duo fish', color: '#ff6e7f', image: 'assets/p15.jpeg' },
    { id: 16, caption: 'Main atv walapun ayang takut atv', color: '#bfe9ff', image: 'assets/p16.jpeg' }
];

function renderGallery(filter = 'All') {
    const galleryGrid = document.getElementById('galleryGrid');
    galleryGrid.innerHTML = '';
    
    galleryImages = galleryData;
    
    galleryData.forEach((item, index) => {
        const rotation = Math.random() * 10 - 5;
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-polaroid" style="transform: rotate(${rotation}deg)">
                <div class="gallery-photo">
                    <img src="${item.image}" alt="${item.caption}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.style.background='linear-gradient(135deg, ${item.color} 0%, ${adjustColor(item.color, -20)} 100%)'; this.parentElement.innerHTML='<div style=\\'display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 24px;\\'>Photo ${item.id}</div>';">
                </div>
                <p class="gallery-caption">${item.caption}</p>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
}

function adjustColor(color, amount) {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

// Initialize gallery
renderGallery();

// ================================
// LIGHTBOX
// ================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const item = galleryImages[currentImageIndex];
    lightboxCaption.textContent = item.caption;
    lightboxImg.src = item.image;
    lightboxImg.alt = item.caption;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxContent();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxContent();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextImage);
lightboxPrev.addEventListener('click', prevImage);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
});

// Close on backdrop click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// ================================
// STICKY NOTES - Flip Effect
// ================================
document.querySelectorAll('.sticky-note').forEach(note => {
    note.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});

// ================================
// LOVE LETTER - Envelope Animation
// ================================
const envelopeContainer = document.getElementById('envelopeContainer');
const letterPaper = document.getElementById('letterPaper');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const letterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                envelopeContainer.classList.add('opened');
            }, 300);
        }
    });
}, observerOptions);

if (envelopeContainer) {
    letterObserver.observe(envelopeContainer);
}

// ================================
// MUSIC PLAYER
// ================================
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
const musicText = document.getElementById('musicText');
let isPlaying = false;

musicBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        musicIcon.textContent = '⏸';
        musicText.textContent = 'Pause Song';
        musicBtn.classList.add('playing');
        // In real implementation: audio.play();
    } else {
        musicIcon.textContent = '▶';
        musicText.textContent = 'Play Our Song';
        musicBtn.classList.remove('playing');
        // In real implementation: audio.pause();
    }
});

// ================================
// ANIMATED COUNTERS (Stats)
// ================================
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.stat-number');
            counters.forEach(counter => animateCounter(counter));
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

// ================================
// QUIZ FUNCTIONALITY
// ================================
document.querySelectorAll('.quiz-option').forEach(button => {
    button.addEventListener('click', function() {
        const question = this.dataset.question;
        const isCorrect = this.dataset.answer === 'true';
        
        if (quizAnswered[question]) return;
        
        quizAnswered[question] = true;
        
        if (isCorrect) {
            this.classList.add('correct');
            quizScore++;
            document.getElementById('quizScore').textContent = quizScore;
        } else {
            this.classList.add('wrong');
            // Show correct answer
            this.parentElement.querySelectorAll('.quiz-option').forEach(btn => {
                if (btn.dataset.answer === 'true') {
                    btn.classList.add('correct');
                }
            });
        }
        
        // Disable all options for this question
        this.parentElement.querySelectorAll('.quiz-option').forEach(btn => {
            btn.style.pointerEvents = 'none';
        });
        
        // Check if quiz is complete
        if (Object.values(quizAnswered).every(v => v === true)) {
            setTimeout(() => {
                showConfetti();
            }, 500);
        }
    });
});

// ================================
// CONFETTI EFFECT
// ================================
function showConfetti() {
    const container = document.getElementById('confettiContainer');
    container.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = ['#9b59b6', '#e74c3c', '#3498db', '#f39c12', '#2ecc71'][Math.floor(Math.random() * 5)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(confetti);
    }
    
    setTimeout(() => {
        container.innerHTML = '';
    }, 5000);
}

// ================================
// DRAGGABLE POLAROIDS
// ================================
const draggablePolaroids = document.querySelectorAll('.draggable-polaroid');

draggablePolaroids.forEach(polaroid => {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    
    polaroid.addEventListener('mousedown', dragStart);
    polaroid.addEventListener('touchstart', dragStart);
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);
    
    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('touchend', dragEnd);
    
    function dragStart(e) {
        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - polaroid.offsetLeft;
            initialY = e.touches[0].clientY - polaroid.offsetTop;
        } else {
            initialX = e.clientX - polaroid.offsetLeft;
            initialY = e.clientY - polaroid.offsetTop;
        }
        
        if (e.target === polaroid || polaroid.contains(e.target)) {
            isDragging = true;
            polaroid.style.zIndex = 1000;
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            
            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            
            polaroid.style.left = currentX + 'px';
            polaroid.style.top = currentY + 'px';
        }
    }
    
    function dragEnd() {
        isDragging = false;
    }
});

// ================================
// SCROLL ANIMATIONS (AOS Alternative)
// ================================
const animatedElements = document.querySelectorAll('[data-aos]');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, {
    threshold: 0.1
});

animatedElements.forEach(el => scrollObserver.observe(el));

// ================================
// PARTICLES EFFECT (CSS-based)
// ================================
const particlesContainer = document.querySelector('.particles');
if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = Math.random() * 20 + 10 + 's';
        particlesContainer.appendChild(particle);
    }
}

// ================================
// PARALLAX EFFECT
// ================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ================================
// EASTER EGG - Secret Click
// ================================
let clickCount = 0;
document.querySelector('.hero-title').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 3) {
        alert('💜 You found the secret! I love you 3000! 💜');
        clickCount = 0;
    }
});

// ================================
// PAGE VISIBILITY - Pause animations when tab is hidden
// ================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations
        document.body.style.animationPlayState = 'paused';
    } else {
        // Resume animations
        document.body.style.animationPlayState = 'running';
    }
});

// ================================
// CONSOLE MESSAGE (Easter Egg)
// ================================
console.log('%c💜 3 Years of Us 💜', 'font-size: 24px; color: #9b59b6; font-weight: bold;');
console.log('%cMade with love for our anniversary', 'font-size: 14px; color: #555;');
console.log('%cForever & Always ✨', 'font-size: 16px; color: #e74c3c;');

// ================================
// RESPONSIVE IMAGES (Lazy Loading)
// ================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ================================
// INITIALIZE ON LOAD
// ================================
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Trigger initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

console.log('🎉 Anniversary Website Loaded Successfully!');