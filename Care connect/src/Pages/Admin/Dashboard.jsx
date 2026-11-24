
import {
  Users, CalendarDays, Clock, CheckCircle, HeartPulse,
  MapPin, Bell, ShieldCheck, ArrowUpRight, Activity,
  Sun, ChevronRight
} from "lucide-react";

 function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f5f7f2] p-5 md:p-8 lg:p-10">

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-700">Caregiver workspace</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#183b32] md:text-4xl">Good morning, Anita!</h1>
          <p className="mt-2 text-sm text-gray-500">Here is your care overview for today.</p>
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-[#e5eae2] bg-white px-4 py-3">
          <div className="rounded-xl bg-amber-50 p-2 text-amber-600"><Sun size={20}/></div>
          <div>
            <p className="text-xs text-gray-400">Today</p>
            <p className="text-sm font-semibold text-[#183b32]">24 November 2026</p>
          </div>
        </div>
      </div>

      <div className="relative mb-8 overflow-hidden rounded-[28px] bg-[#173e33] p-7 text-white md:p-10">
        <div className="absolute -right-12 -top-24 h-72 w-72 rounded-full border-[35px] border-white/5"/>
        <div className="absolute -bottom-32 right-40 h-64 w-64 rounded-full bg-emerald-400/10 blur-2xl"/>
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-emerald-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300"/> Your care journey matters
          </span>
          <h2 className="mt-5 text-2xl font-bold leading-tight md:text-3xl">Every little act of care makes a big difference.</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-emerald-100/80">Stay on top of your visits, support your members and make every moment count.</p>
          <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white">
            <HeartPulse size={18}/> Thank you for making a difference.
          </div>
        </div>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-3xl border border-[#e8ece5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Assigned elderly</span>
            <span className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Users size={21}/></span>
          </div>
          <p className="mt-5 text-3xl font-bold text-[#183b32]">08</p>
          <p className="mt-1 text-xs text-gray-400">Members under your care</p>
        </div>
        <div className="rounded-3xl border border-[#e8ece5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Today's visits</span>
            <span className="rounded-2xl bg-blue-50 p-3 text-blue-600"><CalendarDays size={21}/></span>
          </div>
          <p className="mt-5 text-3xl font-bold text-[#183b32]">04</p>
          <p className="mt-1 text-xs text-gray-400">Scheduled for today</p>
        </div>
        <div className="rounded-3xl border border-[#e8ece5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Pending tasks</span>
            <span className="rounded-2xl bg-amber-50 p-3 text-amber-600"><Clock size={21}/></span>
          </div>
          <p className="mt-5 text-3xl font-bold text-[#183b32]">03</p>
          <p className="mt-1 text-xs text-gray-400">Awaiting completion</p>
        </div>
        <div className="rounded-3xl border border-[#e8ece5] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Completed visits</span>
            <span className="rounded-2xl bg-purple-50 p-3 text-purple-600"><CheckCircle size={21}/></span>
          </div>
          <p className="mt-5 text-3xl font-bold text-[#183b32]">26</p>
          <p className="mt-1 text-xs text-gray-400">Completed this month</p>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-3xl border border-[#e8ece5] bg-white p-6 xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#183b32]">Today's schedule</h2>
              <p className="mt-1 text-sm text-gray-400">Your upcoming caregiving visits</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">4 visits</span>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-4 rounded-2xl bg-[#f7faf6] p-4 sm:flex-row sm:items-center">
              <div className="w-24 shrink-0">
                <p className="text-sm font-bold text-[#183b32]">09:00 AM</p>
                <p className="mt-1 text-xs text-gray-400">Morning</p>
              </div>
              <div className="flex flex-1 items-center gap-3">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700"><HeartPulse size={21}/></div>
                <div>
                  <p className="font-semibold text-[#183b32]">Mary Joseph</p>
                  <p className="mt-1 text-xs text-gray-500">Daily health checkup</p>
                  <p className="mt-1 text-xs text-gray-400"><MapPin className="mr-1 inline" size={12}/>Trivandrum</p>
                </div>
              </div>
              <span className="w-fit rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">Confirmed</span>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl bg-[#f7faf6] p-4 sm:flex-row sm:items-center">
              <div className="w-24 shrink-0">
                <p className="text-sm font-bold text-[#183b32]">11:30 AM</p>
                <p className="mt-1 text-xs text-gray-400">Afternoon</p>
              </div>
              <div className="flex flex-1 items-center gap-3">
                <div className="rounded-2xl bg-blue-100 p-3 text-blue-700"><HeartPulse size={21}/></div>
                <div>
                  <p className="font-semibold text-[#183b32]">John Mathew</p>
                  <p className="mt-1 text-xs text-gray-500">Medication assistance</p>
                  <p className="mt-1 text-xs text-gray-400"><MapPin className="mr-1 inline" size={12}/>Kollam</p>
                </div>
              </div>
              <span className="w-fit rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-700">Confirmed</span>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl bg-[#f7faf6] p-4 sm:flex-row sm:items-center">
              <div className="w-24 shrink-0">
                <p className="text-sm font-bold text-[#183b32]">02:00 PM</p>
                <p className="mt-1 text-xs text-gray-400">Afternoon</p>
              </div>
              <div className="flex flex-1 items-center gap-3">
                <div className="rounded-2xl bg-purple-100 p-3 text-purple-700"><HeartPulse size={21}/></div>
                <div>
                  <p className="font-semibold text-[#183b32]">Elizabeth Thomas</p>
                  <p className="mt-1 text-xs text-gray-500">Routine care visit</p>
                  <p className="mt-1 text-xs text-gray-400"><MapPin className="mr-1 inline" size={12}/>Kochi</p>
                </div>
              </div>
              <span className="w-fit rounded-full bg-amber-100 px-3 py-1.5 text-xs font-semibold text-amber-700">Upcoming</span>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#e8ece5] bg-white p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-700"><Bell size={21}/></div>
            <div>
              <h2 className="text-xl font-bold text-[#183b32]">Notifications</h2>
              <p className="text-xs text-gray-400">Recent updates</p>
            </div>
          </div>
          <div className="mt-7 space-y-6">
            <div className="flex gap-3">
              <span className="h-fit rounded-xl bg-emerald-50 p-2 text-emerald-700"><Users size={17}/></span>
              <div>
                <p className="text-sm font-semibold text-[#183b32]">New care assignment</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">A new elderly member has been assigned to you.</p>
                <p className="mt-2 text-[11px] text-gray-400">20 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="h-fit rounded-xl bg-blue-50 p-2 text-blue-700"><CalendarDays size={17}/></span>
              <div>
                <p className="text-sm font-semibold text-[#183b32]">Schedule reminder</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">You have an upcoming visit at 11:30 AM.</p>
                <p className="mt-2 text-[11px] text-gray-400">1 hour ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="h-fit rounded-xl bg-orange-50 p-2 text-orange-700"><Activity size={17}/></span>
              <div>
                <p className="text-sm font-semibold text-[#183b32]">Health report updated</p>
                <p className="mt-1 text-xs leading-5 text-gray-500">A health report is available for review.</p>
                <p className="mt-2 text-[11px] text-gray-400">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 rounded-3xl border border-emerald-100 bg-[#eaf4eb] p-5">
        <div className="rounded-2xl bg-white p-3 text-emerald-700"><ShieldCheck size={23}/></div>
        <div>
          <h3 className="font-semibold text-[#183b32]">A gentle reminder</h3>
          <p className="mt-1 text-sm text-gray-600">Keep elderly members' care schedules and visit records up to date.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard