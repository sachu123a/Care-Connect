
import { Link } from "react-router-dom";
import { CalendarDays, Clock, MapPin, UserRound, CheckCircle, ClipboardCheck, Search, HeartPulse } from "lucide-react";

 function Visits() {
  return (
    <div className="min-h-screen bg-[#f5f8f6] text-slate-800">
      <nav className="border-b border-slate-200 bg-white px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link to="/caregiver" className="flex items-center gap-3"><div className="rounded-xl bg-emerald-700 p-2.5 text-white"><HeartPulse size={23} /></div><div><h2 className="text-xl font-bold text-slate-900">CareConnect</h2><p className="text-xs text-slate-500">Caregiver Portal</p></div></Link>
          <div className="flex flex-wrap gap-2 text-sm font-medium">
            <Link to="/caregiver" className="rounded-lg px-4 py-2 hover:bg-slate-100">Dashboard</Link>
            <Link to="/caregiver/schedule" className="rounded-lg px-4 py-2 hover:bg-slate-100">Schedule</Link>
            <Link to="/caregiver/my-elderly" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Elderly</Link>
            <Link to="/caregiver/visits" className="rounded-lg bg-emerald-50 px-4 py-2 text-emerald-700">My Visits</Link>
            <Link to="/caregiver/profile" className="rounded-lg px-4 py-2 hover:bg-slate-100">Profile</Link>
          </div>
          <Link to="/caregiver/profile" className="flex items-center gap-2 rounded-full border border-slate-200 p-1.5 pr-4"><div className="rounded-full bg-emerald-100 p-2 text-emerald-700"><UserRound size={19} /></div><span className="text-sm font-semibold">Anita Thomas</span></Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-10">
        <div><p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Your care activity</p><h1 className="mt-2 text-3xl font-bold text-slate-900">My Visits</h1><p className="mt-2 text-slate-500">Review your completed and upcoming elderly care visits.</p></div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><CalendarDays className="text-emerald-700" size={25} /><p className="mt-4 text-sm text-slate-500">Total Visits</p><h2 className="mt-1 text-3xl font-bold">124</h2></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><CheckCircle className="text-green-600" size={25} /><p className="mt-4 text-sm text-slate-500">Completed Visits</p><h2 className="mt-1 text-3xl font-bold">98</h2></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><Clock className="text-orange-500" size={25} /><p className="mt-4 text-sm text-slate-500">Upcoming Visits</p><h2 className="mt-1 text-3xl font-bold">26</h2></div>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div><h2 className="text-xl font-bold text-slate-900">Visit History</h2><p className="mt-1 text-sm text-slate-500">Your caregiving visit records</p></div>
            <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 md:w-72"><Search size={18} className="text-slate-400" /><input type="text" placeholder="Search visits..." className="w-full bg-transparent text-sm outline-none" /></div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left">
              <thead><tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-400"><th className="px-4 py-4">Elderly Member</th><th className="px-4 py-4">Visit Date</th><th className="px-4 py-4">Time</th><th className="px-4 py-4">Location</th><th className="px-4 py-4">Status</th></tr></thead>
              <tbody>
                <tr className="border-b border-slate-50">
                  <td className="px-4 py-5"><Link to="/caregiver/my-elderly" className="flex items-center gap-3 hover:text-emerald-700"><div className="rounded-full bg-emerald-50 p-3 text-emerald-700"><UserRound size={18} /></div><div><p className="text-sm font-semibold">Mary Joseph</p><p className="mt-1 text-xs text-slate-400">Daily Health Checkup</p></div></Link></td>
                  <td className="px-4 py-5 text-sm text-slate-600">22 Nov 2026</td><td className="px-4 py-5 text-sm text-slate-600">09:00 AM</td><td className="px-4 py-5 text-sm text-slate-500"><MapPin className="mr-1 inline text-emerald-700" size={14} />Trivandrum</td><td className="px-4 py-5"><span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">Completed</span></td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="px-4 py-5"><Link to="/caregiver/my-elderly" className="flex items-center gap-3 hover:text-emerald-700"><div className="rounded-full bg-blue-50 p-3 text-blue-700"><UserRound size={18} /></div><div><p className="text-sm font-semibold">John Mathew</p><p className="mt-1 text-xs text-slate-400">Medication Assistance</p></div></Link></td>
                  <td className="px-4 py-5 text-sm text-slate-600">22 Nov 2026</td><td className="px-4 py-5 text-sm text-slate-600">11:30 AM</td><td className="px-4 py-5 text-sm text-slate-500"><MapPin className="mr-1 inline text-emerald-700" size={14} />Kollam</td><td className="px-4 py-5"><span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">Completed</span></td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="px-4 py-5"><Link to="/caregiver/my-elderly" className="flex items-center gap-3 hover:text-emerald-700"><div className="rounded-full bg-purple-50 p-3 text-purple-700"><UserRound size={18} /></div><div><p className="text-sm font-semibold">Elizabeth Thomas</p><p className="mt-1 text-xs text-slate-400">Routine Care</p></div></Link></td>
                  <td className="px-4 py-5 text-sm text-slate-600">24 Nov 2026</td><td className="px-4 py-5 text-sm text-slate-600">10:00 AM</td><td className="px-4 py-5 text-sm text-slate-500"><MapPin className="mr-1 inline text-emerald-700" size={14} />Kochi</td><td className="px-4 py-5"><span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">Upcoming</span></td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="px-4 py-5"><Link to="/caregiver/my-elderly"className="flex items-center gap-3 hover:text-emerald-700"><div className="rounded-full bg-orange-50 p-3 text-orange-700"><UserRound size={18} /></div><div><p className="text-sm font-semibold">George Varghese</p><p className="mt-1 text-xs text-slate-400">Health Monitoring</p></div></Link></td>
                  <td className="px-4 py-5 text-sm text-slate-600">25 Nov 2026</td><td className="px-4 py-5 text-sm text-slate-600">02:00 PM</td><td className="px-4 py-5 text-sm text-slate-500"><MapPin className="mr-1 inline text-emerald-700" size={14} />Kottayam</td><td className="px-4 py-5"><span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">Upcoming</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-5"><Link to="/caregiver/my-elderly" className="flex items-center gap-3 hover:text-emerald-700"><div className="rounded-full bg-pink-50 p-3 text-pink-700"><UserRound size={18} /></div><div><p className="text-sm font-semibold">Joseph Mathew</p><p className="mt-1 text-xs text-slate-400">Regular Checkup</p></div></Link></td>
                  <td className="px-4 py-5 text-sm text-slate-600">27 Nov 2026</td><td className="px-4 py-5 text-sm text-slate-600">04:00 PM</td><td className="px-4 py-5 text-sm text-slate-500"><MapPin className="mr-1 inline text-emerald-700" size={14} />Trivandrum</td><td className="px-4 py-5"><span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-orange-700">Upcoming</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-emerald-950 p-6 text-white">
          <div className="flex items-center gap-3"><ClipboardCheck size={28} /><div><h3 className="font-semibold">Visit Records</h3><p className="mt-1 text-sm text-emerald-100">Review your schedule for the next visit.</p></div></div>
          <Link to="/caregiver/schedule" className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">Open care schedule</Link>
        </div>
      </main>
    </div>
  );
}
export default Visits