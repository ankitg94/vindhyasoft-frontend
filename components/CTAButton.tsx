import Link from "next/link";

type CTAButtonProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

export function CTAButton({ href, icon, title, description }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl 
      
      px-6 py-4 text-sm md:text-base font-semibold text-white shadow-lg shadow-blue-500/30 
      transition-transform duration-200 hover:scale-[1.02] 
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 
      focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <span className="relative flex items-center gap-2">
        <span className="text-lg">{icon}</span>
        <span>
          {title}
          <span className="block text-xs font-normal text-blue-100/90">
            {description}
          </span>
        </span>
      </span>
    </Link>
  );
}
