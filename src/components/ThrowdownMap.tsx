"use client";

import { useState, useCallback } from "react";
import USAMap from "react-usa-map";

interface ThrowdownLocation {
  id: number;
  city: string;
  state: string;
  stateCode: string;
  gym: string;
  // Percentage positions on the map (relative to map container)
  x: number;
  y: number;
}

const throwdownLocations: ThrowdownLocation[] = [
  { id: 1, city: "Twin Falls", state: "Idaho", stateCode: "ID", gym: "CrossFit Twin Falls", x: 22, y: 32 },
  { id: 2, city: "Meridian", state: "Idaho", stateCode: "ID", gym: "CrossFit Northside", x: 18, y: 28 },
  { id: 3, city: "Salt Lake City", state: "Utah", stateCode: "UT", gym: "Salty Hive CrossFit", x: 23, y: 43 },
  { id: 4, city: "La Grande", state: "Oregon", stateCode: "OR", gym: "Eagle Cap CrossFit", x: 14, y: 24 },
  { id: 5, city: "Nampa", state: "Idaho", stateCode: "ID", gym: "Snake River CrossFit", x: 17, y: 29 },
  { id: 6, city: "Caldwell", state: "Idaho", stateCode: "ID", gym: "CrossFit Canvas", x: 16, y: 30 },
  { id: 7, city: "Elko", state: "Nevada", stateCode: "NV", gym: "Last Rep CrossFit Elko", x: 19, y: 38 },
  { id: 8, city: "Seattle", state: "Washington", stateCode: "WA", gym: "Slate Strength & Conditioning", x: 12, y: 12 },
  { id: 9, city: "Fullerton", state: "California", stateCode: "CA", gym: "CrossFit Fullerton", x: 13, y: 58 },
  { id: 10, city: "Medford", state: "Oregon", stateCode: "OR", gym: "CrossFit Ravage", x: 10, y: 30 },
  { id: 11, city: "Boise", state: "Idaho", stateCode: "ID", gym: "CrossFit Casual", x: 17, y: 27 },
  { id: 12, city: "Holladay", state: "Utah", stateCode: "UT", gym: "Rx Fit", x: 24, y: 44 },
  { id: 13, city: "Idaho Falls", state: "Idaho", stateCode: "ID", gym: "Maltese CrossFit", x: 23, y: 26 },
  { id: 14, city: "Twin Falls", state: "Idaho", stateCode: "ID", gym: "208 CrossFit", x: 23, y: 33 },
  { id: 15, city: "Vancouver", state: "Washington", stateCode: "WA", gym: "CrossFit Fort Vancouver", x: 11, y: 18 },
  { id: 16, city: "Riverton", state: "Utah", stateCode: "UT", gym: "Skol CrossFit", x: 24, y: 46 },
];

// Mountain West region states
const mountainWestStates = ["WA", "OR", "CA", "NV", "ID", "MT", "WY", "UT", "CO", "AZ", "NM"];

export default function ThrowdownMap() {
  const [selectedLocation, setSelectedLocation] = useState<ThrowdownLocation | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<ThrowdownLocation | null>(null);

  // Configure state colors
  const statesCustomConfig = useCallback(() => {
    const config: Record<string, { fill: string }> = {};

    // Mountain West states get green fill
    for (const state of mountainWestStates) {
      config[state] = { fill: "#326549" };
    }

    return config;
  }, []);

  const mapHandler = useCallback((event: React.MouseEvent<SVGPathElement>) => {
    // Optional: handle state clicks
    const stateCode = (event.target as SVGPathElement).dataset.name;
    console.log("State clicked:", stateCode);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-green to-forest-green/80 px-6 py-4 border-b border-forest-green/50">
        <h2 className="text-3xl md:text-4xl font-bebas text-white tracking-wider">
          MWFC THROWDOWN HOST MAP
        </h2>
        <p className="text-white/80 text-sm mt-1">
          Current Potential Throwdown Host Locations
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Map Container */}
        <div className="flex-1 relative p-4 min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
          {/* USA Map */}
          <div className="usa-map-wrapper relative w-full">
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
              {throwdownLocations.map((location) => (
                <button
                  key={location.id}
                  type="button"
                  className="absolute pointer-events-auto transform -translate-x-1/2 -translate-y-full cursor-pointer group"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                  }}
                  onClick={() => setSelectedLocation(location)}
                  onMouseEnter={() => setHoveredLocation(location)}
                  onMouseLeave={() => setHoveredLocation(null)}
                >
                  {/* Pin SVG */}
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    className={`transition-all duration-200 ${
                      selectedLocation?.id === location.id || hoveredLocation?.id === location.id
                        ? "scale-125"
                        : ""
                    }`}
                    style={{
                      filter: selectedLocation?.id === location.id || hoveredLocation?.id === location.id
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
                    <circle
                      cx="12"
                      cy="11"
                      r="5"
                      fill="#326549"
                    />
                  </svg>
                </button>
              ))}
            </div>

            {/* Hover tooltip */}
            {hoveredLocation && (
              <div
                className="absolute bg-pitch-black/95 border border-sunrise-gold px-3 py-2 rounded-lg shadow-lg pointer-events-none z-20"
                style={{
                  left: `${hoveredLocation.x}%`,
                  top: `${hoveredLocation.y - 5}%`,
                  transform: "translate(-50%, -100%)",
                }}
              >
                <p className="text-sunrise-gold font-bold text-sm whitespace-nowrap">
                  {hoveredLocation.city}, {hoveredLocation.stateCode}
                </p>
                <p className="text-white text-xs whitespace-nowrap">{hoveredLocation.gym}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar - Host Gyms List */}
        <div className="w-full lg:w-80 border-t lg:border-t-0 lg:border-l border-gray-700 bg-gray-900/50">
          <div className="p-4 border-b border-gray-700 bg-gradient-to-r from-forest-green/20 to-transparent">
            <h3 className="text-xl font-bebas text-white tracking-wide">HOST GYMS</h3>
            <p className="text-xs text-gray-400">{throwdownLocations.length} Locations</p>
          </div>
          <div className="h-64 lg:h-[400px] overflow-y-auto custom-scrollbar">
            {throwdownLocations.map((location) => (
              <button
                type="button"
                key={location.id}
                className={`w-full text-left p-4 border-b border-gray-800 transition-all hover:bg-forest-green/20 ${
                  selectedLocation?.id === location.id ? "bg-forest-green/30 border-l-4 border-l-sunrise-gold" : ""
                }`}
                onClick={() => setSelectedLocation(location)}
              >
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-forest-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{location.id}</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">{location.gym}</p>
                    <p className="text-forest-green-light text-xs mt-0.5">
                      {location.city}, {location.stateCode}
                    </p>
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
              <p className="text-gray-500 text-xs mt-2 italic">
                Contact gym for event details
              </p>
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
