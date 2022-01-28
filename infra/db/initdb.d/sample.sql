DROP SCHEMA IF EXISTS sample;
CREATE SCHEMA sample;
USE one_on_one;

DROP TABLE IF EXISTS samples;

CREATE TABLE samples
(
  id    INT(10),
  title VARCHAR(100)
);

INSERT INTO samples (id, title) VALUES (1, "タイトル1");
INSERT INTO samples (id, title) VALUES (2, "タイトル2");