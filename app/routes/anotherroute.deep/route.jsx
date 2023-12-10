import { json } from "@remix-run/node";
import { useFetcher } from "@remix-run/react";

export async function action({ request }) {
	const body = await request.formData();

	const name = body.get("name");
	const message = `Hello ${name}!`;

	return json({
		message,
	});
}

export default function Page() {
	const fetcher = useFetcher();
	return (
		<div>
			<fetcher.Form method="POST">
				<input name="name" type="text" />
				<button type="submit">Send</button>
			</fetcher.Form>
			{fetcher.data ? <div>{fetcher.data.message}</div> : "Waiting..."}
		</div>
	);
}
