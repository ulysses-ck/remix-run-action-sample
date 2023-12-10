import { useActionData, useFetcher } from "@remix-run/react";
import { json } from "@remix-run/node";

export const meta = () => {
	return [{ title: "New Remix App" }];
};

export async function action({ request }) {
	const body = await request.formData();
	const name = body.get("name");
	console.log(`name (from action): ${name}`);
	// Return the data as a plain object.
	return json({ msg: `hello ${name}` });
}

export default function Index() {
	const fetcher = useFetcher();
	const data = useActionData();

	if (data && data.msg) {
		console.log(data.msg);
	}

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<fetcher.Form method="POST" action="/?index">
				<input type="text" name="name" />
				<button type="submit">Send</button>
				{/* Only render the message if data exists and has the msg property */}
				{data && data.msg ? <div>{data.msg}</div> : "Waiting"}
			</fetcher.Form>
		</div>
	);
}
