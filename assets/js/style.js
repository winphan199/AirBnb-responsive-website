window.onload = () => {
    sliderBtnClick();
    searchBtnAnimation();
    searchItemFocus();
    midNavbarAnimation();
    headerBarClick();

    // responsive
    let x = window.matchMedia("(max-width: 1128px)");
    responsiveMain(x);
    x.addListener(responsiveMain);
    let y = window.matchMedia("(max-width: 974px)");
    responsiveMain_mobile(y);
    y.addListener(responsiveMain_mobile);
    // x.addListener(sliderBtnClick);
}

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let header = document.getElementById("header");
    let brand = document.getElementsByClassName("header__brand-link")[0];
    let text_list = document.getElementsByClassName("header-navbar__item-link");
    let right_text = document.getElementsByClassName("header-navbar__item-link--s");
    let mid_text = document.getElementsByClassName('header-navbar__item-link--l');
    let search_bar = document.getElementsByClassName("header-search-form")[0];
    let mid_nav = document.getElementsByClassName("header-navbar__list--mid")[0];
    let header_search = document.getElementsByClassName("header-navbar-search")[0];
    let overlay = document.getElementsByClassName("header__overlay")[0];
    let mobileSearch = document.getElementsByClassName("mobile-search")[0];

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.height = "80px";
        header.classList.add("header--no-shadow");
        header.classList.add("header--background-transition");
        brand.style.color = "var(--brand-color)";
        for (const e of text_list) {
            e.style.color = "var(--text-color)";
        }
        for (const e of right_text) {
            e.classList.add("header-navbar__item-link--hover-background");
            e.style.fontWeight = "500";
        }
        for (const e of mid_text) {
            e.classList.add("header-navbar__item--black");
        }
        search_bar.style.boxShadow = "none";
        search_bar.style.setProperty("--scale-x", "0.35294");
        search_bar.style.setProperty("--scale-y", "0.7353");
        search_bar.style.setProperty("--translate-y", "-101px");
        search_bar.style.visibility = "hidden";
        mid_nav.style.setProperty("--scale-x", "0.79547");
        mid_nav.style.setProperty("--translate-y", "-45px");
        mid_nav.style.opacity = "0";
        header_search.style.visibility = "visible";
        header_search.style.setProperty("--scale-x", "1");
        header_search.style.setProperty("--scale-y", "1");
        header_search.style.setProperty("--translate-y", "0px");
        if (overlay.style.display == "block") {
            overlay.click();
        }
        mobileSearch.style.backgroundColor = "#f7f7f7";
    } else {
        header.style.height = "initial";
        header.classList.remove("header--no-shadow");
        header.classList.remove("header--background-transition");
        brand.style.color = "var(--white-color)";
        for (const e of text_list) {
            e.style.color = "var(--white-color)";
        }
        for (const e of right_text) {
            e.classList.remove("header-navbar__item-link--hover-background");
            e.style.fontWeight = "400";
        }
        for (const e of mid_text) {
            e.classList.remove("header-navbar__item--black");
        }
        search_bar.style.boxShadow = "rgb(0 0 0 / 15%) 0px 16px 32px, rgb(0 0 0 / 10%) 0px 3px 8px";
        search_bar.style.setProperty("--scale-x", "1");
        search_bar.style.setProperty("--scale-y", "1");
        search_bar.style.setProperty("--translate-y", "0px");
        search_bar.style.visibility = "initial";
        mid_nav.style.setProperty("--scale-x", "1");
        mid_nav.style.setProperty("--translate-y", "0px");
        mid_nav.style.opacity = "initial";
        header_search.style.visibility = "hidden";
        header_search.style.setProperty("--scale-x", "2.83332");
        header_search.style.setProperty("--scale-y", "1.36");
        header_search.style.setProperty("--translate-y", "48px");
        if (overlay.style.display == "block") {
            overlay.click();

        }
    }
}

// Search button animation
function searchBtnAnimation () {
    let btn = document.getElementsByClassName('header-search-list__item-search-btn')[0];
    let btn_text = document.getElementsByClassName("header-search-list__item-search-text")[0];

    btn.addEventListener('focus',() => {
        btn_text.style.display = 'inline-block';
        btn_text.style.opacity = '1';
        btn.style.width = '129px';
    })
    btn.addEventListener('blur',() => {
        btn_text.style.display = 'none';
        btn_text.style.opacity = '0';
        btn.style.width = '48px';
    })
}

function searchItemFocus() {
    let item_list = document.getElementsByClassName('header-search-list__item');
    let item_text_list = document.getElementsByClassName('header-search-list__item-input');
    let btn = document.getElementsByClassName('header-search-list__item-search-btn')[0];
    let btn_text = document.getElementsByClassName("header-search-list__item-search-text")[0];

    for (let i = 0; i < item_list.length; i++) {
        item_list[i].addEventListener('focus', ()=> {
            item_list[i].classList.add('header-search-list__item--active');

            btn_text.style.display = 'inline-block';
            btn_text.style.opacity = '1';
            btn.style.width = '129px';
        })

        item_list[i].addEventListener('blur', ()=> {
            item_list[i].classList.remove('header-search-list__item--active');

            btn_text.style.display = 'none';
            btn_text.style.opacity = '0';
            btn.style.width = '48px';
        })
    }
    for (let i = 0; i < item_text_list.length; i++) {
        item_text_list[i].addEventListener('focus', ()=> {
            if (item_list[i].classList.contains(`js-${item_text_list[i].id}`)) {
                item_list[i].classList.add('header-search-list__item--active');

                btn_text.style.display = 'inline-block';
                btn_text.style.opacity = '1';
                btn.style.width = '129px';
            }
        })

        item_text_list[i].addEventListener('blur', ()=> {
            if (item_list[i].classList.contains(`js-${item_text_list[i].id}`)) {
                item_list[i].classList.remove('header-search-list__item--active');

                btn_text.style.display = 'none';
                btn_text.style.opacity = '0';
                btn.style.width = '48px';
            }
        })
    }
}

function midNavbarAnimation() {
    let mid_nav = document.querySelectorAll(".header-navbar__list--mid li");
    const quantity = document.querySelector('.quantity-content');
    const exp = document.querySelector('.experience-content');
    const sep = document.querySelectorAll('.header-separator');
    const date = document.querySelectorAll('.header-search-list__item-date');
    let address = document.querySelector('.header-search-list__item-address');
    let current_active = -1;

    mid_nav.forEach((e, i)=> {
        e.addEventListener('click',()=> {
            if (current_active > -1 && mid_nav[current_active].classList.contains('header-navbar__item--active')) {
                mid_nav[current_active].classList.remove('header-navbar__item--active');
            }
            current_active = i;
            mid_nav[current_active].classList.add('header-navbar__item--active');

            if (current_active === 0) {
                if (quantity.style.display !== 'block') {
                    quantity.style.display = 'block';
                    date.forEach(e=>{
                        e.style.display = "block";
                    })
                    sep.forEach(e=>{
                        if (e.style.display === 'none') {
                            e.style.display = 'block';
                        }
                    })
                    exp.style.display = 'none';
                    address.style.flex = '1.7 0 0%';
                }
            }
            else if (current_active === 1) {
                exp.style.display = 'block';
                quantity.style.display = 'none';
                date.forEach(e=>{
                    e.style.display = 'none';
                })
                for (let i = 0; i < sep.length - 1; i++) {
                    sep[i].style.display = 'none';
                }
                address.style.flex = '0.85 0 0%';
            }
        })
    })
    mid_nav[0].click();
}

function headerBarClick() {
    let btn = document.getElementsByClassName("header-navbar-search")[0];
    let header = document.getElementById("header");
    let search_bar = document.getElementsByClassName("header-search-form")[0];
    let mid_nav = document.getElementsByClassName("header-navbar__list--mid")[0];
    let overlay = document.getElementsByClassName("header__overlay")[0];

    btn.addEventListener("click", () => {
        header.classList.add("header--height-transition");
        search_bar.style.setProperty("--scale-x", "1");
        search_bar.style.setProperty("--scale-y", "1");
        search_bar.style.setProperty("--translate-y", "0px");
        search_bar.style.visibility = "initial";
        btn.style.visibility = "hidden";
        btn.style.setProperty("--scale-x", "2.83332");
        btn.style.setProperty("--scale-y", "1.36");
        btn.style.setProperty("--translate-y", "48px");
        mid_nav.style.setProperty("--scale-x", "1");
        mid_nav.style.setProperty("--translate-y", "0px");
        mid_nav.style.opacity = "initial";
        overlay.style.display = "block";
    })
    overlay.addEventListener("click", ()=> {
        header.classList.remove("header--height-transition");
        search_bar.style.setProperty("--scale-x", "0.35294");
        search_bar.style.setProperty("--scale-y", "0.7353");
        search_bar.style.setProperty("--translate-y", "-101px");
        search_bar.style.visibility = "hidden";
        btn.style.visibility = "visible";
        btn.style.setProperty("--scale-x", "1");
        btn.style.setProperty("--scale-y", "1");
        btn.style.setProperty("--translate-y", "0px");
        mid_nav.style.setProperty("--scale-x", "0.79547");
        mid_nav.style.setProperty("--translate-y", "-45px");
        mid_nav.style.opacity = "0";
        overlay.style.display = "none";
    })
}

function sliderBtnClick() {
    let pre_btn = document.getElementsByClassName("previous-btn")[0];
    let aft_btn = document.getElementsByClassName("after-btn")[0];
    let slider = document.getElementsByClassName("experience-limit-row")[0];
    let slider_item = document.getElementsByClassName("js-slider-item");

    pre_btn.addEventListener("click", ()=> {
        let total_width = slider_item[0].clientWidth * 4;
        if (slider.clientWidth + 2 < total_width) {
            slider.style.transform = `translateX(0%)`;
            aft_btn.style.visibility = "visible";
            pre_btn.style.visibility = "hidden";
        }
    })
    aft_btn.addEventListener("click", ()=>{
        let total_width = slider_item[0].clientWidth * 4;
        if (slider.clientWidth + 2 < total_width) {
            slider.style.transform = `translateX(-33.3333%)`;
            pre_btn.style.visibility = "visible";
            aft_btn.style.visibility = "hidden";
        }
    })
}
