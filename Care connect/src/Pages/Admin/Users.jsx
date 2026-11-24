
import { Users, Search, Eye, Mail, ShieldCheck } from "lucide-react";

 function UsersPage() {
  return (
    <div className="min-h-screen space-y-7 bg-[#f6faf7] p-6 md:p-8">

      <div>
        <p className="text-sm font-semibold tracking-wider text-emerald-700">MANAGEMENT</p>
        <h1 className="mt-2 text-3xl font-bold text-[#17352b]">User Management</h1>
        <p className="mt-2 text-sm text-gray-500">View and manage all registered CareConnect users.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">

        <div className="rounded-2xl border border-[#e7eee9] bg-white p-5">
          <Users className="text-emerald-600" size={24} />
          <p className="mt-4 text-sm text-gray-500">Total Users</p>
          <h2 className="mt-2 text-3xl font-bold text-[#17352b]">1,248</h2>
        </div>

        <div className="rounded-2xl border border-[#e7eee9] bg-white p-5">
          <ShieldCheck className="text-green-600" size={24} />
          <p className="mt-4 text-sm text-gray-500">Active Users</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">1,102</h2>
        </div>

        <div className="rounded-2xl border border-[#e7eee9] bg-white p-5">
          <Search className="text-orange-500" size={24} />
          <p className="mt-4 text-sm text-gray-500">Pending Approval</p>
          <h2 className="mt-2 text-3xl font-bold text-orange-500">28</h2>
        </div>

      </div>

      <div className="rounded-2xl border border-[#e7eee9] bg-white p-6">

        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-bold text-[#17352b]">All Users</h2>
            <p className="mt-1 text-sm text-gray-500">Registered members of CareConnect</p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3 md:w-72">
            <Search size={18} className="text-gray-400" />
            <input type="text" placeholder="Search users..." className="w-full bg-transparent text-sm outline-none" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">

            <thead>
              <tr className="border-b border-gray-100 text-xs uppercase text-gray-400">
                <th className="px-4 py-4 font-semibold">User</th>
                <th className="px-4 py-4 font-semibold">Role</th>
                <th className="px-4 py-4 font-semibold">Joined Date</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-4 py-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-gray-50">
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">M</div>
                    <div><p className="text-sm font-semibold text-[#17352b]">Mary Joseph</p><p className="mt-1 flex items-center gap-1 text-xs text-gray-400"><Mail size={12} /> mary@example.com</p></div>
                  </div>
                </td>
                <td className="px-4 py-5 text-sm text-gray-600">Elderly</td>
                <td className="px-4 py-5 text-sm text-gray-500">12 Nov 2026</td>
                <td className="px-4 py-5"><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Active</span></td>
                <td className="px-4 py-5"><span className="flex items-center gap-2 text-sm font-medium text-emerald-700"><Eye size={16} /> View</span></td>
              </tr>

              <tr className="border-b border-gray-50">
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">A</div>
                    <div><p className="text-sm font-semibold text-[#17352b]">Anita Thomas</p><p className="mt-1 flex items-center gap-1 text-xs text-gray-400"><Mail size={12} /> anita@example.com</p></div>
                  </div>
                </td>
                <td className="px-4 py-5 text-sm text-gray-600">Caregiver</td>
                <td className="px-4 py-5 text-sm text-gray-500">10 Nov 2026</td>
                <td className="px-4 py-5"><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Active</span></td>
                <td className="px-4 py-5"><span className="flex items-center gap-2 text-sm font-medium text-emerald-700"><Eye size={16} /> View</span></td>
              </tr>

              <tr className="border-b border-gray-50">
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-700">J</div>
                    <div><p className="text-sm font-semibold text-[#17352b]">John Mathew</p><p className="mt-1 flex items-center gap-1 text-xs text-gray-400"><Mail size={12} /> john@example.com</p></div>
                  </div>
                </td>
                <td className="px-4 py-5 text-sm text-gray-600">Elderly</td>
                <td className="px-4 py-5 text-sm text-gray-500">08 Nov 2026</td>
                <td className="px-4 py-5"><span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Pending</span></td>
                <td className="px-4 py-5"><span className="flex items-center gap-2 text-sm font-medium text-emerald-700"><Eye size={16} /> View</span></td>
              </tr>

              <tr className="border-b border-gray-50">
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-700">D</div>
                    <div><p className="text-sm font-semibold text-[#17352b]">David George</p><p className="mt-1 flex items-center gap-1 text-xs text-gray-400"><Mail size={12} /> david@example.com</p></div>
                  </div>
                </td>
                <td className="px-4 py-5 text-sm text-gray-600">Caregiver</td>
                <td className="px-4 py-5 text-sm text-gray-500">05 Nov 2026</td>
                <td className="px-4 py-5"><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Active</span></td>
                <td className="px-4 py-5"><span className="flex items-center gap-2 text-sm font-medium text-emerald-700"><Eye size={16} /> View</span></td>
              </tr>

              <tr>
                <td className="px-4 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-100 font-bold text-pink-700">S</div>
                    <div><p className="text-sm font-semibold text-[#17352b]">Sarah Wilson</p><p className="mt-1 flex items-center gap-1 text-xs text-gray-400"><Mail size={12} /> sarah@example.com</p></div>
                  </div>
                </td>
                <td className="px-4 py-5 text-sm text-gray-600">Elderly</td>
                <td className="px-4 py-5 text-sm text-gray-500">02 Nov 2026</td>
                <td className="px-4 py-5"><span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">Inactive</span></td>
                <td className="px-4 py-5"><span className="flex items-center gap-2 text-sm font-medium text-emerald-700"><Eye size={16} /> View</span></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Users