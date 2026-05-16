"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function useConversations() {
    const { data, error } = useSWR("/api/conversations", fetcher);
    return { conversations: data, loading: !data && !error, error };
}
