
import { Search, SlidersHorizontal } from "lucide-react";
 function SearchBar({
  placeholder = "Search here..."
}) {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex items-center gap-3 flex-1 bg-white border border-[#e7eee9] rounded-xl px-4 py-3 focus-within:border-[#087f5b] transition">
        <Search size={19} className="text-[#789087]" />

        <input
          type="text"
          placeholder={placeholder}
          className="w-full outline-none bg-transparent text-sm text-[#17352b] placeholder:text-gray-400"
        />
      </div>

      <button className="p-3 rounded-xl border border-[#e7eee9] bg-white text-[#087f5b] hover:bg-green-50 transition">
        <SlidersHorizontal size={19} />
      </button>
    </div>
  );
}

export default SearchBar