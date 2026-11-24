
import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, CheckCircle, ClipboardList, HeartPulse, UserRound } from "lucide-react";

function CareSchedule() {
  return (
    <div className="min-h-screen bg-[#f5f8f6] text-slate-800">
      <nav className="border-b border-slate-200 bg-white px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link to="/caregiver" className="flex items-center gap-3"><div className="rounded-xl bg-emerald-700 p-2.5 text-white"><HeartPulse size={23} /></div><div><h2 className="text-xl font-bold text-slate-900">CareConnect</h2><p className="text-xs text-slate-500">Caregiver Portal</p></div></Link>
          <div className="flex flex-wrap gap-2 text-sm font-medium">
            <Link to="/caregiver" className="rounded-lg px-4 py-2 hover:bg-slate-100">Dashboard</Link>
            <Link to="/caregiver/schedule" className="rounded-lg bg-emerald-50 px-4 py-2 text-emerald-700">Schedule</Link>
            <Link to="/caregiver/my-elderly" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Elderly</Link>
            <Link to="/caregiver/visits" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Visits</Link>
            <Link to="/caregiver/profile" className="rounded-lg px-4 py-2 hover:bg-slate-100">Profile</Link>
          </div>
          <Link to="/caregiver/profile" className="flex items-center gap-2 rounded-full border border-slate-200 p-1.5 pr-4"><div className="rounded-full bg-emerald-100 p-2 text-emerald-700"><UserRound size={19} /></div><span className="text-sm font-semibold">Anita Thomas</span></Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Your daily plan</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Care Schedule</h1>
          <p className="mt-2 text-slate-500">Stay organized and keep track of your upcoming responsibilities.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><CalendarDays className="text-emerald-700" size={25} /><p className="mt-4 text-sm text-slate-500">Total Visits</p><h2 className="mt-1 text-3xl font-bold">24</h2></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><CheckCircle className="text-green-600" size={25} /><p className="mt-4 text-sm text-slate-500">Completed</p><h2 className="mt-1 text-3xl font-bold">18</h2></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><Clock className="text-orange-500" size={25} /><p className="mt-4 text-sm text-slate-500">Upcoming</p><h2 className="mt-1 text-3xl font-bold">06</h2></div>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
            <div><h2 className="text-xl font-bold text-slate-900">Today's Care Schedule</h2><p className="mt-1 text-sm text-slate-500">Monday, 23 November 2026</p></div>
            <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">4 visits planned</span>
          </div>

          <div className="space-y-5">
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-5 md:flex-row md:items-center">
              <div className="flex items-center gap-3 md:w-40"><div className="rounded-xl bg-emerald-50 p-3 text-emerald-700"><Clock /></div><div><p className="font-bold">09:00 AM</p><p className="text-xs text-slate-400">Morning</p></div></div>
              <div className="flex-1"><Link to="/caregiver/my-elderly" className="font-semibold text-slate-900 hover:text-emerald-700">Mary Joseph</Link><p className="mt-1 text-sm text-slate-500">Daily health checkup and medication assistance</p><p className="mt-2 text-xs text-slate-400"><MapPin className="mr-1 inline" size={13} />Trivandrum</p></div>
              <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">Completed</span>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-5 md:flex-row md:items-center">
              <div className="flex items-center gap-3 md:w-40"><div className="rounded-xl bg-blue-50 p-3 text-blue-700"><Clock /></div><div><p className="font-bold">11:30 AM</p><p className="text-xs text-slate-400">Afternoon</p></div></div>
              <div className="flex-1"><Link to="/caregiver/my-elderly" className="font-semibold text-slate-900 hover:text-emerald-700">John Mathew</Link><p className="mt-1 text-sm text-slate-500">Medication assistance and general care</p><p className="mt-2 text-xs text-slate-400"><MapPin className="mr-1 inline" size={13} />Kollam</p></div>
              <span className="w-fit rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">Upcoming</span>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-5 md:flex-row md:items-center">
              <div className="flex items-center gap-3 md:w-40"><div className="rounded-xl bg-purple-50 p-3 text-purple-700"><Clock /></div><div><p className="font-bold">02:00 PM</p><p className="text-xs text-slate-400">Afternoon</p></div></div>
              <div className="flex-1"><Link to="/caregiver/my-elderly" className="font-semibold text-slate-900 hover:text-emerald-700">Elizabeth Thomas</Link><p className="mt-1 text-sm text-slate-500">Routine care and health monitoring</p><p className="mt-2 text-xs text-slate-400"><MapPin className="mr-1 inline" size={13} />Kochi</p></div>
              <span className="w-fit rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">Upcoming</span>
            </div>
            <div className="flex flex-col gap-4 rounded-2xl border border-slate-100 p-5 md:flex-row md:items-center">
              <div className="flex items-center gap-3 md:w-40"><div className="rounded-xl bg-amber-50 p-3 text-amber-700"><Clock /></div><div><p className="font-bold">04:00 PM</p><p className="text-xs text-slate-400">Evening</p></div></div>
              <div className="flex-1"><Link to="/caregiver/my-elderly" className="font-semibold text-slate-900 hover:text-emerald-700">George Varghese</Link><p className="mt-1 text-sm text-slate-500">Evening checkup and assistance</p><p className="mt-2 text-xs text-slate-400"><MapPin className="mr-1 inline" size={13} />Kottayam</p></div>
              <span className="w-fit rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">Upcoming</span>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-emerald-950 p-6 text-white">
          <div className="flex items-center gap-3"><ClipboardList size={25} /><h2 className="text-lg font-bold">Care Instructions</h2></div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-4"><h3 className="font-semibold">Medication</h3><p className="mt-2 text-sm text-emerald-100">Follow the prescribed medication schedule for each member.</p></div>
            <div className="rounded-xl bg-white/10 p-4"><h3 className="font-semibold">Health Monitoring</h3><p className="mt-2 text-sm text-emerald-100">Keep health observations and visit records updated.</p></div>
          </div>
          <Link to="/caregiver/visits" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline">View visit history <CheckCircle size={16} /></Link>
        </section>
      </main>
    </div>
  );
}
export default CareSchedule