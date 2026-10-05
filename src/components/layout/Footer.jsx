function Footer() {
    return (
        <footer className="flex items-center justify-center text-center w-full bg-[#f1f0eb] px-4 py-24 sm:px-6 sm:py-28 md:px-8 md:py-32">

            {/* Centered Footer Card */}
            <div className="mx-auto w-full max-w-[1180px]">

                <div className="flex flex-col items-center rounded-[36px] bg-slate-950 px-6 py-20 text-center sm:px-10 sm:py-24 md:px-16 md:py-28 lg:px-24">

                    {/* Logo */}
                    <div className="flex flex-col items-center">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-lg font-bold text-slate-900">
                            T
                        </div>

                        <h2 className="mt-6 text-xl font-bold text-white sm:text-2xl">
                            Tulas International School
                        </h2>

                        <p className="mt-3 text-sm text-white/40">
                            Shaping minds. Inspiring futures.
                        </p>

                    </div>


                    {/* Description */}
                    <div className="mt-9 flex w-full justify-center px-2">
                        <p className="w-full max-w-2xl text-center text-sm leading-8 text-white/50 sm:text-base">
                            A learning community focused on curiosity, confidence,
                            creativity, and helping every student grow into their
                            fullest potential.
                        </p>
                    </div>


                    {/* Navigation Heading */}
                    <div className="mt-14">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/30 sm:text-sm">
                            Explore
                        </p>
                    </div>


                    {/* Navigation Bullets */}
                    <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">

                        <li className="list-disc marker:text-white/40">
                            <a
                                href="#about"
                                className="text-sm font-bold text-white/65 transition duration-200 hover:text-white sm:text-base"
                            >
                                About
                            </a>
                        </li>

                        <li className="list-disc marker:text-white/40">
                            <a
                                href="#academics"
                                className="text-sm font-bold text-white/65 transition duration-200 hover:text-white sm:text-base"
                            >
                                Academics
                            </a>
                        </li>

                        <li className="list-disc marker:text-white/40">
                            <a
                                href="#campus"
                                className="text-sm font-bold text-white/65 transition duration-200 hover:text-white sm:text-base"
                            >
                                Campus
                            </a>
                        </li>

                        <li className="list-disc marker:text-white/40">
                            <a
                                href="#contact"
                                className="text-sm font-bold text-white/65 transition duration-200 hover:text-white sm:text-base"
                            >
                                Admissions
                            </a>
                        </li>

                    </ul>


                    {/* Divider */}
                    <div className="mt-16 w-full max-w-4xl border-t border-white/10 pt-10">

                        <div className="flex w-full flex-col items-center justify-center gap-4 text-center">

                            <p className="w-full text-center text-xs leading-6 text-white/30 sm:text-sm">
                                © 2026 Tulas International School. All rights reserved.
                            </p>

                            <p className="w-full text-center text-xs text-white/20 sm:text-sm">
                                Built with React & Tailwind CSS
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;