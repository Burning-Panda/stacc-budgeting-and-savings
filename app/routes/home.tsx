import type { Route } from "./+types/home";

export function loader() {
  return { name: "Home" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="contents">
      <h1 className="">Hello, {loaderData.name}</h1>
      <p>
        This is the home page.
      </p>
      <div>
        <h2>Your Quests</h2>
        <div className="grid">
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}
