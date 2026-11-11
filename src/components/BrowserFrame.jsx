import React from "react";
import { Lock } from "lucide-react";

// Wraps a screenshot in a themed browser window so any project's screenshots
// sit naturally inside the portfolio's colour scheme.
export default function BrowserFrame({ src, alt, url, caption, className = "", eager = false, secure = true }) {
  return (
    <figure className={`browser-figure ${className}`}>
      <div className="browser-frame">
        <div className="browser-bar" aria-hidden="true">
          <span className="browser-dots">
            <i />
            <i />
            <i />
          </span>
          {url && (
            <span className="browser-url">
              {secure && <Lock size={11} />}
              {url}
            </span>
          )}
        </div>
        <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
