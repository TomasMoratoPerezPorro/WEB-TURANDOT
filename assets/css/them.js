"use strict";
var Navbar = function () {
    var e = $(".navbar"),
        t = $('.nav-link[href^="#"]'),
        n = $(".navbar-collapse"),
        o = $(window);

    function s() {
        e.removeClass("navbar-light").addClass("navbar-dark")
    }

    function i() {
        e.removeClass("navbar-dark").addClass("navbar-light")
    }

    function l() {
        5 < o.scrollTop() ? s() : i()
    }
    l(), o.on({
        scroll: function () {
            l()
        },
        "activate.bs.scrollspy": function () {
            t.filter(".active").focus()
        }
    }), n.on({
        "show.bs.collapse": function () {
            s()
        },
        "hidden.bs.collapse": function () {
            0 == o.scrollTop() && i()
        }
    }), t.on("click", function () {
        n.collapse("hide")
    })
}(),
    Menu = function () {
        var o = $(".section_menu__grid"),
            s = $(".section_menu__nav");
        o.length && o.each(function () {
            var e = $(this),
                t = e.attr("id"),
                n = s.find('li.active > a[href="#' + t + '"]').data("filter"),
                o = e.isotope({
                    itemSelector: ".section_menu__grid__item",
                    filter: n
                });
            o.imagesLoaded().progress(function () {
                o.isotope("layout")
            })
        }), s.on("click", "li > a", function (e) {
            e.preventDefault();
            var t = $(this);
            ! function (e) {
                var t = o.filter(e.attr("href")),
                    n = e.data("filter");
                t.isotope({
                    filter: n
                })
            }(t),
                function (e) {
                    e.parent("li").siblings("li").removeClass("active"), e.parent("li").addClass("active")
                }(t)
        })
    }(),
    Events = function () {
        var t = $(".section_events__items"),
            n = $(".section_events__item"),
            e = $(".section_events__item__content_sm");
        $(".section_events__item__content_lg");
        e.on("click", function () {
            ! function (e) {
                e.closest(t).find(n).removeClass("active"), e.closest(n).addClass("active")
            }($(this))
        })
    }(),
    Gallery = function () {
        var e = $(".section_gallery__grid");
        e.length && e.each(function () {
            var e = $(this).isotope({
                itemSelector: ".section_gallery__grid__item"
            });
            e.imagesLoaded().progress(function () {
                e.isotope("layout")
            })
        })
    }(),
    Newsletter = function () {
        var n = $("#mc-embedded-subscribe-form"),
            t = $("#mce-EMAIL"),
            e = $(".section_newsletter__form_clone"),
            o = e.find('input[type="email"]');
        n.on("submit", function (e) {
            e.preventDefault(), $.ajax({
                type: n.attr("method"),
                url: n.attr("action"),
                data: n.serialize(),
                cache: !1,
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                error: function (e) {
                    $(document).trigger("touche.alert.show", ["danger", "Could not connect to the registration server. Please try again later."])
                },
                success: function (e) {
                    if ("success" != e.result) {
                        var t = e.msg;
                        $(document).trigger("touche.alert.show", ["danger", t])
                    } else $(document).trigger("touche.alert.show", ["success", e.msg]), n[0].reset()
                }
            })
        }), e.on("submit", function (e) {
            e.preventDefault(), n && n.submit()
        }), o.on("keyup", function () {
            ! function () {
                if (t.length) {
                    var e = o.val();
                    t.val(e)
                }
            }()
        })
    }(),
    GoogleMap = function () {
        var e = $(".section_map__map");
        e.length && e.each(function () {
            var e = $(this),
                t = e.data("lat"),
                n = e.data("lng"),
                o = e.data("zoom"),
                s = e.data("info"),
                i = new google.maps.Map(e[0], {
                    center: {
                        lat: t,
                        lng: n
                    },
                    zoom: o,
                    styles: [{
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#e9e9e9"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f5f5f5"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "poi.park",
                        elementType: "geometry",
                        stylers: [{
                            color: "#dedede"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#ffffff"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#333333"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#f2f2f2"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#fefefe"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }],
                    mapTypeControlOptions: {
                        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"]
                    },
                    disableDefaultUI: !1,
                    scrollwheel: !1
                }),
                l = new google.maps.Marker({
                    position: {
                        lat: t,
                        lng: n
                    },
                    map: i,
                    visible: !1
                }),
                a = new google.maps.InfoWindow({
                    content: s,
                    maxWidth: 300
                });
            a.open(i, l), google.maps.event.addListener(a, "closeclick", function () {
                l.setVisible(!0)
            })
        })
    }(),
    CurrentDate = function () {
        var e, t = $("#js-current-year");
        t.length && (e = (new Date).getFullYear(), t.text(e))
    }(),
    Dishes = function () {
        var e = $(".section_dishes__carousel");
        e.length && e.each(function () {
            $(this).flickity({
                cellAlign: "left",
                setGallerySize: !1,
                wrapAround: !0,
                pageDots: !1,
                imagesLoaded: !0
            })
        })
    }(),
    Carousel = function () {
        var e = $(".section_carousel__slider");
        e.length && e.each(function () {
            $(this).flickity({
                cellAlign: "left",
                wrapAround: !0,
                imagesLoaded: !0
            })
        })
    }(),
    Testimonials = function () {
        var e = $(".section_testimonials__carousel");
        e.length && e.each(function () {
            $(this).flickity({
                cellAlign: "left",
                wrapAround: !0,
                imagesLoaded: !0
            })
        })
    }();