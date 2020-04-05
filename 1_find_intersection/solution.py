# Examples:
# Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
# Output: 1,4,13
# Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
# Output: 1,9,10

def findIntersection(a1, a2):
  return [value for value in a1.split(',') if value in a2.split(',')] 

input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
print(findIntersection(input[0], input[1]))