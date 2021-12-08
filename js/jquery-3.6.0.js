(function(a, b) { "use strict"; if (typeof module === "object" && typeof module.exports === "object") { module.exports = a.document ? b(a, true) : function(w) { if (!w.document) { throw new Error("jQuery requires a window with a document"); } return b(w) } } else { b(a) } })(typeof window !== "undefined" ? window : this, function(o, q) { "use strict"; var r = []; var u = Object.getPrototypeOf; var w = r.slice; var x = r.flat ? function(a) { return r.flat.call(a) } : function(a) { return r.concat.apply([], a) }; var y = r.push; var z = r.indexOf; var A = {}; var toString = A.toString; var B = A.hasOwnProperty; var C = B.toString; var D = C.call(Object); var E = {}; var F = function F(a) { return typeof a === "function" && typeof a.nodeType !== "number" && typeof a.item !== "function" }; var G = function G(a) { return a != null && a === a.window }; var H = o.document; var I = { type: true, src: true, nonce: true, noModule: true };

    function DOMEval(a, b, c) { c = c || H; var i, val, script = c.createElement("script");
        script.text = a; if (b) { for (i in I) { val = b[i] || b.getAttribute && b.getAttribute(i); if (val) { script.setAttribute(i, val) } } }
        c.head.appendChild(script).parentNode.removeChild(script) }

    function toType(a) { if (a == null) { return a + "" } return typeof a === "object" || typeof a === "function" ? A[toString.call(a)] || "object" : typeof a } var J = "3.6.0",
        jQuery = function(a, b) { return new jQuery.fn.init(a, b) };
    jQuery.fn = jQuery.prototype = { jquery: J, constructor: jQuery, length: 0, toArray: function() { return w.call(this) }, get: function(a) { if (a == null) { return w.call(this) } return a < 0 ? this[a + this.length] : this[a] }, pushStack: function(a) { var b = jQuery.merge(this.constructor(), a);
            b.prevObject = this; return b }, each: function(a) { return jQuery.each(this, a) }, map: function(b) { return this.pushStack(jQuery.map(this, function(a, i) { return b.call(a, i, a) })) }, slice: function() { return this.pushStack(w.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, even: function() { return this.pushStack(jQuery.grep(this, function(a, i) { return (i + 1) % 2 })) }, odd: function() { return this.pushStack(jQuery.grep(this, function(a, i) { return i % 2 })) }, eq: function(i) { var a = this.length,
                j = +i + (i < 0 ? a : 0); return this.pushStack(j >= 0 && j < a ? [this[j]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: y, sort: r.sort, splice: r.splice };
    jQuery.extend = jQuery.fn.extend = function() { var a, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false; if (typeof target === "boolean") { deep = target;
            target = arguments[i] || {};
            i++ } if (typeof target !== "object" && !F(target)) { target = {} } if (i === length) { target = this;
            i-- } for (; i < length; i++) { if ((a = arguments[i]) != null) { for (name in a) { copy = a[name]; if (name === "__proto__" || target === copy) { continue } if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) { src = target[name]; if (copyIsArray && !Array.isArray(src)) { clone = [] } else if (!copyIsArray && !jQuery.isPlainObject(src)) { clone = {} } else { clone = src }
                        copyIsArray = false;
                        target[name] = jQuery.extend(deep, clone, copy) } else if (copy !== undefined) { target[name] = copy } } } } return target };
    jQuery.extend({ expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""), isReady: true, error: function(a) { throw new Error(a); }, noop: function() {}, isPlainObject: function(a) { var b, Ctor; if (!a || toString.call(a) !== "[object Object]") { return false }
            b = u(a); if (!b) { return true }
            Ctor = B.call(b, "constructor") && b.constructor; return typeof Ctor === "function" && C.call(Ctor) === D }, isEmptyObject: function(a) { var b; for (b in a) { return false } return true }, globalEval: function(a, b, c) { DOMEval(a, { nonce: b && b.nonce }, c) }, each: function(a, b) { var c, i = 0; if (isArrayLike(a)) { c = a.length; for (; i < c; i++) { if (b.call(a[i], i, a[i]) === false) { break } } } else { for (i in a) { if (b.call(a[i], i, a[i]) === false) { break } } } return a }, makeArray: function(a, b) { var c = b || []; if (a != null) { if (isArrayLike(Object(a))) { jQuery.merge(c, typeof a === "string" ? [a] : a) } else { y.call(c, a) } } return c }, inArray: function(a, b, i) { return b == null ? -1 : z.call(b, a, i) }, merge: function(a, b) { var c = +b.length,
                j = 0,
                i = a.length; for (; j < c; j++) { a[i++] = b[j] }
            a.length = i; return a }, grep: function(a, b, c) { var d, matches = [],
                i = 0,
                length = a.length,
                callbackExpect = !c; for (; i < length; i++) { d = !b(a[i], i); if (d !== callbackExpect) { matches.push(a[i]) } } return matches }, map: function(a, b, c) { var d, value, i = 0,
                ret = []; if (isArrayLike(a)) { d = a.length; for (; i < d; i++) { value = b(a[i], i, c); if (value != null) { ret.push(value) } } } else { for (i in a) { value = b(a[i], i, c); if (value != null) { ret.push(value) } } } return x(ret) }, guid: 1, support: E }); if (typeof Symbol === "function") { jQuery.fn[Symbol.iterator] = r[Symbol.iterator] }
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { A["[object " + b + "]"] = b.toLowerCase() });

    function isArrayLike(a) { var b = !!a && "length" in a && a.length,
            type = toType(a); if (F(a) || G(a)) { return false } return type === "array" || b === 0 || typeof b === "number" && b > 0 && (b - 1) in a } var K = (function(n) { var i, E, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, H, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(),
            preferredDoc = n.document,
            dirruns = 0,
            done = 0,
            classCache = createCache(),
            tokenCache = createCache(),
            compilerCache = createCache(),
            nonnativeSelectorCache = createCache(),
            sortOrder = function(a, b) { if (a === b) { hasDuplicate = true } return 0 },
            B = ({}).hasOwnProperty,
            r = [],
            pop = r.pop,
            pushNative = r.push,
            y = r.push,
            w = r.slice,
            z = function(a, b) { var i = 0,
                    len = a.length; for (; i < len; i++) { if (a[i] === b) { return i } } return -1 },
            booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
            whitespace = "[\\x20\\t\\r\\n\\f]",
            identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
            pseudos = ":(" + identifier + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
            rwhitespace = new RegExp(whitespace + "+", "g"),
            bH = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
            rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
            rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
            rdescend = new RegExp(whitespace + "|>"),
            rpseudo = new RegExp(pseudos),
            ridentifier = new RegExp("^" + identifier + "$"),
            matchExpr = { "ID": new RegExp("^#(" + identifier + ")"), "CLASS": new RegExp("^\\.(" + identifier + ")"), "TAG": new RegExp("^(" + identifier + "|[*])"), "ATTR": new RegExp("^" + attributes), "PSEUDO": new RegExp("^" + pseudos), "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"), "bool": new RegExp("^(?:" + booleans + ")$", "i"), "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i") },
            bl = /HTML$/i,
            rinputs = /^(?:input|select|textarea|button)$/i,
            rheader = /^h\d$/i,
            rnative = /^[^{]+\{\s*\[native \w/,
            rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            rsibling = /[+~]/,
            runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
            funescape = function(a, b) { var c = "0x" + a.slice(1) - 0x10000; return b ? b : c < 0 ? String.fromCharCode(c + 0x10000) : String.fromCharCode(c >> 10 | 0xD800, c & 0x3FF | 0xDC00) },
            rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            fcssescape = function(a, b) { if (b) { if (a === "\0") { return "\uFFFD" } return a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " } return "\\" + a },
            unloadHandler = function() { setDocument() },
            inDisabledFieldset = addCombinator(function(a) { return a.disabled === true && a.nodeName.toLowerCase() === "fieldset" }, { dir: "parentNode", next: "legend" }); try { y.apply((r = w.call(preferredDoc.childNodes)), preferredDoc.childNodes);
            r[preferredDoc.childNodes.length].nodeType } catch (e) { y = { apply: r.length ? function(a, b) { pushNative.apply(a, w.call(b)) } : function(a, b) { var j = a.length,
                        i = 0; while ((a[j++] = b[i++])) {}
                    a.length = j - 1 } } }

        function K(a, b, c, d) { var m, i, elem, nid, match, groups, newSelector, newContext = b && b.ownerDocument,
                nodeType = b ? b.nodeType : 9;
            c = c || []; if (typeof a !== "string" || !a || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) { return c } if (!d) { setDocument(b);
                b = b || H; if (documentIsHTML) { if (nodeType !== 11 && (match = rquickExpr.exec(a))) { if ((m = match[1])) { if (nodeType === 9) { if ((elem = b.getElementById(m))) { if (elem.id === m) { c.push(elem); return c } } else { return c } } else { if (newContext && (elem = newContext.getElementById(m)) && contains(b, elem) && elem.id === m) { c.push(elem); return c } } } else if (match[2]) { y.apply(c, b.getElementsByTagName(a)); return c } else if ((m = match[3]) && E.getElementsByClassName && b.getElementsByClassName) { y.apply(c, b.getElementsByClassName(m)); return c } } if (E.qsa && !nonnativeSelectorCache[a + " "] && (!rbuggyQSA || !rbuggyQSA.test(a)) && (nodeType !== 1 || b.nodeName.toLowerCase() !== "object")) { newSelector = a;
                        newContext = b; if (nodeType === 1 && (rdescend.test(a) || rcombinators.test(a))) { newContext = rsibling.test(a) && testContext(b.parentNode) || b; if (newContext !== b || !E.scope) { if ((nid = b.getAttribute("id"))) { nid = nid.replace(rcssescape, fcssescape) } else { b.setAttribute("id", (nid = expando)) } }
                            groups = tokenize(a);
                            i = groups.length; while (i--) { groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]) }
                            newSelector = groups.join(",") } try { y.apply(c, newContext.querySelectorAll(newSelector)); return c } catch (qsaError) { nonnativeSelectorCache(a, true) } finally { if (nid === expando) { b.removeAttribute("id") } } } } } return select(a.replace(bH, "$1"), b, c, d) }

        function createCache() { var c = [];

            function cache(a, b) { if (c.push(a + " ") > Expr.cacheLength) { delete cache[c.shift()] } return (cache[a + " "] = b) } return cache }

        function markFunction(a) { a[expando] = true; return a }

        function assert(a) { var b = H.createElement("fieldset"); try { return !!a(b) } catch (e) { return false } finally { if (b.parentNode) { b.parentNode.removeChild(b) }
                b = null } }

        function addHandle(a, b) { var c = a.split("|"),
                i = c.length; while (i--) { Expr.attrHandle[c[i]] = b } }

        function siblingCheck(a, b) { var c = b && a,
                diff = c && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; if (diff) { return diff } if (c) { while ((c = c.nextSibling)) { if (c === b) { return -1 } } } return a ? 1 : -1 }

        function createInputPseudo(c) { return function(a) { var b = a.nodeName.toLowerCase(); return b === "input" && a.type === c } }

        function createButtonPseudo(c) { return function(a) { var b = a.nodeName.toLowerCase(); return (b === "input" || b === "button") && a.type === c } }

        function createDisabledPseudo(b) { return function(a) { if ("form" in a) { if (a.parentNode && a.disabled === false) { if ("label" in a) { if ("label" in a.parentNode) { return a.parentNode.disabled === b } else { return a.disabled === b } } return a.isDisabled === b || a.isDisabled !== !b && inDisabledFieldset(a) === b } return a.disabled === b } else if ("label" in a) { return a.disabled === b } return false } }

        function createPositionalPseudo(d) { return markFunction(function(c) { c = +c; return markFunction(function(a, b) { var j, matchIndexes = d([], a.length, c),
                        i = matchIndexes.length; while (i--) { if (a[(j = matchIndexes[i])]) { a[j] = !(b[j] = a[j]) } } }) }) }

        function testContext(a) { return a && typeof a.getElementsByTagName !== "undefined" && a }
        E = K.support = {};
        isXML = K.isXML = function(a) { var b = a && a.namespaceURI,
                docElem = a && (a.ownerDocument || a).documentElement; return !bl.test(b || docElem && docElem.nodeName || "HTML") };
        setDocument = K.setDocument = function(e) { var f, subWindow, doc = e ? e.ownerDocument || e : preferredDoc; if (doc == H || doc.nodeType !== 9 || !doc.documentElement) { return H }
            H = doc;
            docElem = H.documentElement;
            documentIsHTML = !isXML(H); if (preferredDoc != H && (subWindow = H.defaultView) && subWindow.top !== subWindow) { if (subWindow.addEventListener) { subWindow.addEventListener("unload", unloadHandler, false) } else if (subWindow.attachEvent) { subWindow.attachEvent("onunload", unloadHandler) } }
            E.scope = assert(function(a) { docElem.appendChild(a).appendChild(H.createElement("div")); return typeof a.querySelectorAll !== "undefined" && !a.querySelectorAll(":scope fieldset div").length });
            E.attributes = assert(function(a) { a.className = "i"; return !a.getAttribute("className") });
            E.getElementsByTagName = assert(function(a) { a.appendChild(H.createComment("")); return !a.getElementsByTagName("*").length });
            E.getElementsByClassName = rnative.test(H.getElementsByClassName);
            E.getById = assert(function(a) { docElem.appendChild(a).id = expando; return !H.getElementsByName || !H.getElementsByName(expando).length }); if (E.getById) { Expr.filter["ID"] = function(b) { var c = b.replace(runescape, funescape); return function(a) { return a.getAttribute("id") === c } };
                Expr.find["ID"] = function(a, b) { if (typeof b.getElementById !== "undefined" && documentIsHTML) { var c = b.getElementById(a); return c ? [c] : [] } } } else { Expr.filter["ID"] = function(c) { var d = c.replace(runescape, funescape); return function(a) { var b = typeof a.getAttributeNode !== "undefined" && a.getAttributeNode("id"); return b && b.value === d } };
                Expr.find["ID"] = function(a, b) { if (typeof b.getElementById !== "undefined" && documentIsHTML) { var c, i, elems, elem = b.getElementById(a); if (elem) { c = elem.getAttributeNode("id"); if (c && c.value === a) { return [elem] }
                            elems = b.getElementsByName(a);
                            i = 0; while ((elem = elems[i++])) { c = elem.getAttributeNode("id"); if (c && c.value === a) { return [elem] } } } return [] } } }
            Expr.find["TAG"] = E.getElementsByTagName ? function(a, b) { if (typeof b.getElementsByTagName !== "undefined") { return b.getElementsByTagName(a) } else if (E.qsa) { return b.querySelectorAll(a) } } : function(a, b) { var c, tmp = [],
                    i = 0,
                    results = b.getElementsByTagName(a); if (a === "*") { while ((c = results[i++])) { if (c.nodeType === 1) { tmp.push(c) } } return tmp } return results };
            Expr.find["CLASS"] = E.getElementsByClassName && function(a, b) { if (typeof b.getElementsByClassName !== "undefined" && documentIsHTML) { return b.getElementsByClassName(a) } };
            rbuggyMatches = [];
            rbuggyQSA = []; if ((E.qsa = rnative.test(H.querySelectorAll))) { assert(function(a) { var b;
                    docElem.appendChild(a).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; if (a.querySelectorAll("[msallowcapture^='']").length) { rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")") } if (!a.querySelectorAll("[selected]").length) { rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")") } if (!a.querySelectorAll("[id~=" + expando + "-]").length) { rbuggyQSA.push("~=") }
                    b = H.createElement("input");
                    b.setAttribute("name", "");
                    a.appendChild(b); if (!a.querySelectorAll("[name='']").length) { rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")") } if (!a.querySelectorAll(":checked").length) { rbuggyQSA.push(":checked") } if (!a.querySelectorAll("a#" + expando + "+*").length) { rbuggyQSA.push(".#.+[+~]") }
                    a.querySelectorAll("\\\f");
                    rbuggyQSA.push("[\\r\\n\\f]") });
                assert(function(a) { a.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; var b = H.createElement("input");
                    b.setAttribute("type", "hidden");
                    a.appendChild(b).setAttribute("name", "D"); if (a.querySelectorAll("[name=d]").length) { rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=") } if (a.querySelectorAll(":enabled").length !== 2) { rbuggyQSA.push(":enabled", ":disabled") }
                    docElem.appendChild(a).disabled = true; if (a.querySelectorAll(":disabled").length !== 2) { rbuggyQSA.push(":enabled", ":disabled") }
                    a.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:") }) } if ((E.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) { assert(function(a) { E.disconnectedMatch = matches.call(a, "*");
                    matches.call(a, "[s!='']:x");
                    rbuggyMatches.push("!=", pseudos) }) }
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            f = rnative.test(docElem.compareDocumentPosition);
            contains = f || rnative.test(docElem.contains) ? function(a, b) { var c = a.nodeType === 9 ? a.documentElement : a,
                    bup = b && b.parentNode; return a === bup || !!(bup && bup.nodeType === 1 && (c.contains ? c.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16)) } : function(a, b) { if (b) { while ((b = b.parentNode)) { if (b === a) { return true } } } return false };
            sortOrder = f ? function(a, b) { if (a === b) { hasDuplicate = true; return 0 } var c = !a.compareDocumentPosition - !b.compareDocumentPosition; if (c) { return c }
                c = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1; if (c & 1 || (!E.sortDetached && b.compareDocumentPosition(a) === c)) { if (a == H || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) { return -1 } if (b == H || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) { return 1 } return sortInput ? (z(sortInput, a) - z(sortInput, b)) : 0 } return c & 4 ? -1 : 1 } : function(a, b) { if (a === b) { hasDuplicate = true; return 0 } var c, i = 0,
                    aup = a.parentNode,
                    bup = b.parentNode,
                    ap = [a],
                    bp = [b]; if (!aup || !bup) { return a == H ? -1 : b == H ? 1 : aup ? -1 : bup ? 1 : sortInput ? (z(sortInput, a) - z(sortInput, b)) : 0 } else if (aup === bup) { return siblingCheck(a, b) }
                c = a; while ((c = c.parentNode)) { ap.unshift(c) }
                c = b; while ((c = c.parentNode)) { bp.unshift(c) } while (ap[i] === bp[i]) { i++ } return i ? siblingCheck(ap[i], bp[i]) : ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 : 0 }; return H };
        K.matches = function(a, b) { return K(a, null, null, b) };
        K.matchesSelector = function(a, b) { setDocument(a); if (E.matchesSelector && documentIsHTML && !nonnativeSelectorCache[b + " "] && (!rbuggyMatches || !rbuggyMatches.test(b)) && (!rbuggyQSA || !rbuggyQSA.test(b))) { try { var c = matches.call(a, b); if (c || E.disconnectedMatch || a.document && a.document.nodeType !== 11) { return c } } catch (e) { nonnativeSelectorCache(b, true) } } return K(b, H, null, [a]).length > 0 };
        K.contains = function(a, b) { if ((a.ownerDocument || a) != H) { setDocument(a) } return contains(a, b) };
        K.attr = function(a, b) { if ((a.ownerDocument || a) != H) { setDocument(a) } var c = Expr.attrHandle[b.toLowerCase()],
                val = c && B.call(Expr.attrHandle, b.toLowerCase()) ? c(a, b, !documentIsHTML) : undefined; return val !== undefined ? val : E.attributes || !documentIsHTML ? a.getAttribute(b) : (val = a.getAttributeNode(b)) && val.specified ? val.value : null };
        K.escape = function(a) { return (a + "").replace(rcssescape, fcssescape) };
        K.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a); };
        K.uniqueSort = function(a) { var b, duplicates = [],
                j = 0,
                i = 0;
            hasDuplicate = !E.detectDuplicates;
            sortInput = !E.sortStable && a.slice(0);
            a.sort(sortOrder); if (hasDuplicate) { while ((b = a[i++])) { if (b === a[i]) { j = duplicates.push(i) } } while (j--) { a.splice(duplicates[j], 1) } }
            sortInput = null; return a };
        getText = K.getText = function(a) { var b, ret = "",
                i = 0,
                nodeType = a.nodeType; if (!nodeType) { while ((b = a[i++])) { ret += getText(b) } } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) { if (typeof a.textContent === "string") { return a.textContent } else { for (a = a.firstChild; a; a = a.nextSibling) { ret += getText(a) } } } else if (nodeType === 3 || nodeType === 4) { return a.nodeValue } return ret };
        Expr = K.selectors = { cacheLength: 50, createPseudo: markFunction, match: matchExpr, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { "ATTR": function(a) { a[1] = a[1].replace(runescape, funescape);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(runescape, funescape); if (a[2] === "~=") { a[3] = " " + a[3] + " " } return a.slice(0, 4) }, "CHILD": function(a) { a[1] = a[1].toLowerCase(); if (a[1].slice(0, 3) === "nth") { if (!a[3]) { K.error(a[0]) }
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * (a[3] === "even" || a[3] === "odd"));
                        a[5] = +((a[7] + a[8]) || a[3] === "odd") } else if (a[3]) { K.error(a[0]) } return a }, "PSEUDO": function(a) { var b, unquoted = !a[6] && a[2]; if (matchExpr["CHILD"].test(a[0])) { return null } if (a[3]) { a[2] = a[4] || a[5] || "" } else if (unquoted && rpseudo.test(unquoted) && (b = tokenize(unquoted, true)) && (b = unquoted.indexOf(")", unquoted.length - b) - unquoted.length)) { a[0] = a[0].slice(0, b);
                        a[2] = unquoted.slice(0, b) } return a.slice(0, 3) } }, filter: { "TAG": function(b) { var c = b.replace(runescape, funescape).toLowerCase(); return b === "*" ? function() { return true } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === c } }, "CLASS": function(b) { var c = classCache[b + " "]; return c || (c = new RegExp("(^|" + whitespace + ")" + b + "(" + whitespace + "|$)")) && classCache(b, function(a) { return c.test(typeof a.className === "string" && a.className || typeof a.getAttribute !== "undefined" && a.getAttribute("class") || "") }) }, "ATTR": function(c, d, e) { return function(a) { var b = K.attr(a, c); if (b == null) { return d === "!=" } if (!d) { return true }
                        b += ""; return d === "=" ? b === e : d === "!=" ? b !== e : d === "^=" ? e && b.indexOf(e) === 0 : d === "*=" ? e && b.indexOf(e) > -1 : d === "$=" ? e && b.slice(-e.length) === e : d === "~=" ? (" " + b.replace(rwhitespace, " ") + " ").indexOf(e) > -1 : d === "|=" ? b === e || b.slice(0, e.length + 1) === e + "-" : false } }, "CHILD": function(e, f, g, h, i) { var j = e.slice(0, 3) !== "nth",
                        forward = e.slice(-4) !== "last",
                        ofType = f === "of-type"; return h === 1 && i === 0 ? function(a) { return !!a.parentNode } : function(a, b, c) { var d, uniqueCache, outerCache, node, nodeIndex, start, L = j !== forward ? "nextSibling" : "previousSibling",
                            parent = a.parentNode,
                            name = ofType && a.nodeName.toLowerCase(),
                            useCache = !c && !ofType,
                            diff = false; if (parent) { if (j) { while (L) { node = a; while ((node = node[L])) { if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) { return false } }
                                    start = L = e === "only" && !start && "nextSibling" } return true }
                            start = [forward ? parent.firstChild : parent.lastChild]; if (forward && useCache) { node = parent;
                                outerCache = node[expando] || (node[expando] = {});
                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                d = uniqueCache[e] || [];
                                nodeIndex = d[0] === dirruns && d[1];
                                diff = nodeIndex && d[2];
                                node = nodeIndex && parent.childNodes[nodeIndex]; while ((node = ++nodeIndex && node && node[L] || (diff = nodeIndex = 0) || start.pop())) { if (node.nodeType === 1 && ++diff && node === a) { uniqueCache[e] = [dirruns, nodeIndex, diff]; break } } } else { if (useCache) { node = a;
                                    outerCache = node[expando] || (node[expando] = {});
                                    uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                    d = uniqueCache[e] || [];
                                    nodeIndex = d[0] === dirruns && d[1];
                                    diff = nodeIndex } if (diff === false) { while ((node = ++nodeIndex && node && node[L] || (diff = nodeIndex = 0) || start.pop())) { if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) { if (useCache) { outerCache = node[expando] || (node[expando] = {});
                                                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                uniqueCache[e] = [dirruns, diff] } if (node === a) { break } } } } }
                            diff -= i; return diff === h || (diff % h === 0 && diff / h >= 0) } } }, "PSEUDO": function(d, e) { var f, fn = Expr.pseudos[d] || Expr.setFilters[d.toLowerCase()] || K.error("unsupported pseudo: " + d); if (fn[expando]) { return fn(e) } if (fn.length > 1) { f = [d, d, "", e]; return Expr.setFilters.hasOwnProperty(d.toLowerCase()) ? markFunction(function(a, b) { var c, matched = fn(a, e),
                                i = matched.length; while (i--) { c = z(a, matched[i]);
                                a[c] = !(b[c] = matched[i]) } }) : function(a) { return fn(a, 0, f) } } return fn } }, pseudos: { "not": markFunction(function(f) { var g = [],
                        results = [],
                        matcher = compile(f.replace(bH, "$1")); return matcher[expando] ? markFunction(function(a, b, c, d) { var e, unmatched = matcher(a, null, d, []),
                            i = a.length; while (i--) { if ((e = unmatched[i])) { a[i] = !(b[i] = e) } } }) : function(a, b, c) { g[0] = a;
                        matcher(g, null, c, results);
                        g[0] = null; return !results.pop() } }), "has": markFunction(function(b) { return function(a) { return K(b, a).length > 0 } }), "contains": markFunction(function(b) { b = b.replace(runescape, funescape); return function(a) { return (a.textContent || getText(a)).indexOf(b) > -1 } }), "lang": markFunction(function(c) { if (!ridentifier.test(c || "")) { K.error("unsupported lang: " + c) }
                    c = c.replace(runescape, funescape).toLowerCase(); return function(a) { var b;
                        do { if ((b = documentIsHTML ? a.lang : a.getAttribute("xml:lang") || a.getAttribute("lang"))) { b = b.toLowerCase(); return b === c || b.indexOf(c + "-") === 0 } } while ((a = a.parentNode) && a.nodeType === 1); return false } }), "target": function(a) { var b = n.location && n.location.hash; return b && b.slice(1) === a.id }, "root": function(a) { return a === docElem }, "focus": function(a) { return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, "enabled": createDisabledPseudo(false), "disabled": createDisabledPseudo(true), "checked": function(a) { var b = a.nodeName.toLowerCase(); return (b === "input" && !!a.checked) || (b === "option" && !!a.selected) }, "selected": function(a) { if (a.parentNode) { a.parentNode.selectedIndex } return a.selected === true }, "empty": function(a) { for (a = a.firstChild; a; a = a.nextSibling) { if (a.nodeType < 6) { return false } } return true }, "parent": function(a) { return !Expr.pseudos["empty"](a) }, "header": function(a) { return rheader.test(a.nodeName) }, "input": function(a) { return rinputs.test(a.nodeName) }, "button": function(a) { var b = a.nodeName.toLowerCase(); return b === "input" && a.type === "button" || b === "button" }, "text": function(a) { var b; return a.nodeName.toLowerCase() === "input" && a.type === "text" && ((b = a.getAttribute("type")) == null || b.toLowerCase() === "text") }, "first": createPositionalPseudo(function() { return [0] }), "last": createPositionalPseudo(function(a, b) { return [b - 1] }), "eq": createPositionalPseudo(function(a, b, c) { return [c < 0 ? c + b : c] }), "even": createPositionalPseudo(function(a, b) { var i = 0; for (; i < b; i += 2) { a.push(i) } return a }), "odd": createPositionalPseudo(function(a, b) { var i = 1; for (; i < b; i += 2) { a.push(i) } return a }), "lt": createPositionalPseudo(function(a, b, c) { var i = c < 0 ? c + b : c > b ? b : c; for (; --i >= 0;) { a.push(i) } return a }), "gt": createPositionalPseudo(function(a, b, c) { var i = c < 0 ? c + b : c; for (; ++i < b;) { a.push(i) } return a }) } };
        Expr.pseudos["nth"] = Expr.pseudos["eq"]; for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) { Expr.pseudos[i] = createInputPseudo(i) } for (i in { submit: true, reset: true }) { Expr.pseudos[i] = createButtonPseudo(i) }

        function setFilters() {}
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = K.tokenize = function(a, b) { var c, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[a + " "]; if (cached) { return b ? 0 : cached.slice(0) }
            soFar = a;
            groups = [];
            preFilters = Expr.preFilter; while (soFar) { if (!c || (match = rcomma.exec(soFar))) { if (match) { soFar = soFar.slice(match[0].length) || soFar }
                    groups.push((tokens = [])) }
                c = false; if ((match = rcombinators.exec(soFar))) { c = match.shift();
                    tokens.push({ value: c, type: match[0].replace(bH, " ") });
                    soFar = soFar.slice(c.length) } for (type in Expr.filter) { if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) { c = match.shift();
                        tokens.push({ value: c, type: type, matches: match });
                        soFar = soFar.slice(c.length) } } if (!c) { break } } return b ? soFar.length : soFar ? K.error(a) : tokenCache(a, groups).slice(0) };

        function toSelector(a) { var i = 0,
                len = a.length,
                selector = ""; for (; i < len; i++) { selector += a[i].value } return selector }

        function addCombinator(e, f, g) { var h = f.dir,
                skip = f.next,
                key = skip || h,
                checkNonElements = g && key === "parentNode",
                doneName = done++; return f.first ? function(a, b, c) { while ((a = a[h])) { if (a.nodeType === 1 || checkNonElements) { return e(a, b, c) } } return false } : function(a, b, c) { var d, uniqueCache, outerCache, newCache = [dirruns, doneName]; if (c) { while ((a = a[h])) { if (a.nodeType === 1 || checkNonElements) { if (e(a, b, c)) { return true } } } } else { while ((a = a[h])) { if (a.nodeType === 1 || checkNonElements) { outerCache = a[expando] || (a[expando] = {});
                            uniqueCache = outerCache[a.uniqueID] || (outerCache[a.uniqueID] = {}); if (skip && skip === a.nodeName.toLowerCase()) { a = a[h] || a } else if ((d = uniqueCache[key]) && d[0] === dirruns && d[1] === doneName) { return (newCache[2] = d[2]) } else { uniqueCache[key] = newCache; if ((newCache[2] = e(a, b, c))) { return true } } } } } return false } }

        function elementMatcher(d) { return d.length > 1 ? function(a, b, c) { var i = d.length; while (i--) { if (!d[i](a, b, c)) { return false } } return true } : d[0] }

        function multipleContexts(a, b, c) { var i = 0,
                len = b.length; for (; i < len; i++) { K(a, b[i], c) } return c }

        function condense(a, b, c, d, e) { var f, newUnmatched = [],
                i = 0,
                len = a.length,
                mapped = b != null; for (; i < len; i++) { if ((f = a[i])) { if (!c || c(f, d, e)) { newUnmatched.push(f); if (mapped) { b.push(i) } } } } return newUnmatched }

        function setMatcher(f, g, h, j, k, l) { if (j && !j[expando]) { j = setMatcher(j) } if (k && !k[expando]) { k = setMatcher(k, l) } return markFunction(function(a, b, c, d) { var e, i, elem, preMap = [],
                    postMap = [],
                    preexisting = b.length,
                    elems = a || multipleContexts(g || "*", c.nodeType ? [c] : c, []),
                    matcherIn = f && (a || !g) ? condense(elems, preMap, f, c, d) : elems,
                    matcherOut = h ? k || (a ? f : preexisting || j) ? [] : b : matcherIn; if (h) { h(matcherIn, matcherOut, c, d) } if (j) { e = condense(matcherOut, postMap);
                    j(e, [], c, d);
                    i = e.length; while (i--) { if ((elem = e[i])) { matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem) } } } if (a) { if (k || f) { if (k) { e = [];
                            i = matcherOut.length; while (i--) { if ((elem = matcherOut[i])) { e.push((matcherIn[i] = elem)) } }
                            k(null, (matcherOut = []), e, d) }
                        i = matcherOut.length; while (i--) { if ((elem = matcherOut[i]) && (e = k ? z(a, elem) : preMap[i]) > -1) { a[e] = !(b[e] = elem) } } } } else { matcherOut = condense(matcherOut === b ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut); if (k) { k(null, b, matcherOut, d) } else { y.apply(b, matcherOut) } } }) }

        function matcherFromTokens(e) { var f, matcher, j, len = e.length,
                leadingRelative = Expr.relative[e[0].type],
                implicitRelative = leadingRelative || Expr.relative[" "],
                i = leadingRelative ? 1 : 0,
                matchContext = addCombinator(function(a) { return a === f }, implicitRelative, true),
                matchAnyContext = addCombinator(function(a) { return z(f, a) > -1 }, implicitRelative, true),
                matchers = [function(a, b, c) { var d = (!leadingRelative && (c || b !== outermostContext)) || ((f = b).nodeType ? matchContext(a, b, c) : matchAnyContext(a, b, c));
                    f = null; return d }]; for (; i < len; i++) { if ((matcher = Expr.relative[e[i].type])) { matchers = [addCombinator(elementMatcher(matchers), matcher)] } else { matcher = Expr.filter[e[i].type].apply(null, e[i].matches); if (matcher[expando]) { j = ++i; for (; j < len; j++) { if (Expr.relative[e[j].type]) { break } } return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(e.slice(0, i - 1).concat({ value: e[i - 2].type === " " ? "*" : "" })).replace(bH, "$1"), matcher, i < j && matcherFromTokens(e.slice(i, j)), j < len && matcherFromTokens((e = e.slice(j))), j < len && toSelector(e)) }
                    matchers.push(matcher) } } return elementMatcher(matchers) }

        function matcherFromGroupMatchers(g, h) { var k = h.length > 0,
                byElement = g.length > 0,
                superMatcher = function(a, b, c, d, e) { var f, j, matcher, matchedCount = 0,
                        i = "0",
                        unmatched = a && [],
                        setMatched = [],
                        contextBackup = outermostContext,
                        elems = a || byElement && Expr.find["TAG"]("*", e),
                        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                        len = elems.length; if (e) { outermostContext = b == H || b || e } for (; i !== len && (f = elems[i]) != null; i++) { if (byElement && f) { j = 0; if (!b && f.ownerDocument != H) { setDocument(f);
                                c = !documentIsHTML } while ((matcher = g[j++])) { if (matcher(f, b || H, c)) { d.push(f); break } } if (e) { dirruns = dirrunsUnique } } if (k) { if ((f = !matcher && f)) { matchedCount-- } if (a) { unmatched.push(f) } } }
                    matchedCount += i; if (k && i !== matchedCount) { j = 0; while ((matcher = h[j++])) { matcher(unmatched, setMatched, b, c) } if (a) { if (matchedCount > 0) { while (i--) { if (!(unmatched[i] || setMatched[i])) { setMatched[i] = pop.call(d) } } }
                            setMatched = condense(setMatched) }
                        y.apply(d, setMatched); if (e && !a && setMatched.length > 0 && (matchedCount + h.length) > 1) { K.uniqueSort(d) } } if (e) { dirruns = dirrunsUnique;
                        outermostContext = contextBackup } return unmatched }; return k ? markFunction(superMatcher) : superMatcher }
        compile = K.compile = function(a, b) { var i, setMatchers = [],
                elementMatchers = [],
                cached = compilerCache[a + " "]; if (!cached) { if (!b) { b = tokenize(a) }
                i = b.length; while (i--) { cached = matcherFromTokens(b[i]); if (cached[expando]) { setMatchers.push(cached) } else { elementMatchers.push(cached) } }
                cached = compilerCache(a, matcherFromGroupMatchers(elementMatchers, setMatchers));
                cached.selector = a } return cached };
        select = K.select = function(a, b, c, d) { var i, tokens, token, type, find, compiled = typeof a === "function" && a,
                match = !d && tokenize((a = compiled.selector || a));
            c = c || []; if (match.length === 1) { tokens = match[0] = match[0].slice(0); if (tokens.length > 2 && (token = tokens[0]).type === "ID" && b.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) { b = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), b) || [])[0]; if (!b) { return c } else if (compiled) { b = b.parentNode }
                    a = a.slice(tokens.shift().value.length) }
                i = matchExpr["needsContext"].test(a) ? 0 : tokens.length; while (i--) { token = tokens[i]; if (Expr.relative[(type = token.type)]) { break } if ((find = Expr.find[type])) { if ((d = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(b.parentNode) || b))) { tokens.splice(i, 1);
                            a = d.length && toSelector(tokens); if (!a) { y.apply(c, d); return c } break } } } }(compiled || compile(a, match))(d, b, !documentIsHTML, c, !b || rsibling.test(a) && testContext(b.parentNode) || b); return c };
        E.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        E.detectDuplicates = !!hasDuplicate;
        setDocument();
        E.sortDetached = assert(function(a) { return a.compareDocumentPosition(H.createElement("fieldset")) & 1 }); if (!assert(function(a) { a.innerHTML = "<a href='#'></a>"; return a.firstChild.getAttribute("href") === "#" })) { addHandle("type|href|height|width", function(a, b, c) { if (!c) { return a.getAttribute(b, b.toLowerCase() === "type" ? 1 : 2) } }) } if (!E.attributes || !assert(function(a) { a.innerHTML = "<input/>";
                a.firstChild.setAttribute("value", ""); return a.firstChild.getAttribute("value") === "" })) { addHandle("value", function(a, b, c) { if (!c && a.nodeName.toLowerCase() === "input") { return a.defaultValue } }) } if (!assert(function(a) { return a.getAttribute("disabled") == null })) { addHandle(booleans, function(a, b, c) { var d; if (!c) { return a[b] === true ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null } }) } return K })(o);
    jQuery.find = K;
    jQuery.expr = K.selectors;
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = K.uniqueSort;
    jQuery.text = K.getText;
    jQuery.isXMLDoc = K.isXML;
    jQuery.contains = K.contains;
    jQuery.escapeSelector = K.escape; var L = function(a, b, c) { var d = [],
            truncate = c !== undefined; while ((a = a[b]) && a.nodeType !== 9) { if (a.nodeType === 1) { if (truncate && jQuery(a).is(c)) { break }
                d.push(a) } } return d }; var M = function(n, a) { var b = []; for (; n; n = n.nextSibling) { if (n.nodeType === 1 && n !== a) { b.push(n) } } return b }; var N = jQuery.expr.match.needsContext;

    function nodeName(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() } var O = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);

    function winnow(b, c, d) { if (F(c)) { return jQuery.grep(b, function(a, i) { return !!c.call(a, i, a) !== d }) } if (c.nodeType) { return jQuery.grep(b, function(a) { return (a === c) !== d }) } if (typeof c !== "string") { return jQuery.grep(b, function(a) { return (z.call(c, a) > -1) !== d }) } return jQuery.filter(c, b, d) }
    jQuery.filter = function(b, c, d) { var e = c[0]; if (d) { b = ":not(" + b + ")" } if (c.length === 1 && e.nodeType === 1) { return jQuery.find.matchesSelector(e, b) ? [e] : [] } return jQuery.find.matches(b, jQuery.grep(c, function(a) { return a.nodeType === 1 })) };
    jQuery.fn.extend({ find: function(a) { var i, ret, len = this.length,
                self = this; if (typeof a !== "string") { return this.pushStack(jQuery(a).filter(function() { for (i = 0; i < len; i++) { if (jQuery.contains(self[i], this)) { return true } } })) }
            ret = this.pushStack([]); for (i = 0; i < len; i++) { jQuery.find(a, self[i], ret) } return len > 1 ? jQuery.uniqueSort(ret) : ret }, filter: function(a) { return this.pushStack(winnow(this, a || [], false)) }, not: function(a) { return this.pushStack(winnow(this, a || [], true)) }, is: function(a) { return !!winnow(this, typeof a === "string" && N.test(a) ? jQuery(a) : a || [], false).length } }); var P, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        init = jQuery.fn.init = function(a, b, c) { var d, elem; if (!a) { return this }
            c = c || P; if (typeof a === "string") { if (a[0] === "<" && a[a.length - 1] === ">" && a.length >= 3) { d = [null, a, null] } else { d = rquickExpr.exec(a) } if (d && (d[1] || !b)) { if (d[1]) { b = b instanceof jQuery ? b[0] : b;
                        jQuery.merge(this, jQuery.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : H, true)); if (O.test(d[1]) && jQuery.isPlainObject(b)) { for (d in b) { if (F(this[d])) { this[d](b[d]) } else { this.attr(d, b[d]) } } } return this } else { elem = H.getElementById(d[2]); if (elem) { this[0] = elem;
                            this.length = 1 } return this } } else if (!b || b.jquery) { return (b || c).find(a) } else { return this.constructor(b).find(a) } } else if (a.nodeType) { this[0] = a;
                this.length = 1; return this } else if (F(a)) { return c.ready !== undefined ? c.ready(a) : a(jQuery) } return jQuery.makeArray(a, this) };
    init.prototype = jQuery.fn;
    P = jQuery(H); var Q = /^(?:parents|prev(?:Until|All))/,
        guaranteedUnique = { children: true, contents: true, next: true, prev: true };
    jQuery.fn.extend({ has: function(a) { var b = jQuery(a, this),
                l = b.length; return this.filter(function() { var i = 0; for (; i < l; i++) { if (jQuery.contains(this, b[i])) { return true } } }) }, closest: function(a, b) { var c, i = 0,
                l = this.length,
                matched = [],
                targets = typeof a !== "string" && jQuery(a); if (!N.test(a)) { for (; i < l; i++) { for (c = this[i]; c && c !== b; c = c.parentNode) { if (c.nodeType < 11 && (targets ? targets.index(c) > -1 : c.nodeType === 1 && jQuery.find.matchesSelector(c, a))) { matched.push(c); break } } } } return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched) }, index: function(a) { if (!a) { return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1 } if (typeof a === "string") { return z.call(jQuery(a), this[0]) } return z.call(this, a.jquery ? a[0] : a) }, add: function(a, b) { return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(a, b)))) }, addBack: function(a) { return this.add(a == null ? this.prevObject : this.prevObject.filter(a)) } });

    function sibling(a, b) { while ((a = a[b]) && a.nodeType !== 1) {} return a }
    jQuery.each({ parent: function(a) { var b = a.parentNode; return b && b.nodeType !== 11 ? b : null }, parents: function(a) { return L(a, "parentNode") }, parentsUntil: function(a, b, c) { return L(a, "parentNode", c) }, next: function(a) { return sibling(a, "nextSibling") }, prev: function(a) { return sibling(a, "previousSibling") }, nextAll: function(a) { return L(a, "nextSibling") }, prevAll: function(a) { return L(a, "previousSibling") }, nextUntil: function(a, b, c) { return L(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return L(a, "previousSibling", c) }, siblings: function(a) { return M((a.parentNode || {}).firstChild, a) }, children: function(a) { return M(a.firstChild) }, contents: function(a) { if (a.contentDocument != null && u(a.contentDocument)) { return a.contentDocument } if (nodeName(a, "template")) { a = a.content || a } return jQuery.merge([], a.childNodes) } }, function(d, e) { jQuery.fn[d] = function(a, b) { var c = jQuery.map(this, e, a); if (d.slice(-5) !== "Until") { b = a } if (b && typeof b === "string") { c = jQuery.filter(b, c) } if (this.length > 1) { if (!guaranteedUnique[d]) { jQuery.uniqueSort(c) } if (Q.test(d)) { c.reverse() } } return this.pushStack(c) } }); var R = (/[^\x20\t\r\n\f]+/g);

    function createOptions(b) { var c = {};
        jQuery.each(b.match(R) || [], function(_, a) { c[a] = true }); return c }
    jQuery.Callbacks = function(c) { c = typeof c === "string" ? createOptions(c) : jQuery.extend({}, c); var d, memory, fired, locked, list = [],
            queue = [],
            firingIndex = -1,
            fire = function() { locked = locked || c.once;
                fired = d = true; for (; queue.length; firingIndex = -1) { memory = queue.shift(); while (++firingIndex < list.length) { if (list[firingIndex].apply(memory[0], memory[1]) === false && c.stopOnFalse) { firingIndex = list.length;
                            memory = false } } } if (!c.memory) { memory = false }
                d = false; if (locked) { if (memory) { list = [] } else { list = "" } } },
            self = { add: function() { if (list) { if (memory && !d) { firingIndex = list.length - 1;
                            queue.push(memory) }(function add(b) { jQuery.each(b, function(_, a) { if (F(a)) { if (!c.unique || !self.has(a)) { list.push(a) } } else if (a && a.length && toType(a) !== "string") { add(a) } }) })(arguments); if (memory && !d) { fire() } } return this }, remove: function() { jQuery.each(arguments, function(_, a) { var b; while ((b = jQuery.inArray(a, list, b)) > -1) { list.splice(b, 1); if (b <= firingIndex) { firingIndex-- } } }); return this }, has: function(a) { return a ? jQuery.inArray(a, list) > -1 : list.length > 0 }, empty: function() { if (list) { list = [] } return this }, disable: function() { locked = queue = [];
                    list = memory = ""; return this }, disabled: function() { return !list }, lock: function() { locked = queue = []; if (!memory && !d) { list = memory = "" } return this }, locked: function() { return !!locked }, fireWith: function(a, b) { if (!locked) { b = b || [];
                        b = [a, b.slice ? b.slice() : b];
                        queue.push(b); if (!d) { fire() } } return this }, fire: function() { self.fireWith(this, arguments); return this }, fired: function() { return !!fired } }; return self };

    function Identity(v) { return v }

    function Thrower(a) { throw a; }

    function adoptValue(a, b, c, d) { var e; try { if (a && F((e = a.promise))) { e.call(a).done(b).fail(c) } else if (a && F((e = a.then))) { e.call(a, b, c) } else { b.apply(undefined, [a].slice(d)) } } catch (a) { c.apply(undefined, [a]) } }
    jQuery.extend({ Deferred: function(l) { var m = [
                    ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2],
                    ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]
                ],
                state = "pending",
                promise = { state: function() { return state }, always: function() { deferred.done(arguments).fail(arguments); return this }, "catch": function(a) { return promise.then(null, a) }, pipe: function() { var f = arguments; return jQuery.Deferred(function(e) { jQuery.each(m, function(b, c) { var d = F(f[c[4]]) && f[c[4]];
                                deferred[c[1]](function() { var a = d && d.apply(this, arguments); if (a && F(a.promise)) { a.promise().progress(e.notify).done(e.resolve).fail(e.reject) } else { e[c[0] + "With"](this, d ? [a] : arguments) } }) });
                            f = null }).promise() }, then: function(h, i, j) { var k = 0;

                        function resolve(c, d, f, g) { return function() { var b = this,
                                    args = arguments,
                                    mightThrow = function() { var a, then; if (c < k) { return }
                                        a = f.apply(b, args); if (a === d.promise()) { throw new TypeError("Thenable self-resolution"); }
                                        then = a && (typeof a === "object" || typeof a === "function") && a.then; if (F(then)) { if (g) { then.call(a, resolve(k, d, Identity, g), resolve(k, d, Thrower, g)) } else { k++;
                                                then.call(a, resolve(k, d, Identity, g), resolve(k, d, Thrower, g), resolve(k, d, Identity, d.notifyWith)) } } else { if (f !== Identity) { b = undefined;
                                                args = [a] }(g || d.resolveWith)(b, args) } },
                                    process = g ? mightThrow : function() { try { mightThrow() } catch (e) { if (jQuery.Deferred.exceptionHook) { jQuery.Deferred.exceptionHook(e, process.stackTrace) } if (c + 1 >= k) { if (f !== Thrower) { b = undefined;
                                                    args = [e] }
                                                d.rejectWith(b, args) } } }; if (c) { process() } else { if (jQuery.Deferred.getStackHook) { process.stackTrace = jQuery.Deferred.getStackHook() }
                                    o.setTimeout(process) } } } return jQuery.Deferred(function(a) { m[0][3].add(resolve(0, a, F(j) ? j : Identity, a.notifyWith));
                            m[1][3].add(resolve(0, a, F(h) ? h : Identity));
                            m[2][3].add(resolve(0, a, F(i) ? i : Thrower)) }).promise() }, promise: function(a) { return a != null ? jQuery.extend(a, promise) : promise } },
                deferred = {};
            jQuery.each(m, function(i, a) { var b = a[2],
                    stateString = a[5];
                promise[a[1]] = b.add; if (stateString) { b.add(function() { state = stateString }, m[3 - i][2].disable, m[3 - i][3].disable, m[0][2].lock, m[0][3].lock) }
                b.add(a[3].fire);
                deferred[a[0]] = function() { deferred[a[0] + "With"](this === deferred ? undefined : this, arguments); return this };
                deferred[a[0] + "With"] = b.fireWith });
            promise.promise(deferred); if (l) { l.call(deferred, deferred) } return deferred }, when: function(b) { var c = arguments.length,
                i = c,
                resolveContexts = Array(i),
                resolveValues = w.call(arguments),
                primary = jQuery.Deferred(),
                updateFunc = function(i) { return function(a) { resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? w.call(arguments) : a; if (!(--c)) { primary.resolveWith(resolveContexts, resolveValues) } } }; if (c <= 1) { adoptValue(b, primary.done(updateFunc(i)).resolve, primary.reject, !c); if (primary.state() === "pending" || F(resolveValues[i] && resolveValues[i].then)) { return primary.then() } } while (i--) { adoptValue(resolveValues[i], updateFunc(i), primary.reject) } return primary.promise() } }); var S = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(a, b) { if (o.console && o.console.warn && a && S.test(a.name)) { o.console.warn("jQuery.Deferred exception: " + a.message, a.stack, b) } };
    jQuery.readyException = function(a) { o.setTimeout(function() { throw a; }) }; var T = jQuery.Deferred();
    jQuery.fn.ready = function(b) { T.then(b).catch(function(a) { jQuery.readyException(a) }); return this };
    jQuery.extend({ isReady: false, readyWait: 1, ready: function(a) { if (a === true ? --jQuery.readyWait : jQuery.isReady) { return }
            jQuery.isReady = true; if (a !== true && --jQuery.readyWait > 0) { return }
            T.resolveWith(H, [jQuery]) } });
    jQuery.ready.then = T.then;

    function completed() { H.removeEventListener("DOMContentLoaded", completed);
        o.removeEventListener("load", completed);
        jQuery.ready() } if (H.readyState === "complete" || (H.readyState !== "loading" && !H.documentElement.doScroll)) { o.setTimeout(jQuery.ready) } else { H.addEventListener("DOMContentLoaded", completed);
        o.addEventListener("load", completed) } var U = function(d, e, f, g, h, j, k) { var i = 0,
            len = d.length,
            bulk = f == null; if (toType(f) === "object") { h = true; for (i in f) { U(d, e, i, f[i], true, j, k) } } else if (g !== undefined) { h = true; if (!F(g)) { k = true } if (bulk) { if (k) { e.call(d, g);
                    e = null } else { bulk = e;
                    e = function(a, b, c) { return bulk.call(jQuery(a), c) } } } if (e) { for (; i < len; i++) { e(d[i], f, k ? g : g.call(d[i], i, e(d[i], f))) } } } if (h) { return d } if (bulk) { return e.call(d) } return len ? e(d[0], f) : j }; var V = /^-ms-/,
        rdashAlpha = /-([a-z])/g;

    function fcamelCase(a, b) { return b.toUpperCase() }

    function camelCase(a) { return a.replace(V, "ms-").replace(rdashAlpha, fcamelCase) } var W = function(a) { return a.nodeType === 1 || a.nodeType === 9 || !(+a.nodeType) };

    function Data() { this.expando = jQuery.expando + Data.uid++ }
    Data.uid = 1;
    Data.prototype = { cache: function(a) { var b = a[this.expando]; if (!b) { b = {}; if (W(a)) { if (a.nodeType) { a[this.expando] = b } else { Object.defineProperty(a, this.expando, { value: b, configurable: true }) } } } return b }, set: function(a, b, c) { var d, cache = this.cache(a); if (typeof b === "string") { cache[camelCase(b)] = c } else { for (d in b) { cache[camelCase(d)] = b[d] } } return cache }, get: function(a, b) { return b === undefined ? this.cache(a) : a[this.expando] && a[this.expando][camelCase(b)] }, access: function(a, b, c) { if (b === undefined || ((b && typeof b === "string") && c === undefined)) { return this.get(a, b) }
            this.set(a, b, c); return c !== undefined ? c : b }, remove: function(a, b) { var i, cache = a[this.expando]; if (cache === undefined) { return } if (b !== undefined) { if (Array.isArray(b)) { b = b.map(camelCase) } else { b = camelCase(b);
                    b = b in cache ? [b] : (b.match(R) || []) }
                i = b.length; while (i--) { delete cache[b[i]] } } if (b === undefined || jQuery.isEmptyObject(cache)) { if (a.nodeType) { a[this.expando] = undefined } else { delete a[this.expando] } } }, hasData: function(a) { var b = a[this.expando]; return b !== undefined && !jQuery.isEmptyObject(b) } }; var X = new Data(); var Y = new Data(); var Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

    function getData(a) { if (a === "true") { return true } if (a === "false") { return false } if (a === "null") { return null } if (a === +a + "") { return +a } if (Z.test(a)) { return JSON.parse(a) } return a }

    function dataAttr(a, b, c) { var d; if (c === undefined && a.nodeType === 1) { d = "data-" + b.replace(rmultiDash, "-$&").toLowerCase();
            c = a.getAttribute(d); if (typeof c === "string") { try { c = getData(c) } catch (e) {}
                Y.set(a, b, c) } else { c = undefined } } return c }
    jQuery.extend({ hasData: function(a) { return Y.hasData(a) || X.hasData(a) }, data: function(a, b, c) { return Y.access(a, b, c) }, removeData: function(a, b) { Y.remove(a, b) }, _data: function(a, b, c) { return X.access(a, b, c) }, _removeData: function(a, b) { X.remove(a, b) } });
    jQuery.fn.extend({ data: function(c, d) { var i, name, data, elem = this[0],
                attrs = elem && elem.attributes; if (c === undefined) { if (this.length) { data = Y.get(elem); if (elem.nodeType === 1 && !X.get(elem, "hasDataAttrs")) { i = attrs.length; while (i--) { if (attrs[i]) { name = attrs[i].name; if (name.indexOf("data-") === 0) { name = camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]) } } }
                        X.set(elem, "hasDataAttrs", true) } } return data } if (typeof c === "object") { return this.each(function() { Y.set(this, c) }) } return U(this, function(a) { var b; if (elem && a === undefined) { b = Y.get(elem, c); if (b !== undefined) { return b }
                    b = dataAttr(elem, c); if (b !== undefined) { return b } return }
                this.each(function() { Y.set(this, c, a) }) }, null, d, arguments.length > 1, null, true) }, removeData: function(a) { return this.each(function() { Y.remove(this, a) }) } });
    jQuery.extend({ queue: function(a, b, c) { var d; if (a) { b = (b || "fx") + "queue";
                d = X.get(a, b); if (c) { if (!d || Array.isArray(c)) { d = X.access(a, b, jQuery.makeArray(c)) } else { d.push(c) } } return d || [] } }, dequeue: function(a, b) { b = b || "fx"; var c = jQuery.queue(a, b),
                startLength = c.length,
                fn = c.shift(),
                hooks = jQuery._queueHooks(a, b),
                next = function() { jQuery.dequeue(a, b) }; if (fn === "inprogress") { fn = c.shift();
                startLength-- } if (fn) { if (b === "fx") { c.unshift("inprogress") }
                delete hooks.stop;
                fn.call(a, next, hooks) } if (!startLength && hooks) { hooks.empty.fire() } }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return X.get(a, c) || X.access(a, c, { empty: jQuery.Callbacks("once memory").add(function() { X.remove(a, [b + "queue", c]) }) }) } });
    jQuery.fn.extend({ queue: function(b, c) { var d = 2; if (typeof b !== "string") { c = b;
                b = "fx";
                d-- } if (arguments.length < d) { return jQuery.queue(this[0], b) } return c === undefined ? this : this.each(function() { var a = jQuery.queue(this, b, c);
                jQuery._queueHooks(this, b); if (b === "fx" && a[0] !== "inprogress") { jQuery.dequeue(this, b) } }) }, dequeue: function(a) { return this.each(function() { jQuery.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function() { if (!(--count)) { defer.resolveWith(elements, [elements]) } }; if (typeof a !== "string") { b = a;
                a = undefined }
            a = a || "fx"; while (i--) { c = X.get(elements[i], a + "queueHooks"); if (c && c.empty) { count++;
                    c.empty.add(resolve) } }
            resolve(); return defer.promise(b) } }); var ba = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source; var bb = new RegExp("^(?:([+-])=|)(" + ba + ")([a-z%]*)$", "i"); var bc = ["Top", "Right", "Bottom", "Left"]; var bd = H.documentElement; var be = function(a) { return jQuery.contains(a.ownerDocument, a) },
        composed = { composed: true }; if (bd.getRootNode) { be = function(a) { return jQuery.contains(a.ownerDocument, a) || a.getRootNode(composed) === a.ownerDocument } } var bf = function(a, b) { a = b || a; return a.style.display === "none" || a.style.display === "" && be(a) && jQuery.css(a, "display") === "none" };

    function adjustCSS(a, b, c, d) { var e, scale, maxIterations = 20,
            currentValue = d ? function() { return d.cur() } : function() { return jQuery.css(a, b, "") },
            initial = currentValue(),
            unit = c && c[3] || (jQuery.cssNumber[b] ? "" : "px"),
            initialInUnit = a.nodeType && (jQuery.cssNumber[b] || unit !== "px" && +initial) && bb.exec(jQuery.css(a, b)); if (initialInUnit && initialInUnit[3] !== unit) { initial = initial / 2;
            unit = unit || initialInUnit[3];
            initialInUnit = +initial || 1; while (maxIterations--) { jQuery.style(a, b, initialInUnit + unit); if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) { maxIterations = 0 }
                initialInUnit = initialInUnit / scale }
            initialInUnit = initialInUnit * 2;
            jQuery.style(a, b, initialInUnit + unit);
            c = c || [] } if (c) { initialInUnit = +initialInUnit || +initial || 0;
            e = c[1] ? initialInUnit + (c[1] + 1) * c[2] : +c[2]; if (d) { d.unit = unit;
                d.start = initialInUnit;
                d.end = e } } return e } var bg = {};

    function getDefaultDisplay(a) { var b, doc = a.ownerDocument,
            nodeName = a.nodeName,
            display = bg[nodeName]; if (display) { return display }
        b = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(b, "display");
        b.parentNode.removeChild(b); if (display === "none") { display = "block" }
        bg[nodeName] = display; return display }

    function showHide(a, b) { var c, elem, values = [],
            index = 0,
            length = a.length; for (; index < length; index++) { elem = a[index]; if (!elem.style) { continue }
            c = elem.style.display; if (b) { if (c === "none") { values[index] = X.get(elem, "display") || null; if (!values[index]) { elem.style.display = "" } } if (elem.style.display === "" && bf(elem)) { values[index] = getDefaultDisplay(elem) } } else { if (c !== "none") { values[index] = "none";
                    X.set(elem, "display", c) } } } for (index = 0; index < length; index++) { if (values[index] != null) { a[index].style.display = values[index] } } return a }
    jQuery.fn.extend({ show: function() { return showHide(this, true) }, hide: function() { return showHide(this) }, toggle: function(a) { if (typeof a === "boolean") { return a ? this.show() : this.hide() } return this.each(function() { if (bf(this)) { jQuery(this).show() } else { jQuery(this).hide() } }) } }); var bh = (/^(?:checkbox|radio)$/i); var bi = (/<([a-z][^\/\0>\x20\t\r\n\f]*)/i); var bj = (/^$|^module$|\/(?:java|ecma)script/i);
    (function() { var a = H.createDocumentFragment(),
            div = a.appendChild(H.createElement("div")),
            input = H.createElement("input");
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        E.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        div.innerHTML = "<textarea>x</textarea>";
        E.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        div.innerHTML = "<option></option>";
        E.option = !!div.lastChild })(); var bk = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    bk.tbody = bk.tfoot = bk.colgroup = bk.caption = bk.thead;
    bk.th = bk.td; if (!E.option) { bk.optgroup = bk.option = [1, "<select multiple='multiple'>", "</select>"] }

    function getAll(a, b) { var c; if (typeof a.getElementsByTagName !== "undefined") { c = a.getElementsByTagName(b || "*") } else if (typeof a.querySelectorAll !== "undefined") { c = a.querySelectorAll(b || "*") } else { c = [] } if (b === undefined || b && nodeName(a, b)) { return jQuery.merge([a], c) } return c }

    function setGlobalEval(a, b) { var i = 0,
            l = a.length; for (; i < l; i++) { X.set(a[i], "globalEval", !b || X.get(b[i], "globalEval")) } } var bl = /<|&#?\w+;/;

    function buildFragment(a, b, c, d, e) { var f, tmp, tag, wrap, attached, j, fragment = b.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = a.length; for (; i < l; i++) { f = a[i]; if (f || f === 0) { if (toType(f) === "object") { jQuery.merge(nodes, f.nodeType ? [f] : f) } else if (!bl.test(f)) { nodes.push(b.createTextNode(f)) } else { tmp = tmp || fragment.appendChild(b.createElement("div"));
                    tag = (bi.exec(f) || ["", ""])[1].toLowerCase();
                    wrap = bk[tag] || bk._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(f) + wrap[2];
                    j = wrap[0]; while (j--) { tmp = tmp.lastChild }
                    jQuery.merge(nodes, tmp.childNodes);
                    tmp = fragment.firstChild;
                    tmp.textContent = "" } } }
        fragment.textContent = "";
        i = 0; while ((f = nodes[i++])) { if (d && jQuery.inArray(f, d) > -1) { if (e) { e.push(f) } continue }
            attached = be(f);
            tmp = getAll(fragment.appendChild(f), "script"); if (attached) { setGlobalEval(tmp) } if (c) { j = 0; while ((f = tmp[j++])) { if (bj.test(f.type || "")) { c.push(f) } } } } return fragment } var bm = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() { return true }

    function returnFalse() { return false }

    function expectSync(a, b) { return (a === safeActiveElement()) === (b === "focus") }

    function safeActiveElement() { try { return H.activeElement } catch (err) {} }

    function on(b, c, d, e, f, g) { var h, type; if (typeof c === "object") { if (typeof d !== "string") { e = e || d;
                d = undefined } for (type in c) { on(b, type, d, e, c[type], g) } return b } if (e == null && f == null) { f = d;
            e = d = undefined } else if (f == null) { if (typeof d === "string") { f = e;
                e = undefined } else { f = e;
                e = d;
                d = undefined } } if (f === false) { f = returnFalse } else if (!f) { return b } if (g === 1) { h = f;
            f = function(a) { jQuery().off(a); return h.apply(this, arguments) };
            f.guid = h.guid || (h.guid = jQuery.guid++) } return b.each(function() { jQuery.event.add(this, c, f, e, d) }) }
    jQuery.event = { global: {}, add: function(a, b, c, d, f) { var g, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = X.get(a); if (!W(a)) { return } if (c.handler) { g = c;
                c = g.handler;
                f = g.selector } if (f) { jQuery.find.matchesSelector(bd, f) } if (!c.guid) { c.guid = jQuery.guid++ } if (!(events = elemData.events)) { events = elemData.events = Object.create(null) } if (!(eventHandle = elemData.handle)) { eventHandle = elemData.handle = function(e) { return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(a, arguments) : undefined } }
            b = (b || "").match(R) || [""];
            t = b.length; while (t--) { tmp = bm.exec(b[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort(); if (!type) { continue }
                special = jQuery.event.special[type] || {};
                type = (f ? special.delegateType : special.bindType) || type;
                special = jQuery.event.special[type] || {};
                handleObj = jQuery.extend({ type: type, origType: origType, data: d, handler: c, guid: c.guid, selector: f, needsContext: f && jQuery.expr.match.needsContext.test(f), namespace: namespaces.join(".") }, g); if (!(handlers = events[type])) { handlers = events[type] = [];
                    handlers.delegateCount = 0; if (!special.setup || special.setup.call(a, d, namespaces, eventHandle) === false) { if (a.addEventListener) { a.addEventListener(type, eventHandle) } } } if (special.add) { special.add.call(a, handleObj); if (!handleObj.handler.guid) { handleObj.handler.guid = c.guid } } if (f) { handlers.splice(handlers.delegateCount++, 0, handleObj) } else { handlers.push(handleObj) }
                jQuery.event.global[type] = true } }, remove: function(a, b, c, d, e) { var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = X.hasData(a) && X.get(a); if (!elemData || !(events = elemData.events)) { return }
            b = (b || "").match(R) || [""];
            t = b.length; while (t--) { tmp = bm.exec(b[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort(); if (!type) { for (type in events) { jQuery.event.remove(a, type + b[t], c, d, true) } continue }
                special = jQuery.event.special[type] || {};
                type = (d ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                origCount = j = handlers.length; while (j--) { handleObj = handlers[j]; if ((e || origType === handleObj.origType) && (!c || c.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!d || d === handleObj.selector || d === "**" && handleObj.selector)) { handlers.splice(j, 1); if (handleObj.selector) { handlers.delegateCount-- } if (special.remove) { special.remove.call(a, handleObj) } } } if (origCount && !handlers.length) { if (!special.teardown || special.teardown.call(a, namespaces, elemData.handle) === false) { jQuery.removeEvent(a, type, elemData.handle) }
                    delete events[type] } } if (jQuery.isEmptyObject(events)) { X.remove(a, "handle events") } }, dispatch: function(a) { var i, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length),
                event = jQuery.event.fix(a),
                handlers = (X.get(this, "events") || Object.create(null))[event.type] || [],
                special = jQuery.event.special[event.type] || {};
            args[0] = event; for (i = 1; i < arguments.length; i++) { args[i] = arguments[i] }
            event.delegateTarget = this; if (special.preDispatch && special.preDispatch.call(this, event) === false) { return }
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            i = 0; while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) { event.currentTarget = matched.elem;
                j = 0; while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) { if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) { event.handleObj = handleObj;
                        event.data = handleObj.data;
                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args); if (ret !== undefined) { if ((event.result = ret) === false) { event.preventDefault();
                                event.stopPropagation() } } } } } if (special.postDispatch) { special.postDispatch.call(this, event) } return event.result }, handlers: function(a, b) { var i, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [],
                delegateCount = b.delegateCount,
                cur = a.target; if (delegateCount && cur.nodeType && !(a.type === "click" && a.button >= 1)) { for (; cur !== this; cur = cur.parentNode || this) { if (cur.nodeType === 1 && !(a.type === "click" && cur.disabled === true)) { matchedHandlers = [];
                        matchedSelectors = {}; for (i = 0; i < delegateCount; i++) { handleObj = b[i];
                            sel = handleObj.selector + " "; if (matchedSelectors[sel] === undefined) { matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length } if (matchedSelectors[sel]) { matchedHandlers.push(handleObj) } } if (matchedHandlers.length) { handlerQueue.push({ elem: cur, handlers: matchedHandlers }) } } } }
            cur = this; if (delegateCount < b.length) { handlerQueue.push({ elem: cur, handlers: b.slice(delegateCount) }) } return handlerQueue }, addProp: function(b, c) { Object.defineProperty(jQuery.Event.prototype, b, { enumerable: true, configurable: true, get: F(c) ? function() { if (this.originalEvent) { return c(this.originalEvent) } } : function() { if (this.originalEvent) { return this.originalEvent[b] } }, set: function(a) { Object.defineProperty(this, b, { enumerable: true, configurable: true, writable: true, value: a }) } }) }, fix: function(a) { return a[jQuery.expando] ? a : new jQuery.Event(a) }, special: { load: { noBubble: true }, click: { setup: function(a) { var b = this || a; if (bh.test(b.type) && b.click && nodeName(b, "input")) { leverageNative(b, "click", returnTrue) } return false }, trigger: function(a) { var b = this || a; if (bh.test(b.type) && b.click && nodeName(b, "input")) { leverageNative(b, "click") } return true }, _default: function(a) { var b = a.target; return bh.test(b.type) && b.click && nodeName(b, "input") && X.get(b, "click") || nodeName(b, "a") } }, beforeunload: { postDispatch: function(a) { if (a.result !== undefined && a.originalEvent) { a.originalEvent.returnValue = a.result } } } } };

    function leverageNative(c, d, e) { if (!e) { if (X.get(c, d) === undefined) { jQuery.event.add(c, d, returnTrue) } return }
        X.set(c, d, false);
        jQuery.event.add(c, d, { namespace: false, handler: function(a) { var b, result, saved = X.get(this, d); if ((a.isTrigger & 1) && this[d]) { if (!saved.length) { saved = w.call(arguments);
                        X.set(this, d, saved);
                        b = e(this, d);
                        this[d]();
                        result = X.get(this, d); if (saved !== result || b) { X.set(this, d, false) } else { result = {} } if (saved !== result) { a.stopImmediatePropagation();
                            a.preventDefault(); return result && result.value } } else if ((jQuery.event.special[d] || {}).delegateType) { a.stopPropagation() } } else if (saved.length) { X.set(this, d, { value: jQuery.event.trigger(jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this) });
                    a.stopImmediatePropagation() } } }) }
    jQuery.removeEvent = function(a, b, c) { if (a.removeEventListener) { a.removeEventListener(b, c) } };
    jQuery.Event = function(a, b) { if (!(this instanceof jQuery.Event)) { return new jQuery.Event(a, b) } if (a && a.type) { this.originalEvent = a;
            this.type = a.type;
            this.isDefaultPrevented = a.defaultPrevented || a.defaultPrevented === undefined && a.returnValue === false ? returnTrue : returnFalse;
            this.target = (a.target && a.target.nodeType === 3) ? a.target.parentNode : a.target;
            this.currentTarget = a.currentTarget;
            this.relatedTarget = a.relatedTarget } else { this.type = a } if (b) { jQuery.extend(this, b) }
        this.timeStamp = a && a.timeStamp || Date.now();
        this[jQuery.expando] = true };
    jQuery.Event.prototype = { constructor: jQuery.Event, isDefaultPrevented: returnFalse, isPropagationStopped: returnFalse, isImmediatePropagationStopped: returnFalse, isSimulated: false, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue; if (e && !this.isSimulated) { e.preventDefault() } }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = returnTrue; if (e && !this.isSimulated) { e.stopPropagation() } }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue; if (e && !this.isSimulated) { e.stopImmediatePropagation() }
            this.stopPropagation() } };
    jQuery.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, jQuery.event.addProp);
    jQuery.each({ focus: "focusin", blur: "focusout" }, function(a, b) { jQuery.event.special[a] = { setup: function() { leverageNative(this, a, expectSync); return false }, trigger: function() { leverageNative(this, a); return true }, _default: function() { return true }, delegateType: b } });
    jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(c, d) { jQuery.event.special[c] = { delegateType: d, bindType: d, handle: function(a) { var b, target = this,
                    related = a.relatedTarget,
                    handleObj = a.handleObj; if (!related || (related !== target && !jQuery.contains(target, related))) { a.type = handleObj.origType;
                    b = handleObj.handler.apply(this, arguments);
                    a.type = d } return b } } });
    jQuery.fn.extend({ on: function(a, b, c, d) { return on(this, a, b, c, d) }, one: function(a, b, c, d) { return on(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, type; if (a && a.preventDefault && a.handleObj) { d = a.handleObj;
                jQuery(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler); return this } if (typeof a === "object") { for (type in a) { this.off(type, b, a[type]) } return this } if (b === false || typeof b === "function") { c = b;
                b = undefined } if (c === false) { c = returnFalse } return this.each(function() { jQuery.event.remove(this, a, c, b) }) } }); var bn = /<script|<style|<link/i,
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function manipulationTarget(a, b) { if (nodeName(a, "table") && nodeName(b.nodeType !== 11 ? b : b.firstChild, "tr")) { return jQuery(a).children("tbody")[0] || a } return a }

    function disableScript(a) { a.type = (a.getAttribute("type") !== null) + "/" + a.type; return a }

    function restoreScript(a) { if ((a.type || "").slice(0, 5) === "true/") { a.type = a.type.slice(5) } else { a.removeAttribute("type") } return a }

    function cloneCopyEvent(a, b) { var i, l, type, pdataOld, udataOld, udataCur, events; if (b.nodeType !== 1) { return } if (X.hasData(a)) { pdataOld = X.get(a);
            events = pdataOld.events; if (events) { X.remove(b, "handle events"); for (type in events) { for (i = 0, l = events[type].length; i < l; i++) { jQuery.event.add(b, type, events[type][i]) } } } } if (Y.hasData(a)) { udataOld = Y.access(a);
            udataCur = jQuery.extend({}, udataOld);
            Y.set(b, udataCur) } }

    function fixInput(a, b) { var c = b.nodeName.toLowerCase(); if (c === "input" && bh.test(a.type)) { b.checked = a.checked } else if (c === "input" || c === "textarea") { b.defaultValue = a.defaultValue } }

    function domManip(c, d, e, f) { d = x(d); var g, first, scripts, hasScripts, node, doc, i = 0,
            l = c.length,
            iNoClone = l - 1,
            value = d[0],
            valueIsFunction = F(value); if (valueIsFunction || (l > 1 && typeof value === "string" && !E.checkClone && rchecked.test(value))) { return c.each(function(a) { var b = c.eq(a); if (valueIsFunction) { d[0] = value.call(this, a, b.html()) }
                domManip(b, d, e, f) }) } if (l) { g = buildFragment(d, c[0].ownerDocument, false, c, f);
            first = g.firstChild; if (g.childNodes.length === 1) { g = first } if (first || f) { scripts = jQuery.map(getAll(g, "script"), disableScript);
                hasScripts = scripts.length; for (; i < l; i++) { node = g; if (i !== iNoClone) { node = jQuery.clone(node, true, true); if (hasScripts) { jQuery.merge(scripts, getAll(node, "script")) } }
                    e.call(c[i], node, i) } if (hasScripts) { doc = scripts[scripts.length - 1].ownerDocument;
                    jQuery.map(scripts, restoreScript); for (i = 0; i < hasScripts; i++) { node = scripts[i]; if (bj.test(node.type || "") && !X.access(node, "globalEval") && jQuery.contains(doc, node)) { if (node.src && (node.type || "").toLowerCase() !== "module") { if (jQuery._evalUrl && !node.noModule) { jQuery._evalUrl(node.src, { nonce: node.nonce || node.getAttribute("nonce") }, doc) } } else { DOMEval(node.textContent.replace(rcleanScript, ""), node, doc) } } } } } } return c }

    function remove(a, b, c) { var d, nodes = b ? jQuery.filter(b, a) : a,
            i = 0; for (;
            (d = nodes[i]) != null; i++) { if (!c && d.nodeType === 1) { jQuery.cleanData(getAll(d)) } if (d.parentNode) { if (c && be(d)) { setGlobalEval(getAll(d, "script")) }
                d.parentNode.removeChild(d) } } return a }
    jQuery.extend({ htmlPrefilter: function(a) { return a }, clone: function(a, b, c) { var i, l, srcElements, destElements, clone = a.cloneNode(true),
                inPage = be(a); if (!E.noCloneChecked && (a.nodeType === 1 || a.nodeType === 11) && !jQuery.isXMLDoc(a)) { destElements = getAll(clone);
                srcElements = getAll(a); for (i = 0, l = srcElements.length; i < l; i++) { fixInput(srcElements[i], destElements[i]) } } if (b) { if (c) { srcElements = srcElements || getAll(a);
                    destElements = destElements || getAll(clone); for (i = 0, l = srcElements.length; i < l; i++) { cloneCopyEvent(srcElements[i], destElements[i]) } } else { cloneCopyEvent(a, clone) } }
            destElements = getAll(clone, "script"); if (destElements.length > 0) { setGlobalEval(destElements, !inPage && getAll(a, "script")) } return clone }, cleanData: function(a) { var b, elem, type, special = jQuery.event.special,
                i = 0; for (;
                (elem = a[i]) !== undefined; i++) { if (W(elem)) { if ((b = elem[X.expando])) { if (b.events) { for (type in b.events) { if (special[type]) { jQuery.event.remove(elem, type) } else { jQuery.removeEvent(elem, type, b.handle) } } }
                        elem[X.expando] = undefined } if (elem[Y.expando]) { elem[Y.expando] = undefined } } } } });
    jQuery.fn.extend({ detach: function(a) { return remove(this, a, true) }, remove: function(a) { return remove(this, a) }, text: function(b) { return U(this, function(a) { return a === undefined ? jQuery.text(this) : this.empty().each(function() { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { this.textContent = a } }) }, null, b, arguments.length) }, append: function() { return domManip(this, arguments, function(a) { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { var b = manipulationTarget(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return domManip(this, arguments, function(a) { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { var b = manipulationTarget(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return domManip(this, arguments, function(a) { if (this.parentNode) { this.parentNode.insertBefore(a, this) } }) }, after: function() { return domManip(this, arguments, function(a) { if (this.parentNode) { this.parentNode.insertBefore(a, this.nextSibling) } }) }, empty: function() { var a, i = 0; for (;
                (a = this[i]) != null; i++) { if (a.nodeType === 1) { jQuery.cleanData(getAll(a, false));
                    a.textContent = "" } } return this }, clone: function(a, b) { a = a == null ? false : a;
            b = b == null ? a : b; return this.map(function() { return jQuery.clone(this, a, b) }) }, html: function(c) { return U(this, function(a) { var b = this[0] || {},
                    i = 0,
                    l = this.length; if (a === undefined && b.nodeType === 1) { return b.innerHTML } if (typeof a === "string" && !bn.test(a) && !bk[(bi.exec(a) || ["", ""])[1].toLowerCase()]) { a = jQuery.htmlPrefilter(a); try { for (; i < l; i++) { b = this[i] || {}; if (b.nodeType === 1) { jQuery.cleanData(getAll(b, false));
                                b.innerHTML = a } }
                        b = 0 } catch (e) {} } if (b) { this.empty().append(a) } }, null, c, arguments.length) }, replaceWith: function() { var c = []; return domManip(this, arguments, function(a) { var b = this.parentNode; if (jQuery.inArray(this, c) < 0) { jQuery.cleanData(getAll(this)); if (b) { b.replaceChild(a, this) } } }, c) } });
    jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(c, d) { jQuery.fn[c] = function(a) { var b, ret = [],
                insert = jQuery(a),
                last = insert.length - 1,
                i = 0; for (; i <= last; i++) { b = i === last ? this : this.clone(true);
                jQuery(insert[i])[d](b);
                y.apply(ret, b.get()) } return this.pushStack(ret) } }); var bo = new RegExp("^(" + ba + ")(?!px)[a-z%]+$", "i"); var bq = function(a) { var b = a.ownerDocument.defaultView; if (!b || !b.opener) { b = o } return b.getComputedStyle(a) }; var br = function(a, b, c) { var d, name, old = {}; for (name in b) { old[name] = a.style[name];
            a.style[name] = b[name] }
        d = c.call(a); for (name in b) { a.style[name] = old[name] } return d }; var bs = new RegExp(bc.join("|"), "i");
    (function() {
        function computeStyleTests() { if (!div) { return }
            container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
            bd.appendChild(container).appendChild(div); var a = o.getComputedStyle(div);
            b = a.top !== "1%";
            reliableMarginLeftVal = roundPixelMeasures(a.marginLeft) === 12;
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(a.right) === 36;
            boxSizingReliableVal = roundPixelMeasures(a.width) === 36;
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            bd.removeChild(container);
            div = null }

        function roundPixelMeasures(a) { return Math.round(parseFloat(a)) } var b, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = H.createElement("div"),
            div = H.createElement("div"); if (!div.style) { return }
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        E.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(E, { boxSizingReliable: function() { computeStyleTests(); return boxSizingReliableVal }, pixelBoxStyles: function() { computeStyleTests(); return pixelBoxStylesVal }, pixelPosition: function() { computeStyleTests(); return b }, reliableMarginLeft: function() { computeStyleTests(); return reliableMarginLeftVal }, scrollboxSize: function() { computeStyleTests(); return scrollboxSizeVal }, reliableTrDimensions: function() { var a, tr, trChild, trStyle; if (reliableTrDimensionsVal == null) { a = H.createElement("table");
                    tr = H.createElement("tr");
                    trChild = H.createElement("div");
                    a.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "border:1px solid";
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    trChild.style.display = "block";
                    bd.appendChild(a).appendChild(tr).appendChild(trChild);
                    trStyle = o.getComputedStyle(tr);
                    reliableTrDimensionsVal = (parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10)) === tr.offsetHeight;
                    bd.removeChild(a) } return reliableTrDimensionsVal } }) })();

    function curCSS(a, b, c) { var d, minWidth, maxWidth, ret, style = a.style;
        c = c || bq(a); if (c) { ret = c.getPropertyValue(b) || c[b]; if (ret === "" && !be(a)) { ret = jQuery.style(a, b) } if (!E.pixelBoxStyles() && bo.test(ret) && bs.test(b)) { d = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                style.minWidth = style.maxWidth = style.width = ret;
                ret = c.width;
                style.width = d;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth } } return ret !== undefined ? ret + "" : ret }

    function addGetHookIf(a, b) { return { get: function() { if (a()) { delete this.get; return } return (this.get = b).apply(this, arguments) } } } var bt = ["Webkit", "Moz", "ms"],
        emptyStyle = H.createElement("div").style,
        vendorProps = {};

    function vendorPropName(a) { var b = a[0].toUpperCase() + a.slice(1),
            i = bt.length; while (i--) { a = bt[i] + b; if (a in emptyStyle) { return a } } }

    function finalPropName(a) { var b = jQuery.cssProps[a] || vendorProps[a]; if (b) { return b } if (a in emptyStyle) { return a } return vendorProps[a] = vendorPropName(a) || a } var bu = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = { position: "absolute", visibility: "hidden", display: "block" },
        cssNormalTransform = { letterSpacing: "0", fontWeight: "400" };

    function setPositiveNumber(a, b, c) { var d = bb.exec(b); return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b }

    function boxModelAdjustment(a, b, c, d, e, f) { var i = b === "width" ? 1 : 0,
            extra = 0,
            delta = 0; if (c === (d ? "border" : "content")) { return 0 } for (; i < 4; i += 2) { if (c === "margin") { delta += jQuery.css(a, c + bc[i], true, e) } if (!d) { delta += jQuery.css(a, "padding" + bc[i], true, e); if (c !== "padding") { delta += jQuery.css(a, "border" + bc[i] + "Width", true, e) } else { extra += jQuery.css(a, "border" + bc[i] + "Width", true, e) } } else { if (c === "content") { delta -= jQuery.css(a, "padding" + bc[i], true, e) } if (c !== "margin") { delta -= jQuery.css(a, "border" + bc[i] + "Width", true, e) } } } if (!d && f >= 0) { delta += Math.max(0, Math.ceil(a["offset" + b[0].toUpperCase() + b.slice(1)] - f - delta - extra - 0.5)) || 0 } return delta }

    function getWidthOrHeight(a, b, c) { var d = bq(a),
            boxSizingNeeded = !E.boxSizingReliable() || c,
            isBorderBox = boxSizingNeeded && jQuery.css(a, "boxSizing", false, d) === "border-box",
            valueIsBorderBox = isBorderBox,
            val = curCSS(a, b, d),
            offsetProp = "offset" + b[0].toUpperCase() + b.slice(1); if (bo.test(val)) { if (!c) { return val }
            val = "auto" } if ((!E.boxSizingReliable() && isBorderBox || !E.reliableTrDimensions() && nodeName(a, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(a, "display", false, d) === "inline") && a.getClientRects().length) { isBorderBox = jQuery.css(a, "boxSizing", false, d) === "border-box";
            valueIsBorderBox = offsetProp in a; if (valueIsBorderBox) { val = a[offsetProp] } }
        val = parseFloat(val) || 0; return (val + boxModelAdjustment(a, b, c || (isBorderBox ? "border" : "content"), valueIsBorderBox, d, val)) + "px" }
    jQuery.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = curCSS(a, "opacity"); return c === "" ? "1" : c } } } }, cssNumber: { "animationIterationCount": true, "columnCount": true, "fillOpacity": true, "flexGrow": true, "flexShrink": true, "fontWeight": true, "gridArea": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnStart": true, "gridRow": true, "gridRowEnd": true, "gridRowStart": true, "lineHeight": true, "opacity": true, "order": true, "orphans": true, "widows": true, "zIndex": true, "zoom": true }, cssProps: {}, style: function(a, b, c, d) { if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) { return } var e, type, hooks, origName = camelCase(b),
                isCustomProp = rcustomProp.test(b),
                style = a.style; if (!isCustomProp) { b = finalPropName(origName) }
            hooks = jQuery.cssHooks[b] || jQuery.cssHooks[origName]; if (c !== undefined) { type = typeof c; if (type === "string" && (e = bb.exec(c)) && e[1]) { c = adjustCSS(a, b, e);
                    type = "number" } if (c == null || c !== c) { return } if (type === "number" && !isCustomProp) { c += e && e[3] || (jQuery.cssNumber[origName] ? "" : "px") } if (!E.clearCloneStyle && c === "" && b.indexOf("background") === 0) { style[b] = "inherit" } if (!hooks || !("set" in hooks) || (c = hooks.set(a, c, d)) !== undefined) { if (isCustomProp) { style.setProperty(b, c) } else { style[b] = c } } } else { if (hooks && "get" in hooks && (e = hooks.get(a, false, d)) !== undefined) { return e } return style[b] } }, css: function(a, b, c, d) { var e, num, hooks, origName = camelCase(b),
                isCustomProp = rcustomProp.test(b); if (!isCustomProp) { b = finalPropName(origName) }
            hooks = jQuery.cssHooks[b] || jQuery.cssHooks[origName]; if (hooks && "get" in hooks) { e = hooks.get(a, true, c) } if (e === undefined) { e = curCSS(a, b, d) } if (e === "normal" && b in cssNormalTransform) { e = cssNormalTransform[b] } if (c === "" || c) { num = parseFloat(e); return c === true || isFinite(num) ? num || 0 : e } return e } });
    jQuery.each(["height", "width"], function(e, f) { jQuery.cssHooks[f] = { get: function(a, b, c) { if (b) { return bu.test(jQuery.css(a, "display")) && (!a.getClientRects().length || !a.getBoundingClientRect().width) ? br(a, cssShow, function() { return getWidthOrHeight(a, f, c) }) : getWidthOrHeight(a, f, c) } }, set: function(a, b, c) { var d, styles = bq(a),
                    scrollboxSizeBuggy = !E.scrollboxSize() && styles.position === "absolute",
                    boxSizingNeeded = scrollboxSizeBuggy || c,
                    isBorderBox = boxSizingNeeded && jQuery.css(a, "boxSizing", false, styles) === "border-box",
                    subtract = c ? boxModelAdjustment(a, f, c, isBorderBox, styles) : 0; if (isBorderBox && scrollboxSizeBuggy) { subtract -= Math.ceil(a["offset" + f[0].toUpperCase() + f.slice(1)] - parseFloat(styles[f]) - boxModelAdjustment(a, f, "border", false, styles) - 0.5) } if (subtract && (d = bb.exec(b)) && (d[3] || "px") !== "px") { a.style[f] = b;
                    b = jQuery.css(a, f) } return setPositiveNumber(a, b, subtract) } } });
    jQuery.cssHooks.marginLeft = addGetHookIf(E.reliableMarginLeft, function(a, b) { if (b) { return (parseFloat(curCSS(a, "marginLeft")) || a.getBoundingClientRect().left - br(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left })) + "px" } });
    jQuery.each({ margin: "", padding: "", border: "Width" }, function(b, c) { jQuery.cssHooks[b + c] = { expand: function(a) { var i = 0,
                    expanded = {},
                    parts = typeof a === "string" ? a.split(" ") : [a]; for (; i < 4; i++) { expanded[b + bc[i] + c] = parts[i] || parts[i - 2] || parts[0] } return expanded } }; if (b !== "margin") { jQuery.cssHooks[b + c].set = setPositiveNumber } });
    jQuery.fn.extend({ css: function(e, f) { return U(this, function(a, b, c) { var d, len, map = {},
                    i = 0; if (Array.isArray(b)) { d = bq(a);
                    len = b.length; for (; i < len; i++) { map[b[i]] = jQuery.css(a, b[i], false, d) } return map } return c !== undefined ? jQuery.style(a, b, c) : jQuery.css(a, b) }, e, f, arguments.length > 1) } });

    function Tween(a, b, c, d, e) { return new Tween.prototype.init(a, b, c, d, e) }
    jQuery.Tween = Tween;
    Tween.prototype = { constructor: Tween, init: function(a, b, c, d, e, f) { this.elem = a;
            this.prop = c;
            this.easing = e || jQuery.easing._default;
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit = f || (jQuery.cssNumber[c] ? "" : "px") }, cur: function() { var a = Tween.propHooks[this.prop]; return a && a.get ? a.get(this) : Tween.propHooks._default.get(this) }, run: function(a) { var b, hooks = Tween.propHooks[this.prop]; if (this.options.duration) { this.pos = b = jQuery.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) } else { this.pos = b = a }
            this.now = (this.end - this.start) * b + this.start; if (this.options.step) { this.options.step.call(this.elem, this.now, this) } if (hooks && hooks.set) { hooks.set(this) } else { Tween.propHooks._default.set(this) } return this } };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = { _default: { get: function(a) { var b; if (a.elem.nodeType !== 1 || a.elem[a.prop] != null && a.elem.style[a.prop] == null) { return a.elem[a.prop] }
                b = jQuery.css(a.elem, a.prop, ""); return !b || b === "auto" ? 0 : b }, set: function(a) { if (jQuery.fx.step[a.prop]) { jQuery.fx.step[a.prop](a) } else if (a.elem.nodeType === 1 && (jQuery.cssHooks[a.prop] || a.elem.style[finalPropName(a.prop)] != null)) { jQuery.style(a.elem, a.prop, a.now + a.unit) } else { a.elem[a.prop] = a.now } } } };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { set: function(a) { if (a.elem.nodeType && a.elem.parentNode) { a.elem[a.prop] = a.now } } };
    jQuery.easing = { linear: function(p) { return p }, swing: function(p) { return 0.5 - Math.cos(p * Math.PI) / 2 }, _default: "swing" };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {}; var bv, inProgress, rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

    function schedule() { if (inProgress) { if (H.hidden === false && o.requestAnimationFrame) { o.requestAnimationFrame(schedule) } else { o.setTimeout(schedule, jQuery.fx.interval) }
            jQuery.fx.tick() } }

    function createFxNow() { o.setTimeout(function() { bv = undefined }); return (bv = Date.now()) }

    function genFx(a, b) { var c, i = 0,
            attrs = { height: a };
        b = b ? 1 : 0; for (; i < 4; i += 2 - b) { c = bc[i];
            attrs["margin" + c] = attrs["padding" + c] = a } if (b) { attrs.opacity = attrs.width = a } return attrs }

    function createTween(a, b, c) { var d, collection = (Animation.tweeners[b] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length; for (; index < length; index++) { if ((d = collection[index].call(c, b, a))) { return d } } }

    function defaultPrefilter(a, b, c) { var d, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in b || "height" in b,
            anim = this,
            orig = {},
            style = a.style,
            hidden = a.nodeType && bf(a),
            dataShow = X.get(a, "fxshow"); if (!c.queue) { hooks = jQuery._queueHooks(a, "fx"); if (hooks.unqueued == null) { hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() { if (!hooks.unqueued) { oldfire() } } }
            hooks.unqueued++;
            anim.always(function() { anim.always(function() { hooks.unqueued--; if (!jQuery.queue(a, "fx").length) { hooks.empty.fire() } }) }) } for (d in b) { value = b[d]; if (rfxtypes.test(value)) { delete b[d];
                toggle = toggle || value === "toggle"; if (value === (hidden ? "hide" : "show")) { if (value === "show" && dataShow && dataShow[d] !== undefined) { hidden = true } else { continue } }
                orig[d] = dataShow && dataShow[d] || jQuery.style(a, d) } }
        propTween = !jQuery.isEmptyObject(b); if (!propTween && jQuery.isEmptyObject(orig)) { return } if (isBox && a.nodeType === 1) { c.overflow = [style.overflow, style.overflowX, style.overflowY];
            restoreDisplay = dataShow && dataShow.display; if (restoreDisplay == null) { restoreDisplay = X.get(a, "display") }
            display = jQuery.css(a, "display"); if (display === "none") { if (restoreDisplay) { display = restoreDisplay } else { showHide([a], true);
                    restoreDisplay = a.style.display || restoreDisplay;
                    display = jQuery.css(a, "display");
                    showHide([a]) } } if (display === "inline" || display === "inline-block" && restoreDisplay != null) { if (jQuery.css(a, "float") === "none") { if (!propTween) { anim.done(function() { style.display = restoreDisplay }); if (restoreDisplay == null) { display = style.display;
                            restoreDisplay = display === "none" ? "" : display } }
                    style.display = "inline-block" } } } if (c.overflow) { style.overflow = "hidden";
            anim.always(function() { style.overflow = c.overflow[0];
                style.overflowX = c.overflow[1];
                style.overflowY = c.overflow[2] }) }
        propTween = false; for (d in orig) { if (!propTween) { if (dataShow) { if ("hidden" in dataShow) { hidden = dataShow.hidden } } else { dataShow = X.access(a, "fxshow", { display: restoreDisplay }) } if (toggle) { dataShow.hidden = !hidden } if (hidden) { showHide([a], true) }
                anim.done(function() { if (!hidden) { showHide([a]) }
                    X.remove(a, "fxshow"); for (d in orig) { jQuery.style(a, d, orig[d]) } }) }
            propTween = createTween(hidden ? dataShow[d] : 0, d, anim); if (!(d in dataShow)) { dataShow[d] = propTween.start; if (hidden) { propTween.end = propTween.start;
                    propTween.start = 0 } } } }

    function propFilter(a, b) { var c, name, easing, value, hooks; for (c in a) { name = camelCase(c);
            easing = b[name];
            value = a[c]; if (Array.isArray(value)) { easing = value[1];
                value = a[c] = value[0] } if (c !== name) { a[name] = value;
                delete a[c] }
            hooks = jQuery.cssHooks[name]; if (hooks && "expand" in hooks) { value = hooks.expand(value);
                delete a[name]; for (c in value) { if (!(c in a)) { a[c] = value[c];
                        b[c] = easing } } } else { b[name] = easing } } }

    function Animation(d, e, f) { var g, stopped, index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function() { delete tick.elem }),
            tick = function() { if (stopped) { return false } var a = bv || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - a),
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length; for (; index < length; index++) { animation.tweens[index].run(percent) }
                deferred.notifyWith(d, [animation, percent, remaining]); if (percent < 1 && length) { return remaining } if (!length) { deferred.notifyWith(d, [animation, 1, 0]) }
                deferred.resolveWith(d, [animation]); return false },
            animation = deferred.promise({ elem: d, props: jQuery.extend({}, e), opts: jQuery.extend(true, { specialEasing: {}, easing: jQuery.easing._default }, f), originalProperties: e, originalOptions: f, startTime: bv || createFxNow(), duration: f.duration, tweens: [], createTween: function(a, b) { var c = jQuery.Tween(d, animation.opts, a, b, animation.opts.specialEasing[a] || animation.opts.easing);
                    animation.tweens.push(c); return c }, stop: function(a) { var b = 0,
                        length = a ? animation.tweens.length : 0; if (stopped) { return this }
                    stopped = true; for (; b < length; b++) { animation.tweens[b].run(1) } if (a) { deferred.notifyWith(d, [animation, 1, 0]);
                        deferred.resolveWith(d, [animation, a]) } else { deferred.rejectWith(d, [animation, a]) } return this } }),
            props = animation.props;
        propFilter(props, animation.opts.specialEasing); for (; index < length; index++) { g = Animation.prefilters[index].call(animation, d, props, animation.opts); if (g) { if (F(g.stop)) { jQuery._queueHooks(animation.elem, animation.opts.queue).stop = g.stop.bind(g) } return g } }
        jQuery.map(props, createTween, animation); if (F(animation.opts.start)) { animation.opts.start.call(d, animation) }
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, { elem: d, anim: animation, queue: animation.opts.queue })); return animation }
    jQuery.Animation = jQuery.extend(Animation, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b);
                adjustCSS(c.elem, a, bb.exec(b), c); return c }] }, tweener: function(a, b) { if (F(a)) { b = a;
                a = ["*"] } else { a = a.match(R) } var c, index = 0,
                length = a.length; for (; index < length; index++) { c = a[index];
                Animation.tweeners[c] = Animation.tweeners[c] || [];
                Animation.tweeners[c].unshift(b) } }, prefilters: [defaultPrefilter], prefilter: function(a, b) { if (b) { Animation.prefilters.unshift(a) } else { Animation.prefilters.push(a) } } });
    jQuery.speed = function(a, b, c) { var d = a && typeof a === "object" ? jQuery.extend({}, a) : { complete: c || !c && b || F(a) && a, duration: a, easing: c && b || b && !F(b) && b }; if (jQuery.fx.off) { d.duration = 0 } else { if (typeof d.duration !== "number") { if (d.duration in jQuery.fx.speeds) { d.duration = jQuery.fx.speeds[d.duration] } else { d.duration = jQuery.fx.speeds._default } } } if (d.queue == null || d.queue === true) { d.queue = "fx" }
        d.old = d.complete;
        d.complete = function() { if (F(d.old)) { d.old.call(this) } if (d.queue) { jQuery.dequeue(this, d.queue) } }; return d };
    jQuery.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(bf).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(b, c, d, e) { var f = jQuery.isEmptyObject(b),
                optall = jQuery.speed(c, d, e),
                doAnimation = function() { var a = Animation(this, jQuery.extend({}, b), optall); if (f || X.get(this, "finish")) { a.stop(true) } };
            doAnimation.finish = doAnimation; return f || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation) }, stop: function(c, d, e) { var f = function(a) { var b = a.stop;
                delete a.stop;
                b(e) }; if (typeof c !== "string") { e = d;
                d = c;
                c = undefined } if (d) { this.queue(c || "fx", []) } return this.each(function() { var a = true,
                    index = c != null && c + "queueHooks",
                    timers = jQuery.timers,
                    data = X.get(this); if (index) { if (data[index] && data[index].stop) { f(data[index]) } } else { for (index in data) { if (data[index] && data[index].stop && rrun.test(index)) { f(data[index]) } } } for (index = timers.length; index--;) { if (timers[index].elem === this && (c == null || timers[index].queue === c)) { timers[index].anim.stop(e);
                        a = false;
                        timers.splice(index, 1) } } if (a || !e) { jQuery.dequeue(this, c) } }) }, finish: function(b) { if (b !== false) { b = b || "fx" } return this.each(function() { var a, data = X.get(this),
                    queue = data[b + "queue"],
                    hooks = data[b + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;
                data.finish = true;
                jQuery.queue(this, b, []); if (hooks && hooks.stop) { hooks.stop.call(this, true) } for (a = timers.length; a--;) { if (timers[a].elem === this && timers[a].queue === b) { timers[a].anim.stop(true);
                        timers.splice(a, 1) } } for (a = 0; a < length; a++) { if (queue[a] && queue[a].finish) { queue[a].finish.call(this) } }
                delete data.finish }) } });
    jQuery.each(["toggle", "show", "hide"], function(d, e) { var f = jQuery.fn[e];
        jQuery.fn[e] = function(a, b, c) { return a == null || typeof a === "boolean" ? f.apply(this, arguments) : this.animate(genFx(e, true), a, b, c) } });
    jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(d, e) { jQuery.fn[d] = function(a, b, c) { return this.animate(e, a, b, c) } });
    jQuery.timers = [];
    jQuery.fx.tick = function() { var a, i = 0,
            timers = jQuery.timers;
        bv = Date.now(); for (; i < timers.length; i++) { a = timers[i]; if (!a() && timers[i] === a) { timers.splice(i--, 1) } } if (!timers.length) { jQuery.fx.stop() }
        bv = undefined };
    jQuery.fx.timer = function(a) { jQuery.timers.push(a);
        jQuery.fx.start() };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() { if (inProgress) { return }
        inProgress = true;
        schedule() };
    jQuery.fx.stop = function() { inProgress = null };
    jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    jQuery.fn.delay = function(d, e) { d = jQuery.fx ? jQuery.fx.speeds[d] || d : d;
        e = e || "fx"; return this.queue(e, function(a, b) { var c = o.setTimeout(a, d);
            b.stop = function() { o.clearTimeout(c) } }) };
    (function() { var a = H.createElement("input"),
            select = H.createElement("select"),
            opt = select.appendChild(H.createElement("option"));
        a.type = "checkbox";
        E.checkOn = a.value !== "";
        E.optSelected = opt.selected;
        a = H.createElement("input");
        a.value = "t";
        a.type = "radio";
        E.radioValue = a.value === "t" })(); var bw, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({ attr: function(a, b) { return U(this, jQuery.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { jQuery.removeAttr(this, a) }) } });
    jQuery.extend({ attr: function(a, b, c) { var d, hooks, nType = a.nodeType; if (nType === 3 || nType === 8 || nType === 2) { return } if (typeof a.getAttribute === "undefined") { return jQuery.prop(a, b, c) } if (nType !== 1 || !jQuery.isXMLDoc(a)) { hooks = jQuery.attrHooks[b.toLowerCase()] || (jQuery.expr.match.bool.test(b) ? bw : undefined) } if (c !== undefined) { if (c === null) { jQuery.removeAttr(a, b); return } if (hooks && "set" in hooks && (d = hooks.set(a, c, b)) !== undefined) { return d }
                a.setAttribute(b, c + ""); return c } if (hooks && "get" in hooks && (d = hooks.get(a, b)) !== null) { return d }
            d = jQuery.find.attr(a, b); return d == null ? undefined : d }, attrHooks: { type: { set: function(a, b) { if (!E.radioValue && b === "radio" && nodeName(a, "input")) { var c = a.value;
                        a.setAttribute("type", b); if (c) { a.value = c } return b } } } }, removeAttr: function(a, b) { var c, i = 0,
                attrNames = b && b.match(R); if (attrNames && a.nodeType === 1) { while ((c = attrNames[i++])) { a.removeAttribute(c) } } } });
    bw = { set: function(a, b, c) { if (b === false) { jQuery.removeAttr(a, c) } else { a.setAttribute(c, c) } return c } };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(e, f) { var g = attrHandle[f] || jQuery.find.attr;
        attrHandle[f] = function(a, b, c) { var d, handle, lowercaseName = b.toLowerCase(); if (!c) { handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = d;
                d = g(a, b, c) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle } return d } }); var bx = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({ prop: function(a, b) { return U(this, jQuery.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return this.each(function() { delete this[jQuery.propFix[a] || a] }) } });
    jQuery.extend({ prop: function(a, b, c) { var d, hooks, nType = a.nodeType; if (nType === 3 || nType === 8 || nType === 2) { return } if (nType !== 1 || !jQuery.isXMLDoc(a)) { b = jQuery.propFix[b] || b;
                hooks = jQuery.propHooks[b] } if (c !== undefined) { if (hooks && "set" in hooks && (d = hooks.set(a, c, b)) !== undefined) { return d } return (a[b] = c) } if (hooks && "get" in hooks && (d = hooks.get(a, b)) !== null) { return d } return a[b] }, propHooks: { tabIndex: { get: function(a) { var b = jQuery.find.attr(a, "tabindex"); if (b) { return parseInt(b, 10) } if (bx.test(a.nodeName) || rclickable.test(a.nodeName) && a.href) { return 0 } return -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }); if (!E.optSelected) { jQuery.propHooks.selected = { get: function(a) { var b = a.parentNode; if (b && b.parentNode) { b.parentNode.selectedIndex } return null }, set: function(a) { var b = a.parentNode; if (b) { b.selectedIndex; if (b.parentNode) { b.parentNode.selectedIndex } } } } }
    jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { jQuery.propFix[this.toLowerCase()] = this });

    function stripAndCollapse(a) { var b = a.match(R) || []; return b.join(" ") }

    function getClass(a) { return a.getAttribute && a.getAttribute("class") || "" }

    function classesToArray(a) { if (Array.isArray(a)) { return a } if (typeof a === "string") { return a.match(R) || [] } return [] }
    jQuery.fn.extend({ addClass: function(a) { var b, elem, cur, curValue, clazz, j, finalValue, i = 0; if (F(a)) { return this.each(function(j) { jQuery(this).addClass(a.call(this, j, getClass(this))) }) }
            b = classesToArray(a); if (b.length) { while ((elem = this[i++])) { curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " "); if (cur) { j = 0; while ((clazz = b[j++])) { if (cur.indexOf(" " + clazz + " ") < 0) { cur += clazz + " " } }
                        finalValue = stripAndCollapse(cur); if (curValue !== finalValue) { elem.setAttribute("class", finalValue) } } } } return this }, removeClass: function(a) { var b, elem, cur, curValue, clazz, j, finalValue, i = 0; if (F(a)) { return this.each(function(j) { jQuery(this).removeClass(a.call(this, j, getClass(this))) }) } if (!arguments.length) { return this.attr("class", "") }
            b = classesToArray(a); if (b.length) { while ((elem = this[i++])) { curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " "); if (cur) { j = 0; while ((clazz = b[j++])) { while (cur.indexOf(" " + clazz + " ") > -1) { cur = cur.replace(" " + clazz + " ", " ") } }
                        finalValue = stripAndCollapse(cur); if (curValue !== finalValue) { elem.setAttribute("class", finalValue) } } } } return this }, toggleClass: function(b, c) { var d = typeof b,
                isValidValue = d === "string" || Array.isArray(b); if (typeof c === "boolean" && isValidValue) { return c ? this.addClass(b) : this.removeClass(b) } if (F(b)) { return this.each(function(i) { jQuery(this).toggleClass(b.call(this, i, getClass(this), c), c) }) } return this.each(function() { var a, i, self, classNames; if (isValidValue) { i = 0;
                    self = jQuery(this);
                    classNames = classesToArray(b); while ((a = classNames[i++])) { if (self.hasClass(a)) { self.removeClass(a) } else { self.addClass(a) } } } else if (b === undefined || d === "boolean") { a = getClass(this); if (a) { X.set(this, "__className__", a) } if (this.setAttribute) { this.setAttribute("class", a || b === false ? "" : X.get(this, "__className__") || "") } } }) }, hasClass: function(a) { var b, elem, i = 0;
            b = " " + a + " "; while ((elem = this[i++])) { if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(b) > -1) { return true } } return false } }); var by = /\r/g;
    jQuery.fn.extend({ val: function(c) { var d, ret, valueIsFunction, elem = this[0]; if (!arguments.length) { if (elem) { d = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()]; if (d && "get" in d && (ret = d.get(elem, "value")) !== undefined) { return ret }
                    ret = elem.value; if (typeof ret === "string") { return ret.replace(by, "") } return ret == null ? "" : ret } return }
            valueIsFunction = F(c); return this.each(function(i) { var b; if (this.nodeType !== 1) { return } if (valueIsFunction) { b = c.call(this, i, jQuery(this).val()) } else { b = c } if (b == null) { b = "" } else if (typeof b === "number") { b += "" } else if (Array.isArray(b)) { b = jQuery.map(b, function(a) { return a == null ? "" : a + "" }) }
                d = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; if (!d || !("set" in d) || d.set(this, b, "value") === undefined) { this.value = b } }) } });
    jQuery.extend({ valHooks: { option: { get: function(a) { var b = jQuery.find.attr(a, "value"); return b != null ? b : stripAndCollapse(jQuery.text(a)) } }, select: { get: function(a) { var b, option, i, options = a.options,
                        index = a.selectedIndex,
                        one = a.type === "select-one",
                        values = one ? null : [],
                        max = one ? index + 1 : options.length; if (index < 0) { i = max } else { i = one ? index : 0 } for (; i < max; i++) { option = options[i]; if ((option.selected || i === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) { b = jQuery(option).val(); if (one) { return b }
                            values.push(b) } } return values }, set: function(a, b) { var c, option, options = a.options,
                        values = jQuery.makeArray(b),
                        i = options.length; while (i--) { option = options[i]; if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) { c = true } } if (!c) { a.selectedIndex = -1 } return values } } } });
    jQuery.each(["radio", "checkbox"], function() { jQuery.valHooks[this] = { set: function(a, b) { if (Array.isArray(b)) { return (a.checked = jQuery.inArray(jQuery(a).val(), b) > -1) } } }; if (!E.checkOn) { jQuery.valHooks[this].get = function(a) { return a.getAttribute("value") === null ? "on" : a.value } } });
    E.focusin = "onfocusin" in o; var bz = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function(e) { e.stopPropagation() };
    jQuery.extend(jQuery.event, { trigger: function(a, b, c, d) { var i, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [c || H],
                type = B.call(a, "type") ? a.type : a,
                namespaces = B.call(a, "namespace") ? a.namespace.split(".") : [];
            cur = lastElement = tmp = c = c || H; if (c.nodeType === 3 || c.nodeType === 8) { return } if (bz.test(type + jQuery.event.triggered)) { return } if (type.indexOf(".") > -1) { namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort() }
            ontype = type.indexOf(":") < 0 && "on" + type;
            a = a[jQuery.expando] ? a : new jQuery.Event(type, typeof a === "object" && a);
            a.isTrigger = d ? 2 : 3;
            a.namespace = namespaces.join(".");
            a.rnamespace = a.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            a.result = undefined; if (!a.target) { a.target = c }
            b = b == null ? [a] : jQuery.makeArray(b, [a]);
            special = jQuery.event.special[type] || {}; if (!d && special.trigger && special.trigger.apply(c, b) === false) { return } if (!d && !special.noBubble && !G(c)) { bubbleType = special.delegateType || type; if (!bz.test(bubbleType + type)) { cur = cur.parentNode } for (; cur; cur = cur.parentNode) { eventPath.push(cur);
                    tmp = cur } if (tmp === (c.ownerDocument || H)) { eventPath.push(tmp.defaultView || tmp.parentWindow || o) } }
            i = 0; while ((cur = eventPath[i++]) && !a.isPropagationStopped()) { lastElement = cur;
                a.type = i > 1 ? bubbleType : special.bindType || type;
                handle = (X.get(cur, "events") || Object.create(null))[a.type] && X.get(cur, "handle"); if (handle) { handle.apply(cur, b) }
                handle = ontype && cur[ontype]; if (handle && handle.apply && W(cur)) { a.result = handle.apply(cur, b); if (a.result === false) { a.preventDefault() } } }
            a.type = type; if (!d && !a.isDefaultPrevented()) { if ((!special._default || special._default.apply(eventPath.pop(), b) === false) && W(c)) { if (ontype && F(c[type]) && !G(c)) { tmp = c[ontype]; if (tmp) { c[ontype] = null }
                        jQuery.event.triggered = type; if (a.isPropagationStopped()) { lastElement.addEventListener(type, stopPropagationCallback) }
                        c[type](); if (a.isPropagationStopped()) { lastElement.removeEventListener(type, stopPropagationCallback) }
                        jQuery.event.triggered = undefined; if (tmp) { c[ontype] = tmp } } } } return a.result }, simulate: function(a, b, c) { var e = jQuery.extend(new jQuery.Event(), c, { type: a, isSimulated: true });
            jQuery.event.trigger(e, null, b) } });
    jQuery.fn.extend({ trigger: function(a, b) { return this.each(function() { jQuery.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; if (c) { return jQuery.event.trigger(a, b, c, true) } } }); if (!E.focusin) { jQuery.each({ focus: "focusin", blur: "focusout" }, function(b, c) { var d = function(a) { jQuery.event.simulate(c, a.target, jQuery.event.fix(a)) };
            jQuery.event.special[c] = { setup: function() { var a = this.ownerDocument || this.document || this,
                        attaches = X.access(a, c); if (!attaches) { a.addEventListener(b, d, true) }
                    X.access(a, c, (attaches || 0) + 1) }, teardown: function() { var a = this.ownerDocument || this.document || this,
                        attaches = X.access(a, c) - 1; if (!attaches) { a.removeEventListener(b, d, true);
                        X.remove(a, c) } else { X.access(a, c, attaches) } } } }) } var bA = o.location; var bB = { guid: Date.now() }; var bC = (/\?/);
    jQuery.parseXML = function(b) { var c, parserErrorElem; if (!b || typeof b !== "string") { return null } try { c = (new o.DOMParser()).parseFromString(b, "text/xml") } catch (e) {}
        parserErrorElem = c && c.getElementsByTagName("parsererror")[0]; if (!c || parserErrorElem) { jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(a) { return a.textContent }).join("\n") : b)) } return c }; var bD = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(a, b, c, d) { var e; if (Array.isArray(b)) { jQuery.each(b, function(i, v) { if (c || bD.test(a)) { d(a, v) } else { buildParams(a + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, c, d) } }) } else if (!c && toType(b) === "object") { for (e in b) { buildParams(a + "[" + e + "]", b[e], c, d) } } else { d(a, b) } }
    jQuery.param = function(a, d) { var e, s = [],
            add = function(a, b) { var c = F(b) ? b() : b;
                s[s.length] = encodeURIComponent(a) + "=" + encodeURIComponent(c == null ? "" : c) }; if (a == null) { return "" } if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) { jQuery.each(a, function() { add(this.name, this.value) }) } else { for (e in a) { buildParams(e, a[e], d, add) } } return s.join("&") };
    jQuery.fn.extend({ serialize: function() { return jQuery.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = jQuery.prop(this, "elements"); return a ? jQuery.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(a) && (this.checked || !bh.test(a)) }).map(function(b, c) { var d = jQuery(this).val(); if (d == null) { return null } if (Array.isArray(d)) { return jQuery.map(d, function(a) { return { name: c.name, value: a.replace(rCRLF, "\r\n") } }) } return { name: c.name, value: d.replace(rCRLF, "\r\n") } }).get() } }); var bE = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,
        prefilters = {},
        transports = {},
        allTypes = "*/".concat("*"),
        originAnchor = H.createElement("a");
    originAnchor.href = bA.href;

    function addToPrefiltersOrTransports(d) { return function(a, b) { if (typeof a !== "string") { b = a;
                a = "*" } var c, i = 0,
                dataTypes = a.toLowerCase().match(R) || []; if (F(b)) { while ((c = dataTypes[i++])) { if (c[0] === "+") { c = c.slice(1) || "*";
                        (d[c] = d[c] || []).unshift(b) } else {
                        (d[c] = d[c] || []).push(b) } } } } }

    function inspectPrefiltersOrTransports(e, f, g, h) { var i = {},
            seekingTransport = (e === transports);

        function inspect(c) { var d;
            i[c] = true;
            jQuery.each(e[c] || [], function(_, a) { var b = a(f, g, h); if (typeof b === "string" && !seekingTransport && !i[b]) { f.dataTypes.unshift(b);
                    inspect(b); return false } else if (seekingTransport) { return !(d = b) } }); return d } return inspect(f.dataTypes[0]) || !i["*"] && inspect("*") }

    function ajaxExtend(a, b) { var c, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {}; for (c in b) { if (b[c] !== undefined) {
                (flatOptions[c] ? a : (deep || (deep = {})))[c] = b[c] } } if (deep) { jQuery.extend(true, a, deep) } return a }

    function ajaxHandleResponses(s, a, b) { var c, type, finalDataType, firstDataType, contents = s.contents,
            dataTypes = s.dataTypes; while (dataTypes[0] === "*") { dataTypes.shift(); if (c === undefined) { c = s.mimeType || a.getResponseHeader("Content-Type") } } if (c) { for (type in contents) { if (contents[type] && contents[type].test(c)) { dataTypes.unshift(type); break } } } if (dataTypes[0] in b) { finalDataType = dataTypes[0] } else { for (type in b) { if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) { finalDataType = type; break } if (!firstDataType) { firstDataType = type } }
            finalDataType = finalDataType || firstDataType } if (finalDataType) { if (finalDataType !== dataTypes[0]) { dataTypes.unshift(finalDataType) } return b[finalDataType] } }

    function ajaxConvert(s, a, b, c) { var d, current, conv, tmp, prev, converters = {},
            dataTypes = s.dataTypes.slice(); if (dataTypes[1]) { for (conv in s.converters) { converters[conv.toLowerCase()] = s.converters[conv] } }
        current = dataTypes.shift(); while (current) { if (s.responseFields[current]) { b[s.responseFields[current]] = a } if (!prev && c && s.dataFilter) { a = s.dataFilter(a, s.dataType) }
            prev = current;
            current = dataTypes.shift(); if (current) { if (current === "*") { current = prev } else if (prev !== "*" && prev !== current) { conv = converters[prev + " " + current] || converters["* " + current]; if (!conv) { for (d in converters) { tmp = d.split(" "); if (tmp[1] === current) { conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]]; if (conv) { if (conv === true) { conv = converters[d] } else if (converters[d] !== true) { current = tmp[0];
                                        dataTypes.unshift(tmp[1]) } break } } } } if (conv !== true) { if (conv && s.throws) { a = conv(a); } else { try { a = conv(a) } catch (e) { return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current } } } } } } } return { state: "success", data: a } }
    jQuery.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: bA.href, type: "GET", isLocal: rlocalProtocol.test(bA.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": jQuery.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(a, b) { return b ? ajaxExtend(ajaxExtend(a, jQuery.ajaxSettings), b) : ajaxExtend(jQuery.ajaxSettings, a) }, ajaxPrefilter: addToPrefiltersOrTransports(prefilters), ajaxTransport: addToPrefiltersOrTransports(transports), ajax: function(f, g) { if (typeof f === "object") { g = f;
                f = undefined }
            g = g || {}; var h, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed, fireGlobals, i, uncached, s = jQuery.ajaxSetup({}, g),
                callbackContext = s.context || s,
                globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),
                statusCode = s.statusCode || {},
                requestHeaders = {},
                requestHeadersNames = {},
                strAbort = "canceled",
                jqXHR = { readyState: 0, getResponseHeader: function(a) { var b; if (completed) { if (!responseHeaders) { responseHeaders = {}; while ((b = rheaders.exec(responseHeadersString))) { responseHeaders[b[1].toLowerCase() + " "] = (responseHeaders[b[1].toLowerCase() + " "] || []).concat(b[2]) } }
                            b = responseHeaders[a.toLowerCase() + " "] } return b == null ? null : b.join(", ") }, getAllResponseHeaders: function() { return completed ? responseHeadersString : null }, setRequestHeader: function(a, b) { if (completed == null) { a = requestHeadersNames[a.toLowerCase()] = requestHeadersNames[a.toLowerCase()] || a;
                            requestHeaders[a] = b } return this }, overrideMimeType: function(a) { if (completed == null) { s.mimeType = a } return this }, statusCode: function(a) { var b; if (a) { if (completed) { jqXHR.always(a[jqXHR.status]) } else { for (b in a) { statusCode[b] = [statusCode[b], a[b]] } } } return this }, abort: function(a) { var b = a || strAbort; if (h) { h.abort(b) }
                        done(0, b); return this } };
            deferred.promise(jqXHR);
            s.url = ((f || s.url || bA.href) + "").replace(rprotocol, bA.protocol + "//");
            s.type = g.method || g.type || s.method || s.type;
            s.dataTypes = (s.dataType || "*").toLowerCase().match(R) || [""]; if (s.crossDomain == null) { urlAnchor = H.createElement("a"); try { urlAnchor.href = s.url;
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host } catch (e) { s.crossDomain = true } } if (s.data && s.processData && typeof s.data !== "string") { s.data = jQuery.param(s.data, s.traditional) }
            inspectPrefiltersOrTransports(prefilters, s, g, jqXHR); if (completed) { return jqXHR }
            fireGlobals = jQuery.event && s.global; if (fireGlobals && jQuery.active++ === 0) { jQuery.event.trigger("ajaxStart") }
            s.type = s.type.toUpperCase();
            s.hasContent = !rnoContent.test(s.type);
            cacheURL = s.url.replace(rhash, ""); if (!s.hasContent) { uncached = s.url.slice(cacheURL.length); if (s.data && (s.processData || typeof s.data === "string")) { cacheURL += (bC.test(cacheURL) ? "&" : "?") + s.data;
                    delete s.data } if (s.cache === false) { cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (bC.test(cacheURL) ? "&" : "?") + "_=" + (bB.guid++) + uncached }
                s.url = cacheURL + uncached } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) { s.data = s.data.replace(bE, "+") } if (s.ifModified) { if (jQuery.lastModified[cacheURL]) { jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]) } if (jQuery.etag[cacheURL]) { jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]) } } if (s.data && s.hasContent && s.contentType !== false || g.contentType) { jqXHR.setRequestHeader("Content-Type", s.contentType) }
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); for (i in s.headers) { jqXHR.setRequestHeader(i, s.headers[i]) } if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) { return jqXHR.abort() }
            strAbort = "abort";
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            h = inspectPrefiltersOrTransports(transports, s, g, jqXHR); if (!h) { done(-1, "No Transport") } else { jqXHR.readyState = 1; if (fireGlobals) { globalEventContext.trigger("ajaxSend", [jqXHR, s]) } if (completed) { return jqXHR } if (s.async && s.timeout > 0) { timeoutTimer = o.setTimeout(function() { jqXHR.abort("timeout") }, s.timeout) } try { completed = false;
                    h.send(requestHeaders, done) } catch (e) { if (completed) { throw e; }
                    done(-1, e) } }

            function done(a, b, c, d) { var e, success, error, response, modified, statusText = b; if (completed) { return }
                completed = true; if (timeoutTimer) { o.clearTimeout(timeoutTimer) }
                h = undefined;
                responseHeadersString = d || "";
                jqXHR.readyState = a > 0 ? 4 : 0;
                e = a >= 200 && a < 300 || a === 304; if (c) { response = ajaxHandleResponses(s, jqXHR, c) } if (!e && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) { s.converters["text script"] = function() {} }
                response = ajaxConvert(s, response, jqXHR, e); if (e) { if (s.ifModified) { modified = jqXHR.getResponseHeader("Last-Modified"); if (modified) { jQuery.lastModified[cacheURL] = modified }
                        modified = jqXHR.getResponseHeader("etag"); if (modified) { jQuery.etag[cacheURL] = modified } } if (a === 204 || s.type === "HEAD") { statusText = "nocontent" } else if (a === 304) { statusText = "notmodified" } else { statusText = response.state;
                        success = response.data;
                        error = response.error;
                        e = !error } } else { error = statusText; if (a || !statusText) { statusText = "error"; if (a < 0) { a = 0 } } }
                jqXHR.status = a;
                jqXHR.statusText = (b || statusText) + ""; if (e) { deferred.resolveWith(callbackContext, [success, statusText, jqXHR]) } else { deferred.rejectWith(callbackContext, [jqXHR, statusText, error]) }
                jqXHR.statusCode(statusCode);
                statusCode = undefined; if (fireGlobals) { globalEventContext.trigger(e ? "ajaxSuccess" : "ajaxError", [jqXHR, s, e ? success : error]) }
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]); if (fireGlobals) { globalEventContext.trigger("ajaxComplete", [jqXHR, s]); if (!(--jQuery.active)) { jQuery.event.trigger("ajaxStop") } } } return jqXHR }, getJSON: function(a, b, c) { return jQuery.get(a, b, c, "json") }, getScript: function(a, b) { return jQuery.get(a, undefined, b, "script") } });
    jQuery.each(["get", "post"], function(e, f) { jQuery[f] = function(a, b, c, d) { if (F(b)) { d = d || c;
                c = b;
                b = undefined } return jQuery.ajax(jQuery.extend({ url: a, type: f, dataType: d, data: b, success: c }, jQuery.isPlainObject(a) && a)) } });
    jQuery.ajaxPrefilter(function(s) { var i; for (i in s.headers) { if (i.toLowerCase() === "content-type") { s.contentType = s.headers[i] || "" } } });
    jQuery._evalUrl = function(b, c, d) { return jQuery.ajax({ url: b, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {} }, dataFilter: function(a) { jQuery.globalEval(a, c, d) } }) };
    jQuery.fn.extend({ wrapAll: function(b) { var c; if (this[0]) { if (F(b)) { b = b.call(this[0]) }
                c = jQuery(b, this[0].ownerDocument).eq(0).clone(true); if (this[0].parentNode) { c.insertBefore(this[0]) }
                c.map(function() { var a = this; while (a.firstElementChild) { a = a.firstElementChild } return a }).append(this) } return this }, wrapInner: function(b) { if (F(b)) { return this.each(function(i) { jQuery(this).wrapInner(b.call(this, i)) }) } return this.each(function() { var a = jQuery(this),
                    contents = a.contents(); if (contents.length) { contents.wrapAll(b) } else { a.append(b) } }) }, wrap: function(a) { var b = F(a); return this.each(function(i) { jQuery(this).wrapAll(b ? a.call(this, i) : a) }) }, unwrap: function(a) { this.parent(a).not("body").each(function() { jQuery(this).replaceWith(this.childNodes) }); return this } });
    jQuery.expr.pseudos.hidden = function(a) { return !jQuery.expr.pseudos.visible(a) };
    jQuery.expr.pseudos.visible = function(a) { return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length) };
    jQuery.ajaxSettings.xhr = function() { try { return new o.XMLHttpRequest() } catch (e) {} }; var bF = { 0: 200, 1223: 204 },
        xhrSupported = jQuery.ajaxSettings.xhr();
    E.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    E.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(d) { var f, errorCallback; if (E.cors || xhrSupported && !d.crossDomain) { return { send: function(b, c) { var i, xhr = d.xhr();
                    xhr.open(d.type, d.url, d.async, d.username, d.password); if (d.xhrFields) { for (i in d.xhrFields) { xhr[i] = d.xhrFields[i] } } if (d.mimeType && xhr.overrideMimeType) { xhr.overrideMimeType(d.mimeType) } if (!d.crossDomain && !b["X-Requested-With"]) { b["X-Requested-With"] = "XMLHttpRequest" } for (i in b) { xhr.setRequestHeader(i, b[i]) }
                    f = function(a) { return function() { if (f) { f = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null; if (a === "abort") { xhr.abort() } else if (a === "error") { if (typeof xhr.status !== "number") { c(0, "error") } else { c(xhr.status, xhr.statusText) } } else { c(bF[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders()) } } } };
                    xhr.onload = f();
                    errorCallback = xhr.onerror = xhr.ontimeout = f("error"); if (xhr.onabort !== undefined) { xhr.onabort = errorCallback } else { xhr.onreadystatechange = function() { if (xhr.readyState === 4) { o.setTimeout(function() { if (f) { errorCallback() } }) } } }
                    f = f("abort"); try { xhr.send(d.hasContent && d.data || null) } catch (e) { if (f) { throw e; } } }, abort: function() { if (f) { f() } } } } });
    jQuery.ajaxPrefilter(function(s) { if (s.crossDomain) { s.contents.script = false } });
    jQuery.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { jQuery.globalEval(a); return a } } });
    jQuery.ajaxPrefilter("script", function(s) { if (s.cache === undefined) { s.cache = false } if (s.crossDomain) { s.type = "GET" } });
    jQuery.ajaxTransport("script", function(s) { if (s.crossDomain || s.scriptAttrs) { var c, callback; return { send: function(_, b) { c = jQuery("<script>").attr(s.scriptAttrs || {}).prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(a) { c.remove();
                        callback = null; if (a) { b(a.type === "error" ? 404 : 200, a.type) } });
                    H.head.appendChild(c[0]) }, abort: function() { if (callback) { callback() } } } } }); var bG = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = bG.pop() || (jQuery.expando + "_" + (bB.guid++));
            this[a] = true; return a } });
    jQuery.ajaxPrefilter("json jsonp", function(s, a, b) { var c, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); if (jsonProp || s.dataTypes[0] === "jsonp") { c = s.jsonpCallback = F(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; if (jsonProp) { s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + c) } else if (s.jsonp !== false) { s.url += (bC.test(s.url) ? "&" : "?") + s.jsonp + "=" + c }
            s.converters["script json"] = function() { if (!responseContainer) { jQuery.error(c + " was not called") } return responseContainer[0] };
            s.dataTypes[0] = "json";
            overwritten = o[c];
            o[c] = function() { responseContainer = arguments };
            b.always(function() { if (overwritten === undefined) { jQuery(o).removeProp(c) } else { o[c] = overwritten } if (s[c]) { s.jsonpCallback = a.jsonpCallback;
                    bG.push(c) } if (responseContainer && F(overwritten)) { overwritten(responseContainer[0]) }
                responseContainer = overwritten = undefined }); return "script" } });
    E.createHTMLDocument = (function() { var a = H.implementation.createHTMLDocument("").body;
        a.innerHTML = "<form></form><form></form>"; return a.childNodes.length === 2 })();
    jQuery.parseHTML = function(a, b, c) { if (typeof a !== "string") { return [] } if (typeof b === "boolean") { c = b;
            b = false } var d, parsed, scripts; if (!b) { if (E.createHTMLDocument) { b = H.implementation.createHTMLDocument("");
                d = b.createElement("base");
                d.href = H.location.href;
                b.head.appendChild(d) } else { b = H } }
        parsed = O.exec(a);
        scripts = !c && []; if (parsed) { return [b.createElement(parsed[1])] }
        parsed = buildFragment([a], b, scripts); if (scripts && scripts.length) { jQuery(scripts).remove() } return jQuery.merge([], parsed.childNodes) };
    jQuery.fn.load = function(c, d, e) { var f, type, response, self = this,
            off = c.indexOf(" "); if (off > -1) { f = stripAndCollapse(c.slice(off));
            c = c.slice(0, off) } if (F(d)) { e = d;
            d = undefined } else if (d && typeof d === "object") { type = "POST" } if (self.length > 0) { jQuery.ajax({ url: c, type: type || "GET", dataType: "html", data: d }).done(function(a) { response = arguments;
                self.html(f ? jQuery("<div>").append(jQuery.parseHTML(a)).find(f) : a) }).always(e && function(a, b) { self.each(function() { e.apply(this, response || [a.responseText, b, a]) }) }) } return this };
    jQuery.expr.pseudos.animated = function(b) { return jQuery.grep(jQuery.timers, function(a) { return b === a.elem }).length };
    jQuery.offset = { setOffset: function(a, b, i) { var c, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(a, "position"),
                curElem = jQuery(a),
                props = {}; if (position === "static") { a.style.position = "relative" }
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(a, "top");
            curCSSLeft = jQuery.css(a, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; if (calculatePosition) { c = curElem.position();
                curTop = c.top;
                curLeft = c.left } else { curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0 } if (F(b)) { b = b.call(a, i, jQuery.extend({}, curOffset)) } if (b.top != null) { props.top = (b.top - curOffset.top) + curTop } if (b.left != null) { props.left = (b.left - curOffset.left) + curLeft } if ("using" in b) { b.using.call(a, props) } else { curElem.css(props) } } };
    jQuery.fn.extend({ offset: function(a) { if (arguments.length) { return a === undefined ? this : this.each(function(i) { jQuery.offset.setOffset(this, a, i) }) } var b, win, elem = this[0]; if (!elem) { return } if (!elem.getClientRects().length) { return { top: 0, left: 0 } }
            b = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView; return { top: b.top + win.pageYOffset, left: b.left + win.pageXOffset } }, position: function() { if (!this[0]) { return } var a, offset, doc, elem = this[0],
                parentOffset = { top: 0, left: 0 }; if (jQuery.css(elem, "position") === "fixed") { offset = elem.getBoundingClientRect() } else { offset = this.offset();
                doc = elem.ownerDocument;
                a = elem.offsetParent || doc.documentElement; while (a && (a === doc.body || a === doc.documentElement) && jQuery.css(a, "position") === "static") { a = a.parentNode } if (a && a !== elem && a.nodeType === 1) { parentOffset = jQuery(a).offset();
                    parentOffset.top += jQuery.css(a, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(a, "borderLeftWidth", true) } } return { top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true), left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true) } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && jQuery.css(a, "position") === "static") { a = a.offsetParent } return a || bd }) } });
    jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(f, g) { var h = "pageYOffset" === g;
        jQuery.fn[f] = function(e) { return U(this, function(a, b, c) { var d; if (G(a)) { d = a } else if (a.nodeType === 9) { d = a.defaultView } if (c === undefined) { return d ? d[g] : a[b] } if (d) { d.scrollTo(!h ? c : d.pageXOffset, h ? c : d.pageYOffset) } else { a[b] = c } }, f, e, arguments.length) } });
    jQuery.each(["top", "left"], function(c, d) { jQuery.cssHooks[d] = addGetHookIf(E.pixelPosition, function(a, b) { if (b) { b = curCSS(a, d); return bo.test(b) ? jQuery(a).position()[d] + "px" : b } }) });
    jQuery.each({ Height: "height", Width: "width" }, function(j, k) { jQuery.each({ padding: "inner" + j, content: k, "": "outer" + j }, function(h, i) { jQuery.fn[i] = function(e, f) { var g = arguments.length && (h || typeof e !== "boolean"),
                    extra = h || (e === true || f === true ? "margin" : "border"); return U(this, function(a, b, c) { var d; if (G(a)) { return i.indexOf("outer") === 0 ? a["inner" + j] : a.document.documentElement["client" + j] } if (a.nodeType === 9) { d = a.documentElement; return Math.max(a.body["scroll" + j], d["scroll" + j], a.body["offset" + j], d["offset" + j], d["client" + j]) } return c === undefined ? jQuery.css(a, b, extra) : jQuery.style(a, b, c, extra) }, k, g ? e : undefined, g) } }) });
    jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(b, c) { jQuery.fn[c] = function(a) { return this.on(c, a) } });
    jQuery.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return arguments.length === 1 ? this.off(a, "**") : this.off(b, a || "**", c) }, hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } });
    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(c, d) { jQuery.fn[d] = function(a, b) { return arguments.length > 0 ? this.on(d, null, a, b) : this.trigger(d) } }); var bH = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function(a, b) { var c, args, proxy; if (typeof b === "string") { c = a[b];
            b = a;
            a = c } if (!F(a)) { return undefined }
        args = w.call(arguments, 2);
        proxy = function() { return a.apply(b || this, args.concat(w.call(arguments))) };
        proxy.guid = a.guid = a.guid || jQuery.guid++; return proxy };
    jQuery.holdReady = function(a) { if (a) { jQuery.readyWait++ } else { jQuery.ready(true) } };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = F;
    jQuery.isWindow = G;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(a) { var b = jQuery.type(a); return (b === "number" || b === "string") && !isNaN(a - parseFloat(a)) };
    jQuery.trim = function(a) { return a == null ? "" : (a + "").replace(bH, "") }; if (typeof define === "function" && define.amd) { define("jquery", [], function() { return jQuery }) } var bI = o.jQuery,
        _$ = o.$;
    jQuery.noConflict = function(a) { if (o.$ === jQuery) { o.$ = _$ } if (a && o.jQuery === jQuery) { o.jQuery = bI } return jQuery }; if (typeof q === "undefined") { o.jQuery = o.$ = jQuery } return jQuery });
