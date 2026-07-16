# Job Foundation Backend (FastAPI)

A FastAPI backend for the Job Foundation Portal.

## Features

- User Authentication (JWT)
- User Management
- Company Management
- Job Management
- Job Applications
- MySQL Database
- SQLAlchemy ORM
- REST APIs
- CORS Enabled

---

## Tech Stack

- Python 3.11+
- FastAPI
- SQLAlchemy
- MySQL
- JWT Authentication
- Uvicorn
- Pydantic

---

## Folder Structure

backend/

├── app.py

├── config.py

├── database.py

├── requirements.txt

├── .env

├── models/

│ ├── user.py

│ ├── company.py

│ ├── job.py

│ └── application.py

├── routes/

│ ├── auth.py

│ ├── users.py

│ ├── companies.py

│ ├── jobs.py

│ └── applications.py

├── schemas/

│ ├── auth.py

│ ├── user.py

│ ├── company.py

│ ├── job.py

│ └── application.py

├── utils/

│ ├── security.py

│ └── dependencies.py

└── database/

└── job_foundation.sql

---

## Installation

Clone the project

```bash
git clone https://github.com/yourusername/job-foundation.git
```

Go to backend

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

## Configure Environment

Create `.env`

```env
DATABASE_URL=mysql+pymysql://root:password@localhost:3306/job_foundation

SECRET_KEY=your_secret_key

ALGORITHM=HS256

ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

## Create Database

Import

```
database/job_foundation.sql
```

or

```sql
SOURCE database/job_foundation.sql;
```

---

## Run Server

```bash
uvicorn app:app --reload
```

Server

```
http://127.0.0.1:8000
```

Swagger UI

```
http://127.0.0.1:8000/docs
```

ReDoc

```
http://127.0.0.1:8000/redoc
```

---

## API Endpoints

### Authentication

```
POST /api/auth/register

POST /api/auth/login
```

### Users

```
GET /api/users

GET /api/users/{id}

PUT /api/users/{id}

DELETE /api/users/{id}
```

### Companies

```
GET /api/companies

POST /api/companies

PUT /api/companies/{id}

DELETE /api/companies/{id}
```

### Jobs

```
GET /api/jobs

POST /api/jobs

PUT /api/jobs/{id}

DELETE /api/jobs/{id}
```

### Applications

```
GET /api/applications

POST /api/applications

PUT /api/applications/{id}

DELETE /api/applications/{id}
```

---

## Start Development

Backend

```bash
uvicorn app:app --reload
```

Frontend

```bash
npm install

npm run dev
```

---

## Default Admin

Email

```
admin@jobfoundation.com
```

Password

```
admin123
```

(Change the password after importing the database.)

---

## License

MIT License