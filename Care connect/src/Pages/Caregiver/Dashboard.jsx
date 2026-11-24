
import { Link } from "react-router-dom";
import {
  Users, CalendarDays, Clock, CheckCircle, HeartPulse,
  MapPin, Bell, ShieldCheck, ArrowRight, UserRound
} from "lucide-react";
 function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f8f6] text-slate-800">
      <nav className="border-b border-slate-200 bg-white px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <Link to="/caregiver" className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-700 p-2.5 text-white">
              <HeartPulse size={23} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">CareConnect</h2>
              <p className="text-xs text-slate-500">Caregiver Portal</p>
            </div>
          </Link>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <Link to="/caregiver" className="rounded-lg bg-emerald-50 px-4 py-2 text-emerald-700">Dashboard</Link>
            <Link to="/caregiver/schedule" className="rounded-lg px-4 py-2 hover:bg-slate-100">Schedule</Link>
            <Link to="/caregiver/my-elderly" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Elderly</Link>
            <Link to="/caregiver/visits" className="rounded-lg px-4 py-2 hover:bg-slate-100">My Visits</Link>
            <Link to="/caregiver/profile" className="rounded-lg px-4 py-2 hover:bg-slate-100">Profile</Link>
          </div>
          <Link to="/caregiver/profile" className="flex items-center gap-2 rounded-full border border-slate-200 p-1.5 pr-4">
            <div className="rounded-full bg-emerald-100 p-2 text-emerald-700"><UserRound size={19} /></div>
            <span className="text-sm font-semibold">Anita Thomas</span>
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-8 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">Monday, 23 November 2026</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Welcome back, Anita!</h1>
            <p className="mt-2 text-slate-500">Here is your caregiving overview for today.</p>
          </div>
          <Link to="/caregiver/schedule" className="flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 hover:bg-emerald-800">
            View today's schedule <ArrowRight size={17} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex justify-between"><span className="text-sm text-slate-500">Assigned Elderly</span><Users className="text-emerald-700" /></div>
            <h2 className="mt-5 text-3xl font-bold">08</h2>
            <p className="mt-1 text-xs text-slate-400">Members under your care</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex justify-between"><span className="text-sm text-slate-500">Today's Visits</span><CalendarDays className="text-blue-600" /></div>
            <h2 className="mt-5 text-3xl font-bold">04</h2>
            <p className="mt-1 text-xs text-slate-400">Scheduled for today</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex justify-between"><span className="text-sm text-slate-500">Pending Tasks</span><Clock className="text-orange-500" /></div>
            <h2 className="mt-5 text-3xl font-bold">03</h2>
            <p className="mt-1 text-xs text-slate-400">Tasks awaiting completion</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex justify-between"><span className="text-sm text-slate-500">Completed Visits</span><CheckCircle className="text-purple-600" /></div>
            <h2 className="mt-5 text-3xl font-bold">26</h2>
            <p className="mt-1 text-xs text-slate-400">Completed this month</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Today's Schedule</h2>
                <p className="mt-1 text-sm text-slate-500">Your upcoming care visits</p>
              </div>
              <Link to="/caregiver/schedule" className="text-sm font-semibold text-emerald-700 hover:underline">See all</Link>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700"><HeartPulse /></div>
                <div className="min-w-0 flex-1"><h3 className="font-semibold">Mary Joseph</h3><p className="text-sm text-slate-500">Daily health checkup</p><p className="mt-1 text-xs text-slate-400"><MapPin className="mr-1 inline" size={13} />Trivandrum</p></div>
                <div className="text-right"><p className="text-sm font-semibold">09:00 AM</p><span className="text-xs font-semibold text-emerald-700">Completed</span></div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-700"><HeartPulse /></div>
                <div className="min-w-0 flex-1"><h3 className="font-semibold">John Mathew</h3><p className="text-sm text-slate-500">Medication assistance</p><p className="mt-1 text-xs text-slate-400"><MapPin className="mr-1 inline" size={13} />Kollam</p></div>
                <div className="text-right"><p className="text-sm font-semibold">11:30 AM</p><span className="text-xs font-semibold text-orange-600">Upcoming</span></div>
              </div>
              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                <div className="rounded-xl bg-purple-100 p-3 text-purple-700"><HeartPulse /></div>
                <div className="min-w-0 flex-1"><h3 className="font-semibold">Elizabeth Thomas</h3><p className="text-sm text-slate-500">Routine care visit</p><p className="mt-1 text-xs text-slate-400"><MapPin className="mr-1 inline" size={13} />Kochi</p></div>
                <div className="text-right"><p className="text-sm font-semibold">02:00 PM</p><span className="text-xs font-semibold text-orange-600">Upcoming</span></div>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-bold">Recent Notifications</h2>
            <p className="mt-1 text-sm text-slate-500">Your latest updates</p>
            <div className="mt-6 space-y-6">
              <div className="flex gap-3"><Bell className="mt-1 text-emerald-700" size={20} /><div><p className="text-sm font-semibold">New care assignment</p><p className="mt-1 text-xs text-slate-500">A new elderly member has been assigned to you.</p><p className="mt-2 text-xs text-slate-400">20 minutes ago</p></div></div>
              <div className="flex gap-3"><CalendarDays className="mt-1 text-blue-600" size={20} /><div><p className="text-sm font-semibold">Schedule reminder</p><p className="mt-1 text-xs text-slate-500">You have an upcoming visit at 11:30 AM.</p><p className="mt-2 text-xs text-slate-400">1 hour ago</p></div></div>
              <div className="flex gap-3"><CheckCircle className="mt-1 text-orange-500" size={20} /><div><p className="text-sm font-semibold">Health report updated</p><p className="mt-1 text-xs text-slate-500">A health report is available for review.</p><p className="mt-2 text-xs text-slate-400">Yesterday</p></div></div>
            </div>
          </section>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-emerald-900 p-6 text-white">
          <div className="flex items-center gap-4"><ShieldCheck size={30} /><div><h3 className="font-semibold">Every visit makes a difference.</h3><p className="mt-1 text-sm text-emerald-100">Keep care schedules and visit records up to date.</p></div></div>
          <Link to="/caregiver/my-elderly"className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 hover:bg-emerald-50">View assigned members</Link>
        </div>
      </main>
    </div>
  );
}

export default Dashboard