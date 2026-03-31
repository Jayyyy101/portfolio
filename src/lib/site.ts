/**
 * Single source of truth for the downloadable resume.
 *
 * Keep the served PDF at: `public/resume/Current/resume.pdf`
 * Store older versions under: `public/resume/Archive/` (any filename).
 * Next.js serves `public/` at the site root, so this URL stays stable.
 *
 * All UI that offers “Resume” / “Download resume” imports this constant.
 */
export const RESUME_PATH = "/resume/Current/resume.pdf";

/** Edit these to your real profiles / phone. */
export const SOCIAL_LINKEDIN = "https://www.linkedin.com/in/jayita-sharma";
export const PHONE_TEL = "tel:+919990708880";
export const EMAIL_MAILTO = "mailto:jayitasharma111@gmail.com";
