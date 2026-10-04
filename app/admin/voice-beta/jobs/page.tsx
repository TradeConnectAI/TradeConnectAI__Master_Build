import { notFound, redirect } from "next/navigation";

export default function PublicVoiceBetaJobsRedirectPage() {
  // Containment: not public until a proper login exists.
  notFound();
  redirect("/install-jobs-demo/admin/voice-beta/jobs");
}
