(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        212: function(e, t, a) {
            "use strict";
            var r = a(3),
                n = a(4),
                o = a(7),
                c = a(6),
                s = a(8),
                l = a(0),
                i = a.n(l),
                u = a(18),
                m = a.n(u),
                d = a(221),
                p = a.n(d),
                g = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++) s[l] = arguments[l];
                        return (a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(s)))).state = {
                            shareButton: !1
                        }, a.shareLink = function(e) {
                            navigator.share && navigator.share({
                                url: e.link
                            }).then(function() {
                                return console.log("Successful share")
                            }).catch(function(e) {
                                return console.log("Error sharing", e)
                            })
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            navigator.share && this.setState({
                                shareButton: !0
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement(i.a.Fragment, null, this.state.shareButton && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns nav-home-btn",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    return e.shareLink(e.props)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-share"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })))
                        }
                    }]), t
                }(l.Component),
                h = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(o.a)(this, Object(c.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                                className: "col-12 p-0 fixed",
                                style: {
                                    zIndex: "9"
                                }
                            }, i.a.createElement("div", {
                                className: "block m-0"
                            }, i.a.createElement("div", {
                                className: "block-content p-0 ".concat(this.props.dark && "nav-dark")
                            }, i.a.createElement("div", {
                                className: "input-group ".concat(this.props.boxshadow && "search-box")
                            }, !this.props.disable_back_button && i.a.createElement("div", {
                                className: "input-group-prepend"
                            }, this.props.back_to_home && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.goto_orders_page && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/my-orders")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.goto_accounts_page && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/my-account")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), !this.props.back_to_home && !this.props.goto_orders_page && !this.props.goto_accounts_page && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns ".concat(this.props.dark && "nav-dark"),
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.goBack()
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-arrow-left"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            }))), i.a.createElement("p", {
                                className: "form-control search-input d-flex align-items-center ".concat(this.props.dark && "nav-dark")
                            }, this.props.logo && i.a.createElement("img", {
                                src: "/assets/img/logos/logo.png",
                                alt: localStorage.getItem("storeName"),
                                width: "120"
                            }), this.props.has_title ? i.a.createElement(i.a.Fragment, null, this.props.from_checkout ? i.a.createElement("span", {
                                className: "nav-page-title"
                            }, localStorage.getItem("cartToPayText"), " ", i.a.createElement("span", {
                                style: {
                                    color: localStorage.getItem("storeColor")
                                }
                            }, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), this.props.title, "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))) : i.a.createElement("span", {
                                className: "nav-page-title"
                            }, this.props.title)) : null, this.props.has_delivery_icon && i.a.createElement(p.a, {
                                left: !0
                            }, i.a.createElement("img", {
                                src: "/assets/img/various/delivery-bike.png",
                                alt: this.props.title,
                                className: "nav-page-title"
                            }))), this.props.has_restaurant_info ? i.a.createElement("div", {
                                className: "fixed-restaurant-info hidden",
                                ref: function(t) {
                                    e.heading = t
                                }
                            },i.a.createElement("span", {
                                className: "font-w700 fixedRestaurantName"
                            }, this.props.restaurant.name), i.a.createElement("br", null), i.a.createElement("span", {
                                className: "font-w400 fixedRestaurantTime"
                            }, i.a.createElement("i", {
                                className: "si si-clock"
                            }), " ", this.props.restaurant.delivery_time, " ", localStorage.getItem("homePageMinsText"))) : null, i.a.createElement("div", {
                                className: "input-group-append"
                            }, !this.props.disable_search && i.a.createElement("button", {
                                type: "submit",
                                className: "btn search-navs-btns",
                                style: {
                                    position: "relative"
                                }
                            }, i.a.createElement("i", {
                                className: "si si-magnifier"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.homeButton && i.a.createElement("button", {
                                type: "button",
                                className: "btn search-navs-btns nav-home-btn",
                                style: {
                                    position: "relative"
                                },
                                onClick: function() {
                                    setTimeout(function() {
                                        e.context.router.history.push("/")
                                    }, 200)
                                }
                            }, i.a.createElement("i", {
                                className: "si si-home"
                            }), i.a.createElement(m.a, {
                                duration: "500"
                            })), this.props.shareButton && i.a.createElement(g, {
                                link: window.location.href
                            })))))))
                        }
                    }]), t
                }(l.Component);
            h.contextTypes = {
                router: function() {
                    return null
                }
            };
            t.a = h
        },
        222: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return r
            });
            var r = function(e) {
                if (e) {
                    var t = parseFloat(e);
                    return t = t.toFixed(2)
                }
                return 0
            }
        },
        225: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return o
            });
            var r = a(98),
                n = a(222),
                o = function(e) {
                    return function(t) {
                        var a = {
                            productQuantity: e.reduce(function(e, t) {
                                return ++e
                            }, 0),
                            totalPrice: e.reduce(function(e, t) {
                                var a = 0;
                                return t.selectedaddons && t.selectedaddons.map(function(e) {
                                    return a += parseFloat(e.price)
                                }), e += t.price * t.quantity + a * t.quantity, e = parseFloat(e), Object(n.a)(e), e
                            }, 0)
                        };
                        t({
                            type: r.a,
                            payload: a
                        })
                    }
                }
        },
        226: function(e, t, a) {
            "use strict";
            a.d(t, "b", function() {
                return n
            }), a.d(t, "a", function() {
                return o
            }), a.d(t, "c", function() {
                return c
            });
            var r = a(61),
                n = function(e) {
                    return {
                        type: r.b,
                        payload: e
                    }
                },
                o = function(e) {
                    return {
                        type: r.a,
                        payload: e
                    }
                },
                c = function(e) {
                    return function(t) {
                        return console.log("From action", e), t({
                            type: r.c,
                            payload: e
                        })
                    }
                }
        },
        230: function(e, t, a) {
            "use strict";
            a.d(t, "a", function() {
                return s
            }), a.d(t, "c", function() {
                return l
            }), a.d(t, "b", function() {
                return i
            });
            var r = a(80),
                n = a(9),
                o = a(5),
                c = a.n(o),
                s = function(e, t, a, o) {
                    return function(s) {
                        return c.a.post(n.d, {
                            token: e,
                            coupon: t,
                            restaurant_id: a,
                            subtotal: o
                        }).then(function(e) {
                            var t = e.data;
                            return [s({
                                type: r.a,
                                payload: t
                            }), s({
                                type: r.b,
                                payload: null
                            })]
                        }).catch(function(e) {
                            if (console.log(e), 401 === e.response.status) return s({
                                type: r.b,
                                payload: "NOTLOGGEDIN"
                            })
                        })
                    }
                },
                l = function() {
                    return function(e) {
                        console.log("Triggred Coupon Removed");
                        return e({
                            type: r.a,
                            payload: {
                                hideMessage: !0,
                                coupon_error: ""
                            }
                        })
                    }
                },
                i = function(e, t) {
                    return function(a) {
                        return e.appliedAmount = t, a({
                            type: r.a,
                            payload: e
                        })
                    }
                }
        },
        238: function(e, t, a) {
            "use strict";
            var r = a(3),
                n = a(4),
                o = a(7),
                c = a(6),
                s = a(8),
                l = a(0),
                i = a.n(l),
                u = a(212),
                m = a(42),
                d = a(168),
                p = a(16),
                g = a(58),
                h = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++) s[l] = arguments[l];
                        return (a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(s)))).state = {
                            withLinkToRestaurant: !1,
                            isFavorite: !1
                        }, a.fixedRestaurantInfo = function(e) {
                            a.child && (e ? a.child.heading.classList.add("hidden") : a.child.heading.classList.remove("hidden"))
                        }, a.scrollFunc = function() {
                            if (document.documentElement.scrollTop > 55) {
                                a.fixedRestaurantInfo(!1)
                            }
                            if (document.documentElement.scrollTop < 55) {
                                a.fixedRestaurantInfo(!0)
                            }
                        }, a.setFavoriteRestaurant = function() {
                            var e = a.props,
                                t = e.restaurant_info,
                                r = e.user;
                            r.success && (t.is_favorited ? a.refs.heartIcon.classList.remove("is-active") : a.refs.heartIcon.classList.add("is-active"), a.props.setFavoriteRest(r.data.auth_token, t.id))
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                withLinkToRestaurant: this.props.withLinkToRestaurant
                            }), this.props.history.location.state && this.props.history.location.state.fromExplorePage && this.setState({
                                withLinkToRestaurant: this.props.history.location.state.fromExplorePage
                            }), this.registerScrollEvent()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.removeScrollEvent()
                        }
                    }, {
                        key: "registerScrollEvent",
                        value: function() {
                            window.addEventListener("scroll", this.scrollFunc)
                        }
                    }, {
                        key: "removeScrollEvent",
                        value: function() {
                            window.removeEventListener("scroll", this.scrollFunc)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                a = t.history,
                                r = t.restaurant,
                                n = t.user;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                                className: "bg-white2"
                            }, i.a.createElement(u.a, {
                                ref: function(t) {
                                    e.child = t
                                },
                                history: a,
                                boxshadow: !1,
                                has_restaurant_info: !0,
                                restaurant: r,
                                disable_search: !0,
                                homeButton: !0,
                                shareButton: !0
                            }), 0 === r.length ? i.a.createElement(m.a, {
                                height: 170,
                                width: 400,
                                speed: 1.2,
                                primaryColor: "#f3f3f3",
                                secondaryColor: "#ecebeb"
                            }, i.a.createElement("rect", {
                                x: "20",
                                y: "70",
                                rx: "4",
                                ry: "4",
                                width: "80",
                                height: "78"
                            }), i.a.createElement("rect", {
                                x: "144",
                                y: "85",
                                rx: "0",
                                ry: "0",
                                width: "115",
                                height: "18"
                            }), i.a.createElement("rect", {
                                x: "144",
                                y: "115",
                                rx: "0",
                                ry: "0",
                                width: "165",
                                height: "16"
                            })) : i.a.createElement(i.a.Fragment, null, i.a.createElement(d.a, {
                                to: "../../stores/" + r.slug,
                                className: this.state.withLinkToRestaurant ? "" : "no-click"
                            }, i.a.createElement("div", {
                                className: "d-flex pt-50"
                            }, i.a.createElement("div", {
                                className: "px-15 mt-5"
                            }, i.a.createElement("img", {
                                src: r.image,
                                alt: r.name,
                                className: "restaurant-image mt-0"
                            })), i.a.createElement("div", {
                                className: "mt-5 pb-15 w-100"
                            }, i.a.createElement("h4", {
                                className: "font-w600 mb-5 text-dark"
                            }, r.name), i.a.createElement("div", {
                                className: "font-size-sm text-muted truncate-text text-muted"
                            }, r.description), 1 === r.is_pureveg && i.a.createElement("p", {
                                className: "mb-0"
                            }, i.a.createElement("span", {
                                className: "font-size-sm pr-1 text-muted"
                            }, localStorage.getItem("pureVegText")), i.a.createElement("img", {
                                src: "/assets/img/various/pure-veg.png",
                                alt: "PureVeg",
                                style: {
                                    width: "20px"
                                }
                            })), i.a.createElement("a", {
                               // className: "invisivel",
                                className: "fab fa-instagram",
                                target: "_blank",
                                href:"https://www.instagram.com/",
                                 style: {
                                   // display: "none"
                                }
                            }),/*i.a.createElement("a", {
                                className: "invisivel",
                                },i.a.createElement(i.a.Fragment, null, r.price_range, "  ")),*/
                           /* i.a.createElement("div", {
                                className: "text-center restaurant-meta mt-5 d-flex align-items-center  text-muted"
                            }, "0" === r.avgRating ? i.a.createElement("div", {
                                className: "col-2 p-0 text-left",
                                style: {
                                    //display: "none"
                                }
                            },i.a.createElement("i", {
                                className: "fa fa-star",
                                style: {
                                    color: localStorage.getItem("storeColor"),
                                    //display: "none"
                                }
                            }), " ", r.rating) : i.a.createElement(d.a, {
                                to: "/reviews/" + r.slug,
                                style: {
                                   // display: "none"
                                },
                                className: "yes-click"
                            }, i.a.createElement("div", {
                                className: "col-2 p-0 text-left"
                            }, i.a.createElement("i", {
                                className: "fa fa-star",
                                style: {
                                    color: localStorage.getItem("storeColor"),
                                    display: "none"
                                }
                            }), " ", r.avgRating)),*//*i.a.createElement(
                                                    "a",
                                                    {
                                                      className:
                                                        "instagram-button-android",
                                                        target: "_blank",
                                                      href: "instagram://user?username="+r.price_range 
                                                       
                                                      
                                                        },r.price_range
                                                    ),*/ i.a.createElement("div", {
                                className: "col-4 p-0 text-center",
                                 style: {
                                  //  display: "none"
                                }
                            },  i.a.createElement("i", {
                                className: "si si-clock"
                            }), " ", r.delivery_time)))), n.success && i.a.createElement("span", {
                                onClick: this.setFavoriteRestaurant
                            }, i.a.createElement("div", {
                                ref: "heartIcon",
                                className: "heart ".concat(r.is_favorited && "is-active")
                            })))),i.a.createElement(
                          "div",
                              {
                                className: "restaurantmaindiv"
                              }),i.a.createElement(
                                                    "div",
                                                    {
                                                    className:"gradebotoes"
                                                    },
                                                    i.a.createElement(
                                                    "a",
                                                    {
                                                      className:
                                                        "myButton",
                                                        target: "_blank",
                                                      href:
                                                        "https://www.google.com/maps/dir//" + r.latitude + "," + r.longitude 
                                                    },"Google Maps"
                                                    ),i.a.createElement(
                                                    "a",
                                                    {
                                                      className:
                                                        "myButton",
                                                        target: "_blank",
                                                          href: "waze://?ll="+r.latitude+","+r.longitude+"&navigate=yes"
                                                    },"Waze"
                                                    ),i.a.createElement(
                                                    "a",
                                                    {
                                                      className:
                                                        "myButton",
                                                        target: "_blank",
                                                      href:
                                                        "https://api.whatsapp.com/send?phone="+r.celular+"&text=Digite uma mensagem. "
                                                    },"Whatsapp"
                                                    ),i.a.createElement(
                                                    "a",
                                                    {
                                                      className:
                                                        "myButton",
                                                        target: "_blank",
                                                      href: "uber://?action=setPickup&client_id=cRKcgtpmjLwZkF1OtmH376dj1UulJaB3&pickup=my_location&dropoff[formatted_address]="+r.address+"&dropoff[latitude]="+r.latitude+"&dropoff[longitude]="+r.longitude
                                                   
                                                        
                                                        
                                                    },"Uber"
                                                    )),
                                                    i.a.createElement(
                                                    "a",
                                                    {
                                                      className:
                                                        "instagram-button-android",
                                                        target: "_blank",
                                                      href: "instagram://user?username="+r.price_range 
                                                       
                                                      
                                                    },r.price_range
                                                    ),
                                                    i.a.createElement(
                                                    "a",
                                                    {
                                                      className:
                                                        "button-gallery-menu",
                                                          id: "button-gallery-menu",
                                      
                                    //  style: { position: "absolute" },
                                      onClick: function () {
                                         
                                        // Get the modal
                                        var modal = document.getElementById("myModal2");
                                        
                                        // Get the button that opens the modal
                                        var btn = document.getElementById("button-gallery-menu");
                                        
                                        // Get the <span> element that closes the modal
                                        var span = document.getElementsByClassName("close")[0];
                                        
                                        // When the user clicks the button, open the modal 
                                        btn.onclick = function() {
                                          modal.style.display = "block";
                                        }

                                        // When the user clicks anywhere outside of the modal, close it
                                        window.onclick = function(event) {
                                         if (event.target == modal) {
                                            modal.style.display = "none";
                                          }
                                        }

                                        setInterval(1000);
                                      }
                                                          
                                                    },"Evento"
                                                    ),/*Começo Galeria*/ i.a.createElement("a", {
                                className: "galleriaBotao"
                            },i.a.createElement(
                                    "div",
                                    {
                                   //   type: "button",
                                      id: "myBtn",
                                      className:"butao",
                                    //  style: { position: "absolute" },
                                      onClick: function () {
                                         
                                        // Get the modal
                                        var modal = document.getElementById("myModal");
                                        
                                        // Get the button that opens the modal
                                        var btn = document.getElementById("myBtn");
                                        
                                        // Get the <span> element that closes the modal
                                        var span = document.getElementsByClassName("close")[0];
                                        
                                        // When the user clicks the button, open the modal 
                                        btn.onclick = function() {
                                          modal.style.display = "block";
                                        }

                                        // When the user clicks anywhere outside of the modal, close it
                                        window.onclick = function(event) {
                                         if (event.target == modal) {
                                            modal.style.display = "none";
                                          }
                                        }

                                        setInterval(1000);
                                      }
                                                                             

                                    },
                                  i.a.createElement("div", {
                                className: "galleria"
                            },
                          i.a.createElement("img", {
                                src: r.image2,
                                alt: r.name,
                                className: "restaurant-image2"
                            }),
                            i.a.createElement("img", {
                                src: r.image3,
                                alt: r.name,
                                className: "restaurant-image2"
                            }),
                          i.a.createElement("img", {
                                src: r.image4,
                                alt: r.name,
                                className: "restaurant-image2"
                            }),
                           i.a.createElement("img", {
                                src: r.image5,
                                alt: r.name,
                                className: "restaurant-image2"
                            }),
                         i.a.createElement("img", {
                                src: r.image6,
                                alt: r.name,
                                className: "restaurant-image2"
                            })))),/*Fim Galeria*/ 
                                 /*Começo Galeria 2*/
                                    i.a.createElement("div", {
                                     id:"myModal2", className:"modal"
                                    },
                                    i.a.createElement("div", {
                                     className:"modal-content",
                                      },
                                    i.a.createElement("div", {  className:"modal-header"
                                    },i.a.createElement("span", { id:"closed", className:"close", style: { position: "relative"},
                                    onClick: function myFunction()  {
                                  var x = document.getElementById("myModal2");
                                  if (x.style.display === "none") {
                                    x.style.display = "block";
                                  } else {
                                    x.style.display = "none";
                                  }
                                      }
                                },"x"))
                                    ,i.a.createElement("div", { className:"modal-body2"},"Evento do Dia",i.a.createElement("div", {
                                className: "galleria1",
                            },i.a.createElement("img", {
                                src: r.imagemenu,
                                alt: r.name,
                                className: "restaurant-image1"
                            })
                                    ))
                                    )
                                 ),  i.a.createElement("div", {
                                     id:"myModal", className:"modal"
                                    },
                                    i.a.createElement("div", {
                                     className:"modal-content",
                                      },
                                    i.a.createElement("div", {  className:"modal-header"
                                    },i.a.createElement("span", { id:"closed", className:"close", style: { position: "relative"},
                                    onClick: function myFunction()  {
                                  var x = document.getElementById("myModal");
                                  if (x.style.display === "none") {
                                    x.style.display = "block";
                                  } else {
                                    x.style.display = "none";
                                  }
                                      }
                                },"x"))
                                    ,i.a.createElement("div", { className:"font-w600 mb-5 text-dark modal-body"},"GALERIA DE IMAGENS",i.a.createElement("div", {
                                className: "galleria1",
                            },i.a.createElement("img", {
                                src: r.image2,
                                alt: r.name,
                                className: "restaurant-image1"
                            }),i.a.createElement("img", {
                                src: r.image3,
                                alt: r.name,
                                className: "restaurant-image1"
                            }),i.a.createElement("img", {
                                src: r.image4,
                                alt: r.name,
                                className: "restaurant-image1"
                            }),i.a.createElement("img", {
                                src: r.image5,
                                alt: r.name,
                                className: "restaurant-image1"
                            }),i.a.createElement("img", {
                                src: r.image6,
                                alt: r.name,
                                className: "restaurant-image1"
                            })
                                    ))
                                    )), /*Fim Galeria 2*/"<p><br></p>" !== r.custom_message && "null" !== r.custom_message && "" !== r.custom_message && i.a.createElement("div", {
                                style: {
                                    position: "relative",
                                    background: "#fff"
                                },
                                dangerouslySetInnerHTML: {
                                    __html: r.custom_message
                                }
                            }))
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            return e.restaurant_info !== t.restaurant_info ? {
                                data: e.restaurant_info
                            } : null
                        }
                    }]), t
                }(l.Component);
            t.a = Object(p.b)(function(e) {
                return {
                    restaurant_info: e.items.restaurant_info,
                    user: e.user.user
                }
            }, {
                setFavoriteRest: g.l
            })(h)
        },
        249: function(e, t, a) {
            "use strict";
            var r = a(3),
                n = a(4),
                o = a(7),
                c = a(6),
                s = a(8),
                l = a(0),
                i = a.n(l),
                u = a(18),
                m = a.n(u),
                d = a(213),
                p = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++) s[l] = arguments[l];
                        return (a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(s)))).state = {
                            open: !1
                        }, a._processAddons = function(e) {
                            var t = [];
                            t.selectedaddons = [];
                            for (var r = document.querySelectorAll("input[type=radio]:checked"), n = 0; n < r.length; n++) t.selectedaddons.push({
                                addon_category_name: r[n].name,
                                addon_id: r[n].getAttribute("data-addon-id"),
                                addon_name: r[n].getAttribute("data-addon-name"),
                                price: r[n].value
                            });
                            for (var o = document.querySelectorAll("input[type=checkbox]:checked"), c = 0; c < o.length; c++) t.selectedaddons.push({
                                addon_category_name: o[c].name,
                                addon_id: o[c].getAttribute("data-addon-id"),
                                addon_name: o[c].getAttribute("data-addon-name"),
                                price: o[c].value
                            });
                            a.props.addProduct(Object.assign(t, e))
                        }, a.handlePopupOpen = function() {
                            a.setState({
                                open: !0
                            })
                        }, a.handlePopupClose = function() {
                            a.setState({
                                open: !1
                            }), a.props.forceUpdate()
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.product;
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
                                type: "button",
                                className: "btn btn-add-remove",
                                style: {
                                    color: localStorage.getItem("cartColor-bg")
                                },
                                onClick: this.handlePopupOpen
                            }, i.a.createElement("span", {
                                className: "btn-inc"
                            }, "+"), i.a.createElement(m.a, {
                                duration: "500"
                            })), i.a.createElement(d.a, {
                                open: this.state.open,
                                onClose: this.handlePopupClose,
                                closeIconSize: 32
                            }, i.a.createElement("div", {
                                style: {
                                    marginTop: "5rem",
                                    textAlign: "left"
                                }
                            }, i.a.createElement("h3", {
                                className: "mb-2"
                            }, localStorage.getItem("customizationHeading")), i.a.createElement("hr", {
                                className: "mb-30 mt-10",
                                style: {
                                    borderColor: "#ccc"
                                }
                            }), t.addon_categories.map(function(e) {
                                return i.a.createElement("div", {
                                    key: e.id,
                                    className: "addon-category-block"
                                }, i.a.createElement(i.a.Fragment, null, i.a.createElement("p", {
                                    className: "addon-category-name mb-2"
                                }, e.name, 0 != e.addonlimit ? " ( Selecione at\xe9 " + e.addonlimit + " )" : null), e.addons.length && i.a.createElement(i.a.Fragment, null, e.addons.map(function(t, a) {
                                    return i.a.createElement(i.a.Fragment, {
                                        key: t.id
                                    }, i.a.createElement("div", {
                                        className: "form-group addon-list"
                                    }, i.a.createElement("input", {
                                        type: "SINGLE" === e.type ? "radio" : "checkbox",
                                        className: "SINGLE" === e.type ? "magic-radio" : "magic-checkbox",
                                        name: e.name,
                                        "data-addon-id": t.id,
                                        "data-addon-name": t.name,
                                        value: t.price,
                                        defaultChecked: "SINGLE" === e.type && 0 === a && !0,
                                        id: 'uId' + e.id,
                                        onClick: function() {
                                            if (e.addonlimit > 0) {
                                                var uId = e.id;
                                                var checks = document.querySelectorAll('#uId' + uId);
                                                var max = e.addonlimit;
                                                for (var i = 0; i < checks.length; i++) checks[i].onclick = selectiveCheck;

                                                function selectiveCheck(event) {
                                                    var checkedChecks = document.querySelectorAll('#uId' + uId + ":checked");
                                                    if (checkedChecks.length >= max + 1) { 
                                                        
                                                         Swal.fire({
									  title: 'Atenção',
									  text: "Você excedeu o limite",
									  icon: 'warning',									  								  
									  confirmButtonColor: '#ff2a2a ',									 
									  allowOutsideClick: false,
									  showCloseButton: true,									  
									  backdrop: 'rgb(18 18 18 / 81%)',
									  confirmButtonText: 'OK'									  
									});
                                                
                                                     return false;
                                                    }
                                                }
                                                
                                            }
                                        }
                                    }), "SINGLE" === e.type && i.a.createElement("label", {
                                        htmlFor: t.name
                                    }), i.a.createElement("label", {
                                        className: "text addon-label",
                                        htmlFor: t.name
                                    }, t.name, " ", i.a.createElement("span", {
                                        className: "addon-label-price ml-1"
                                    }, "true" === localStorage.getItem("hidePriceWhenZero") && "0.00" === t.price ? null : i.a.createElement(i.a.Fragment, null, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), t.price, " ", "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"))))))
                                })), i.a.createElement("hr", {
                                    className: "mb-20"
                                })))
                            }), i.a.createElement("button", {
                                className: "btn btn-lg btn-customization-done",
                                onClick: function() {
                                    e._processAddons(t), e.handlePopupClose()
                                },
                                style: {
                                    backgroundColor: localStorage.getItem("cartColorBg"),
                                    color: localStorage.getItem("cartColorText")
                                }
                            }, localStorage.getItem("customizationDoneBtnText")))))
                        }
                    }]), t
                }(l.Component);
            t.a = p
        },
        258: function(e, t, a) {
            "use strict";
            var r = a(3),
                n = a(4),
                o = a(7),
                c = a(6),
                s = a(8),
                l = a(0),
                i = a.n(l),
                u = a(226),
                m = a(49),
                d = a(18),
                p = a.n(d),
                g = a(16),
                h = a(222),
                f = a(225),
                v = a(346),
                y = a(230),
                b = function(e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (var n = arguments.length, s = new Array(n), l = 0; l < n; l++) s[l] = arguments[l];
                        return (a = Object(o.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(s)))).state = {
                            isOpen: !1,
                            removeProductFromPreviousRestaurant: !1,
                            open: !1,
                            product: []
                        }, a.openFloatCart = function() {
                            a.setState({
                                isOpen: !0
                            })
                        }, a.closeFloatCart = function() {
                            a.setState({
                                isOpen: !1
                            })
                        }, a.handlePopup = function() {
                            a.setState({
                                open: !a.state.open
                            })
                        }, a.addProduct = function(e) {
                            var t = a.props,
                                r = t.cartProducts,
                                n = t.updateCart;
                            localStorage.setItem("cleared", "false");
                            var o = !1,
                                c = !1,
                                s = !0;
                            r.forEach(function(t) {
                                s && (e.restaurant_id === t.restaurant_id && localStorage.setItem("activeRestaurant", e.restaurant_id), t.restaurant_id === e.restaurant_id ? t.id === e.id && JSON.stringify(t.selectedaddons) === JSON.stringify(e.selectedaddons) && (t.quantity += 1, o = !0, c = !1) : (a.setState({
                                    removeProductFromPreviousRestaurant: !0,
                                    open: !0
                                }), c = !0, s = !1, a.setState({
                                    product: e
                                })))
                            }), o || c || (localStorage.setItem("activeRestaurant", e.restaurant_id), r.push(e)), s && n(r), a.openFloatCart()
                        }, a.removeProduct = function(e) {
                            var t = a.props,
                                r = t.cartProducts,
                                n = t.updateCart,
                                o = r.findIndex(function(t) {
                                    return t.id === e.id
                                });
                            o >= 0 && (r.forEach(function(t) {
                                t.id === e.id && (1 === t.quantity ? r.splice(o, 1) : t.quantity -= e.quantity)
                            }), n(r), r.length < 1 && (a.closeFloatCart(), localStorage.removeItem("activeRestaurant")))
                        }, a.getTotalItemsInCart = function() {
                            if ("true" === localStorage.getItem("countQuantityAsTotalItemsOnCart")) {
                                var e = 0;
                                return a.props.cartProducts.forEach(function(t) {
                                    e += t.quantity
                                }), e
                            }
                            return a.props.cartTotal.productQuantity
                        }, a.clearCart = function() {
                            var e = a.props,
                                t = e.cartProducts,
                                r = e.updateCart,
                                n = e.removeCoupon;
                            t.splice(0, t.length), a.closeFloatCart(), n(), setTimeout(function() {
                                r(t)
                            }, 500), a.addProduct(a.state.product), a.openFloatCart(), a.setState({
                                open: !a.state.open,
                                product: []
                            }), localStorage.setItem("cleared", "true")
                        }, a
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.cartProducts.length && this.setState({
                                isOpen: !0
                            })
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            e.newProduct !== this.props.newProduct && this.addProduct(e.newProduct), e.productToRemove !== this.props.productToRemove && this.removeProduct(e.productToRemove)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.cartTotal,
                                a = e.cartProducts,
                                r = ["float-cart"];
                            return this.state.isOpen && r.push("float-cart--open"), i.a.createElement(i.a.Fragment, null, this.state.removeProductFromPreviousRestaurant && i.a.createElement(i.a.Fragment, null, i.a.createElement(v.a, {
                                fullWidth: !0,
                                fullScreen: !1,
                                open: this.state.open,
                                onClose: this.state.handlePopup,
                                style: {
                                    width: "100%",
                                    margin: "auto"
                                },
                                PaperProps: {
                                    style: {
                                        backgroundColor: "#fff",
                                        borderRadius: "4px"
                                    }
                                }
                            }, i.a.createElement("div", {
                                className: "container",
                                style: {
                                    borderRadius: "5px",
                                    height: "200px"
                                }
                            }, i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
                                className: "px-10 col-12 py-3 d-flex justify-content-between align-items-center"
                            }, i.a.createElement("h1", {
                                className: "mt-2 mb-0 font-weight-black h4"
                            }, localStorage.getItem("cartReplaceItemTitle"))), i.a.createElement("div", {
                                className: "px-10 mb-20"
                            }, localStorage.getItem("cartReplaceItemSubTitle")), i.a.createElement("div", {
                                className: "d-flex justify-content-center"
                            }, i.a.createElement("div", {
                                className: "text-center mr-4"
                            }, i.a.createElement("button", {
                                className: "btn clear-cart-btn",
                                onClick: this.handlePopup,
                                style: {
                                    borderColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("cartReplaceItemActionNo"))), i.a.createElement("div", {
                                className: "text-center"
                            }, i.a.createElement("button", {
                                className: "btn clear-cart-btn text-white",
                                onClick: this.clearCart,
                                style: {
                                    backgroundColor: localStorage.getItem("storeColor"),
                                    borderColor: localStorage.getItem("storeColor")
                                }
                            }, localStorage.getItem("cartReplaceItemActionYes")))))))), i.a.createElement("div", {
                                className: r.join(" "),
                                style: {
                                    backgroundColor: localStorage.getItem("cartColorBg"),
                                    color: localStorage.getItem("cartColorText")
                                }
                            }, a.length ? i.a.createElement(m.a, {
                                to: "/cart",
                                delay: 200,
                                className: "text-white"
                            }, i.a.createElement("span", null, this.getTotalItemsInCart(), " ", localStorage.getItem("floatCartItemsText")), i.a.createElement("span", {
                                className: "pl-5 pr-5"
                            }, "\xa0|\xa0"), i.a.createElement("span", null, "left" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat"), Object(h.a)(t.totalPrice), "right" === localStorage.getItem("currencySymbolAlign") && localStorage.getItem("currencyFormat")), i.a.createElement("span", {
                                className: "pull-right"
                            }, localStorage.getItem("floatCartViewCartText"), " ", i.a.createElement("i", {
                                className: "si si-basket"
                            })), i.a.createElement(p.a, {
                                duration: "500"
                            })) : i.a.createElement("span", null, "\xa0")))
                        }
                    }]), t
                }(l.Component);
            t.a = Object(g.b)(function(e) {
                return {
                    cartProducts: e.cart.products,
                    newProduct: e.cart.productToAdd,
                    productToRemove: e.cart.productToRemove,
                    cartTotal: e.total.data
                }
            }, {
                loadCart: u.b,
                updateCart: f.a,
                removeProduct: u.c,
                removeCoupon: y.c
            })(b)
        },
        259: function(e, t, a) {
            "use strict";
            var r = a(3),
                n = a(4),
                o = a(7),
                c = a(6),
                s = a(8),
                l = a(0),
                i = a.n(l),
                u = function(e) {
                    function t() {
                        return Object(r.a)(this, t), Object(o.a)(this, Object(c.a)(t).apply(this, arguments))
                    }
                    return Object(s.a)(t, e), Object(n.a)(t, [{
                        key: "render",
                        value: function() {
                            return i.a.createElement(i.a.Fragment, null, i.a.createElement("span", {
                                className: "item-badge-collection"
                            }, 1 === this.props.item.is_recommended ? i.a.createElement("span", {
                                className: "item-badge",
                                style: {
                                    backgroundColor: localStorage.getItem("recommendedBadgeColor")
                                }
                            }, localStorage.getItem("recommendedBadgeText")) : null, 1 === this.props.item.is_popular ? i.a.createElement("span", {
                                className: "item-badge",
                                style: {
                                    backgroundColor: localStorage.getItem("popularBadgeColor")
                                }
                            }, localStorage.getItem("popularBadgeText")) : null, 1 === this.props.item.is_new ? i.a.createElement("span", {
                                className: "item-badge",
                                style: {
                                    backgroundColor: localStorage.getItem("newBadgeColor")
                                }
                            }, localStorage.getItem("newBadgeText")) : null))
                        }
                    }]), t
                }(l.Component);
            t.a = u
        }
    }
]);