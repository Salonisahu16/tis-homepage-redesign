import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";

function Contact() {
    return (
        <section
            id="contact"
            className="flex items-center justify-center text-center w-full bg-white px-4 py-28 sm:px-6 sm:py-32 md:px-8 md:py-36"
        >
            {/* Centered Contact Card */}
            <div className="flex items-center justify-center text-center mx-auto px-6 py-20 w-full max-w-[1180px]">

                <Reveal>
                    <div className="w-full rounded-[36px] bg-[#f1f0eb] px-6 py-20 text-center sm:px-10 sm:py-24 md:px-16 md:py-28 lg:px-20 lg:py-32">

                        {/* Heading */}
                        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">

                            <p className="text-2xl font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
                                Contact
                            </p>

                            <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl md:text-6xl">
                                Let's start a
                                <span className="text-slate-400">
                                    {" "}conversation.
                                </span>
                            </h2>

                            <p className="mx-auto mt-8 w-full max-w-2xl text-center text-base leading-8 text-slate-500 sm:text-lg">
                                Have a question about admissions, academics, or life
                                at TIS? Reach out and our team will be happy to help.
                            </p>

                        </div>


                        {/* Contact Cards */}
                        <div className="mx-auto mt-16 grid w-full max-w-5xl gap-6 md:grid-cols-3">

                            {/* Email */}
                            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[26px] border border-slate-200 bg-white px-8 py-12 text-center">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                                    <Mail size={19} />
                                </div>

                                <h3 className="mt-7 text-lg font-semibold text-slate-900">
                                    Email
                                </h3>

                                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-7 text-slate-500">
                                    Reach out to our team for admissions and general enquiries.
                                </p>

                                <a
                                    href="mailto:info@tis.edu.in"
                                    className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-900 transition hover:text-slate-500"
                                >
                                    info@tis.edu.in
                                    <ArrowUpRight size={15} />
                                </a>

                            </div>


                            {/* Phone */}
                            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[26px] border border-slate-200 bg-white px-8 py-12 text-center">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                                    <Phone size={19} />
                                </div>

                                <h3 className="mt-7 text-lg font-semibold text-slate-900">
                                    Phone
                                </h3>

                                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-7 text-slate-500">
                                    Contact the school for admissions and general enquiries.
                                </p>

                                <a
                                    href="tel:+919837983791"
                                    className="mt-6 inline-flex flex-col items-center justify-center text-sm font-bold leading-6 text-slate-900 transition hover:text-slate-500"
                                >
                                    <span>+91-9837983791</span>
                                    <span className="mt-1 font-medium text-slate-400">
                                        Admission Helpline
                                    </span>
                                </a>

                            </div>


                            {/* Visit */}
                            <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[26px] border border-slate-200 bg-white px-8 py-12 text-center">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                                    <MapPin size={19} />
                                </div>

                                <h3 className="mt-7 text-lg font-semibold text-slate-900">
                                    Visit
                                </h3>

                                <p className="mx-auto mt-4 max-w-[240px] text-sm leading-7 text-slate-500">
                                    Tulas International School, Dhoolkot, P.O. – Selaqui,
                                    Chakrata Road, Dehradun – 248011.
                                </p>

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Tulas%20International%20School%2C%20Dhoolkot%2C%20Selaqui%2C%20Chakrata%20Road%2C%20Dehradun"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center justify-center gap-2 text-sm font-bold text-slate-900 transition hover:text-slate-500"
                                >
                                    Get directions
                                    <ArrowUpRight size={15} />
                                </a>

                            </div>

                        </div>


                        {/* Bottom Contact CTA */}
                        <div className="text-center mx-auto mt-16 w-full max-w-5xl rounded-[30px] bg-slate-900 px-6 py-16 text-center sm:px-10 sm:py-20 md:px-14 md:py-20">

                            <h3 className="mx-auto max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                                Have something to ask?
                            </h3>

                            <p className="mx-auto mt-6 w-full max-w-xl text-center text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                                Our team is here to help you take the next step.
                            </p>

                            <div className="mt-9 flex justify-center">

                                <a
                                href="https://admission.tis.edu.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-9 inline-flex h-12 min-w-[190px] items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
                                >
                                <span>Explore Admissions</span>
                                <ArrowUpRight size={17} />
                                </a>

                            </div>

                        </div>

                    </div>
                </Reveal>

            </div>
        </section>
    );
}

export default Contact;