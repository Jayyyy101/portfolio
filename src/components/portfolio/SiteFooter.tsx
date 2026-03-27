import { RESUME_PATH } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="site-footer">
      <h2 className="site-footer__title">Get In Touch</h2>
      <p className="site-footer__lead">
        Have something in mind — a role, a project, or just a conversation? I&apos;d love to hear from you.
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
