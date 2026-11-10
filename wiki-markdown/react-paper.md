# S01｜ReAct

類型：來源筆記

把推理、動作與觀察接成互動過程。

## 研究問題

只產生計畫或只做動作，如何與環境互動並修正方向？

## 證據摘要

ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 ReAct 論文主要設定以少量示範提示凍結的語言模型；不應把這個設定說成每一步都重新訓練。

## 閱讀限制

此處摘要的是論文特定設定；沒有把論文改善幅度推論成所有任務都有效。PDF 的 Figure 1 文字擷取有編碼雜訊，因此概念依 §2 可讀正文核對。

## 在 Wiki 的位置

連到 ReAct 循環與 Agent 組件，提供「行動後還要讀觀察」的依據。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C02：ReAct 論文主要設定以少量示範提示凍結的語言模型；不應把這個設定說成每一步都重新訓練。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)

## 相關筆記

- [ReAct：每次動作後看結果](react-loop.md)
- [AI Agent 的基本組件](agent-basics.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)

## 反向連結

- [AI Agent 的基本組件](agent-basics.md)
- [ReAct：每次動作後看結果](react-loop.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
