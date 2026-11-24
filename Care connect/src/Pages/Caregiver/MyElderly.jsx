
import { Link } from "react-router-dom";
import { Heart, UserRound, MapPin, Phone, CalendarDays, Activity, Search, HeartPulse } from "lucide-react";

 function MyElderly() {
  return (
    <div className="min-h-screen bg-[#f5f8f6] text-slate-800">
      <nav className="border-b border-slate-200 bg-white px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link to="/caregiver" className="flex items-center gap-3"><div className="rounded-xl bg-emerald-700 p-2.5 text-white"><HeartPulse size={23} /></div><div><h2 className="text-xl font-bold text-slate-900">CareConnect</h2><p className="text-xs text-slate-500">Caregiver Portal</p></div></Link>
          <div className="flex flex-wrap gap-2 text-sm font-medium">
        <Link to="/caregiver/dashboard" className="rounded-lg px-4 py-2 hover:bg-slate-100">Dashboard</Link>
            <Link to="/caregiver/schedule" className="rounded-lg px-4 py-2 hover:bg-slate-100">Schedule</Link>
          <Link to="/caregiver/my-elderly" className="rounded-lg bg-emerald-50 px-4 py-2 text-emerald-700">
  My Elderly
</Link>
            <Link to="/caregiver/visits" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Visits</Link>
            <Link to="/caregiver/profile" className="rounded-lg px-4 py-2 hover:bg-slate-100">Profile</Link>
          </div>
          <Link to="/caregiver/profile" className="flex items-center gap-2 rounded-full border border-slate-200 p-1.5 pr-4"><div className="rounded-full bg-emerald-100 p-2 text-emerald-700"><UserRound size={19} /></div><span className="text-sm font-semibold">Anita Thomas</span></Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">People in your care</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">My Elderly Members</h1>
          <p className="mt-2 text-slate-500">View the members assigned to you and their care requirements.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><Heart className="text-emerald-700" size={25} /><p className="mt-4 text-sm text-slate-500">Assigned Members</p><h2 className="mt-1 text-3xl font-bold">08</h2></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><Activity className="text-green-600" size={25} /><p className="mt-4 text-sm text-slate-500">Active Members</p><h2 className="mt-1 text-3xl font-bold">07</h2></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6"><CalendarDays className="text-orange-500" size={25} /><p className="mt-4 text-sm text-slate-500">Visits Today</p><h2 className="mt-1 text-3xl font-bold">04</h2></div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div><h2 className="text-xl font-bold text-slate-900">Assigned Members</h2><p className="mt-1 text-sm text-slate-500">Your current care assignments</p></div>
          <div className="flex w-full items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 md:w-80"><Search size={18} className="text-slate-400" /><input type="text" placeholder="Search elderly members..." className="w-full bg-transparent text-sm outline-none" /></div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between"><div className="rounded-2xl bg-emerald-50 p-4 text-emerald-700"><UserRound size={27} /></div><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Active</span></div>
            <h3 className="mt-5 text-lg font-bold">Mary Joseph</h3><p className="text-sm text-slate-500">72 years old</p>
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-500"><p><MapPin className="mr-2 inline text-emerald-700" size={16} />Trivandrum</p><p><Phone className="mr-2 inline text-emerald-700" size={16} />+91 98765 43210</p><p><CalendarDays className="mr-2 inline text-emerald-700" size={16} />Next visit: 24 Nov</p></div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Care Requirement</p><p className="mt-1 text-sm font-semibold">Daily health monitoring</p></div>
            <Link to="/caregiver/schedule" className="mt-5 flex items-center justify-between text-sm font-semibold text-emerald-700 hover:underline">View schedule <CalendarDays size={16} /></Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between"><div className="rounded-2xl bg-blue-50 p-4 text-blue-700"><UserRound size={27} /></div><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Active</span></div>
            <h3 className="mt-5 text-lg font-bold">John Mathew</h3><p className="text-sm text-slate-500">68 years old</p>
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-500"><p><MapPin className="mr-2 inline text-emerald-700" size={16} />Kollam</p><p><Phone className="mr-2 inline text-emerald-700" size={16} />+91 98765 12345</p><p><CalendarDays className="mr-2 inline text-emerald-700" size={16} />Next visit: 24 Nov</p></div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Care Requirement</p><p className="mt-1 text-sm font-semibold">Medication assistance</p></div>
            <Link to="/caregiver/schedule" className="mt-5 flex items-center justify-between text-sm font-semibold text-emerald-700 hover:underline">View schedule <CalendarDays size={16} /></Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between"><div className="rounded-2xl bg-purple-50 p-4 text-purple-700"><UserRound size={27} /></div><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Active</span></div>
            <h3 className="mt-5 text-lg font-bold">Elizabeth Thomas</h3><p className="text-sm text-slate-500">75 years old</p>
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-500"><p><MapPin className="mr-2 inline text-emerald-700" size={16} />Kochi</p><p><Phone className="mr-2 inline text-emerald-700" size={16} />+91 98765 67890</p><p><CalendarDays className="mr-2 inline text-emerald-700" size={16} />Next visit: 25 Nov</p></div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Care Requirement</p><p className="mt-1 text-sm font-semibold">Routine personal care</p></div>
            <Link to="/caregiver/schedule" className="mt-5 flex items-center justify-between text-sm font-semibold text-emerald-700 hover:underline">View schedule <CalendarDays size={16} /></Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between"><div className="rounded-2xl bg-orange-50 p-4 text-orange-700"><UserRound size={27} /></div><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Active</span></div>
            <h3 className="mt-5 text-lg font-bold">George Varghese</h3><p className="text-sm text-slate-500">81 years old</p>
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-500"><p><MapPin className="mr-2 inline text-emerald-700" size={16} />Kottayam</p><p><Phone className="mr-2 inline text-emerald-700" size={16} />+91 98765 11111</p><p><CalendarDays className="mr-2 inline text-emerald-700" size={16} />Next visit: 26 Nov</p></div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Care Requirement</p><p className="mt-1 text-sm font-semibold">Mobility assistance</p></div>
            <Link to="/caregiver/schedule" className="mt-5 flex items-center justify-between text-sm font-semibold text-emerald-700 hover:underline">View schedule <CalendarDays size={16} /></Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between"><div className="rounded-2xl bg-pink-50 p-4 text-pink-700"><UserRound size={27} /></div><span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Active</span></div>
            <h3 className="mt-5 text-lg font-bold">Joseph Mathew</h3><p className="text-sm text-slate-500">70 years old</p>
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-500"><p><MapPin className="mr-2 inline text-emerald-700" size={16} />Trivandrum</p><p><Phone className="mr-2 inline text-emerald-700" size={16} />+91 98765 22222</p><p><CalendarDays className="mr-2 inline text-emerald-700" size={16} />Next visit: 27 Nov</p></div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Care Requirement</p><p className="mt-1 text-sm font-semibold">Regular checkup</p></div>
            <Link to="/caregiver/schedule" className="mt-5 flex items-center justify-between text-sm font-semibold text-emerald-700 hover:underline">View schedule <CalendarDays size={16} /></Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between"><div className="rounded-2xl bg-rose-50 p-4 text-rose-700"><UserRound size={27} /></div><span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">Pending</span></div>
            <h3 className="mt-5 text-lg font-bold">Anna Joseph</h3><p className="text-sm text-slate-500">77 years old</p>
            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-500"><p><MapPin className="mr-2 inline text-emerald-700" size={16} />Alappuzha</p><p><Phone className="mr-2 inline text-emerald-700" size={16} />+91 98765 33333</p><p><CalendarDays className="mr-2 inline text-emerald-700" size={16} />Next visit: 28 Nov</p></div>
            <div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Care Requirement</p><p className="mt-1 text-sm font-semibold">Personal assistance</p></div>
            <Link to="/caregiver/schedule" className="mt-5 flex items-center justify-between text-sm font-semibold text-emerald-700 hover:underline">View schedule <CalendarDays size={16} /></Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-emerald-950 p-6 text-white">
          <div><h3 className="font-semibold">Keep every visit organized.</h3><p className="mt-1 text-sm text-emerald-100">Check your upcoming appointments and completed visits.</p></div>
          <Link to="/caregiver/visits" className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">View visit history</Link>
        </div>
      </main>
    </div>
  );
}
export default MyElderly