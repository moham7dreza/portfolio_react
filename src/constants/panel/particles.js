export const frozenGlass = {
    fpsLimit: 60,
    fullScreen: {enable: true},
    particles: {
        number: {
            value: 50
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 400,
            random: {
                enable: true,
                minimumValue: 200
            }
        },
        move: {
            enable: true,
            speed: 10,
            direction: "top",
            outModes: {
                default: "out",
                top: "destroy",
                bottom: "none"
            }
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            resize: true
        }
    },
    style: {
        filter: "blur(50px)"
    },
    detectRetina: true,
    themes: [
        {
            name: "light",
            default: {
                value: true,
                mode: "light"
            },
            options: {
                background: {
                    color: "#f7f8ef"
                },
                particles: {
                    color: {
                        value: ["#5bc0eb", "#fde74c", "#9bc53d", "#e55934", "#fa7921"]
                    }
                }
            }
        },
        {
            name: "dark",
            default: {
                value: true,
                mode: "dark"
            },
            options: {
                background: {
                    color: "#080710"
                },
                particles: {
                    color: {
                        value: ["#004f74", "#5f5800", "#245100", "#7d0000", "#810c00"]
                    }
                }
            }
        }
    ],
    emitters: {
        direction: "top",
        position: {
            x: 50,
            y: 150
        },
        rate: {
            delay: 0.2,
            quantity: 2
        },
        size: {
            width: 100,
            height: 0
        }
    }
}
export const mouseAttraction = {
    fps_limit: 60,
    interactivity: {
        detect_on: "canvas",
        events: {
            onclick: {enable: true, mode: "push"},
            onhover: {
                enable: true,
                mode: "attract",
                parallax: {enable: false, force: 60, smooth: 10}
            },
            resize: true
        },
        modes: {
            push: {quantity: 4},
            attract: {distance: 200, duration: 0.4, factor: 5}
        }
    },
    particles: {
        color: {value: "#ffffff"},
        line_linked: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
        },
        move: {
            attract: {enable: false, rotateX: 600, rotateY: 1200},
            bounce: false,
            direction: "none",
            enable: true,
            out_mode: "out",
            random: false,
            speed: 2,
            straight: false
        },
        number: {density: {enable: true, value_area: 800}, value: 80},
        opacity: {
            anim: {enable: false, opacity_min: 0.1, speed: 1, sync: false},
            random: false,
            value: 0.5
        },
        shape: {
            character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400"
            },
            image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100
            },
            polygon: {nb_sides: 5},
            stroke: {color: "#000000", width: 0},
            type: "circle"
        },
        size: {
            anim: {enable: false, size_min: 0.1, speed: 40, sync: false},
            random: true,
            value: 5
        }
    },
    polygon: {
        draw: {enable: false, lineColor: "#ffffff", lineWidth: 0.5},
        move: {radius: 10},
        scale: 1,
        type: "none",
        url: ""
    },
    retina_detect: true
}