INSERT INTO categories (name, description) 
VALUES ('Planters'),
       ('Linens'),
       ('Halloween'),
       ('Kitsch'),
       ('Figurines'),
       ('Glass'),
       ('Mugs'),
       ('Jewelry'),
       ('Tins'),
       ('Vintage Plastic'),
       ('Pyrex'),
       ('Salt & Pepper Shakers'),
       ('Books'),
       ('Wall Art');

INSERT INTO products (product_name, description, product_image, quantity, primary_color, era, height, width, date_added, price, category_name)
VALUES ('Vintage Dan River Floral Pillowcase Pair', 
        'This is a set of 2 vintage standard pillowcases by Dan River. They are a 50/50 poly cotton blend and have a lovely bold floral design.', 
        'great', null, 1, null, '1970s', null, null, GETDATE(), 14.00, 'Linens'),
       ('Vintage Handmade Macrame Owl Wall Hanging',
        'This is a handmade vintage macrame owl wall hanging. It has wooden bead eyes and is hung from 2 sticks.',
        'good', null, 1, 'brown', '1970s', 36, null, GETDATE(), 24.00, 'Wall Art'),
       ('Vintage Wooden Carved Owl Figure',
        'This is a vintage naturalistically carved owl figure from 1986. It is signed near the bottom and has a note on the bottom from the original owner that says the owl was purchased in the Smokies (the Great Smoky Mountains).',
        'good', null, 1, 'brown', '1980s', null, null, GETDATE(), 8.00, 'Figurines'),
       ('Vintage Halloween Ceramic Tree Candleholder',
         'This is a vintage Halloween ceramic candleholder. It is a spooky tree with a face, accompanied by a jack o lantern and a trick or treating ghost.',
         'good', null, 1, 'brown', null, 7, 6, GETDATE(), 16.00, 'Halloween'),
       ('Vintage Halloween Ceramic Trick or Treat Bag',
        'This is a vintage Halloween ceramic treat bag, made to look like a trick or treat candy sack! It is decorated with a witch,a black cat, a jack o lantern, and a ghost.',
        'good', null, 1, 'brown', null, null, null, GETDATE(), 14.00, 'Halloween'),
       ('Vintage Enesco Lady Head Vase, Girl with Cat, Made in Japan',
        'This is a vintage midcentury ceramic lady head vase made by Enesco in Japan. This vase or planter depicts a young girl holding a white cat.',
        'good', null, 1, 'pink', 'Midcentury', null, null, GETDATE(), 48.00, 'Kitsch')








