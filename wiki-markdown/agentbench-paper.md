# S04｜AgentBench

類型：來源筆記

跨互動環境觀察代理的失敗模式。

## 研究問題

文字問答能力是否足以代表多輪任務能力？

## 證據摘要

AgentBench 所選版本以八種互動環境評估模型的多輪推理與決策。 AgentBench 指出的障礙包括長期推理、決策及遵循指令的不足。

## 閱讀限制

使用 2023-10-25 的 arXiv v2。會議年份與版本年份分開記錄；本頁不是即時模型排名。

## 在 Wiki 的位置

連到成果驗收與失敗分類，提醒檢查長程任務中的中間狀態。

## 深入閱讀：評估層次

八種互動環境用來檢視多輪任務能力；本版採相對基本的 CoT 互動設定。它是評量框架，不能和 ReAct 或 Toolformer 當作同一類「更強演算法」直接排名。

## 深入閱讀：失敗如何分類

p.4 區分 Invalid Format、Invalid Action、Context Limit Exceeded、Task Limit Exceeded，以及正常結束。這些是執行結束原因；正常結束不自動代表達成目標。

## 深入閱讀：本作業如何使用

綜合設計：輸入缺欄位就停止；事件時間不合法就退回；修正達上限就回報，成功則另外檢查完整任務覆蓋。分類借用評量觀點，名稱與規則屬本作業。

## 來源證據

- C06：AgentBench 所選版本以八種互動環境評估模型的多輪推理與決策。 [S04, PDF p.1, Abstract](https://arxiv.org/pdf/2308.03688v2#page=1)
- C07：AgentBench 指出的障礙包括長期推理、決策及遵循指令的不足。 [S04, PDF p.1, Abstract](https://arxiv.org/pdf/2308.03688v2#page=1)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4, §2 / Typical finish reasons](https://arxiv.org/pdf/2308.03688v2#page=4)

## 相關筆記

- [成果驗收：以狀態和證據判斷完成](evaluation.md)
- [AI Agent 的基本組件](agent-basics.md)
- [代理何時應該停止？](when-stop.md)

## 反向連結

- [成果驗收：以狀態和證據判斷完成](evaluation.md)
- [代理何時應該停止？](when-stop.md)
