# NestJS Backend Architecture

[![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

A production-ready, highly scalable, and secure **NestJS Enterprise Boilerplate** built with **Modular Monolith Architecture**. This repository demonstrates best practices for system architecture, authentication flow, database migrations, rate-limiting, and DevOps integration.

---

## 🏗️ System Architecture

The project follows the **Modular Monolith** pattern where each domain (Auth, Users, Mail, etc.) is isolated in its own module.

```mermaid
graph TD
    Client[Client / Frontend] -->|HTTP Requests| Gateway[NestJS Gateway / App]
    
    subgraph NestJS Application
        Gateway -->|Guard / Interceptor| AuthModule[Auth Module]
        Gateway -->|Throttling| RateLimiter[Redis Rate Limiter]
        AuthModule -->|JWT Validation & RBAC| Security[Security Layer]
        Security -->|Services| BusinessLogic[Business Services]
    end

    subgraph Data & Cache Infrastructure
        BusinessLogic -->|ORM Queries| PostgreSQL[(PostgreSQL Database)]
        AuthModule -->|Refresh Token Rotation| Redis[(Redis Storage)]
        RateLimiter -->|Sliding Window| Redis
    end