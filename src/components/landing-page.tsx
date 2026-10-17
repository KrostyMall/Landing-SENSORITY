import { useState, type FormEvent } from "react";
import { JumpSlice } from "@/components/jump-slice";

const STORAGE_KEY = "sensority-order";

const STEPS = [
  {
    n: "01",
    title: "Смотришь",
    text: "Страница и демка. Трейлер ещё в монтаже.",
  },
  {
    n: "02",
    title: "Покупаешь",
    text: "350 ₽ один раз — копия и право играть.",
  },
  {
    n: "03",
    title: "Играешь",
    text: "В 3D двигаешь стены в том же прыжке.",
  },
] as const;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function LandingPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next = email.trim().toLowerCase();
    if (!isEmail(next)) {
      setError("Укажи почту в виде name@mail.ru");
      return;
    }
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const prev: { email: string; at: string }[] = raw ? JSON.parse(raw) : [];
      const list = Array.isArray(prev) ? prev : [];
      list.push({ email: next, at: new Date().toISOString() });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      setError("Не удалось записать заявку в этом браузере");
      return;
    }
    setError("");
    setDone(next);
  }

  function focusOrder() {
    document.getElementById("email")?.focus();
  }

  return (
    <main className="relative h-dvh overflow-hidden">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-4 py-3 sm:px-6">
        <header className="flex h-8 shrink-0 items-center justify-between gap-3">
          <p className="font-display text-xs font-medium tracking-wide sm:text-sm">Project: SENSORITY</p>
          <p className="shrink-0 text-xs tabular-nums text-muted sm:text-sm">3D · 350 ₽</p>
        </header>

        <div className="mt-2 grid min-h-0 flex-1 grid-rows-[auto_minmax(0,1fr)_auto] gap-3 lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)_auto]">
          <section className="self-center lg:col-start-1 lg:row-start-1">
            <h1 className="font-display text-2xl leading-none font-medium sm:text-4xl">
              Решаешь пазл, не сбавляя бег
            </h1>
            <p className="mt-2 max-w-md text-sm text-muted sm:text-base">
              3D-комната меняется в прыжке — не надо выбирать жанр
            </p>
            <button
              type="button"
              className="buy mt-3 inline-flex h-11 items-center px-5 text-sm font-semibold"
              onClick={focusOrder}
            >
              Купить игру
            </button>
            <p className="mt-2 flex items-start gap-2 text-xs sm:text-sm">
              <span aria-hidden="true" className="mt-1 inline-block size-2 shrink-0 bg-accent" />
              Рабочая демка уже есть — в неё можно зайти
            </p>
          </section>

          <div className="min-h-0 lg:col-start-2 lg:row-start-1">
            <JumpSlice />
          </div>

          <div className="grid gap-3 border-t border-line pt-3 lg:col-span-2 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
            <div className="grid gap-3 sm:grid-cols-[1.2fr_0.8fr] lg:grid-cols-1">
              <section>
                <h2 className="font-display text-xs font-medium text-muted">Как это работает</h2>
                <ol className="mt-2 grid grid-cols-3 gap-2">
                  {STEPS.map((step) => (
                    <li key={step.n}>
                      <p className="font-display text-xs text-accent tabular-nums">{step.n}</p>
                      <h3 className="mt-1 font-display text-sm font-medium">{step.title}</h3>
                      <p className="mt-1 text-xs leading-snug text-muted">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </section>
              <section>
                <h2 className="font-display text-xs font-medium text-muted">Для кого</h2>
                <p className="mt-1 border-l-2 border-accent pl-2 text-xs leading-snug sm:text-sm">
                  ПК-игроку от 18 лет, которому нужны и пространственные пазлы, и скоростной экшен. В
                  одной 3D-сессии от первого лица он перестраивает комнату в прыжке, и этим комбо двигает
                  сюжет.
                </p>
              </section>
            </div>

            <section id="zakaz" className="flex flex-col justify-end">
              <h2 className="font-display text-xs font-medium text-muted">Сколько стоит</h2>
              <p className="mt-1 font-display text-3xl font-bold text-accent tabular-nums">350 ₽</p>
              <p className="mt-1 text-xs leading-snug text-muted">
                Платит игрок, один раз. Лицензия на Project: SENSORITY: копия и право играть. Дополнения
                отдельно. Внутри — 3D-сюжет, где скорость и пазл одно действие.
              </p>
              <h3 className="mt-2 font-display text-sm font-medium">Оставь почту</h3>
              {done ? (
                <div role="status" className="mt-1">
                  <p className="text-xs leading-snug">
                    Заявка записана: {done}. Демка и оплата 350 ₽ из РФ.
                  </p>
                  <button
                    type="button"
                    className="link-quiet mt-1 text-xs text-muted underline decoration-line underline-offset-4"
                    onClick={() => setDone(null)}
                  >
                    Изменить почту
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="mt-1 flex flex-col gap-1.5">
                  <label htmlFor="email" className="sr-only">
                    Почта
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    spellCheck={false}
                    required
                    value={email}
                    placeholder="name@mail.ru"
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? "email-error" : "email-hint"}
                    onChange={(event) => {
                      setEmail(event.target.value);
                      if (error) setError("");
                    }}
                    className="field h-11 border border-line bg-bg px-3 text-sm text-fg"
                  />
                  <p id={error ? "email-error" : "email-hint"} className="text-xs text-muted">
                    {error || "Демка и оплата из РФ, без обходных путей."}
                  </p>
                  <button type="submit" className="buy h-11 px-4 text-sm font-semibold">
                    Оставить почту
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
