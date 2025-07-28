import { FiInstagram } from "react-icons/fi";
import Link from "next/link";
import { useNavigationConfig } from "@/config/navigation";
import AppFooterCopyright from "./AppFooterCopyright";

function AppFooter() {
  const { navigationItems } = useNavigationConfig();

  return (
    <div className="container mx-auto">
      <div className="py-8 border-t border-border-dimmed flex flex-col items-center space-y-4">
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-text-secondary">
          {navigationItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path || (item.sectionId ? `#${item.sectionId}` : "/")}
                className="hover:underline"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>

        <AppFooterCopyright />
      </div>
    </div>
  );
}

export default AppFooter;
