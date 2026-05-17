"use client";

import { useState } from "react";
import ConferenceCard from "@/components/ui/ConferenceCard";
import type { ConferenceEvent } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ConferenceGridProps {
  conferences: ConferenceEvent[];
  upcomingLabel: string;
  pastLabel: string;
  seeMoreLabel: string;
  seeLessLabel: string;
}

export default function ConferenceGrid({
  conferences,
  upcomingLabel,
  pastLabel,
  seeMoreLabel,
  seeLessLabel,
}: ConferenceGridProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? conferences : conferences.slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visible.map((event, i) => (
          <ConferenceCard
            key={i}
            {...event}
            statusLabel={event.status === "upcoming" ? upcomingLabel : pastLabel}
          />
        ))}
      </div>
      {conferences.length > 3 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gold/50 text-gold hover:bg-gold/10 font-semibold text-sm transition-all duration-300"
          >
            {expanded ? seeLessLabel : seeMoreLabel}
            {expanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
