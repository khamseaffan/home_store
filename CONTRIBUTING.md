# Contributing to Home Store

Thank you for your interest in contributing to the Home Store project! This document outlines guidelines and best practices for contributing to our microservices-based backend and React frontend.

---

## Table of Contents
- [Issue Management](#issue-management)
- [Branching & Workflow](#branching--workflow)
- [Code Style](#code-style)
- [Pull Requests](#pull-requests)
- [Commit Messages](#commit-messages)
- [Backend Guidelines](#backend-guidelines)
- [Frontend Guidelines](#frontend-guidelines)
- [Secrets & Sensitive Data](#secrets--sensitive-data)
- [Contact](#contact)

---

## Issue Management
1. Check the [ZenHub board](https://app.zenhub.com/workspaces/homestore-67d1f6410ac4cb002976d2d4) for existing issues before creating a new one.
2. Use the provided issue templates.
3. Assign appropriate labels (bug, enhancement, service name, etc.) and link to epics if relevant.
4. Update issue status as you work (e.g., In Progress, Review).

---

## Branching & Workflow
- Use feature branches: `feature/<service>-<short-description>` (e.g., `feature/product-add-discount-api`)
- For bugfixes: `bugfix/<service>-<short-description>`
- For hotfixes: `hotfix/<service>-<short-description>`
- Always branch from `main` and submit pull requests (PRs) to `main`.

---

## Code Style
- **Backend (Java/Spring Boot):**
  - Follow standard Java conventions (Google Java Style or Spring's guidelines).
  - Use meaningful class, method, and variable names.
  - Organize code by feature/module within each microservice.
- **Frontend (React/TypeScript):**
  - Use functional components and hooks.
  - Follow Airbnb or standard TypeScript style guides.
  - Use consistent formatting (Prettier recommended).

---

## Pull Requests
- Reference related issues in your PR description (e.g., `Closes #42`).
- Provide a clear summary of changes and testing steps.
- Ensure your branch is up to date with `main` before opening a PR.
- Request reviews from relevant team members.
- Pass all CI checks before merging.

---

## Commit Messages
- Use clear, descriptive commit messages.
- Format: `<type>(<scope>): <description>`
  - Example: `feat(product-service): add discount endpoint`
  - Types: feat, fix, docs, refactor, test, chore

---

## Backend Guidelines
- Each microservice is in its own folder under `home_store_microservices/`.
- Each service manages its own database and configuration.
- Sensitive files (e.g., `serviceAccountKey.json`, `.env`) must **never** be committed. Ensure they are in `.gitignore`.
- Add or update API documentation in the relevant service's README or in `SERVICES.md`.
- Write and maintain unit/integration tests (see `test/` directory for examples).

---

## Frontend Guidelines
- All frontend code is in `homestore_react/`.
- Place reusable components in `homestore_react/app/components/`.
- Use TypeScript for all new code.
- Keep UI state management simple (React context or Redux if needed).
- Add/update component documentation in `COMPONENTS.md` (if present).

---

## Secrets & Sensitive Data
- **Never commit secrets** (API keys, service account files, etc.).
- If a secret is accidentally committed, follow the process to remove it from git history and notify a maintainer immediately.
- See `.gitignore` for excluded patterns.

---

## Contact
For questions, open an issue or contact a maintainer via the ZenHub board.

---

Happy coding!