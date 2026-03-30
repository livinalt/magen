import { Home, Store, FlaskConical, Gavel, Rocket } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-56 bg-[#0F172A] border-r border-gray-800 p-4 hidden md:flex flex-col gap-6">

      <h1 className="text-lg font-bold px-2">
        ⚡ Consensus
      </h1>

      <nav className="flex flex-col gap-2 text-sm">

        {[
          { href: "/", label: "Dashboard", icon: Home },
          { href: "/marketplace", label: "Marketplace", icon: Store },
          { href: "/playground", label: "Playground", icon: FlaskConical },
          { href: "/appeals", label: "Appeals", icon: Gavel },
          { href: "/deploy", label: "Deploy", icon: Rocket },
        ].map((item, i) => {
          const Icon = item.icon;

          return (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition"
            >
              <Icon size={16} />
              {item.label}
            </a>
          );
        })}

      </nav>
    </div>
  );
}