from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    ForeignKey,
    DateTime,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base


class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
    )

    job_id = Column(
        Integer,
        ForeignKey("jobs.id", ondelete="CASCADE"),
        nullable=False,
    )

    resume = Column(String(255), nullable=True)

    cover_letter = Column(Text, nullable=True)

    status = Column(
        String(30),
        default="Pending",
    )

    applied_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    user = relationship(
        "User",
        back_populates="applications",
    )

    job = relationship(
        "Job",
        back_populates="applications",
    )

    def __repr__(self):
        return (
            f"<Application User={self.user_id} "
            f"Job={self.job_id} Status={self.status}>"
        )