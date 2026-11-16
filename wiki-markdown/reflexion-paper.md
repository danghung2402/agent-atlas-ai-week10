# S03｜Reflexion：保留具體修正經驗

類型：來源筆記

文字記憶影響下一次嘗試，與更新模型權重不同。

## 原文的機制

Reflexion 把任務回饋轉成文字反思，保留在情節記憶中，影響後續嘗試；此機制不更新模型權重。Actor、Evaluator、Self-Reflection 分別負責產生、評估與整理反思。

## 本主題如何使用

「T1 與 F1 重疊；F1 不可移動；下一輪把 T1 改到 16:00」比「再排好一點」更能指出要改哪裡。這是依研究觀點設計的教學紀錄。

## 失敗與限制

反思依賴評估或啟發式回饋的品質，原文沒有形式成功保證。檢查器漏掉課程時，文字記憶也無法自動補出正確限制。

## 來源定位

不更新權重與情節記憶見 PDF p.1 摘要；回饋品質與無成功保證見 p.2；三個模組角色見 p.3 §3。

## 來源證據

- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1](https://arxiv.org/pdf/2303.11366v4#page=1)
- C12：Reflexion 的模組化描述區分 Actor、Evaluator 與 Self-Reflection：產生行動、評估結果與整理文字反思各有角色。 [S03, PDF p.3](https://arxiv.org/pdf/2303.11366v4#page=3)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2](https://arxiv.org/pdf/2303.11366v4#page=2)

## 相關筆記

- [把衝突回饋變成下一輪修正](feedback-memory.md)
- [五篇研究如何支援 AI 排程教學？](methods-are-different.md)

## 反向連結

- [把衝突回饋變成下一輪修正](feedback-memory.md)
- [五篇研究如何支援 AI 排程教學？](methods-are-different.md)
- [排程助手何時應該停下來？](when-stop.md)
