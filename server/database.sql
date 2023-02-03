-- create database
CREATE DATABASE microblog;

-- install uuid to postgres
create extension if not exists "uuid-ossp";

-- create database table
CREATE TABLE posts(
  post_id uuid PRIMARY KEY DEFAULT
  uuid_generate_v4(),
  post_title VARCHAR(255) NOT NULL,
  post_body VARCHAR(255) NOT NULL,
  post_author VARCHAR(255) NOT NULL
);

-- insert sample data to table
INSERT INTO posts(
  post_title,
  post_body,
  post_author
) VALUES (
  'How to open a Kupo nut',
  'Use a Kupo nutcracker, kupo!',
  'Stiltzkin'
);
