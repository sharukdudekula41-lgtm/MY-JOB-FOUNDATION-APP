from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # Database
    DATABASE_URL: str = (
        "mysql+pymysql://root:password@localhost:3306/job_foundation"
    )

    # JWT
    SECRET_KEY: str = "your_super_secret_key_change_this"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # Application
    APP_NAME: str = "Job Foundation API"
    DEBUG: bool = True

    # CORS
    FRONTEND_URL: str = "http://localhost:5173"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()