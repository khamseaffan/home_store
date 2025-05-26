# Home Store Project

This project aims to build a multi-tenant e-commerce platform where store owners can quickly create their online stores. Owners can leverage a global product catalog for fast onboarding or add their own custom products, managing inventory directly. Customers can browse and order from their preferred local stores on the platform, choosing between pickup or delivery options offered by the store.

A modern e-commerce platform built with a microservices backend (Spring Boot/Gradle) and a React frontend. This project is under active development.

---

## Architecture Overview

- **Backend:** Microservices architecture using Spring Boot (Java 17+) & Gradle
- **Frontend:** React (TypeScript) with Vite and TailwindCSS
- **API Gateway:** Central entry point for all backend services (Spring Cloud Gateway)
- **Service Discovery:** Dynamic service registration and discovery (Eureka)
- **Configuration:** Centralized configuration using Spring Cloud Config, with environment-specific files in `HomeStore_config/`.
- **Database:** Each service manages its own PostgreSQL database.
- **Asynchronous Communication:** Kafka for event-driven communication (e.g., for notifications).
- **Containerization:** Docker and docker-compose for local development.

---

## Backend Microservices

Located in `home_store_microservices/`:

- **config-service**: Centralized configuration (Spring Cloud Config) - Reads from `HomeStore_config/`
- **discovery-service**: Service registry (Eureka)
- **gateway-service**: API Gateway (Spring Cloud Gateway)
- **user-service**: User authentication and management
- **product-service**: Product catalog management
- **store-service**: Store management
- **inventory-service**: Manages stock levels for products in stores.
- **cart-service**: Shopping cart functionality.
- **order-service**: Order processing and management.
- **payment-service**: Handles payment processing (e.g., Stripe integration).
- **notification-service**: Manages sending notifications (e.g., email, SMS via Kafka).

See `home_store_microservices/SERVICES.md` for more details on each service, including their current status.

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
- Java 17+ (ensure your `JAVA_HOME` is set correctly)
- Node.js 18+
- Docker & Docker Compose
- Gradle (usually handled by the wrapper `gradlew`)

### Backend (Microservices) - Recommended: Docker Compose
1.  **Environment Setup**:
    *   Copy `.env.example` to `.env` in the `home_store_microservices/` directory and fill in your PostgreSQL credentials and any other required API keys (e.g., Stripe).
    *   Ensure you have created necessary configuration files in `HomeStore_config/` for each service (e.g., `product-service-dev.yml`, `payment-service-dev.yml`). **This `HomeStore_config` directory should NOT be committed to version control.**
2.  Navigate to `home_store_microservices/`
3.  Start all services with Docker Compose:
    ```bash
    docker-compose up --build -d
    ```
    *   To view logs: `docker-compose logs -f <service_name>` or `docker-compose logs -f` for all.
    *   To stop services: `docker-compose down`
4.  **Eureka Dashboard**: Once services are up, visit `http://localhost:8761` to see registered services.
5.  **API Gateway**: Services are typically accessed via the gateway at `http://localhost:8080`.

### Backend (Microservices) - Manual (using Gradle)
This method is more complex due to service dependencies.
1.  Ensure prerequisites from the Docker Compose setup are met (config files, `.env`).
2.  Navigate to `home_store_microservices/`
3.  Build all services:
    ```bash
    ./gradlew clean build -x test
    ```
4.  Run individual services using `./gradlew :<service-name>:bootRun`. You must start them in an order that respects dependencies (e.g., `config-service`, then `discovery-service`, then others).

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
- Core services (config, discovery, user, product, store) are relatively stable.
- Services like `cart-service`, `order-service`, `inventory-service`, `payment-service`, and `notification-service` are in active development or recently added.
- The frontend is under active development.
- Please check individual service folders and the `SERVICES.MD` file for current status and specific setup instructions.

---

## License
[MIT](LICENSE)
