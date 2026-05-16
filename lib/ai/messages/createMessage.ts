import { supabase } from "../../supabase";

export async function createMessage(conversationId: string, sender: string, text: string) {
    const { data, error } = await supabase
        .from("messages")
        .insert({
            conversation_id: conversationId,
            sender,
            text
        })
        .select()
        .single();

    if (error) throw error;

    await supabase
        .from("conversations")
        .update({
            last_message: text,
            updated_at: new Date().toISOString()
        })
        .eq("id", conversationId);

    return data;
}
