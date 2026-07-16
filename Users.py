from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class UserBase(BaseModel):
    full_name: str = Field(..., min_length=3, max_length=150)
    email: EmailStr
    phone: Optional[str] = None
    role: str = "user"


class UserCreate(UserBase):
    password: str = Field(..., min_length=6)


class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    phone: Optional[str] = None
    profile_image: Optional[str] = None
    resume: Optional[str] = None
    is_active: Optional[bool] = None


class UserResponse(UserBase):
    id: int
    profile_image: Optional[str] = None
    resume: Optional[str] = None
    is_active: bool

    class Config:
        from_attributes = True