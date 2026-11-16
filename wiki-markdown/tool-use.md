# 排程工具：輸入、回傳與使用限制

類型：概念整理

把「看起來合理」改成明確可重跑的條件檢查。

## 工具與模型不同

本作業的工具是 Python／JavaScript 固定驗收器 validate(spec, events)。AI 寫草稿，工具驗證；檢查器本身不會自主安排或修改事件。

## 輸入與輸出

spec 保存允許時段、固定事件與任務需求；events 保存草稿的 ID、開始與結束時間。輸出包含 PASS、INVALID_DRAFT 或 NEEDS_INPUT，以及具體違規代碼與位置。

## 七類硬規則

保留固定事件、每項恰好一次、有效時間區間、位於允許時段、足夠且符合指定時長、不晚於期限、沒有重疊。相鄰時段如 19:00–20:00 與 20:00–20:30 可以接受。

## 與 Toolformer 的差別

Toolformer 包含候選 API 資料篩選與模型微調；本作業沒有進行訓練。這裡借用「工具名稱、參數、回傳」的介面觀點，不將固定程式說成學會使用工具的模型。

## 來源證據

- C03：Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 [S02, PDF p.1](https://arxiv.org/pdf/2302.04761v1#page=1)
- C04：Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。 [S02, PDF p.2](https://arxiv.org/pdf/2302.04761v1#page=2)
- C11：Toolformer 本版的該評估設定每個輸入至多一次 API 呼叫；不能把其結果直接當成多步驟行事曆代理的驗證。 [S02, PDF p.6](https://arxiv.org/pdf/2302.04761v1#page=6)

## 相關筆記

- [S02｜Toolformer：分清工具、參數與結果](toolformer-paper.md)
- [AI 排程助手：先分清固定事件與待辦](agent-basics.md)
- [如何驗收一份課業與工作日程](evaluation.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)

## 反向連結

- [S02｜Toolformer：分清工具、參數與結果](toolformer-paper.md)
- [AI 排程助手：先分清固定事件與待辦](agent-basics.md)
- [如何驗收一份課業與工作日程](evaluation.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
