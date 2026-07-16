from typing import Optional
from datetime import datetime

from pydantic import BaseModel, Field


class JobBase(BaseModel):
    company_id: int
    title: str = Field(..., min_length=3, max_length=150)
    description: str
    requirements: Optional[str] = None
    responsibilities: Optional[str] = None
    location: Optional[str] = None
    employment_type: str = "Full Time"
    experience_level: Optional[str] = None
    salary_min: Optional[float] = None
    salary_max: Optional[float] = None
    skills: Optional[str] = None
    vacancies: int = 1
    status: str = "Open"
    application_deadline: Optional[datetime] = None


class JobCreate(JobBase):
    pass


class JobUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    requirements: Optional[str] = None
    responsibilities: Optional[str] = None
    location: Optional[str] = None
    employment_type: Optional[str] = None
    experience_level: Optional[str] = None
    salary_min: Optional[float] = None
    salary_max: Optional[float] = None
    skills: Optional[str] = None
    vacancies: Optional[int] = None
    status: Optional[str] = None
    application_deadline: Optional[datetime] = None


class JobResponse(JobBase):
    id: int
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True