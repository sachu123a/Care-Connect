
import { MapPin, CalendarDays, HeartPulse } from "lucide-react";

export default function ElderlyCard({
  name = "Mary Joseph",
  age = 72,
  location = "Kochi, Kerala",
  caregiver = "Anita Thomas",
  status = "Active",
  image = "https://i.pravatar.cc/150?img=47"
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#e7eee9] p-5 card-hover shadow-sm">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-2xl object-cover"
        />

        <div className="flex-1">
          <h3 className="font-bold text-[#17352b]">{name}</h3>
          <p className="text-sm text-gray-500">{age} years old</p>
          <span className="inline-block mt-2 text-xs font-semibold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            {status}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-5 pt-4 space-y-3">
        <p className="flex items-center gap-2 text-sm text-gray-500">
          <MapPin size={16} className="text-[#087f5b]" />
          {location}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-500">
          <HeartPulse size={16} className="text-[#087f5b]" />
          Caregiver: {caregiver}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} className="text-[#087f5b]" />
          Daily care scheduled
        </p>
      </div>
    </div>
  );
}
