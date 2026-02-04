# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

A type-safe TypeScript client for the Pi-hole v6 REST API. Zero runtime dependencies, works in Node.js 18+ and browsers.

## Quick Reference

```bash
bun install          # Install dependencies
bun run build        # Build ESM + CJS output to dist/
bun run dev          # Watch mode for development
bun run typecheck    # Type check without emitting
bun run lint         # ESLint
bun run test         # Run tests with Bun
```

## Directory Structure

```
src/
├── index.ts         # Main exports
├── client.ts        # PiholeClient class
├── http.ts          # HTTP request layer
├── session.ts       # Session management
├── result.ts        # Result type utilities
├── errors.ts        # Error types and codes
├── endpoints/       # API endpoint implementations
│   ├── auth.ts      # Authentication
│   ├── dns.ts       # DNS blocking control
│   ├── stats.ts     # Statistics
│   ├── queries.ts   # Query log
│   ├── domains.ts   # Domain lists
│   └── ...          # Other endpoints
└── types/           # TypeScript type definitions
    ├── index.ts     # Type exports
    ├── common.ts    # Shared types
    └── ...          # Endpoint-specific types
```

## Architecture

- **Result type pattern**: All methods return `Result<T, PiholeError>` for explicit error handling
- **Session management**: Auto-refresh sessions before expiry
- **Retry logic**: Exponential backoff on transient failures
- **Type-safe**: Full TypeScript coverage with strict mode

## Adding New Endpoints

1. Create type definitions in `src/types/`
2. Create endpoint class in `src/endpoints/`
3. Add endpoint instance to `PiholeClient` in `src/client.ts`
4. Export types from `src/types/index.ts`

## Testing

Run against a local Pi-hole instance or use the mock server in tests.
