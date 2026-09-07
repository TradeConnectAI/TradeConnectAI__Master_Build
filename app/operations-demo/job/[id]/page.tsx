import PlumberJobCard from "@/components/plumber/PlumberJobCard";

export default async function PlumberJobPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await Promise.resolve(params);
  const jobId = String(resolved?.id || "");

  return <PlumberJobCard jobId={jobId} />;
}
