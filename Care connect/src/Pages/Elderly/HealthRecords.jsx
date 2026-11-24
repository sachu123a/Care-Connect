
import { HeartPulse, Activity, Thermometer, Droplets, FileText, TrendingUp } from "lucide-react";
 function HealthRecords() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Health Records</h1><p className="mt-2 text-sm text-gray-500">Your health information and medical history.</p></div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm"><HeartPulse className="text-red-500" /><p className="mt-4 text-sm text-gray-500">Blood Pressure</p><h2 className="mt-1 text-2xl font-bold">120/80</h2><p className="mt-1 text-xs text-gray-400">Sample reading</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><Activity className="text-blue-600" /><p className="mt-4 text-sm text-gray-500">Heart Rate</p><h2 className="mt-1 text-2xl font-bold">72 BPM</h2><p className="mt-1 text-xs text-gray-400">Sample reading</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><Thermometer className="text-orange-500" /><p className="mt-4 text-sm text-gray-500">Temperature</p><h2 className="mt-1 text-2xl font-bold">98.6°F</h2><p className="mt-1 text-xs text-gray-400">Sample reading</p></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><Droplets className="text-purple-600" /><p className="mt-4 text-sm text-gray-500">Blood Sugar</p><h2 className="mt-1 text-2xl font-bold">110 mg/dL</h2><p className="mt-1 text-xs text-gray-400">Sample reading</p></div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-2xl bg-white p-6 shadow-sm xl:col-span-2">
          <div className="flex items-center justify-between"><div><h2 className="text-lg font-bold">Recent Health Readings</h2><p className="mt-1 text-sm text-gray-500">Sample health monitoring history</p></div><Activity className="text-emerald-600" /></div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left">
              <thead><tr className="border-b border-gray-100 text-xs uppercase text-gray-400"><th className="py-4">Date</th><th>Parameter</th><th>Reading</th><th>Recorded By</th></tr></thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-50"><td className="py-5 text-gray-500">23 Nov 2026</td><td className="font-medium">Blood Pressure</td><td>120/80</td><td>Anita</td></tr>
                <tr className="border-b border-gray-50"><td className="py-5 text-gray-500">22 Nov 2026</td><td className="font-medium">Heart Rate</td><td>72 BPM</td><td>Anita</td></tr>
                <tr className="border-b border-gray-50"><td className="py-5 text-gray-500">21 Nov 2026</td><td className="font-medium">Temperature</td><td>98.6°F</td><td>Anita</td></tr>
                <tr><td className="py-5 text-gray-500">20 Nov 2026</td><td className="font-medium">Blood Sugar</td><td>110 mg/dL</td><td>Anita</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold">Health Overview</h2>
          <p className="mt-1 text-sm text-gray-500">Sample summary</p>
          <div className="mt-6 space-y-6">
            <div><div className="flex justify-between text-sm"><span>Health Checkups</span><span className="text-gray-500">8 / 10</span></div><div className="mt-2 h-2 rounded-full bg-gray-100"><div className="h-2 w-4/5 rounded-full bg-emerald-500" /></div></div>
            <div><div className="flex justify-between text-sm"><span>Medication Records</span><span className="text-gray-500">9 / 10</span></div><div className="mt-2 h-2 rounded-full bg-gray-100"><div className="h-2 w-[90%] rounded-full bg-blue-500" /></div></div>
            <div><div className="flex justify-between text-sm"><span>Doctor Visits</span><span className="text-gray-500">6 / 10</span></div><div className="mt-2 h-2 rounded-full bg-gray-100"><div className="h-2 w-3/5 rounded-full bg-purple-500" /></div></div>
          </div>
          <div className="mt-7 rounded-xl bg-emerald-50 p-4"><TrendingUp className="text-emerald-600" /><p className="mt-2 font-semibold">Health Tracking</p><p className="mt-1 text-xs leading-5 text-gray-500">Your health records can be reviewed with your healthcare professional.</p></div>
        </section>
      </div>

      <div className="flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"><FileText className="shrink-0 text-emerald-700" /><div><h3 className="font-semibold text-emerald-900">Medical Records</h3><p className="mt-1 text-sm text-emerald-800">These sample readings are for frontend display only. They are not verified patient measurements or medical advice.</p></div></div>
    </div>
  );
}


export default HealthRecords