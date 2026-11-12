import React from "react";
import { Lock } from "lucide-react";

// Wraps a screenshot in a themed browser window so any project's screenshots
// sit naturally inside the portfolio's colour scheme. Images that already
// include their own device mockup can pass `plain` to skip the frame.
export default function BrowserFrame({
  src,
  alt,
  url,
  caption,
  className = "",
  eager = false,
  secure = true,
  plain = false
}) {
  const img = <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} />;

  return (
    <figure className={`browser-figure ${plain ? "is-plain" : ""} ${className}`}>
      {plain ? (
        <div className="plain-shot">{img}</div>
      ) : (
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
          {img}
        </div>
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
