// app/providers.js
"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { FC, PropsWithChildren } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

const PHProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default PHProvider;
