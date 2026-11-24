
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Heart,
  ShieldCheck,
  Activity,
  User
} from "lucide-react";
 function Profile() {
  return (
    <div className="min-h-screen space-y-8 bg-[#f6faf7] p-6 text-[#17352b]">
      <div>
        <p className="text-sm font-medium text-emerald-700">Account Settings</p>
        <h1 className="mt-1 text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-gray-500">
          Your personal details and care information.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#e7eee9] bg-white shadow-sm">
        <div className="h-32 bg-gradient-to-r from-emerald-700 to-green-500"></div>
        <div className="px-6 pb-7">
          <div className="-mt-14 flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl border-4 border-white bg-emerald-100 text-3xl font-bold text-emerald-800 shadow-md">
              MJ
            </div>
            <div className="pb-2">
              <h2 className="text-2xl font-bold">Mary Joseph</h2>
              <p className="mt-1 text-sm text-gray-500">Elderly Member</p>
            </div>
            <div className="sm:ml-auto sm:pb-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <ShieldCheck size={17} /> Active Account
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="space-y-5 rounded-2xl border border-[#e7eee9] bg-white p-6 shadow-sm lg:col-span-2">
          <div>
            <h2 className="text-xl font-bold">Personal Information</h2>
            <p className="mt-1 text-sm text-gray-500">
              Basic details associated with your account.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <UserRound size={16} /> Full Name
              </p>
              <p className="mt-2 font-semibold">Mary Joseph</p>
            </div>

            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <CalendarDays size={16} /> Date of Birth
              </p>
              <p className="mt-2 font-semibold">15 March 1950</p>
            </div>

            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <Mail size={16} /> Email Address
              </p>
              <p className="mt-2 break-all font-semibold">mary@example.com</p>
            </div>

            <div className="rounded-xl bg-[#f6faf7] p-4">
              <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <Phone size={16} /> Phone Number
              </p>
              <p className="mt-2 font-semibold">+91 98765 12345</p>
            </div>

            <div className="rounded-xl bg-[#f6faf7] p-4 sm:col-span-2">
              <p className="flex items-center gap-2 text-xs font-medium text-gray-500">
                <MapPin size={16} /> Home Address
              </p>
              <p className="mt-2 font-semibold">
                Kowdiar, Thiruvananthapuram, Kerala, India
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5 rounded-2xl border border-[#e7eee9] bg-white p-6 shadow-sm">
          <div>
            <h2 className="text-xl font-bold">Care Information</h2>
            <p className="mt-1 text-sm text-gray-500">
              Your registered care details.
            </p>
          </div>

          <div className="rounded-xl bg-emerald-50 p-4">
            <Heart className="text-emerald-700" size={23} />
            <p className="mt-3 text-sm text-gray-500">Assigned Caregiver</p>
            <p className="mt-1 font-bold">Anita Thomas</p>
          </div>

          <div className="rounded-xl bg-[#f6faf7] p-4">
            <Activity className="text-emerald-700" size={23} />
            <p className="mt-3 text-sm text-gray-500">Care Plan</p>
            <p className="mt-1 font-bold">Daily Assistance</p>
          </div>

          <div className="rounded-xl bg-[#f6faf7] p-4">
            <ShieldCheck className="text-emerald-700" size={23} />
            <p className="mt-3 text-sm text-gray-500">Account Role</p>
            <p className="mt-1 font-bold">Elderly Member</p>
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-[#e7eee9] bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
            <User size={22} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Emergency Information</h2>
            <p className="text-sm text-gray-500">
              Important contact details for your care team.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-[#f6faf7] p-4">
            <p className="text-sm text-gray-500">Emergency Contact</p>
            <p className="mt-1 font-semibold">Rahul Joseph</p>
            <p className="mt-1 text-sm text-gray-500">+91 98765 43210</p>
          </div>
          <div className="rounded-xl bg-[#f6faf7] p-4">
            <p className="text-sm text-gray-500">Preferred Hospital</p>
            <p className="mt-1 font-semibold">City Medical Centre</p>
            <p className="mt-1 text-sm text-gray-500">Thiruvananthapuram</p>
          </div>
        </div>
      </section>

      <p className="text-center text-xs text-gray-400">
        CareConnect · Profile information shown for frontend demonstration
      </p>
    </div>
  );
}


export default Profile