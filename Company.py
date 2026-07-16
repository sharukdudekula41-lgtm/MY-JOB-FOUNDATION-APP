from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(150), nullable=False, unique=True)

    email = Column(String(150), unique=True, nullable=True)

    website = Column(String(255), nullable=True)

    logo = Column(String(255), nullable=True)

    industry = Column(String(100), nullable=True)

    location = Column(String(150), nullable=True)

    company_size = Column(String(50), nullable=True)

    founded_year = Column(Integer, nullable=True)

    description = Column(Text, nullable=True)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )

    jobs = relationship(
        "Job",
        back_populates="company",
        cascade="all, delete-orphan"
    )

    def __repr__(self):
        return f"<Company {self.name}>"