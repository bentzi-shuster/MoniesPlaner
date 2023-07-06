from lib.color_print import ColorPrint
import sys
import argparse

def get_params():
    """get the url passed in from the command line"""
    parser = argparse.ArgumentParser(description='Get url from command line')
    parser.add_argument('--uri','--url','--URL' ,'--URI' ,type=str, help='url to get')
    parser.add_argument('--headed' , help='headed makes the browser visible', action='store_true')
    parser.add_argument('--headless' , help='headless makes the browser invisible', action='store_true')
    args = parser.parse_args()
    url = args.uri or args.url or args.URL or args.URI
    headed = args.headed
    headless = args.headless
    if url == None or url == "":
        ColorPrint.print_error("No url provided, please provide a url by adding --url=https://www.google.com to the command")
        sys.exit(1)
    if type(url) != str:
        ColorPrint.print_error("url provided is not a string")
        sys.exit(1)
    if not (url.startswith("http://") or url.startswith("https://")):
        ColorPrint.print_error("url provided is not http or https")
        sys.exit(1)
    if headless:
        headed = not headless
    return {"url":url, "headed":not headed}