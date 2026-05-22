type Props = {
  title: string;
  text: string;
  image: string;
  tag?: string;
};

export default function RealImageCard({ title, text, image, tag }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <div className="relative h-44">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        {tag && (
          <div className="absolute left-4 top-4 rounded-full bg-cyan-400 px-3 py-1 text-xs font-bold text-slate-950">
            {tag}
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-black text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
      </div>
    </div>
  );
}
