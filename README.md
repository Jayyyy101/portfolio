# Jayita Portfolio (Sheets CMS)

Next.js portfolio with:

- Google login (NextAuth)
- Role-based access (`admin` / `viewer`)
- Google Sheets as CMS + tracking store
- Inline editing for key content
- Admin analytics dashboard

## 1) Install

```bash
npm install
```

## 2) Environment

Copy `.env.example` to `.env.local` and fill values.

## 3) Google Sheets tabs (required)

Create a spreadsheet and add tabs:

- `content`
- `projects`
- `experience`
- `views`
- `users`

### `content` columns

`key | value | type | updated_at | updated_by`

Suggested keys:

- `hero_name`
- `hero_title`
- `hero_summary`
- `about`
- `highlight_1`
- `highlight_2`
- `highlight_3`
- `highlight_4`

### `projects` columns

`id | title | subtitle | problem | approach | impact | tools | order | is_published | updated_at`

### `experience` columns

`id | company | role | start_date | end_date | summary | highlights_json | order | updated_at`

### `views` columns

`timestamp | viewer_email | viewer_name | session_id | event_type | page | section | duration_sec | user_agent | utm_source | utm_medium | utm_campaign`

### `users` columns

`email | name | role | status | last_login`

Set Jayita row as `role=admin`.

## 4) Service account

1. Create Google Cloud service account.
2. Enable Sheets API.
3. Share spreadsheet with service account email.
4. Add service account credentials to env vars.

## 5) Run

```bash
npm run dev
```

## 6) Deploy

Deploy to Vercel and set all env vars in project settings.
