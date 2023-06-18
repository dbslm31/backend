CREATE DATABASE tgw;

-- Creation de la table menulist 
CREATE TABLE menulist (
    id SERIAL PRIMARY KEY,
    menu VARCHAR(255)
);

-- Création de la table menu
CREATE TABLE menu (
    id SERIAL PRIMARY KEY,
    menu_name VARCHAR(50),
    menulist_id INT REFERENCES menulists(id),
    recipe_id INT
);

-- Création de la table recipes
CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    recipe_name VARCHAR(255)
);


