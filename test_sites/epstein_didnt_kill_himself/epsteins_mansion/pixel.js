var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var A9PIXEL = (function(window,document)
{
    if (A9PIXEL)
    {
        A9PIXEL.fireA9Pixel();
        return A9PIXEL;
    }
    var tracker = {
        "protocol": "https",
        "host": "s.tribalfusion.com",
        prosessQue: function()
        {
            var a9;
            for (i = 0; i < a9PixelQue.length; i++)
            {
                a9 = a9PixelQue[i];
                if (a9.status !== "done")
                { 
                    this.firePixel(a9);
                    a9.status = "done";
                }
            }
        },
        firePixel: function(tag_params)
        {
            var obj = utility.mergeParam(tag_params, a9Page.pageParams);
            var url = this.getPixelUrl(obj);
            this.fireImagePixel(url);
        },
        fireImagePixel: function(url)
        {
            var image = document.createElement('img');
            image.src = url;
        },

        getPixelUrl: function(pixel_json)
        {
            var type, queryParam, url;
            type = a9.eventType || "visitor";
            queryParam = JSON.stringify(pixel_json);
            url = "//" + this.host + "/" + type + "?" + encodeURIComponent(queryParam);
            return url;
        }
    };
    var utility = {
        sliceURL: function(obj)
        {
            if (obj)
            {
                return (obj.substring(0, 512));
            }
        },
        loadJSFile: function(url)
        {
            var script, scriptTag, url;
            script = document.createElement('script');
            scriptTag = document.getElementsByTagName("script")[0];
            script.src = url;
            scriptTag.parentNode.insertBefore(script, scriptTag);
        },
        mergeParam: function(tag_params, page_params)
        {
            var result = {};
            for (var key in page_params)
            {
                if (page_params.hasOwnProperty(key))
                {
                    result[key] = page_params[key];
                }
            }
            for (var key in tag_params)
            {
                if (tag_params.hasOwnProperty(key))
                {
                    result[key] = tag_params[key];
                }
            }
            return result;
        },
        getRefURL: function()
        {
            var refURL = (this.getPageURL() !== document.referrer) ? document.referrer : undefined;
            return refURL;
        },
        getPageURL: function()
        {
            var pageURL;
            try
            {
                pageURL = window.top.location.href;
                if (pageURL === undefined)
                {
                    throw ("Error");
                }
            }
            catch (exception)
            {
                pageURL = document.referrer;
            }
            return pageURL;
        },
        buildParams: function(obj, param, key, value)
        {
            if (value)
            {
                obj[param][key] = value;
            }
        },
        makeTagHash: function()
        {
            var tagHash = 0;
            for (var pn in navigator)
            {
                var navElem = navigator[pn];
                var navType = this.objectType(navElem);
                if (navType === 'string')
                    tagHash = this.hash(pn, '' + navElem, tagHash);
                else if (navType === 'array')
                {
                    for (var i = 0; i < navElem.length; i++)
                    {
                        var p = navElem[i];
                        tagHash = this.hash(i, p.name + p.description, tagHash);
                    }
                }
            }
            return tagHash;
        },
        hash: function(name, data, hashVal)
        {
            var n = 0;
            data = this.getData(name, data);
            if (data)
            {
                for (var i = 0; i < data.length; i++)
                {
                    n = ((n * 997) + data.charCodeAt(i)) & 0x7fffffff;

                }
            }
            hashVal += n;
            return hashVal;
        },

        getData: function(name, data)
        {
            if (name === "appVersion" || name === 'userAgent')
            {
                if (data.indexOf("Trident/4.0") > 0)
                {
                    data = data.replace(/MSIE \d+.0/, 'MSIE 8.0');
                }
                if (data.indexOf("Trident/5.0") > 0)
                {
                    data = data.replace(/MSIE \d+.0/, 'MSIE 9.0');
                }
            }
            else
            {
                if ((name === 'constructor') ||
                    (name === 'plugins') ||
                    (name === undefined))
                {
                    data = null;
                }
            }
            return data;
        },

        objectType: function(o)
        {
            try
            {
                switch (typeof(o))
                {
                    case 'object':
                        if (o === null) return 'null';
                        if (o.constructor === Array) return 'array';
                        if (o.constructor === Date) return 'date';
                        return 'object';
                    case 'function':
                        if (o.constructor === RegExp) return 'regex';
                        return 'function';
                    default:
                        return typeof(o);
                }
            }
            catch (e)
            {
                return 'undefined';
            }
        }
    };
    var a9Page = {
        tagKey: "1148227074",
        version: "1.0",
        displayAdVersion: 0.8,
        tagHash: utility.makeTagHash(),
        pageParams: "",
        init: function()
        {
            if(a9 && typeof a9PixelQue === "undefined"){
                this.sync = true;
            }
            if(this.sync === true )
            {
               (window['a9PixelQue'] = (window['a9PixelQue'] || [] )).push(a9);

            }
            if (!this.getTkey() && !this.expoDisplayAd)
            {
                utility.loadJSFile(this.fetchDisplayAdJS());
                this.expoDisplayAd = "fetching";
                return;
            }
            else if (this.getTkey())
            {
                this.buildPageParam();
                if (a9PixelQue)
                {
                    tracker.prosessQue();
                }
            }
        },
        fetchDisplayAdJS: function()
        {
            var displayAdURL = "//web.archive.org/web/20200819064957/https://s.tribalfusion.com/displayAd.js?dver=" + this.displayAdVersion + "&th=" + this.tagHash;
            return displayAdURL;
        },
        getTkey: function()
        {
            return this.tKey;
        },
        setTkey: function(tkey)
        {
            this.tKey = tkey;
        },
        buildPageParam: function()
        {
            if (this.pageParams == "")
            {
                this.pageParams = {};
                utility.buildParams(this, "pageParams", "tagKey", this.tagKey);
                utility.buildParams(this, "pageParams", "th", this.tagHash);
                utility.buildParams(this, "pageParams", "version", this.version);
                utility.buildParams(this, "pageParams", "tKey", this.tKey);
                utility.buildParams(this, "pageParams", "url", utility.sliceURL(utility.getPageURL()));
                utility.buildParams(this, "pageParams", "rurl", utility.sliceURL(utility.getRefURL()));
            }
        }
    };
    var a9Pixel = {
        setTKey: function(key)
        {
            a9Page.setTkey(key);
        },
        fireA9Pixel: function()
        {
            a9Page.init();
        }
    }
    a9Page.init();
    return a9Pixel;
})(window, document);


}
/*
     FILE ARCHIVED ON 06:49:57 Aug 19, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:40:47 Jun 28, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 170.739
  exclusion.robots: 0.151
  exclusion.robots.policy: 0.137
  cdx.remote: 0.092
  esindex: 0.014
  LoadShardBlock: 53.615 (3)
  PetaboxLoader3.datanode: 114.445 (5)
  load_resource: 137.508 (2)
  PetaboxLoader3.resolve: 50.867 (2)
*/