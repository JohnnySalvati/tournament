# TournamentApp

Aplicación web para gestionar torneos y jugadores, con backend en **Django + Python** y frontend en **React + Vite + Tailwind CSS**.

---

## 🔹 Características

- CRUD de jugadores (Create, Read, Update, Delete)
- Gestión de torneos y resultados
- UI moderna y responsive con Tailwind
- API REST con Django REST Framework
- Integración frontend / backend desacoplada

---

## 🛠️ Tecnologías utilizadas

**Backend:**

- Python 3.11+
- Django 5.x
- Django REST Framework
- django-cors-headers

**Frontend:**

- React 18+
- Vite 4+
- Tailwind CSS
- Axios (para consumo de API)
- Heroicons (para iconos en UI)

---

## ⚡ Requisitos previos

- Python 3.11+
- Node.js 20+ y npm
- Git
- Virtualenv (recomendado para backend)

---

## 💻 Setup local

### 1. Clonar el repositorio

```bash
git clone https://github.com/JohnnySalvati/tournament.git
cd tournament
```

### 2. Backend (Django)

```bash
python -m venv venv
source venv/bin/activate  # Linux / Mac
venv\Scripts\activate     # Windows

pip install -r backend/requirements.txt

cd backend
python manage.py migrate
python manage.py createsuperuser

python manage.py runserver
```

### 3. Frontend (React + Vite)

```bash
cd frontend
npm install

npm run dev

```
🔗 Endpoints principales

/players/ → CRUD de jugadores

/tournaments/ → CRUD de torneos (si implementado)

/admin/ → Panel de administración de Django

🧩 Organización del proyecto

tournament/
├─ backend/        # Django backend
│  ├─ tournament/  # Configuración Django
│  ├─ players/     # App de jugadores
│  └─ manage.py
├─ frontend/       # React + Vite frontend
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ layouts/
│  │  └─ api.js
│  ├─ package.json
│  └─ vite.config.js
└─ README.md


📌 Contacto

Autor: Johnny Salvati

GitHub: https://github.com/JohnnySalvati