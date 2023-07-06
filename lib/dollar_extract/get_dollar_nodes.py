
from playwright.sync_api import TimeoutError as PlaywrightTimeoutError
def get_dollar_nodes(page):
    """return all the nodes with a dollar sign in it that are in the viewport"""

    # wait for the body text to load, this is important because playwright will not wait for the text to load by default and then the test will fail because it will not find any text and just return an empty list!!! 
    # page.wait_for_selector(":has-text('$'):not(script, style, comment)::before, :has-text('$'):not(script, style, comment)::after, :has-text('$'):not(script, style, comment):not(:has(*))")
    body=page.query_selector("body")
    
    try:
        body.wait_for_selector(':has-text("$"):not(script, style, comment):not(:has(*)), :has-text("$"):not(script, style, comment):before, :has-text("$"):not(script, style, comment):after',state="attached", strict=False) 
    except PlaywrightTimeoutError:
        print("no dollar signs found")
        return []
    except TimeoutError:
        print("no dollar signs found")
        return []
    except Exception as e:
        print("no dollar signs found")
        return []
    

    
    #find all text nodes with a $ in it not script, style, and comment nodes, and no other tags in it
    dollar_nodes = page.locator(':has-text("$"):not(script, style, comment):not(:has(*)), :has-text("$"):not(script, style, comment):before, :has-text("$"):not(script, style, comment):after').all()
    
    # the below bit of code removes nodes on the bottom of the page that are not in the viewport when the page is first opened
    # THIS GOES ON THE ASSUMPTION THAT THE DOLLAR SIGN IS AT THE TOP OF THE PAGE, WE CAN CHANGE THIS LATER IF WE NEED TO
    page_height = page.viewport_size["height"]
    nodes_on_the_top = []
    for node in dollar_nodes:
        node_box = node.bounding_box()
        if node_box is not None and not (node_box["y"] > page_height):
            nodes_on_the_top.append(node)

    return nodes_on_the_top