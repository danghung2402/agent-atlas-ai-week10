# 排程助手何時應該停下來？

類型：問答連結

缺資料、達修正上限與驗收通過，都要有清楚出口。

## 先問再排

若缺少任務時長或期限，回報缺欄位並詢問，不能自行補一個數字。時間格式錯誤或固定事件無效，也先修正輸入。

## 停止而非硬湊

本案例最多修正三輪；仍有違規時，保留失敗結果並交人判斷。這是防止無止境重試的專案規則，不是形式上的成功保證。

## 通過後交人確認

PASS 只表示指定硬條件成立。人仍需考慮偏好與未建模因素；本作業不對外寫入或刪除日曆事件。

## 研究依據

AgentBench 區分異常結束與正常結束；Reflexion 說明回饋品質限制；WebArena 提醒以功能狀態驗收。本頁的詢問與三輪規則為綜合設計。

## 來源證據

- C07：AgentBench 指出的障礙包括長期推理、決策及遵循指令的不足。 [S04, PDF p.1](https://arxiv.org/pdf/2308.03688v2#page=1)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6](https://arxiv.org/pdf/2307.13854v4#page=6)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2](https://arxiv.org/pdf/2303.11366v4#page=2)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4](https://arxiv.org/pdf/2308.03688v2#page=4)

## 相關筆記

- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S03｜Reflexion：保留具體修正經驗](reflexion-paper.md)
- [如何驗收一份課業與工作日程](evaluation.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)

## 反向連結

- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S05｜WebArena：檢查實際成果](webarena-paper.md)
- [AI 排程助手：先分清固定事件與待辦](agent-basics.md)
- [把衝突回饋變成下一輪修正](feedback-memory.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
