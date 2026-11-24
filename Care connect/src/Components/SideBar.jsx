
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  LayoutDashboard,
  Users,
  UserRound,
  CalendarDays,
  ClipboardList,
  Bell,
  Settings,
  LogOut,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Clock,
  Siren
} from "lucide-react";

 function SideBar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-[#e7eee9] flex flex-col">


      <div className="h-20 flex items-center gap-3 px-6 border-b border-[#e7eee9]">
        <div className="bg-[#087f5b] p-2.5 rounded-xl">
          <HeartHandshake size={24} className="text-white" />
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#17352b]">
            CareConnect
          </h2>
          <p className="text-[10px] text-gray-400 tracking-widest uppercase">
            Healthcare platform
          </p>
        </div>
      </div>

    
      <div className="mx-4 mt-6 p-3 rounded-2xl bg-[#f2faf5] flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-[#d7f0e1] flex items-center justify-center">
          <UserRound className="text-[#087f5b]" size={23} />
        </div>

        <div>
          <h3 className="text-sm font-bold text-[#17352b]">
            Admin User
          </h3>
          <p className="text-xs text-[#789087]">
            Administrator
          </p>
        </div>
      </div>

    
      <div className="px-4 mt-8 flex-1">

        <p className="text-[10px] font-bold tracking-[2px] text-gray-400 px-3 mb-4">
          MAIN MENU
        </p>

        <nav className="space-y-2">

          <Link to="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#e2f5eb] text-[#087f5b] font-semibold text-sm">
            <LayoutDashboard size={19} />
            Dashboard
          </Link>

          <Link to="/admin/users"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <Users size={19} />
            Manage Users
          </Link>

          <Link to="/admin/caregivers"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <Stethoscope size={19} />
            Caregivers
          </Link>

          <Link to="/admin/elderly"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <HeartPulse size={19} />
            Elderly Members
          </Link>

          <Link to="/admin/appointments"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <CalendarDays size={19} />
            Appointments
          </Link>

          <Link to="/admin/schedules"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <ClipboardList size={19} />
            Care Schedules
          </Link>

          <Link to="/admin/emergencies"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <Siren size={19} />
            Emergency Requests
          </Link>

          <Link to="/admin/notifications"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <Bell size={19} />
            Notifications
          </Link>

        </nav>

        <p className="text-[10px] font-bold tracking-[2px] text-gray-400 px-3 mt-9 mb-4">
          PREFERENCES
        </p>

        <nav className="space-y-2">

          <Link to="/admin/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-[#f2faf5] hover:text-[#087f5b] transition-all duration-300 text-sm">
            <Settings size={19} />
            Settings
          </Link>

        </nav>
      </div>

      {/* Bottom */}
      <div className="p-4 border-t border-[#e7eee9]">
        <div className="bg-[#f2faf5] rounded-xl p-4 mb-4">
          <div className="flex items-center gap-2 text-[#087f5b] mb-2">
            <ShieldCheck size={18} />
            <span className="text-xs font-bold">CareConnect</span>
          </div>
          <p className="text-xs text-gray-500 leading-5">
            Making elderly care safer and easier.
          </p>
        </div>

        <Link to="/login"
          className="flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 rounded-xl transition">
          <LogOut size={19} />
          Logout
        </Link>
      </div>

    </aside>
  );
}
export default SideBar