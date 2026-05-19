"use client";

import Image from "next/image";

/**
 * Ministry regions plotted on an accurate equirectangular world map.
 * Position math (equirectangular projection):
 *   left% = (lon + 180) / 360 * 100
 *   top%  = (90 - lat) / 180 * 100
 * Marker radius scales with church count: r = clamp(4 + churches/120, 4, 9).
 */

const MARKERS = [
  { name: "South America", churches: 515, lat: -15, lon: -60 },
  { name: "North America", churches: 294, lat: 40, lon: -100 },
  { name: "Asia", churches: 233, lat: 35, lon: 100 },
  { name: "Europe", churches: 198, lat: 50, lon: 10 },
  { name: "Africa", churches: 145, lat: 5, lon: 20 },
  { name: "Oceania", churches: 92, lat: -25, lon: 135 },
  { name: "Caribbean", churches: 68, lat: 18, lon: -75 },
  { name: "Middle East", churches: 41, lat: 28, lon: 45 },
  { name: "Central America", churches: 41, lat: 12, lon: -85 },
];

const GOLD = "#d4a836";

function projate(lat, lon) {
  return {
    left: ((lon + 180) / 360) * 100,
    top: ((90 - lat) / 180) * 100,
  };
}

function radius(churches) {
  return Math.max(4, Math.min(9, 4 + churches / 120));
}

export default function WorldMap() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[2/1]">
      <Image
        src="/images/world-map.svg"
        alt="Map of global ministry reach"
        width={1000}
        height={500}
        priority={false}
        className="w-full h-full object-contain select-none pointer-events-none"
      />

      {MARKERS.map((m) => {
        const { left, top } = projate(m.lat, m.lon);
        const r = radius(m.churches);
        const diameter = r * 2;
        const glow = r * 4;
        return (
          <div
            key={m.name}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${left}%`, top: `${top}%` }}
            aria-hidden="true"
          >
            {/* soft outer glow */}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-ping"
              style={{
                width: `${glow}px`,
                height: `${glow}px`,
                background: `radial-gradient(circle, ${GOLD}55 0%, ${GOLD}00 70%)`,
                animationDuration: "3s",
              }}
            />
            {/* halo */}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: `${diameter * 1.8}px`,
                height: `${diameter * 1.8}px`,
                background: `radial-gradient(circle, ${GOLD}40 0%, ${GOLD}00 70%)`,
              }}
            />
            {/* core dot */}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-300 group-hover:scale-125"
              style={{
                width: `${diameter}px`,
                height: `${diameter}px`,
                background: GOLD,
                boxShadow: `0 0 ${r}px ${r / 2}px ${GOLD}aa`,
              }}
            />
            {/* bright center */}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-100"
              style={{ width: `${r * 0.7}px`, height: `${r * 0.7}px` }}
            />
          </div>
        );
      })}
    </div>
  );
}
