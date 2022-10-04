CREATE DATABASE restaurants;

    CREATE TABLE cotegories(
        cotegory_id UUID default uuid_generate_v4() NOT NULL PRIMARY KEY,
        cotegory_name VARCHAR(16) NOT NULL,
        cotegory_img TEXT,
        created_at TIMESTAMP DEFAULT current_timestamp
    );

CREATE TABLE restaurants(
    restaurant_id UUID default uuid_generate_v4() NOT NULL PRIMARY KEY,
    restaurant_name VARCHAR(32) NOT NULL,
    restaurant_img TEXT NOT NULL,
    restaurant_reyting TEXT NOT NULL,
    restaurant_created_at TIMESTAMP DEFAULT current_timestamp,
    cotegory_id UUID REFERENCES cotegories(cotegory_id) NOT NULL
);

CREATE TABLE products(
    product_id UUID default uuid_generate_v4() NOT NULL PRIMARY KEY,
    product_name VARCHAR(16) NOT NULL,
    product_desc TEXT NOT NULL,
    product_netto VARCHAR(16),
    product_price INT NOT NULL,
    product_count INT NOT NULL,
    product_img TEXT NOT NULL,
    product_created_at TIMESTAMP DEFAULT current_timestamp,
    restaurant_id UUID NOT NULL, FOREIGN KEY(restaurant_id) REFERENCES restaurants(restaurant_id) ON DELETE CASCADE
);

    CREATE TABLE users(
        user_id UUID default uuid_generate_v4() NOT NULL PRIMARY KEY,
        user_name VARCHAR(16) NOT NULL,
        user_phone VARCHAR(16) NOT NULL,
        user_password TEXT NOT NULL,
        user_date TIMESTAMP DEFAULT current_timestamp
    );

CREATE TABLE orders(
    order_id UUID default uuid_generate_v4() NOT NULL,
    order_name TEXT NOT NULL,
    order_address TEXT NOT NULL,
    order_creayed_at TIMESTAMP DEFAULT current_timestamp,
    product_id UUID NOT NULL, 
    FOREIGN KEY(product_id) REFERENCES products(product_id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(user_id) NOT NULL
)

INSERT INTO cotegories (cotegory_name) VALUES ('ХОЛОДНЫЕ ЗАКУСКИ');
INSERT INTO restaurants (restaurant_name, restaurant_img, restaurant_reyting, cotegory_id) VALUES ('Evos', 'dsda', '2', '29c8be5d-2422-4c5a-83bb-29372555d594');
INSERT INTO products (product_name, product_desc, product_netto, product_price, product_count,product_img, restaurant_id) VALUES ('Ягненок', 'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек','210', 20000,0,'ewew','24629330-8f30-4249-a96f-433f58d4181c' );
INSERT INTO users (user_name, user_phone, user_password) VALUES ('Toshmat', '998910753757', digest('123', 'sha256'));
INSERT INTO orders (order_name, order_address, product_id, user_id) VALUES ('Ягненок', 'xadra', '3ab3d3ef-990e-483d-be3f-882f18c94a5b', 'c9286f6b-9fba-4779-98a1-854ddb9f9f61');