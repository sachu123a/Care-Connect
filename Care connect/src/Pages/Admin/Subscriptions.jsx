
import {
  WalletCards,
  Users,
  IndianRupee,
  CheckCircle,
  Plus,
  Pencil,
  Trash2,
  Crown,
  HeartPulse,
  ShieldCheck
} from "lucide-react";

function Subscriptions() {
  return (
    <div className="space-y-7">

    
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Subscription Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage elderly care subscription plans and pricing.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
        >
          <Plus size={18} />
          Add New Plan
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600">
            <WalletCards size={22} />
          </div>
          <p className="text-sm text-slate-500">Total Plans</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">03</h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3 text-green-600">
            <CheckCircle size={22} />
          </div>
          <p className="text-sm text-slate-500">Active Subscriptions</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">248</h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-purple-100 p-3 text-purple-600">
            <Users size={22} />
          </div>
          <p className="text-sm text-slate-500">Subscribed Members</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">248</h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3 text-orange-600">
            <IndianRupee size={22} />
          </div>
          <p className="text-sm text-slate-500">Monthly Revenue</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">₹2.8L</h2>
        </div>

      </div>

      
      <div>
        <div className="mb-5">
          <h2 className="text-xl font-bold text-slate-800">
            Available Subscription Plans
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            View and manage the plans offered to elderly members.
          </p>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">

      
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <HeartPulse size={23} />
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Active
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-800">
              Basic Care
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Essential everyday elderly care assistance.
            </p>

            <div className="mt-5">
              <span className="text-3xl font-bold text-slate-800">₹999</span>
              <span className="text-sm text-slate-500"> / month</span>
            </div>

            <div className="my-5 border-t border-slate-100" />

            <p className="mb-3 text-sm font-semibold text-slate-700">
              Plan Features
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Basic daily assistance</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Weekly health check-in</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Appointment assistance</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Emergency contact support</li>
            </ul>

            <div className="mt-6 rounded-xl bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Subscribed Members</p>
              <p className="mt-1 text-xl font-bold text-slate-800">86</p>
            </div>

            <div className="mt-5 flex gap-3">
              <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-200 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50">
                <Pencil size={16} /> Edit
              </button>
              <button type="button" className="flex items-center justify-center rounded-lg border border-red-200 px-4 py-2.5 text-red-600 hover:bg-red-50">
                <Trash2 size={17} />
              </button>
            </div>
          </div>

       
          <div className="rounded-2xl border-2 border-blue-500 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <ShieldCheck size={23} />
              </div>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                Popular
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-800">
              Standard Care
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Regular personal care and health assistance.
            </p>

            <div className="mt-5">
              <span className="text-3xl font-bold text-slate-800">₹1,999</span>
              <span className="text-sm text-slate-500"> / month</span>
            </div>

            <div className="my-5 border-t border-slate-100" />

            <p className="mb-3 text-sm font-semibold text-slate-700">
              Plan Features
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Regular caregiver visits</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Medication reminders</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Health monitoring</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Priority appointment support</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Family care updates</li>
            </ul>

            <div className="mt-6 rounded-xl bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Subscribed Members</p>
              <p className="mt-1 text-xl font-bold text-slate-800">112</p>
            </div>

            <div className="mt-5 flex gap-3">
              <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-200 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50">
                <Pencil size={16} /> Edit
              </button>
              <button type="button" className="flex items-center justify-center rounded-lg border border-red-200 px-4 py-2.5 text-red-600 hover:bg-red-50">
                <Trash2 size={17} />
              </button>
            </div>
          </div>

          {/* PREMIUM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
                <Crown size={23} />
              </div>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Active
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-800">
              Premium Care
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Complete personalised care and dedicated support.
            </p>

            <div className="mt-5">
              <span className="text-3xl font-bold text-slate-800">₹3,499</span>
              <span className="text-sm text-slate-500"> / month</span>
            </div>

            <div className="my-5 border-t border-slate-100" />

            <p className="mb-3 text-sm font-semibold text-slate-700">
              Plan Features
            </p>

            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Dedicated caregiver</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Daily health monitoring</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Personalised care schedule</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> 24/7 priority support</li>
              <li className="flex gap-2"><CheckCircle size={17} className="text-green-600" /> Family consultation</li>
            </ul>

            <div className="mt-6 rounded-xl bg-slate-50 p-3">
              <p className="text-xs text-slate-500">Subscribed Members</p>
              <p className="mt-1 text-xl font-bold text-slate-800">50</p>
            </div>

            <div className="mt-5 flex gap-3">
              <button type="button" className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-200 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50">
                <Pencil size={16} /> Edit
              </button>
              <button type="button" className="flex items-center justify-center rounded-lg border border-red-200 px-4 py-2.5 text-red-600 hover:bg-red-50">
                <Trash2 size={17} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <p className="text-center text-xs text-slate-400">
        CareConnect Admin Dashboard · Sample subscription data for frontend demonstration.
      </p>

    </div>
  );
}

export default Subscriptions;
