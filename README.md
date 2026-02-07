# Socket.IO Lab

This project is a low-level exploration of real-time, bidirectional communication
using Node.js, Express, and Socket.IO.

The goal is to start from a minimal, functional core and incrementally add:
- identity
- persistence
- authorization
- UI state

## Current Features
- Real-time messaging via WebSockets
- Room-based communication
- Server-authoritative events
- Live client updates

## Why This Exists
Rather than starting with heavy abstractions or frameworks, this project begins
with a barebones system to make runtime behavior, state, and trust boundaries explicit.

## Planned Additions
- Usernames (replace socket IDs)
- Message persistence
- Authentication & authorization
- UI improvements (rooms, message bubbles, avatars)
- Security considerations (rate limiting, validation)

## Tech Stack
- Node.js
- Express
- Socket.IO
- Vanilla HTML/CSS/JS

## How to Run
```bash
npm install
npm run dev
