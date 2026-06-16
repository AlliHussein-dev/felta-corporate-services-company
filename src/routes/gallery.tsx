import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import g1 from "../assets/gallery-reception.jpg";
import g2 from "../assets/gallery-meeting.jpg";
import g3 from "../assets/gallery-team.jpg";
import g4 from "../assets/gallery-hospitality.jpg";
import g5 from "../assets/office-interior.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Office Gallery FELTA Abu Dhabi" },
      { name: "description", content: "Inside the FELTA offices on Hamdan Street — reception, private consultation rooms and client hospitality." },
      { property: "og:title", content: "Office Gallery" },
      { property: "og:description", content: "A visual tour of the FELTA offices." },
      { property: "og:image", content: g1 },
    ],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { img: g1, label: "Reception", span: "lg:col-span-2 lg:row-span-2" },
  { img: g2, label: "Private Consultation" },
  { img: g4, label: "Hospitality" },
  { img: g5, label: "Executive Office", span: "lg:col-span-2" },
  { img: g3, label: "Team Collaboration", span: "lg:col-span-1" },
];

function GalleryPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />Office Gallery</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">A house built for considered conversations.</h1></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1500px] px-6 pb-32 lg:px-12">
        <div className="grid auto-rows-[260px] gap-6 lg:grid-cols-3 lg:auto-rows-[300px]">
          {ITEMS.map((it, i) => (
            <Reveal key={i} delay={i * 0.05} className={`group relative overflow-hidden rounded-2xl ${it.span ?? ""}`}>
              <img src={it.img} alt={it.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <p className="absolute bottom-5 left-5 font-display text-xl text-background">{it.label}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}