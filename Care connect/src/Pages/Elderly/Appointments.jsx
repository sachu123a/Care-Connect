
import {
  CalendarDays,
  Clock,
  MapPin,
  Stethoscope,
  CheckCircle2,
  UserRound,
  Phone,
  Video,
  MessageSquare,
  ClipboardList
} from "lucide-react";

function Appointments() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <p className="text-sm font-semibold tracking-wider text-emerald-700">
          ELDERLY PORTAL
        </p>
        <h1 className="mt-2 text-3xl font-bold text-gray-800">
          Appointments
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Book caregiver consultations and manage your appointments.
        </p>
      </div>

      {/* Next Appointment */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-700 to-green-500 p-6 text-white shadow-sm">
        <p className="text-sm text-emerald-100">NEXT APPOINTMENT</p>
        <h2 className="mt-2 text-2xl font-bold">General Check-up</h2>
        <p className="mt-1 text-emerald-100">
          Dr. Anil Kumar · City Medical Centre
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-emerald-100">Date</p>
            <p className="mt-1 font-semibold">28 November 2026</p>
          </div>
          <div>
            <p className="text-xs text-emerald-100">Time</p>
            <p className="mt-1 font-semibold">10:30 AM</p>
          </div>
          <div>
            <p className="text-xs text-emerald-100">Status</p>
            <p className="mt-1 font-semibold">Confirmed</p>
          </div>
        </div>
      </div>

      {/* Book Consultation Form */}
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-emerald-50 p-3 text-emerald-700">
            <CalendarDays size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Book a Caregiver Consultation
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Schedule a consultation with your assigned caregiver.
            </p>
          </div>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">

          {/* Caregiver */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Select Caregiver
            </label>
            <select
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
              defaultValue=""
            >
              <option value="" disabled>Select a caregiver</option>
              <option>Anita Thomas - Senior Caregiver</option>
              <option>Ravi Kumar - Assistant Caregiver</option>
            </select>
          </div>

          {/* Consultation Type */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Consultation Type
            </label>
            <select
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
              defaultValue=""
            >
              <option value="" disabled>Select consultation type</option>
              <option>Personal Care Assistance</option>
              <option>Medication Guidance</option>
              <option>Health Monitoring</option>
              <option>Daily Activity Support</option>
              <option>General Consultation</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Preferred Time
            </label>
            <select
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
              defaultValue=""
            >
              <option value="" disabled>Select preferred time</option>
              <option>09:00 AM</option>
              <option>10:00 AM</option>
              <option>11:00 AM</option>
              <option>02:00 PM</option>
              <option>03:00 PM</option>
              <option>04:00 PM</option>
            </select>
          </div>

          {/* Meeting Mode */}
          <div className="md:col-span-2">
            <label className="mb-3 block text-sm font-semibold text-gray-700">
              Consultation Mode
            </label>

            <div className="grid gap-3 sm:grid-cols-2">

              <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <UserRound className="text-emerald-700" size={22} />
                <div>
                  <p className="font-semibold text-gray-800">In Person</p>
                  <p className="text-xs text-gray-500">
                    Face-to-face consultation
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
                <Video className="text-blue-600" size={22} />
                <div>
                  <p className="font-semibold text-gray-800">Online</p>
                  <p className="text-xs text-gray-500">
                    Video consultation
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Reason */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Reason for Consultation
            </label>
            <textarea
              rows="4"
              placeholder="Describe why you need a consultation..."
              className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:border-emerald-500"
            ></textarea>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Contact Number
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4">
              <Phone size={18} className="text-gray-400" />
              <input
                type="tel"
                placeholder="+91 Enter your phone number"
                className="w-full bg-transparent py-3 text-sm outline-none"
              />
            </div>
          </div>

        </div>

        {/* Form Actions */}
        <div className="mt-7 flex flex-col-reverse justify-end gap-3 border-t border-gray-100 pt-6 sm:flex-row">
          <button
            type="button"
            className="rounded-xl border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            <CalendarDays size={18} />
            Request Consultation
          </button>
        </div>

        <p className="mt-4 text-center text-xs text-gray-400">
          This is a frontend demonstration. Consultation requests are not submitted or saved.
        </p>

      </section>

      {/* Upcoming Appointments */}
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">
          Upcoming Appointments
        </h2>

        <div className="mt-5 space-y-4">

          <div className="flex flex-col justify-between gap-4 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center">
            <div className="flex gap-4">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Stethoscope />
              </div>
              <div>
                <h3 className="font-semibold">General Check-up</h3>
                <p className="text-sm text-gray-500">Dr. Anil Kumar</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                  <MapPin size={14} /> City Medical Centre
                </p>
              </div>
            </div>

            <div className="sm:text-right">
              <p className="font-semibold">28 Nov 2026</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-gray-500 sm:justify-end">
                <Clock size={14} /> 10:30 AM
              </p>
              <span className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Upcoming
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-xl border border-gray-100 p-4 sm:flex-row sm:items-center">
            <div className="flex gap-4">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Stethoscope />
              </div>
              <div>
                <h3 className="font-semibold">Eye Examination</h3>
                <p className="text-sm text-gray-500">Dr. Meera Nair</p>
                <p className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                  <MapPin size={14} /> Vision Care Clinic
                </p>
              </div>
            </div>

            <div className="sm:text-right">
              <p className="font-semibold">05 Dec 2026</p>
              <p className="mt-1 flex items-center gap-2 text-sm text-gray-500 sm:justify-end">
                <Clock size={14} /> 11:00 AM
              </p>
              <span className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Upcoming
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Previous Appointments */}
      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">
          Previous Appointments
        </h2>

        <div className="mt-5 divide-y divide-gray-100">

          <div className="flex items-center justify-between gap-3 py-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gray-100 p-3 text-gray-500">
                <CalendarDays />
              </div>
              <div>
                <p className="font-semibold">Routine Health Check</p>
                <p className="text-sm text-gray-500">
                  Dr. Anil Kumar · 10 Nov 2026
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 size={15} /> Completed
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 py-4">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gray-100 p-3 text-gray-500">
                <CalendarDays />
              </div>
              <div>
                <p className="font-semibold">Blood Pressure Review</p>
                <p className="text-sm text-gray-500">
                  Dr. Meera Nair · 02 Nov 2026
                </p>
              </div>
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <CheckCircle2 size={15} /> Completed
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Appointments;
