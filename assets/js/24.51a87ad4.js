(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{502:function(t,e,s){t.exports=s.p+"assets/img/fill-form.b552b5ab.gif"},580:function(t,e,s){"use strict";s.r(e);var a=s(26),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"autohotkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autohotkey"}},[t._v("#")]),t._v(" AutoHotkey")]),t._v(" "),a("h2",{attrs:{id:"hotkeys-和-hotstrings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotkeys-和-hotstrings"}},[t._v("#")]),t._v(" Hotkeys 和 Hotstrings")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(';;; Hotkeys 脚本结构 ;;;\n\n^j::        ; 快捷键写在 `::` 之前\nSend, Hello ; 要执行的命令\nreturn      ; 结束命令\n\n;;; Hotstrings ;;;\n\n::ftw::Free the whales  ; 输入 "ftw" 就会自动展开为 "Free the whales"\n')])])]),a("p",[a("code",[t._v(".ahk")]),t._v(" 脚本编译成 "),a("code",[t._v(".exe")]),t._v(" 文件之后就不依赖 AutoHotkey 了")]),t._v(" "),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[t._v("#")]),t._v(" 实例")]),t._v(" "),a("h3",{attrs:{id:"自动填写表单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动填写表单"}},[t._v("#")]),t._v(" 自动填写表单")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("#IfWinActive ahk_class YourWinClass  ; [^1]\n!f::\n; 切换英文输入法 [^2][^3]\nControlGetFocus, control, A\nPostMessage, 0x50, 0, 0x4090409, %control%, A\nSendRaw ********  ; Username\nSend {Tab}\nSendRaw ********  ; Password\nSend {Tab 2}\nSend {Space}\nSend +{Tab}\nreturn\n; #IfWinActive    ; Endif if needed\n\n; [^1]: 可以用附带的 Window Spy 程序查看各个窗口的 WindowClass 值\n; [^2]: https://www.autohotkey.com/docs/commands/PostMessage.htm#ExSwitchKeybLang\n; [^3]: https://github.com/larionov/ahk-multiple-language-switcher/\n")])])]),a("p",[a("img",{attrs:{src:s(502),alt:"fill-form"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);