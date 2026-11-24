
import { TrendingUp } from "lucide-react";

 function StatCard({
  title = "Total Users",
  value = "1,250",
  change = "+12.5%",
  icon: Icon = TrendingUp,
  color = "green"
}) {
  const colors = {
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600"
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-[#e7eee9] card-hover shadow-sm">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-[#789087] font-medium">{title}</p>
          <h2 className="text-3xl font-bold text-[#17352b] mt-3">{value}</h2>
          <p className="text-xs text-green-600 font-semibold mt-3">
            {change} <span className="text-gray-400 font-normal">from last month</span>
          </p>
        </div>

        <div className={`p-3 rounded-xl ${colors[color] || colors.green}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
export default StatCard