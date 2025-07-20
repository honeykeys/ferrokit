# ferrokit

A full-stack boilerplate for building robust business applications with Python, FastAPI, React, TypeScript, Tailwind CSS v4, and shadcn/ui.

---

## Features

- **React + TypeScript + Vite** frontend for rapid development
- **Tailwind CSS v4** for modern utility-first styling
- **shadcn/ui** for accessible, customizable UI components
- **FastAPI** backend for high-performance Python APIs
- **Import aliases** for clean, maintainable code structure
- **Separation of frontend and backend** for flexible deployment

---

## Project Structure
ferrokit/
frontend/ # React app with Tailwind and shadcn/ui
backend/ # FastAPI app, Python, .env support
README.md

---

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run dev

### Backend
cd backend
python -m venv venv
source venv/bin/activate        
pip install -r requirements.txt
uvicorn main:app --reload
