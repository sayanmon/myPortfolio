window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home").classList.add("active");
    document.querySelector(".loader").classList.add("fade_out");
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 600);
});

const navbar = document.querySelector(".nav_toggle");

navbar.addEventListener("click", () => {
    hide();
    toggle_nav();
    document.body.classList.toggle("hide_scroll");
});

function hide() {
    document.querySelector("section.active").classList.toggle("fade_out");
}

function toggle_nav() {
    document.querySelector(".header").classList.toggle("active");
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("link_item") && event.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navbar.classList.add("hide");
        if (event.target.classList.contains("nav_item")) {
            toggle_nav();
        }
        else {
            hide();
            document.body.classList.add("hide_scroll");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade_out");
            document.querySelector(event.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide_scroll");
            navbar.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 600);
    }
});

const tabs = document.querySelector(".about_tabs");
const aboutSec = document.querySelector(".about");

tabs.addEventListener("click", (event) => {
    if (event.target.classList.contains("tabs_item") && !event.target.classList.contains("active")) {
        tabs.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const target = event.target.getAttribute("data_target");
        aboutSec.querySelector(".tabs_content.active").classList.remove("active");
        aboutSec.querySelector(target).classList.add("active");
    }
});

function popup() {
    document.querySelector(".popup").classList.toggle("open");
    document.body.classList.toggle("hide_scroll")
    document.querySelector(".main").classList.toggle("fade_out");
};

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("view_proj")) {
        popup();
        document.querySelector(".popup").scrollTo(0, 0);
        detail(event.target.parentElement);
    }
});

document.querySelector(".pp_close").addEventListener("click", popup);

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("pp_inner")) {
        popup();
    }
});

function detail(port_item) {
    document.querySelector(".pp_thum img").src =
        port_item.querySelector(".portfolio_thumb img").src;

    document.querySelector(".pp_header h3").innerHTML =
        port_item.querySelector(".port_title").innerHTML;

    document.querySelector(".pp_body").innerHTML =
        port_item.querySelector(".detail_proj").innerHTML;
};