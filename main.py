from playwright.sync_api import sync_playwright
from lib.get_params import get_params
from lib.dollar_extract import dollar_extract
from lib.color_print import ColorPrint
from lib.title_extract import title_extract
from lib.attr_extract import attr_extract
def pull_da_lever_cronk(): # example usage (but replace google with the URL)  -->   python main.py --url "https://www.google.com"
    params = get_params()
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=params["headed"])
        page = browser.new_page()
        page.set_viewport_size({"width": 1600, "height": 1200})
        page.goto(params["url"])
        max_dollar = dollar_extract(page) # get the price on the page
        ColorPrint.print_ok(f"Max dollar amount on page is {max_dollar}")
        product_title= title_extract(page) # get the title of the product
        ColorPrint.print_ok(f"Product title is {product_title}")
        # attrs = attr_extract(page) # get the attributes of the product
        # ColorPrint.print_ok(f"Product attributes are {attrs}")
if __name__ == "__main__":
    pull_da_lever_cronk()