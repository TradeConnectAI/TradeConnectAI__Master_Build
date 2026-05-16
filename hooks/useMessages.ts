"use client";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function useMessages(conversationId: string) {
    const { data, error, mutate } = useSWR(
        conversationId ? `/api/messages/${conversationId}` : null,
        fetcher
    );

    return { messages: data, loading: !data && !error, error, mutate };
}
