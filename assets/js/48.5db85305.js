(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{415:function(t,a,s){"use strict";s.r(a);var l=s(25),c=Object(l.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"matplotlib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#matplotlib"}},[t._v("#")]),t._v(" Matplotlib")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/matplotlib/cheatsheets",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/matplotlib/cheatsheets"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"配置-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-configuration"}},[t._v("#")]),t._v(" 配置 Configuration")]),t._v(" "),s("p",[t._v("配置文件")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D73A49"}},[t._v("import")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" matplotlib")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#005CC5"}},[t._v("print")]),s("span",{staticStyle:{color:"#000000"}},[t._v("(matplotlib.matplotlib_fname())")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#6A737D"}},[t._v("## e.g. C:\\Users\\<username>\\Miniconda3\\lib\\site-packages\\matplotlib\\mpl-data\\matplotlibrc")])])])])]),s("p",[t._v("可以用来设置默认字体"),s("br"),t._v("\n（新安装的字体可能会找不到，删掉 "),s("code",[t._v("$HOME\\.matplotlib\\fontlist-*.json")]),t._v(" 缓存文件即可）")]),t._v(" "),s("p",[t._v("在程序中也可以进行配置，比如")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.rc(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"text"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("usetex")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("True")]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.rc(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"font"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("family")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"serif"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.rc(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"font"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("**")]),s("span",{staticStyle:{color:"#000000"}},[t._v("{")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"sans-serif"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(": ")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"Consolas"')]),s("span",{staticStyle:{color:"#000000"}},[t._v("})")])])])])]),s("p",[t._v("一些默认值")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("figure.figsize: 6.4, 4.8  ## figure size in inches\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"default-color-cycle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-color-cycle"}},[t._v("#")]),t._v(" Default Color Cycle")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("prop_cycle ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" plt.rcParams[")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"axes.prop_cycle"')]),s("span",{staticStyle:{color:"#000000"}},[t._v("]")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("colors ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" prop_cycle.by_key()[")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"color"')]),s("span",{staticStyle:{color:"#000000"}},[t._v("]")])])])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"让-x-y-轴等刻度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#让-x-y-轴等刻度"}},[t._v("#")]),t._v(" 让 x, y 轴等刻度")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#6A737D"}},[t._v('# plt.axis("equal")')])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#6A737D"}},[t._v("## 一般来说上面的用法就够了，但是如果同时对 xlim, ylim 有要求的话，下方的用法更准确")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.gca().set_aspect(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"equal"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("adjustable")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"box"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])])])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"使用-colormap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-colormap"}},[t._v("#")]),t._v(" 使用 Colormap")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D73A49"}},[t._v("from")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" matplotlib.cm ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("import")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ScalarMappable")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D73A49"}},[t._v("from")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" matplotlib.colors ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("import")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" Normalize")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#6A737D"}},[t._v("## The default colormap assumes range [0, 1]. `ScalarMappable` allows custom range.")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("min_value ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("-")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("1")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("max_value ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("1")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("mappable ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ScalarMappable(Normalize(min_value, max_value), ")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"bwr"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("mappable.set_array(np.array([min_value, max_value]))  ")]),s("span",{staticStyle:{color:"#6A737D"}},[t._v("## Don't know why but `set_array` is needed")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("certain_patch.set_color(mappable.to_rgba(value))")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.colorbar(mappable)")])])])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"保存图片时常用的设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#保存图片时常用的设置"}},[t._v("#")]),t._v(" 保存图片时常用的设置")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.savefig(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"filename.pdf"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("bbox_inches")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"tight"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.savefig(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"filename.png"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("bbox_inches")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"tight"')]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("dpi")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("200")]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])])])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"colorbar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#colorbar"}},[t._v("#")]),t._v(" Colorbar")]),t._v(" "),s("h3",{attrs:{id:"使-colorbar-刻度为整数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使-colorbar-刻度为整数"}},[t._v("#")]),t._v(" 使 colorbar 刻度为整数")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D73A49"}},[t._v("from")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" matplotlib.ticker ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("import")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" MaxNLocator")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("bar ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" fig.colorbar()")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("bar.locator ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" MaxNLocator(")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("integer")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("True")]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("bar.update_ticks()")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#6A737D"}},[t._v("## 如果是坐标轴的话")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#6A737D"}},[t._v("# plt.gca().yaxis.set_major_locator(MaxNLocator(integer=True))")])])])])]),s("h3",{attrs:{id:"使-colorbar-和作图内容的高度相符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使-colorbar-和作图内容的高度相符"}},[t._v("#")]),t._v(" 使 colorbar 和作图内容的高度相符")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("im ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" plt.imshow()  ")]),s("span",{staticStyle:{color:"#6A737D"}},[t._v("## ...")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("plt.colorbar(im, ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("fraction")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("0.046")]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("pad")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("0.4")]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])])])])]),s("p",[t._v("不知道原理但是很神奇（"),s("a",{attrs:{href:"https://stackoverflow.com/a/26720422",target:"_blank",rel:"noopener noreferrer"}},[t._v("更多讨论"),s("OutboundLink")],1),t._v("）")])])}),[],!1,null,null,null);a.default=c.exports}}]);