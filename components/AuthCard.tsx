type AuthCardProps = {
  children: React.ReactNode;
};

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl px-8 py-10 text-center space-y-8">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
      {children}
    </div>
  );
}
