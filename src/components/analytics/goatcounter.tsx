"use client";

import { Eye } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type GoatCounterApi = {
  count?: (options: { path: string }) => void;
  no_onload?: boolean;
};

declare global {
  interface Window {
    goatcounter?: GoatCounterApi;
  }
}

function normalizePath(path: string): string {
  return path.replace(/\/+$/, "") || "/";
}

export function GoatCounterTracker({ siteUrl }: { siteUrl: string }) {
  const pathname = usePathname();
  const latestPath = useRef("/");
  const loaded = useRef(false);
  const trackedPath = useRef<string | null>(null);

  useEffect(() => {
    if (!siteUrl) return;

    latestPath.current = normalizePath(window.location.pathname);
    window.goatcounter = { no_onload: true };

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = `${siteUrl.replace(/\/+$/, "")}/count`;
    script.onload = () => {
      loaded.current = true;
      window.goatcounter?.count?.({ path: latestPath.current });
      trackedPath.current = latestPath.current;
    };
    script.onerror = () => {
      console.error("Unable to load the GoatCounter tracking script.");
    };
    document.head.appendChild(script);

    return () => {
      script.remove();
      loaded.current = false;
      trackedPath.current = null;
    };
  }, [siteUrl]);

  useEffect(() => {
    latestPath.current = normalizePath(pathname || window.location.pathname);
    if (!loaded.current || trackedPath.current === latestPath.current) return;

    window.goatcounter?.count?.({ path: latestPath.current });
    trackedPath.current = latestPath.current;
  }, [pathname]);

  return null;
}

export function GoatCounterViewCount({ path }: { path: string }) {
  const [count, setCount] = useState<number | null>(null);
  const siteUrl = process.env.NEXT_PUBLIC_GOATCOUNTER_URL ?? "";

  useEffect(() => {
    if (!siteUrl) return;

    const controller = new AbortController();
    const normalizedPath = normalizePath(path);
    const counterUrl = `${siteUrl.replace(/\/+$/, "")}/counter${encodeURI(normalizedPath)}.json`;

    fetch(counterUrl, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`GoatCounter counter request failed (${response.status}).`);
        }
        return response.json() as Promise<{ count?: string | number }>;
      })
      .then((result) => {
        const numericCount =
          typeof result.count === "number"
            ? result.count
            : Number(result.count?.replaceAll(",", ""));
        if (!Number.isFinite(numericCount) || numericCount < 0) {
          throw new Error("GoatCounter returned an invalid page-view count.");
        }
        setCount(numericCount);
      })
      .catch((error: unknown) => {
        if (error instanceof Error && error.name === "AbortError") return;
        console.warn(`Unable to load GoatCounter count for ${normalizedPath}.`, error);
      });

    return () => controller.abort();
  }, [path, siteUrl]);

  return (
    <span
      className="inline-flex items-center gap-1.5"
      aria-label={count === null ? "Reads unavailable" : `${count} reads`}
    >
      <Eye size={13} />
      {count === null ? "—" : count.toLocaleString()} reads
    </span>
  );
}
