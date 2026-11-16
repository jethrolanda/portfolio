"use client";
import { useState } from "react";
import { CopyIcon } from "./icons";

// Inline status message (announced via aria-live) replaces the toast library.
export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    setTimeout(() => setStatus("idle"), 2500);
  };

  return (
    <span className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center gap-2 rounded-[var(--radius-sm)] border border-line px-3 py-2 font-mono text-xs text-muted transition-colors duration-[var(--dur)] hover:border-accent hover:text-accent"
      >
        <CopyIcon width={14} height={14} />
        Copy address
      </button>
      <span role="status" aria-live="polite" className="font-mono text-xs text-success">
        {status === "copied" && "Copied!"}
        {status === "error" && (
          <span className="text-muted">Copy failed — select it manually</span>
        )}
      </span>
    </span>
  );
}
