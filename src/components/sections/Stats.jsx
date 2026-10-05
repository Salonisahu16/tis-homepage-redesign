import { motion } from "framer-motion";
import Reveal from "../animation/Reveal";

function Stats() {
    const stats = [
        {
            value: "20+",
            label: "Years of Excellence",
        },
        {
            value: "1000+",
            label: "Students",
        },
        {
            value: "50+",
            label: "Learning Spaces",
        },
        {
            value: "1",
            label: "Growing Community",
        },
    ];

    return (
        <section className="flex items-center justify-center p-5 w-full bg-white py-28 sm:py-32 md:py-36">

            {/* CENTERED CARD */}
            <div className="flex items-center justify-center p-15 mx-auto w-[100%] max-w-[1280px]">

                <Reveal>
                    <div className="pt-5 mt-9 w-full rounded-[36px] bg-slate-900 px-6 py-20 sm:px-10 sm:py-24 md:px-16 md:py-28 lg:px-20 lg:py-32">

                        {/* Heading */}
                        <div className="mt-5 pt-5 mx-auto flex max-w-4xl flex-col items-center text-center">

                            <p className="text-2xl mt-5 font-semibold uppercase tracking-[0.22em] text-white/45 sm:text-sm">
                                TIS in Numbers
                            </p>

                            <h2 className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                Growing together,
                                <br />
                                <span className="text-white/40">
                                    every day.
                                </span>
                            </h2>

                            <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
                                A growing learning community built around curiosity,
                                confidence, and meaningful experiences.
                            </p>

                        </div>


                        {/* Stats */}
                        <div className="mt-20 border-t border-white/10 pt-12">

                            <div className="grid grid-cols-1 overflow-hidden rounded-[26px] border border-white/10 sm:grid-cols-2 lg:grid-cols-4">

                                {stats.map((stat, index) => (
                                    <Reveal
                                        key={stat.label}
                                        delay={index * 0.1}
                                    >
                                        <motion.div
                                            whileHover={{
                                                backgroundColor: "rgba(255,255,255,0.05)",
                                            }}
                                            className={`
                        flex
                        min-h-[210px]
                        w-full
                        flex-col
                        items-center
                        justify-center
                        px-8
                        py-12
                        text-center
                        ${index !== 0
                                                    ? "border-t border-white/10 sm:border-t-0 sm:border-l"
                                                    : ""
                                                }
                      `}
                                        >

                                            <p className="text-5xl font-semibold leading-none tracking-[-0.03em] text-white">
                                                {stat.value}
                                            </p>

                                            <p className="mt-5 max-w-[160px] text-sm leading-6 text-white/45">
                                                {stat.label}
                                            </p>

                                        </motion.div>
                                    </Reveal>
                                ))}

                            </div>

                        </div>

                    </div>
                </Reveal>

            </div>

        </section>
    );
}

export default Stats;