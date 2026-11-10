# ReAct、Toolformer、Reflexion 一樣嗎？

類型：問答連結

三篇研究處理不同層次，不能只因都有工具就視為同一方法。

## 短答

不一樣。ReAct 重點是推理與動作交錯的互動；Toolformer 包含工具資料建立與微調；Reflexion 將任務回饋保存為文字記憶。

## 比較方式

依序問：模型權重是否改變？本輪有無外部動作？下一輪是否讀取文字回饋？先分清機制，再談效果。

## 教學提醒

不能把不同 benchmark 的單一分數放在一起排名。若需要比較，必須先對齊任務、模型、工具與評量條件。這是本 Wiki 的比較規則。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C02：ReAct 論文主要設定以少量示範提示凍結的語言模型；不應把這個設定說成每一步都重新訓練。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C04：Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。 [S02, PDF p.2, §2 / Figure 2](https://arxiv.org/pdf/2302.04761v1#page=2)
- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1, Abstract](https://arxiv.org/pdf/2303.11366v4#page=1)

## 相關筆記

- [S01｜ReAct](react-paper.md)
- [S02｜Toolformer](toolformer-paper.md)
- [S03｜Reflexion](reflexion-paper.md)
- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)

## 反向連結

- [S01｜ReAct](react-paper.md)
- [S02｜Toolformer](toolformer-paper.md)
- [S03｜Reflexion](reflexion-paper.md)
- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)
