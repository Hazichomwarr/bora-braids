import { BookingExperience } from "@/components/booking/BookingExperience";

export const instant = false;

export default async function BookPage({ searchParams }: { searchParams: Promise<{ service?: string; source?: string }> }) {
  const { service, source } = await searchParams;
  return <BookingExperience key={`${service ?? "none"}-${source ?? "direct"}`} initialServiceId={service} />;
}
