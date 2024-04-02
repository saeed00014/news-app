const UNEXPECTED_ERROR = {
  code: 211,
  about: "there is an unexpected problem please check the logs for this error",
};

const DATABASE_ERROR = {
  code: 212,
  describtion:
    "database has a problem its either a syntatic problem or user has entered something invalid or it has an unknown database problem",
};

const CLIENT_REQ_ERROR = {
  code: 213,
  describtion:
    "client's request is not valid or its not expected form the server",
};

export { UNEXPECTED_ERROR, DATABASE_ERROR, CLIENT_REQ_ERROR };
