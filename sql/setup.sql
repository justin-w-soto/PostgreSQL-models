DROP TABLE IF EXISTS character;
DROP TABLE IF EXISTS location;
DROP TABLE IF EXISTS episode;
DROP TABLE IF EXISTS airdate;
DROP TABLE IF EXISTS image;


CREATE TABLE character (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
     name TEXT NOT NULL
);

CREATE TABLE location (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    location_name TEXT NOT NULL
);

CREATE TABLE episode (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    episode_name TEXT NOT NULL
);

CREATE TABLE airdate (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    air_date TEXT NOT NULL
);

CREATE TABLE image(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    url TEXT NOT NULL
);
