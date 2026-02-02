import { Github, Linkedin, Twitter, Heart } from "lucide-react";

/**
 * Social media links displayed in the footer.
 * External links open in a new tab.
 */
const socialLinks = [
    {icon: Github, href:"https://github.com/kriso068", label: "GitHub", target:"_blank"},
    {icon: Linkedin, href:"https://www.linkedin.com/in/nicolas-gutknecht", label: "LinkedIn", target:"_blank"}

];

/**
 * Footer navigation links.
 * Anchor links are used for one-page navigation.
 */
const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {

  // Used to keep the copyright year always up to date
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight">
              NG<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Nicolas Gutknecht. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link, linkId) => (
              <a
                key={linkId}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, socialId) => (
              <a
                key={socialId}
                href={social.href}
                rel="noopener noreferrer"
                target={social.target}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};