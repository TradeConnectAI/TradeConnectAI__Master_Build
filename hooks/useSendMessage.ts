"use client";

export function useSendMessage(conversationId: string) {
    async function send(text: string) {
        await fetch("/api/messages/send", {
            method: "POST",
            body: JSON.stringify({ conversationId, text })
        });
    }

    return { send };
}
