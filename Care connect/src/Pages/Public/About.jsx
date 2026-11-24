
import {
  HeartHandshake,
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Users,
  Award
} from "lucide-react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

 function About() {
  return (
    <div className="bg-[#f6faf7] min-h-screen">
      <Navbar />

      <section className="bg-[#eaf6ee] py-20 px-6 text-center">
        <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
          About CareConnect
        </span>

        <h1 className="text-4xl lg:text-5xl font-bold text-[#17352b] mt-5">
          Caring Is Our <span className="text-[#087f5b]">Purpose</span>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mt-6 leading-8">
          We are dedicated to improving elderly care by connecting
          elderly individuals with compassionate caregivers through
          a simple and accessible digital platform.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-14 items-center">

        <div>
          <img
            src="https://images.unsplash.com/photo-1516307365426-bea591f05011?w=900"
            alt="Elderly care"
            className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        <div>
          <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
            Who We Are
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-[#17352b] mt-4 leading-tight">
            A Better Way to Care for the People Who Matter
          </h2>

          <p className="text-gray-500 leading-8 mt-6">
            CareConnect is an elderly care management platform
            designed to make everyday assistance more organized,
            reliable and accessible.
          </p>

          <p className="text-gray-500 leading-8 mt-4">
            Our platform brings together elderly members,
            caregivers and administrators to support daily care
            activities, appointments and emergency assistance.
          </p>

          <div className="grid grid-cols-2 gap-5 mt-8">

            <div className="bg-white rounded-2xl p-5 border border-[#e7eee9]">
              <HeartHandshake size={27} className="text-[#087f5b]" />
              <h3 className="font-bold text-[#17352b] mt-3">
                Compassion
              </h3>
              <p className="text-xs text-gray-500 mt-2">
                Care with kindness.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#e7eee9]">
              <ShieldCheck size={27} className="text-[#087f5b]" />
              <h3 className="font-bold text-[#17352b] mt-3">
                Trust
              </h3>
              <p className="text-xs text-gray-500 mt-2">
                Safety and reliability.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
              Our Purpose
            </span>

            <h2 className="text-3xl font-bold text-[#17352b] mt-4">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#f6faf7] border border-[#e7eee9] rounded-3xl p-9 card-hover">
              <div className="bg-[#e2f5eb] w-16 h-16 flex items-center justify-center rounded-2xl">
                <Target size={30} className="text-[#087f5b]" />
              </div>

              <h3 className="text-2xl font-bold text-[#17352b] mt-6">
                Our Mission
              </h3>

              <p className="text-gray-500 leading-8 mt-4">
                To provide an accessible platform that simplifies
                elderly care management, strengthens caregiver
                coordination and supports safer daily living.
              </p>
            </div>

            <div className="bg-[#f6faf7] border border-[#e7eee9] rounded-3xl p-9 card-hover">
              <div className="bg-[#e2f5eb] w-16 h-16 flex items-center justify-center rounded-2xl">
                <Eye size={30} className="text-[#087f5b]" />
              </div>

              <h3 className="text-2xl font-bold text-[#17352b] mt-6">
                Our Vision
              </h3>

              <p className="text-gray-500 leading-8 mt-4">
                To create a world where every elderly individual
                can access compassionate care, maintain dignity
                and enjoy a comfortable and independent life.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-[#087f5b] uppercase">
            Our Values
          </span>

          <h2 className="text-3xl font-bold text-[#17352b] mt-4">
            The Principles Behind Our Care
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-7 rounded-2xl border border-[#e7eee9] text-center card-hover">
            <div className="mx-auto w-14 h-14 bg-[#e2f5eb] rounded-2xl flex items-center justify-center">
              <Heart size={26} className="text-[#087f5b]" />
            </div>

            <h3 className="font-bold text-lg text-[#17352b] mt-5">
              Empathy
            </h3>

            <p className="text-sm text-gray-500 mt-3 leading-6">
              Understanding every individual's needs.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-[#e7eee9] text-center card-hover">
            <div className="mx-auto w-14 h-14 bg-[#e2f5eb] rounded-2xl flex items-center justify-center">
              <ShieldCheck size={26} className="text-[#087f5b]" />
            </div>

            <h3 className="font-bold text-lg text-[#17352b] mt-5">
              Safety
            </h3>

            <p className="text-sm text-gray-500 mt-3 leading-6">
              Promoting secure and dependable care.
            </p>
          </div>

    
          <div className="bg-white p-7 rounded-2xl border border-[#e7eee9] text-center card-hover">
            <div className="mx-auto w-14 h-14 bg-[#e2f5eb] rounded-2xl flex items-center justify-center">
              <Users size={26} className="text-[#087f5b]" />
            </div>

            <h3 className="font-bold text-lg text-[#17352b] mt-5">
              Community
            </h3>

            <p className="text-sm text-gray-500 mt-3 leading-6">
              Building meaningful care connections.
            </p>
          </div>

        
          <div className="bg-white p-7 rounded-2xl border border-[#e7eee9] text-center card-hover">
            <div className="mx-auto w-14 h-14 bg-[#e2f5eb] rounded-2xl flex items-center justify-center">
              <Award size={26} className="text-[#087f5b]" />
            </div>

            <h3 className="font-bold text-lg text-[#17352b] mt-5">
              Excellence
            </h3>

            <p className="text-sm text-gray-500 mt-3 leading-6">
              Striving for better care experiences.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="bg-[#103b2d] rounded-3xl p-10 lg:p-14 text-center">

          <h2 className="text-3xl font-bold text-white">
            Together, We Make Care Better
          </h2>

          <p className="text-green-100/70 mt-4">
            Join our journey towards a more caring community.
          </p>

          <a
            href="/register"
            className="inline-block mt-8 px-8 py-4 bg-white text-[#087f5b] rounded-xl font-bold btn-hover"
          >
            Become a Member
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About