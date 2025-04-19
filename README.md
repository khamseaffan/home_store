# Home Store Project

A modern e-commerce platform built with a microservices backend (Spring Boot) and a React frontend. This project is under active development—some services and the frontend are still work in progress (WIP).

---

## Architecture Overview

- **Backend:** Microservices architecture using Spring Boot (Java 17+)
- **Frontend:** React (TypeScript) with Vite and TailwindCSS
- **API Gateway:** Central entry point for all backend services
- **Service Discovery:** Dynamic service registration and discovery
- **Database:** Each service manages its own PostgreSQL database
- **Containerization:** Docker and docker-compose for local development

---

## Backend Microservices

Located in `home_store_microservices/`:

- **config-service**: Centralized configuration (Spring Cloud Config)
- **discovery-service**: Service registry (Eureka)
- **gateway-service**: API Gateway (Spring Cloud Gateway)
- **product-service**: Product catalog management
- **store-service**: Store management
- **user-service**: User authentication and management
- **cart-service**: Shopping cart (WIP)
- **order-service**: Order processing (WIP)

Some services are still being implemented. See each service folder for details.

---

## Frontend

Located in `homestore_react/`:

- **Framework:** React 18+ (TypeScript)
- **Build Tool:** Vite
- **UI:** TailwindCSS
- **Routing:** React Router
- **Status:** Work in progress

---

## Development Setup

### Prerequisites
- Java 17+
- Node.js 18+
- Docker & Docker Compose

### Backend (Microservices)
1. Navigate to `home_store_microservices/`
2. Start all services with Docker Compose:
   ```bash
   docker-compose up --build
   ```
3. Each service exposes its own port (see `docker-compose.yml`)

### Frontend (React)
1. Navigate to `homestore_react/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
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
- Some backend services and the frontend are still work in progress (WIP).
- Please check individual service folders and the frontend for their current status and specific setup instructions.

---

## License
[MIT](LICENSE)
