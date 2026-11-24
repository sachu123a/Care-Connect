
import {
  ShieldAlert,
  Phone,
  MapPin,
  UserRound,
  HeartPulse,
  Ambulance,
  AlertTriangle,
  Clock,
  Users,
  Hospital,
  Info
} from "lucide-react";

 function Emergency() {
  return (
    <div className="min-h-screen space-y-7 bg-[#f6faf7] p-5 md:p-8">

      {/* Header */}
      <div>
        <p className="text-sm font-semibold tracking-wider text-red-600">
          EMERGENCY ASSISTANCE
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-800">
          Emergency SOS
        </h1>
        <p className="mt-2 text-gray-500">
          Quick access to emergency support and important contacts.
        </p>
      </div>

      {/* SOS Section */}
      <div className="rounded-3xl bg-gradient-to-br from-red-600 to-rose-700 p-6 text-white shadow-lg md:p-10">

        <div className="flex flex-col items-center text-center">

          <div className="rounded-full bg-white/15 p-4">
            <ShieldAlert size={42} />
          </div>

          <h2 className="mt-4 text-2xl font-bold">
            Need Emergency Help?
          </h2>

          <p className="mt-2 max-w-md text-sm text-red-100">
            If you need immediate assistance, contact emergency services
            using the number below.
          </p>

          <div className="my-7 flex h-32 w-32 flex-col items-center justify-center rounded-full border-8 border-white/30 bg-white text-red-600 shadow-xl">
            <ShieldAlert size={35} />
            <span className="text-2xl font-extrabold">SOS</span>
          </div>

          <a
            
            className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-red-600 transition hover:bg-red-50"
          >
            <Phone size={22} />
            Call Emergency 112
          </a>

          <p className="mt-4 text-xs text-red-100">
            Calling 112 will depend on your device and network.
          </p>

        </div>
      </div>

      {/* Emergency Contacts */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Emergency Contacts
        </h2>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {/* Caregiver */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <UserRound size={25} />
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Caregiver
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Anita Thomas
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Assigned Senior Caregiver
            </p>

            <div className="mt-4 flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+91 98765 43210</span>
            </div>

            <a
              
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              <Phone size={17} />
              Call Caregiver
            </a>

          </div>

          {/* Family */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Users size={25} />
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Family
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Rahul Joseph
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Family Member
            </p>

            <div className="mt-4 flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+91 98765 12345</span>
            </div>

            <a
             
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
            >
              <Phone size={17} />
              Call Family
            </a>

          </div>

          {/* Doctor */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-purple-50 p-3 text-purple-600">
                <Hospital size={25} />
              </div>
              <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                Doctor
              </span>
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Dr. Thomas
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Family Doctor
            </p>

            <div className="mt-4 flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              <span className="text-sm">+91 98765 67890</span>
            </div>

            <a
              
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 py-3 font-semibold text-white hover:bg-purple-700"
            >
              <Phone size={17} />
              Call Doctor
            </a>

          </div>

        </div>
      </div>

      {/* Medical Information */}
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-rose-50 p-3 text-rose-600">
            <HeartPulse size={25} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Medical Information
            </h2>
            <p className="text-sm text-gray-500">
              Important information for emergency assistance
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2">

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Medical Details</p>
            <p className="mt-2 font-semibold text-gray-800">
              To be verified
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Emergency Location</p>
            <div className="mt-2 flex items-center gap-2 font-semibold text-gray-800">
              <MapPin size={17} className="text-red-500" />
              Trivandrum, Kerala, India
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Emergency Number</p>
            <p className="mt-2 font-semibold text-gray-800">
              112
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">Last Updated</p>
            <div className="mt-2 flex items-center gap-2 font-semibold text-gray-800">
              <Clock size={17} className="text-emerald-600" />
              23 November 2026
            </div>
          </div>

        </div>
      </div>

      {/* Safety Notice */}
      <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">

        <AlertTriangle className="shrink-0 text-amber-600" size={25} />

        <div>
          <h3 className="font-bold text-amber-800">
            Important Safety Notice
          </h3>

          <p className="mt-1 text-sm leading-6 text-amber-700">
            In a life-threatening emergency, call 112 immediately.
            The contact details and medical information displayed here
            are sample frontend data and should be verified before use.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-2 pb-3 text-sm text-gray-400">
        <Info size={16} />
        <span>CareConnect Emergency Assistance</span>
      </div>

    </div>
  );
}

export default Emergency