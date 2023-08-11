

def title_extract(page):
    """return the title of of the product"""

    # if there is only one h1 tag on the page, then that is the title, if there is more than one, then look at the title tag and compare it to the h1 tags and see which one is the most similar
    title = page.title()
    h1s = page.query_selector_all("h1")
    if len(h1s) == 1:
        return h1s[0].inner_text()
    else:
        for h1 in h1s:
            # if substring of the h1 is in the title, then that is the title
            if h1.inner_text() in title:
                return h1.inner_text()
        # if no h1 is in the title, then return the title but try to remove the site name from the title if it is in there
        site_name = page.url 
        site_name = site_name.split("://")[1].split("/")[0]
        if site_name in title:
            title = title.replace(site_name, "")
        return title
    



