import { strings } from "./lang"

/**
 * Check is item is object
 * @return {Boolean}
 */
export const isObject = val => Object.prototype.toString.call(val) === "[object Object]"

/**
 * Check for valid JSON string
 * @param  {String}   str
 * @return {Boolean|Array|Object}
 */
export const isJson = str => {
    let t = !1
    try {
        t = JSON.parse(str)
    } catch (e) {
        return !1
    }
    return !(null === t || (!Array.isArray(t) && !isObject(t))) && t
}

/**
 * Create DOM element node
 * @param  {String}   nodeName nodeName
 * @param  {Object}   attrs properties and attributes
 * @return {Object}
 */
export const createElement = (nodeName, attrs) => {
    const dom = document.createElement(nodeName)
    if (attrs && "object" == typeof attrs) {
        for (const attr in attrs) {
            if ("html" === attr) {
                dom.innerHTML = attrs[attr]
            } else {
                dom.setAttribute(attr, attrs[attr])
            }
        }
    }
    return dom
}

export const flush = el => {
    if (el instanceof NodeList) {
        el.forEach(e => flush(e))
    } else {
        el.innerHTML = ""
    }
}

/**
 * Create button helper
 * @param  {String}   class
 * @param  {Number}   page
 * @param  {String}   text
 * @return {Object}
 */
export const button = (className, page, text) => createElement(
    "li", {
        class: className,
        html: `<a href="#" data-page="${page}">${text}</a>`
    }
)

const bubbleSort = inputArr => {
  const lang = document.documentElement.lang || "en";
  const len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (j + 1 < len) {
        if (
          inputArr[j].value
            .toString()
            .localeCompare(inputArr[j + 1].value.toString(), lang, {
              numeric: true
            }) > 0
        ) {
          const tmp = inputArr[j];
          inputArr[j] = inputArr[j + 1];
          inputArr[j + 1] = tmp;
        }
      }
    }
  }
  return inputArr;
};

export const sortItems = (a, b) => {
    a = bubbleSort(a);
    if (b == -1) {
        a = a.reverse();
    }
  return a;
}

/**
 * Pager truncation algorithm
 */
export const truncate = (a, b, c, d, ellipsis) => {
    d = d || 2
    let j
    const e = 2 * d
    let f = b - d
    let g = b + d
    const h = []
    const i = []
    if (b < 4 - d + e) {
        g = 3 + e
    } else if (b > c - (3 - d + e)) {
        f = c - (2 + e)
    }
    for (let k = 1; k <= c; k++) {
        if (1 == k || k == c || (k >= f && k <= g)) {
            const l = a[k - 1]
            l.classList.remove("active")
            h.push(l)
        }
    }
    h.forEach(c => {
        const d = c.children[0].getAttribute("data-page")
        if (j) {
            const e = j.children[0].getAttribute("data-page")
            if (d - e == 2) i.push(a[e])
            else if (d - e != 1) {
                const f = createElement("li", {
                    class: "ellipsis",
                    html: `<a href="#">${ellipsis}</a>`
                })
                i.push(f)
            }
        }
        i.push(c)
        j = c
    })

    return i
}

export const getStrings = (lang = false) => {
  if (!lang) {
    lang = document.documentElement.lang || "en";
  }
    
  lang = lang.substring(0, 2).toLowerCase();

  if (!(lang in strings)) {
    lang = "en";
  }

  return strings[lang];
}