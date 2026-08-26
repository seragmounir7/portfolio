const character = document.getElementById("character");
const head = document.querySelector(".head");
// const legs = document.querySelector(".legs");
const laptop = document.querySelector(".laptop");

let idleState = "smiley";
let playing = false;

const idleImages = {
    smiley: "character/idle/smiley.png",
    focus: "character/idle/focus.png"
};

const transitions = {
    head: {
        hover: {
            smiley: { gif: "character/hover-on-head-smiley.gif", duration: 400 },
            // focus: { gif: "character/hover-on-head-focus.gif", duration: 550 }
        },
        // click: {
        //     smiley: { gif: "character/click-on-head-smiley.gif", duration: 700 },
        //     focus: { gif: "character/click-on-head-focus.gif", duration: 700 }
        // }
    },

    // legs: {
    //     hover: {
    //         smiley: { gif: "character/hover-on-leg-smiley.gif", duration: 520 },
    //         focus: { gif: "character/hover-on-leg-focus.gif", duration: 500 }
    //     },
    //     click: {
    //         smiley: { gif: "character/click-on-leg-smiley.gif", duration: 650 },
    //         focus: { gif: "character/click-on-leg-focus.gif", duration: 650 }
    //     }
    // },

    laptop: {
        hover: {
            smiley: { gif: "character/hover-on-laptop-smiley.gif", duration: 3180 },
            // focus: { gif: "character/hover-on-laptop-focus.gif", duration: 3000 }
        },
        // click: {
        //     smiley: { gif: "character/click-on-laptop-smiley.gif", duration: 1200 },
        //     focus: { gif: "character/click-on-laptop-focus.gif", duration: 1200 }
        // }
    },

    // switch: {
    //     smiley: { gif: "character/smiley-to-focus.gif", duration: 700 },
    //     focus: { gif: "character/focus-to-smiley.gif", duration: 700 }
    // }
};

function play(animation) {
    if (playing) return;

    playing = true;

    character.src = animation.gif + "?" + Date.now();

    setTimeout(() => {
        character.src = idleImages[idleState];
        playing = false;
    }, animation.duration);
}

// Head
head.addEventListener("mouseenter", () => {
    play(transitions.head.hover[idleState]);
});

head.addEventListener("click", () => {
    play(transitions.head.click[idleState]);
});

// Legs
// legs.addEventListener("mouseenter", () => {
//     play(transitions.legs.hover[idleState]);
// });

// legs.addEventListener("click", () => {
//     play(transitions.legs.click[idleState]);
// });

// Laptop
laptop.addEventListener("mouseenter", () => {
    play(transitions.laptop.hover[idleState]);
});

laptop.addEventListener("click", () => {
    play(transitions.laptop.click[idleState]);
});

// Switch idle state with Space
document.addEventListener("keydown", (e) => {
    if (e.key === " " && !playing) {
        const animation = transitions.switch[idleState];

        play(animation);

        idleState = idleState === "smiley" ? "focus" : "smiley";
    }
});

/* ---------- Tabs ---------- */

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const target = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(target).classList.add("active");

    });

});

/* ---------- Copy contact info ---------- */

document.querySelectorAll(".contact-card .copy").forEach(icon => {

    icon.addEventListener("click", () => {

        const text = icon.previousElementSibling.textContent.trim();

        navigator.clipboard.writeText(text).then(() => {

            icon.classList.remove("fa-copy");
            icon.classList.add("fa-check");

            setTimeout(() => {
                icon.classList.remove("fa-check");
                icon.classList.add("fa-copy");
            }, 1200);

        });

    });

});

/* ---------- CTA button ---------- */

document.querySelector(".cta").addEventListener("click", () => {

    document.querySelector('.tab[data-tab="contact"]').click();

    document.querySelector(".right-panel")
        .scrollIntoView({ behavior: "smooth", block: "center" });

});