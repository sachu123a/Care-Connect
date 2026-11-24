
import {
  CalendarDays,
  Pill,
  HeartPulse,
  UserRound,
  Clock,
  Activity,
  Bell,
  ShieldAlert,
  CheckCircle2,
  Crown,
  ArrowRight,
  Heart,
  Phone
} from "lucide-react";
import { Link } from "react-router-dom";

 function Dashboard() {
  return (
    <div className="min-h-screen space-y-7 bg-[#f6faf7] p-2 md:p-4">

      {/* Welcome Section */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-wider text-emerald-700">
            ELDERLY DASHBOARD
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-800">
            Good Morning, Mary!
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Here's an overview of your health and daily care.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
            M
          </div>
          <div>
            <p className="font-semibold text-slate-800">Mary Joseph</p>
            <p className="text-xs text-slate-500">Elderly Member</p>
          </div>
          <CheckCircle2 size={19} className="text-emerald-600" />
        </div>
      </div>

      {/* Subscription Plan Banner */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-600 p-6 text-white shadow-sm md:p-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">
              <Crown size={15} />
              YOUR MEMBERSHIP
            </div>

            <h2 className="mt-4 text-2xl font-bold md:text-3xl">
              Premium Care Plan
            </h2>

            <p className="mt-2 text-sm text-emerald-100">
              Enjoy personalized care and dedicated support.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-400/20 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                Active Subscription
              </span>
              <span className="text-sm text-emerald-100">
                ₹999 / month
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/elderly/plans"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-emerald-800 transition hover:bg-emerald-50"
            >
              View Plans
              <ArrowRight size={17} />
            </Link>

            <div className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm">
              <CheckCircle2 size={18} />
              Member Since Nov 2026
            </div>
          </div>

        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <CalendarDays size={22} />
            </div>
            <span className="text-xs font-medium text-emerald-600">
              This month
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold text-slate-800">12</h2>
          <p className="mt-1 text-sm text-slate-500">Care Visits</p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Pill size={22} />
            </div>
            <span className="text-xs font-medium text-blue-600">
              Daily
            </span>
          </div>
          <h2 className="mt-5 text-3xl font-bold text-slate-800">03</h2>
          <p className="mt-1 text-sm text-slate-500">Medications</p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <HeartPulse size={22} />
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              Good
            </span>
          </div>
          <h2 className="mt-5 text-2xl font-bold text-emerald-600">Stable</h2>
          <p className="mt-1 text-sm text-slate-500">Health Status</p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
              <UserRound size={22} />
            </div>
            <span className="text-xs font-medium text-emerald-600">
              Assigned
            </span>
          </div>
          <h2 className="mt-5 text-xl font-bold text-slate-800">Anita</h2>
          <p className="mt-1 text-sm text-slate-500">Your Caregiver</p>
        </div>

      </div>

      {/* Schedule and Updates */}
      <div className="grid gap-6 xl:grid-cols-3">

        {/* Today's Schedule */}
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Today's Care Schedule
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Your planned activities
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
              <CalendarDays size={21} />
            </div>
          </div>

          <div className="mt-6 space-y-4">

            <div className="flex flex-wrap items-center gap-4 rounded-xl bg-emerald-50 p-4">
              <div className="rounded-xl bg-white p-3 text-emerald-600">
                <Pill size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-800">
                  Morning Medication
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  After breakfast
                </p>
              </div>
              <span className="text-sm font-semibold text-slate-700">
                08:00 AM
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 rounded-xl bg-blue-50 p-4">
              <div className="rounded-xl bg-white p-3 text-blue-600">
                <HeartPulse size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-800">
                  Health Checkup
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Routine monitoring with Anita
                </p>
              </div>
              <span className="text-sm font-semibold text-slate-700">
                10:00 AM
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 rounded-xl bg-purple-50 p-4">
              <div className="rounded-xl bg-white p-3 text-purple-600">
                <Activity size={22} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-800">
                  Evening Walk
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Light physical activity
                </p>
              </div>
              <span className="text-sm font-semibold text-slate-700">
                05:00 PM
              </span>
            </div>

          </div>

          <Link
            to="/elderly/schedule"
            className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-emerald-100 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            View Full Schedule
            <ArrowRight size={16} />
          </Link>

        </section>

        {/* Recent Updates */}
        <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Recent Updates
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Latest notifications
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
              <Bell size={21} />
            </div>
          </div>

          <div className="mt-6 space-y-6">

            <div className="flex gap-3">
              <div className="h-fit rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <UserRound size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Caregiver Visit
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Anita will visit today at 10 AM.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  30 minutes ago
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-fit rounded-xl bg-blue-50 p-3 text-blue-600">
                <Pill size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Medication Reminder
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Your next medicine is scheduled for 2 PM.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  1 hour ago
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="h-fit rounded-xl bg-orange-50 p-3 text-orange-600">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Daily Reminder
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Remember your evening walk.
                </p>
                <p className="mt-2 text-xs text-slate-400">
                  Today
                </p>
              </div>
            </div>

          </div>

          <Link
            to="/elderly/notifications"
            className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View All Notifications
            <ArrowRight size={16} />
          </Link>

        </section>

      </div>

      {/* Quick Access */}
      <div>
        <h2 className="mb-4 text-lg font-bold text-slate-800">
          Quick Access
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Link
            to="/elderly/plans"
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="rounded-xl bg-emerald-100 p-3 text-emerald-700">
              <Crown size={23} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800">
                My Care Plans
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                View and explore plans
              </p>
            </div>
            <ArrowRight size={18} className="text-slate-400" />
          </Link>

          <Link
            to="/elderly/caregivers"
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Heart size={23} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800">
                My Caregiver
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                View caregiver details
              </p>
            </div>
            <ArrowRight size={18} className="text-slate-400" />
          </Link>

          <Link
            to="/elderly/emergency"
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="rounded-xl bg-red-100 p-3 text-red-600">
              <Phone size={23} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-800">
                Emergency Help
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Get emergency assistance
              </p>
            </div>
            <ArrowRight size={18} className="text-slate-400" />
          </Link>

        </div>
      </div>

      {/* Emergency Assistance */}
      <div className="flex gap-4 rounded-2xl border border-red-100 bg-red-50 p-5">
        <ShieldAlert className="shrink-0 text-red-600" size={26} />

        <div>
          <h3 className="font-bold text-red-700">
            Emergency Assistance
          </h3>
          <p className="mt-1 text-sm leading-6 text-red-600">
            Your emergency contact information is available in the Emergency section.
            Please use it if you need immediate assistance.
          </p>
          <Link
            to="/elderly/emergency"
            className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-red-700 hover:underline"
          >
            Open Emergency Section
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

    </div>
  );
}
export default Dashboard