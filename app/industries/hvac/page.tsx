import { redirect } from "next/navigation";

// Launch shrink: public pitch is plumber-only. Route kept; redirects to plumbers.
export default function Page() {
  redirect("/industries/plumbers");
}
