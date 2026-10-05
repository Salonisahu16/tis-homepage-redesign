import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Trees } from "lucide-react";
import Reveal from "../animation/Reveal";

function Campus() {
    const features = [
        {
            label: "Space",
            title: "Designed for active learning",
        },
        {
            label: "Community",
            title: "Built around collaboration",
        },
        {
            label: "Experience",
            title: "Learning beyond textbooks",
        },
    ];

    return (
        <section id="campus" className="site-section bg-white">

            <div className="site-shell">

                {/* Heading */}
                <Reveal>
                    <div className="max-w-4xl">

                        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-slate-400">
                            The Campus
                        </p>

                        <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-slate-900 sm:text-5xl md:text-6xl">
                            A place designed
                            <span className="text-slate-400">
                                {" "}to inspire.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                            Thoughtfully designed spaces that give students room
                            to learn, explore, collaborate, and create.
                        </p>

                    </div>
                </Reveal>


                {/* Main Campus Area */}
                <div className="mt-16 grid gap-6 lg:grid-cols-[1.45fr_0.55fr]">

                    {/* Image Column */}
                    <Reveal>

                        <div mb-14>

                            <div className="overflow-hidden rounded-[34px] bg-slate-200">

                                <img
                                    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85"
                                    alt="School campus"
                                    className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[600px]"
                                />

                            </div>


                            {/* Image Caption */}
                            <div className="mt-12 flex items-start justify-between gap-6 px-2">

                                <div>
                                    <p className="mt-14 text-xl font-medium uppercase tracking-[0.18em] text-slate-400">
                                        Learning beyond classrooms
                                    </p>

                                    <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
                                        Spaces that make learning an experience.
                                    </h3>
                                </div>

                                <a
                                    href="#contact"
                                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-100 sm:flex"
                                >
                                    <ArrowUpRight size={18} />
                                </a>

                            </div>

                        </div>

                    </Reveal>


                    {/* Right Cards */}
                    <div className="grid gap-6 text-center">

                        {/* Card 1 */}
                        <Reveal delay={0.1}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.25 }}
                                className="min-h-[205px] rounded-[30px] bg-slate-900 p-8 text-white"
                            >

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                                    <Sparkles size={20} />
                                </div>

                                <h3 className="mt-14 text-2xl font-semibold">
                                    Learn beyond limits.
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-white/55">
                                    An environment that encourages curiosity,
                                    collaboration, creativity, and independent thinking.
                                </p>

                            </motion.div>
                        </Reveal>


                        {/* Card 2 */}
                        <Reveal delay={0.2}>
                            <motion.div
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.25 }}
                                className="min-h-[205px] rounded-[30px] bg-[#f1f0eb] p-8"
                            >

                                <div className="flex h-9 w-12 items-center justify-center rounded-2xl bg-white">
                                    <Trees size={20} className="text-slate-900" />
                                </div>

                                <h3 className="mt-9 text-3xl font-semibold leading-[0.95] text-slate-900">
                                    Discover.
                                    <br />
                                    Create.
                                    <br />
                                    Belong.
                                </h3>

                                <div className="mt-8 flex items-center text-right gap-1 text-sm font-medium text-slate-600">
                                    Student life at TIS
                                    <ArrowUpRight size={16} />
                                </div>

                            </motion.div>
                        </Reveal>

                    </div>

                </div>


                {/* Bottom Feature Cards */}
                <Reveal delay={0.15}>
                    <div className="mt-12 text-center grid gap-5 md:grid-cols-3">

                        {features.map((feature) => (
                            <div
                                key={feature.label}
                                className="min-h-[65px] text-center p-5 rounded-2xl border border-slate-200 bg-white p-7 md:p-8"
                            >

                                <p className="text-xs text-center font-semibold uppercase tracking-[0.15em] text-slate-400">
                                    {feature.label}
                                </p>

                                <p className="mt-6 max-w-xs text-center text-base font-semibold leading-6 text-slate-900">
                                    {feature.title}
                                </p>

                            </div>
                        ))}

                    </div>
                </Reveal>

            </div>

        </section>
    );
}

export default Campus;