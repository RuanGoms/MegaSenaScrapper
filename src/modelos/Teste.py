import random

List = [1, 2, 3, 4, 1, 2, 12, 13, 9]

Correct_list = set(List)
Correct_list = list(Correct_list)

my_list = []

for i in Correct_list:
    my_list.append(random.sample(Correct_list, 5))

print(Correct_list)
print(my_list)