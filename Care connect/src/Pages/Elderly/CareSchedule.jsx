
import { CalendarDays, Clock, Pill, HeartPulse, Activity, CheckCircle2, UserRound } from "lucide-react";

 function CareSchedule() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Care Schedule</h1><p className="mt-2 text-sm text-gray-500">Your daily activities, medication and care routine.</p></div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm"><CalendarDays className="text-emerald-600" /><p className="mt-4 text-sm text-gray-500">Today's Activities</p><h2 className="mt-1 text-3xl font-bold">06</h2></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><CheckCircle2 className="text-green-600" /><p className="mt-4 text-sm text-gray-500">Completed</p><h2 className="mt-1 text-3xl font-bold">03</h2></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><Clock className="text-orange-500" /><p className="mt-4 text-sm text-gray-500">Remaining</p><h2 className="mt-1 text-3xl font-bold">03</h2></div>
      </div>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-lg font-bold">Daily Routine</h2><p className="mt-1 text-sm text-gray-500">Monday, 23 November 2026</p></div><span className="rounded-full bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">Today's Plan</span></div>

        <div className="mt-6 space-y-5">
          <div className="flex gap-4"><p className="w-20 shrink-0 pt-3 text-sm font-bold">07:00 AM</p><div className="flex flex-1 gap-4 rounded-xl border border-gray-100 p-4"><div className="h-fit rounded-xl bg-green-50 p-3 text-green-600"><Activity /></div><div><h3 className="font-semibold">Morning Exercise</h3><p className="mt-1 text-sm text-gray-500">Light stretching and walking</p><span className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Completed</span></div></div></div>
          <div className="flex gap-4"><p className="w-20 shrink-0 pt-3 text-sm font-bold">08:00 AM</p><div className="flex flex-1 gap-4 rounded-xl border border-gray-100 p-4"><div className="h-fit rounded-xl bg-blue-50 p-3 text-blue-600"><Pill /></div><div><h3 className="font-semibold">Morning Medication</h3><p className="mt-1 text-sm text-gray-500">Prescribed medicine after breakfast</p><span className="mt-3 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">Completed</span></div></div></div>
          <div className="flex gap-4"><p className="w-20 shrink-0 pt-3 text-sm font-bold">10:00 AM</p><div className="flex flex-1 gap-4 rounded-xl border border-gray-100 p-4"><div className="h-fit rounded-xl bg-purple-50 p-3 text-purple-600"><HeartPulse /></div><div><h3 className="font-semibold">Caregiver Visit</h3><p className="mt-1 text-sm text-gray-500">Routine health checkup with Anita</p><span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">Upcoming</span></div></div></div>
          <div className="flex gap-4"><p className="w-20 shrink-0 pt-3 text-sm font-bold">02:00 PM</p><div className="flex flex-1 gap-4 rounded-xl border border-gray-100 p-4"><div className="h-fit rounded-xl bg-orange-50 p-3 text-orange-600"><Pill /></div><div><h3 className="font-semibold">Afternoon Medication</h3><p className="mt-1 text-sm text-gray-500">Afternoon prescribed medicine</p><span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">Upcoming</span></div></div></div>
          <div className="flex gap-4"><p className="w-20 shrink-0 pt-3 text-sm font-bold">05:00 PM</p><div className="flex flex-1 gap-4 rounded-xl border border-gray-100 p-4"><div className="h-fit rounded-xl bg-green-50 p-3 text-green-600"><Activity /></div><div><h3 className="font-semibold">Evening Walk</h3><p className="mt-1 text-sm text-gray-500">Light physical activity</p><span className="mt-3 inline-block rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">Upcoming</span></div></div></div>
        </div>
      </section>

      <div className="flex items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"><UserRound className="text-emerald-700" /><div><h3 className="font-semibold">Your Caregiver</h3><p className="mt-1 text-sm text-emerald-800">Anita Thomas is assigned to assist you with your daily care routine.</p></div></div>
    </div>
  );
}

export default CareSchedule