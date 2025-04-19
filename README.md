# Home Store Project

This project aims to build a multi-tenant e-commerce platform where store owners can quickly create their online stores. Owners can leverage a global product catalog for fast onboarding or add their own custom products, managing inventory directly. Customers can browse and order from their preferred local stores on the platform, choosing between pickup or delivery options offered by the store.

A modern e-commerce platform built with a microservices backend (Spring Boot/Gradle) and a React frontend. This project is under active development—some services and the frontend are still work in progress (WIP).

---

## Architecture Overview

- **Backend:** Microservices architecture using Spring Boot (Java 17+) & Gradle
- **Frontend:** React (TypeScript) with Vite and TailwindCSS
- **API Gateway:** Central entry point for all backend services (Spring Cloud Gateway)
- **Service Discovery:** Dynamic service registration and discovery (Eureka)
- **Configuration:** Centralized configuration using Spring Cloud Config, with environment-specific files in `HomeStore_config/` (this directory should **not** be committed).
- **Database:** Each service manages its own PostgreSQL database
- **Containerization:** Docker and docker-compose for local development

---

## Backend Microservices

Located in `home_store_microservices/`:

- **config-service**: Centralized configuration (Spring Cloud Config) - Reads from `HomeStore_config/`
- **discovery-service**: Service registry (Eureka)
- **gateway-service**: API Gateway (Spring Cloud Gateway)
- **product-service**: Product catalog management
- **store-service**: Store management
- **user-service**: User authentication and management
- **cart-service**: Shopping cart (WIP)
- **order-service**: Order processing (WIP)

See `home_store_microservices/SERVICES.md` for more details on each service.

---

## Frontend

Located in `homestore_react/`:

- **Framework:** React 18+ (TypeScript)
- **Build Tool:** Vite
- **UI:** TailwindCSS
- **Routing:** React Router
- **Status:** Work in progress

See `homestore_react/README.md` for frontend-specific details.

---

## Development Setup

### Prerequisites
- Java 17+
- Node.js 18+
- Docker & Docker Compose
- Gradle (usually handled by the wrapper `gradlew`)

### Backend (Microservices) - Recommended: Docker Compose
1.  Ensure you have created necessary configuration files in `HomeStore_config/` (e.g., `product-service-dev.yml`). **Do not commit this folder.**
2.  Navigate to `home_store_microservices/`
3.  Start all services with Docker Compose:
    ```bash
    docker-compose up --build
    ```
4.  Each service exposes its own port (see `docker-compose.yml`)

### Backend (Microservices) - Manual (using Gradle)
1.  Ensure you have created necessary configuration files in `HomeStore_config/`.
2.  Navigate to `home_store_microservices/`
3.  Build all services:
    ```bash
    ./gradlew build
    ```
4.  Run individual services (example for product-service):
    ```bash
    ./gradlew :product-service:bootRun
    ```
    (Repeat for other services like discovery, config, gateway, etc., in the correct order)

### Frontend (React)
1.  Navigate to `homestore_react/`
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for workflow details.

We use ZenHub for agile workflow management:
[![ZenHub Board](https://img.shields.io/badge/Board-ZenHub-4353ff)](https://app.zenhub.com/workspaces/homestore-67d1f6410ac4cb002976d2d4)

---

## Status
- Some backend services (config, discovery, gateway, cart, order) and the frontend are still work in progress (WIP) or not started.
- Please check individual service folders and the frontend for their current status and specific setup instructions.

---

## License
[MIT](LICENSE)
