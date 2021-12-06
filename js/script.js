document.addEventListener('DOMContentLoaded', function() {
    //header

    //Scroll

    document.querySelectorAll('a[href^="#"').forEach(link => {

        link.addEventListener('click', function(e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    //Bottom Menu
    const headerBottomlist = document.querySelectorAll('.menu-bottom__btn');
    headerBottomlist.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            let button = this;
            if (e.target.classList.contains('active')) {
                e.currentTarget.classList.remove('active')
            } else {
                e.target.classList.add('active')
                headerBottomlist.forEach(el => {
                    if (el != button) {
                        el.classList.remove('active');
                    }
                });
            }
        })
    });
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('menu-bottom__btn') && !event.target.classList.contains('header-bottom__scroll')) {
            headerBottomlist.forEach(function(e) {
                e.classList.remove('active')
            })
        }
    })

    //burger
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#menu').classList.add('active');

        document.querySelector('#burger__close').addEventListener('click', function() {
            document.querySelector('#menu').classList.remove('active');
        })
    })

    //hero
    const swiperHero = new Swiper('.hero__swiper', {
        effect: 'fade',
        autoplay: {
            delay: 4000,
        },
        speed: 1000,
    });


    //Gallery

    // --------Select
    const element = document.querySelector('#filter');
    const choices = new Choices(element, {
        itemSelectText: '',
        searchEnabled: false,
        shouldSort: false,
    });
    // --------Slider
    const swiperGallery = new Swiper('.slider-gallery__slider-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: true,
            observer: true,
            resizeObserver: true,
            centeredSides: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: {
                    rows: 1,
                },
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10,
                grid: {
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
                grid: {
                    rows: 2,
                },
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
                grid: {
                    rows: 2,
                },
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50,
                grid: {
                    rows: 2,
                }
            },
            1640: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
                grid: {
                    rows: 2,
                },
            }
        }
    });


    //Catalog

    // -------- Tabs
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tabs__content').forEach(function(tabContent) {
                tabContent.classList.remove('tabs__content-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('tabs__content-active');

            document.querySelectorAll('.tabs__btn').forEach(function(delClass) {
                delClass.classList.remove('tabs__btn-active')
            });
            this.classList.add('tabs__btn-active');
        });
    });


    // --------Accordion
    $(function() {
        $(".accordion").accordion({
            heightStyle: "content",
            collapsible: true,
        });
    });

    document.querySelectorAll('.accordion__btn').forEach(function(accordionBtn) {
        accordionBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.painter__descr').forEach(function(painterContent) {
                painterContent.classList.remove('painter-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('painter-active')
        });
    });
    const accordionButton = document.querySelectorAll('button.accordion__btn');
    for (let button of accordionButton) {
        button.addEventListener('click', function() {
            setTimeout(function() {
                document.querySelector('.painter-active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 300)
        });
    };


    //Events
    const mediaQuery = window.matchMedia('(max-width: 991px');

    function handleTabletChange(e) {
        if (e.matches) {
            document.querySelector('.event-card3').classList.add('hidden');
        }
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery);

    const mediaQuery480 = window.matchMedia('(max-width: 480px)');

    function handleTabletChange480(e) {
        if (e.matches) {
            document.querySelector('.events__list').classList.add('swiper-wrapper');
            document.querySelectorAll('.events__item').forEach(function(allCard) {
                allCard.classList.add('swiper-slide');
            })
        }
    }
    mediaQuery480.addListener(handleTabletChange480);
    handleTabletChange480(mediaQuery480);

    const button = document.querySelector('.section-event__btn');
    button.addEventListener('click', function() {
        document.querySelectorAll('.hidden').forEach(function(emerging) {
            emerging.classList.remove('hidden')
        })
        this.classList.add('hidden')
    })

    const swiperEvents = new Swiper('.events__wrapper', {
        pagination: {
            el: '.events__pagination',
            type: 'bullets',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    // Editions

    // Checkbox


    const defaultCheckbox = document.querySelector('.default-checkbox');
    if (defaultCheckbox.classList.contains('none')) {
        defaultCheckbox.classList.remove('none')
    };
    const inputDefaultCheckbox = defaultCheckbox.querySelector('.checkbox__input');
    inputDefaultCheckbox.setAttribute('checked', true);

    const categories = document.querySelector('.checkbox__title');
    const itemCheckbox = document.querySelectorAll('.checkbox__item');
    const checkboxAll = document.querySelectorAll('.checkbox__input');
    let flag = true;
    let firstCheck = false;

    defaultCheckbox.classList.add('check-on');
    checkboxAll.forEach(check => {
        check.addEventListener('click', () => {
            if (check.checked) {
                check.closest('.checkbox__item').classList.add('check-on');
            } else {
                check.closest('.checkbox__item').classList.remove('check-on');
                if (flag) {
                    check.closest('.checkbox__item').classList.add('none');
                }
            }
        })
    });
    categories.addEventListener('click', () => {
        categories.classList.toggle('on-click');
        itemCheckbox.forEach(item => {
            if ((!item.classList.contains('none')) && (!item.classList.contains('check-on'))) {
                item.classList.add('none')
            } else {
                item.classList.remove('none')
            }
        });
        flag = !flag;
        if (!firstCheck) {
            defaultCheckbox.classList.remove('none');
            firstCheck = true;
        }
    });

    //Slider

    const swiperEditions = new Swiper('.slider-edition__container', {
        spaceBetween: 50,
        pagination: {
            el: '.swiper-pagination-edition',
            type: 'fraction',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            321: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            481: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 34
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 34
            },
            1024: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 48
            }
        },
    });

    const mediaQueryPublications320 = window.matchMedia('(max-width: 320px)');

    function handleTabletChangePublications320(e) {
        if (e.matches) {
            swiperEditions.destroy();
            document.querySelector('.slider-edition__swiper-wrapper').classList.remove('swiper-wrapper');
        }
    }
    mediaQueryPublications320.addListener(handleTabletChangePublications320);
    handleTabletChangePublications320(mediaQueryPublications320);


    //Projects
    tippy('#marker1', {
        content: 'Пример современных тенденций - современная методология разработки',
        interactive: true,
        trigger: 'click',
        maxWidth: 270,
    });
    tippy('#marker2', {
        content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
        interactive: true,
        trigger: 'click',
        maxWidth: 270,
    });
    tippy('#marker3', {
        content: 'В стремлении повысить качество',
        interactive: true,
        trigger: 'click',
        maxWidth: 270,
    });

    const swiperProjects = new Swiper('.projects__swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1
            },
            480: {
                slidesPerView: 1,
                spaceBetween: 0,
                slidesPerGroup: 1
            },
            485: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 50,
                slidesPerGroup: 2
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 50,
                slidesPerGroup: 3,
                loopFillGroupWithBlank: true,
            }
        }
    })

    //Contacts
    const selector = document.querySelector("input[type='tel']");

    const im = new Inputmask("+7(999) 999-99-99");
    im.mask(selector);

    const validator = new JustValidate('.form__wrap', {
        colorWrong: '#d11616',
        rules: {
            name: {
                required: true
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            }
        },
        messages: {
            name: 'Как вас зовут?',
            tel: 'Укажите ваш телефон'
        }
    });

    //Map

    ymaps.ready(init);

    function init() {

        var myMap = new ymaps.Map("map", {
            center: [55.760221, 37.618561],
            zoom: 13
        });

        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
            balloonContentHeader: "Шоурум №4",
            balloonContentBody: "Леонтьевский переулок, дом 5/1",
        }, {

            iconLayout: 'default#image',
            iconImageHref: 'img/icon/map.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-3, -12]
        });


        myMap.geoObjects.add(myPlacemark);

    }

    /*const cards = document.querySelectorAll('.card');
    cards.forEach(i => {
        i.addEventListener('click', () => {
            const img = i.querySelector('.card__img');
            const description = i.getAttribute('data-desc');
            const src = img.getAttribute('src');
            const popup = document.querySelector('.popup');
            popup.classList.add('popup_active');
            const popupImage = popup.querySelector('.popup_content_image')
            const popupDescription = popup.querySelector('.popup_content_description')
            popupImage.setAttribute('src', src);
            popupDescription.innerHTML = description;
        });
    })*/
    /*const cards = document.querySelectorAll('.card');
    cards.forEach(i => {
        i.addEventListener('click', () => {
            const popupBox = document.querySelector('.popup__box');
            popupBox.classList.add('popup__box-active');
        })
    })
    const closePopup = document.querySelectorAll('popup__btn');
    closePopup.forEach(c => {
        c.addEventListener('click', () => {
            popupBox.classList.remove('popup__box-active');
        })
    })*/
    document.querySelectorAll('.card').forEach(p => {
        p.addEventListener('click', (q) => {
            const path = q.currentTarget.dataset.path

            document.querySelectorAll('.popup__box').forEach(function(popupBox) {
                popupBox.classList.remove('popup__box-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('popup__box-active');
        });
    });

    document.querySelectorAll('.popup__btn').forEach(b => {
        b.addEventListener('click', () => {
            popupBox.classList.remove('popup__box-active')
        })
    })

});
