import Image from "next/image";
import GlassCard from "./GlassCard";
import { ExternalLink } from "lucide-react";

interface BookCardProps {
  title: string;
  description: string;
  image?: string;
  href?: string;
}

export default function BookCard({ title, description, image, href = "https://190.dagbooks.org" }: BookCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <GlassCard hover className="overflow-hidden h-full flex flex-col">
        <div className="aspect-[3/4] relative">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-amber-900/40 to-slate-800 flex items-center justify-center p-4">
              <p className="text-amber-400 font-semibold text-center text-sm leading-snug">
                {title}
              </p>
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-amber-500/0 group-hover:bg-amber-500/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-amber-500 text-slate-950 rounded-full p-2">
              <ExternalLink className="w-4 h-4" />
            </span>
          </div>
        </div>
        <div className="p-4 flex-1">
          <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1 group-hover:text-amber-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </GlassCard>
    </a>
  );
}
