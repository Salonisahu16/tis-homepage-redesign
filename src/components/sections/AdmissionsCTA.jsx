import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../animation/Reveal";

function AdmissionsCTA() {
  return (
    <section
      id="admissions"
      style={{
        width: "100%",
        backgroundColor: "#ffffff",
        paddingTop: "20px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          width: "calc(100% - 48px)",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >

        <Reveal>
          <div
            style={{
              width: "100%",
              backgroundColor: "#0f172a",
              borderRadius: "36px",
              padding: "100px 40px",
              textAlign: "center",
            }}
          >

            {/* Label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  display: "block",
                }}
              />

              <p
                style={{
                  margin: 0,
                  fontSize: "32px",
                  fontWeight: 600,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Admissions
              </p>
            </div>


            {/* Heading */}
            <h2
              style={{
                margin: "32px auto 0",
                maxWidth: "850px",
                fontSize: "clamp(38px, 6vw, 72px)",
                lineHeight: 1.05,
                fontWeight: 600,
                letterSpacing: "-2px",
                color: "#ffffff",
              }}
            >
              Give your child a place
              <br />

              <span
                style={{
                  color: "rgba(255,255,255,0.4)",
                }}
              >
                to learn, grow and lead.
              </span>
            </h2>


            {/* Paragraph */}
            <p
              style={{
                margin: "32px auto 0",
                maxWidth: "620px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Begin the journey towards meaningful learning,
              confidence, creativity, and a stronger future.
            </p>


            {/* Button */}
            <div
              style={{
                marginTop: "44px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.a
                href="https://admission.tis.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-[58px] min-w-[180px] items-center justify-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-900 shadow-lg transition duration-300 hover:bg-slate-100"
              >
                <span>Apply to TIS</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                  <ArrowUpRight size={16} />
                </span>
              </motion.a>
            </div>

          </div>
        </Reveal>

      </div >
    </section >
  );
}

export default AdmissionsCTA;