import { useState } from "react";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";

function AdmissionsForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="flex items-center justify-center text-center w-full bg-white px-4 py-24 sm:px-6 sm:py-28 md:px-8 md:py-32"
    >
      <div className="flex items-center justify-center text-center mx-auto w-full max-w-[1380px]">

        <Reveal>
          <div className="rounded-[36px] bg-[#f1f0eb] px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 lg:px-20">

            {/* Heading */}
            <div className="mx-auto max-w-3xl">

              <p className="text-3xl font-semibold uppercase tracking-[0.22em] text-slate-400 sm:text-sm">
                Start Your Journey
              </p>

              <h2 className="mt-7 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-900 sm:text-5xl md:text-6xl">
                Apply to
                <span className="text-slate-400">
                  {" "}Tulas International School.
                </span>
              </h2>

              <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg">
                Share a few details with us and take the first step
                towards your child's journey at TIS.
              </p>

            </div>


            {/* Form */}
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-16 max-w-4xl"
              >

                <div className="grid gap-6 md:grid-cols-2">

                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="mb-3 block text-sm font-semibold text-slate-900"
                    >
                      Parent / Guardian Name
                    </label>

                    <input
                      id="parentName"
                      type="text"
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                    />
                  </div>


                  {/* Student Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="mb-3 block text-sm font-semibold text-slate-900"
                    >
                      Student Name
                    </label>

                    <input
                      id="studentName"
                      type="text"
                      placeholder="Enter student's name"
                      required
                      className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                    />
                  </div>


                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-semibold text-slate-900"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                    />
                  </div>


                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-sm font-semibold text-slate-900"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                    />
                  </div>


                  {/* Grade */}
                  <div>
                    <label
                      htmlFor="grade"
                      className="mb-3 block text-sm font-semibold text-slate-900"
                    >
                      Grade / Class
                    </label>

                    <select
                      id="grade"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 outline-none transition focus:border-slate-900"
                    >
                      <option value="" disabled>
                        Select grade
                      </option>

                      <option>Primary</option>
                      <option>Middle School</option>
                      <option>Secondary</option>
                      <option>Senior Secondary</option>
                    </select>
                  </div>


                  {/* Preferred Contact */}
                  <div>
                    <label
                      htmlFor="contactMethod"
                      className="mb-3 block text-sm font-semibold text-slate-900"
                    >
                      Preferred Contact
                    </label>

                    <select
                      id="contactMethod"
                      required
                      defaultValue=""
                      className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-600 outline-none transition focus:border-slate-900"
                    >
                      <option value="" disabled>
                        Select option
                      </option>

                      <option>Email</option>
                      <option>Phone</option>
                    </select>
                  </div>

                </div>


                {/* Message */}
                <div className="mt-6">

                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-semibold text-slate-900"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900"
                  />

                </div>


                {/* Submit */}
                <div className="mt-10 flex justify-center">

                  <button
                    type="submit"
                    className="inline-flex min-h-[56px] min-w-[190px] items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-700"
                  >
                    Submit Enquiry
                    <ArrowUpRight size={17} />
                  </button>

                </div>

              </form>
            ) : (

              /* Success Message */
              <div className="mx-auto mt-16 max-w-2xl rounded-[28px] bg-white px-6 py-16 text-center shadow-sm sm:px-10">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white">
                  <CheckCircle size={28} />
                </div>

                <h3 className="mt-7 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Enquiry Submitted
                </h3>

                <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                  Thank you for your interest in Tulas International School.
                  Our team will get in touch with you soon.
                </p>

              </div>

            )}

          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default AdmissionsForm;