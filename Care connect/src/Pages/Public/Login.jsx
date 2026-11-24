
import { Link } from "react-router-dom";
import {
  HeartHandshake,
  Mail,
  LockKeyhole,
  Eye,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Users
} from "lucide-react";

 function Login() {
  return (
    <div className="min-h-screen bg-[#f6faf7] flex items-center justify-center p-4 md:p-8">

      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[30px] overflow-hidden shadow-xl border border-[#e7eee9]">

        <div className="hidden lg:flex flex-col justify-between bg-[#087f5b] p-12 text-white relative overflow-hidden">

          <div className="absolute w-80 h-80 rounded-full border-[50px] border-white/10 -top-32 -right-32"></div>
          <div className="absolute w-72 h-72 rounded-full border-[45px] border-white/10 -bottom-32 -left-32"></div>

          <Link to="/" className="relative flex items-center gap-3">
            <div className="bg-white/15 p-3 rounded-xl">
              <HeartHandshake size={28} />
            </div>
            <h1 className="text-2xl font-bold">CareConnect</h1>
          </Link>

          <div className="relative">
            <span className="text-xs font-bold tracking-[3px] text-green-100 uppercase">
              Welcome Back
            </span>

            <h2 className="text-4xl xl:text-5xl font-bold leading-tight mt-5">
              Caring Hands.
              <br />
              Connected Hearts.
            </h2>

            <p className="text-green-100/80 leading-8 mt-6 max-w-md">
              Your trusted elderly care platform is always here
              to help you stay connected with the care that matters.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">
                <div className="bg-white/15 p-2 rounded-lg">
                  <ShieldCheck size={19} />
                </div>
                <span className="text-sm text-green-50">
                  Trusted care coordination
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/15 p-2 rounded-lg">
                  <HeartPulse size={19} />
                </div>
                <span className="text-sm text-green-50">
                  Personalized elderly care
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-white/15 p-2 rounded-lg">
                  <Users size={19} />
                </div>
                <span className="text-sm text-green-50">
                  Connected care community
                </span>
              </div>

            </div>
          </div>

          <p className="relative text-xs text-green-100/60">
            © 2026 CareConnect. All rights reserved.
          </p>
        </div>

        <div className="p-7 sm:p-12 lg:p-14 flex flex-col justify-center page-enter">

          <Link to="/" className="lg:hidden flex items-center gap-2 mb-10">
            <div className="bg-[#087f5b] p-2 rounded-xl text-white">
              <HeartHandshake size={23} />
            </div>
            <span className="font-bold text-xl text-[#17352b]">
              Care<span className="text-[#087f5b]">Connect</span>
            </span>
          </Link>

          <span className="text-xs text-[#087f5b] font-bold tracking-widest uppercase">
            Welcome Back
          </span>

          <h2 className="text-3xl font-bold text-[#17352b] mt-3">
            Sign in to your account
          </h2>

          <p className="text-sm text-gray-500 mt-3">
            Enter your details to access your CareConnect dashboard.
          </p>

          <div className="mt-8">
            <label className="text-sm font-semibold text-[#17352b]">
              Login As
            </label>

            <div className="grid grid-cols-3 gap-3 mt-3">

              <div className="border border-[#087f5b] bg-[#e2f5eb] text-[#087f5b] rounded-xl p-3 text-center text-xs sm:text-sm font-semibold">
                Elderly
              </div>

              <div className="border border-[#e7eee9] text-gray-500 rounded-xl p-3 text-center text-xs sm:text-sm font-semibold">
                Caregiver
              </div>

              <div className="border border-[#e7eee9] text-gray-500 rounded-xl p-3 text-center text-xs sm:text-sm font-semibold">
                Admin
              </div>

            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-semibold text-[#17352b]">
              Email Address
            </label>

            <div className="flex items-center gap-3 mt-2 border border-[#e7eee9] bg-[#fafcfb] rounded-xl px-4 py-3.5">
              <Mail size={19} className="text-[#087f5b]" />
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm font-semibold text-[#17352b]">
              Password
            </label>

            <div className="flex items-center gap-3 mt-2 border border-[#e7eee9] bg-[#fafcfb] rounded-xl px-4 py-3.5">
              <LockKeyhole size={19} className="text-[#087f5b]" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent outline-none text-sm"
              />
              <Eye size={18} className="text-gray-400" />
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="accent-[#087f5b]" />
              Remember me
            </label>

            <span className="text-[#087f5b] font-semibold cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#087f5b] hover:bg-[#056044] text-white py-4 rounded-xl font-semibold mt-8 btn-hover"
          >
            Sign In <ArrowRight size={18} />
          </button>

          <p className="text-sm text-center text-gray-500 mt-7">
            Don't have an account?
            <Link to="/register" className="text-[#087f5b] font-bold ml-1">
              Create Account
            </Link>
          </p>

          <p className="text-xs text-gray-400 text-center mt-8">
            Frontend demonstration only · No real authentication
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login