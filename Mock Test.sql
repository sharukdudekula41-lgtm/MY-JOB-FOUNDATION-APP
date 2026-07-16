USE job_foundation;

-- Companies
INSERT INTO companies
(name,email,website,industry,location,company_size,founded_year)
VALUES
('Google','careers@google.com','https://google.com','Technology','Hyderabad','100000+',1998),
('Microsoft','jobs@microsoft.com','https://microsoft.com','Technology','Bangalore','100000+',1975),
('Amazon','careers@amazon.com','https://amazon.com','E-Commerce','Chennai','100000+',1994);

-- Jobs
INSERT INTO jobs
(company_id,title,description,location,employment_type,experience_level,salary_min,salary_max,vacancies,status)
VALUES
(1,'Frontend Developer','React Developer','Hyderabad','Full Time','Fresher',400000,700000,10,'Open'),
(2,'Backend Developer','FastAPI Developer','Bangalore','Full Time','1 Year',500000,900000,5,'Open'),
(3,'Python Full Stack Developer','Python + React','Remote','Full Time','Fresher',600000,1000000,15,'Open');