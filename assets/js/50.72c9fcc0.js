(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{417:function(t,a,s){"use strict";s.r(a);var l=s(25),o=Object(l.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"进程间通信之──mpi4py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程间通信之──mpi4py"}},[t._v("#")]),t._v(" 进程间通信之──mpi4py")]),t._v(" "),s("p",[t._v("进程间通信 (IPC) 的方式有很多，比如（本地）套接字 (sockets)，不过在超算集群上可能就用不了了")]),t._v(" "),s("p",[s("mark",[t._v("MPI")]),t._v(" ("),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Message_Passing_Interface",target:"_blank",rel:"noopener noreferrer"}},[t._v("Message Passing Interface"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("p",[t._v("Single Process Multiple Data (SPMD) Model:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("mpirun [ options ] <program> [ <args> ]\n")])])]),s("p",[t._v("Multiple Instruction Multiple Data (MIMD) Model:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("mpirun [ global_options ] [ local_options1 ]\n    <program1> [ <args1> ] : [ local_options2 ]\n    <program2> [ <args2> ] : ... :\n    [ local_optionsN ]\n    <programN> [ <argsN> ]\n")])])]),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D73A49"}},[t._v("from")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" mpi4py ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("import")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("MPI")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("comm ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("MPI")]),s("span",{staticStyle:{color:"#000000"}},[t._v(".")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("COMM_WORLD")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("rank ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" comm.Get_rank()")])]),t._v("\n\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D73A49"}},[t._v("if")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" rank ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("==")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("0")]),s("span",{staticStyle:{color:"#000000"}},[t._v(":")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("    data ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" {")]),s("span",{staticStyle:{color:"#032F62"}},[t._v("'a'")]),s("span",{staticStyle:{color:"#000000"}},[t._v(": ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("7")]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#032F62"}},[t._v("'b'")]),s("span",{staticStyle:{color:"#000000"}},[t._v(": ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("3.14")]),s("span",{staticStyle:{color:"#000000"}},[t._v("}")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("    comm.send(data, ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("dest")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("1")]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("tag")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("11")]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("    ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("print")]),s("span",{staticStyle:{color:"#000000"}},[t._v("(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"Sent."')]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#D73A49"}},[t._v("elif")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" rank ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("==")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("1")]),s("span",{staticStyle:{color:"#000000"}},[t._v(":")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("    data ")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#000000"}},[t._v(" comm.recv(")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("source")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("0")]),s("span",{staticStyle:{color:"#000000"}},[t._v(", ")]),s("span",{staticStyle:{color:"#E36209"}},[t._v("tag")]),s("span",{staticStyle:{color:"#D73A49"}},[t._v("=")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("11")]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("    ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("print")]),s("span",{staticStyle:{color:"#000000"}},[t._v("(")]),s("span",{staticStyle:{color:"#032F62"}},[t._v('"Received."')]),s("span",{staticStyle:{color:"#000000"}},[t._v(")")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("    ")]),s("span",{staticStyle:{color:"#005CC5"}},[t._v("print")]),s("span",{staticStyle:{color:"#000000"}},[t._v("(data)")])])])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{staticClass:"shiki",staticStyle:{"background-color":"#fff"}},[s("code",[s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#000000"}},[t._v("mpiexec -n 2 python script.py")])]),t._v("\n"),s("span",{staticClass:"line"},[s("span",{staticStyle:{color:"#6A737D"}},[t._v("# or `mpirun -np 1 python script0.py : -np 1 python script1.py`")])])])])]),s("p",[s("strong",[t._v("Output")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Sent.\nReceived.\n{'a': 7, 'b': 3.14}\n")])])]),s("h2",{attrs:{id:"阅读材料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阅读材料"}},[t._v("#")]),t._v(" 阅读材料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://mpi4py.readthedocs.io/en/stable/tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("MPI for Python - Tutorial"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=o.exports}}]);