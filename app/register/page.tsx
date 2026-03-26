import { AuthSidePanel } from "@/components/auth-side-panel";
import Link from "next/link";

type RegisterPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = {
  title: "Register | SeoHub Ltd"
};

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : "";

  return (
    <main className="bg-[linear-gradient(180deg,#FFFDF4_0%,#FFF8DE_48%,#FFF1C2_100%)] py-6 md:py-8 lg:py-4 xl:py-5">
      <section className="container-shell">
        <div className="mx-auto grid w-full max-w-[680px] rounded-[1.5rem] border border-[rgba(212,160,23,0.18)] bg-white shadow-[0_20px_48px_rgba(212,160,23,0.10)] lg:max-w-[1180px] lg:grid-cols-[0.95fr_1.05fr] lg:rounded-[1.75rem] lg:overflow-hidden">
          <AuthSidePanel
            eyebrow="SEO Growth"
            title="Build visibility that keeps compounding."
            description="A simple SEO-focused visual for now, so the register experience feels balanced without changing the form content."
          />

          <div className="min-w-0 p-4 sm:p-6 md:p-7 lg:flex lg:min-h-full lg:flex-col lg:justify-center lg:p-6 xl:p-7">
            <div className="mx-auto flex w-full min-w-0 max-w-[460px] flex-col lg:max-w-none">
              <p className="eyebrow self-start">Join Us</p>
              <h1 className="mt-3 text-[clamp(1.9rem,8vw,2.65rem)] font-semibold tracking-[-0.05em] text-[#1a1a1a]">
                Create your account
              </h1>
              <p className="mt-2 text-[15px] leading-6 text-[var(--muted)]">
                Register to get started with SeoHub Ltd.
              </p>

              {error ? <p className="mt-4 w-full rounded-xl bg-[#fff1f1] px-4 py-3 text-sm text-[#9b1c1c]">{error}</p> : null}

              <form action="/api/auth/register" method="post" className="mt-5 grid w-full min-w-0 gap-4 lg:mt-4 lg:gap-3.5">
                <div className="grid w-full min-w-0 gap-4 md:grid-cols-2 lg:gap-3.5">
                  <label className="grid w-full min-w-0 gap-1.5 text-sm font-medium text-[#2b2414]">
                    First name
                    <input type="text" name="firstName" placeholder="First name" className="h-12 w-full min-w-0 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)] lg:h-11" />
                  </label>

                  <label className="grid w-full min-w-0 gap-1.5 text-sm font-medium text-[#2b2414]">
                    Last name
                    <input type="text" name="lastName" placeholder="Last name" className="h-12 w-full min-w-0 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)] lg:h-11" />
                  </label>
                </div>

                <label className="grid w-full min-w-0 gap-1.5 text-sm font-medium text-[#2b2414]">
                  Email
                  <input type="email" name="email" placeholder="you@example.com" className="h-12 w-full min-w-0 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)] lg:h-11" />
                </label>

                <div className="grid w-full min-w-0 gap-4 md:grid-cols-2 lg:gap-3.5">
                  <label className="grid w-full min-w-0 gap-1.5 text-sm font-medium text-[#2b2414]">
                    Password
                    <input type="password" name="password" placeholder="Password" className="h-12 w-full min-w-0 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)] lg:h-11" />
                  </label>

                  <label className="grid w-full min-w-0 gap-1.5 text-sm font-medium text-[#2b2414]">
                    Confirm password
                    <input type="password" name="confirmPassword" placeholder="Confirm password" className="h-12 w-full min-w-0 rounded-xl border border-[rgba(212,160,23,0.22)] bg-[#fffdf6] px-4 text-base text-[#1a1a1a] outline-none transition focus:border-[var(--brand-dark)] lg:h-11" />
                  </label>
                </div>

                <button type="submit" className="mt-1 inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--brand)] px-7 text-[15px] font-semibold tracking-[-0.2px] text-black transition hover:bg-[var(--accent)] lg:h-11">
                  Register
                </button>
              </form>

              <p className="mt-4 text-sm leading-6 text-[var(--muted)] lg:mt-3">
                Already registered? <Link href="/login" className="font-semibold text-[var(--brand-dark)]">Go to login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
