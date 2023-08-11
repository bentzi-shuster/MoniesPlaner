import json
from flask import Flask, jsonify, make_response, request
from playwright.sync_api import sync_playwright
from lib.dollar_extract import dollar_extract
from lib.color_print import ColorPrint
from lib.title_extract import title_extract

def create_app():
    
    app = Flask(__name__)

    @app.route('/pull_da_lever_cronk', methods=['GET'])
    def pull_da_lever_cronk():
        try:
            with sync_playwright() as p:
                param = request.args.get('page')
                browser = p.chromium.launch(headless=False)
                page = browser.new_page()
                page.set_viewport_size({"width": 1600, "height": 1200})
                page.goto(param)
                max_dollar = dollar_extract(page) # get the price on the page
                ColorPrint.print_ok(f"Max dollar amount on page is {max_dollar}")
                product_title= title_extract(page) # get the title of the product
                ColorPrint.print_ok(f"Product title is {product_title}")
                browser.close()
                values =[max_dollar, product_title]
                response_data = {'max_dollar': max_dollar, 'product_title': product_title}
                response = make_response(jsonify(response_data), 200)
                return response
        except Exception as e:
            print(e)
            error_response = {'error': 'An error occurred'}
        return make_response(jsonify(error_response), 500)

    return app