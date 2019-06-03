BEGIN TRANSACTION;

/**
 * Accounts table
 */

CREATE TABLE accounts (
  id integer PRIMARY KEY,
  name text UNIQUE NOT NULL,
  budget numeric NOT NULL
);

COMMIT TRANSACTION;
