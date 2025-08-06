SET check_function_bodies = false;
CREATE TABLE public.author (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.book (
    name text NOT NULL,
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    pages integer NOT NULL,
    author_id uuid NOT NULL
);
CREATE TABLE public.house (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    address text NOT NULL
);
CREATE TABLE public.house_person (
    house_id uuid NOT NULL,
    person_id uuid NOT NULL
);
CREATE TABLE public.person (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.house_person
    ADD CONSTRAINT house_person_pkey PRIMARY KEY (house_id, person_id);
ALTER TABLE ONLY public.house
    ADD CONSTRAINT house_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.person
    ADD CONSTRAINT person_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_author_id_fkey FOREIGN KEY (author_id) REFERENCES public.author(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.house_person
    ADD CONSTRAINT house_person_house_id_fkey FOREIGN KEY (house_id) REFERENCES public.house(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.house_person
    ADD CONSTRAINT house_person_person_id_fkey FOREIGN KEY (person_id) REFERENCES public.person(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
