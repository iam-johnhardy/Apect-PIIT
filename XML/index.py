# import xmlschema

# schem = xmlschema.XMLSchema('index1.xsd')
# is_valid1 = schem.is_valid('index1.xml')
# print(is_valid1)

# schema = xmlschema.XMLSchema('index.xsd')   
# is_valid = schema.is_valid('index.xml')
# print(f"Is valid {is_valid}")


# web = xmlschema.to_dict('index1.xml', schema=schema)
# print(f"Web data: {web}")

# def validate_xml(xml, xsd):
#     schema = xmlschema.XMLSchema(xsd)
#     is_valid = schema.is_valid(xml)
#     return is_valid
# is_valid = validate_xml('index.xml', 'index.xsd')
# print(f"Is valid: {is_valid}")


# import json

# person = '''
# {
#     "name":"John",
#     "age":24
# }
# '''

# data = json.loads(person)

# print(data["name"])
# print(data["age"])
# print(data)


# waste =  https://6a58f25068601fc330e98ee2.mockapi.io/waste/waste



# import random

# print("I'm thinking of a number between 1 and 100.")
# secret = random.randint(1, 100)
# guess = None
# tries = 0

# while guess != secret:
#     try:
#         guess = int(input("Your guess: "))
#         tries += 1
#         if guess < secret:
#             print("Too low!")
#         elif guess > secret:
#             print("Too high!")
#     except ValueError:
#         print("Please enter a number.")

# print(f"Correct! You got it in {tries} tries.")


# def add(a, b): return a + b
# def sub(a, b): return a - b
# def mul(a, b): return a * b
# def div(a, b): return a / b if b != 0 else "Error: division by zero"

# ops = {"+": add, "-": sub, "*": mul, "/": div}

# print("Simple Calculator")
# print("Operations: +, -, *, /")

# while True:
#     try:
#         a = float(input("Enter first number: "))
#         op = input("Enter operation (or 'q' to quit): ")
#         if op == "q":
#             break
#         if op not in ops:
#             print("Invalid operation")
#             continue
#         b = float(input("Enter second number: "))
#         print(f"Result: {ops[op](a,b)}")
#     except ValueError:
#         print("Please enter valid numbers.")

# import xmlschema

# schema = xmlschema.XMLSchema("index.xsd")

# try:
#     schema.validate("index.xml")
#     print("XML is valid")
# except xmlschema.XMLSchemaValidationError as e:
#     print(e)

# import xml.etree.ElementTree as ET

# tree = ET.parse("index.xml")
# root = tree.getroot()

# print(f"Root tag: {root.tag}")
# print(root.find("html").text)

# for child in root:
#     print(child.tag)

from lxml import etree

tree = etree.parse("index.xml")
books = tree.xpath("//book[price>20]/title/text()")
print(books)  # Output: ['Harry Potter']