import re
dollar_regex = re.compile(r"\$[0-9,]+\.?[0-9]*") # regex to just get the dollar amount, if it has a $ and a number with or without a comma and with or without a decimal
def get_dollar_amounts_on_page(dollar_nodes):
    """return a dictionary of dollar amounts,the count of how many times it appears on the page, and the height of the element"""
    dollar_amounts = {}
    for node in dollar_nodes:
        text=node.text_content().strip().replace("\n","").replace("\r","").replace("\t","")



        # if there are nodes that have just a $ in it, then we need to get the parent node,and then get the text of all the children nodes and join them together
         # this is assuming that the dollar sign is in a wrapper element, and the wrapper element has the rest of the price in it
        if text == "$":
            parent_node = node.locator('xpath=..').locator('xpath=..')
            text = parent_node.text_content().strip().replace("\n","").replace("\r","").replace("\t","")

        

        # try to extract the dollar amount from the text
        dollar_amount = dollar_regex.search(text)
        if dollar_amount:
            # elm_height 
            if (node.bounding_box()) is None:
                continue
            elm_height = node.bounding_box()["height"]
            dollar_amounts[dollar_amount.group(0)] = {"count": 1, "elm_height": elm_height}
            # if the dollar amount is a repeating number, ignore it
            if len(set(dollar_amount.group(0))) == 1:
                continue
            # if the dollar amount is already in the dictionary, increment the count
            if dollar_amount.group(0) in dollar_amounts:
                dollar_amounts[dollar_amount.group(0)]["count"] += 1
            # if the dollar amount is not in the dictionary, add it to the dictionary
            else:
                dollar_amounts[dollar_amount.group(0)] = {"count": 1, "elm_height": elm_height}
    return dollar_amounts