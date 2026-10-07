import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact({ darkMode }) {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_szkw1ii",
        "template_wv3g338",
        formRef.current,
        {
          publicKey: "NlZIDO3ZIIFhkKEHV",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="px-6 py-28 sm:px-10 lg:px-20"
    >
      <div  className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Info */}

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Contact
            </p>

            <h2 className="text-4xl font-black sm:text-6xl">
              Let's build
              <span className="gradient-text">
                {" "}
                something togther.
              </span>
            </h2>

            <p
              className={`mt-6 max-w-lg leading-8 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              Have a Job, opportunity or collaboration
              in mind? Send me a message and I'll get back
              to you as soon as possible.
            </p>

            <div className="mt-10">
              <p className="text-sm text-slate-500">
                Email
              </p>

              <a
                href="mailto:muhammadokasha992@gmail.com"
                className="mt-1 inline-block text-lg font-semibold transition-colors hover:text-indigo-500"
              >
                muhammadokasha992@gmail.com
              </a>
            </div>

             <div className="mt-10">
              <p className="text-sm text-slate-500">
                Contact
              </p>

              <a
                href="contact to: +923282315011"
                className="mt-1 inline-block text-lg font-semibold transition-colors hover:text-indigo-500"
              >
                +923282315011
              </a>
            </div>

             <div className="mt-10">
              <p className="text-sm text-slate-500">
                Location
              </p>

              <a
                href="mailto:muhammadokasha992@gmail.com"
                className="mt-1 inline-block text-lg font-semibold transition-colors hover:text-indigo-500"
              >
                Karachi, Pakistan
              </a>
            </div>
          </div>

          {/* Form */}

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={`rounded-3xl border p-6 sm:p-8 ${
              darkMode
                ? "border-white/10 bg-white/[0.03]"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Your name"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                    darkMode
                      ? "border-white/10 bg-white/5"
                      : "border-slate-200 bg-slate-50"
                  }`}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="company@email.com"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                    darkMode
                      ? "border-white/10 bg-white/5"
                      : "border-slate-200 bg-slate-50"
                  }`}
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Company
              </label>

              <input
                type="text"
                name="subject"
                required
                placeholder="Your Company Name"
                className={`w-full rounded-xl border px-4 py-3 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                  darkMode
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-slate-50"
                }`}
              />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium">
                Message
              </label>

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell me about your Job Detail..."
                className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition-all focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                  darkMode
                    ? "border-white/10 bg-white/5"
                    : "border-slate-200 bg-slate-50"
                }`}
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;