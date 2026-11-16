# 把衝突回饋變成下一輪修正

類型：概念整理

留下錯在哪裡、哪些不能動，以及下一步如何重查。

## 具體回饋

有用的紀錄包含：T1 與 F1 重疊；F1 是不可移動的固定工作；下一輪只改 T1。它比「安排得不夠好」更容易轉成可執行修改。

## 記憶的作用

Reflexion 的文字記憶影響後續嘗試，不等於永久更新模型權重。本作業把修正原因與前後事件保存在執行結果中，沒有聲稱實作完整 Reflexion 系統。

## 評估也會錯

若輸入漏掉一堂課，驗收器可能通過不完整條件。因此先確認輸入，再看規則結果；不能以「AI 有反思」代替驗收。

## 局部重跑

移動 T1 後重跑同一組規則，確認新位置沒有造成新衝突，也沒有改動固定事件或遺漏任務。

## 來源證據

- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1](https://arxiv.org/pdf/2303.11366v4#page=1)
- C12：Reflexion 的模組化描述區分 Actor、Evaluator 與 Self-Reflection：產生行動、評估結果與整理文字反思各有角色。 [S03, PDF p.3](https://arxiv.org/pdf/2303.11366v4#page=3)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2](https://arxiv.org/pdf/2303.11366v4#page=2)

## 相關筆記

- [S03｜Reflexion：保留具體修正經驗](reflexion-paper.md)
- [排程循環：產生 → 檢查 → 修正](react-loop.md)
- [排程助手何時應該停下來？](when-stop.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)

## 反向連結

- [S03｜Reflexion：保留具體修正經驗](reflexion-paper.md)
- [排程循環：產生 → 檢查 → 修正](react-loop.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
