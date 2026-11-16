# S04｜AgentBench：分開結束與成功

類型：來源筆記

借用多輪評量觀點，辨認無效草稿與未完成。

## 原文的評量

本作業固定使用 arXiv v2：八種互動環境評估多輪推理與決策。原文指出長期推理、決策及指令遵循仍是障礙。

## 結束原因

PDF p.4 區分 Invalid Format、Invalid Action、Context Limit Exceeded、Task Limit Exceeded 與正常結束。正常停止不自動表示任務成功。

## 本主題如何使用

本案例另設 NEEDS_INPUT、INVALID_DRAFT、PASS，以及詢問、修正、停止、交人確認的路由。名稱與排程規則由本作業自訂，並非原 benchmark 的任務。

## 版本與界線

實際讀取 v2 日期為 2023-10-25，書目會議年份為 2024。這不是今日模型排行榜，也沒有重現 AgentBench 效能。

## 來源證據

- C06：AgentBench 所選版本以八種互動環境評估模型的多輪推理與決策。 [S04, PDF p.1](https://arxiv.org/pdf/2308.03688v2#page=1)
- C07：AgentBench 指出的障礙包括長期推理、決策及遵循指令的不足。 [S04, PDF p.1](https://arxiv.org/pdf/2308.03688v2#page=1)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4](https://arxiv.org/pdf/2308.03688v2#page=4)

## 相關筆記

- [如何驗收一份課業與工作日程](evaluation.md)
- [排程助手何時應該停下來？](when-stop.md)
- [五篇研究如何支援 AI 排程教學？](methods-are-different.md)

## 反向連結

- [如何驗收一份課業與工作日程](evaluation.md)
- [五篇研究如何支援 AI 排程教學？](methods-are-different.md)
- [排程助手何時應該停下來？](when-stop.md)
