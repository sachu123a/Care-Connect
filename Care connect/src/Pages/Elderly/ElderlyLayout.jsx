
import { Link, NavLink, Outlet } from "react-router-dom";

import {
  HeartPulse,
  LayoutDashboard,
  CalendarDays,
  ClipboardList,
  FileText,
  Users,
  Bell,
  ShieldAlert,
  UserRound,
  LogOut,
  Search,
  WalletCards
} from "lucide-react";

function ElderlyLayout() {
  return (
    <div className="min-h-screen bg-[#f5f8f6] md:flex">

      {/* SIDEBAR */}
      <aside className="w-full border-r border-gray-100 bg-white md:fixed md:inset-y-0 md:left-0 md:flex md:w-[270px] md:flex-col">

        {/* LOGO */}
        <div className="flex items-center gap-3 border-b border-gray-100 px-6 py-6">
          <div className="rounded-2xl bg-emerald-700 p-3 text-white shadow-lg shadow-emerald-100">
            <HeartPulse size={26} />
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-gray-900">
              Care<span className="text-emerald-700">Connect</span>
            </h2>
            <p className="text-[11px] font-medium tracking-widest text-gray-400">
              ELDERLY CARE PORTAL
            </p>
          </div>
        </div>

        {/* PROFILE */}
        <div className="mx-5 mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 text-white">
              <UserRound size={24} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900">
                Mary Joseph
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Elderly Member
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-emerald-100 pt-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <p className="text-xs font-medium text-emerald-800">
              Active Member
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="px-5 pt-7">
          <p className="mb-3 px-3 text-[10px] font-bold tracking-[2px] text-gray-400">
            MAIN MENU
          </p>

          <nav className="grid grid-cols-2 gap-2 md:flex md:flex-col">

            <NavLink to="/elderly/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <LayoutDashboard size={19} />
              Dashboard
            </NavLink>

            <NavLink to="/elderly/appointments"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <CalendarDays size={19} />
              Appointments
            </NavLink>

            <NavLink to="/elderly/care-plans"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <WalletCards size={19} />
              Care Plans
            </NavLink>

            <NavLink to="/elderly/schedule"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <ClipboardList size={19} />
              Care Schedule
            </NavLink>

            <NavLink to="/elderly/health-records"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <FileText size={19} />
              Health Records
            </NavLink>

            <NavLink to="/elderly/caregivers"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <Users size={19} />
              My Caregivers
            </NavLink>

            <NavLink to="/elderly/notifications"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <Bell size={19} />
              Notifications
            </NavLink>

            <NavLink to="/elderly/emergency"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-red-600 text-white shadow-md shadow-red-100"
                    : "text-red-600 hover:bg-red-50"
                }`
              }>
              <ShieldAlert size={19} />
              Emergency SOS
            </NavLink>

            <NavLink to="/elderly/profile"
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-100"
                    : "text-gray-500 hover:bg-emerald-50 hover:text-emerald-700"
                }`
              }>
              <UserRound size={19} />
              My Profile
            </NavLink>

          </nav>
        </div>

        {/* BOTTOM */}
        <div className="mt-auto hidden border-t border-gray-100 p-5 md:block">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-gray-500 transition hover:bg-red-50 hover:text-red-600">
            <LogOut size={19} />
            Logout
          </button>

          <p className="mt-4 text-center text-[10px] text-gray-400">
            © 2026 CareConnect. All rights reserved.
          </p>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="min-w-0 flex-1 md:ml-[270px]">

        {/* TOP HEADER */}
        <header className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 bg-white/90 px-6 py-5 backdrop-blur-xl md:px-9">

          <div>
            <p className="text-xs font-semibold text-emerald-700">
              ELDERLY PORTAL
            </p>
            <h1 className="mt-1 text-xl font-bold text-gray-900">
              Welcome back, Mary!
            </h1>
          </div>

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 sm:flex">
              <Search size={17} className="text-gray-400" />
              <span className="text-sm text-gray-400">
                Search...
              </span>
            </div>

            <Link to="/elderly/notifications"
              className="rounded-xl border border-gray-200 p-3 text-gray-500 transition hover:bg-emerald-50 hover:text-emerald-700">
              <Bell size={19} />
            </Link>

            <Link to="/elderly/profile"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <UserRound size={21} />
            </Link>

          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-5 md:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
}

export default ElderlyLayout;
