"use client";

import { useEffect, useRef, useState } from "react";

import { Icon } from "@/view/Icon";
import { Reveal } from "@/view/Reveal";
import { projects } from "@/model/data";

function AutoplayVideo({ src, poster, alt }: { src: string; poster: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      aria-label={alt}
      controls
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}

export function FeaturedWork() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const openProject = projects.find((p) => p.slug === openSlug) ?? null;

  function openLightbox(slug: string) {
    lastFocused.current = document.activeElement as HTMLElement | null;
    setOpenSlug(slug);
  }
  function closeLightbox() {
    setOpenSlug(null);
    lastFocused.current?.focus();
  }

  useEffect(() => {
    if (openProject) closeButtonRef.current?.focus();
    document.body.classList.toggle("no-scroll", !!openProject);
    return () => document.body.classList.remove("no-scroll");
  }, [openProject]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape" && openProject) closeLightbox();
    }
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  }, [openProject]);

  if (projects.length === 0) return null;

  return (
    <section className="section section--alt" id="projects">
      <div className="wrap">
        <div className="sheet-label">
          <span className="num">04</span> / 12<span className="rule" />
          Featured Work
        </div>
        <Reveal as="div" className="section-head">
          <h2 className="section-title">Featured Work</h2>
          <p className="section-text">A look at custom fabrication and metalwork created to solve real customer needs.</p>
        </Reveal>

        <div className="work-layout">
          {projects.map((project) => (
            <Reveal
              as="article"
              className="project-card"
              key={project.slug}
            >
              <div
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                aria-label={`Open project detail: ${project.title}`}
                onClick={() => openLightbox(project.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(project.slug);
                  }
                }}
                style={{ display: "contents", cursor: "pointer" }}
              >
                <div className="project-figure photo">
                  <span className="tag">Completed Project</span>
                  <img src={project.cover.src} alt={project.cover.alt} loading="lazy" />
                </div>
                <div className="project-body">
                  <span className="cat">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="expand">
                    View Project Detail <Icon name="i-arrow" />
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div
        className={openProject ? "lightbox open" : "lightbox"}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        aria-hidden={!openProject}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeLightbox();
        }}
      >
        {openProject && (
          <div className="lightbox-panel">
            <button className="lightbox-close" ref={closeButtonRef} onClick={closeLightbox} aria-label="Close project detail">
              <Icon name="i-close" className="icon-18" />
            </button>
            <div className="lightbox-figure gallery">
              {openProject.gallery.map((media) =>
                media.kind === "video" ? (
                  <AutoplayVideo key={media.src} src={media.src} poster={media.poster} alt={media.alt} />
                ) : (
                  <img key={media.src} src={media.src} alt={media.alt} loading="lazy" />
                )
              )}
            </div>
            <div className="lightbox-body">
              <span className="cat">{openProject.category}</span>
              <h3 id="lightbox-title">{openProject.title}</h3>
              <p>{openProject.description}</p>
              <a
                href="#contact"
                className="btn btn-primary"
                onClick={closeLightbox}
                style={{ alignSelf: "flex-start", marginTop: ".5rem" }}
              >
                Start a Similar Project
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
