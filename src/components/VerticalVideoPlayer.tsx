"use client";

interface VerticalVideoPlayerProps {
  videoUrl: string;
  title: string;
}

export default function VerticalVideoPlayer({
  videoUrl,
  title,
}: VerticalVideoPlayerProps) {
  // Extract YouTube video ID from various URL formats including Shorts
  const getYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=)([^&\n?#]+)/,
      /(?:youtube\.com\/shorts\/)([^&\n?#]+)/,
      /(?:youtu\.be\/)([^&\n?#]+)/,
      /(?:youtube\.com\/embed\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/, // Just the ID (11 characters)
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match?.[1]) return match[1];
    }
    return null;
  };

  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    return (
      <div className="bg-stone-800 rounded-lg p-8 text-center">
        <p className="text-stone-400">Video not available</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center">
      {/* Container with max width for vertical video */}
      <div className="w-full max-w-md">
        {/* 9:16 aspect ratio container for vertical video */}
        <div className="relative w-full" style={{ aspectRatio: "9/16" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl border-0"
          />
        </div>

        {/* Fallback link if embed doesn't work */}
        <div className="mt-4 text-center">
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sunrise-gold hover:text-yellow-400 text-sm underline"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
