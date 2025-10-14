import type { Route } from "./+types/home";
import { json } from "@remix-run/node";

/* =========================================================
   META
========================================================= */
export function meta({}: Route.MetaArgs) {
  const title =
    "IdlePlants | Grow Fantasy Plants, Build Oxygen Worlds, Earn Cozy Rewards";
  const description =
    "IdlePlants lets you grow plants in cozy cabins across a fantasy landscape. Earn rewards, unlock shrines, and restore oxygen to the world through calm idle play and focus sessions.";
  const url = "https://idleplants.com/";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content: [
        "idle plants game",
        "plant growing simulator",
        "oxygen game",
        "cozy idle game",
        "fantasy garden",
        "pomodoro rewards",
        "plant shrine",
        "grow virtual plants",
        "calm idle clicker",
        "focus productivity game",
      ].join(", "),
    },
    { name: "robots", content: "index,follow,max-image-preview:large" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:image", content: `${url}og-image.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { rel: "canonical", href: url },
    { name: "theme-color", content: "#65A30D" }, // fresh moss green
  ];
}

/* =========================================================
   LOADER
========================================================= */
export function loader() {
  return json({ nowISO: new Date().toISOString() });
}

/* =========================================================
   UTILS + UI
========================================================= */
const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-2xl border border-green-200 bg-white p-5 shadow-sm ${className}`}
  >
    {children}
  </div>
);

/* =========================================================
   PAGE
========================================================= */
export default function Home({ loaderData: { nowISO } }: Route.ComponentProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "IdlePlants",
        url: "https://idleplants.com/",
        description:
          "Grow plants, unlock shrines, and bring oxygen back to a fantasy world. A cozy idle game for calm focus and reward loops.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://idleplants.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        name: "IdlePlants",
        url: "https://idleplants.com/",
        logo: "https://idleplants.com/logo.png",
        sameAs: [
          "https://www.youtube.com/@IdlePlants",
          "https://www.pinterest.com/idleplants/",
          "https://www.instagram.com/idleplants/",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is IdlePlants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "IdlePlants is a cozy idle game where you grow virtual plants in cabins across a fantasy world. Each plant restores oxygen, unlocks new biomes, and rewards mindful focus time.",
            },
          },
          {
            "@type": "Question",
            name: "How does the oxygen system work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every plant produces oxygen over time, even when you are away. The global oxygen level rises as players cultivate more greenery, unlocking cleaner skies and new regions.",
            },
          },
          {
            "@type": "Question",
            name: "Do plants grow while I am offline?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. IdlePlants features true idle growth. Your gardens keep generating oxygen and resources when you log out, rewarding consistency rather than grind.",
            },
          },
          {
            "@type": "Question",
            name: "What are Plant Shrines?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Plant Shrines are ancient structures scattered across the IdlePlants world. Activating them grants unique bonuses-faster growth, oxygen multipliers, or new species depending on your play and focus time.",
            },
          },
          {
            "@type": "Question",
            name: "How do I unlock new plant species?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Species unlock through oxygen milestones, shrine blessings, and seasonal events. Each has distinct growth speed, art style, and environmental impact.",
            },
          },
          {
            "@type": "Question",
            name: "What is Focus Mode in IdlePlants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Focus Mode connects your real-world productivity to the game. Start a Pomodoro or custom timer, and plants gain bonus growth while you stay distraction-free. Ideal for students and creators who enjoy calm progress loops.",
            },
          },
          {
            "@type": "Question",
            name: "Can I play IdlePlants without timers?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. Focus Mode is optional. You can enjoy the idle growth system, design cabins, and explore biomes without linking timers.",
            },
          },
          {
            "@type": "Question",
            name: "Is IdlePlants single-player or multiplayer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "IdlePlants is primarily single-player but features a shared world oxygen meter and community events where all players' growth contributes to restoring the planet.",
            },
          },
          {
            "@type": "Question",
            name: "What rewards can I earn?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Players earn in-game currency, decorative items, shrine blessings, and titles tied to oxygen milestones. Future updates may add optional cosmetic achievements.",
            },
          },
          {
            "@type": "Question",
            name: "Will IdlePlants have premium upgrades?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The base game is free, with optional upgrades for visual customization, faster shrine unlocks, and exclusive ambient soundscapes. There are no intrusive ads.",
            },
          },
          {
            "@type": "Question",
            name: "What platforms will IdlePlants support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "IdlePlants will be playable in browsers at launch and later expand to mobile and desktop apps. Your progress syncs automatically.",
            },
          },
          {
            "@type": "Question",
            name: "Is IdlePlants educational?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The oxygen cycle, plant diversity, and eco-balance systems are inspired by real ecological principles, making it both relaxing and lightly educational.",
            },
          },
          {
            "@type": "Question",
            name: "Can I decorate my cabin?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can design your cabin with planters, shelves, and lighting. Decorations influence mood and small in-game bonuses like focus rate or growth speed.",
            },
          },
          {
            "@type": "Question",
            name: "Will IdlePlants include seasonal events?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Expect limited-time events such as the Bloom Festival or Winter Lights where unique seeds and shrine blessings appear.",
            },
          },
          {
            "@type": "Question",
            name: "Is an internet connection required?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "IdlePlants runs online to sync oxygen data and updates, but light offline functionality for Focus Mode is planned.",
            },
          },
          {
            "@type": "Question",
            name: "Can I use IdlePlants for mindfulness or relaxation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Definitely. The soundscapes, growth animations, and gentle feedback loops are designed to create a mindful break from busy schedules.",
            },
          },
          {
            "@type": "Question",
            name: "Who is developing IdlePlants?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "IdlePlants is an independent creative project combining game design, ambient art, and productivity tools into a single calm ecosystem experience.",
            },
          },
          {
            "@type": "Question",
            name: "When will IdlePlants launch?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The initial playable web version is in development and planned for public beta in 2026. You can join the newsletter for updates.",
            },
          },
          {
            "@type": "Question",
            name: "How does IdlePlants differ from other idle games?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most idle games focus on resource loops. IdlePlants adds real-world focus integration, an evolving ecosystem, and cozy aesthetics-merging self-care with progress mechanics.",
            },
          },
          {
            "@type": "Question",
            name: "Will there be a community or leaderboard?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A shared oxygen leaderboard shows how much air each cabin contributes globally, encouraging cooperation rather than competition.",
            },
          },
          {
            "@type": "Question",
            name: "Can I reset or restart my world?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can start over anytime to experiment with new growth strategies or shrine builds. Your previous worlds remain saved as snapshots.",
            },
          },
          {
            "@type": "Question",
            name: "Does IdlePlants have background music?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Each biome features a unique lofi-ambient mix-forest chimes, rain, night insects, or wind bells-crafted to enhance relaxation and focus.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a mobile notification system for Focus Mode?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Planned. Optional focus reminders and gentle Pomodoro pings will help maintain rhythm without stress or gamified pressure.",
            },
          },
          {
            "@type": "Question",
            name: "Can I connect my progress to productivity apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Future integrations with task trackers and calendars are being explored so that completed sessions could sync as plant growth milestones.",
            },
          },
        ],
      },
    ],
  } as const;

  return (
    <main className="bg-green-50/40 text-green-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* TOP BAR */}
      <div className="w-full border-b border-green-100 bg-green-50/70">
        <div className="mx-auto max-w-7xl px-4 py-2 text-sm text-green-700">
          Grow calm worlds • Last updated{" "}
          {new Date(nowISO).toLocaleDateString()}
        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-extrabold tracking-tight text-green-900">
              Grow Plants, Breathe Calm, Restore the World
            </h1>
            <p className="text-lg text-green-800 leading-relaxed">
              In <strong>IdlePlants</strong>, you nurture glowing fantasy plants
              across cozy cabins, earn <strong>oxygen rewards</strong>, and
              unlock <strong>mystic shrines</strong> that boost growth and
              focus. A gentle idle experience that grows with you.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#features"
                className="rounded-lg border border-green-300 bg-white px-4 py-2 text-green-800 shadow-sm hover:bg-green-100"
              >
                See Features
              </a>
              <a
                href="#world"
                className="rounded-lg border border-green-300 bg-white px-4 py-2 text-green-800 shadow-sm hover:bg-green-100"
              >
                Explore the World
              </a>
              <a
                href="#shrines"
                className="rounded-lg border border-green-300 bg-white px-4 py-2 text-green-800 shadow-sm hover:bg-green-100"
              >
                Unlock Shrines
              </a>
            </div>
          </div>
          <Card>
            <h2 className="text-base font-semibold text-green-900">
              Game Highlights
            </h2>
            <ul className="mt-3 grid gap-2 text-sm text-green-800 sm:grid-cols-2">
              <li>🌿 Grow digital plants in idle mode</li>
              <li>🏡 Build cozy cabins across landscapes</li>
              <li>🪷 Unlock magical plant shrines</li>
              <li>🧘 Focus Mode with Pomodoro rewards</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-8">
        <h2 className="text-2xl font-bold text-green-900">Core Features</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-green-900">
              Idle Growth
            </h3>
            <p className="text-sm text-green-800">
              Your plants continue to grow and generate oxygen while you rest or
              work. Return to find your cabin lush and alive.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-green-900">
              Oxygen Economy
            </h3>
            <p className="text-sm text-green-800">
              Each plant adds to the global oxygen balance. The more you grow,
              the greener the world becomes.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-green-900">Focus Mode</h3>
            <p className="text-sm text-green-800">
              Activate shrine bonuses during real Pomodoro sessions. Earn
              in-game oxygen by staying focused in real life.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-green-900">
              Plant Shrines
            </h3>
            <p className="text-sm text-green-800">
              Discover ancient shrines that reward care and consistency. Unlock
              unique bonuses and visuals for your gardens.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-green-900">
              Fantasy Landscapes
            </h3>
            <p className="text-sm text-green-800">
              Explore regions from misty forests to crystal deserts, each with
              its own flora, music, and cabin style.
            </p>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-green-900">
              Cozy Soundscapes
            </h3>
            <p className="text-sm text-green-800">
              Ambient rain, wind chimes, and rustling leaves make every session
              peaceful and immersive.
            </p>
          </Card>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section
        id="world"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          A Living, Breathing Fantasy World
        </h2>
        <p>
          The IdlePlants universe is built around balance. As you plant,
          harvest, and restore oxygen, the landscapes change-from dry valleys to
          lush meadows filled with shimmering leaves. Every idle minute helps
          rebuild a fading ecosystem.
        </p>
        <p>
          Shrines scattered across the land grant you growth multipliers and
          meditative bonuses that reflect your focus habits in real life.
        </p>
      </section>

      {/* SHRINES */}
      <section
        id="shrines"
        className="mx-auto max-w-7xl px-4 py-10 space-y-8 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Plant Shrines & Focus Bonuses
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>🌺 **Shrine of Bloom** – Boosts growth speed during focus</li>
          <li>🌾 **Shrine of Harmony** – Balances oxygen across regions</li>
          <li>🌙 **Shrine of Night Dew** – Grows nocturnal plants passively</li>
          <li>☀️ **Shrine of Dawnlight** – Increases sunlight yield</li>
        </ul>
      </section>

      <section
        id="vision"
        className="mx-auto max-w-7xl px-4 py-10 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          The Vision of IdlePlants
        </h2>
        <p>
          IdlePlants reimagines the idle-game genre as a calm, restorative
          world. Instead of collecting coins or clicks, you nurture living
          ecosystems. Each seed you plant increases oxygen, revives a fading
          biome, and brings color back to the landscape. Your cabin becomes a
          tiny sanctuary filled with plants that breathe life into both the
          digital and real world.
        </p>
        <p>
          Designed for relaxation and reflection, IdlePlants blends cozy fantasy
          aesthetics with ambient sounds, gentle progress systems, and
          meaningful rewards. Whether you play for a few minutes or leave it
          running all day, the world keeps evolving around your quiet care.
        </p>
      </section>

      <section
        id="mechanics"
        className="mx-auto max-w-7xl px-4 py-10 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          How IdlePlants Works
        </h2>
        <p>
          Every plant in IdlePlants produces oxygen, light, and serenity over
          time. The more you grow, the more the environment transforms-from dim,
          misty forests into glowing, oxygen-rich valleys. You can expand your
          garden, decorate your cabin, and unlock ancient{" "}
          <strong>Plant Shrines</strong>
          that amplify growth rates and reveal new regions.
        </p>
        <p>
          The <strong>oxygen economy</strong> ties everything together. Each
          player contributes to a shared world meter that reflects collective
          progress. Focus sessions using built-in{" "}
          <strong>Pomodoro timers</strong> grant special shrine blessings,
          linking real-world productivity with in-game prosperity. The more you
          focus, the greener the world becomes.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>🌿 Idle plant growth continues even when you’re offline</li>
          <li>
            🧘 Real-world focus sessions earn shrine energy and oxygen bonuses
          </li>
          <li>
            🏡 Customize cabins with decorative planters and glowing lights
          </li>
          <li>🌎 Shared global oxygen level unites all players</li>
        </ul>
      </section>

      <section
        id="benefits"
        className="mx-auto max-w-7xl px-4 py-10 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Why Play IdlePlants?
        </h2>
        <p>
          IdlePlants isn’t about grinding-it’s about grounding. Each growth
          cycle offers small, satisfying progress that rewards presence over
          pressure. The combination of ambient music, soft visuals, and
          incremental discovery makes it one of the most{" "}
          <strong>relaxing idle games</strong> available.
        </p>
        <p>
          For players who enjoy <strong>focus timers</strong>,{" "}
          <strong>Pomodoro productivity tools</strong>, or{" "}
          <strong>mindful idle simulators</strong>, IdlePlants provides a
          peaceful space to recharge. You can treat it as a meditation
          companion, a plant-growth clicker, or a gentle accountability partner
          for your real-world tasks.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>🍃 Calm gameplay with nature-inspired visuals and sounds</li>
          <li>🪴 Perfect companion for studying, working, or relaxing</li>
          <li>🌺 Collect and evolve hundreds of unique fantasy plants</li>
          <li>💨 Help restore the planet by generating digital oxygen</li>
        </ul>
      </section>

      <section
        id="world-of-idleplants"
        className="mx-auto max-w-7xl px-4 py-10 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          The World of IdlePlants
        </h2>
        <p>
          The IdlePlants universe is alive with growth and color. Each
          biome-whether it’s a glowing forest, crystal canyon, or misty mountain
          valley-contains unique species and challenges. As you plant, harvest,
          and upgrade, your actions gradually heal the land and expand the world
          map.
        </p>
        <p>
          Growth isn’t just visual; every region has its own{" "}
          <strong>oxygen economy</strong>. The more plants you raise, the
          cleaner the air becomes. Click, collect, and cultivate to unlock
          magical <strong>Plant Shrines</strong> that bless the land with new
          flora and special multipliers. The world’s future literally depends on
          your care.
        </p>
      </section>

      <section
        id="clicker-mechanics"
        className="mx-auto max-w-7xl px-4 py-10 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Click, Grow, and Evolve
        </h2>
        <p>
          At its heart, IdlePlants is a <strong>plant-growing clicker</strong>.
          Every tap releases energy that nurtures your seedlings and fills the
          world with oxygen. Upgrade planters, automate watering, and unlock new
          species as your ecosystem becomes self-sustaining.
        </p>
        <p>
          Progress happens even while you’re away. When you return, your cabin
          will be thriving with plants and resources to collect. Strategic
          upgrades and shrine management allow you to balance{" "}
          <strong>growth speed</strong> with
          <strong>oxygen yield</strong>, rewarding both active and idle play
          styles.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>🪴 Tap to grow plants and earn oxygen points</li>
          <li>💧 Automate watering and nutrient systems</li>
          <li>🌿 Unlock hybrid plants with shrine blessings</li>
          <li>🧭 Expand to new cabins and exotic ecosystems</li>
        </ul>
      </section>

      <section
        id="collect-upgrade"
        className="mx-auto max-w-7xl px-4 py-10 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Collect, Upgrade, and Discover
        </h2>
        <p>
          IdlePlants rewards curiosity. Each plant species comes with its own
          <strong>rarity, animation, and oxygen output</strong>. Collect common
          herbs, mystical vines, and rare bioluminescent flowers that glow at
          night. Upgrade your tools and shrines to unlock deeper growth
          potential and visual effects.
        </p>
        <p>
          The <strong>discovery log</strong> tracks every species you’ve raised,
          turning your garden into a living encyclopedia. As you complete each
          collection, new seeds and shrine bonuses become available, encouraging
          steady exploration without pressure.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>🌱 Hundreds of collectible fantasy plant species</li>
          <li>✨ Upgrade systems that reward consistent play</li>
          <li>📖 Discovery index to track your progress</li>
          <li>🌍 Evolving world visuals that reflect your growth</li>
        </ul>
      </section>

      <section
        id="community"
        className="mx-auto max-w-7xl px-4 py-10 space-y-6 leading-relaxed text-green-800"
      >
        <h2 className="text-2xl font-bold text-green-900">
          Community and Global Oxygen Goals
        </h2>
        <p>
          IdlePlants is more than a solo experience-it’s a shared world. Every
          player’s oxygen output contributes to a global meter that tracks how
          much cleaner the planet becomes over time. As milestones are reached,
          special
          <strong>community events</strong> unlock limited plants and shrine
          rewards for everyone.
        </p>
        <p>
          Global progress means every player helps shape the world’s story.
          Whether you’re a daily tapper or an occasional gardener, your plants
          help push the oxygen balance forward and keep the ecosystem alive.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>🌍 Shared oxygen bar visible to all players</li>
          <li>🎉 Global milestones trigger special events</li>
          <li>🤝 Cooperative rather than competitive gameplay</li>
          <li>🕊️ Seasonal rewards for sustained contribution</li>
        </ul>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-4 py-10">
        <h2 className="text-2xl font-bold text-green-900">
          Frequently Asked Questions about IdlePlants
        </h2>
        <p className="mt-2 text-green-800 leading-relaxed">
          Everything you need to know about growing fantasy plants, earning
          oxygen rewards, and building focus rituals in a calm idle world.
        </p>

        <dl className="mt-8 space-y-8 text-green-800">
          <div>
            <dt className="font-semibold text-green-900">
              What is IdlePlants?
            </dt>
            <dd className="mt-1">
              IdlePlants is a cozy idle game where you grow virtual plants in
              cabins across a fantasy landscape. Each plant restores oxygen,
              unlocks new biomes, and rewards mindful focus time.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              How does the oxygen system work?
            </dt>
            <dd className="mt-1">
              Every plant produces oxygen over time, even while you’re offline.
              The global oxygen level rises as players cultivate more greenery,
              unlocking clearer skies and new regions.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Do plants grow while I am offline?
            </dt>
            <dd className="mt-1">
              Yes. IdlePlants features true idle growth. Your gardens keep
              generating oxygen and resources while you’re away, rewarding
              consistency rather than grind.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              What are Plant Shrines?
            </dt>
            <dd className="mt-1">
              Plant Shrines are ancient structures that grant special
              bonuses-like faster growth, oxygen multipliers, or new plant
              species-based on your activity and focus time.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              How do I unlock new plant species?
            </dt>
            <dd className="mt-1">
              New species unlock as your oxygen level increases, when you
              activate shrine blessings, or during special seasonal events.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              What is Focus Mode in IdlePlants?
            </dt>
            <dd className="mt-1">
              Focus Mode links your real-world productivity to the game. Start a
              Pomodoro or custom focus timer, and your plants gain bonus growth
              while you stay distraction-free.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Can I play IdlePlants without timers?
            </dt>
            <dd className="mt-1">
              Absolutely. Focus Mode is optional. You can enjoy idle growth,
              build cozy cabins, and explore biomes without linking timers.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Is IdlePlants single-player or multiplayer?
            </dt>
            <dd className="mt-1">
              IdlePlants is primarily single-player but includes a shared oxygen
              ecosystem where everyone’s plants contribute to restoring the
              planet.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              What rewards can I earn?
            </dt>
            <dd className="mt-1">
              You can earn in-game currency, decorations, shrine blessings, and
              titles based on oxygen milestones. Cosmetic achievements and
              badges are planned for later versions.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Will IdlePlants have premium upgrades?
            </dt>
            <dd className="mt-1">
              Yes. The base experience is free, with optional upgrades for
              visuals, shrine speed, or ambient soundscapes. No intrusive ads or
              pay-to-win mechanics.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              What platforms will IdlePlants support?
            </dt>
            <dd className="mt-1">
              IdlePlants will launch for web browsers first and later expand to
              mobile and desktop versions with cloud sync.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Is IdlePlants educational?
            </dt>
            <dd className="mt-1">
              Yes. The oxygen balance, plant diversity, and eco-systems are
              inspired by real environmental principles, blending mindfulness
              with soft education.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Can I decorate my cabin?
            </dt>
            <dd className="mt-1">
              You can customize your cabin with planters, shelves, and lighting.
              Decorations influence mood and minor in-game bonuses like growth
              speed or focus rate.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Will IdlePlants include seasonal events?
            </dt>
            <dd className="mt-1">
              Yes. Expect events such as Bloom Festival or Winter Lights with
              exclusive plants, shrine themes, and temporary bonuses.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Is an internet connection required?
            </dt>
            <dd className="mt-1">
              A connection is needed to sync oxygen and world data, though an
              offline focus mode is planned for future versions.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Can I use IdlePlants for mindfulness or relaxation?
            </dt>
            <dd className="mt-1">
              Definitely. The visuals, ambient sounds, and soft progress loops
              are designed to provide mindful breaks and restore calm between
              tasks.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Who is developing IdlePlants?
            </dt>
            <dd className="mt-1">
              IdlePlants is an independent creative project combining game
              design, ambient art, and productivity mechanics into one gentle
              ecosystem.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              When will IdlePlants launch?
            </dt>
            <dd className="mt-1">
              The first playable web beta is scheduled for 2026. Players can
              join the newsletter or community for early updates.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              How is IdlePlants different from other idle games?
            </dt>
            <dd className="mt-1">
              IdlePlants replaces fast grind with calm progress. It merges idle
              growth, Pomodoro focus tools, and fantasy ecology to create a
              meaningful idle experience.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Will there be leaderboards?
            </dt>
            <dd className="mt-1">
              A shared oxygen leaderboard will display how much air each
              player’s garden has added to the world, promoting cooperation over
              competition.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Can I restart or reset my world?
            </dt>
            <dd className="mt-1">
              Yes. You can reset and rebuild your garden anytime, experimenting
              with new strategies or shrine setups while preserving old
              snapshots.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Does IdlePlants include background music?
            </dt>
            <dd className="mt-1">
              Yes. Each biome has its own gentle soundtrack-forest rain,
              mountain wind, or glowing night ambience-to help you relax and
              focus.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Will Focus Mode include reminders or notifications?
            </dt>
            <dd className="mt-1">
              Yes. Optional soft reminders help you maintain rhythm during focus
              sessions, without pressure or intrusive alerts.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-green-900">
              Can I link IdlePlants to productivity tools?
            </dt>
            <dd className="mt-1">
              Future integrations may connect with task trackers or calendars,
              letting completed focus sessions translate into in-game growth.
            </dd>
          </div>
        </dl>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-200 bg-green-50/50 py-8 text-green-800">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-green-900">About</h3>
            <p className="mt-2 text-sm">
              IdlePlants is a calm idle experience where plants, oxygen, and
              focus come together to build a gentle world.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-green-900">Community</h3>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Developer Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-green-900">
              Stay in Touch
            </h3>
            <p className="mt-2 text-sm">
              Follow updates as IdlePlants grows into a full game experience.
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-green-600">
          © {new Date().getFullYear()} IdlePlants • Grow calm, stay curious
        </p>
      </footer>
    </main>
  );
}
