import Image from "next/image";

interface ConferenceCardProps {
  country: string;
  date: string;
  image: string;
  status: "upcoming" | "past" | "ongoing";
  statusLabel: string;
}

export default function ConferenceCard({
  country,
  date,
  image,
  status,
  statusLabel,
}: ConferenceCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden">
      <div className="aspect-[4/3] relative">
        <Image
          src={image}
          alt={`${country} conference`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-2 ${
            status === "upcoming"
              ? "bg-amber-500/20 text-amber-400"
              : "bg-white/10 text-gray-400"
          }`}
        >
          {statusLabel}
        </span>
        <h3 className="text-white font-semibold text-lg">{country}</h3>
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
    </div>
  );
}
