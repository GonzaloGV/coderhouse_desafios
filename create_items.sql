CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    categoria VARCHAR(20) NOT NULL,
    stock INTEGER CHECK(stock > 0)
)