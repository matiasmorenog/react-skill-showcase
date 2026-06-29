"use client";

import { useEffect, useState } from "react";

export function useDemoUrlStatus(demoUrl, enabled = true) {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!enabled || !demoUrl) {
      setStatus("idle");
      return undefined;
    }

    let cancelled = false;
    const controller = new AbortController();

    async function ping() {
      setStatus("checking");

      try {
        const response = await fetch(`/api/demo-status?url=${encodeURIComponent(demoUrl)}`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("status check failed");

        const data = await response.json();
        if (!cancelled) {
          setStatus(data.live ? "live" : "offline");
        }
      } catch {
        if (!cancelled) {
          setStatus("offline");
        }
      }
    }

    ping();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [demoUrl, enabled]);

  return status;
}
