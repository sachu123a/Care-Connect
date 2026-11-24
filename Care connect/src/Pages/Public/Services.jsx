
import {
  HeartPulse,
  CalendarDays,
  ShieldCheck,
  Users,
  Stethoscope,
  Activity,
  ClipboardCheck,
  Clock,
  ArrowRight
} from "lucide-react";

import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Services() {
  return (
    <div className="min-h-screen bg-[#f6faf7]">

      <Navbar />

      <section className="bg-gradient-to-br from-[#eaf6ee] via-[#f3faf5] to-white px-6 py-24 text-center">

        <span className="inline-block rounded-full bg-white px-5 py-2 text-xs font-bold tracking-widest text-[#087f5b] shadow-sm uppercase">
          Our Services
        </span>

        <h1 className="mt-7 text-4xl font-extrabold leading-tight text-[#17352b] md:text-5xl lg:text-6xl">
          Everything You Need for
          <span className="block text-[#087f5b]">
            Better Care
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-500">
          Explore our elderly care management services designed
          to improve everyday living, simplify care routines
          and support caregivers.
        </p>

        <div className="mt-8 flex justify-center">
          <a href="#services"
            className="inline-flex items-center gap-3 rounded-xl bg-[#087f5b] px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-100 transition hover:bg-[#066b4d]">
            Explore Services
            <ArrowRight size={19} />
          </a>
        </div>

      </section>


      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">

        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-[3px] text-[#087f5b]">
            What We Offer
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#17352b] md:text-4xl">
            Our Care Services
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-500">
            Thoughtfully designed services to make elderly care
            more comfortable, organized and accessible.
          </p>
        </div>


        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          <div className="group rounded-3xl border border-[#e7eee9] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b] transition group-hover:bg-[#087f5b] group-hover:text-white">
              <HeartPulse size={29} />
            </div>

            <h3 className="mt-7 text-xl font-bold text-[#17352b]">
              Personal Care Assistance
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Support elderly individuals with their daily routines,
              personal wellbeing and everyday care requirements.
            </p>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Daily care support
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Wellbeing monitoring
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Personal assistance
              </p>
            </div>

          </div>


          <div className="group rounded-3xl border border-[#e7eee9] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b] transition group-hover:bg-[#087f5b] group-hover:text-white">
              <CalendarDays size={29} />
            </div>

            <h3 className="mt-7 text-xl font-bold text-[#17352b]">
              Care Schedule Management
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Organize daily care activities, medication reminders
              and important routines in one place.
            </p>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Daily care schedules
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Medication planning
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Routine management
              </p>
            </div>

          </div>


          <div className="group rounded-3xl border border-[#e7eee9] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/50">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
              <ShieldCheck size={29} />
            </div>

            <h3 className="mt-7 text-xl font-bold text-[#17352b]">
              Emergency Assistance
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Provide an accessible emergency assistance interface
              for elderly individuals who need urgent support.
            </p>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                SOS assistance interface
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Emergency contact details
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Location information display
              </p>
            </div>

          </div>


          <div className="group rounded-3xl border border-[#e7eee9] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b] transition group-hover:bg-[#087f5b] group-hover:text-white">
              <Users size={29} />
            </div>

            <h3 className="mt-7 text-xl font-bold text-[#17352b]">
              Caregiver Management
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Connect elderly members with caregivers and keep
              assigned care responsibilities organized.
            </p>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Caregiver profiles
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Care assignments
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Care coordination
              </p>
            </div>

          </div>


          <div className="group rounded-3xl border border-[#e7eee9] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b] transition group-hover:bg-[#087f5b] group-hover:text-white">
              <Stethoscope size={29} />
            </div>

            <h3 className="mt-7 text-xl font-bold text-[#17352b]">
              Medical Appointments
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Keep medical appointments and healthcare visit
              information organized and accessible.
            </p>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Appointment records
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Visit schedules
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Medical visit details
              </p>
            </div>

          </div>


          <div className="group rounded-3xl border border-[#e7eee9] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-100/50">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b] transition group-hover:bg-[#087f5b] group-hover:text-white">
              <ClipboardCheck size={29} />
            </div>

            <h3 className="mt-7 text-xl font-bold text-[#17352b]">
              Care Visit Tracking
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Maintain an organized overview of caregiver visits
              and daily care activities.
            </p>

            <div className="mt-6 space-y-4 border-t border-gray-100 pt-6">
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Visit information
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Activity records
              </p>
              <p className="flex items-center gap-3 text-sm text-gray-600">
                <ShieldCheck size={17} className="text-[#16a675]" />
                Care progress overview
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">

        <div className="grid overflow-hidden rounded-[32px] bg-[#e2f5eb] lg:grid-cols-2 lg:items-center">

          <div className="p-9 lg:p-14">

            <span className="text-xs font-bold uppercase tracking-widest text-[#087f5b]">
              Dedicated Support
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#17352b] md:text-4xl">
              Care Should Be Simple, Organized and Accessible
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              CareConnect brings essential elderly care management
              features together in a single digital platform.
            </p>

            <a href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#087f5b] px-7 py-4 font-semibold text-white shadow-lg shadow-emerald-200 transition hover:bg-[#066b4d]">
              Contact Us
              <ArrowRight size={19} />
            </a>

          </div>

          <div className="min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900"
              alt="Care support"
              className="h-full min-h-[350px] w-full object-cover"
            />
          </div>

        </div>
      </section>

      <section className="border-y border-gray-100 bg-white py-20">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 text-center sm:grid-cols-3 lg:px-10">

          <div>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b]">
              <Clock size={29} />
            </div>

            <h3 className="mt-5 font-bold text-[#17352b]">
              Organized Care
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              Better management of everyday activities.
            </p>
          </div>

          <div>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b]">
              <Activity size={29} />
            </div>

            <h3 className="mt-5 font-bold text-[#17352b]">
              Wellbeing Focused
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              Designed around elderly wellbeing.
            </p>
          </div>

          <div>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#e2f5eb] text-[#087f5b]">
              <ShieldCheck size={29} />
            </div>

            <h3 className="mt-5 font-bold text-[#17352b]">
              Connected Support
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-500">
              A connected approach to care coordination.
            </p>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}

export default Services;
