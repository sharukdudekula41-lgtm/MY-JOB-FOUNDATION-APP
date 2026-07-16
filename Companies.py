from typing import Optional

from pydantic import BaseModel, Field


class CompanyBase(BaseModel):
    name: str = Field(..., min_length=2, max_length=150)
    email: Optional[str] = None
    website: Optional[str] = None
    logo: Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None
    company_size: Optional[str] = None
    founded_year: Optional[int] = None
    description: Optional[str] = None


class CompanyCreate(CompanyBase):
    pass


class CompanyUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    website: Optional[str] = None
    logo: Optional[str] = None
    industry: Optional[str] = None
    location: Optional[str] = None
    company_size: Optional[str] = None
    founded_year: Optional[int] = None
    description: Optional[str] = None


class CompanyResponse(CompanyBase):
    id: int

    class Config:
        from_attributes = True