SET check_function_bodies = false;
CREATE TABLE public.product (
    id integer NOT NULL,
    productname text,
    amount integer NOT NULL,
    imagelist text[] NOT NULL,
    price money NOT NULL,
    create_at timestamp with time zone NOT NULL,
    update_at timestamp with time zone NOT NULL,
    userid integer NOT NULL
);
CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
CREATE TABLE public."user" (
    id integer NOT NULL,
    username text,
    identification text,
    photo text,
    identificationtype integer,
    create_at timestamp with time zone NOT NULL,
    update_at timestamp with time zone NOT NULL
);
CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_userid_fkey FOREIGN KEY (userid) REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;