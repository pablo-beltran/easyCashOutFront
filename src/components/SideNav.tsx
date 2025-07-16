import { useState, Fragment } from "react";
import { Menu, X } from "lucide-react";


/**
 * Responsive Top‑Navbar + Side Navigation component
 * ‑ Written in TypeScript + React 18
 * ‑ Uses TailwindCSS utility classes
 * ‑ Lucide‑react icons (tree‑shaken) for hamburger / close icons
 *
 * How it works:
 *  • Small screens (<640px):
 *      – Sidebar starts off‑canvas (‑translate‑x‑full)
 *      – Tapping the Menu button toggles `open`, sliding the drawer in
 *      – A semi‑transparent backdrop lets the user close the drawer by tapping outside
 *  • >=sm screens: sidebar is always visible (translate‑x‑0)
 *  • The component is self‑contained; nav items can be customised via the `items` array
 */

export interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
}

const defaultItems: NavItem[] = [
  {
    name: "Dashboard",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 22 21"
        aria-hidden="true"
      >
        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
      </svg>
    ),
  },
  {
    name: "Products",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 18 20"
        aria-hidden="true"
      >
        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
      </svg>
    ),
  },
  {
    name: "Make a Sale",
    href: "#",
    icon: (
      <svg
        className="w-5 h-5 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 18 20"
        aria-hidden="true"
      >
        <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
      </svg>
    ),
  }
];

interface SideNavProps {
  items?: NavItem[];
  brandHref?: string;
  brandLogoSrc?: string;
  brandName?: string;
}

export default function SideNav({
  items = defaultItems,
  brandHref = "#",
  brandLogoSrc = "./public/cactuss.png",
  brandName = "SmokeShop",
}: SideNavProps) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((o) => !o);

  return (
    <Fragment>
      {/* Top Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-zinc-800 dark:border-zinc-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* Hamburger – small screens only */}
              <button
                type="button"
                aria-label="Toggle sidebar"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
                onClick={toggle}
              >
                {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              {/* Brand */}
              <a href={brandHref} className="flex items-center gap-2">
                <img src={brandLogoSrc} className="h-8" alt="Brand Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  {brandName}
                </span>
              </a>
            </div>
            {/* User avatar (static placeholder) */}
            <div className="flex items-center">
              <img
                src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?semt=ais_hybrid&w=740"
                alt="user avatar"
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay – shows only on small screens when sidebar is open */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 sm:hidden"
          aria-hidden="true"
          onClick={toggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed top-0 left-0 z-50 w-64 h-screen pt-20 bg-white border-r border-gray-200 dark:bg-zinc-800 dark:border-zinc-700 transition-transform",
          open ? "translate-x-0" : "-translate-x-full",
          "sm:translate-x-0 sm:static sm:pt-20 sm:z-40",
        ].join(" ")}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-zinc-800">
          <ul className="space-y-2 font-medium">
            {items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group"
                  onClick={() => setOpen(false)}
                >
                  {item.icon}
                  <span className="ms-3 flex-1 whitespace-nowrap">{item.name}</span>
                  {item.badge && (
                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content wrapper with left padding on >=sm */}
      <main className="pt-16 sm:ml-64">
        {/* Your routed pages/components go here */}
        <div className="p-4 border-2 border-dashed rounded-lg dark:border-gray-700 min-h-[calc(100vh-64px)]">
          {/* Placeholder */}
          <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200">
            Main Content
          </h1>
        </div>
      </main>
    </Fragment>
  );
}
