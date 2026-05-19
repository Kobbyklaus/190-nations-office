import GlassCard from "./GlassCard";
import { Quote } from "lucide-react";

export default function TestimonialCard({ quote, name, role, country }) {
  return (
    <GlassCard className="p-6 min-w-[300px] max-w-[360px] flex-shrink-0">
      <Quote className="w-8 h-8 text-amber-500/40 mb-3" />
      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-4">
        {quote}
      </p>
      <div className="border-t border-white/10 pt-4">
        <p className="text-white font-semibold text-sm">{name}</p>
        <p className="text-gray-400 text-xs">
          {role} &middot; {country}
        </p>
      </div>
    </GlassCard>
  );
}
