import { NavItems } from "@/data";
import type { TIconName } from "@/domain/types";
import Link from "next/link";
import { Icon } from "../icon";

export function BasicNavbar() {
	return (
		<nav className="h-16 border-t p-2 grid place-items-center">
			<div className="w-full max-w-80 mx-auto flex items-center justify-evenly">
				{NavItems.map((navItem) => (
					<NavItem
						key={navItem.href}
						href={navItem.href}
						iconName={navItem.iconName}
					/>
				))}
			</div>
		</nav>
	);
}

// -------------------------------PRIVATE--------------------------------- //

type NavItemProps = {
	href: string;
	iconName: TIconName;
};

function NavItem(props: NavItemProps) {
	return (
		<Link href={props.href}>
			<Icon name={props.iconName} className="w-6 h-6" />
		</Link>
	);
}
