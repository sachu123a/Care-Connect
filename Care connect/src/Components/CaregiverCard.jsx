
import { Star, MapPin, Users, BadgeCheck } from "lucide-react";

export default function CaregiverCard({
  name = "Anita Thomas",
  specialization = "Elderly Care Specialist",
  rating = "4.9",
  patients = 8,
  location = "Trivandrum, Kerala",
  image = "https://i.pravatar.cc/150?img=44",
  status = "Available"
}) {
  return (
    <div className="bg-white rounded-2xl border border-[#e7eee9] p-5 card-hover shadow-sm">
      <div className="flex items-start justify-between">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-2xl object-cover"
        />

        <span className="bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
          {status}
        </span>
      </div>

      <h3 className="text-lg font-bold text-[#17352b] mt-4">{name}</h3>

      <p className="text-sm text-gray-500 mt-1">{specialization}</p>

      <div className="flex items-center gap-2 mt-4">
        <BadgeCheck size={17} className="text-[#087f5b]" />
        <span className="text-xs text-gray-500">Verified Caregiver</span>
      </div>

      <div className="border-t border-gray-100 mt-4 pt-4 grid grid-cols-2 gap-3">
        <div>
          <p className="flex items-center gap-1 text-sm font-bold text-[#17352b]">
            <Star size={15} className="text-amber-400 fill-amber-400" />
            {rating}
          </p>
          <p className="text-xs text-gray-400 mt-1">Rating</p>
        </div>

        <div>
          <p className="flex items-center gap-1 text-sm font-bold text-[#17352b]">
            <Users size={15} className="text-[#087f5b]" />
            {patients}
          </p>
          <p className="text-xs text-gray-400 mt-1">Patients</p>
        </div>
      </div>

      <p className="flex items-center gap-2 text-xs text-gray-500 mt-4">
        <MapPin size={15} className="text-[#087f5b]" />
        {location}
      </p>
    </div>
  );
}
