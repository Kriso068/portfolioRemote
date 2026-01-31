import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Clean Code",
        description:"I write readable and maintainable code using clear naming, reusable components, and consistent project structure."
    },
    {
        icon: Rocket,
        title: "Performance & Optimization",
        description:"Focus on fast-loading interfaces, optimized assets, and efficient database queries to deliver smooth user experiences."
    },
    {
        icon: Users,
        title: "Collaboration & Communication",
        description:"Comfortable working in distributed teams, communicating asynchronously, and explaining technical decisions clearly"
    },
    {
        icon: Lightbulb,
        title: "Problem Solving",
        description:"I enjoy analyzing problems, breaking them down into clear steps, and delivering practical, efficient solutions."
    },
]

export const About = () => {
    return  <section id="about" className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left column */}
                        <div className="space-y-8">
                            <div className="animate-fade-in">
                                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                    About Me
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                                Building the future,{" "}
                                <span className="font-serif italic font-normal text-white">One component at the time</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground animated-fade-in animation-delay-200">
                                <p>
                                    I’m a Full Stack Web Developer with experience in React, PHP, and Symfony.
                                </p>
                                <p>
                                    I build clean, maintainable web applications, from frontend interfaces to backend logic and APIs.
                                </p>
                                <p>
                                    I value clear code structure, performance, and reliability.
                                </p>
                                <p>
                                    I enjoy collaborating in remote-friendly teams and communicating clearly.
                                </p>
                                <p>
                                    I’m currently looking for a full-time remote position.
                                </p>
                            </div>
                            <div className="glass rounded-2xl p-6 glow-border animated-fade-in animtaion-delay-300">
                                <p className="text-lg font-medium italic text-foreground">
                                    I like building clean and reliable web applications and working with teams where communication and collaboration matter.
                                </p>
                            </div>
                        </div>
                        {/* Right column */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, idx) => (
                                <div key={idx} className="glass p-6 rounded-2xl animated-fade-in" 
                                    style={{animationDelay: `${(idx + 1) * 100}ms`}}>
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{item.title }</h3>
                                    <p className="text-sm text-muted-foreground">{item.description }</p>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>;
};
