import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BookOpen,
    Lightbulb,
    Users,
} from "lucide-react";
import Reveal from "../animation/Reveal";

function Academics() {
    const cards = [
        {
            icon: BookOpen,
            number: "01",
            title: "Academic Excellence",
            text: "Strong foundations, thoughtful learning, and confidence to take on new challenges.",
        },
        {
            icon: Lightbulb,
            number: "02",
            title: "Creative Thinking",
            text: "Students are encouraged to question, explore ideas, and think beyond the obvious.",
        },
        {
            icon: Users,
            number: "03",
            title: "Holistic Growth",
            text: "Communication, collaboration, creativity, and personal development beyond textbooks.",
        },
    ];

    return (
        <section id="academics" className="site-section flex items-center justify-center text-center bg-[#f1f0eb]">

            <div className="site-shell  text-center">

                {/* Heading */}
                <Reveal>
                    <div className="max-w-4xl text-center">

                        <p className="text-xl font-semibold uppercase tracking-[0.2em] text-slate-400">
                            Academics
                        </p>

                        <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-slate-900 sm:text-5xl md:text-6xl">
                            Learning that goes
                            <span className="text-slate-400">
                                {" "}beyond the classroom.
                            </span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500 md:text-lg">
                            We create opportunities for students to learn deeply,
                            think independently, and grow with confidence.
                        </p>

                    </div>
                </Reveal>


                {/* Cards */}
                <div className="flex mt-16 grid gap-6 md:grid-cols-3 text-center justify-center items-center p-3">

                    {cards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <Reveal
                                key={card.number}
                                delay={index * 0.1}
                            >

                                <motion.div
                                    whileHover={{ y: -7 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex min-h-[200px] flex-col rounded-[20px] border border-slate-200 bg-white p-8 md:p-9"
                                >

                                    {/* Card Header */}
                                    <div className="flex items-center justify-between p-3">

                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                                            <Icon size={20} />
                                        </div>

                                        <span className="text-sm font-semibold text-slate-300">
                                            {card.number}
                                        </span>

                                    </div>


                                    {/* Card Content */}
                                    <div className="mt-auto pt-16">

                                        <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                                            {card.title}
                                        </h3>

                                        <p className="mt-5 text-sm leading-7 text-slate-500">
                                            {card.text}
                                        </p>

                                    </div>


                                    {/* Card Footer */}
                                    <div className="mt-9 flex items-center justify-center border-t border-slate-100 pt-6">

                                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                                            Discover more
                                        </span>

                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                                            <ArrowUpRight size={17} />
                                        </div>

                                    </div>

                                </motion.div>

                            </Reveal>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default Academics;