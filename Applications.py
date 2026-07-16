from typing import Optional
from datetime import datetime

from pydantic import BaseModel


class ApplicationBase(BaseModel):
    user_id: int
    job_id: int
    resume: Optional[str] = None
    cover_letter: Optional[str] = None
    status: str = "Pending"


class ApplicationCreate(ApplicationBase):
    pass


class ApplicationUpdate(BaseModel):
    resume: Optional[str] = None
    cover_letter: Optional[str] = None
    status: Optional[str] = None


class ApplicationResponse(ApplicationBase):
    id: int
    applied_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True