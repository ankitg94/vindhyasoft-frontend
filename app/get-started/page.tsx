import { CTAButton } from "@/components/CTAButton";
import { GlowBackground } from "@/components/GlowBackground";
import { AuthCard } from "@/components/AuthCard";

export default function GetStartedPage() {
  return (
    <main className="flex items-center justify-center">
      <GlowBackground />

      <div className="max-w-lg w-full">
        <AuthCard>
          <div className="space-y-3">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Get Started with Vindhya Soft
            </h1>
            <p className="text-sm md:text-base text-slate-300">
              Choose the path that fits you best and start managing your business with confidence in just a few clicks.
            </p>
          </div>

          <div className="grid gap-4 mt-4">
            <CTAButton
              href="/register"
              icon={"🚀"}
              title="I’m New — Create an Account"
              description="Set up your workspace in under a minute"
            />

            <CTAButton
              href="/login"
              icon={"🔐"}
              title="I’m Already a Customer — Login"
              description="Access your dashboard and continue where you left off"
            />
          </div>
        </AuthCard>
      </div>
    </main>
  );
}
