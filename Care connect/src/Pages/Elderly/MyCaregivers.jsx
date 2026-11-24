
import { UserRound, Phone, Mail, MapPin, Star, ShieldCheck, CalendarDays, HeartPulse } from "lucide-react";
 function MyCaregivers() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">My Caregivers</h1><p className="mt-2 text-sm text-gray-500">Meet the people who support your daily care and wellbeing.</p></div>

      <div className="rounded-2xl bg-gradient-to-r from-emerald-700 to-green-500 p-6 text-white">
        <div className="flex items-center gap-3"><HeartPulse size={30} /><div><h2 className="text-2xl font-bold">Your Care Team</h2><p className="mt-1 text-sm text-emerald-100">Dedicated people to make your everyday life easier.</p></div></div>
        <div className="mt-6 grid grid-cols-2 gap-4"><div><p className="text-sm text-emerald-100">Assigned Caregivers</p><p className="mt-1 text-3xl font-bold">2</p></div><div><p className="text-sm text-emerald-100">Care Status</p><p className="mt-2 font-semibold">Active</p></div></div>
      </div>

      <section>
        <h2 className="mb-4 text-lg font-bold">Assigned Caregivers</h2>
        <div className="grid gap-5 xl:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-bold text-emerald-700">AT</div><div><h3 className="text-lg font-bold">Anita Thomas</h3><p className="text-sm text-gray-500">Senior Caregiver</p><div className="mt-2 flex items-center gap-1 text-sm text-amber-500"><Star size={15} fill="currentColor" /><span className="font-semibold">4.9</span><span className="text-gray-400">(24 reviews)</span></div></div></div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Active</span>
            </div>
            <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-sm text-gray-600">
              <p className="flex items-center gap-3"><Phone size={17} className="text-emerald-600" /> +91 98765 11111</p>
              <p className="flex items-center gap-3"><Mail size={17} className="text-emerald-600" /> anita@example.com</p>
              <p className="flex items-center gap-3"><CalendarDays size={17} className="text-emerald-600" /> Monday – Saturday</p>
              <p className="flex items-center gap-3"><MapPin size={17} className="text-emerald-600" /> Thiruvananthapuram</p>
            </div>
            <div className="mt-5 rounded-xl bg-emerald-50 p-4"><p className="text-xs font-semibold text-emerald-700">MAIN RESPONSIBILITY</p><p className="mt-1 text-sm font-semibold text-emerald-900">Daily personal care and medication reminders</p></div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-4"><div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-xl font-bold text-blue-700">RK</div><div><h3 className="text-lg font-bold">Ravi Kumar</h3><p className="text-sm text-gray-500">Assistant Caregiver</p><div className="mt-2 flex items-center gap-1 text-sm text-amber-500"><Star size={15} fill="currentColor" /><span className="font-semibold">4.8</span><span className="text-gray-400">(18 reviews)</span></div></div></div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Active</span>
            </div>
            <div className="mt-6 space-y-3 border-t border-gray-100 pt-5 text-sm text-gray-600">
              <p className="flex items-center gap-3"><Phone size={17} className="text-emerald-600" /> +91 98765 22222</p>
              <p className="flex items-center gap-3"><Mail size={17} className="text-emerald-600" /> ravi@example.com</p>
              <p className="flex items-center gap-3"><CalendarDays size={17} className="text-emerald-600" /> Sunday – Friday</p>
              <p className="flex items-center gap-3"><MapPin size={17} className="text-emerald-600" /> Thiruvananthapuram</p>
            </div>
            <div className="mt-5 rounded-xl bg-blue-50 p-4"><p className="text-xs font-semibold text-blue-700">MAIN RESPONSIBILITY</p><p className="mt-1 text-sm font-semibold text-blue-900">Mobility assistance and daily activities</p></div>
          </div>
        </div>
      </section>

      <div className="flex items-center gap-3 rounded-2xl bg-white p-5 shadow-sm"><div className="rounded-xl bg-emerald-50 p-3 text-emerald-600"><ShieldCheck size={23} /></div><div><h2 className="font-bold">Your Care Assurance</h2><p className="mt-1 text-sm text-gray-500">Your assigned caregivers are part of your registered care team.</p></div></div>
    </div>
  );
}

export default MyCaregivers