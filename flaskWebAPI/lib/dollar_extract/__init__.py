from lib.dollar_extract.get_dollar_nodes import get_dollar_nodes
from lib.dollar_extract.get_dollar_amounts_on_page import get_dollar_amounts_on_page
from lib.dollar_extract.process_doller_dict import process_doller_dict
def dollar_extract(page):
        """return the dollar amount that has the highest score of appearing the most and or has the largest height"""

        dollar_nodes=get_dollar_nodes(page) # get all the nodes with a dollar sign in it that are in the viewport
        dollar_height_amount_dict=get_dollar_amounts_on_page(dollar_nodes) # return a dictionary of dollar amounts,the count of how many times it appears on the page, and the height of the element
        max_dollar = process_doller_dict(dollar_height_amount_dict) # return the dollar amount that has the highest score of appearing the most and or is the largest
        return max_dollar