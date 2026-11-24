
import {
  HeartHandshake,
  UserCheck,
  Clock,
  Search,
  MapPin,
  Star
} from "lucide-react";
 function Caregivers() {
  return (
    <div className="space-y-7">

    
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Caregivers Management
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          View and manage registered caregivers.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3 text-blue-600">
            <HeartHandshake size={22} />
          </div>
          <p className="text-sm text-slate-500">Total Caregivers</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">186</h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-green-100 p-3 text-green-600">
            <UserCheck size={22} />
          </div>
          <p className="text-sm text-slate-500">Verified</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">158</h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3 text-orange-600">
            <Clock size={22} />
          </div>
          <p className="text-sm text-slate-500">Pending Verification</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-800">28</h2>
        </div>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5">

        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">

          <div>
            <h2 className="font-bold text-slate-800">
              All Caregivers
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Caregiver profiles and verification status
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
            <Search size={17} className="text-slate-400" />
            <input
              className="w-36 text-sm outline-none sm:w-48"
              placeholder="Search caregivers..."
            />
          </div>

        </div>

    
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

       
          <div className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm">

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                  A
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Anita Thomas
                  </h3>
                  <p className="text-xs text-slate-500">
                    anita@example.com
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Verified
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                Trivandrum
              </p>

              <p className="flex items-center gap-2">
                <HeartHandshake size={16} className="text-slate-400" />
                Experience: 5 Years
              </p>

              <p className="flex items-center gap-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                Rating: 4.9/5
              </p>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <span className="font-medium text-blue-600">
                View Profile
              </span>
            </div>
          </div>

      
          <div className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm">

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                  D
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    David George
                  </h3>
                  <p className="text-xs text-slate-500">
                    david@example.com
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Verified
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                Kollam
              </p>

              <p className="flex items-center gap-2">
                <HeartHandshake size={16} className="text-slate-400" />
                Experience: 3 Years
              </p>

              <p className="flex items-center gap-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                Rating: 4.7/5
              </p>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <span className="font-medium text-blue-600">
                View Profile
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm">

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                  S
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    Sarah Wilson
                  </h3>
                  <p className="text-xs text-slate-500">
                    sarah@example.com
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                Pending
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                Kochi
              </p>

              <p className="flex items-center gap-2">
                <HeartHandshake size={16} className="text-slate-400" />
                Experience: 4 Years
              </p>

              <p className="flex items-center gap-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                Rating: 4.8/5
              </p>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <span className="font-medium text-blue-600">
                View Profile
              </span>
            </div>
          </div>

        
          <div className="rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-sm">

            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                  J
                </div>

                <div>
                  <h3 className="font-semibold text-slate-800">
                    James Mathew
                  </h3>
                  <p className="text-xs text-slate-500">
                    james@example.com
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Verified
              </span>
            </div>

            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-slate-400" />
                Kottayam
              </p>

              <p className="flex items-center gap-2">
                <HeartHandshake size={16} className="text-slate-400" />
                Experience: 6 Years
              </p>

              <p className="flex items-center gap-2">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                Rating: 4.9/5
              </p>
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <span className="font-medium text-blue-600">
                View Profile
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}


export default Caregivers