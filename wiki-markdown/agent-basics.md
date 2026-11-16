# AI 排程助手：先分清固定事件與待辦

類型：概念整理

AI 提出草稿，規則工具檢查，人決定是否採用。

## 一句話理解

這裡的 AI 排程助手，是將使用者限制整理成事件草稿，再利用檢查回饋修正的工作流程。它不只給安排建議，也要提供可驗收的結果；不是所有 AI 代理的唯一正式定義。

## 兩類輸入

固定事件是不能移動的工作與課程；待辦則需要名稱、所需時間與截止時間。先確認這些欄位，再讓 AI 安排，避免以猜測填補限制。

## 三方分工

AI 整理輸入並提出或修改草稿；程式執行明列的硬規則；人補資料、判斷偏好並決定採用。這是本作業的設計，沒有連接外部行事曆。

## 為什麼不能直接相信草稿

直接研究 AI 排會議的 NATURAL PLAN，把每位參與者的既有行程都放進提示，再請模型找出會議時間。在其 v1 的 Calendar Scheduling 任務、5-shot 提示與完全符合標準答案計分下，最佳的 Gemini 1.5 Pro 也只有 48.9% 答對（2024 年的模型）。該研究的 Trip Planning 實驗另顯示，只要求模型自我檢查並修正會使表現下降（不是日曆題）。這些不是本作業或今日模型的成功率，但說明草稿必須逐條驗收。

## 可檢查的目標

一份可用草稿必須保留固定事件、每項任務恰好一次，並符合時間範圍、時長、期限及不重疊。通過這些條件不表示已找到最適合每個人的最佳日程。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3](https://arxiv.org/pdf/2210.03629v3#page=3)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6](https://arxiv.org/pdf/2307.13854v4#page=6)
- C17：NATURAL PLAN 的 Calendar Scheduling 任務，是依多人既有行程與各種限制安排工作會議；研究以參與人數與工作日數調整難度。 [S06, PDF p.3](https://arxiv.org/pdf/2406.04520v1#page=3)
- C20：NATURAL PLAN v1 在 5-shot 提示、以完全符合標準答案（exact match）計分下，Calendar Scheduling 各模型為：Gemini 1.5 Pro 48.9%、GPT-4o（gpt-4o-2024-05-13）43.7%、GPT-4（gpt-4-turbo-2024-04-09）41.2%、Gemini 1.5 Flash 34.3%、GPT-3.5（gpt-3.5-turbo-0125）19.9%（p.5 Table 2；模型版本見 p.4 §3.1）；作者指出所有模型在三項任務都低於 50%，即使所需工具資訊已放在提示中。 [S06, PDF p.5](https://arxiv.org/pdf/2406.04520v1#page=5)
- C22：論文報告的自我修正實驗針對 Trip Planning：要求模型自行檢查並修正計畫，反而使所有模型表現顯著下降，GPT-4、Gemini 1.5 Pro 比 GPT-3.5 下降更多；這不是日曆排程任務的結果。 [S06, PDF p.8](https://arxiv.org/pdf/2406.04520v1#page=8)

## 相關筆記

- [排程循環：產生 → 檢查 → 修正](react-loop.md)
- [排程工具：輸入、回傳與使用限制](tool-use.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
- [排程助手何時應該停下來？](when-stop.md)
- [S06｜NATURAL PLAN：LLM 排日程的實測結果](natural-plan-paper.md)

## 反向連結

- [S01｜ReAct：依檢查結果修正排程](react-paper.md)
- [S06｜NATURAL PLAN：LLM 排日程的實測結果](natural-plan-paper.md)
- [排程工具：輸入、回傳與使用限制](tool-use.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
