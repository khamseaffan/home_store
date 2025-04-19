import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/product/:id", "routes/product.$id.tsx"),
    route("/cart", "routes/cart.tsx"),
    route("/checkout", "routes/checkout.tsx"),
    route("/orders", "routes/orders.tsx"),
    route("/dashboard", "routes/dashboard/index.tsx"),
    route("/dashboard/inventory", "routes/dashboard/inventory.tsx"),
    // route("/dashboard/orders", "routes/dashboard/orders.tsx")
] satisfies RouteConfig;
