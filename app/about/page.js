import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About",
  description: "About Louis Wandago — teacher of AI, design, and tech skills.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Reveal>
        <h1 className="font-serif text-3xl font-semibold mb-8">About</h1>
        <div className="prose-custom">
          <p>
            I'm Louis Wandago. I spend my time figuring out how AI tools,
            design fundamentals, and practical tech skills actually fit
            together — then teaching what I learn in plain language.
          </p>
          <p>
            Most "AI content" online is either hype or a sales pitch. This
            site isn't that. Every article and course here is something I've
            actually used, tested, or built — meant to save you the hours I
            spent figuring it out the hard way.
          </p>
          <p>
            If you're just starting out with AI tools, trying to pick up
            design basics, or want a practical (not academic) path into tech
            skills, you're in the right place. Start with the{" "}
            <a href="/courses">courses</a> if you want structure, or the{" "}
            <a href="/blog">blog</a> if you just want a quick answer.
          </p>
          <h2>Get in touch</h2>
          <p>
            Reach me at{" "}
            <a href="mailto:hello@louiswandago.dev">hello@louiswandago.dev</a>{" "}
            — replace this with your real email before you launch.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
