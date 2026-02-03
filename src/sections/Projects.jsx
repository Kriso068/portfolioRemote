import { TopSixProjectsList } from "../components/TopSixProjectsList"
import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useState } from "react";

export const Projects = () => {

    /**
     * Shared disabled styles for cards where a live link / repo is not available.
     * pointer-events-none prevents clicks, opacity visually communicates disabled state.
     */
    const disabledClass = "opacity-40 cursor-not-allowed pointer-events-none";

    /**
     * When "View All Projects" is clicked, we show a playful message instead of navigating.
     * This keeps the homepage focused on the best work while still giving a clear fallback (GitHub).
     */
    const [showFunMessage, setShowFunMessage] = useState(false);

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
                {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                        {" "}
                        make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of recent projects, ranging from web applications to practical tools designed to solve real-world problems.
                    </p>
                </div>
                {/* Projects grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {TopSixProjectsList.map((project, idx) => (
                        <div key={ project.title ?? idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                            {/* Project image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"/>
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Live link */}
                                    <a
                                        href={project.link ?? undefined}
                                        target={project.target}
                                        aria-disabled={!project.link}
                                        rel={project.target === "_blank" ? "noopener noreferrer" : undefined}
                                        className={`p-3 rounded-full glass transition-all
                                        ${project.link
                                            ? "hover:bg-primary hover:text-primary-foreground"
                                            : disabledClass}
                                        `}
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>

                                    {/* GitHub link */}
                                    <a
                                        href={project.github ?? undefined}
                                        target={project.target}
                                        rel={project.target === "_blank" ? "noopener noreferrer" : undefined}
                                        aria-disabled={!project.github}
                                        className={`p-3 rounded-full glass transition-all
                                        ${project.github
                                            ? "hover:bg-primary hover:text-primary-foreground"
                                            : disabledClass}
                                        `}
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                 {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span key={tagIdx} className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300 ">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
                {/* View all CTA */}
                    <div className="text-center mt-12 animate-fade-in animation-delay-500">
                        <AnimatedBorderButton
                            onClick={() => setShowFunMessage((prev) => !prev)}
                        >
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </AnimatedBorderButton>

                        {showFunMessage && (
                            <p className="mt-4 text-sm text-muted-foreground animate-fade-in">
                                More projects coming… quality takes time — and coffee ☕ <br />
                                <a
                                href="https://github.com/kriso068"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                                >
                                Meanwhile, you can check my GitHub →
                                </a>
                            </p>
                        )}
                </div>
            </div>
        </section>
    );
};
