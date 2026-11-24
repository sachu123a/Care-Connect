
import {
  Search,
  Bell,
  Menu,
  UserRound,
  ChevronDown
} from "lucide-react";

 function Header({
  title = "Dashboard",
  subtitle = "Welcome back!",
  userName = "User",
  role = "Member",
  onMenuClick
}) {
  return (
    <header className="h-20 bg-white border-b border-[#e7eee9] px-5 md:px-8 flex items-center justify-between sticky top-0 z-30">


      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-lg hover:bg-green-50 text-[#087f5b]"
          aria-label="Open sidebar"
        >
          <Menu size={23} />
        </button>

        <div>
          <h1 className="text-xl font-bold text-[#17352b]">
            {title}
          </h1>
          <p className="text-xs text-[#789087] mt-1 hidden sm:block">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-5">

       
        <div className="hidden md:flex items-center gap-2 bg-[#f6faf7] border border-[#e7eee9] px-3 py-2.5 rounded-xl w-56 focus-within:border-[#087f5b] transition">
          <Search size={17} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder:text-gray-400"
          />
        </div>

     
        <button
          className="relative p-2.5 rounded-xl hover:bg-green-50 transition text-gray-500"
          aria-label="Notifications"
        >
          <Bell size={21} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

     
        <div className="flex items-center gap-2.5 border-l border-gray-100 pl-4">
          <div className="w-10 h-10 rounded-xl bg-[#e2f5eb] flex items-center justify-center text-[#087f5b]">
            <UserRound size={21} />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#17352b]">
              {userName}
            </p>
            <p className="text-xs text-[#789087]">
              {role}
            </p>
          </div>

          <ChevronDown size={16} className="hidden sm:block text-gray-400" />
        </div>
      </div>
    </header>
  );
}
export default Header