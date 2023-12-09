import { useActionData, useFetcher } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function action({ request }) {
	const body = await request.formData();
	const name = body.get("name");
	console.log(`name (from action): ${name}`);
	return json({ msg: `hello ${name}` });
}

export const meta = () => {
	return [{ title: "New Remix App" }];
};

export default function Index() {
	const fetcher = useFetcher();
	const data = useActionData();

	if (data) {
		console.log(data.msg);
	}

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
			<fetcher.Form method="POST">
				<input type="text" name="name" />
				<button type="submit">Send</button>
				{data ? <div>{data.msg}</div> : "Waiting"}
			</fetcher.Form>
		</div>
	);
}
