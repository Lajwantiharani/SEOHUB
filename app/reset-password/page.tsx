import { redirect } from "next/navigation";

type ResetPasswordPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = {
  title: "Reset Password | SeoHub Ltd"
};

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
  const params = await searchParams;
  const token = typeof params.token === "string" ? params.token : "";
  const error = typeof params.error === "string" ? params.error : "";

  if (!token) {
    redirect("/forgot-password?error=Reset+link+is+missing");
  }

  return (
    <main className="min-h-screen overflow-y-auto bg-[linear-gradient(180deg,#FFFDF4_0%,#FFF8DE_48%,#FFF1C2_100%)] lg:h-dvh lg:overflow-hidden">
      <section className="container-shell flex min-h-screen items-center justify-center py-4 lg:h-full lg:min-h-0 lg:py-3">
        <div className="mx-auto w-full max-w-[620px] rounded-[1.5rem] border border-[rgba(212,160,23,0.18)] bg-white p-6 shadow-[0_24px_56px_rgba(212,160,23,0.10)] sm:p-8 md:p-10 lg:rounded-[2rem]">
          <p className="eyebrow">Set Password</p>
          <h1 className="mt-5 text-[clamp(2rem,8vw,3.4rem)] font-semibold tracking-[-0.05em] text-[#1a1a1a]">
            Choose a new password
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            Enter your new password below to finish the reset.
          </p>

          {error ? <p className="mt-6 rounded-xl bg-[#fff1f1] px-4 py-3 text-sm text-[#9b1c1c]">{error}</p> : null}

          <form action="/api/auth/reset-password" method="post" className="mt-8 grid gap-5">
            <input type="hidden" name="token" value={token} />

            <label className="grid gap-2 text-sm font-medium text-[#2b2414]">
              New password
              <input type="password" name="password" placeholder="New password" className="h-12 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)]" />
            </label>

            <label className="grid gap-2 text-sm font-medium text-[#2b2414]">
              Confirm password
              <input type="password" name="confirmPassword" placeholder="Confirm password" className="h-12 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)]" />
            </label>

            <button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[var(--brand)] px-7 text-[15px] font-semibold tracking-[-0.2px] text-black transition hover:bg-[var(--accent)]">
              Update password
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
