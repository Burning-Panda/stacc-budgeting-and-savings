import type { Route } from "./+types/settings";

export function loader() {
  return { name: "Settings" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="">
      <h1 className="">{loaderData.name}</h1>
    </div>
  );
}
