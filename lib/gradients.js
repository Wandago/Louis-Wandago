const GRADIENTS = {
  AI: "from-[#7c5cff] via-[#5b8dfa] to-[#22d3ee]",
  Design: "from-[#ff6b9d] via-[#c86dff] to-[#7c5cff]",
  Tech: "from-[#22d3ee] via-[#3dd6c0] to-[#7c5cff]",
};

const FALLBACK = "from-accent via-[#5b8dfa] to-accent2";

export function tagGradient(tag) {
  return GRADIENTS[tag] || FALLBACK;
}
