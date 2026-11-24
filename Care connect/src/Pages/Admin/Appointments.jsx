
import {
  CalendarDays,
  CheckCircle,
  Clock,
  XCircle,
  Search
} from "lucide-react";

 function Appointments() {
  return (
    <div className="space-y-7">

      
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Appointments Management
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Monitor and manage member appointments.
        </p>
      </div>

      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600">
            <CalendarDays size={22} />
          </div>
          <p className="text-sm text-slate-500">Total Appointments</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">324</h2>
        </div>

       
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3 text-green-600">
            <CheckCircle size={22} />
          </div>
          <p className="text-sm text-slate-500">Confirmed</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">248</h2>
        </div>

       
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3 text-orange-600">
            <Clock size={22} />
          </div>
          <p className="text-sm text-slate-500">Pending</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">52</h2>
        </div>

        
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-red-100 p-3 text-red-600">
            <XCircle size={22} />
          </div>
          <p className="text-sm text-slate-500">Cancelled</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">24</h2>
        </div>

      </div>

      
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

     
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5">

          <div>
            <h2 className="font-bold text-slate-800">
              All Appointments
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Appointment schedule and status
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-36 text-sm outline-none sm:w-48"
              placeholder="Search appointments..."
            />
          </div>

        </div>

      
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">

            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4">Elderly Member</th>
                <th className="px-6 py-4">Caregiver</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

            
              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-800">
                  Mary Joseph
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Anita Thomas
                </td>
                <td className="px-6 py-4 text-slate-600">
                  24 Nov 2026
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Trivandrum
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Confirmed
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-blue-600">
                  View
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-800">
                  John Mathew
                </td>
                <td className="px-6 py-4 text-slate-600">
                  David George
                </td>
                <td className="px-6 py-4 text-slate-600">
                  24 Nov 2026
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Kollam
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-blue-600">
                  View
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-800">
                  Elizabeth Thomas
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Sarah Wilson
                </td>
                <td className="px-6 py-4 text-slate-600">
                  25 Nov 2026
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Kochi
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Confirmed
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-blue-600">
                  View
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-800">
                  George Varghese
                </td>
                <td className="px-6 py-4 text-slate-600">
                  James Mathew
                </td>
                <td className="px-6 py-4 text-slate-600">
                  26 Nov 2026
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Kottayam
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                    Cancelled
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-blue-600">
                  View
                </td>
              </tr>

              <tr className="hover:bg-slate-50">
                <td className="px-6 py-4 font-semibold text-slate-800">
                  Joseph Mathew
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Anita Thomas
                </td>
                <td className="px-6 py-4 text-slate-600">
                  27 Nov 2026
                </td>
                <td className="px-6 py-4 text-slate-600">
                  Trivandrum
                </td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 font-medium text-blue-600">
                  View
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Appointments