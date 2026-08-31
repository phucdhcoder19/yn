"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  Play,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

type MediaItem = {
  label: string;
  src: string;
  kind: "video" | "image";
  /** Cover image; a video without one falls back to a frame from itself. */
  poster?: string;
  /** Starts the player muted; the viewer can still unmute from the controls. */
  muted?: boolean;
};

type MediaCategory = { name: string; items: MediaItem[] };

/** What a pill button next to a job title opens. */
type Panel =
  | { label: string; type: "gallery"; items: MediaItem[] }
  | { label: string; type: "categories"; categories: MediaCategory[] }
  | { label: string; type: "link"; href: string };

type Experience = {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  panels?: Panel[];
  docs?: { label: string; href: string }[];
};

const video = (label: string, src: string, poster?: string): MediaItem => ({
  label,
  src,
  poster,
  kind: "video",
});

const image = (label: string, src: string): MediaItem => ({
  label,
  src,
  kind: "image",
});

const experiences: Experience[] = [
  {
    title: "Content Marketing Executive",
    company: "Natural House Co., Ltd.",
    period: "02/2026 - 08/2026",
    type: "Content Marketing",
    panels: [
      {
        label: "Video",
        type: "categories",
        categories: [
          {
            name: "Video Edit cho Founder",
            items: [
              video(
                "P1 Lợi ích của việc trồng sả chanh",
                "/videos/P1 Lợi ích của việc trồng sả chanh .mp4",
              ),
              video(
                "Phân biệt nước hoa và tinh dầu",
                "/videos/Phân biệt nước hoa và tinh dầu.mp4",
              ),
              video(
                "Để sản xuất ra chai tinh dầu 10ml thì cần nhữ",
                "/videos/Để sản xuất ra chai tinh dầu 10ml thì cần nhữ.mp4",
              ),
              video(
                "Tại sao Đá Bạc Xanh lại đầu tư thêm nhà máy ở Vũng Tàu",
                "/videos/Tại sao Đá Bạc Xanh lại đầu tư thêm nhà máy ở Vũng Tàu.mov",
              ),
            ],
          },
          {
            name: "Đá Bạc Xanh",
            items: [
              video(
                "Giới thiệu sản phẩm (1)",
                "/videos/Giới thiệu sản phẩm (1).MP4",
                "/videos/covers/gioi-thieu-san-pham-1.png",
              ),
              video(
                "Giới thiệu sản phẩm(2)",
                "/videos/Giới thiệu sản phẩm(2).MP4",
              ),
              video(
                "Giới thiệu sản phẩm(3)",
                "/videos/Giới thiệu sản phẩm(3).MP4",
                "/videos/covers/gioi-thieu-san-pham-3.png",
              ),
              video(
                "Giới thiệu sản phẩm(4)",
                "/videos/Giới thiệu sản phẩm(4).MOV",
              ),
            ],
          },
          { name: "Maccaland", items: [] },
        ],
      },
      {
        label: "Sự kiện",
        type: "categories",
        categories: [
          {
            name: "SỰ KIỆN KẾT NỐI DOANH NGHIỆP & TÁC NHÂN ĐỔI MỚI SÁNG TẠO",
            items: [
              {
                ...video("Video 1", "/su-kien/ket-noi-doanh-nghiep-1.mp4"),
                muted: true,
              },
              video("Video 2", "/su-kien/ket-noi-doanh-nghiep-2.mp4"),
              image("Ảnh 1", "/su-kien/ket-noi-doanh-nghiep-anh-1.jpg"),
              image("Ảnh 2", "/su-kien/ket-noi-doanh-nghiep-anh-2.jpg"),
            ],
          },
          {
            name: "Lễ Công bố Báo cáo Vietnam ESG Practitioner Dialogue 2026",
            items: [
              image("Ảnh 1", "/su-kien/esg-dialogue-2026-1.jpg"),
              image("Ảnh 2", "/su-kien/esg-dialogue-2026-2.jpg"),
            ],
          },
        ],
      },
      // TODO: thêm ảnh/video livestream vào items.
      { label: "Livestream", type: "gallery", items: [] },
      {
        label: "Fanpage",
        type: "gallery",
        // An empty label renders the card without a caption.
        items: [
          image("", "/fanpage/1.png"),
          image("", "/fanpage/2.png"),
          image("", "/fanpage/3.png"),
          image("", "/fanpage/4.png"),
          image("", "/fanpage/5.png"),
        ],
      },
    ],
    description:
      "Developed Key Visuals, visual direction, and brand storytelling across communication channels. Managed content for TikTok and Facebook Fanpage, developing creative ideas and scripts aligned with the brand's channel direction. Appeared on camera and directly participated in producing short-form TikTok videos. Edited and produced videos using CapCut and Premiere Pro; created basic promotional materials using Canva/Canva Pro. Supported livestream production and contributed to communication activities for new product launch events.",
  },
  {
    title: "Content Marketing",
    company: "CÔNG TY PUNAR (PUNAR Company)",
    period: "2025 - 2026",
    type: "Content Marketing",
    panels: [
      {
        label: "Video",
        type: "gallery",
        items: [
          video("Giới thiệu sản phẩm C'CHOI", "/download.mp4"),
          video("Thông báo ngày sale", "/nhi.mp4"),
        ],
      },
    ],
    description:
      "Planned and managed fanpage content for new products (3-5 posts/week), increasing interaction by ~25% in 2 months. Wrote and developed 20+ TikTok scripts based on trends and customer insights. Coordinated filming and optimized 3-second hooks, improving viewer retention by ~30%. Monitored and analyzed metrics (reach, engagement, retention), proposing content optimization to boost campaign effectiveness by 25%.",
  },
  {
    title: "Communications Team Member",
    company: "CLB Tình Nguyện Viên (Volunteer Club)",
    period: "2022",
    type: "Volunteer",
    description:
      "Created content for club programs and campaigns. Drafted posts, event summaries, and captions for community messages. Collaborated on content plans and communication strategies for the fanpage. Improved creative writing, social media management, and teamwork skills.",
  },
  {
    title: "Event Organizer",
    company:
      "Ban Tổ Chức Sự Kiện Sinh Viên (Student Event Organizing Committee)",
    period: "2025",
    type: "Volunteer",
    description:
      "Organized interactive and educational activities for primary school students. Planned and hosted engaging games, explained rules clearly, ensured a safe and fun environment, and collaborated with team members. Team of 5. Skills gained: Event planning, teamwork, communication, problem-solving.",
  },
];

/** Filenames carry spaces and Vietnamese diacritics, so paths need encoding. */
const toUrl = (src: string) => encodeURI(src);

const iconButtonClass =
  "flex shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--line-strong) text-foreground transition-colors duration-200 hover:border-foreground hover:bg-foreground hover:text-background";

/**
 * Fills the cover area of a card: a poster, or a frame from the video.
 * Videos without a poster play a silent preview while hovered.
 */
function CardCover({ item, alt }: { item: MediaItem; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (item.poster || item.kind === "image") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={toUrl(item.poster ?? item.src)}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-[1.04]"
      />
    );
  }
  return (
    <video
      ref={videoRef}
      // A frame at 0.5s stands in for a thumbnail.
      src={`${toUrl(item.src)}#t=0.5`}
      preload="metadata"
      muted
      playsInline
      loop
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        const el = videoRef.current;
        if (!el) return;
        el.pause();
        el.currentTime = 0.5;
      }}
      className="h-full w-full object-cover"
    />
  );
}

export default function Experience() {
  const [openExp, setOpenExp] = useState<Experience | null>(null);
  const [panel, setPanel] = useState<Panel | null>(null);
  const [category, setCategory] = useState<MediaCategory | null>(null);
  const [viewing, setViewing] = useState<MediaItem | null>(null);

  // The timeline rail draws itself as the section scrolls by.
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });

  const close = useCallback(() => {
    setOpenExp(null);
    setPanel(null);
    setCategory(null);
    setViewing(null);
  }, []);

  // One step back up the popup: viewer → grid → category list → closed.
  const goBack = useCallback(() => {
    if (viewing) return setViewing(null);
    if (category && panel?.type === "categories") return setCategory(null);
    close();
  }, [viewing, category, panel, close]);

  const openPanel = (exp: Experience, p: Panel) => {
    if (p.type === "link") {
      if (p.href) window.open(p.href, "_blank", "noopener,noreferrer");
      return;
    }
    setOpenExp(exp);
    setPanel(p);
    // A flat gallery has no category level to land on.
    setCategory(p.type === "gallery" ? { name: "", items: p.items } : null);
    setViewing(null);
  };

  useEffect(() => {
    if (!panel) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") goBack();
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [panel, goBack]);

  // The back arrow is meaningless at the top level of a flat gallery.
  const canGoBack = Boolean(
    viewing || (panel?.type === "categories" && category),
  );

  const subtitle = () => {
    if (!openExp || !panel) return "";
    if (viewing)
      return [openExp.company, category?.name].filter(Boolean).join(" • ");
    if (category) return `${openExp.company} • ${category.items.length} mục`;
    return panel.type === "categories"
      ? `${panel.categories.length} danh mục`
      : openExp.company;
  };

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading index="02" title="Work Experience" />
        <ScrollReveal delay={0.05}>
          <p className="mt-3 max-w-2xl text-sm text-muted">
            Bấm vào các nút cạnh tên công ty để xem trực tiếp video, hình ảnh
            sự kiện và fanpage tôi đã thực hiện.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={listRef} className="relative mt-10 pl-9 sm:pl-12">
          {/* Rail */}
          <div
            aria-hidden
            className="absolute top-1 bottom-1 left-[13px] w-px bg-(--line) sm:left-[17px]"
          />
          <motion.div
            aria-hidden
            style={{ scaleY: scrollYProgress }}
            className="absolute top-1 bottom-1 left-[13px] w-px origin-top bg-accent sm:left-[17px]"
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ScrollReveal key={exp.company} delay={i * 0.06}>
                <div className="relative">
                  {/* Node on the rail */}
                  <span
                    aria-hidden
                    className="absolute top-7 -left-9 flex h-[27px] w-[27px] items-center justify-center rounded-full border border-(--line-strong) bg-background font-(family-name:--font-cormorant) text-[11px] font-semibold italic sm:-left-12 sm:h-[35px] sm:w-[35px] sm:text-sm"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <motion.div
                    whileHover={{ y: -3, rotate: -0.3 }}
                    transition={{ duration: 0.25 }}
                    className="card-paper group rounded-xl p-6 sm:p-8"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-(family-name:--font-cormorant) text-xl font-bold text-foreground sm:text-2xl">
                            {exp.company}
                          </h3>
                          {exp.panels?.map((p) => (
                            <button
                              key={p.label}
                              type="button"
                              onClick={() => openPanel(exp, p)}
                              aria-label={`${p.label} – ${exp.company}`}
                              className="pill-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]"
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                        <p className="mt-1 text-sm font-semibold text-accent">
                          {exp.title}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 sm:shrink-0">
                        <span className="rounded-full border border-(--line) px-3 py-1 text-xs font-medium text-muted">
                          {exp.period}
                        </span>
                        <span className="rounded-full bg-olive-dim px-3 py-1 text-xs font-medium text-olive">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {exp.description}
                    </p>

                    {exp.docs && (
                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-xs font-medium text-muted">
                          View Documents:
                        </span>
                        {exp.docs.map((doc) => (
                          <motion.a
                            key={doc.label}
                            href={doc.href}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="flex cursor-pointer items-center gap-1 rounded-full bg-accent-dim px-3 py-1 text-xs font-medium text-accent hover:bg-accent hover:text-background transition-colors"
                          >
                            <FileText size={12} />
                            {doc.label}
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openExp && panel && panel.type !== "link" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`${panel.label} – ${openExp.company}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-(--line) bg-background p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {canGoBack && (
                    <button
                      type="button"
                      onClick={goBack}
                      aria-label="Quay lại"
                      className={`${iconButtonClass} h-8 w-8`}
                    >
                      <ArrowLeft size={15} />
                    </button>
                  )}
                  <div>
                    <h3 className="font-(family-name:--font-cormorant) text-lg font-bold text-foreground sm:text-xl">
                      {(viewing ? viewing.label : "") ||
                        category?.name ||
                        `${panel.label} – ${openExp.company}`}
                    </h3>
                    <p className="text-xs font-medium text-muted">
                      {subtitle()}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={close}
                  aria-label="Đóng"
                  className={`${iconButtonClass} h-9 w-9`}
                >
                  <X size={16} />
                </button>
              </div>

              <div className="mt-6 overflow-y-auto">
                {viewing ? (
                  viewing.kind === "video" ? (
                    <video
                      key={viewing.src}
                      // React's `muted` prop is unreliable on mount, so set the
                      // DOM property directly.
                      ref={(el) => {
                        if (el) el.muted = Boolean(viewing.muted);
                      }}
                      src={toUrl(viewing.src)}
                      poster={
                        viewing.poster ? toUrl(viewing.poster) : undefined
                      }
                      controls
                      autoPlay
                      playsInline
                      className="max-h-[62vh] w-full rounded-lg bg-foreground"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={viewing.src}
                      src={toUrl(viewing.src)}
                      alt={viewing.label || panel.label}
                      className="mx-auto max-h-[62vh] w-auto rounded-lg object-contain"
                    />
                  )
                ) : category ? (
                  category.items.length === 0 ? (
                    <p className="py-10 text-center font-(family-name:--font-cormorant) text-base italic text-muted">
                      Chưa có nội dung trong mục này.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {category.items.map((item, idx) => (
                        <motion.button
                          key={item.src}
                          type="button"
                          onClick={() => setViewing(item)}
                          whileHover={{ y: -3 }}
                          transition={{ duration: 0.2 }}
                          className="group/card cursor-pointer overflow-hidden rounded-lg border border-(--line) bg-card text-left transition-colors duration-200 hover:border-foreground"
                        >
                          <div className="relative aspect-video overflow-hidden bg-foreground">
                            <CardCover
                              item={item}
                              alt={item.label || panel.label}
                            />
                            <span className="absolute top-2 left-2 rounded-full bg-background/90 px-2 py-0.5 font-(family-name:--font-cormorant) text-xs font-semibold italic text-foreground">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/15 transition-colors duration-200 group-hover/card:bg-foreground/35">
                              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground transition-transform duration-200 group-hover/card:scale-110">
                                {item.kind === "video" ? (
                                  <Play size={16} fill="currentColor" />
                                ) : (
                                  <ImageIcon size={16} />
                                )}
                              </span>
                            </div>
                          </div>
                          {item.label && (
                            <p className="px-3 py-2.5 text-xs font-semibold text-foreground">
                              {item.label}
                            </p>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )
                ) : panel.type === "categories" ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {panel.categories.map((cat) => (
                      <motion.button
                        key={cat.name}
                        type="button"
                        onClick={() => setCategory(cat)}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="group/card cursor-pointer overflow-hidden rounded-lg border border-(--line) bg-card text-left transition-colors duration-200 hover:border-foreground"
                      >
                        <div className="relative aspect-video overflow-hidden bg-champagne">
                          {cat.items[0] && (
                            <CardCover item={cat.items[0]} alt={cat.name} />
                          )}
                          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/15 transition-colors duration-200 group-hover/card:bg-foreground/35">
                            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground transition-transform duration-200 group-hover/card:scale-110">
                              {cat.items[0]?.kind === "image" ? (
                                <ImageIcon size={16} />
                              ) : (
                                <Play size={16} fill="currentColor" />
                              )}
                            </span>
                          </div>
                        </div>
                        <div className="px-3 py-2.5">
                          <p className="text-xs font-semibold text-foreground">
                            {cat.name}
                          </p>
                          <p className="mt-0.5 text-[11px] font-medium text-muted">
                            {cat.items.length} mục
                          </p>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
