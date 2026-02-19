# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**waymark-design** is a React web app for Waymark, built with Vite.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run preview` — Preview production build locally

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool and dev server
- **@vitejs/plugin-react** — React Fast Refresh support

## Project Structure

```
src/
├── main.jsx    # Entry point, renders App into #root
├── App.jsx     # Root component
├── App.css     # App-level styles
└── index.css   # Global styles and CSS reset
```

`index.html` at the project root is the HTML template that loads `src/main.jsx`.
