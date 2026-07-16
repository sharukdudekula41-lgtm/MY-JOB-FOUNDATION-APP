from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from database import get_db
from models.job import Job

router = APIRouter()


@router.get("/")
def get_jobs(db: Session = Depends(get_db)):
    jobs = (
        db.query(Job)
        .order_by(Job.created_at.desc())
        .all()
    )
    return jobs


@router.get("/{job_id}")
def get_job(job_id: int, db: Session = Depends(get_db)):
    job = (
        db.query(Job)
        .filter(Job.id == job_id)
        .first()
    )

    if not job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Job not found",
        )

    return job


@router.post("/", status_code=status.HTTP_201_CREATED)
def create_job(
    data: dict,
    db: Session = Depends(get_db),
):
    job = Job(
        company_id=data["company_id"],
        title=data["title"],
        description=data["description"],
        requirements=data.get("requirements"),
        responsibilities=data.get("responsibilities"),
        location=data.get("location"),
        employment_type=data.get("employment_type", "Full Time"),
        experience_level=data.get("experience_level"),
        salary_min=data.get("salary_min"),
        salary_max=data.get("salary_max"),
        skills=data.get("skills"),
        vacancies=data.get("vacancies", 1),
        status=data.get("status", "Open"),
        application_deadline=data.get("application_deadline"),
    )

    db.add(job)
    db.commit()
    db.refresh(job)

    return {
        "message": "Job created successfully",
        "job": job,
    }


@router.put("/{job_id}")
def update_job(
    job_id: int,
    data: dict,
    db: Session = Depends(get_db),
):
    job = (
        db.query(Job)
        .filter(Job.id == job_id)
        .first()
    )

    if not job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Job not found",
        )

    for key, value in data.items():
        if hasattr(job, key):
            setattr(job, key, value)

    db.commit()
    db.refresh(job)

    return {
        "message": "Job updated successfully",
        "job": job,
    }


@router.delete("/{job_id}")
def delete_job(
    job_id: int,
    db: Session = Depends(get_db),
):
    job = (
        db.query(Job)
        .filter(Job.id == job_id)
        .first()
    )

    if not job:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Job not found",
        )

    db.delete(job)
    db.commit()

    return {
        "message": "Job deleted successfully"
    }