# S06｜NATURAL PLAN：LLM 排日程的實測結果

類型：來源筆記

直接評估 LLM 安排行程與會議的研究：資訊齊全時仍常排錯。

## 原文的任務

NATURAL PLAN 有 Trip Planning、Meeting Planning 與 Calendar Scheduling 三項任務。Calendar Scheduling 依多人既有行程與限制安排 30 分鐘或 1 小時的工作會議；研究把 Google Calendar 等工具的輸出直接放進提示，只評估規劃本身。題目再加入最早可行時間與避開特定時段等限制，使每題只有一個解。

## 結果與條件

v1 在 5-shot 提示（先給 5 個範例）、以完全符合標準答案計分時，Calendar Scheduling 的結果為 Gemini 1.5 Pro 48.9%、GPT-4o 43.7%、GPT-4 41.2%、Gemini 1.5 Flash 34.3%、GPT-3.5 19.9%（p.5 Table 2；模型版本見 p.4 §3.1）。作者指出三項任務所有模型都低於 50%。這些是 2024 年特定模型與題組的結果，不是今日模型或本作業案例的成功率。

## 複雜度與自我修正

任務越複雜，表現大多越差；但日曆排程隨人數或天數增加的下降，不如另外兩項任務明顯。論文報告的自我修正實驗針對 Trip Planning：要求模型自行檢查並修正，反而使表現顯著下降；這不是日曆排程任務的結果。

## 本主題如何使用

這是五份來源中唯一直接測試 AI 排日程的研究，說明「資訊都給了，也可能排錯」。本作業據此選擇讓 AI 出草稿、由固定程式逐條驗收，並把是否採用交給人；這是設計動機，論文沒有測試外部檢查器。本作業的單日 fixture 與七類規則不是 NATURAL PLAN 的題目或評分方式。

## 來源證據

- C17：NATURAL PLAN 的 Calendar Scheduling 任務，是依多人既有行程與各種限制安排工作會議；研究以參與人數與工作日數調整難度。 [S06, PDF p.3](https://arxiv.org/pdf/2406.04520v1#page=3)
- C18：NATURAL PLAN 把 Google Flights、Google Maps、Google Calendar 等工具的輸出直接放進提示，不需要工具使用環境，讓評估聚焦在規劃本身（p.3 §2.1 另說明把工具使用與規劃分開）。 [S06, PDF p.1](https://arxiv.org/pdf/2406.04520v1#page=1)
- C19：日曆排程題安排 30 分鐘或 1 小時的會議：一組固定某一天、參與者 2–7 人，另一組固定 2 人、可選 1–5 個工作日；再加入最早可行時間與避開特定時段的限制，使每題只有一個解。 [S06, PDF p.4](https://arxiv.org/pdf/2406.04520v1#page=4)
- C20：NATURAL PLAN v1 在 5-shot 提示、以完全符合標準答案（exact match）計分下，Calendar Scheduling 各模型為：Gemini 1.5 Pro 48.9%、GPT-4o（gpt-4o-2024-05-13）43.7%、GPT-4（gpt-4-turbo-2024-04-09）41.2%、Gemini 1.5 Flash 34.3%、GPT-3.5（gpt-3.5-turbo-0125）19.9%（p.5 Table 2；模型版本見 p.4 §3.1）；作者指出所有模型在三項任務都低於 50%，即使所需工具資訊已放在提示中。 [S06, PDF p.5](https://arxiv.org/pdf/2406.04520v1#page=5)
- C21：任務越複雜，模型表現大多越差；但作者指出 Calendar Scheduling 隨參與人數或工作日數增加時，下降幅度不如另外兩項任務明顯。 [S06, PDF p.7](https://arxiv.org/pdf/2406.04520v1#page=7)
- C22：論文報告的自我修正實驗針對 Trip Planning：要求模型自行檢查並修正計畫，反而使所有模型表現顯著下降，GPT-4、Gemini 1.5 Pro 比 GPT-3.5 下降更多；這不是日曆排程任務的結果。 [S06, PDF p.8](https://arxiv.org/pdf/2406.04520v1#page=8)

## 相關筆記

- [AI 排程助手：先分清固定事件與待辦](agent-basics.md)
- [如何驗收一份課業與工作日程](evaluation.md)
- [把衝突回饋變成下一輪修正](feedback-memory.md)
- [五篇研究如何支援 AI 排程教學？](methods-are-different.md)

## 反向連結

- [AI 排程助手：先分清固定事件與待辦](agent-basics.md)
- [排程工具：輸入、回傳與使用限制](tool-use.md)
- [把衝突回饋變成下一輪修正](feedback-memory.md)
- [如何驗收一份課業與工作日程](evaluation.md)
- [五篇研究如何支援 AI 排程教學？](methods-are-different.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
