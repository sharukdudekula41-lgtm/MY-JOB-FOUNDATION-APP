from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Base, engine

from routes.auth import router as auth_router
from routes.users import router as users_router
from routes.jobs import router as jobs_router
from routes.companies import router as companies_router
from routes.applications import router as applications_router

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Job Foundation API",
    version="1.0.0",
    description="Backend API for Job Foundation"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router, prefix="/api/auth", tags=["Authentication"])
app.include_router(users_router, prefix="/api/users", tags=["Users"])
app.include_router(jobs_router, prefix="/api/jobs", tags=["Jobs"])
app.include_router(companies_router, prefix="/api/companies", tags=["Companies"])
app.include_router(applications_router, prefix="/api/applications", tags=["Applications"])


@app.get("/")
def root():
    return {
        "message": "Welcome to Job Foundation API",
        "status": "Running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )