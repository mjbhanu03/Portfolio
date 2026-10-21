import React, { useEffect, useRef, useState } from "react";

export default function EyeTrackingAvatar() {
  const avatarRef = useRef(null);
  const blinkTimer = useRef(null);
  const leftPupil = useRef(null);
  const rightPupil = useRef(null);

  const [isBlinking, setIsBlinking] = useState(false);

  // Natural blinking
  useEffect(() => {
    const blink = () => {
      setIsBlinking(true);
      blinkTimer.current = setTimeout(() => setIsBlinking(false), 140);
    };
    const interval = setInterval(blink, 3500);
    return () => {
      clearInterval(interval);
      clearTimeout(blinkTimer.current);
    };
  }, []);

  // Eye tracking: no React re-render, runs on animation frames
  useEffect(() => {
    const svg = avatarRef.current;
    if (!svg) return;

    let rect = svg.getBoundingClientRect();
    let mouse = null;
    let raf;
    const cur = { l: { x: 0, y: 0 }, r: { x: 0, y: 0 } };

    const updateRect = () => {
      rect = svg.getBoundingClientRect();
    };
    const onMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    };

    const target = (eyeX, eyeY) => {
      const mx = ((mouse.x - rect.left) / rect.width) * 400;
      const my = ((mouse.y - rect.top) / rect.height) * 400;
      const dx = mx - eyeX;
      const dy = my - eyeY;
      const radius = Math.min(5, Math.hypot(dx, dy) / 8);
      const angle = Math.atan2(dy, dx);
      return { x: Math.cos(angle) * radius, y: Math.sin(angle) * radius };
    };

    const tick = () => {
      if (mouse) {
        const tl = target(160, 186);
        const tr = target(240, 186);

        cur.l.x += (tl.x - cur.l.x) * 0.3;
        cur.l.y += (tl.y - cur.l.y) * 0.3;
        cur.r.x += (tr.x - cur.r.x) * 0.3;
        cur.r.y += (tr.y - cur.r.y) * 0.3;

        leftPupil.current?.setAttribute(
          "transform",
          `translate(${cur.l.x} ${cur.l.y})`,
        );
        rightPupil.current?.setAttribute(
          "transform",
          `translate(${cur.r.x} ${cur.r.y})`,
        );
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });
    window.addEventListener("resize", updateRect);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  const lidStyle = (originX) => ({
    transformOrigin: `${originX}px 164px`,
    transform: isBlinking ? "scaleY(1)" : "scaleY(0)",
    transition: "transform 80ms ease-out",
  });

  return (
    <div className="dev-avatar-card">
      <style>{`
        .dev-avatar-card {
          position: relative;
          width: 100%;
          max-width: 370px;
          margin: 0 auto;
          padding: 10px 18px 18px;
          box-sizing: border-box;
          background: transparent;
          color: #1e293b;
          font-family: Inter, ui-sans-serif, system-ui, sans-serif;
          text-align: center;
        }
        .dev-avatar-card *, .dev-avatar-card *::before, .dev-avatar-card *::after {
          box-sizing: border-box;
        }
        .dev-avatar-card .avatar-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 12px;
          border: 1px solid #dbeafe;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.8);
          color: #475569;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .dev-avatar-card .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px #dcfce7;
        }
        .dev-avatar-card .avatar-art {
          display: block;
          width: 100%;
          max-width: 340px;
          height: auto;
          margin: 6px auto 0;
          overflow: visible;
        }
        .dev-avatar-card .avatar-name {
          margin: 8px 0 0;
          color: #0f172a;
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -0.8px;
        }
        .dev-avatar-card .avatar-role {
          margin: 6px 0 16px;
          color: #64748b;
          font-size: 13px;
          font-weight: 500;
        }
        .dev-avatar-card .avatar-tags {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 7px;
        }
        .dev-avatar-card .avatar-tag {
          padding: 7px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 9px;
          background: #fff;
          color: #475569;
          font-size: 11px;
          font-weight: 700;
        }
      `}</style>

      <svg
        ref={avatarRef}
        className="avatar-art"
        viewBox="0 0 400 400"
        role="img"
        aria-label="Smiling 3D developer avatar whose eyes follow your mouse."
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="smSkin" cx="40%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#fbd3b0" />
            <stop offset="55%" stopColor="#f0b48b" />
            <stop offset="100%" stopColor="#d28d64" />
          </radialGradient>

          <linearGradient id="smNeck" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bd7a55" />
            <stop offset="100%" stopColor="#e3a47c" />
          </linearGradient>

          <linearGradient id="smHair" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4a4f5c" />
            <stop offset="45%" stopColor="#1c202a" />
            <stop offset="100%" stopColor="#0a0d14" />
          </linearGradient>

          <linearGradient id="smHoodie" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b93ff" />
            <stop offset="55%" stopColor="#5b5ef0" />
            <stop offset="100%" stopColor="#3730a3" />
          </linearGradient>

          <linearGradient id="smHood" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3730a3" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>

          <linearGradient id="smLaptop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>

          <radialGradient id="smIris" cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="#d9a171" />
            <stop offset="50%" stopColor="#8a4f27" />
            <stop offset="100%" stopColor="#3f200e" />
          </radialGradient>

          <radialGradient id="smBlush" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0707a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#f0707a" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="smShine" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <clipPath id="smLeftEye">
            <ellipse cx="160" cy="186" rx="18" ry="18" />
          </clipPath>
          <clipPath id="smRightEye">
            <ellipse cx="240" cy="186" rx="18" ry="18" />
          </clipPath>
        </defs>

        {/* Hoodie / shoulders */}
        <path
          d="M 64 400 Q 68 322 150 300 L 250 300 Q 332 322 336 400 Z"
          fill="url(#smHoodie)"
        />
        <path
          d="M 84 400 Q 88 330 152 308 Q 118 336 110 400 Z"
          fill="#ffffff"
          opacity="0.18"
        />

        {/* Hood behind neck */}
        <path
          d="M 134 304 Q 200 270 266 304 Q 256 346 200 352 Q 144 346 134 304 Z"
          fill="url(#smHood)"
        />
        <path
          d="M 152 306 Q 200 284 248 306 Q 238 334 200 338 Q 162 334 152 306 Z"
          fill="#312e81"
          opacity="0.55"
        />

        {/* Drawstrings */}
        <path
          d="M 180 330 L 176 366"
          stroke="#e0e7ff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M 220 330 L 224 366"
          stroke="#e0e7ff"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="176" cy="368" r="4" fill="#c7d2fe" />
        <circle cx="224" cy="368" r="4" fill="#c7d2fe" />

        {/* Neck */}
        <path
          d="M 176 246 L 176 304 Q 200 322 224 304 L 224 246 Z"
          fill="url(#smNeck)"
        />
        <ellipse
          cx="200"
          cy="274"
          rx="30"
          ry="12"
          fill="#b0653f"
          opacity="0.4"
        />

        {/* Laptop */}
        <rect
          x="70"
          y="372"
          width="260"
          height="50"
          rx="12"
          fill="url(#smLaptop)"
        />
        <rect
          x="70"
          y="372"
          width="260"
          height="4"
          rx="2"
          fill="#ffffff"
          opacity="0.5"
        />
        <circle cx="200" cy="396" r="6" fill="#ffffff" opacity="0.55" />

        {/* Ears */}
        <ellipse cx="119" cy="192" rx="12" ry="17" fill="#e7a883" />
        <ellipse cx="281" cy="192" rx="12" ry="17" fill="#e7a883" />
        <ellipse cx="121" cy="193" rx="5" ry="9" fill="#c27c58" />
        <ellipse cx="279" cy="193" rx="5" ry="9" fill="#c27c58" />

        {/* Head */}
        <path
          d="M 118 178 Q 118 90 200 90 Q 282 90 282 178 Q 282 264 200 274 Q 118 264 118 178 Z"
          fill="url(#smSkin)"
        />
        <ellipse cx="172" cy="138" rx="34" ry="14" fill="url(#smShine)" />

        {/* Hair: short sides, visible forehead, spiky quiff on top */}
        <path
          d="M 122 160
             Q 110 112 136 88
             Q 156 58 196 54
             Q 240 44 266 76
             Q 292 104 278 160
             Q 272 134 260 122
             Q 242 130 224 116
             Q 204 106 184 118
             Q 164 132 146 124
             Q 130 134 122 160 Z"
          fill="url(#smHair)"
        />

        {/* Quiff volume on top */}
        <path
          d="M 138 92
             Q 150 38 200 36
             Q 256 32 272 82
             Q 244 62 214 70
             Q 176 72 138 92 Z"
          fill="url(#smHair)"
        />

        {/* Spiky tips */}
        <path d="M 168 52 Q 176 30 190 40 Q 188 50 180 56 Z" fill="#1c202a" />
        <path d="M 204 42 Q 216 22 232 36 Q 226 46 214 50 Z" fill="#1c202a" />
        <path d="M 238 46 Q 256 32 266 52 Q 258 58 246 58 Z" fill="#1c202a" />

        {/* Short sideburns */}
        {/* <path d="M 120 150 L 123 188 Q 131 174 133 152 Z" fill="#1c202a" />
        <path d="M 280 150 L 277 188 Q 269 174 267 152 Z" fill="#1c202a" /> */}

        {/* Hair highlights */}
        <path
          d="M 150 80 Q 190 52 238 62"
          fill="none"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.25"
        />
        <path
          d="M 176 100 Q 196 90 222 96"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.15"
        />

        {/* Raised, happy eyebrows */}
        <path
          d="M 134 152 Q 158 136 186 148"
          fill="none"
          stroke="#171b24"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M 214 148 Q 242 136 266 152"
          fill="none"
          stroke="#171b24"
          strokeWidth="5.5"
          strokeLinecap="round"
        />

        {/* Eye whites */}
        <ellipse
          cx="160"
          cy="186"
          rx="18"
          ry="18"
          fill="#ffffff"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
        <ellipse
          cx="240"
          cy="186"
          rx="18"
          ry="18"
          fill="#ffffff"
          stroke="#e5e7eb"
          strokeWidth="1"
        />

        {/* LEFT eye */}
        <g clipPath="url(#smLeftEye)">
          <g ref={leftPupil}>
            <circle cx="160" cy="186" r="12" fill="url(#smIris)" />
            <circle cx="160" cy="186" r="6.5" fill="#1a0d06" />
            <circle cx="155" cy="180" r="4" fill="#ffffff" />
            <circle cx="165" cy="192" r="1.8" fill="#ffe8d2" />
          </g>
          <rect
            x="140"
            y="164"
            width="40"
            height="44"
            fill="#f0bb95"
            style={lidStyle(160)}
          />
        </g>

        {/* RIGHT eye */}
        <g clipPath="url(#smRightEye)">
          <g ref={rightPupil}>
            <circle cx="240" cy="186" r="12" fill="url(#smIris)" />
            <circle cx="240" cy="186" r="6.5" fill="#1a0d06" />
            <circle cx="235" cy="180" r="4" fill="#ffffff" />
            <circle cx="245" cy="192" r="1.8" fill="#ffe8d2" />
          </g>
          <rect
            x="220"
            y="164"
            width="40"
            height="44"
            fill="#f0bb95"
            style={lidStyle(240)}
          />
        </g>

        {/* Smiling lower lids */}
        <path
          d="M 144 202 Q 160 210 176 202"
          fill="none"
          stroke="#b9714e"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.35"
        />
        <path
          d="M 224 202 Q 240 210 256 202"
          fill="none"
          stroke="#b9714e"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.35"
        />

        {/* Round glasses */}
        <rect
          x="132"
          y="160"
          width="56"
          height="54"
          rx="26"
          fill="#dff1ff"
          opacity="0.12"
        />
        <rect
          x="212"
          y="160"
          width="56"
          height="54"
          rx="26"
          fill="#dff1ff"
          opacity="0.12"
        />
        <g fill="none" stroke="#1f2937" strokeWidth="3.5" strokeLinecap="round">
          <rect x="132" y="160" width="56" height="54" rx="26" />
          <rect x="212" y="160" width="56" height="54" rx="26" />
          <path d="M 188 182 Q 200 175 212 182" />
          <path d="M 132 182 L 120 178" />
          <path d="M 268 182 L 280 178" />
        </g>
        <path
          d="M 142 172 L 150 168"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 222 172 L 230 168"
          stroke="#ffffff"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />

        {/* Nose */}
        <path
          d="M 193 214 Q 200 221 207 214"
          fill="none"
          stroke="#c27c58"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <ellipse cx="198" cy="210" rx="4" ry="3" fill="#ffffff" opacity="0.3" />

        {/* Cheek blush */}
        <ellipse cx="144" cy="230" rx="18" ry="10" fill="url(#smBlush)" />
        <ellipse cx="256" cy="230" rx="18" ry="10" fill="url(#smBlush)" />

        {/* Natural, soft smile */}
        <path
          d="M 174 231
     Q 200 241 226 231
     Q 220 250 200 252
     Q 180 250 174 231 Z"
          fill="#8a2a3a"
        />

        {/* Subtle upper teeth */}
        <path
          d="M 178 233
     Q 200 240 222 233
     Q 217 242 200 243
     Q 183 242 178 233 Z"
          fill="#fffaf5"
        />

        {/* Soft lower lip */}
        <path
          d="M 181 249
     Q 200 255 219 249"
          fill="none"
          stroke="#b85e68"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Natural lip outline */}
        <path
          d="M 174 231
     Q 200 241 226 231
     Q 220 250 200 252
     Q 180 250 174 231 Z"
          fill="none"
          stroke="#7a2433"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Subtle dimples */}
        <path
          d="M 173 232 Q 170 236 174 239"
          fill="none"
          stroke="#b9714e"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />

        <path
          d="M 227 232 Q 230 236 226 239"
          fill="none"
          stroke="#b9714e"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
