(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{380:function(t,a,s){t.exports=s.p+"assets/img/papers.c8aa39bc.png"},381:function(t,a,s){t.exports=s.p+"assets/img/disambiguation.76d4c003.gif"},382:function(t,a,s){t.exports=s.p+"assets/img/terms.0ec61226.png"},383:function(t,a,s){t.exports=s.p+"assets/img/dim1.e1cae96c.png"},384:function(t,a,s){t.exports=s.p+"assets/img/dim2.28dc6590.png"},385:function(t,a,s){t.exports=s.p+"assets/img/viz.9af4ace9.png"},386:function(t,a,s){t.exports=s.p+"assets/img/attribution.11cbcffa.png"},387:function(t,a,s){t.exports=s.p+"assets/img/paper-space.41219346.png"},535:function(t,a,s){"use strict";s.r(a);var e=s(26),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"神经网络可解释性综述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#神经网络可解释性综述"}},[t._v("#")]),t._v(" 神经网络可解释性综述")]),t._v(" "),e("link",{attrs:{rel:"stylesheet",href:"/notes/katex.min.css"}}),t._v(" "),e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("从 2017 年底就开始调研神经网络可解释性方面的研究了，但是由于各种原因一直拖拖拖到最近才正式放到网上。尤其今年看到许多新的工作都逐渐填补了从我们的论文归纳中能明显发现的空白部分，感觉我们的思考还是有一些分享价值的，就当抛砖引玉了（也可以阅读 "),e("a",{attrs:{href:"https://arxiv.org/abs/2012.14261",target:"_blank",rel:"noopener noreferrer"}},[t._v("arXiv 版本"),e("OutboundLink")],1),t._v("或"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/341153242",target:"_blank",rel:"noopener noreferrer"}},[t._v("知乎文章"),e("OutboundLink")],1),t._v("）")]),t._v(" "),e("p",[t._v("多说一点题外话，因为可解释性的研究比较杂乱，刚开始调研的时候只好使用暴力搜索来寻找相关的文章，直观地体会到了这一波深度学习热潮让多少会议的论文数量大增😂")]),t._v(" "),e("figure",[e("img",{staticClass:"border",attrs:{src:s(380),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"what-什么是可解释性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-什么是可解释性"}},[t._v("#")]),t._v(" What. 什么是可解释性")]),t._v(" "),e("p",[t._v("从主流的学术研究来说，"),e("mark",[t._v("可解释性")]),t._v(" "),e("strong",[t._v("(interpretability)")]),t._v(" 这个词主要是指解释 "),e("strong",[t._v("具体的 / 已经训练好的网络")]),t._v("。但是在日常说法中，对深度学习理论的研究也常被称为 "),e("strong",[t._v("深度学习的可解释性")]),t._v("。两者的差别在于"),e("strong",[t._v("解释的对象")]),t._v("，其中后者想解释的是"),e("strong",[t._v("深度学习这套方法")]),t._v("（为什么这么好用）。本文我们只关注前者——具体的网络的可解释性，不过在文章的最后也顺便介绍一些与后者相关的内容。")]),t._v(" "),e("figure",[e("img",{staticClass:"border",attrs:{src:s(381),alt:""}})]),t._v(" "),e("p",[t._v("一个具体的神经网络无非是一个从输入 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",[t._v("x")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathnormal"},[t._v("x")])])])]),t._v(" 到输出 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",[t._v("y")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("y")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),e("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),t._v(" 的非线性映射，可解释性就是想理解这个映射背后的「思路 / 逻辑 / rationale」，而不是仅仅知道该结果是怎么经过一堆意义不明的数值（权值）计算出来的。我们采用以往论文中提到的一种释义，")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("Interpretability")]),t._v(" is the ability to provide "),e("em",[t._v("explanations")]),e("sup",[t._v("1")]),t._v(" in "),e("em",[t._v("understandable terms")]),e("sup",[t._v("2")]),t._v(" to a human."),e("br"),t._v(" "),e("sub",[t._v("⸺ F. Doshi-Velez and B. Kim, “Towards A Rigorous Science of Interpretable Machine Learning”, "),e("em",[t._v("arXiv")]),t._v(", 2017.")])])]),t._v(" "),e("p",[t._v("其中我们"),e("strong",[t._v("额外强调两点")]),t._v("：")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("解释 explanations")]),t._v("，说到底是需要用某种「语言」来描述的（自然语言，逻辑语句等等）。理想情况下当然使用逻辑规则的形式最清晰，但是实践上人们往往不强求「完整的解释」，只要能提供一定程度的信息，剩下的可以靠自己脑补（因此产生了许多不同类型的解释，比如 saliency maps）")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("可理解的术语 understandable terms")]),t._v("，是构成解释的基本单元。不同领域的模型的解释需要建立在不同的领域术语之上，比如"),e("br")]),e("p",{staticStyle:{"text-align":"center","margin-top":"-0.5em"}},[e("img",{staticClass:"border",attrs:{src:s(382),alt:"",width:"500"}})]),e("p")])]),t._v(" "),e("p",[t._v("简单来说，我们尤其关注可解释性中 "),e("strong",[t._v("解释 (explanation)")]),t._v(" 的角色。虽然解释的形式有很多种，但它们终归可以显式或隐式地表达成逻辑规则的形式（这会成为后面一个重要的论文分类维度）")]),t._v(" "),e("h2",{attrs:{id:"why-为什么需要可解释性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-为什么需要可解释性"}},[t._v("#")]),t._v(" Why. 为什么需要可解释性")]),t._v(" "),e("p",[t._v("为什么需要可解释性这个问题也有许多不同的说法。一个最常见的讨论就是 "),e("strong",[t._v("信任 (trust)")]),t._v(" 问题，不过信任本身还受很多主观因素影响，难以讨论出什么结果。通过对相关文献的总结，我们可以把各种理由拆解归纳为 3 类：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("高可靠性要求")]),e("br"),t._v("\n神经网络在实际使用中经常被发现有一些意想不到的错误（更不用说对抗攻击），这对一些要求高可靠性的系统来说就很危险了（不信任）。可解释性可能有助于发现潜在的错误（比如发现模型逻辑和 domain knowledge 不相符），也可能可以帮助 debug，改进模型")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("伦理 / 法规要求")]),e("br"),t._v("\n药物设计，医疗器械，需要 FDA 批准；欧盟 GDPR (right to explanation)")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("作为其它科学研究的工具")]),e("br"),t._v("\n科学研究是为了发现新知识。如果神经网络在某些科学问题上效果很好，那说明其可能发现了某种新「知识」，可解释性可以用来揭示它")])])]),t._v(" "),e("h2",{attrs:{id:"how-可解释性论文分类维度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-可解释性论文分类维度"}},[t._v("#")]),t._v(" How. 可解释性论文分类维度")]),t._v(" "),e("p",[t._v("终于到了最重要的部分——可解释性研究的现状。之前的综述文章的分类往往依赖于一些 pre-recognized interpretable "),e("strong",[t._v("explanator")]),t._v("s（比如决策树，决策集，saliency maps，linear proxy model，feature importance 等等），但是各种 explanator 之间的关系很混乱（有些相互包含，有些根本不在一个层面上）。一个好的综述应该能为该研究领域提供一个「坐标系」——包括一系列正交的分类维度。对于可解释性研究，我们认为有 3 个维度（虽然许多内容在以往的论文中都有提及，但是都不完整）：")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("Passive (post hoc) vs. Active (intervention)")]),t._v("，事后解释 vs. 主动干预"),e("br"),t._v("\n——是否在模型的架构设计或者训练过程中进行干预")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Type/Format of Explanations")]),t._v("，所产生的解释的表现形式"),e("br"),t._v("\n基本都能归纳为 4 类（解释完整程度递减）：")]),t._v(" "),e("ul",[e("li",[t._v("Logic rule，包括决策树和决策集 (decision sets) 等")]),t._v(" "),e("li",[t._v("Hidden semantics，解释神经网络内部的某一部分（比如可视化某个神经元的激活模式）")]),t._v(" "),e("li",[t._v("Attribution，不知道怎么翻译好，直观的例子就是 saliency maps 或者 feature importance")]),t._v(" "),e("li",[t._v("By examples，比如直接返回一个训练集里的样本作为解释")])])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("Local-Semilocal-Global")]),t._v(" (w.r.t. the input space)，是解释单独的输入还是整个模型")])])]),t._v(" "),e("p",[t._v("图解版本")]),t._v(" "),e("figure",[e("img",{staticClass:"border",attrs:{src:s(383),alt:""}}),t._v(" "),e("figcaption",[t._v("Type/Format of Explanations")])]),t._v(" "),e("figure",[e("img",{staticClass:"border",attrs:{src:s(384),alt:""}}),t._v(" "),e("figcaption",[t._v("Local vs. Global")])]),t._v(" "),e("h3",{attrs:{id:"passive-post-hoc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#passive-post-hoc"}},[t._v("#")]),t._v(" Passive (post hoc)")]),t._v(" "),e("p",[t._v("目前大部分的可解释性工作都集中在"),e("strong",[t._v("事后解释")]),t._v("上，毕竟最直观并且适用范围广。下面我们先分为 Passive 和 Active 两个大章节，然后按"),e("strong",[t._v("所产生的解释类型")]),t._v("依次列举一些代表性的工作，同时分别用 "),e("strong",[t._v("[G]")]),t._v("，"),e("strong",[t._v("[semi-L]")]),t._v(" 和 "),e("strong",[t._v("[L]")]),t._v(" 来标识 global/semi-local/local 解释。")]),t._v(" "),e("h4",{attrs:{id:"rules-as-explanations-rule-extraction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rules-as-explanations-rule-extraction"}},[t._v("#")]),t._v(" Rules as explanations (Rule extraction)")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("KT algorithm")]),t._v("，提取命题逻辑规则 [G]"),e("br"),t._v("\nL. Fu, “Rule Learning by Searching on Adapted Nets”, "),e("em",[t._v("AAAI")]),t._v(", 1991.")]),t._v(" "),e("li",[t._v("形如 "),e("strong",[t._v("M-of-N")]),t._v(" 的规则 [G]"),e("br"),t._v("\nG. G. Towell and J. W. Shavlik, “Extracting refined rules from knowledge-based neural networks”, "),e("em",[t._v("Machine Learning")]),t._v(", 1993.")]),t._v(" "),e("li",[e("strong",[t._v("Gyan")]),t._v("，一阶逻辑规则 [G]"),e("br"),t._v("\nR. Nayak, “Generating rules with predicates, terms and variables from the pruned neural networks”, "),e("em",[t._v("Neural Networks")]),t._v(", 2009.")]),t._v(" "),e("li",[t._v("模糊逻辑 [G]"),e("br"),t._v("\nJ. L. Castro et al., “Interpretation of artificial neural networks by means of fuzzy rules”, "),e("em",[t._v("IEEE Transactions on Neural Networks")]),t._v(", 2002.")]),t._v(" "),e("li",[t._v("……（可以直接用各种决策树学习算法，比如 CART、C4.5，来拟合一个网络的输入输出）")]),t._v(" "),e("li",[e("strong",[t._v("Contrastive explanations")]),t._v("，通过扰动一个输入来寻找其哪些部分是必不可少 / 多的 [L]"),e("br"),t._v("\nA. Dhurandhar et al., “Explanations based on the missing: Towards contrastive explanations with pertinent negatives”, "),e("em",[t._v("NeurIPS")]),t._v(", 2018."),e("br"),t._v("\n2020 年有一篇 NeurIPS 续作 [G]")]),t._v(" "),e("li",[e("strong",[t._v("Anchors")]),t._v(" [semi-L]"),e("br"),t._v("\nM. T. Ribeiro et al., “Anchors: High-precision model-agnostic explanations”, "),e("em",[t._v("AAAI")]),t._v(", 2018.")]),t._v(" "),e("li",[e("strong",[t._v("Interpretable partial substitute")]),t._v(" [semi-L]"),e("br"),t._v("\nT. Wang, “Gaining free or low-cost interpretability with interpretable partial substitute”, "),e("em",[t._v("ICML")]),t._v(", 2019.")])]),t._v(" "),e("h4",{attrs:{id:"explaining-hidden-semantics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#explaining-hidden-semantics"}},[t._v("#")]),t._v(" Explaining hidden semantics")]),t._v(" "),e("p",[e("strong",[t._v("Hidden semantics")]),t._v(" 的主要想法是，既然我们还不能理解整个神经网络，那不如先尝试"),e("strong",[t._v("理解网络内部的某一部分")]),t._v("（比如某个神经元，某个 channel）。目前主要工作集中在可视化上，思路就是找到一个能最大化某目标（比如某个神经元）输出的 input pattern (activation maximization)。不妨参看 "),e("a",{attrs:{href:"https://distill.pub/2017/feature-visualization/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Feature Visualization"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("figure",[e("img",{staticClass:"border",attrs:{src:s(385),alt:""}}),t._v(" "),e("figcaption",[t._v("C. Olah et al., “Feature visualization”, "),e("em",[t._v("Distill")]),t._v(", 2017.")])]),t._v(" "),e("p",[t._v("另外介绍一篇 NLP 领域的文章：F. Dalvi et al., “What Is One Grain of Sand in the Desert? Analyzing Individual Neurons in Deep NLP Models”, "),e("em",[t._v("AAAI")]),t._v(", 2019.")]),t._v(" "),e("h4",{attrs:{id:"attribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attribution"}},[t._v("#")]),t._v(" Attribution")]),t._v(" "),e("p",[e("strong",[t._v("Attribution")]),t._v(" is to assign "),e("em",[t._v("credit")]),t._v(" or "),e("em",[t._v("blame")]),t._v(" to the input features in terms of their impact on the output (prediction).")]),t._v(" "),e("figure",[e("img",{staticClass:"border",attrs:{src:s(386),alt:""}}),t._v(" "),e("figcaption",[t._v("J. Adebayo et al., “Sanity checks for saliency maps”, "),e("em",[t._v("NeurIPS")]),t._v(", 2018.")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("LIME")]),t._v("，"),e("strong",[t._v("MAPLE")]),t._v("，在局部拟合一个线性函数 [L]")]),t._v(" "),e("li",[e("strong",[t._v("Partial derivatives")]),t._v("，"),e("strong",[t._v("DeconvNet")]),t._v("，"),e("strong",[t._v("Guided backprop")]),t._v("，"),e("strong",[t._v("Guided Grad-CAM")]),t._v("，某种意义上的「梯度」[L]")]),t._v(" "),e("li",[e("strong",[t._v("DeepLIFT")]),t._v("，"),e("strong",[t._v("LRP")]),t._v("，"),e("strong",[t._v("Integrated gradients")]),t._v("，某种意义上的「离散梯度」[semi-L]")]),t._v(" "),e("li",[t._v("各种 "),e("strong",[t._v("Shapley values")]),t._v("，"),e("strong",[t._v("Sensitivity analysis")]),t._v("，不依赖模型的方法 (model agnostic) [L]")]),t._v(" "),e("li",[e("strong",[t._v("TCAV")]),t._v("，"),e("strong",[t._v("ACE")]),t._v("，在更高层面的 concepts（不再是 input features）上做 attribution [G]")]),t._v(" "),e("li",[e("strong",[t._v("SpRAy")]),t._v("，"),e("strong",[t._v("MAME")]),t._v("，把局部解释「融合」成半局部或全局解释 [semi-L, G]")])]),t._v(" "),e("h4",{attrs:{id:"by-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#by-examples"}},[t._v("#")]),t._v(" By examples")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Influence functions")]),t._v("，对于一个测试样本，在训练集里面哪个样本对其影响最大 [L]"),e("br"),t._v("\nP. W. Koh and P. Liang, “Understanding black-box predictions via influence functions”, "),e("em",[t._v("ICML")]),t._v(", 2017.")]),t._v(" "),e("li",[e("strong",[t._v("Representer point selection")]),t._v(" [L]"),e("br"),t._v("\nC.-K. Yeh et al., “Representer point selection for explaining deep neural networks”, "),e("em",[t._v("NeurIPS")]),t._v(", 2018.")])]),t._v(" "),e("h3",{attrs:{id:"active-interpretability-intervention"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#active-interpretability-intervention"}},[t._v("#")]),t._v(" Active (interpretability intervention)")]),t._v(" "),e("p",[t._v("主要的做法就是在神经网络优化的过程中加入 “interpretability loss”，约束网络使其在某种意义上更可解释。")]),t._v(" "),e("h4",{attrs:{id:"logic-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logic-rules"}},[t._v("#")]),t._v(" Logic rules")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("(Regional) tree regularization")]),t._v("，使网络更容易被浅的决策树拟合 [semi-L, G]"),e("br"),t._v("\nM. Wu et al., “Beyond sparsity: Tree regularization of deep models for interpretability”, "),e("em",[t._v("AAAI")]),t._v(", 2018."),e("br"),t._v("\nM. Wu et al., “Regional tree regularization for interpretability in deep neural networks”, "),e("em",[t._v("AAAI")]),t._v(", 2020.")])]),t._v(" "),e("h4",{attrs:{id:"hidden-semantics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hidden-semantics"}},[t._v("#")]),t._v(" Hidden semantics")]),t._v(" "),e("ul",[e("li",[t._v("希望每个卷积核都学到独特的 pattern [G]"),e("br"),t._v("\nQ. Zhang, Y. Nian Wu, and S.-C. Zhu, “Interpretable convolutional neural networks”, "),e("em",[t._v("CVPR")]),t._v(", 2018.")])]),t._v(" "),e("h4",{attrs:{id:"attribution-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attribution-2"}},[t._v("#")]),t._v(" Attribution")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("ExpO")]),t._v("，希望 local attribution 更好更鲁棒 [L]"),e("br"),t._v("\nG. Plumb et al., “Regularizing black-box models for improved interpretability”, "),e("em",[t._v("NeurIPS")]),t._v(", 2020.")]),t._v(" "),e("li",[e("strong",[t._v("DAPr")]),t._v("，希望 attribution 的时候还可以同时考虑一些先验 [L]"),e("br"),t._v("\nE. Weinberger et al., “Learning deep attribution priors based on prior knowledge”, "),e("em",[t._v("NeurIPS")]),t._v(", 2020.")]),t._v(" "),e("li",[e("strong",[t._v("Dual-net")]),t._v("，一个网络选择重要的 feature set，另一个训练 [G]"),e("br"),t._v("\nM. Wojtas and K. Chen, “Feature importance ranking for deep learning”, "),e("em",[t._v("NeurIPS")]),t._v(", 2020.")])]),t._v(" "),e("h4",{attrs:{id:"by-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#by-example"}},[t._v("#")]),t._v(" By example")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Prototype layer")]),t._v(" [G]"),e("br"),t._v("\nO. Li et al., “Deep learning for case-based reasoning through prototypes: A neural network that explains its predictions”, "),e("em",[t._v("AAAI")]),t._v(", 2018."),e("br"),t._v("\nC. Chen et al., “This looks like that: deep learning for interpretable image recognition”, "),e("em",[t._v("NeurIPS")]),t._v(", 2019.")])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("得益于前面提到的分类维度，我们可以把现有的可解释性论文放到一个三维空间中（访问"),e("a",{attrs:{href:"https://yzhang-gh.github.io/tmp-data/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线版"),e("OutboundLink")],1),t._v("）")]),t._v(" "),e("figure",[e("img",{staticClass:"border",attrs:{src:s(387),alt:""}})]),t._v(" "),e("p",[t._v("不同类别的研究数量有多有少（比如 active 类的方法数量明显少于 passive 类），这里就不多做分析了。不过从近年的趋势来看，一是 active 方法的研究变多了，二是 local 与 global 解释的融合 (multi-level) 研究也在增多。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"扩展-深度学习理论-方法可解释性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展-深度学习理论-方法可解释性"}},[t._v("#")]),t._v(" 扩展：深度学习理论（方法可解释性）")]),t._v(" "),e("p",[t._v("虽然本意只关注针对具体神经网络的可解释性，但是在做文献调研的过程中也看到了许多深度学习理论相关的论文，不如顺便也分享一些粗浅的理解。")]),t._v(" "),e("p",[t._v("深度学习方法的可解释性最核心的一个问题就是「为什么深度神经网络这么好用」，这里的「好」指的是"),e("strong",[t._v("泛化性能好")]),t._v("。按照传统的认识，深度神经网络参数这么多、表达能力这么强，那应该很容易过拟合而导致泛化性能差才对。对此有很多不同的研究思路。总的来说，学习无非是使用一种优化算法 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",{attrs:{mathvariant:"script"}},[t._v("A")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{A}")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathcal"},[t._v("A")])])])]),t._v(" 从假设空间 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",{attrs:{mathvariant:"script"}},[t._v("H")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{H}")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.00965em"}},[t._v("H")])])])]),t._v(" 中寻找出一个假设 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",[t._v("h")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("h")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathnormal"},[t._v("h")])])])]),t._v("（也即一个神经网络），这个寻找的过程可以利用训练集来评估经验误差 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mover",{attrs:{accent:"true"}},[e("mi",[t._v("E")]),e("mo",{attrs:{stretchy:"true"}},[t._v("^")])],1)],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\widehat{E}")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.92333em","vertical-align":"0em"}}),e("span",{staticClass:"mord accent"},[e("span",{staticClass:"vlist-t"},[e("span",{staticClass:"vlist-r"},[e("span",{staticClass:"vlist",staticStyle:{height:"0.92333em"}},[e("span",{staticStyle:{top:"-3em"}},[e("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),e("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")])]),e("span",{staticClass:"svg-align",staticStyle:{width:"calc(100% - 0.16668em)","margin-left":"0.16668em",top:"-3.6833299999999998em"}},[e("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),e("span",{staticStyle:{height:"0.24em"}},[e("svg",{attrs:{width:"100%",height:"0.24em",viewBox:"0 0 1062 239",preserveAspectRatio:"none"}},[e("path",{attrs:{d:"M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z"}})])])])])])])])])])]),t._v("，最后希望能最小化在从未见过的测试集上的泛化误差 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",[t._v("E")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("E")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.05764em"}},[t._v("E")])])])]),t._v("（的期望值）。所以想要解释为什么深度学习效果好——")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("从假设空间 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",{attrs:{mathvariant:"script"}},[t._v("H")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{H}")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathcal",staticStyle:{"margin-right":"0.00965em"}},[t._v("H")])])])]),t._v(" 的角度")]),t._v("，是不是因为深度网络的架构选得很好呢？"),e("br"),t._v("\n大部分的结论基本都是说，随着网络深度的增加，网络的表达能力指数增加（那么逼近相同的函数时所需要的参数就比浅层网络少，不容易过拟合）"),e("br"),t._v("\n“The Power of Depth for Feedforward Neural Networks”, "),e("em",[t._v("COLT")]),t._v(", 2016."),e("br"),t._v("\n“When and Why Are Deep Networks Better Than Shallow Ones?”, "),e("em",[t._v("AAAI")]),t._v(", 2017. 等等")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("从优化算法 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",{attrs:{mathvariant:"script"}},[t._v("A")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{A}")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathcal"},[t._v("A")])])])]),t._v(" 的角度")]),t._v("，是不是因为优化算法很合适呢？"),e("br"),t._v("\n一个很流行的说法是，sharp minima 的泛化性能不好，而 (small-batch) SGD 倾向于收敛到 flat minima（泛化性能好）。不过也有不同意这个说法的文章，认为可以构造任意 sharp 但是也能泛化的极小值。"),e("br"),t._v("\n“Sharp Minima Can Generalize For Deep Nets”, "),e("em",[t._v("ICML")]),t._v(", 2017.")]),t._v(" "),e("p",[t._v("还有工作尝试可视化不同模型架构下的 loss surface，便于研究怎样的模型架构（比如网络深度，skip connection）以及优化算法 "),e("span",{staticClass:"katex"},[e("span",{staticClass:"katex-mathml"},[e("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[e("semantics",[e("mrow",[e("mi",{attrs:{mathvariant:"script"}},[t._v("A")])],1),e("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\mathcal{A}")])],1)],1)],1),e("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[e("span",{staticClass:"base"},[e("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),e("span",{staticClass:"mord mathcal"},[t._v("A")])])])]),t._v(" 比较好。"),e("br"),t._v("\n“Visualizing the Loss Landscape of Neural Nets”, "),e("em",[t._v("NeurIPS")]),t._v(", 2018.")])]),t._v(" "),e("li",[e("p",[t._v("此外有一些可能并不是用来解释泛化性能的理论研究，比如 SGD 的收敛性分析，正好可以列举两个（在用知乎的）大佬的论文"),e("br"),t._v("\n“An Analytical Formula of Population Gradient for two-layered ReLU network and its Applications in Convergence and Critical Point Analysis”, "),e("em",[t._v("ICML")]),t._v(", 2017. 田渊栋"),e("br"),t._v("\n“Convergence Analysis of Two-layer Neural Networks with ReLU Activation”, "),e("em",[t._v("NeurIPS")]),t._v(", 2017, 袁洋（等）")])])]),t._v(" "),e("p",[t._v("上面列举的论文肯定是挂一漏万，而且我自己从 2017 年底调研之后也没持续关注这方面的新进展，内容可能已经过时了。更多资料不妨顺着"),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/27609166",target:"_blank",rel:"noopener noreferrer"}},[t._v("神经网络有什么理论支持？"),e("OutboundLink")],1),t._v("和 "),e("a",{attrs:{href:"http://www.offconvex.org/2017/12/08/generalization1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Generalization Theory and Deep Nets, An Introduction"),e("OutboundLink")],1),t._v(" 这两篇好文去寻找。")])])}),[],!1,null,null,null);a.default=i.exports}}]);