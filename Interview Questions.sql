USE job_foundation;

CREATE TABLE interview_questions (

    id INT AUTO_INCREMENT PRIMARY KEY,

    technology VARCHAR(100),

    question TEXT,

    answer TEXT,

    difficulty VARCHAR(20),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO interview_questions
(technology,question,answer,difficulty)
VALUES
('Python','What is a List?','Ordered mutable collection.','Easy'),
('SQL','Difference between DELETE and TRUNCATE?','DELETE logs row removal while TRUNCATE removes all rows quickly.','Medium'),
('React','What is JSX?','JavaScript XML syntax extension.','Easy');