
import { Link } from "react-router-dom";
import {
  UserRound, Mail, Phone, MapPin, BriefcaseBusiness,
  GraduationCap, Star, ShieldCheck, CalendarDays, HeartPulse
} from "lucide-react";

 function Profile() {
  return (
    <div className="min-h-screen bg-[#f5f8f6] text-slate-800">
      <nav className="border-b border-slate-200 bg-white px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link to="/caregiver" className="flex items-center gap-3"><div className="rounded-xl bg-emerald-700 p-2.5 text-white"><HeartPulse size={23} /></div><div><h2 className="text-xl font-bold text-slate-900">CareConnect</h2><p className="text-xs text-slate-500">Caregiver Portal</p></div></Link>
          <div className="flex flex-wrap gap-2 text-sm font-medium">
            <Link to="/caregiver" className="rounded-lg px-4 py-2 hover:bg-slate-100">Dashboard</Link>
            <Link to="/caregiver/schedule" className="rounded-lg px-4 py-2 hover:bg-slate-100">Schedule</Link>
            <Link to="/caregiver/my-elderly" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Elderly</Link>
            <Link to="/caregiver/visits" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Visits</Link>
            <Link to="/caregiver/profile" className="rounded-lg bg-emerald-50 px-4 py-2 text-emerald-700">Profile</Link>
          </div>
          <Link to="/caregiver/profile" className="flex items-center gap-2 rounded-full border border-slate-200 p-1.5 pr-4"><div className="rounded-full bg-emerald-100 p-2 text-emerald-700"><UserRound size={19} /></div><span className="text-sm font-semibold">Anita Thomas</span></Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-10">
        <div><p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Account settings</p><h1 className="mt-2 text-3xl font-bold text-slate-900">My Profile</h1><p className="mt-2 text-slate-500">Your personal details and professional information.</p></div>

        <div className="grid gap-6 xl:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-emerald-50 text-emerald-700"><UserRound size={58} /></div>
            <h2 className="mt-5 text-2xl font-bold text-slate-900">Anita Thomas</h2>
            <p className="mt-1 text-sm text-slate-500">Professional Caregiver</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-xs font-semibold text-green-700"><ShieldCheck size={15} />Verified Caregiver</span>
            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
              <div><h3 className="text-2xl font-bold">5+</h3><p className="mt-1 text-xs text-slate-500">Years Experience</p></div>
              <div><h3 className="flex items-center justify-center gap-1 text-2xl font-bold">4.9 <Star size={17} className="fill-yellow-400 text-yellow-400" /></h3><p className="mt-1 text-xs text-slate-500">Rating</p></div>
            </div>
            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left"><p className="text-xs text-slate-400">Account Status</p><p className="mt-2 font-semibold text-green-700">Active</p></div>
            <Link to="/caregiver" className="mt-6 flex items-center justify-center rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800">Back to Dashboard</Link>
          </section>

          <div className="space-y-6 xl:col-span-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900">Personal Information</h2><p className="mt-1 text-sm text-slate-500">Your registered contact details</p>
              <div className="mt-7 grid gap-7 md:grid-cols-2">
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Full Name</p><p className="mt-2 flex items-center gap-2 font-semibold"><UserRound size={18} className="text-emerald-700" />Anita Thomas</p></div>
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Email Address</p><p className="mt-2 flex items-center gap-2 font-semibold"><Mail size={18} className="text-emerald-700" />anita@example.com</p></div>
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Phone Number</p><p className="mt-2 flex items-center gap-2 font-semibold"><Phone size={18} className="text-emerald-700" />+91 98765 43210</p></div>
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Location</p><p className="mt-2 flex items-center gap-2 font-semibold"><MapPin size={18} className="text-emerald-700" />Trivandrum, Kerala</p></div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
              <h2 className="text-xl font-bold text-slate-900">Professional Information</h2><p className="mt-1 text-sm text-slate-500">Your caregiving experience and qualifications</p>
              <div className="mt-7 grid gap-7 md:grid-cols-2">
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Job Role</p><p className="mt-2 flex items-center gap-2 font-semibold"><BriefcaseBusiness size={18} className="text-emerald-700" />Elderly Caregiver</p></div>
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Experience</p><p className="mt-2 flex items-center gap-2 font-semibold"><CalendarDays size={18} className="text-emerald-700" />5 Years</p></div>
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Qualification</p><p className="mt-2 flex items-center gap-2 font-semibold"><GraduationCap size={18} className="text-emerald-700" />Caregiving Certification</p></div>
                <div><p className="text-xs font-medium uppercase tracking-wider text-slate-400">Specialization</p><p className="mt-2 font-semibold">Elderly Personal Care</p></div>
              </div>
            </section>

            <section className="rounded-2xl bg-emerald-950 p-6 text-white">
              <div className="flex items-center gap-3"><ShieldCheck size={25} /><h3 className="font-semibold">Verified Caregiver Account</h3></div>
              <p className="mt-2 text-sm text-emerald-100">Your caregiver profile is displayed as verified in this frontend preview.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/caregiver/my-elderly" className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">My Elderly Members</Link>
                <Link to="/caregiver/visits" className="rounded-xl border border-white/30 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">View My Visits</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Profile