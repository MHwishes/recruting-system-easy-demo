# create DB
DROP DATABASE IF EXISTS mahong;
CREATE DATABASE mahong;

# use DB
USE mahong;

# create paper_info_table
DROP TABLE IF EXISTS papers;
DROP TABLE IF EXISTS sections;
DROP TABLE If EXISTS definitions;

CREATE TABLE  papers (
  id int not null primary key AUTO_INCREMENT,
  name varchar(100) not null,
  description varchar(100) not null
);

CREATE TABLE sections(
  id int not null primary key AUTO_INCREMENT,
  paperId INT not null,
  type varchar(100)
);

CREATE TABLE definitions(
  id int not null primary key AUTO_INCREMENT,
  sectionId int,
  hard int,
  normal int,
  easy int
);

# insert some paper information into table
INSERT INTO papers(name,description) VALUES( 'java', 'java paper');
INSERT INTO papers(name,description) VALUES( 'react', 'react paper');
INSERT INTO papers(name,description) VALUES( 'js', 'js paper');

INSERT INTO sections(paperId,type) VALUES( 1, 'logicPuzzle');
INSERT INTO sections(paperId,type) VALUES( 2, 'logicPuzzle');
INSERT INTO sections(paperId,type) VALUES( 3, '');

INSERT INTO definitions(sectionId,hard,normal,easy) VALUES( 1,2,2,2);
INSERT INTO definitions(sectionId,hard,normal,easy) VALUES( 2,2,0,0);
INSERT INTO definitions(sectionId,hard,normal,easy) VALUES( 3,0,0,0);

# show all paper information from papers
SELECT * FROM mahong.papers;
SELECT * FROM mahong.sections;
SELECT * FROM mahong.definitions;