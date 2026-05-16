import { supabase } from "../../supabase";

export async function getMessages(conversationId: string) {
    const { data, error } = await supabase
        .from("messages")
        .select("*")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: true });

    if (error) throw error;
    return data;
}
