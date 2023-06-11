"use client";

import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cxm } from "~lib/helpers";
import { spaceGrotesk } from "~lib/utils/fonts";
import { GuestbookIcon, NoteIcon, WorkIcon } from "../svg";
import Menu from "./Menu";

const topNavList = [
  { id: 1, route: "/works", icon: WorkIcon },
  { id: 2, route: "/notes", icon: NoteIcon },
  { id: 3, route: "/guestbook", icon: GuestbookIcon },
];

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <Menu
      menuIcon={
        <button type="button" aria-label="menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-category"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 4h6v6h-6z"></path>
            <path d="M14 4h6v6h-6z"></path>
            <path d="M4 14h6v6h-6z"></path>
            <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          </svg>
        </button>
      }
      list={topNavList.map((item) => {
        const Icon = item.icon;
        return (
          <Link key={item.id} href={item.route}>
            <DropdownMenuItem
              className={cxm(
                "flex items-center justify-start",
                "space-x-2 rounded-md p-2",
                "font-semibold outline-none transition-all",
                "data-[highlighted]:bg-red data-[highlighted]:text-gray-100",
                "dark:data-[highlighted]:bg-blue-500"
              )}
            >
              <Icon className="h-6 w-6" />
              <span
                className={cxm(
                  pathname?.includes(item.route)
                    ? "font-bold underline decoration-dashed underline-offset-[5px]"
                    : "",
                  spaceGrotesk.className
                )}
              >
                {item.route}
              </span>
            </DropdownMenuItem>
          </Link>
        );
      })}
    />
  );
}