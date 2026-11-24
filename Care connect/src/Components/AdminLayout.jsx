
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  UserRound,
  HeartHandshake,
  CalendarDays,
  CreditCard,
  Bell,
  Search,
  Heart,
  Menu
} from "lucide-react";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-50 md:flex">

      {/* SIDEBAR */}
      <aside className="w-full bg-[#173B70] text-white md:fixed md:inset-y-0 md:left-0 md:flex md:w-64 md:flex-col">

        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-6">
          <div className="rounded-xl bg-white p-2 text-[#173B70]">
            <Heart size={25} />
          </div>
          <div>
            <h1 className="text-xl font-bold">CareConnect</h1>
            <p className="text-xs text-blue-200">Admin Panel</p>
          </div>
        </div>

        <div className="px-4 py-6">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-blue-200">
            Main Menu
          </p>

          <nav className="space-y-2">

            <NavLink to="/admin/dashboard" className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                isActive ? "bg-white font-semibold text-[#173B70]" : "text-blue-100 hover:bg-white/10"
              }`
            }>
              <LayoutDashboard size={19} />
              Dashboard
            </NavLink>

            <NavLink to="/admin/users" className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                isActive ? "bg-white font-semibold text-[#173B70]" : "text-blue-100 hover:bg-white/10"
              }`
            }>
              <Users size={19} />
              Users
            </NavLink>

            <NavLink to="/admin/elderly" className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                isActive ? "bg-white font-semibold text-[#173B70]" : "text-blue-100 hover:bg-white/10"
              }`
            }>
              <UserRound size={19} />
              Elderly Members
            </NavLink>

            <NavLink to="/admin/caregivers" className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                isActive ? "bg-white font-semibold text-[#173B70]" : "text-blue-100 hover:bg-white/10"
              }`
            }>
              <HeartHandshake size={19} />
              Caregivers
            </NavLink>

            <NavLink to="/admin/appointments" className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                isActive ? "bg-white font-semibold text-[#173B70]" : "text-blue-100 hover:bg-white/10"
              }`
            }>
              <CalendarDays size={19} />
              Appointments
            </NavLink>

            <NavLink to="/admin/subscriptions" className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 text-sm ${
                isActive ? "bg-white font-semibold text-[#173B70]" : "text-blue-100 hover:bg-white/10"
              }`
            }>
              <CreditCard size={19} />
              Subscriptions
            </NavLink>

          </nav>
        </div>

        <div className="mt-auto hidden border-t border-white/10 p-5 md:block">
          <p className="text-sm font-medium">CareConnect Admin</p>
          <p className="mt-1 text-xs text-blue-200">Management Dashboard</p>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="min-w-0 flex-1 md:ml-64">

        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4 md:px-8">

          <div className="flex items-center gap-3">
            <Menu className="text-slate-500 md:hidden" size={22} />
            <div>
              <h2 className="font-semibold text-slate-800">
                Admin Dashboard
              </h2>
              <p className="text-xs text-slate-500">
                Welcome back, Admin
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 sm:flex">
              <Search size={17} className="text-slate-400" />
              <span className="text-sm text-slate-400">Search...</span>
            </div>

            <Bell size={20} className="text-slate-500" />

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-[#173B70]">
              A
            </div>
          </div>

        </header>

        <div className="p-5 md:p-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
}
