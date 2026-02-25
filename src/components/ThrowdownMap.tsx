"use client";

import { useState, useCallback, useMemo } from "react";
import USAMap from "react-usa-map";

interface Competition {
  slug: string;
  label: string;
  date: string;
  registrationCloses: string;
}

interface ThrowdownLocation {
  id: number;
  city: string;
  state: string;
  stateCode: string;
  gym: string;
  x: number;
  y: number;
  competitions: Competition[];
}

const throwdownLocations: ThrowdownLocation[] = [
  { id: 1, city: "Fullerton", state: "California", stateCode: "CA", gym: "CrossFit Fullerton", x: 9.9, y: 58.5, competitions: [
    { slug: "crossfit-fullerton-individuals-mwfc-throwdown-fullerton-ca-", label: "Individuals", date: "Jul 11", registrationCloses: "2026-06-16" },
  ]},
  { id: 2, city: "Twin Falls", state: "Idaho", stateCode: "ID", gym: "CrossFit Twin Falls", x: 19.7, y: 30.2, competitions: [
    { slug: "crossfit-twin-falls-individuals-mwfc-throwdown-twin-falls-idaho", label: "Individuals", date: "Jul 11", registrationCloses: "2026-06-16" },
  ]},
  { id: 3, city: "Meridian", state: "Idaho", stateCode: "ID", gym: "CrossFit Northside", x: 17.1, y: 25.5, competitions: [
    { slug: "crossfit-northside-masters-35-teams-of-2-mwfc-throwdown-meridian-id", label: "Masters 35+ Teams of 2", date: "Jul 18", registrationCloses: "2026-06-23" },
  ]},
  { id: 4, city: "Salt Lake City", state: "Utah", stateCode: "UT", gym: "Salty Hive CrossFit", x: 23, y: 37.7, competitions: [
    { slug: "salty-hive-crossfit-team-of-2-mwfc-throwdown-salt-lake-city-utah", label: "Team of 2", date: "Aug 1", registrationCloses: "2026-07-01" },
  ]},
  { id: 5, city: "La Grande", state: "Oregon", stateCode: "OR", gym: "Eagle Cap CrossFit", x: 15.4, y: 18.7, competitions: [
    { slug: "eagle-cap-crossfit-team-of-2-mwfc-throwdown-la-grande-oregon", label: "Team of 2", date: "Aug 1", registrationCloses: "2026-07-01" },
  ]},
  { id: 6, city: "Nampa", state: "Idaho", stateCode: "ID", gym: "Snake River CrossFit", x: 16.8, y: 25.7, competitions: [
    { slug: "snake-river-crossfit-team-of-2-mwfc-throwdown-nampa-idaho", label: "Team of 2", date: "Aug 1", registrationCloses: "2026-08-01" },
  ]},
  { id: 7, city: "Caldwell", state: "Idaho", stateCode: "ID", gym: "CrossFit Canvas", x: 16.7, y: 25.2, competitions: [
    { slug: "crossfit-canvas-individuals-mwfc-throwdown-caldwell-id", label: "Individuals", date: "Jul 11", registrationCloses: "2026-06-16" },
  ]},
  { id: 8, city: "Elko", state: "Nevada", stateCode: "NV", gym: "Last Rep CrossFit", x: 16.8, y: 35.5, competitions: [
    { slug: "last-rep-crossfit-team-of-2-mwfc-throwdown-elko-nevada", label: "Team of 2", date: "Aug 1", registrationCloses: "2026-07-01" },
  ]},
  { id: 9, city: "Seattle", state: "Washington", stateCode: "WA", gym: "Slate Strength & Conditioning", x: 10.4, y: 8.3, competitions: [
    { slug: "slate-strength-conditioning-team-of-2-mwfc-throwdown-seattle-washington", label: "Team of 2", date: "Aug 1", registrationCloses: "2026-07-01" },
  ]},
  { id: 10, city: "Medford", state: "Oregon", stateCode: "OR", gym: "CrossFit Ravage", x: 6.4, y: 25.9, competitions: [
    { slug: "crossfit-ravage-masters-35-teams-of-2-mwfc-throwdown-medford-oregon", label: "Masters 35+ Teams of 2", date: "Jul 18", registrationCloses: "2026-06-23" },
  ]},
  { id: 11, city: "Holladay", state: "Utah", stateCode: "UT", gym: "RXFIT", x: 23.1, y: 38.1, competitions: [
    { slug: "rxfit-holladay-masters-35-individual-mwfc-throwdown-holladay-utah", label: "Masters 35+ Individual", date: "Jul 11", registrationCloses: "2026-06-16" },
  ]},
  { id: 12, city: "Idaho Falls", state: "Idaho", stateCode: "ID", gym: "Maltese CrossFit", x: 23.8, y: 28.1, competitions: [
    { slug: "maltese-crossfit-masters-35-individual-mwfc-throwdown-idaho-falls-idaho", label: "Masters 35+ Individual", date: "Jul 11", registrationCloses: "2026-06-16" },
  ]},
  { id: 13, city: "Twin Falls", state: "Idaho", stateCode: "ID", gym: "The Pack 208", x: 19.7, y: 30.2, competitions: [
    { slug: "the-pack-208-crossfit-teams-of-2-mwfc-throwdown-twin-falls-idaho", label: "Teams of 2", date: "Aug 1", registrationCloses: "2026-07-01" },
  ]},
  { id: 14, city: "Escondido", state: "California", stateCode: "CA", gym: "CrossFit Escondido", x: 11, y: 61.6, competitions: [
    { slug: "crossfit-escondido-individuals-mwfc-throwdown-escondido-ca", label: "Individuals", date: "Jul 11", registrationCloses: "2026-06-16" },
    { slug: "crossfit-escondido-team-of-2-mwfc-throwdown-escondido-california", label: "Team of 2", date: "Aug 1", registrationCloses: "2026-07-01" },
  ]},
  { id: 15, city: "Riverton", state: "Utah", stateCode: "UT", gym: "Skol CrossFit", x: 22.9, y: 38.5, competitions: [
    { slug: "crossfit-skol-masters-35-teams-of-2-mwfc-throwdown-riverton-utah", label: "Masters 35+ Teams of 2", date: "Jul 18", registrationCloses: "2026-06-23" },
  ]},
  { id: 16, city: "Whitefish", state: "Montana", stateCode: "MT", gym: "Big Mountain CrossFit", x: 22.3, y: 10, competitions: [
    { slug: "big-mountain-crossfit-masters-35-individual-mwfc-throwdown-whitefish-montana", label: "Masters 35+ Individual", date: "Jul 11", registrationCloses: "2026-06-16" },
  ]},
  { id: 17, city: "Lehi", state: "Utah", stateCode: "UT", gym: "CrossFit Lehi", x: 23, y: 39, competitions: [
    { slug: "crossfit-lehi-individual-mwfc-throwdown-lehi-utah", label: "Individual", date: "Jul 11", registrationCloses: "2026-06-16" },
  ]},
  { id: 18, city: "Redmond", state: "Oregon", stateCode: "OR", gym: "CrossFit Magnify", x: 10.2, y: 20.4, competitions: [
    { slug: "crossfit-magnify-team-of-2-mwfc-throwdown-redmond-oregon", label: "Team of 2", date: "Aug 1", registrationCloses: "2026-08-01" },
  ]},
  { id: 19, city: "Tacoma", state: "Washington", stateCode: "WA", gym: "RCF Tacoma", x: 10.1, y: 9.4, competitions: [
    { slug: "rcf-crossfit-masters-35-teams-of-2-mwfc-throwdown-tacoma-washington", label: "Masters 35+ Teams of 2", date: "Jul 18", registrationCloses: "2026-06-23" },
  ]},
  { id: 20, city: "Carson City", state: "Nevada", stateCode: "NV", gym: "Carson City CrossFit", x: 9.5, y: 38.9, competitions: [
    { slug: "carson-city-crossfit-individuals-mwfc-throwdown-carson-city-nevada", label: "Individuals", date: "Jul 11", registrationCloses: "2026-06-16" },
    { slug: "carson-city-crossfit-masters-35-teams-of-2-mwfc-throwdown-carson-city-nevada", label: "Masters 35+ Teams of 2", date: "Jul 18", registrationCloses: "2026-06-23" },
  ]},
];

// Mountain West region states
const mountainWestStates = ["WA", "OR", "CA", "NV", "ID", "MT", "WY", "UT", "CO", "AZ", "NM"];

// States that have throwdown locations
const statesWithLocations = [...new Set(throwdownLocations.map((l) => l.stateCode))];

const stateNames: Record<string, string> = {
  CA: "California",
  ID: "Idaho",
  UT: "Utah",
  OR: "Oregon",
  WA: "Washington",
  NV: "Nevada",
  MT: "Montana",
};

// Detect clusters and fan out overlapping pins
function computeFannedPositions(
  locations: ThrowdownLocation[],
  threshold = 1.2, // % distance to consider "overlapping"
  spreadRadius = 1.2, // % radius to fan out to
): Map<number, { x: number; y: number }> {
  const adjusted = new Map<number, { x: number; y: number }>();
  const visited = new Set<number>();

  for (const loc of locations) {
    if (visited.has(loc.id)) continue;

    // Find all locations within threshold distance of this one
    const cluster = locations.filter(
      (other) =>
        !visited.has(other.id) &&
        Math.sqrt((loc.x - other.x) ** 2 + (loc.y - other.y) ** 2) <= threshold,
    );

    if (cluster.length <= 1) {
      // No overlap, keep original position
      adjusted.set(loc.id, { x: loc.x, y: loc.y });
      visited.add(loc.id);
      continue;
    }

    // Compute centroid of the cluster
    const cx = cluster.reduce((sum, l) => sum + l.x, 0) / cluster.length;
    const cy = cluster.reduce((sum, l) => sum + l.y, 0) / cluster.length;

    // Fan out in a circle around the centroid
    const angleStep = (2 * Math.PI) / cluster.length;
    const startAngle = -Math.PI / 2; // start from top

    for (let i = 0; i < cluster.length; i++) {
      const angle = startAngle + i * angleStep;
      adjusted.set(cluster[i].id, {
        x: cx + Math.cos(angle) * spreadRadius,
        y: cy + Math.sin(angle) * spreadRadius,
      });
      visited.add(cluster[i].id);
    }
  }

  return adjusted;
}

export default function ThrowdownMap() {
  const [selectedLocation, setSelectedLocation] = useState<ThrowdownLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<ThrowdownLocation | null>(null);
  const [zoomedState, setZoomedState] = useState<string | null>(null);
  const [linkCopied, setLinkCopied] = useState(false);

  // Fanned positions for pins when zoomed into a state
  const fannedPositions = useMemo(() => {
    if (!zoomedState) return null;
    const stateLocations = throwdownLocations.filter((l) => l.stateCode === zoomedState);
    return computeFannedPositions(stateLocations);
  }, [zoomedState]);

  // Calculate zoom transform based on state's location pins
  const zoomTransform = useMemo(() => {
    if (!zoomedState) return null;

    const locations = throwdownLocations.filter((l) => l.stateCode === zoomedState);
    if (locations.length === 0) return null;

    const xs = locations.map((l) => l.x);
    const ys = locations.map((l) => l.y);
    const centerX = (Math.min(...xs) + Math.max(...xs)) / 2;
    const centerY = (Math.min(...ys) + Math.max(...ys)) / 2;

    // Zoom level based on spread of pins (tighter cluster = more zoom)
    const rangeX = Math.max(Math.max(...xs) - Math.min(...xs), 8);
    const rangeY = Math.max(Math.max(...ys) - Math.min(...ys), 8);
    const zoom = Math.min(70 / rangeX, 70 / rangeY, 4.5);

    // Translate so the center of the state's pins ends up at viewport center
    const tx = 50 - centerX * zoom;
    const ty = 50 - centerY * zoom;

    return { zoom, tx, ty, centerX, centerY };
  }, [zoomedState]);

  // Filter sidebar locations when zoomed
  const displayedLocations = useMemo(() => {
    if (!zoomedState) return throwdownLocations;
    return throwdownLocations.filter((l) => l.stateCode === zoomedState);
  }, [zoomedState]);

  // Configure state colors
  const statesCustomConfig = useCallback(() => {
    const config: Record<string, { fill: string }> = {};

    // Mountain West states get green fill
    for (const state of mountainWestStates) {
      config[state] = { fill: "#326549" };
    }

    // Highlight zoomed state
    if (zoomedState) {
      config[zoomedState] = { fill: "#4a8a66" };
    }

    return config;
  }, [zoomedState]);

  const mapHandler = useCallback((event: React.MouseEvent<SVGPathElement>) => {
    const stateCode = (event.target as SVGPathElement).dataset.name;
    if (stateCode && statesWithLocations.includes(stateCode)) {
      setZoomedState(stateCode);
      setSelectedLocation(null);
      setHoveredLocation(null);
    }
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoomedState(null);
    setSelectedLocation(null);
    setHoveredLocation(null);
  }, []);

  return (
    <div id="throwdown-map" className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 scroll-mt-28">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green to-forest-green/80 px-6 py-4 border-b border-forest-green/50">
        <button
          type="button"
          className="group flex items-center gap-2 cursor-pointer"
          onClick={() => {
            const url = `${window.location.origin}${window.location.pathname}#throwdown-map`;
            navigator.clipboard.writeText(url);
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bebas text-white tracking-wider">
            MWFC THROWDOWN HOST MAP
          </h2>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white/40 group-hover:text-sunrise-gold transition-colors shrink-0 mt-1"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          {linkCopied && (
            <span className="text-sunrise-gold text-xs font-bold animate-pulse">Link copied!</span>
          )}
        </button>
        <p className="text-white/80 text-sm mt-1">
          Current Throwdown Host Locations
          {!zoomedState && " — Click a highlighted state to zoom in"}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Map Container */}
        <div className="flex-1 relative p-4 min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
          {/* Zoom out button */}
          {zoomedState && (
            <button
              type="button"
              onClick={handleZoomOut}
              className="absolute top-6 left-6 z-30 bg-pitch-black/90 border border-sunrise-gold text-sunrise-gold px-4 py-2 rounded-lg text-sm font-bold hover:bg-sunrise-gold hover:text-pitch-black transition-all cursor-pointer flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M10 2L4 8l6 6V2z" />
              </svg>
              BACK TO FULL MAP
            </button>
          )}

          {/* State label when zoomed */}
          {zoomedState && (
            <div className="absolute top-6 right-6 z-30 bg-forest-green/90 px-4 py-2 rounded-lg">
              <span className="text-white font-bebas text-xl tracking-wide">
                {stateNames[zoomedState] || zoomedState}
              </span>
              <span className="text-white/70 text-xs ml-2">
                {displayedLocations.length} location{displayedLocations.length !== 1 ? "s" : ""}
              </span>
            </div>
          )}

          {/* Clip container for zoom */}
          <div className="w-full overflow-hidden rounded-lg">
            {/* Transformable map wrapper */}
            <div
              className="usa-map-wrapper relative w-full transition-transform duration-500 ease-in-out"
              style={
                zoomTransform
                  ? {
                      transformOrigin: "0% 0%",
                      transform: `translate(${zoomTransform.tx}%, ${zoomTransform.ty}%) scale(${zoomTransform.zoom})`,
                    }
                  : {
                      transformOrigin: "0% 0%",
                      transform: "translate(0%, 0%) scale(1)",
                    }
              }
            >
              <USAMap
                customize={statesCustomConfig()}
                onClick={mapHandler}
                defaultFill="#4a5568"
                title="MWFC Throwdown Host Map"
                width="100%"
                height="auto"
              />

              {/* Pin Markers Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                {throwdownLocations.map((location) => {
                  const fanned = fannedPositions?.get(location.id);
                  const pinX = fanned ? fanned.x : location.x;
                  const pinY = fanned ? fanned.y : location.y;

                  return (
                  <button
                    key={location.id}
                    type="button"
                    className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-full cursor-pointer group"
                    style={{
                      left: `${pinX}%`,
                      top: `${pinY}%`,
                      zIndex:
                        hoveredLocation?.id === location.id
                          ? 10
                          : selectedLocation?.id === location.id
                            ? 1
                            : 5,
                      transition: "left 0.5s ease-in-out, top 0.5s ease-in-out",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedLocation(location);
                      if (!zoomedState || zoomedState !== location.stateCode) {
                        setZoomedState(location.stateCode);
                      }
                    }}
                    onMouseEnter={() => setHoveredLocation(location)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    {/* Pin SVG - counter-scale when zoomed so pins stay readable size */}
                    <svg
                      width="19"
                      height="26"
                      viewBox="0 0 24 32"
                      className="transition-all duration-200"
                      style={{
                        transform: zoomTransform
                          ? `scale(${1 / zoomTransform.zoom})`
                          : undefined,
                        filter:
                          selectedLocation?.id === location.id || hoveredLocation?.id === location.id
                            ? "drop-shadow(0 0 6px rgba(255,183,0,0.8))"
                            : "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                      }}
                    >
                      <path
                        d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12z"
                        fill={selectedLocation?.id === location.id ? "#ffb700" : "#ffffff"}
                        stroke={selectedLocation?.id === location.id ? "#ffb700" : "#326549"}
                        strokeWidth="2"
                      />
                      <circle cx="12" cy="11" r="5" fill="#326549" />
                    </svg>
                  </button>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Hover tooltip - fixed top-right, below state label when zoomed */}
          {hoveredLocation && (
            <div className={`absolute right-6 z-30 bg-pitch-black/95 border border-sunrise-gold px-4 py-3 rounded-lg shadow-lg pointer-events-none ${zoomedState ? "top-20" : "top-6"}`}>
              <p className="text-sunrise-gold font-bold text-sm">{hoveredLocation.gym}</p>
              <p className="text-white text-xs mt-1">{hoveredLocation.city}, {hoveredLocation.stateCode}</p>
            </div>
          )}
        </div>

        {/* Sidebar - Host Gyms List */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-700 bg-gray-900/50">
          <div className="p-4 border-b border-gray-700 bg-gradient-to-r from-forest-green/20 to-transparent">
            <h3 className="text-xl font-bebas text-white tracking-wide">
              {zoomedState ? `${stateNames[zoomedState] || zoomedState} GYMS` : "HOST GYMS"}
            </h3>
            <p className="text-xs text-gray-400">{displayedLocations.length} Location{displayedLocations.length !== 1 ? "s" : ""}</p>
          </div>
          <div className="h-64 lg:h-[400px] overflow-y-auto custom-scrollbar">
            {displayedLocations.map((location) => (
              <button
                type="button"
                key={location.id}
                className={`w-full text-left p-4 border-b border-gray-800 transition-all hover:bg-forest-green/20 ${
                  selectedLocation?.id === location.id ? "bg-forest-green/30 border-l-4 border-l-sunrise-gold" : ""
                }`}
                onClick={() => {
                  setSelectedLocation(location);
                  if (!zoomedState || zoomedState !== location.stateCode) {
                    setZoomedState(location.stateCode);
                  }
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{location.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm">{location.gym}</p>
                    <p className="text-forest-green-light text-xs mt-0.5">
                      {location.city}, {location.stateCode}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {location.competitions.map((comp) => (
                        <span key={comp.slug} className="text-[10px] bg-forest-green/30 text-forest-green-light px-1.5 py-0.5 rounded">
                          {comp.label} • {comp.date}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Location Details */}
          {selectedLocation && (
            <div className="p-4 border-t border-gray-700 bg-gradient-to-r from-sunrise-gold/10 to-transparent">
              <h4 className="text-sunrise-gold font-bebas text-lg tracking-wide">SELECTED LOCATION</h4>
              <p className="text-white font-bold mt-2">{selectedLocation.gym}</p>
              <p className="text-gray-400 text-sm">
                {selectedLocation.city}, {selectedLocation.state}
              </p>
              <div className="mt-3 flex flex-col gap-2">
                {selectedLocation.competitions.map((comp) => (
                  <a
                    key={comp.slug}
                    href={`https://wodsmith.com/compete/${comp.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 bg-sunrise-gold text-pitch-black px-3 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition-colors"
                  >
                    <span className="truncate">REGISTER — {comp.label}</span>
                    <span className="text-xs font-normal whitespace-nowrap opacity-80">{comp.date}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Legend */}
      <div className="px-6 py-4 bg-gray-900/80 border-t border-gray-700">
        <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-white border-2 border-forest-green" />
            <span>Throwdown Host Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-forest-green" />
            <span>Mountain West Region</span>
          </div>
          {!zoomedState && (
            <div className="flex items-center gap-2">
              <span className="text-sunrise-gold">Click a green state to zoom in</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .usa-map-wrapper :global(svg) {
          width: 100%;
          height: auto;
        }
        .usa-map-wrapper :global(path) {
          stroke: #1a202c;
          stroke-width: 1;
          transition: fill 0.2s ease;
        }
        .usa-map-wrapper :global(path:hover) {
          opacity: 0.8;
          cursor: pointer;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a202c;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #326549;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4a8a66;
        }
      `}</style>
    </div>
  );
}
