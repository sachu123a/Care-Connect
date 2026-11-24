
import { Link } from "react-router-dom";

import {
  HeartHandshake,
  UserRound,
  Mail,
  Phone,
  LockKeyhole,
  ArrowRight,
  ShieldCheck,
  HeartPulse
} from "lucide-react";

 function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f8f5] p-4 md:p-8">

      <div className="grid w-full max-w-6xl overflow-hidden rounded-[30px] border border-[#e7eee9] bg-white shadow-2xl lg:grid-cols-2">

        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#103b2d] via-[#12523d] to-[#087f5b] p-12 text-white lg:flex">

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/20"></div>

          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full border-[55px] border-white/10"></div>

          <div className="absolute right-16 top-1/2 h-24 w-24 rounded-full border border-white/10"></div>


          <Link to="/" className="relative flex items-center gap-3">

            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur-sm">
              <HeartHandshake size={29} />
            </div>

            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">
                CareConnect
              </h1>

              <p className="text-[10px] tracking-[3px] text-green-100/60">
                COMPASSIONATE CARE
              </p>
            </div>

          </Link>


          <div className="relative">

            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-green-200">
              Join Our Community
            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight xl:text-5xl">
              Be Part of a
              <br />
              Caring Community.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-green-100/70">
              Join CareConnect and experience a more organized,
              connected and compassionate approach to elderly care.
            </p>


            <div className="mt-12 flex items-center gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <HeartPulse size={25} />
              </div>

              <div>
                <h3 className="font-bold">
                  Better Care Experience
                </h3>

                <p className="mt-1 text-sm text-green-100/60">
                  Care management made simple.
                </p>
              </div>

            </div>

            <div className="mt-7 flex items-center gap-4">

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <ShieldCheck size={25} />
              </div>

              <div>
                <h3 className="font-bold">
                  Connected Support
                </h3>

                <p className="mt-1 text-sm text-green-100/60">
                  Bringing care communities together.
                </p>
              </div>

            </div>

          </div>


          <p className="relative text-xs text-green-100/50">
            © 2026 CareConnect. All rights reserved.
          </p>

        </div>


        <div className="p-7 sm:p-10 lg:p-12">

          {/* MOBILE LOGO */}
          <Link to="/" className="mb-9 flex items-center gap-3 lg:hidden">

            <div className="rounded-xl bg-[#087f5b] p-2.5 text-white">
              <HeartHandshake size={25} />
            </div>

            <span className="text-xl font-extrabold text-[#17352b]">
              Care<span className="text-[#087f5b]">Connect</span>
            </span>

          </Link>


          {/* HEADING */}
          <div>

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#087f5b]">
              Create Account
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#17352b]">
              Join CareConnect
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Fill in your details to create your account.
            </p>

          </div>


          <div className="mt-8">

            <label className="text-sm font-bold text-[#17352b]">
              Select Your Role
            </label>

            <div className="mt-4 grid grid-cols-3 gap-3">


              <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-[#087f5b] bg-[#eaf7ef] p-4 text-[#087f5b] shadow-sm">

                <HeartPulse size={25} />

                <span className="text-xs font-bold">
                  Elderly
                </span>

              </div>


              <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#e7eee9] bg-white p-4 text-gray-500 transition hover:border-emerald-300 hover:bg-emerald-50">

                <UserRound size={25} />

                <span className="text-xs font-bold">
                  Caregiver
                </span>

              </div>


              <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#e7eee9] bg-white p-4 text-gray-500 transition hover:border-emerald-300 hover:bg-emerald-50">

                <ShieldCheck size={25} />

                <span className="text-xs font-bold">
                  Admin
                </span>

              </div>

            </div>

          </div>


          <div className="mt-7">

            <label className="text-sm font-semibold text-[#17352b]">
              Full Name
            </label>

            <div className="mt-2 flex items-center gap-3 rounded-xl border border-[#e7eee9] bg-[#fafcfb] px-4 py-3.5 transition focus-within:border-[#087f5b]">

              <UserRound size={19} className="text-[#087f5b]" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

            </div>

          </div>


          <div className="mt-5 grid gap-5 sm:grid-cols-2">

            <div>

              <label className="text-sm font-semibold text-[#17352b]">
                Email Address
              </label>

              <div className="mt-2 flex items-center gap-2 rounded-xl border border-[#e7eee9] bg-[#fafcfb] px-3 py-3.5 focus-within:border-[#087f5b]">

                <Mail size={18} className="shrink-0 text-[#087f5b]" />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-gray-400"
                />

              </div>

            </div>

            <div>

              <label className="text-sm font-semibold text-[#17352b]">
                Phone Number
              </label>

              <div className="mt-2 flex items-center gap-2 rounded-xl border border-[#e7eee9] bg-[#fafcfb] px-3 py-3.5 focus-within:border-[#087f5b]">

                <Phone size={18} className="shrink-0 text-[#087f5b]" />

                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full min-w-0 bg-transparent text-xs outline-none placeholder:text-gray-400"
                />

              </div>

            </div>

          </div>


          <div className="mt-5">

            <label className="text-sm font-semibold text-[#17352b]">
              Password
            </label>

            <div className="mt-2 flex items-center gap-3 rounded-xl border border-[#e7eee9] bg-[#fafcfb] px-4 py-3.5 focus-within:border-[#087f5b]">

              <LockKeyhole size={19} className="text-[#087f5b]" />

              <input
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

            </div>

          </div>


          <div className="mt-5">

            <label className="text-sm font-semibold text-[#17352b]">
              Confirm Password
            </label>

            <div className="mt-2 flex items-center gap-3 rounded-xl border border-[#e7eee9] bg-[#fafcfb] px-4 py-3.5 focus-within:border-[#087f5b]">

              <LockKeyhole size={19} className="text-[#087f5b]" />

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />

            </div>

          </div>


          <div className="mt-6 flex items-start gap-3">

            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-[#087f5b]"
            />

            <p className="text-xs leading-6 text-gray-500">
              I agree to the Terms and Conditions and Privacy Policy.
            </p>

          </div>


          <button
            type="button"
            className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#087f5b] py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:-translate-y-0.5 hover:bg-[#056044] hover:shadow-xl"
          >
            Create Account
            <ArrowRight size={19} />
          </button>


          <p className="mt-7 text-center text-sm text-gray-500">

            Already have an account?

            <Link to="/login" className="ml-1 font-bold text-[#087f5b] hover:underline">
              Sign In
            </Link>

          </p>


          <div className="mt-7 border-t border-gray-100 pt-5 text-center">

            <p className="text-xs text-gray-400">
              Frontend demonstration only · No account creation
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}
export default Register