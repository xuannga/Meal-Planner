INSERT INTO cupboard (id,name,quantity,UOM,user_id,isRefrig)
VALUES (1,"chicken",2,"pieces",1,true),
(2,"broccoli",2,"lbs",1,true),
(3,"penne",2,"box",1,false);
       
INSERT INTO ingredients(meal_id,cupboard_id,quantity)
VALUES (1,23,2),(1,19,1),(1,18,1);
(2,13,1,2021-08-23  ),(2,17,1,2021-08-23  ),(2,10,1,2021-08-23  ),(2,12,1,2021-08-23  ),
(3,22,1,2021-08-23  ),(3,21,2,2021-08-23  )

INSERT INTO Ingredients (meal_id,cupboard_id,quantity)
VALUES (1,19,1),(1,18,1),
(2,12,1),(2,17,1),(2,10,1),
(3,22,1),(3,21,2);