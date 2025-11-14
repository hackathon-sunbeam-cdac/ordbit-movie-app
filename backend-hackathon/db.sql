DROP DATABASE IF EXISTS moviesHackathon;

CREATE DATABASE moviesHackathon;

USE moviesHackathon;

CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    password VARCHAR(100),
    mobile VARCHAR(15),
    birth DATE
);


CREATE TABLE movies(
    id INT PRIMARY KEY,
    title VARCHAR(400),
    release_date DATE
);


CREATE TABLE reviews(
    id INT PRIMARY KEY,
    movie_id INT,
    review VARCHAR(400),
    rating INT,
    user_id INT,
    modified TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE shares(
    review_id INT,
    user_id INT,
    FOREIGN KEY (review_id) REFERENCES reviews(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id)ON DELETE CASCADE ON UPDATE CASCADE
);


-- INSERT INTO users (id, first_name, last_name, email, password, mobile, birth) VALUES
-- (1, 'Alice', 'Smith', 'alice.s@example.com', 'pwd1', '555-0101', '1985-05-15'),
-- (2, 'Bob', 'Johnson', 'bobj@example.com', 'pwd2', '555-0202', '1990-11-20'),
-- (3, 'Charlie', 'Williams', 'charliew@example.com', 'pwd3', '555-0303', '2001-01-10'),
-- (4, 'Diana', 'Brown', 'diana.b@example.com', 'pwd4', '555-0404', '1978-03-22'),
-- (5, 'Ethan', 'Jones', 'ethan.j@example.com', 'pwd5', '555-0505', '1995-09-12'),
-- (6, 'Fiona', 'Garcia', 'fiona.g@example.com', 'pwd6', '555-0606', '1988-12-01'),
-- (7, 'George', 'Miller', 'george.m@example.com', 'pwd7', '555-0707', '1975-06-30'),
-- (8, 'Hannah', 'Davis', 'hannah.d@example.com', 'pwd8', '555-0808', '2000-04-18'),
-- (9, 'Ian', 'Rodriguez', 'ian.r@example.com', 'pwd9', '555-0909', '1982-08-25'),
-- (10, 'Jenna', 'Martinez', 'jenna.m@example.com', 'pwd10', '555-1010', '1993-02-14'),
-- (11, 'Kyle', 'Hernandez', 'kyle.h@example.com', 'pwd11', '555-1111', '1970-10-05'),
-- (12, 'Laura', 'Lopez', 'laura.l@example.com', 'pwd12', '555-1212', '1998-07-07'),
-- (13, 'Michael', 'Gonzalez', 'michael.g@example.com', 'pwd13', '555-1313', '1987-01-21'),
-- (14, 'Nina', 'Wilson', 'nina.w@example.com', 'pwd14', '555-1414', '1992-04-11'),
-- (15, 'Oscar', 'Anderson', 'oscar.a@example.com', 'pwd15', '555-1515', '1980-11-29');



INSERT INTO movies (id, title, release_date) VALUES
(101, 'The Shawshank Redemption', '1994-10-14'),
(102, 'Inception', '2010-07-16'),
(103, 'Parasite', '2019-05-21'),
(104, 'The Matrix', '1999-03-31'),
(105, 'Pulp Fiction', '1994-10-14'),
(106, 'Forrest Gump', '1994-07-06'),
(107, 'Fight Club', '1999-10-15'),
(108, 'Avatar', '2009-12-18'),
(109, 'Titanic', '1997-12-19'),
(110, 'Interstellar', '2014-11-07'),
(111, 'Gladiator', '2000-05-05'),
(112, 'The Dark Knight', '2008-07-18'),
(113, 'The Silence of the Lambs', '1991-02-14'),
(114, 'Schindlers List', '1993-12-15'),
(115, 'Joker', '2019-10-04');



-- INSERT INTO reviews (id, movie_id, review, rating, user_id, modified) VALUES
-- (1, 101, 'An absolute timeless classic. The narrative arc is perfect.', 5, 1, '2025-10-26 10:00:00'),
-- (2, 102, 'Mind-bending from start to finish. Highly recommend seeing it twice.', 4, 2, '2025-10-27 11:30:00'),
-- (3, 103, 'A brilliant, tense thriller with an incredible screenplay.', 5, 3, '2025-10-28 09:15:00'),
-- (4, 101, 'Holds up even after all these years. Pure cinematic gold.', 5, 4, '2025-10-28 14:00:00'),
-- (5, 104, 'Red pill or blue pill? A revolutionary movie for its time.', 4, 5, '2025-10-29 16:20:00'),
-- (6, 105, 'Tarantino at his peak. The dialogues are iconic.', 5, 6, '2025-10-30 18:45:00'),
-- (7, 106, 'Life is like a box of chocolates. Touching and memorable.', 5, 7, '2025-10-31 20:00:00'),
-- (8, 107, 'You do not talk about fight club. Excellent plot twist.', 4, 8, '2025-11-01 21:00:00'),
-- (9, 108, 'Visually stunning, but the plot was a bit thin.', 3, 9, '2025-11-02 12:00:00'),
-- (10, 109, 'Heartbreaking and epic scale. A cinematic achievement.', 4, 10, '2025-11-03 14:00:00'),
-- (11, 110, 'Nolan does it again. Physics and family drama combined.', 5, 11, '2025-11-04 16:00:00'),
-- (12, 111, 'Are you not entertained? A powerful historical epic.', 4, 12, '2025-11-05 18:00:00'),
-- (13, 112, 'Heath Ledger’s performance made this a masterpiece.', 5, 13, '2025-11-06 20:00:00'),
-- (14, 113, 'Creepy and suspenseful. A classic thriller.', 4, 14, '2025-11-07 22:00:00'),
-- (15, 114, 'A powerful, necessary, and emotional viewing experience.', 5, 15, '2025-11-08 09:00:00'),
-- (16, 115, 'Intense character study, very dark but compelling.', 4, 1, '2025-11-09 10:00:00'),
-- (17, 102, 'The ending still confuses me, but it was a great ride.', 4, 5, '2025-11-10 11:00:00');



-- INSERT INTO shares (review_id, user_id) VALUES
-- (1, 1), -- Review 1 was authored by User 1
-- (2, 2), -- Review 2 was authored by User 2
-- (3, 3), -- Review 3 was authored by User 3
-- (4, 4), -- Review 4 was authored by User 4
-- (5, 5), -- Review 5 was authored by User 5
-- (6, 6), -- Review 6 was authored by User 6
-- (7, 7), -- Review 7 was authored by User 7
-- (8, 8), -- Review 8 was authored by User 8
-- (9, 9), -- Review 9 was authored by User 9
-- (10, 10), -- Review 10 was authored by User 10
-- (11, 11), -- Review 11 was authored by User 11
-- (12, 12), -- Review 12 was authored by User 12
-- (13, 13), -- Review 13 was authored by User 13
-- (14, 14), -- Review 14 was authored by User 14
-- (15, 15), -- Review 15 was authored by User 15
-- (16, 1), -- Review 16 was authored by User 1
-- (17, 5); -- Review 17 was authored by User 5
