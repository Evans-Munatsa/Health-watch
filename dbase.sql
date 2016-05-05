create table user (
  user_id integer primary key,
  name varchar(40) not null
);

create table category (
  category_id integer primary key,
  category varchar(40) not null
);

create table question (
  question_id integer primary key,
  question text,
  asked_by_id integer not null,
  category_id integer not null
  -- foreign key asked_by_id references user(user_id),
  -- foreign key category_id references categor(category_id)
);

create table answer (
  answers_id     integer not null,
  answered_by_id integer not null,
  answer text,
  primary key (answers_id, answered_by_id) -- we allow one answer per person for a question
  -- foreign key answers_id references question(question_id),
  -- foreign key answered_by_id references user(user_id)
);
