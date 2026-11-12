import React from "react";
import { Files, Search, GitBranch, Blocks, Settings, CircleCheck } from "lucide-react";

// A realistic laptop drawn in HTML/CSS, its screen showing a code editor with
// the Order Kanban Board plugin open. Each code line is a list of [text, token type].
const CODE = [
  [["<?php", "kw"]],
  [["// Order Kanban Board: REST route for moving orders", "com"]],
  [],
  [["add_action", "fn"], ["( ", "p"], ["'rest_api_init'", "str"], [", ", "p"], ["function", "kw"], [" () {", "p"]],
  [["  register_rest_route", "fn"], ["( ", "p"], ["'okb/v1'", "str"], [", ", "p"], ["'/orders/(?P<id>\\d+)'", "str"], [", [", "p"]],
  [["    'methods'", "str"], ["  => ", "p"], ["'PATCH'", "str"], [",", "p"]],
  [["    'callback'", "str"], [" => ", "p"], ["'okb_update_status'", "str"], [",", "p"]],
  [["    'permission_callback'", "str"], [" => ", "p"], ["'okb_can_edit'", "str"], [",", "p"]],
  [["  ] );", "p"]],
  [["} );", "p"]],
  [],
  [["function", "kw"], [" okb_update_status", "fn"], ["( ", "p"], ["$request", "var"], [" ) {", "p"]],
  [["  $order", "var"], [" = ", "p"], ["wc_get_order", "fn"], ["( ", "p"], ["$request", "var"], ["[", "p"], ["'id'", "str"], ["] );", "p"]],
  [["  $order", "var"], ["->", "p"], ["update_status", "fn"], ["( ", "p"], ["$request", "var"], ["[", "p"], ["'status'", "str"], ["] );", "p"]],
  [["  return", "kw"], [" rest_ensure_response", "fn"], ["( [ ", "p"], ["'ok'", "str"], [" => ", "p"], ["true", "bool"], [" ] );", "p"]],
  [["}", "p"]]
];

// Explorer tree: [label, depth, kind]
const TREE = [
  ["order-kanban-board", 0, "folder"],
  ["includes", 1, "folder"],
  ["class-rest-api.php", 2, "php"],
  ["class-statuses.php", 2, "php"],
  ["src", 1, "folder"],
  ["Board.jsx", 2, "jsx"],
  ["useBoard.js", 2, "js"],
  ["order-kanban-board.php", 1, "php active"],
  ["package.json", 1, "json"]
];

const lineLength = (line) => line.reduce((n, [text]) => n + text.length, 0);

// Keyboard: three rows of 14 keys, then a bottom row with a wide space bar (true = space bar)
const KEYS = [
  ...Array(42).fill(false),
  ...Array(4).fill(false),
  true,
  ...Array(4).fill(false)
];

export default function CodeLaptop() {
  return (
    <div className="laptop" role="img" aria-label="Laptop showing a code editor with a WooCommerce plugin open">
      <div className="laptop-lid">
        <span className="laptop-camera" />
        <div className="laptop-display">
          <div className="ide" aria-hidden="true">
            <div className="ide-titlebar">
              <span className="ide-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="ide-title">order-kanban-board</span>
            </div>

            <div className="ide-main">
              <div className="ide-activity">
                <Files className="is-active" />
                <Search />
                <GitBranch />
                <Blocks />
                <Settings className="ide-activity-bottom" />
              </div>

              <div className="ide-sidebar">
                <div className="ide-sidebar-title">Explorer</div>
                {TREE.map(([label, depth, kind]) => (
                  <div
                    key={label}
                    className={`ide-tree-item ${kind.includes("active") ? "is-active" : ""}`}
                    style={{ paddingLeft: `${0.8 + depth * 0.9}em` }}
                  >
                    <span className={`ide-file-icon is-${kind.split(" ")[0]}`}>
                      {kind.startsWith("folder") ? "▾" : ""}
                    </span>
                    {label}
                  </div>
                ))}
              </div>

              <div className="ide-editor">
                <div className="ide-tabs">
                  <span className="ide-tab is-active">order-kanban-board.php</span>
                  <span className="ide-tab">Board.jsx</span>
                </div>

                <div className="ide-code-area">
                  <pre className="ide-code">
                    {CODE.map((line, i) => (
                      <span key={i} className="code-line" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                        <span className="line-no">{i + 1}</span>
                        {line.map(([text, type], j) => (
                          <span key={j} className={`tok-${type}`}>{text}</span>
                        ))}
                        {i === CODE.length - 1 && <span className="code-caret" />}
                      </span>
                    ))}
                  </pre>
                  <div className="ide-minimap">
                    {CODE.map((line, i) => (
                      <span key={i} style={{ width: `${Math.min(100, lineLength(line) * 2)}%` }} />
                    ))}
                  </div>
                </div>

                <div className="ide-terminal">
                  <div className="ide-terminal-tabs">
                    <span className="is-active">Terminal</span>
                    <span>Problems</span>
                    <span>Output</span>
                  </div>
                  <div><span className="tok-bool">➜</span> <span className="tok-str">order-kanban-board</span> npm run build</div>
                  <div className="tok-p">  webpack compiled <span className="tok-bool">successfully</span> in 4.2s</div>
                  <div><span className="tok-bool">➜</span> <span className="tok-str">order-kanban-board</span> git push origin main<span className="code-caret" /></div>
                </div>
              </div>
            </div>

            <div className="ide-statusbar">
              <span><GitBranch /> main</span>
              <span><CircleCheck /> 0 problems</span>
              <span className="ide-status-right">Ln 16, Col 2</span>
              <span>UTF-8</span>
              <span>PHP</span>
            </div>
          </div>
          <span className="laptop-glare" />
        </div>
      </div>
      <div className="laptop-deck" aria-hidden="true">
        <div className="laptop-keyboard">
          {KEYS.map((wide, i) => (
            <span key={i} className={wide ? "is-space" : undefined} />
          ))}
        </div>
        <span className="laptop-trackpad" />
      </div>
      <div className="laptop-lip" />
      <div className="laptop-shadow" />
    </div>
  );
}
