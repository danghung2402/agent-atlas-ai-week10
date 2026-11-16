# 排程工具：輸入、回傳與使用限制

類型：概念整理

把「看起來合理」改成明確可重跑的條件檢查。

## 工具與模型不同

本作業的工具是 Python／JavaScript 固定驗收器 validate(spec, events)。AI 寫草稿，工具驗證；檢查器本身不會自主安排或修改事件。

## 輸入與輸出

spec 保存允許時段、固定事件與任務需求；events 保存草稿的 ID、開始與結束時間。輸出包含 PASS、INVALID_DRAFT 或 NEEDS_INPUT，以及具體違規代碼與位置。

## 七類硬規則

保留固定事件、每項恰好一次、有效時間區間、位於允許時段、足夠且符合指定時長、不晚於期限、沒有重疊。相鄰時段如 19:00–20:00 與 20:00–20:30 可以接受。

## 查詢工具與檢查工具

NATURAL PLAN 把 Google Calendar 等查詢工具的輸出直接放進提示，模型仍常排錯；本作業的 validate 則是在草稿完成後執行的檢查工具，逐條回報違規。前者提供資料，後者驗收結果，兩者角色不同。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3](https://arxiv.org/pdf/2210.03629v3#page=3)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6](https://arxiv.org/pdf/2307.13854v4#page=6)
- C18：NATURAL PLAN 把 Google Flights、Google Maps、Google Calendar 等工具的輸出直接放進提示，不需要工具使用環境，讓評估聚焦在規劃本身（p.3 §2.1 另說明把工具使用與規劃分開）。 [S06, PDF p.1](https://arxiv.org/pdf/2406.04520v1#page=1)
- C20：NATURAL PLAN v1 在 5-shot 提示、以完全符合標準答案（exact match）計分下，Calendar Scheduling 各模型為：Gemini 1.5 Pro 48.9%、GPT-4o（gpt-4o-2024-05-13）43.7%、GPT-4（gpt-4-turbo-2024-04-09）41.2%、Gemini 1.5 Flash 34.3%、GPT-3.5（gpt-3.5-turbo-0125）19.9%（p.5 Table 2；模型版本見 p.4 §3.1）；作者指出所有模型在三項任務都低於 50%，即使所需工具資訊已放在提示中。 [S06, PDF p.5](https://arxiv.org/pdf/2406.04520v1#page=5)

## 相關筆記

- [S06｜NATURAL PLAN：LLM 排日程的實測結果](natural-plan-paper.md)
- [AI 排程助手：先分清固定事件與待辦](agent-basics.md)
- [如何驗收一份課業與工作日程](evaluation.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)

## 反向連結

- [AI 排程助手：先分清固定事件與待辦](agent-basics.md)
- [如何驗收一份課業與工作日程](evaluation.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
