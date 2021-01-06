# LaTeX

## TinyTeX

A lightweight, cross-platform, portable, and easy-to-maintain LaTeX distribution based on TeX Live

- 主页及介绍：<https://yihui.name/tinytex/>
- GitHub 仓库：<https://github.com/yihui/tinytex>

从仓库的 `tools` 目录中下载执行 [`install-windows.bat`](https://github.com/yihui/tinytex/raw/master/tools/install-windows.bat) 安装脚本（安装过程中可能会出现「找不到 luatex.dll」的错误，实际不影响使用），然后使用 `tlmgr install pkg1 pkg2 ...` 命令安装 [`pkgs-yihui.txt`](https://github.com/yihui/tinytex/raw/master/tools/pkgs-yihui.txt) 以及其它自己需要的包（善用 VSCode 多光标和 `Join Lines` 命令），比如：

```
chktex
latexindent
texcount

# BibLaTeX
biblatex
biber
logreq

# Required by Matplotlib while using LaTeX backend
dvipng

IEEEtran

# 中文
ctex
cjk
cjkpunct
xecjk
```

### `tlmgr` Common Commands

```
tlmgr search --global --file "keywords"
tlmgr install [option...] pkg...
tlmgr update [option...] [pkg...]
```

[`tlmgr` manual](https://www.tug.org/texlive/doc/tlmgr.html)

## Escape

`& % $ # _ { } ~ ^ \`

**Note**: use `\ell` instead of `l` in math mode

## Personal Template

::: details LaTeX code
```latex
\documentclass[11pt]{article}

%% Improve typesetting.
\usepackage{microtype}

%% Use geometry package to set up margins.
%% A4 paper is 8.27 × 11.69 inch.
\usepackage[a4paper, width=6.27in, height=9.69in, includehead]{geometry}

%% Set line spacing.
\usepackage{setspace}
\onehalfspacing%

%% Compact list (avoid too loose list under 1.5 linespace)
\usepackage{enumitem}
\setlist{itemsep=0pt}

%% For `\includegraphics'
\usepackage{graphicx}

\usepackage{booktabs}
\usepackage{multirow}
\usepackage{xcolor}

%% ━━━━━ Math ━━━━━
\usepackage{amsmath}
%% For `\mathbb'
\usepackage{amssymb}
%% For `\coloneqq', `\underbrace'
%% If enabled, no longer need to load `amsmath' manually
% \usepackage{mathtools}

% \DeclareMathOperator*{\argmin}{arg\,min}

%% ━━━━━ URL ━━━━━
\colorlet{urlcolor}{red}

%% Setup the hyperref package for enabling links, bookmarks, and PDF properties.
\usepackage[backref=page]{hyperref}
\hypersetup{
    colorlinks = true,
    citecolor  = blue
}

%% Capitalising all cross-reference names (e.g. Figure, Equation)
%% Must come as late as possible, especially after hyperref.
\usepackage[capitalise]{cleveref}

%% ━━━━━ Change the default font to sans-serif ━━━━━
%% <https://en.wikibooks.org/wiki/LaTeX/Fonts#Font_families>
\renewcommand{\familydefault}{\sfdefault}
%% Prevent warnings caused by sf font
%% <https://tex.stackexchange.com/questions/155604/itemize-under-sf-produce-a-font-warning>
\let\oldtextbullet\textbullet%
\renewcommand{\textbullet}{\rmfamily\oldtextbullet}
\usepackage{lmodern}

%% ━━━━━ Others ━━━━━
% \newcommand{\todo}[1]{\textcolor{blue}{[To-do: #1]}}

\begin{document}

\begin{center}
	\LARGE\textbf{Title}\\[5pt]
	\normalsize Author\\\today
\end{center}

\section{Introduction}

Your text

\pagebreak

\bibliography{ref}
\bibliographystyle{plain}

\end{document}
```
:::

## Useful Snippets

### Change Math Color

```latex
\definecolor{math}{HTML}{0c7f99}
\everymath{\color{math}}
\everydisplay{\color{math}}
%% Clear unwanted coloring
\usepackage{etoolbox}
\AtBeginEnvironment{table}{\everymath{}}
```

<https://tex.stackexchange.com/questions/347268/change-math-color-globallyx>

### Proper Brackets

```latex
%% Remove the unexpected spacing introduced by `\left` and `\right`
\let\oldleft\left
\let\oldright\right
\renewcommand{\left}{\mathopen{}\mathclose\bgroup\oldleft}
\renewcommand{\right}{\aftergroup\egroup\oldright}
\newcommand{\rbracket}[1]{\left(#1\right)}
\newcommand{\sbracket}[1]{\left[#1\right]}
\newcommand{\cbracket}[1]{\left\{#1\right\}}
```

### Sample Table

```latex
\begin{table}
    \centering
    \begin{tabular}{llll}
        \toprule
          & A & B & C \\
        \midrule
        D & E & F & G \\
        \bottomrule
    \end{tabular}
    \caption{Caption}\label{tab:example}
\end{table}
```

### 表格：为单元格单独指定对齐方式 / 样式

> I suggest using `\multicolumn{1}{c}{header text}`. `\multicolumn` allows changing the formatting of single cells.

<https://tex.stackexchange.com/a/2927>

```latex
\newcommand{\tablehead}[1]{\multicolumn{1}{c}{\bfseries#1}}
```

### 删除线 (Strikethrough)

```latex
\usepackage{ulem}
\sout{text to be striked out}
```

### 其它

```
authblk
```

## 段落样式

### 行距

```latex
\usepackage{setspace}
\onehalfspacing%
```

### 设置段首无缩进

Global: use `\setlength{\parindent}{0pt}` in **preamble**.
Local : use `\noindent` in the front of that paragraph

## Useful Links

[List of mathematical symbols by subject](https://en.wikipedia.org/wiki/List_of_mathematical_symbols_by_subject) - Wikipedia

[LaTeX `twoside` document binding offset](https://tex.stackexchange.com/questions/27776/how-to-force-latex-to-put-even-pages-on-the-right-hand-side-in-documentclass-art/27786#27786)

## BibLaTeX

```latex
%% 最好放在 hyperref 之前
\usepackage{biblatex}
\addbibresource{ref.bib}

\begin{document}
...
\printbibliography
\end{document}
```

## 字体

```latex
\usepackage[utf8]{inputenc} %% So you can use Unicode chars (enc -- encoding)
\usepackage[T1]{fontenc}    %% `OT1` (old TeX) only contains 128 chars, that's why `<` and `>` are shown as `¡` and `¿`

\usepackage{mathpazo}       %% Pazo Math font for math (bettr in combination with Palatino font for text)
\usepackage{tgpagella}      %% Palladio font for text
```

[LaTeX font selection guide](https://www.latex-project.org/help/documentation/fntguide.pdf)

## 中文支持

`\usepackage{ctex}`

使用 XeLaTeX 编译

（英文版 Windows 需要自己手动安装中文字体，`Settings`>`Time & Language`>`Region & Language`>`中文`>`Options`>`Basic typing`）

查看字体 `fc-list>>fonts.txt`

设置字体 `\setCJKmainfont{Source Han Sans CN}`

## `a4paper`/`letterpaper` 不起作用

Quite a lot of old classes (e.g. `article`) don't set the pdf sizes. An option like `a4paper` sets only things like the TeX `\paperwidth`, the linewidth and similar lengths.

You will have to insert the necessary command yourself. For pdflatex this is

```latex
\pdfpagewidth=\paperwidth%
\pdfpageheight=\paperheight%
```

BTW: The people who can't reproduce your problem probably have a4paper as default. In this case they would see your problem if they used e.g. the option `letterpaper`.

### Change TeX Live Default Setting

```
tlmgr paper letter
tlmgr paper a4
```

## Beamer

```latex
% Gets rid of bottom navigation bars
\setbeamertemplate{footline}[page number]{}

% Gets rid of navigation symbols
\setbeamertemplate{navigation symbols}{}
```
