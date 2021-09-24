\echo 'Delete and recreate pirateChicks db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE pirateChicks;
CREATE DATABASE pirateChicks;
\connect pirateChicks

\i pirateChicks-schema.sql
\i pirateChicks-seed.sql

\echo 'Delete and recreate pirate-chicks_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE pirateChicks_test;
CREATE DATABASE pirateChicks_test;
\connect pirateChicks_test

\i pirateChicks-schema.sql