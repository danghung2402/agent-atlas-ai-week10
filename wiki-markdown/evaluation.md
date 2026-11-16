# 如何驗收一份課業與工作日程

類型：概念整理

成功要看明列條件是否成立，不能只看流程正常結束。

## 先定義完成

本案例只驗證一天內的可行草稿：固定事件保留、待辦齊全、不重疊、時長正確、準時完成。偏好、通勤與最佳化不在本次範圍。

## 結果與路由分開

NEEDS_INPUT 表示先請人補資料；INVALID_DRAFT 表示回草稿；PASS 表示硬條件通過，仍交人確認。修正三輪仍失敗則 STOP_LIMIT，不冒充成功。

## 研究提供的觀點

AgentBench 提醒正常結束與成功要分開；WebArena 提醒驗收實際狀態。排程規則與名稱是本作業設計，不是兩篇研究的原始測試。

## 與 NATURAL PLAN 計分的差別

NATURAL PLAN 的日曆排程題設計成每題只有一個解，再以完全符合標準答案計分。本案例的日程可能有多種合法排法，所以不比對唯一答案，而是逐條檢查七類硬規則。

## 本次可證明什麼

八個自編故障注入案例可檢查規則在指定輸入下是否符合預期；不能據此推論 AI 的一般排程成功率、最佳化能力或真實使用者滿意度。

## 來源證據

- C06：AgentBench 所選版本以八種互動環境評估模型的多輪推理與決策。 [S04, PDF p.1](https://arxiv.org/pdf/2308.03688v2#page=1)
- C07：AgentBench 指出的障礙包括長期推理、決策及遵循指令的不足。 [S04, PDF p.1](https://arxiv.org/pdf/2308.03688v2#page=1)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6](https://arxiv.org/pdf/2307.13854v4#page=6)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4](https://arxiv.org/pdf/2308.03688v2#page=4)
- C19：日曆排程題安排 30 分鐘或 1 小時的會議：一組固定某一天、參與者 2–7 人，另一組固定 2 人、可選 1–5 個工作日；再加入最早可行時間與避開特定時段的限制，使每題只有一個解。 [S06, PDF p.4](https://arxiv.org/pdf/2406.04520v1#page=4)
- C20：NATURAL PLAN v1 在 5-shot 提示、以完全符合標準答案（exact match）計分下，Calendar Scheduling 各模型為：Gemini 1.5 Pro 48.9%、GPT-4o（gpt-4o-2024-05-13）43.7%、GPT-4（gpt-4-turbo-2024-04-09）41.2%、Gemini 1.5 Flash 34.3%、GPT-3.5（gpt-3.5-turbo-0125）19.9%（p.5 Table 2；模型版本見 p.4 §3.1）；作者指出所有模型在三項任務都低於 50%，即使所需工具資訊已放在提示中。 [S06, PDF p.5](https://arxiv.org/pdf/2406.04520v1#page=5)

## 相關筆記

- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S05｜WebArena：檢查實際成果](webarena-paper.md)
- [S06｜NATURAL PLAN：LLM 排日程的實測結果](natural-plan-paper.md)
- [排程工具：輸入、回傳與使用限制](tool-use.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)

## 反向連結

- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S05｜WebArena：檢查實際成果](webarena-paper.md)
- [S06｜NATURAL PLAN：LLM 排日程的實測結果](natural-plan-paper.md)
- [排程循環：產生 → 檢查 → 修正](react-loop.md)
- [排程工具：輸入、回傳與使用限制](tool-use.md)
- [排程助手何時應該停下來？](when-stop.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
