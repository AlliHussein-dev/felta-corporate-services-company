import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Paperclip, Send, ShieldCheck } from "lucide-react";
import advisorPortrait from "../assets/advisor-1.jpg";

export const Route = createFileRoute("/portal/messages")({
  component: MessagesPage,
});

type Msg = { from: "advisor" | "client"; body: string; time: string };

const INITIAL: Msg[] = [
  { from: "advisor", body: "Good morning, Mr. Ahmed. I've uploaded the revised shareholder agreement to your vault with two annotations.", time: "08:42" },
  { from: "advisor", body: "Would Tuesday at 11:00 GST work for our quarterly review?", time: "08:43" },
  { from: "client", body: "Tuesday works well. Please proceed with the DED submission in parallel.", time: "09:15" },
  { from: "advisor", body: "Noted submission is in the queue. I'll confirm the receipt by end of day.", time: "09:18" },
];

function MessagesPage() {
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [draft, setDraft] = useState("");

  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, { from: "client", body: draft.trim(), time: "now" }]);
    setDraft("");
  };

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">Private communication</p>
        <h1 className="editorial-h2 mt-2 text-foreground">Messages</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">A confidential channel between you and your dedicated advisor.</p>
      </header>

      <div className="lift-card overflow-hidden grid md:grid-cols-[1fr_2fr] min-h-[560px]">
        {/* Threads */}
        <aside className="border-r border-border/60 bg-secondary/30">
          <div className="px-5 py-4 border-b border-border/50">
            <p className="eyebrow text-[10px]">Conversations</p>
          </div>
          {[
            { name: "Khalid Al Hashimi", preview: "Submission is in the queue…", time: "09:18", active: true },
            { name: "Layla Saeed", preview: "ADGM application packet attached", time: "Yesterday" },
            { name: "Concierge Desk", preview: "Your DED appointment is confirmed", time: "Mon" },
          ].map((t) => (
            <button key={t.name} className={`w-full text-left px-5 py-4 border-b border-border/40 transition-colors ${t.active ? "bg-card" : "hover:bg-card/60"}`}>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{t.name}</p>
                <span className="text-[10px] text-muted-foreground">{t.time}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 truncate">{t.preview}</p>
            </button>
          ))}
        </aside>

        {/* Thread */}
        <section className="flex flex-col">
          <header className="px-6 py-4 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={advisorPortrait} alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium">Khalid Al Hashimi</p>
                <p className="text-[11px] text-muted-foreground">Senior Corporate Partner · Online</p>
              </div>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-primary">
              <ShieldCheck className="h-3.5 w-3.5" /> End-to-end encrypted
            </span>
          </header>

          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === "client" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  m.from === "client" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                }`}>
                  <p>{m.body}</p>
                  <p className={`text-[10px] mt-1.5 ${m.from === "client" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="border-t border-border/50 p-4 flex items-end gap-2"
          >
            <button type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-secondary" aria-label="Attach">
              <Paperclip className="h-4 w-4" />
            </button>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Write a private message to Khalid…"
              rows={1}
              className="flex-1 resize-none rounded-2xl border border-border/70 bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button type="submit" className="inline-flex h-10 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
              <Send className="h-4 w-4" /> Send
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}