
import {
  Check,
  ShieldCheck,
  HeartPulse,
  Crown,
  Clock,
  Users
} from "lucide-react";

function CarePlans() {
  return (
    <div className="min-h-screen space-y-8 bg-[#f5f8f6]">

      <div>
        <p className="text-sm font-semibold tracking-wider text-emerald-700">
          SUBSCRIPTION PLANS
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Choose Your Care Plan
        </h1>

        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-500">
          Find the right care and support plan for your everyday needs.
          Enjoy reliable assistance and personalised elderly care.
        </p>
      </div>

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <div className="rounded-xl bg-emerald-700 p-3 text-white">
            <ShieldCheck size={26} />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              Current Subscription
            </p>
            <h2 className="mt-1 text-xl font-bold text-gray-900">
              No Active Plan
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Select a plan to get started with CareConnect.
            </p>
          </div>
        </div>

        <span className="w-fit rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-500">
          Not Subscribed
        </span>
      </div>

      <div>
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Available Plans
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Flexible care packages designed for your comfort.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
              <HeartPulse size={25} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Basic Care
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Essential support for everyday activities.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-extrabold text-gray-900">
                ₹999
              </span>
              <span className="mb-1 text-sm text-gray-500">
                / month
              </span>
            </div>

            <div className="my-6 border-t border-gray-100"></div>

            <p className="mb-4 text-sm font-bold text-gray-800">
              What's included
            </p>

            <div className="space-y-4 text-sm text-gray-600">
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Basic daily assistance
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Weekly health check-in
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Appointment assistance
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Emergency contact support
              </p>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-emerald-700 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50">
              Subscribe Now
            </button>
          </div>

          <div className="relative rounded-2xl border-2 border-emerald-600 bg-white p-6 shadow-lg shadow-emerald-100">

            <div className="absolute right-5 top-5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
              Popular
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <Users size={25} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Standard Care
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              More personal care and regular assistance.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-extrabold text-gray-900">
                ₹1,999
              </span>
              <span className="mb-1 text-sm text-gray-500">
                / month
              </span>
            </div>

            <div className="my-6 border-t border-gray-100"></div>

            <p className="mb-4 text-sm font-bold text-gray-800">
              Everything in Basic, plus
            </p>

            <div className="space-y-4 text-sm text-gray-600">
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Regular caregiver visits
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Medication reminders
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Bi-weekly health monitoring
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Priority appointment support
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Family care updates
              </p>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl bg-emerald-700 py-3 text-sm font-bold text-white transition hover:bg-emerald-800">
              Subscribe Now
            </button>
          </div>

         
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Crown size={25} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              Premium Care
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Complete personalised care and dedicated support.
            </p>

            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-extrabold text-gray-900">
                ₹3,499
              </span>
              <span className="mb-1 text-sm text-gray-500">
                / month
              </span>
            </div>

            <div className="my-6 border-t border-gray-100"></div>

            <p className="mb-4 text-sm font-bold text-gray-800">
              Everything in Standard, plus
            </p>

            <div className="space-y-4 text-sm text-gray-600">
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Dedicated caregiver support
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Daily health monitoring
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Personalised care schedule
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                24/7 priority support
              </p>
              <p className="flex gap-3">
                <Check size={18} className="shrink-0 text-emerald-600" />
                Monthly family consultation
              </p>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-xl border border-emerald-700 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-50">
              Subscribe Now
            </button>
          </div>

        </div>
      </div>

     
      <div className="rounded-2xl border border-gray-100 bg-white p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
            <Clock size={23} />
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Need help choosing a plan?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Choose a care package based on your daily support needs.
              Contact our support team for more information about the
              available subscription options.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-gray-400">
        © 2026 CareConnect. Subscription prices shown are sample frontend demo prices.
      </p>

    </div>
  );
}

export default CarePlans;
