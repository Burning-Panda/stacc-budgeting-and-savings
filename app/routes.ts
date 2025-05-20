import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/ledger", "routes/ledger.tsx"),
    route("/vault", "routes/vault.tsx"),
    route("/lore", "routes/lore.tsx"),
    route("/quests", "routes/quests.tsx"),
    route("/settings", "routes/settings.tsx"),
] satisfies RouteConfig;
