import { IconSearch } from "@tabler/icons-react";
import { SetStateAction } from "react";
import { cxm } from "~lib/helpers";

interface SearchInputProps {
  search: string;
  setSearch: (update: SetStateAction<string>) => void;
}

export function SearchInput({ search, setSearch }: SearchInputProps) {
  return (
    <div className="relative my-6 w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <IconSearch size={20} />
      </div>
      <input
        className={cxm(
          "block w-full border-2 border-base-0",
          "focus:border-blue-500 focus:ring-blue-500 focus:ring-1",
          "dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-1",
          "dark:border-base-5 bg-white dark:bg-base-0",
          "rounded-md",
          "px-4 py-1.5 pl-12 font-medium outline-none"
        )}
        type="text"
        name="search"
        placeholder="Search Here...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}