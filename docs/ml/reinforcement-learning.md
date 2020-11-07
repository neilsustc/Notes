# 强化学习 - Reinforcement Learning

<link rel="stylesheet" href="/notes/katex@0.11.1.min.css">

::: warning 🚧
Under construction...
:::

::: callout 🥥 In a Nutshell
设想你正在下一局（你）不知道规则的棋，下了几十（上百）步之后，裁判突然宣布「你输了」
——（如何下得更好）这就是强化学习
:::

强化学习是 通过与环境交互来解决连续决策的问题

- ==可能的状态== **state**，$s \in S$（棋盘的局面）
- ==允许的动作== **action**，$a \in A(s)$（即可以落子的位置）
- A ==transition model== $T(s, a) \colon S \times A \to S$（比如黑白棋的翻转，围棋的提子）

## 马尔可夫决策过程 - Markov Decision Processes (MDPs)

TODO

## 从 Model-based 到 Model-free

## 阅读材料

- Stuart Russell and Peter Norvig. Artificial Intelligence: A Modern Approach. *Prentice Hall*. 3rd 2009.
  (Chapter 17: Making Complex Decisions; Chapter 21: Reinforcement Learning)
- 周志华. 机器学习. 2016 年第 1 版.（第 16 章，强化学习）

其它

- [这里有一篇深度强化学习劝退文 - 知乎专栏](https://zhuanlan.zhihu.com/p/33936457) 2018-02-25
