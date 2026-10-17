import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes--2XiRev-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DUR = "5.6s";
var BEGIN = "-1.8s";
var ROTATE_KEYS = "0; 0.22; 0.38; 0.78; 1";
var ROTATE_SPLINE = "0.45 0.05 0.2 1; 0.45 0.05 0.2 1; 0.45 0.05 0.2 1; 0.45 0.05 0.2 1";
var RUN_KEYS = "0; 0.16; 0.32; 0.42; 0.74; 0.86; 1";
var RUN_SPLINE = "0.45 0.05 0.2 1; 0.45 0.05 0.2 1; 0.45 0.05 0.2 1; 0.45 0.05 0.2 1; 0.45 0.05 0.2 1; 0.45 0.05 0.2 1";
function JumpSlice() {
	const [animate, setAnimate] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAnimate(true);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "jump-slice flex aspect-video w-full self-center flex-col border border-line bg-bg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-10 shrink-0 items-center justify-between border-b border-line px-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xs font-medium tracking-wide text-muted",
				children: "Срез уровня"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tabular-nums text-muted",
				children: "прыжок 01"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 800 420",
			className: "h-full min-h-0 w-full",
			role: "img",
			"aria-label": "Схема: колонна в зазоре поворачивается в мост, пока маркер ещё в прыжке",
			preserveAspectRatio: "xMidYMid meet",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					className: "floor",
					d: "M 36 380 H 764"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					className: "arc",
					d: "M 118 236 C 230 236, 300 16, 390 40 S 540 148, 580 148"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					className: "ghost",
					x: "200",
					y: "148",
					width: "340",
					height: "68"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					className: "plat",
					x: "36",
					y: "236",
					width: "320",
					height: "68"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					className: "cap",
					x: "36",
					y: "236",
					width: "320",
					height: "8"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					className: "plat",
					x: "500",
					y: "148",
					width: "264",
					height: "68"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					className: "cap",
					x: "500",
					y: "148",
					width: "264",
					height: "8"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					transform: "translate(370 182)",
					children: animate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateTransform", {
						attributeName: "transform",
						type: "rotate",
						values: "0; 0; -90; -90; 0",
						keyTimes: ROTATE_KEYS,
						calcMode: "spline",
						keySplines: ROTATE_SPLINE,
						dur: DUR,
						begin: BEGIN,
						repeatCount: "indefinite"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						className: "slab-body",
						x: "-34",
						y: "-170",
						width: "68",
						height: "340"
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						transform: "rotate(-56)",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							className: "slab-body",
							x: "-34",
							y: "-170",
							width: "68",
							height: "340"
						})
					})
				}),
				animate ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animate", {
						attributeName: "opacity",
						values: "1; 1; 1; 0; 0; 1",
						keyTimes: "0; 0.74; 0.8; 0.86; 0.92; 1",
						dur: DUR,
						begin: BEGIN,
						repeatCount: "indefinite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("animateTransform", {
						attributeName: "transform",
						type: "translate",
						values: "100 200; 100 200; 360 16; 545 112; 545 112; 100 200; 100 200",
						keyTimes: RUN_KEYS,
						calcMode: "spline",
						keySplines: RUN_SPLINE,
						dur: DUR,
						begin: BEGIN,
						repeatCount: "indefinite"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						className: "runner-body",
						width: "36",
						height: "36"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						className: "runner-mark",
						x: "20",
						y: "10",
						width: "8",
						height: "8"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "translate(360 16)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						className: "runner-body",
						width: "36",
						height: "36"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						className: "runner-mark",
						x: "20",
						y: "10",
						width: "8",
						height: "8"
					})]
				})
			]
		})]
	});
}
var STORAGE_KEY = "sensority-order";
var STEPS = [
	{
		n: "01",
		title: "Смотришь",
		text: "Описание на этой странице. Трейлер ещё в монтаже, демка уже запускается."
	},
	{
		n: "02",
		title: "Покупаешь",
		text: "Один платёж 350 ₽. Забираешь копию и право играть."
	},
	{
		n: "03",
		title: "Играешь",
		text: "На ПК открываешь сюжет и бежишь: стены двигаешь в том же прыжке."
	}
];
function isEmail(value) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
function LandingPage() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(null);
	function onSubmit(event) {
		event.preventDefault();
		const next = email.trim().toLowerCase();
		if (!isEmail(next)) {
			setError("Укажи почту в виде name@mail.ru");
			return;
		}
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			const prev = raw ? JSON.parse(raw) : [];
			const list = Array.isArray(prev) ? prev : [];
			list.push({
				email: next,
				at: (/* @__PURE__ */ new Date()).toISOString()
			});
			localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
		} catch {
			setError("Не удалось записать заявку в этом браузере");
			return;
		}
		setError("");
		setDone(next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative h-dvh overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "hero-grid pointer-events-none absolute inset-0"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex h-full max-w-6xl flex-col px-5 pb-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex h-14 shrink-0 items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm font-medium tracking-wide",
						children: "SENSORITY"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 text-sm tabular-nums text-muted",
						children: "лицензия 350 ₽"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)] items-center gap-4 lg:grid-cols-2 lg:grid-rows-1 lg:gap-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl self-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl leading-none font-medium sm:text-5xl",
								children: "Решаешь пазл, не сбавляя бег"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-md text-base text-muted sm:text-lg",
								children: "Хватит выбирать между паузой на пазл и чистым забегом"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#zakaz",
								className: "buy mt-5 inline-flex h-12 items-center px-6 text-base font-semibold",
								children: "Купить игру"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex items-start gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									className: "mt-1 inline-block size-2 shrink-0 bg-accent"
								}), "Рабочая демка уже есть — в неё можно зайти"]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JumpSlice, {})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium md:text-3xl",
					children: "Как это работает"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-10 md:grid-cols-3",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line pt-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-sm text-accent tabular-nums",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-medium",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: step.text
							})
						]
					}, step.n))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium md:text-3xl",
					children: "Для кого"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl border-l-2 border-accent pl-5 text-lg leading-normal md:text-xl",
					children: "ПК-игроку от 18 лет, которому нужны и пространственные пазлы, и скоростной экшен. Ему надоело, что ради загадки приходится стоять, а ради скорости — бросать мысль. Он хочет одну сессию от первого лица: паркур не встаёт на паузу, комнату он перестраивает в прыжке, и этим комбо двигает сюжет."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium md:text-3xl",
					children: "Сколько стоит"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-end gap-8 md:grid-cols-[auto_1fr] md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-6xl font-bold text-accent tabular-nums",
						children: "350 ₽"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl leading-normal text-muted",
						children: "Платит игрок, один раз. 350 ₽ — лицензия на SENSORITY: копия и право ею пользоваться. Дополнения, если выйдут, оплачиваются отдельно. В лицензии — сюжет, где скорость прохождения и решение пазла одно действие: геометрию мира меняешь в прыжке."
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "zakaz",
			className: "scroll-mt-6 border-t border-line bg-surface",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl font-medium md:text-3xl",
					children: "Оставь почту"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md leading-normal text-muted",
					children: "Пришлём демку и способ купить лицензию за 350 ₽ из РФ, без обходных путей. Трейлер ещё в монтаже."
				})] }), done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "status",
					className: "border border-line bg-bg px-5 py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg font-medium",
							children: "Заявка записана"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 leading-normal",
							children: [done, " — заявка на демку и лицензию за 350 ₽."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "link-quiet mt-4 text-sm text-muted underline decoration-line underline-offset-4",
							onClick: () => setDone(null),
							children: "Изменить почту"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					className: "flex flex-col gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "email",
							className: "text-sm text-muted",
							children: "Почта"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "email",
							name: "email",
							type: "email",
							inputMode: "email",
							autoComplete: "email",
							spellCheck: false,
							required: true,
							value: email,
							placeholder: "name@mail.ru",
							"aria-invalid": error ? true : void 0,
							"aria-describedby": error ? "email-error" : void 0,
							onChange: (event) => {
								setEmail(event.target.value);
								if (error) setError("");
							},
							className: "field h-12 border border-line bg-bg px-4 text-base text-fg"
						}),
						error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "email-error",
							className: "text-sm",
							children: error
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "buy h-12 px-6 text-base font-semibold",
							children: "Оставить почту"
						})
					]
				})]
			})
		})
	] });
}
var SplitComponent = LandingPage;
//#endregion
export { SplitComponent as component };
