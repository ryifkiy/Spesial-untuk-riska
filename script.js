/* =========================
   DATA FOTO
========================= */

const photos = [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto6.jpg"
];

/* =========================
   ELEMENTS
========================= */

const startBtn = document.getElementById("startBtn");
const loadingScreen = document.getElementById("loadingScreen");
const bgMusic = document.getElementById("bgMusic");

const slideImage = document.getElementById("slideImage");

const envelope = document.getElementById("openLetter");
const letterContent = document.getElementById("letterContent");

const giftButton = document.getElementById("giftButton");
const voucherPopup = document.getElementById("voucherPopup");
const closePopup = document.querySelector(".close-popup");

const forgiveBtn = document.getElementById("forgiveBtn");

const customAlert = document.getElementById("customAlert");
const alertText = document.getElementById("alertText");
const closeAlert = document.getElementById("closeAlert");

const heartsContainer = document.getElementById("heartsContainer");
const petalsContainer = document.getElementById("petals");

/* =========================
   OPEN WEBSITE
========================= */

startBtn.addEventListener("click", () => {

    loadingScreen.style.opacity = "0";

    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 700);

    bgMusic.play().catch(() => {
        console.log("Autoplay diblokir browser.");
    });

});

/* =========================
   COUNTDOWN
========================= */

function updateCounter() {

    const today = new Date();

    let startDate = new Date(
        today.getFullYear(),
        0,
        10
    );

    if (today < startDate) {
        startDate = new Date(
            today.getFullYear() - 1,
            0,
            10
        );
    }

    const diff = today - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    const months = Math.floor(days / 30);

    const weeks = Math.floor(days / 7);

    const counter = document.getElementById("counter");

    counter.innerHTML = `
        <div class="time-box">
            <h3>${days}</h3>
            <span>Hari</span>
        </div>

        <div class="time-box">
            <h3>${weeks}</h3>
            <span>Minggu</span>
        </div>

        <div class="time-box">
            <h3>${months}</h3>
            <span>Bulan</span>
        </div>
    `;
}

updateCounter();

/* =========================
   SLIDESHOW
========================= */

let currentPhoto = 0;

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    slideImage.style.opacity = "0";

    setTimeout(() => {

        slideImage.src = photos[currentPhoto];

        slideImage.style.opacity = "1";

    }, 300);
}

setInterval(nextPhoto, 3500);

/* =========================
   OPEN LETTER
========================= */

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letterContent.classList.add("show");

    letterContent.scrollIntoView({
        behavior: "smooth"
    });

});

/* =========================
   CUSTOM ALERT
========================= */

function showAnswer(message) {

    alertText.textContent = message;

    customAlert.style.display = "flex";
}

closeAlert.addEventListener("click", () => {

    customAlert.style.display = "none";

});

/* =========================
   POPUP VOUCHER
========================= */

giftButton.addEventListener("click", () => {

    voucherPopup.style.display = "flex";

});

closePopup.addEventListener("click", () => {

    voucherPopup.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === voucherPopup) {

        voucherPopup.style.display = "none";
    }

});

/* =========================
   HEART RAIN
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 2) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function heartExplosion() {

    for (let i = 0; i < 80; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }
}

/* =========================
   FORGIVE BUTTON
========================= */

forgiveBtn.addEventListener("click", () => {

    heartExplosion();

    setTimeout(() => {

        customAlert.style.display = "flex";

        alertText.innerHTML =
            "💛 Terima kasih Riska.<br><br>Iky akan berusaha menjadi lebih baik lagi untuk Riska. ❤️";

    }, 1000);

});

/* =========================
   FLOWERS
========================= */

const flowers = [
    "🌷",
    "🌼",
    "🌻",
    "💛"
];

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    petal.style.opacity =
        0.4 + Math.random();

    petal.style.fontSize =
        (18 + Math.random() * 25) + "px";

    petalsContainer.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 17000);
}

setInterval(createPetal, 500);

/* =========================
   AUTO PETALS
========================= */

for (let i = 0; i < 25; i++) {

    setTimeout(() => {

        createPetal();

    }, i * 250);

}

/* =========================
   SECTION ANIMATION
========================= */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }

        });

    },

    {
        threshold: 0.15
    }

);

document
.querySelectorAll(
".gallery, .letter, .questions, .ticket-section, .voucher-section, .forgive-section, .ending"
)
.forEach(section => {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(60px)";

    section.style.transition =
        "all .8s ease";

    observer.observe(section);

});

/* =========================
   EXTRA SPARKLES
========================= */

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
        Math.random() * window.innerWidth + "px";

    sparkle.style.top =
        Math.random() * window.innerHeight + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = ".8";

    sparkle.style.zIndex = "1";

    sparkle.style.fontSize =
        (10 + Math.random() * 15) + "px";

    document.body.appendChild(sparkle);

    sparkle.animate(

        [
            {
                opacity: 0
            },
            {
                opacity: 1
            },
            {
                opacity: 0
            }
        ],

        {
            duration: 2500
        }

    );

    setTimeout(() => {

        sparkle.remove();

    }, 2500);
}

setInterval(createSparkle, 1200);

/* =========================
   GREETING
========================= */

window.addEventListener("load", () => {

    console.log(
        "Website untuk Riska Rahmawati siap 💛"
    );

});

/* =========================
   PREVENT DOUBLE TAP ZOOM
========================= */

let lastTouchEnd = 0;

document.addEventListener(
    "touchend",
    function (event) {

        const now = Date.now();

        if (
            now - lastTouchEnd <= 300
        ) {
            event.preventDefault();
        }

        lastTouchEnd = now;
    },
    false
);

/* =========================
   END
========================= */