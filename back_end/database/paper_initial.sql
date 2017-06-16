# create DB
DROP DATABASE IF EXISTS mahong;
CREATE DATABASE mahong;

# use DB
USE mahong;

# create paper_info_table
DROP TABLE IF EXISTS  papers;
CREATE TABLE  papers (
    id int not null primary key AUTO_INCREMENT,
    name varchar(100) not null,
    description varchar(100) not null
);

# insert some paper information into table
INSERT INTO papers(name, description) VALUES( 'Bulma', 'female');
INSERT INTO papers(name, description) VALUES( 'Vegeta', 'male');
INSERT INTO papers(name, description) VALUES( 'ChiChi', 'female');
INSERT INTO papers(name, description) VALUES( 'Goku', 'male');

# show all paper information from papers
SELECT * FROM mahong.papers;