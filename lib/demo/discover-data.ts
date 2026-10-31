export type ServiceCategory = "Signature Styles" | "Braids" | "VIP";
export type DemoService = { id: string; name: string; descriptor: string; description: string; duration: string; price: string; category: ServiceCategory };
export const styles: DemoService[] = [
  { id: "bora-bohemian", name: "Bora Bora Bohemian Braids", descriptor: "Soft, airy texture", description: "A romantic, lightweight braided look with a naturally undone finish.", duration: "4–6 hours", price: "$300", category: "Signature Styles" },
  { id: "knotless-braids", name: "Knotless Braids", descriptor: "Clean & classic", description: "A polished protective style with a smooth, lightweight foundation.", duration: "4–5 hours", price: "$260", category: "Braids" },
  { id: "goddess-braids", name: "Goddess Braids", descriptor: "Defined waves", description: "Full, dimensional braids designed for a soft statement.", duration: "4–6 hours", price: "$285", category: "Signature Styles" },
  { id: "fulani-braids", name: "Fulani Braids", descriptor: "Heritage-inspired", description: "A detailed style with thoughtful parting and face-framing braids.", duration: "3–4 hours", price: "$230", category: "Braids" },
  { id: "stitch-braids", name: "Stitch Braids", descriptor: "Sleek precision", description: "Defined, cleanly parted braids with a modern finish.", duration: "3–4 hours", price: "$210", category: "Braids" },
  { id: "vip-experience", name: "VIP Braiding Experience", descriptor: "Elevated care", description: "An unhurried, premium demonstration experience with dedicated attention.", duration: "6–7 hours", price: "$420", category: "VIP" },
];

export const tutorials = [
  { title: "Care for bohemian braids", description: "A simple ritual for keeping your texture soft and your look fresh." },
  { title: "Scalp care, made simple", description: "Thoughtful moisture tips for comfort between appointments." },
  { title: "Three ways to style your braids", description: "Easy day-to-evening inspiration for your next look." },
];

export const announcements = [
  { title: "A signature style spotlight", detail: "Explore our illustrative Bohemian Braid feature." },
  { title: "Beauty Club is coming soon", detail: "An elevated new place for beauty, culture, and community." },
  { title: "Meet Bora Luxury Hair", detail: "Discover the inspiration behind our future hair-care collection." },
];
