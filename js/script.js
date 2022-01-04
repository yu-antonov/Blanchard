document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let href = this.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const topOffset = 0;
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;
            window.scrollBy({ top: offsetPosition, behavior: 'smooth' })
        })
    });
    const headerBottomlist = document.querySelectorAll('.menu-bottom__btn');
    headerBottomlist.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            let button = this;
            if (e.target.classList.contains('active')) {
                e.currentTarget.classList.remove('active')
            } else {
                e.target.classList.add('active')
                headerBottomlist.forEach(el => { if (el != button) { el.classList.remove('active') } })
            }
        })
    });
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('menu-bottom__btn') && !event.target.classList.contains('menu-bottom__scroll')) {
            headerBottomlist.forEach(function(e) {
                e.classList.remove('active')
            })
        }
    })

    function burgerMenu() {
        if (window.innerWidth > 480) {
            document.querySelector('#burger').addEventListener('click', function() {
                document.querySelector('#menu').classList.add('active');
                document.querySelector('#burger__close').addEventListener('click', function() {
                    document.querySelector('#menu').classList.remove('active');
                })
            })
        }
        if (window.innerWidth <= 480) {
            document.querySelector('#burger').addEventListener('click', function() {
                document.querySelector('#menu').classList.add('active');
                document.querySelector('.header').classList.add('overflow');
            })
            document.querySelector('#burger__close').addEventListener('click', function() {
                document.querySelector('#menu').classList.remove('active');
                document.querySelector('.header').classList.remove('overflow');
            })
        }
    }
    burgerMenu();

    window.addEventListener('resize', () => {
        burgerMenu();
    });



    const swiperHero = new Swiper('.header__swiper', {
        effect: 'fade',
        loop: true,
        autoplay: {
            delay: 4000,
        },
        speed: 1000,
        spaceBetween: 30,
    });
    const element = document.querySelector('#filter');
    const choices = new Choices(element, {
        itemSelectText: '',
        searchEnabled: !1,
        shouldSort: !1,
    });
    const swiperGallery = new Swiper('.slider-gallery__slider-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: !0,
            observer: !0,
            resizeObserver: !0,
            centeredSides: !0,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: !0,
            onlyInViewport: !0
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 10,
                grid: {
                    fill: 'row',
                    rows: 1,
                },
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 34,
                slidesPerGroup: 2,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 34,
                grid: {
                    fill: 'row',
                    rows: 2,
                }
            },
            1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 50,
                grid: {
                    fill: 'row',
                    rows: 2,
                }
            },
            1640: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 50,
                grid: {
                    fill: 'row',
                    rows: 2,
                },
            }
        }
    });
    document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.catalog__content').forEach(function(tabContent) {
                tabContent.classList.remove('catalog__content-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content-active');
            document.querySelectorAll('.tabs__btn').forEach(function(delClass) {
                delClass.classList.remove('tabs__btn-active')
            });
            this.classList.add('tabs__btn-active')
        })
    });
    $(function() {
        $(".accordion").accordion({
            heightStyle: "content",
            collapsible: !0,
        })
    });
    document.querySelectorAll('.accordion__btn').forEach(function(accordionBtn) {
        accordionBtn.addEventListener('click', function(event) {
            document.querySelectorAll('.accordion__btn').forEach(function(tabsBtnAccActive) {
                tabsBtnAccActive.classList.remove('selected')
            })
            this.classList.add('selected');
            const path = event.currentTarget.dataset.path;

            document.querySelectorAll('.painter__descr').forEach(function(painterContent) {
                painterContent.classList.remove('painter-active')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('painter-active')
        })
    });
    const accordionButton = document.querySelectorAll('button.accordion__btn');
    for (let button of accordionButton) {
        button.addEventListener('click', function() {
            setTimeout(function() {
                document.querySelector('.painter-active').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }, 300)
        })
    };
    const mediaQuery = window.matchMedia('(max-width: 991px');

    function handleTabletChange(e) {
        if (e.matches) {
            document.querySelector('.event-card3').classList.add('hidden')
        } else {
            document.querySelector('.event-card3').classList.remove('hidden')
        }
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery);
    const mediaQuery480 = window.matchMedia('(max-width: 480px)');

    function handleTabletChange480(e) {
        if (e.matches) {
            document.querySelector('.events__list').classList.add('swiper-wrapper');
            document.querySelectorAll('.events__item').forEach(function(allCard) {
                allCard.classList.add('swiper-slide')
            })
        } else {
            document.querySelector('.events__list').classList.remove('swiper-wrapper');
            document.querySelectorAll('.events__item').forEach(function(k) {
                k.classList.remove('swiper-slide')
            })
        }
        const swiperEvents = new Swiper('.events__wrapper', {
            pagination: {
                el: '.events__pagination',
                clickable: true,
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
            },
        });
    }
    mediaQuery480.addListener(handleTabletChange480);
    handleTabletChange480(mediaQuery480);
    const button = document.querySelector('.events__btn');
    button.addEventListener('click', function() {
        document.querySelectorAll('.hidden').forEach(function(emerging) { emerging.classList.remove('hidden') })
        this.classList.add('hidden')
    })

    const defaultCheckbox = document.querySelector('.default-checkbox');
    if (defaultCheckbox.classList.contains('none')) {
        defaultCheckbox.classList.remove('none')
    };
    const inputDefaultCheckbox = defaultCheckbox.querySelector('.checkbox__input');
    inputDefaultCheckbox.setAttribute('checked', !0);
    const categories = document.querySelector('.checkbox__title');
    const itemCheckbox = document.querySelectorAll('.checkbox__item');
    const checkboxAll = document.querySelectorAll('.checkbox__input');
    let flag = !0;
    let firstCheck = !1;
    defaultCheckbox.classList.add('check-on');
    checkboxAll.forEach(check => {
        check.addEventListener('click', () => {
            if (check.checked) {
                check.closest('.checkbox__item').classList.add('check-on')
            } else {
                check.closest('.checkbox__item').classList.remove('check-on');
                if (flag) { check.closest('.checkbox__item').classList.add('none') }
            }
        })
    });
    categories.addEventListener('click', () => {
        categories.classList.toggle('on-click');
        itemCheckbox.forEach(item => { if ((!item.classList.contains('none')) && (!item.classList.contains('check-on'))) { item.classList.add('none') } else { item.classList.remove('none') } });
        flag = !flag;
        if (!firstCheck) {
            defaultCheckbox.classList.remove('none');
            firstCheck = !0
        }
    });
    //Слайдер Editions
    const sliderEditions = document.querySelector('.slider-edition__container');
    let mySwiper;

    function desktopSlider() {
        if (window.innerWidth > 480 && sliderEditions.dataset.desktop == 'true') {
            mySwiper = new Swiper('.slider-edition__container', {
                spaceBetween: 50,
                pagination: {
                    el: '.swiper-pagination-edition',
                    type: 'fraction',
                    clickable: !0,
                },
                navigation: {
                    nextEl: '.edition-button-next',
                    prevEl: '.edition-button-prev',
                },
                breakpoints: {
                    481: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
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

            sliderEditions.dataset.desktop = 'false';
        }
        if (window.innerWidth <= 480 && sliderEditions.dataset.desktop == 'false') {
            sliderEditions.dataset.desktop = 'true';
            if (sliderEditions.classList.contains('swiper-initialized')) {
                mySwiper.destroy();
            }
        }
    }

    desktopSlider()

    window.addEventListener('resize', () => {
        desktopSlider();
    });

    tippy('#marker1', {
        content: 'Пример современных тенденций - современная методология разработки',
        interactive: !0,
        trigger: 'focus',
        maxWidth: 270,
    });
    tippy('#marker2', {
        content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
        interactive: !0,
        trigger: 'focus',
        maxWidth: 270,
    });
    tippy('#marker3', {
        content: 'В стремлении повысить качество',
        interactive: !0,
        trigger: 'focus',
        maxWidth: 270,
    });
    const swiperProjects = new Swiper('.projects__swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        keyboard: {
            enabled: !0,
            onlyInViewport: !0
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1
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
                loopFillGroupWithBlank: !0,
            }
        }
    })
    const selector = document.querySelector("input[type='tel']");
    const im = new Inputmask("+7(999) 999-99-99");
    im.mask(selector);
    const validator = new JustValidate('.feedback-block__wrap', {
        colorWrong: '#d11616',
        rules: {
            name: { required: !0 },
            tel: {
                required: !0,
                function: (name, value) => {
                    const phone = selector.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            }
        },
        messages: {
            name: 'Как вас зовут?',
            tel: 'Укажите ваш телефон'
        },
        submitHandler: function(form) {
            let formData = new FormData(form);

            let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                    }
                }
            }

            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            form.reset();
        }
    });
    var iObserver = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting === true) {
            loadMap();
        }
    }, { threshold: [0] }); // от 0 до 1, % видимой части элемента на экране

    iObserver.observe(document.getElementById('map'));

    function loadMap() {
        let map = document.getElementById('map');
        if (!map.classList.contains("js--loaded")) {
            map.classList.add("js--loaded");

            if (typeof ymaps === "undefined") {
                let js = document.createElement('script');
                js.src = "https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU";
                document.getElementsByTagName('head')[0].appendChild(js);
                js.onload = function() {
                    ymaps.ready(init);

                    function init() {
                        var myMap = new ymaps.Map("map", {
                            center: [55.760221, 37.618561],
                            zoom: 13,
                            controls: []
                        });
                        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], { balloonContentHeader: "Шоурум №4", balloonContentBody: "Леонтьевский переулок, дом 5/1", }, { iconLayout: 'default#image', iconImageHref: 'img/icon/map.svg', iconImageSize: [20, 20], iconImageOffset: [-3, -12] });
                        myMap.geoObjects.add(myPlacemark);
                        // Создадим пользовательский макет ползунка масштаба.
                        ZoomLayout = ymaps.templateLayoutFactory.createClass("<div>" +
                                "<div id='zoom-in' class='btn'><i class='icon-plus'></i></div>" +
                                "<div id='zoom-out' class='btn'><i class='icon-minus'></i></div>" +
                                "</div>", {

                                    // Переопределяем методы макета, чтобы выполнять дополнительные действия
                                    // при построении и очистке макета.
                                    build: function() {
                                        // Вызываем родительский метод build.
                                        ZoomLayout.superclass.build.call(this);

                                        // Привязываем функции-обработчики к контексту и сохраняем ссылки
                                        // на них, чтобы потом отписаться от событий.
                                        this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                                        this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                                        // Начинаем слушать клики на кнопках макета.
                                        $('#zoom-in').bind('click', this.zoomInCallback);
                                        $('#zoom-out').bind('click', this.zoomOutCallback);
                                    },

                                    clear: function() {
                                        // Снимаем обработчики кликов.
                                        $('#zoom-in').unbind('click', this.zoomInCallback);
                                        $('#zoom-out').unbind('click', this.zoomOutCallback);

                                        // Вызываем родительский метод clear.
                                        ZoomLayout.superclass.clear.call(this);
                                    },

                                    zoomIn: function() {
                                        var map = this.getData().control.getMap();
                                        map.setZoom(map.getZoom() + 1, { checkZoomRange: true });
                                    },

                                    zoomOut: function() {
                                        var map = this.getData().control.getMap();
                                        map.setZoom(map.getZoom() - 1, { checkZoomRange: true });
                                    }
                                }),
                            zoomControl = new ymaps.control.ZoomControl({ options: { layout: ZoomLayout } });

                        myMap.controls.add(zoomControl, {
                            float: 'none',
                            position: {
                                right: 10,
                                top: 275
                            }
                        });
                        myMap.controls.add('geolocationControl', {
                            float: 'none',
                            position: {
                                right: 10,
                                top: 365
                            },
                            breakpoints: {
                                480: {
                                    position: {
                                        right: 10,
                                        top: 180
                                    }
                                }
                            }
                        });
                    }
                };
            } else {
                ymaps.ready(init);
            }
        }
    }
    document.querySelectorAll('.card').forEach(p => {
        p.addEventListener('click', (q) => {
            const path = q.currentTarget.dataset.path
            document.querySelector(`[data-target="${path}"]`).classList.add('modal--active')
        })
    });
    document.querySelectorAll('.modal__btn').forEach(b => { b.addEventListener('click', () => { document.querySelectorAll('.modal').forEach(function(popupBox) { popupBox.classList.remove('modal--active') }) }) })
})

document.addEventListener('DOMContentLoaded', function() {
    // Реализация поиска
    const mediaQueryMax1199 = window.matchMedia('(max-width: 1199px)');

    function handleTabletChange1199(e) {
        if (e.matches) {
            document.querySelector('.header-search__btn').addEventListener('click', function(e) {
                e.preventDefault();

                if (this.type === "button") {
                    this.type = "submit"
                } else {
                    this.type = "button"
                };
                if (!this.classList.contains('is-active')) {
                    this.classList.add('is-active');
                    this.classList.add('fadeInLeft');
                    document.querySelector('.header-search__input').classList.add('is-active');
                    document.querySelector('.header-search__input').classList.add('fadeInLeft');
                    document.querySelector('.header__logo').classList.add('move');
                } else {
                    this.classList.remove('is-active');
                    this.classList.remove('fadeInLeft');
                    document.querySelector('.header-search__input').classList.remove('is-active');
                    document.querySelector('.header-search__input').classList.remove('fadeInLeft');
                    document.querySelector('.header__logo').classList.remove('move');
                }
            })
        }
    }

    mediaQueryMax1199.addListener(handleTabletChange1199);
    handleTabletChange1199(mediaQueryMax1199);

    const mediaQueryMax991 = window.matchMedia('(max-width: 991px)');

    function handleTabletChange991(e) {
        if (e.matches) {
            document.querySelector('.header-search__btn').addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.add('is-active');
                this.classList.add('fadeInLeft');
                document.querySelector('.header__logo').classList.add('is-hidden');
                document.querySelector('#burger').classList.add('is-hidden');

                document.querySelector('.header-search__input').classList.add('is-active');
                document.querySelector('.header-search__input').classList.add('fadeInLeft');
                //появления значка закрытия
                document.querySelector('.header-search__close').classList.add('is-active');
                document.querySelector('.header-search__close').classList.add('fadeInLeft');
            });

            document.querySelector('.header-search__close').addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.remove('is-active');
                this.classList.remove('fadeInLeft');
                //появление лого и бургер
                document.querySelector('.header__logo').classList.remove('is-hidden');
                document.querySelector('.header__logo').classList.remove('move');
                document.querySelector('#burger').classList.remove('is-hidden');

                //скрытие инпута
                document.querySelector('.header-search__input').classList.remove('is-active');
                document.querySelector('.header-search__input').classList.remove('fadeInLeft');

                document.querySelector('.header-search__btn').classList.remove('is-active');
                document.querySelector('.header-search__btn').classList.remove('fadeInLeft');


            })
        }
    }
    mediaQueryMax991.addListener(handleTabletChange991);
    handleTabletChange991(mediaQueryMax991);

    const mediaQueryMax767 = window.matchMedia('(max-width: 767px)');

    function handleTabletChange767(e) {
        if (e.matches) {
            document.querySelector('.header-search__btn').addEventListener('click', function(e) {
                document.querySelector('.header__search').classList.add('centred');
                document.querySelector('.header__logo').classList.add('is-hidden');
                document.querySelector('#burger').classList.add('is-hidden');

                document.querySelector('.header-search__input').classList.add('is-active');
                document.querySelector('.header-search__input').classList.add('fadeInLeft');
                //появления значка закрытия
                document.querySelector('.header-search__close').classList.add('is-active');
                document.querySelector('.header-search__close').classList.add('fadeInLeft');
            });

            document.querySelector('.header-search__close').addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.header__search').classList.remove('centred');
                document.querySelector('.header__logo').classList.remove('is-hidden');
                document.querySelector('.header__logo').classList.remove('move');
                document.querySelector('#burger').classList.remove('is-hidden');
                //скрытие инпута
                document.querySelector('.header-search__input').classList.remove('is-active');
                document.querySelector('.header-search__input').classList.remove('fadeInLeft');

                document.querySelector('.header-search__btn').classList.remove('is-active');
                document.querySelector('.header-search__btn').classList.remove('fadeInLeft');

            })
        }
    }
    mediaQueryMax767.addListener(handleTabletChange767);
    handleTabletChange767(mediaQueryMax767);

    const mediaQueryMax480 = window.matchMedia('(max-width: 480px)');

    function handleTabletChangeMax480(e) {
        if (e.matches) {
            document.querySelector('.header-search__btn').addEventListener('click', function(e) {
                document.querySelector('.header__top').classList.add('blur');
                document.querySelector('.header__search').classList.add('centred');
                document.querySelector('.hero__container').style.paddingTop = "78px";
            });
            document.querySelector('.header-search__close').addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.header__top').classList.remove('blur');
                document.querySelector('.header__search').classList.remove('centred');
                document.querySelector('.hero__container').style.paddingTop = "33px";
            });
        }


    }
    mediaQueryMax480.addListener(handleTabletChangeMax480);
    handleTabletChangeMax480(mediaQueryMax480);

})
