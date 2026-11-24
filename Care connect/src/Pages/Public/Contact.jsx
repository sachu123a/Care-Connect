
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Headphones
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

 function Contact() {
  return (
    <div className="bg-[#f6faf7] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#eaf6ee] py-20 px-6 text-center">
        <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
          Contact Us
        </span>

        <h1 className="text-4xl lg:text-5xl font-bold text-[#17352b] mt-5">
          Let's Start a <span className="text-[#087f5b]">Conversation</span>
        </h1>

        <p className="text-gray-500 max-w-xl mx-auto mt-5 leading-8">
          Have questions about CareConnect? We'd love to hear from you.
          Reach out to our team.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-5 gap-10">

        <div className="lg:col-span-2">
          <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
            Get In Touch
          </span>

          <h2 className="text-3xl font-bold text-[#17352b] mt-4">
            We'd Love to Hear From You
          </h2>

          <p className="text-gray-500 text-sm leading-7 mt-4">
            Whether you need assistance or want to learn more about
            our platform, our team is here to help.
          </p>

          <div className="space-y-5 mt-9">

            {/* Email */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#e7eee9] card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#e2f5eb] flex items-center justify-center shrink-0">
                <Mail size={21} className="text-[#087f5b]" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#17352b]">
                  Email Address
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  support@careconnect.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#e7eee9] card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#e2f5eb] flex items-center justify-center shrink-0">
                <Phone size={21} className="text-[#087f5b]" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#17352b]">
                  Phone Number
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  +91 98765 43210
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#e7eee9] card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#e2f5eb] flex items-center justify-center shrink-0">
                <MapPin size={21} className="text-[#087f5b]" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#17352b]">
                  Our Location
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Kerala, India
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-[#e7eee9] card-hover">
              <div className="w-12 h-12 rounded-xl bg-[#e2f5eb] flex items-center justify-center shrink-0">
                <Clock size={21} className="text-[#087f5b]" />
              </div>

              <div>
                <h3 className="text-sm font-bold text-[#17352b]">
                  Working Hours
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Monday – Saturday, 9 AM – 6 PM
                </p>
              </div>
            </div>

          </div>

          <div className="bg-[#087f5b] text-white rounded-2xl p-6 mt-8">
            <div className="flex items-center gap-3">
              <Headphones size={27} />
              <h3 className="font-bold text-lg">Need Assistance?</h3>
            </div>

            <p className="text-sm text-green-100 mt-3 leading-6">
              Our support team is ready to answer your questions
              about the CareConnect platform.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3 bg-white rounded-3xl p-7 md:p-10 border border-[#e7eee9] shadow-sm">

          <div className="flex items-center gap-3 mb-8">
            <div className="bg-[#e2f5eb] p-3 rounded-xl">
              <MessageCircle size={24} className="text-[#087f5b]" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#17352b]">
                Send Us a Message
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                We'd be happy to assist you.
              </p>
            </div>
          </div>

          <form className="space-y-6">

            <div className="grid sm:grid-cols-2 gap-5">

              <div>
                <label className="text-sm font-semibold text-[#17352b]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-4 py-3.5 rounded-xl border border-[#e7eee9] outline-none focus:border-[#087f5b] bg-[#fafcfb] text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-[#17352b]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 px-4 py-3.5 rounded-xl border border-[#e7eee9] outline-none focus:border-[#087f5b] bg-[#fafcfb] text-sm"
                />
              </div>

            </div>

            <div>
              <label className="text-sm font-semibold text-[#17352b]">
                Subject
              </label>

              <input
                type="text"
                placeholder="What is your enquiry about?"
                className="w-full mt-2 px-4 py-3.5 rounded-xl border border-[#e7eee9] outline-none focus:border-[#087f5b] bg-[#fafcfb] text-sm"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#17352b]">
                Your Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full mt-2 px-4 py-3.5 rounded-xl border border-[#e7eee9] outline-none focus:border-[#087f5b] bg-[#fafcfb] text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-[#087f5b] text-white py-4 rounded-xl font-semibold btn-hover"
            >
              Send Message <Send size={17} />
            </button>

            <p className="text-xs text-center text-gray-400">
              This is a frontend demonstration form.
            </p>

          </form>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="bg-[#e2f5eb] rounded-3xl p-9 text-center">
          <h2 className="text-2xl font-bold text-[#17352b]">
            Your Care Journey Starts Here
          </h2>

          <p className="text-sm text-gray-500 mt-3">
            Thank you for being a part of the CareConnect community.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact