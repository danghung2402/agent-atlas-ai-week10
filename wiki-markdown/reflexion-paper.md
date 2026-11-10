# S03｜Reflexion

類型：來源筆記

用文字回饋與記憶改進下一次嘗試。

## 研究問題

代理失敗後，如何保留可再利用的經驗？

## 證據摘要

Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。

## 閱讀限制

文字反思可以受錯誤回饋影響；「會反思」不能直接作為完成任務的證明。此處不重現原論文實驗。

## 在 Wiki 的位置

連到回饋記憶與方法比較，區分文字記憶和權重訓練。

## 深入閱讀：模組角色

p.3 §3 的 Actor 產生文字或行動，Evaluator 提供評估，Self-Reflection 將失敗整理為文字。角色可以分工理解，不等於必須有三家不同模型服務。

## 深入閱讀：有效回饋的前提

p.2 指出評估或啟發式回饋的品質會影響改善，且沒有形式成功保證。若衝突檢查器漏掉一堂課，文字反思也可能在錯誤資料上繼續修正。

## 深入閱讀：本作業如何使用

綜合設計：將「T1 與固定事件重疊」轉成具體修正記錄，並重跑同一驗收規則。這是人與 AI 配合的可重現範例，不冒稱完整 Reflexion 代理。

## 來源證據

- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1, Abstract](https://arxiv.org/pdf/2303.11366v4#page=1)
- C12：Reflexion 的模組化描述區分 Actor、Evaluator 與 Self-Reflection：產生行動、評估結果與整理文字反思各有角色。 [S03, PDF p.3, §3](https://arxiv.org/pdf/2303.11366v4#page=3)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2, Introduction](https://arxiv.org/pdf/2303.11366v4#page=2)

## 相關筆記

- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)

## 反向連結

- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
