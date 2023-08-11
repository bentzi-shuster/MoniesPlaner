import json
from playwright.sync_api import Page
"""
{
        "type": "Number",
        "goal": "high",
        "values": [
            "mpg",
            "miles per gallon",
            "miles/gallon",
            "m/g"
        ]
    },
"""
def attr_extract(page):
    # read the attr.json file 
    with open('lib/attr_extract/attr.json') as f:
        data = json.load(f)
    for key in data:
        # get the values from the json file
        values = key["values"]
        # get the type from the json file
        type = key["type"]
        # get the goal from the json file
        goal = key["goal"]
        # get the elements on the page that match the values
        elementsarray = []
        for value in values:
            elements = page.locator(f':has-text("{value}"):not(script, style, comment):not(:has(*)), :has-text("{value}"):not(script, style, comment):before, :has-text("{value}"):not(script, style, comment):after').all()
            elementsarray.append(elements)
        print(elementsarray)
        attrJson = json.dumps(elementsarray)
        return attrJson
            

    
