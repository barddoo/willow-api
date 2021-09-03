CREATE TABLE topics
(
    id           SERIAL PRIMARY KEY,
    english_name VARCHAR NOT NULL,
    klingon_name VARCHAR NOT NULL,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP
);

CREATE TABLE users
(
    id    SERIAL PRIMARY KEY,
    name  VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP
);

CREATE TABLE users_topics
(
    user_id  INT REFERENCES users (id),
    topic_id INT REFERENCES topics (id),
    "createdAt" TIMESTAMP,
    "updatedAt" TIMESTAMP,
    PRIMARY KEY (user_id, topic_id)
);

GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO root;
