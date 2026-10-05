import Reveal from "../animation/Reveal";

function About() {
    return (
        <section id="about" className="site-section bg-white">

            <div className="site-shell">

                <div className="max-w-4xl">

                    <Reveal>
                        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-slate-400">
                            About TIS
                        </p>
                    </Reveal>


                    <Reveal delay={0.1}>
                        <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-slate-900 sm:text-5xl md:text-6xl">
                            Education is not just about
                            <span className="text-slate-400">
                                {" "}what you learn.
                            </span>
                        </h2>
                    </Reveal>


                    <Reveal delay={0.2}>
                        <p className="mt-9 max-w-3xl text-base leading-8 text-slate-500 md:text-lg">
                            It is about discovering who you are, building confidence,
                            asking better questions, and learning how to make a
                            difference in the world around you.
                        </p>
                    </Reveal>


                    {/* Small Divider */}
                    <Reveal delay={0.3}>
                        <div className="mt-12 h-px w-full bg-slate-200" />
                    </Reveal>

                </div>

            </div>

        </section>
    );
}

export default About;