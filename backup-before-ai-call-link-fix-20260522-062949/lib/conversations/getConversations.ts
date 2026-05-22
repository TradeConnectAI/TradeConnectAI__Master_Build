import { supabase } from "../supabase";

export async function getConversations() {
    const { data, error } = await supabase
        .from("conversations")
        .select("*")
        .order("updated_at", { ascending: false });

    if (error) throw error;
    return data;
}
