import { Italiana, Manrope, Marck_Script } from "next/font/google";
import AboutRedSection from "@/components/AboutRedSection";

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-italiana",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-manrope",
});
const marck = Marck_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marck",
});

export const metadata = {
  title: "About",
  description: "About Louis Wandago — teacher of AI, design, and tech skills.",
};

export default function AboutPage() {
  return (
    <div className={`${italiana.variable} ${manrope.variable} ${marck.variable}`}>
      <AboutRedSection />
    </div>
  );
}
