
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  ShieldCheck,
  HeartPulse,
  ArrowRight,
  CheckCircle2,
  Users,
  CalendarDays
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

 function Home() {
  return (
    <div className="bg-[#f6faf7] min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">

        <div className="page-enter">
          <span className="inline-flex items-center gap-2 bg-[#e2f5eb] text-[#087f5b] px-4 py-2 rounded-full text-xs font-bold tracking-wide">
            <HeartHandshake size={16} />
            COMPASSIONATE CARE, CONNECTED
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#17352b] leading-tight mt-7">
            Better Care.
            <br />
            <span className="text-[#087f5b]">Brighter Lives.</span>
          </h1>

          <p className="text-gray-500 text-base lg:text-lg leading-8 mt-6 max-w-lg">
            Bringing elderly people, caregivers and families together
            through trusted care, emergency assistance and personalized
            support.
          </p>

          <div className="flex flex-wrap gap-4 mt-9">
            <Link
              to="/register"
              className="flex items-center gap-2 bg-[#087f5b] text-white px-7 py-4 rounded-xl font-semibold btn-hover"
            >
              Get Started <ArrowRight size={18} />
            </Link>

            <Link
              to="/services"
              className="px-7 py-4 rounded-xl border border-[#dce9e0] text-[#087f5b] font-semibold bg-white hover:bg-green-50 transition"
            >
              Explore Services
            </Link>
          </div>

          <div className="flex flex-wrap gap-5 mt-10">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 size={17} className="text-[#087f5b]" />
              Trusted Caregivers
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CheckCircle2 size={17} className="text-[#087f5b]" />
              24/7 Support
            </div>
          </div>
        </div>

        <div className="relative fade-in">
          <div className="absolute inset-0 bg-[#ccebd8] rounded-[40px] rotate-3"></div>

          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800"
            alt="Caregiver"
            className="relative w-full h-[420px] lg:h-[510px] object-cover rounded-[35px] shadow-xl"
          />

          <div className="absolute bottom-6 left-5 right-5 bg-white/95 backdrop-blur-lg p-5 rounded-2xl shadow-xl flex items-center gap-4 float-animation">
            <div className="bg-[#e2f5eb] p-3 rounded-xl">
              <HeartPulse size={27} className="text-[#087f5b]" />
            </div>

            <div>
              <h3 className="font-bold text-[#17352b]">
                Care That Feels Like Family
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Every moment matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white p-6 rounded-2xl text-center border border-[#e7eee9] card-hover">
            <h2 className="text-3xl font-bold text-[#087f5b]">500+</h2>
            <p className="text-sm text-gray-500 mt-2">Elderly Members</p>
          </div>

          <div className="bg-white p-6 rounded-2xl text-center border border-[#e7eee9] card-hover">
            <h2 className="text-3xl font-bold text-[#087f5b]">150+</h2>
            <p className="text-sm text-gray-500 mt-2">Caregivers</p>
          </div>

          <div className="bg-white p-6 rounded-2xl text-center border border-[#e7eee9] card-hover">
            <h2 className="text-3xl font-bold text-[#087f5b]">1,200+</h2>
            <p className="text-sm text-gray-500 mt-2">Care Visits</p>
          </div>

          <div className="bg-white p-6 rounded-2xl text-center border border-[#e7eee9] card-hover">
            <h2 className="text-3xl font-bold text-[#087f5b]">24/7</h2>
            <p className="text-sm text-gray-500 mt-2">Support System</p>
          </div>

        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
              What We Offer
            </span>

            <h2 className="text-3xl lg:text-4xl font-bold text-[#17352b] mt-4">
              Complete Care for Every Need
            </h2>

            <p className="text-gray-500 mt-4 leading-7">
              Thoughtfully designed services that make elderly care
              easier, safer and more accessible.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            <div className="p-7 bg-[#f6faf7] rounded-2xl border border-[#e7eee9] card-hover">
              <div className="bg-[#e2f5eb] w-14 h-14 rounded-2xl flex items-center justify-center">
                <HeartPulse size={26} className="text-[#087f5b]" />
              </div>

              <h3 className="font-bold text-[#17352b] text-lg mt-5">
                Personal Care
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-6">
                Personalized daily assistance and wellbeing support.
              </p>
            </div>

            <div className="p-7 bg-[#f6faf7] rounded-2xl border border-[#e7eee9] card-hover">
              <div className="bg-[#e2f5eb] w-14 h-14 rounded-2xl flex items-center justify-center">
                <CalendarDays size={26} className="text-[#087f5b]" />
              </div>

              <h3 className="font-bold text-[#17352b] text-lg mt-5">
                Care Scheduling
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-6">
                Organized medication and daily care routines.
              </p>
            </div>

            <div className="p-7 bg-[#f6faf7] rounded-2xl border border-[#e7eee9] card-hover">
              <div className="bg-[#e2f5eb] w-14 h-14 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={26} className="text-[#087f5b]" />
              </div>

              <h3 className="font-bold text-[#17352b] text-lg mt-5">
                Emergency Support
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-6">
                Quick access to emergency assistance.
              </p>
            </div>

            <div className="p-7 bg-[#f6faf7] rounded-2xl border border-[#e7eee9] card-hover">
              <div className="bg-[#e2f5eb] w-14 h-14 rounded-2xl flex items-center justify-center">
                <Users size={26} className="text-[#087f5b]" />
              </div>

              <h3 className="font-bold text-[#17352b] text-lg mt-5">
                Caregiver Connect
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-6">
                Connect with trusted and dedicated caregivers.
              </p>
            </div>

          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[#087f5b] font-semibold hover:gap-4 transition-all"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-14 items-center">

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
            alt="Care support"
            className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
            Why CareConnect
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#17352b] mt-4 leading-tight">
            Making Every Stage of Ageing More Comfortable
          </h2>

          <p className="text-gray-500 leading-7 mt-5">
            We believe everyone deserves quality care, independence
            and dignity. CareConnect brings essential support into
            one convenient platform.
          </p>

          <div className="space-y-5 mt-8">

            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#087f5b]" />
              <span className="text-sm font-medium text-[#17352b]">
                Trusted caregiver management
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#087f5b]" />
              <span className="text-sm font-medium text-[#17352b]">
                Easy-to-follow daily care schedules
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#087f5b]" />
              <span className="text-sm font-medium text-[#17352b]">
                Emergency assistance access
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 size={20} className="text-[#087f5b]" />
              <span className="text-sm font-medium text-[#17352b]">
                Convenient appointment management
              </span>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="bg-[#087f5b] rounded-[30px] p-10 lg:p-16 text-center relative overflow-hidden">

          <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-28 -left-20"></div>
          <div className="absolute w-72 h-72 bg-white/10 rounded-full -bottom-40 -right-20"></div>

          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Care Begins With a Connection
            </h2>

            <p className="text-green-100 mt-4 max-w-xl mx-auto leading-7">
              Join CareConnect and discover a better way to experience
              elderly care.
            </p>

            <Link
              to="/register"
              className="inline-flex items-center gap-2 mt-8 bg-white text-[#087f5b] px-8 py-4 rounded-xl font-bold btn-hover"
            >
              Join CareConnect <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home