### User Story
​
As a user of food
I WANT TO plan meals 
SO that I can eat and save time and money
​
Save time => excess shopping trips, using what you have, grouping cooking sessions to cover multiple meals
​
AS a home cook
I WANT TO organize my shopping experience
SO that i don't by excess food and scrapping excess
​
create new meals
add ingredients to cupboard
​
### Models
​
# User
- id  
- name
- email
- password
​
# cupboard
- id
- fk (belongs to User)
- food item (e.g. chicken, rice, brocc...)
- quantity of food item (see unit of measure)
- unit of measure (cups, lbs, etc.)
- expiration date (not MVP)
​
# Meals
- id
- name
​
​
# Ingredients (Pivot table)
- meal (belongs to Meal)
- food item (belongs to Cupboard)
- quantity by food item - user provided
Collapse




:pepesaber:
1



Send a message to project2










