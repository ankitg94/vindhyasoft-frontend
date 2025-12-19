export function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="absolute -right-32 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
    </div>
  );
}
