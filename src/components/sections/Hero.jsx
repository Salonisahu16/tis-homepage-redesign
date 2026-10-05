import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

function Hero() {
    return (
        <section className=" mt-10 min-h-screen bg-[#f1f0eb] pb-16 pt-[140px]">

            <div className="site-shell ">

                <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <div className="flex items-center gap-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />

                            <p className="text-6xl font-semibold uppercase tracking-[0.2em] text-slate-500 md:text-xl">
                                Tulas International School
                            </p>
                        </div>


                        {/* Heading */}
                        <h1 className="mt-9 mb-7 max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-slate-900 sm:text-6xl md:text-7xl lg:text-[78px]">
                            Shape minds.
                            <br />

                            <span className="text-slate-400">
                                Inspire futures.
                            </span>
                        </h1>


                        {/* Description */}
                        <p className="mt-9 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
                            A learning environment where curiosity is encouraged,
                            confidence is built, and every student is prepared to
                            create a meaningful future.
                        </p>


                        {/* Buttons */}
                        <div className="p-5 mb-10 mt-10 flex flex-wrap items-center text-center gap-4">

                            <a
                                href="#about"
                                className="inline-flex w-30 h-14 items-center justify-center gap-3 rounded-full bg-slate-900 px-8 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-700"
                            >
                                <span>Explore TIS</span>
                                <ArrowUpRight size={17} />
                            </a>

                            <a
                                href="#contact"
                                className="inline-flex w-30 h-14 items-center justify-center rounded-full border border-slate-300 bg-white px-8 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-100"
                            >
                                Admissions
                            </a>

                        </div>


                        {/* Stats under buttons */}
                        <div className="mt-20 grid max-w-xl grid-cols-3 border-t border-slate-300 pt-8">

                            <div className="pr-5">
                                <p className="text-2xl font-semibold text-slate-900 md:text-3xl">
                                    20+
                                </p>

                                <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                                    Years of Excellence
                                </p>
                            </div>


                            <div className="border-l border-slate-300 px-5">
                                <p className="text-2xl font-semibold text-slate-900 md:text-3xl">
                                    1000+
                                </p>

                                <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                                    Students
                                </p>
                            </div>


                            <div className="border-l border-slate-300 pl-5">
                                <p className="text-2xl font-semibold text-slate-900 md:text-3xl">
                                    1
                                </p>

                                <p className="mt-2 text-xs leading-5 text-slate-500 md:text-sm">
                                    Community
                                </p>
                            </div>

                        </div>

                    </motion.div>


                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9 }}
                    >

                        <div className="overflow-hidden rounded-[34px] bg-slate-300">

                            <img
                                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                                alt="School campus"
                                className="h-[480px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[560px] lg:h-[620px]"
                            />

                        </div>


                        {/* Philosophy Card */}
                        <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">

                            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-400">
                                Our Philosophy
                            </p>

                            <div className="mt-2 flex items-center justify-between gap-4">
                                <p className="text-base font-semibold text-slate-900">
                                    Learn. Grow. Lead.
                                </p>

                                <ArrowUpRight size={18} className="text-slate-400" />
                            </div>

                        </div>

                    </motion.div>

                </div>


                {/* Scroll Indicator */}
                <div className="mt-12 flex items-center gap-3 text-slate-400">

                    <ChevronDown size={17} />

                    <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
                        Scroll to explore
                    </span>

                </div>

            </div>

        </section>
    );
}

export default Hero;