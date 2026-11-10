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

## 深入閱讀：方法與評估

§2 以模型、環境、動作與觀察的互動定義問題；研究跨問答、事實驗證、文字家務及網頁購物任務評估。主要提示設定使用凍結模型，但 p.6 也有微調分析，兩者不可混稱。

## 深入閱讀：反例與限制

p.6 的失敗分析說明：有觀察循環仍可能重複相同動作，檢索不到有用資訊也可能讓後續決策偏離。因此「有 loop」不是可靠性的充分條件。

## 深入閱讀：本作業如何使用

綜合設計：排程草稿經工具檢查後，把衝突位置作為下一次修正的輸入。這是借用互動觀點的教學情境，沒有重現 ReAct 的模型或原始 benchmark。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C02：ReAct 論文主要設定以少量示範提示凍結的語言模型；不應把這個設定說成每一步都重新訓練。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C10：ReAct 的 HotpotQA 錯誤分析發現重複先前推理與動作、無法跳出循環，以及檢索結果缺乏資訊等失敗模式。 [S01, PDF p.6, §3 / Error analysis](https://arxiv.org/pdf/2210.03629v3#page=6)
- C16：ReAct 論文除了主要少量示範提示設定，也分析微調實驗；不能把 ReAct 一概定義成永遠不訓練的方法。 [S01, PDF p.6, §3 / Fine-tuning analysis](https://arxiv.org/pdf/2210.03629v3#page=6)

## 相關筆記

- [ReAct：每次動作後看結果](react-loop.md)
- [AI Agent 的基本組件](agent-basics.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)

## 反向連結

- [AI Agent 的基本組件](agent-basics.md)
- [ReAct：每次動作後看結果](react-loop.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
