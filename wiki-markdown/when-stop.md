# 代理何時應該停止？

類型：問答連結

目標完成、資料不足或超過修正上限，都需要明確出口。

## 短答

本作業的設計：全部驗收通過才交件；證據不足就回到資料節點；最多修正三輪，仍失敗則停止並回報。三輪是專案規則，並非論文結論。

## 為何需要停止條件

AgentBench 提醒長程決策與指令遵循可能失敗；WebArena 提醒要核對功能結果。因此本作業把「何時算完成」寫成可觀察條件。

## 人工介入點

公開或對外操作依使用者授權；超過修正上限、無法判斷來源矛盾或資料缺失時，保留問題供人決定。流程頁清楚標示本次已授權與未執行的部分。

## 來源證據

- C07：AgentBench 指出的障礙包括長期推理、決策及遵循指令的不足。 [S04, PDF p.1, Abstract](https://arxiv.org/pdf/2308.03688v2#page=1)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6, §3.2](https://arxiv.org/pdf/2307.13854v4#page=6)

## 相關筆記

- [S04｜AgentBench](agentbench-paper.md)
- [S05｜WebArena](webarena-paper.md)
- [成果驗收：以狀態和證據判斷完成](evaluation.md)
- [工具呼叫：名稱、參數、結果](tool-use.md)
- [案例：工作與課業排程助手](schedule-case.md)

## 反向連結

- [S04｜AgentBench](agentbench-paper.md)
- [S05｜WebArena](webarena-paper.md)
- [工具呼叫：名稱、參數、結果](tool-use.md)
- [成果驗收：以狀態和證據判斷完成](evaluation.md)
- [案例：工作與課業排程助手](schedule-case.md)
