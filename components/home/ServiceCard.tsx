type Props = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:border-blue-500/40 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-3 text-blue-300">
        {title}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
