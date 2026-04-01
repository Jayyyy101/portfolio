import { RESUME_PATH } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <h2 className="site-footer__title">Get In Touch</h2>
      <p className="site-footer__lead">
        If you&apos;re building something ambitious — a product, a platform, or an AI system that needs to actually work — I&apos;d love to be part of it.
      </p>
      <div className="site-footer__actions">
        <a className="site-footer__hello" href="mailto:jayitasharma111@gmail.com">
          Say hello
        </a>
        <a className="btn-gold-outline" href={RESUME_PATH} download>
          Download resume
        </a>
      </div>
      <p className="site-footer__copy muted">
        © {new Date().getFullYear()} Jayita Sharma. Built with Next.js.
      </p>
    </footer>
  );
}
