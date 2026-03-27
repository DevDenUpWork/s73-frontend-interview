# 73 Strings — Portfolio Monitor

## Overview

Build a paginated portfolio companies table with search functionality using Angular Material.

## Setup

The project uses **json-server** as a mock API. It starts automatically alongside the Angular dev server.

```bash
npm install
npm start
```

- **API base:** `http://localhost:3000/companies`
- **API docs:** See below

## API Reference

| Endpoint | Description |
|----------|-------------|
| `GET /companies` | Fetch all companies |
| `GET /companies?_page=1&_limit=20` | Paginated fetch (page 1, 20 per page) |
| `GET /companies?q=apex` | Full-text search |
| `GET /companies?q=apex&_page=1&_limit=20` | Search + pagination combined |
| `GET /companies?sector=Technology` | Filter by exact field value |

**Pagination header:** The total count is returned in the `X-Total-Count` response header when using `_page` and `_limit`.

**Note:** json-server uses **1-based** page numbers, while `mat-paginator` uses **0-based** `pageIndex`. Make sure to convert.

## Requirements

1. Display portfolio companies in the provided `mat-table`
2. Implement pagination using the provided `mat-paginator` (20 items per page)
3. Wire up the search input to filter companies by name
4. Handle loading and empty/no-results states

## Approach

You may implement **server-side** or **client-side** pagination — your choice.
Be prepared to discuss your decision and its trade-offs.

## What's Already Built

- `mat-table` with column definitions and styled CSS
- `mat-paginator` component (needs `[length]` and `(page)` bindings)
- Search `mat-form-field` (needs event binding)
- `mat-spinner` for loading state (commented out, ready to use)
- Company model interfaces in `models/company.model.ts`
- Service skeleton with method signatures in `services/company.service.ts`
- App shell with 73 Strings branding

Look for `TODO` comments in the code — they indicate where your implementation goes.

## Angular Material Modules Available

The following are already imported in the component:

- `MatTableModule` — `mat-table`, `matColumnDef`, `mat-header-cell`, `mat-cell`
- `MatPaginatorModule` — `mat-paginator`, `PageEvent`
- `MatFormFieldModule` / `MatInputModule` — `mat-form-field`, `matInput`
- `MatIconModule` — `mat-icon`
- `MatProgressSpinnerModule` — `mat-spinner`

## Time

~35 minutes. Focus on functionality — the CSS is already done.
