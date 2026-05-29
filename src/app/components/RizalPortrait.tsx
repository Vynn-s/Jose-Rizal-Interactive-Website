import { useState } from 'react';

export default function RizalPortrait() {
  const [imgError, setImgError] = useState(false);
  const portraitUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Jose%C3%BC_Rizal_portrait.jpg';

  return (
    <div className="relative w-64 h-64 mx-auto mb-8">
      {/* Decorative frame */}
      <div className="absolute inset-0 rounded-full border-4 border-[#C9973A] shadow-2xl" />
      <div className="absolute inset-2 rounded-full border-2 border-[#FCD116]/50" />

      {/* Portrait image (falls back to simple silhouette if load fails) */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#3B2314] to-[#5a4030] overflow-hidden">
        {!imgError ? (
          <img
            src={portraitUrl}
            alt="José Rizal portrait"
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="200" fill="#2a1810" />
            <ellipse cx="100" cy="85" rx="35" ry="42" fill="#8B6F47" />
            <path d="M 65 60 Q 65 35, 100 30 Q 135 35, 135 60 L 135 85 Q 130 80, 125 82 Q 120 70, 115 75 Q 110 65, 105 70 Q 100 60, 95 70 Q 90 65, 85 75 Q 80 70, 75 82 Q 70 80, 65 85 Z" fill="#1a1410" />
            <ellipse cx="88" cy="80" rx="3" ry="4" fill="#1a1410" />
            <ellipse cx="112" cy="80" rx="3" ry="4" fill="#1a1410" />
            <path d="M 100 85 L 98 95 L 102 95 Z" fill="#6B5637" />
            <path d="M 85 98 Q 92 100, 100 99 Q 108 100, 115 98" stroke="#1a1410" strokeWidth="2" fill="none" />
            <ellipse cx="92" cy="99" rx="8" ry="2" fill="#1a1410" />
            <ellipse cx="108" cy="99" rx="8" ry="2" fill="#1a1410" />
            <rect x="88" y="115" width="24" height="20" fill="#8B6F47" />
            <path d="M 70 135 L 88 125 L 88 200 L 70 200 Z" fill="#E8E0D5" />
            <path d="M 130 135 L 112 125 L 112 200 L 130 200 Z" fill="#E8E0D5" />
            <rect x="60" y="140" width="80" height="60" fill="#1a1410" />
            <path d="M 75 145 L 90 145 L 90 200 L 75 200 Z" fill="#2a1810" />
            <path d="M 110 145 L 125 145 L 125 200 L 110 200 Z" fill="#2a1810" />
            <circle cx="100" cy="155" r="2" fill="#C9973A" />
            <circle cx="100" cy="165" r="2" fill="#C9973A" />
            <circle cx="100" cy="175" r="2" fill="#C9973A" />
          </svg>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute -top-2 -left-2 w-8 h-8 text-[#FCD116]">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
      </div>
      <div className="absolute -top-2 -right-2 w-8 h-8 text-[#FCD116]">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
      </div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 text-[#FCD116]">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
      </div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 text-[#FCD116]">
        <svg viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
        </svg>
      </div>
    </div>
  );
}
