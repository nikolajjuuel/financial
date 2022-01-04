DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO users (email, password)
VALUES ('AgentSmith@thematrix.com', 'The Matrix'),
  ('Voldemort@harrypotter.com', 'Harry Potter Series'),
  ('WickedWitchoftheWest@oz.com', 'Wizard of Oz'),
  ('Thanos@villian.com', 'Avengers');