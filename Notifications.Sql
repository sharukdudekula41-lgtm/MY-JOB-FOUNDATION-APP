USE job_foundation;

CREATE TABLE notifications (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT,

    title VARCHAR(200),

    message TEXT,

    is_read BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
);

INSERT INTO notifications
(user_id,title,message)
VALUES
(1,'Welcome','Welcome to Job Foundation'),
(1,'Interview','Your interview has been scheduled'),
(1,'Job Alert','A new Python Developer job is available');