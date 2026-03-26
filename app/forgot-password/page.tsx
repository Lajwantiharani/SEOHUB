import Link from "next/link";

type ForgotPasswordPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = {
  title: "Forgot Password | SeoHub Ltd"
};

export default async function ForgotPasswordPage({ searchParams }: ForgotPasswordPageProps) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : "";
  const message = typeof params.message === "string" ? params.message : "";

  return (
    <main className="min-h-screen overflow-y-auto bg-[linear-gradient(180deg,#FFFDF4_0%,#FFF8DE_48%,#FFF1C2_100%)] lg:h-dvh lg:overflow-hidden">
      <section className="container-shell flex min-h-screen items-center justify-center py-4 lg:h-full lg:min-h-0 lg:py-3">
        <div className="mx-auto w-full max-w-[620px] rounded-[1.5rem] border border-[rgba(212,160,23,0.18)] bg-white p-6 shadow-[0_24px_56px_rgba(212,160,23,0.10)] sm:p-8 md:p-10 lg:rounded-[2rem]">
       
          <h1 className="mt-5 text-[clamp(2rem,8vw,3.4rem)] font-semibold tracking-[-0.05em] text-[#1a1a1a]">
            Reset your password
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            Enter your email and we will send a reset link if the account exists.
          </p>

          {error ? <p className="mt-6 rounded-xl bg-[#fff1f1] px-4 py-3 text-sm text-[#9b1c1c]">{error}</p> : null}
          {message ? <p className="mt-6 rounded-xl bg-[#f6f8e8] px-4 py-3 text-sm text-[#5b5f18]">{message}</p> : null}

          <form action="/api/auth/forgot-password" method="post" className="mt-8 grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-[#2b2414]">
              Email
              <input type="email" name="email" placeholder="you@example.com" className="h-12 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)]" />
            </label>

            <button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand)] px-7 text-[15px] font-semibold tracking-[-0.2px] text-black transition hover:bg-[var(--accent)]">
              Send reset link
            </button>
          </form>

          <p className="mt-6 text-sm text-[var(--muted)]">
            Remembered your password? <Link href="/login" className="font-semibold text-[var(--brand-dark)]">Back to login</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
