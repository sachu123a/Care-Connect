import React from "react";
import { UserRound, UserCheck, Clock, Search } from "lucide-react";

const Elderly = () => {
  const members = [
    { name: "Mary Joseph", email: "mary@example.com", age: 72, location: "Trivandrum", caregiver: "Anita Thomas", status: "Active" },
    { name: "John Mathew", email: "john@example.com", age: 68, location: "Kollam", caregiver: "David George", status: "Active" },
    { name: "Elizabeth Thomas", email: "elizabeth@example.com", age: 75, location: "Kochi", caregiver: "Sarah Wilson", status: "Pending" },
    { name: "George Varghese", email: "george@example.com", age: 81, location: "Kottayam", caregiver: "James Mathew", status: "Active" }
  ];

  const stats = [
    { title: "Total Members", value: "942", icon: UserRound, color: "bg-blue-100 text-blue-600" },
    { title: "Active Members", value: "890", icon: UserCheck, color: "bg-green-100 text-green-600" },
    { title: "Pending Requests", value: "52", icon: Clock, color: "bg-orange-100 text-orange-600" }
  ];

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Elderly Members</h1>
        <p className="mt-1 text-sm text-slate-500">Manage elderly member information and care assignments.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className={`mb-4 inline-flex rounded-xl p-3 ${item.color}`}>
                <Icon size={22} />
              </div>
              <p className="text-sm text-slate-500">{item.title}</p>
              <h2 className="mt-1 text-2xl font-bold text-slate-800">{item.value}</h2>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 p-5">
          <div>
            <h2 className="font-bold text-slate-800">All Elderly Members</h2>
            <p className="mt-1 text-sm text-slate-500">Member details and assigned caregivers</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2">
            <Search size={17} className="text-slate-400" />
            <input className="w-36 text-sm outline-none sm:w-48" placeholder="Search members..." />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-6 py-4">Member</th>
                <th className="px-6 py-4">Age</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Caregiver</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {members.map((member) => (
                <tr key={member.email} className="hover:bg-slate-50">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-800">{member.name}</p>
                    <p className="text-xs text-slate-500">{member.email}</p>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{member.age}</td>
                  <td className="px-6 py-4 text-slate-600">{member.location}</td>
                  <td className="px-6 py-4 text-slate-600">{member.caregiver}</td>
                  <td className="px-6 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      member.status === "Active" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-blue-600">View</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Elderly;