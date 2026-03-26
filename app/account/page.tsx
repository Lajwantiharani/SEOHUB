import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth";

type AccountPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const metadata = {
  title: "My Account | SeoHub Ltd"
};

export default async function AccountPage({ searchParams }: AccountPageProps) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login?error=Please+login+to+continue");
  }

  const params = await searchParams;
  const message = typeof params.message === "string" ? params.message : "";

  return (
    <main className="bg-[linear-gradient(180deg,#FFFDF4_0%,#FFF8DE_48%,#FFF1C2_100%)] py-16">
      <section className="container-shell">
        <div className="mx-auto max-w-[720px] rounded-[2rem] border border-[rgba(212,160,23,0.18)] bg-white p-8 shadow-[0_24px_56px_rgba(212,160,23,0.10)] md:p-10">
          <p className="eyebrow">Account</p>
          <h1 className="mt-5 text-[clamp(2.2rem,4vw,3.4rem)] font-semibold tracking-[-0.05em] text-[#1a1a1a]">
            Welcome, {user.firstName}
          </h1>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">
            Your SeoHub Ltd account is active.
          </p>

          {message ? <p className="mt-6 rounded-xl bg-[#f6f8e8] px-4 py-3 text-sm text-[#5b5f18]">{message}</p> : null}

          <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-[rgba(212,160,23,0.16)] bg-[#fffdf6] p-6 text-sm text-[#2b2414] md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">First name</p>
              <p className="mt-2 text-base font-semibold text-[#1a1a1a]">{user.firstName}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Last name</p>
              <p className="mt-2 text-base font-semibold text-[#1a1a1a]">{user.lastName}</p>
            </div>
            <div className="md:col-span-2">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Email</p>
              <p className="mt-2 text-base font-semibold text-[#1a1a1a]">{user.email}</p>
            </div>
          </div>

          <form action="/api/auth/logout" method="post" className="mt-8">
            <button type="submit" className="inline-flex h-12 items-center justify-center rounded-full border border-[rgba(212,160,23,0.28)] bg-[rgba(224,159,62,0.12)] px-7 text-[15px] font-semibold tracking-[-0.2px] text-[#1a1a1a] transition hover:bg-[rgba(224,159,62,0.20)]">
              Logout
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
