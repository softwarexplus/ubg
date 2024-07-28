import postgres from "postgres"

export const sql = postgres(process.env.URI)

/*
create table if not exists users(
    id UUID primary key default gen_random_uuid(),
    username text unique not null check (length(username) between 5 and 20),
    email text unique not null,
    password char(64) not null check (length(password) = 64)
);
*/
