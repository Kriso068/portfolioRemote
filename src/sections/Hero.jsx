import { Button } from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
export const Hero = () => {
    return  <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Bg */}
                <div className="absolute inset-0">
                    <img src="/heroBg.jpg" alt="Hero image" className="w-full h-full object-cover opacity-40" />
                    <div className="absolute inset-0 bg-linear-to-b from-background/20 via-backgroung/80 to-background"/>
                </div>

                {/* Green Dots */}
                <div className="absolute overflow-hidden inset-0 pointer-events-none">
                    {[...Array(30)].map((_,idx) => (
                        <div key={idx} className="absolute w-1.5 h-1.5 rounded-full opacity-60" 
                            style= {{
                                backgroundColor:"#20B2A6",
                                left:`${Math.random()*100}%`,
                                top:`${Math.random()*100}%`,
                                animation: `slow-drift ${15+Math.random() * 20}s ease-in-out infinite`,
                                animationDelay: `${Math.random() * 5}s`
                            }} />
                    ))}
                </div>

                {/* Content */}
                <div className="container mx-auto px-6 pt-32 pb-20 realative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left colum - Text content*/}
                        <div className="space-y-8">
                            <div className="animate-fade-in">
                                <span className="inline-flex items-center gap-2 px-4 py-2 roundede-full glass text-sm text-primary" >
                                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                        Full Stack Web Developer – React / PHP / Symfony (Remote)
                                </span>
                            </div>
                            {/* Headline */}
                            <div className="space-y-4">
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                    blabla <span className="text-primary glow-text">blolo</span>
                                    <br />
                                    exper with
                                    <br />
                                    <span className="font-serif italic font-normal text-white">
                                        presicion
                                    </span>
                                </h1>
                                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                                    Hi, I'm Nicolas Gutknecht - Full Stack Web Developer with experience in React, PHP and Symfony. I’ve worked as a freelance developer and web development trainer.
                                </p>
                            </div>

                            {/* CTA */}
                            <div>
                                <Button size="lg">
                                    Contact Me <ArrowRight className="w-5 h-5"/>
                                </Button>
                                <AnimatedBorderButton>
                                    <Download className="w-5 h-5" />
                                        Download CV
                                </AnimatedBorderButton>
                            </div>
                        </div>
                        {/* Right colum - Profile Image*/}
                    </div>
                </div>
            </section>;
};
