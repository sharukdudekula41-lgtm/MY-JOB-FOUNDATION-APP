-- ==========================================
-- Job Foundation Database
-- ==========================================

CREATE DATABASE IF NOT EXISTS job_foundation;
USE job_foundation;

-- ==========================================
-- USERS
-- ==========================================

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role ENUM('admin','user') DEFAULT 'user',
    profile_image VARCHAR(255),
    resume VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

-- ==========================================
-- COMPANIES
-- ==========================================

CREATE TABLE companies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL UNIQUE,
    email VARCHAR(150),
    website VARCHAR(255),
    logo VARCHAR(255),
    industry VARCHAR(100),
    location VARCHAR(150),
    company_size VARCHAR(50),
    founded_year INT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);

-- ==========================================
-- JOBS
-- ==========================================

CREATE TABLE jobs (
    id INT AUTO_INCREMENT PRIMARY KEY,

    company_id INT NOT NULL,

    title VARCHAR(150) NOT NULL,

    description TEXT NOT NULL,

    requirements TEXT,

    responsibilities TEXT,

    location VARCHAR(150),

    employment_type VARCHAR(50),

    experience_level VARCHAR(50),

    salary_min DECIMAL(12,2),

    salary_max DECIMAL(12,2),

    skills TEXT,

    vacancies INT DEFAULT 1,

    status VARCHAR(20) DEFAULT 'Open',

    application_deadline DATETIME,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_company
        FOREIGN KEY(company_id)
        REFERENCES companies(id)
        ON DELETE CASCADE
);

-- ==========================================
-- APPLICATIONS
-- ==========================================

CREATE TABLE applications (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    job_id INT NOT NULL,

    resume VARCHAR(255),

    cover_letter TEXT,

    status VARCHAR(30) DEFAULT 'Pending',

    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_application_user
        FOREIGN KEY(user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_application_job
        FOREIGN KEY(job_id)
        REFERENCES jobs(id)
        ON DELETE CASCADE
);

-- ==========================================
-- SAMPLE ADMIN
-- Password: admin123
-- Replace hash with a real bcrypt hash before production.
-- ==========================================

INSERT INTO users (
    full_name,
    email,
    password,
    role
)
VALUES (
    'Administrator',
    'admin@jobfoundation.com',
    '$2b$12$ReplaceWithRealBCryptHash',
    'admin'
);

-- ==========================================
-- SAMPLE COMPANY
-- ==========================================

INSERT INTO companies (
    name,
    industry,
    location,
    website
)
VALUES (
    'OpenAI',
    'Artificial Intelligence',
    'San Francisco',
    'https://openai.com'
);

-- ==========================================
-- SAMPLE JOB
-- ==========================================

INSERT INTO jobs (
    company_id,
    title,
    description,
    location,
    employment_type,
    experience_level,
    salary_min,
    salary_max,
    vacancies,
    status
)
VALUES (
    1,
    'Python Full Stack Developer',
    'Develop and maintain web applications.',
    'Remote',
    'Full Time',
    'Fresher',
    400000,
    700000,
    5,
    'Open'
);