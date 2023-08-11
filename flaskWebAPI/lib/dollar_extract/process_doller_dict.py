def process_doller_dict(dollar_height_amount_dict):
    """return the dollar amount that has the highest score of appearing the most and or is the largest"""

    dollar_height_amount_dict = {k: v["count"] * v["elm_height"] for k, v in dollar_height_amount_dict.items()} # multiply the count of the dollar amount by the height of the element to get an intermidiate score that we can use to help determine the price on the page
    if len(dollar_height_amount_dict) > 0:
    # find the dollar amount that appears the most and or is the largest
        max_dollar_amount = max(dollar_height_amount_dict, key=dollar_height_amount_dict.get)
        return max_dollar_amount
    else:
        return None
    

       

    
