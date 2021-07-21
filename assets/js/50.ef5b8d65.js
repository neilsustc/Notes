(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{538:function(t,s,a){"use strict";a.r(s);var i=a(26),e=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"强化学习-reinforcement-learning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强化学习-reinforcement-learning"}},[t._v("#")]),t._v(" 强化学习 (Reinforcement Learning)")]),t._v(" "),a("link",{attrs:{rel:"stylesheet",href:"/notes/katex.min.css"}}),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("UNDER CONSTRUCTION")])]),t._v(" "),a("div",{staticClass:"callout"},[a("p",{staticClass:"title"},[t._v("🥥 In a Nutshell")]),a("p",[t._v("设想你正在下一局（你）不知道规则的棋，下了几十（上百）步之后，裁判突然宣布「你输了」"),a("br"),t._v("\n——（如何下得更好）这就是强化学习")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("TODO")]),t._v(" "),a("p",[t._v("强化学习的特点：不知道规则->？，几十上百步->？")])]),t._v(" "),a("p",[a("mark",[t._v("强化学习")]),t._v("是通过与环境交互来解决"),a("strong",[t._v("连续决策")]),t._v("的问题，而"),a("strong",[t._v("监督学习")]),t._v("可以看作是"),a("strong",[t._v("单轮决策")]),t._v("（预测）问题")]),t._v(" "),a("ul",[a("li",[a("mark",[t._v("可能的状态")]),t._v(" "),a("strong",[t._v("state")]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("s")]),a("mo",[t._v("∈")]),a("mi",[t._v("S")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s \\in S")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")])])])]),t._v("（棋盘的局面）")]),t._v(" "),a("li",[a("mark",[t._v("允许的动作")]),t._v(" "),a("strong",[t._v("action")]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("a")]),a("mo",[t._v("∈")]),a("mi",[t._v("A")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("s")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("a \\in A(s)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.5782em","vertical-align":"-0.0391em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("a")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("∈")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("A")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("（即可以落子的位置）")]),t._v(" "),a("li",[t._v("A "),a("mark",[t._v("(probabilistic) transition model")]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("P")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("msup",[a("mi",[t._v("s")]),a("mo",{attrs:{mathvariant:"normal"}},[t._v("′")])],1),a("mo",{attrs:{separator:"true"}},[t._v(";")]),a("mi",[t._v("s")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("a")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")]),a("mspace"),a("mspace",{attrs:{width:"0.1111111111111111em"}}),a("mo",{attrs:{lspace:"0em",rspace:"0.17em"}}),a("mtext",[t._v(" ⁣")]),a("mo",{attrs:{lspace:"0em",rspace:"0em"}},[t._v(":")]),a("mspace",{attrs:{width:"0.3333333333333333em"}}),a("mi",[t._v("S")]),a("mo",[t._v("×")]),a("mi",[t._v("A")]),a("mo",[t._v("×")]),a("mi",[t._v("S")]),a("mo",[t._v("→")]),a("mo",{attrs:{stretchy:"false"}},[t._v("[")]),a("mn",[t._v("0")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mn",[t._v("1")]),a("mo",{attrs:{stretchy:"false"}},[t._v("]")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("P(s^\\prime;s, a) \\colon S \\times A \\times S \\to [0,1]")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.001892em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord"},[a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[a("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])]),a("span",{staticClass:"mpunct"},[t._v(";")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("a")]),a("span",{staticClass:"mclose"},[t._v(")")]),a("span",{staticClass:"mspace nobreak"}),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.1111111111111111em"}}),a("span",{staticClass:"mpunct"}),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"-0.16666666666666666em"}}),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mrel"},[t._v(":")])]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.3333333333333333em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.76666em","vertical-align":"-0.08333em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("A")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),a("span",{staticClass:"mbin"},[t._v("×")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),a("span",{staticClass:"mrel"},[t._v("→")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mopen"},[t._v("[")]),a("span",{staticClass:"mord"},[t._v("0")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord"},[t._v("1")]),a("span",{staticClass:"mclose"},[t._v("]")])])])]),t._v("（比如黑白棋的翻转，围棋的提子）")]),t._v(" "),a("li",[a("s",[a("mark",[t._v("效用函数")]),t._v(" "),a("strong",[t._v("utility function")]),t._v("，"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("u")]),a("mo",{attrs:{stretchy:"false"}},[t._v("(")]),a("mi",[t._v("s")]),a("mo",{attrs:{separator:"true"}},[t._v(",")]),a("mi",[t._v("p")]),a("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("u(s,p)")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("u")]),a("span",{staticClass:"mopen"},[t._v("(")]),a("span",{staticClass:"mord mathnormal"},[t._v("s")]),a("span",{staticClass:"mpunct"},[t._v(",")]),a("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("p")]),a("span",{staticClass:"mclose"},[t._v(")")])])])]),t._v("，即玩家 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("p")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("p")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("p")])])])]),t._v(" 在游戏结束时（状态 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("s")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),a("span",{staticClass:"mord mathnormal"},[t._v("s")])])])]),t._v("）获得的「收益」")])])]),t._v(" "),a("h2",{attrs:{id:"马尔可夫决策过程-markov-decision-processes-aka-mdps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#马尔可夫决策过程-markov-decision-processes-aka-mdps"}},[t._v("#")]),t._v(" 马尔可夫决策过程 (Markov Decision Processes, aka MDPs)")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"从-model-based-到-model-free"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-model-based-到-model-free"}},[t._v("#")]),t._v(" 从 Model-based 到 Model-free")]),t._v(" "),a("h2",{attrs:{id:"阅读材料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阅读材料"}},[t._v("#")]),t._v(" 阅读材料")]),t._v(" "),a("ul",[a("li",[t._v("Stuart Russell and Peter Norvig. Artificial Intelligence: A Modern Approach. "),a("em",[t._v("Prentice Hall")]),t._v(". 3rd 2009."),a("br"),t._v("\n(Chapter 17: Making Complex Decisions; Chapter 21: Reinforcement Learning)")]),t._v(" "),a("li",[t._v("周志华. 机器学习. 2016 年第 1 版.（第 16 章，强化学习）")])]),t._v(" "),a("p",[t._v("其它")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/33936457",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里有一篇深度强化学习劝退文 - 知乎专栏"),a("OutboundLink")],1),t._v(" 2018-02-25")])])])}),[],!1,null,null,null);s.default=e.exports}}]);