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

document.querySelectorAll("pre").forEach(function(x) {
  x.innerHTML = x.innerHTML
    .replace(/^(type |newtype |data )?(\w+)(\b.+=(?: |$))/gm, "$1<define id=dfn-$2>$2</define>$3")
    .replace(/^(data )(\w+)$/gm, "$1<define id=dfn-$2>$2</define>")
    .replace(/^(\s+_)(\w+)(\s+::)/gm, "$1<define id=dfn-$2>$2</define>$3")
    .replace(/^(?:(\s+(?:\| |= ))(\w+))(?!.*--!$)/gm, "$1<define id=dfn-$2>$2</define>")
})

var words = []
document.querySelectorAll("define").forEach(function(x) {
  words.push(x.innerText)
})

var re1 = new RegExp("([ [(])(" + words.join("|") + ")\\b", "g")
var re2 = new RegExp("\\b(" + words.join("|") + ")\\b", "g")

document.querySelectorAll("pre").forEach(function(x) {
  x.innerHTML = x.innerHTML
    .replace(re1, "$1<a href=\"#dfn-$2\">$2</a>")
})

document.querySelectorAll("pre, code").forEach(function(x) {
  x.innerHTML = x.innerHTML
    .replace(/\b(module|import|data|newtype|type|deriving|if|case|where|let|do)\b/g, "<strong>$&</strong>")
    .replace(/^(\s*)-- (.*)/gm, "$1<comment class=block>$2</comment>")
    .replace(/(\s+)-- (.*)/g, "$1<comment>$2</comment>")
    .replace(/ --!/g, "")
    .replace(/\$([^ ]+)\$/g, "<math>$1</math>")
    .replace(/ \. /g, " ∘ ")
    .replace(/\b_(\w+)\b/g, "· $1")
    .replace(/\b_(<\w+)\b/g, "· $1")
    .replace(/^(\w+ :: .*)$/gm, "<declaration>$1</declaration>")
    .replace(/\b(\w+)_(\w+)\b/g, "$1<sub>$2</sub>")
    .replace(/\b([a-z]+)([01])\b/g, "$1<sub>$2</sub>")
    .replace(/ -&gt; /g, " → ")
    .replace(/ &lt;- /g, " ← ")
    .replace(/\n\s*\n/gm, "<p>")
})

document.querySelectorAll("p > code, li > code, aside code, table code, dl code, figure code").forEach(function(x) {
  x.innerHTML = x.innerHTML
    .replace(re2, "<a href=\"#dfn-$1\">$1</a>")
})

var counters = []
var ToC = []

document.querySelectorAll("h1, h2, h3, h4").forEach(function(x) {
  var n = +(x.tagName.substr(1, 1))
  counters = counters.slice(0, n)
  if (counters.length < n) {
    counters = counters.concat(new Array(n - counters.length).fill(1))
  } else {
    counters[n - 1]++
  }
  x.id = "sec-" + counters.join("-")
  ToC.push({ counters: counters, title: x.innerText })
  x.innerHTML = "<a href=#" + x.id + ">" + counters.join(".") + "</a>&nbsp;&nbsp;" + x.innerHTML
})

var toc = document.querySelector("toc")
ToC.forEach(function (x) {
  var e = document.createElement("toc-entry")
  var e1 = document.createElement("toc-n")
  e1.innerText = x.counters.join(".")
  var e2 = document.createElement("toc-title")
  e2.innerHTML = "<a href=#sec-" + x.counters.join("-") + ">" + x.title + "</a>"
  if (x.counters.length == 1)
    e.classList.add("woah")
  if (x.counters.length == 1)
    e2.classList.add("bold")
  e.appendChild(e1)
  e.appendChild(e2)
  toc.appendChild(e)
})

var oldPopup

document.querySelectorAll("glossary dt").forEach(function(dt) {
  var popup = document.createElement("popup")
  var dd = dt.nextElementSibling
  var text = dt.innerText.trim()
  popup.innerHTML = "<span>" + dd.innerHTML + "</span>"
  console.log('a[href="#dfn-' + text + '"]')
  document.querySelectorAll('a[href="#dfn-' + text + '"]').forEach(function(a) {
    a.onmouseenter = function() {
      oldPopup && oldPopup.parentNode.removeChild(oldPopup)
      oldPopup = popup
      console.log(a)
      popup.className = ""
      a.appendChild(popup)
      setTimeout(function() { popup.className = "show" })
    }

    a.onmouseleave = function() {
      setTimeout(function() {
        popup.className = ""
      })
    }
  })
})

}
/*
     FILE ARCHIVED ON 12:34:27 Nov 03, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:18:11 Dec 17, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1401.067
  exclusion.robots: 0.129
  exclusion.robots.policy: 0.117
  cdx.remote: 0.094
  esindex: 0.011
  LoadShardBlock: 719.022 (3)
  PetaboxLoader3.datanode: 754.477 (4)
  CDXLines.iter: 13.823 (3)
  load_resource: 192.419
  PetaboxLoader3.resolve: 130.318
*/