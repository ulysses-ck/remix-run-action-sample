import { Outlet } from "@remix-run/react";

export default function Index() {
	return (
		<main>
			<Outlet />
		</main>
	);
}
