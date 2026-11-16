# AI 如何安排課業與工作？ — 教學大綱

讀者：AI 初學者；資料：自編單日日程；成果：可驗收草稿，不宣稱最適解。

## 01 AI 如何安排課業與工作？

先說清楚限制，再讓草稿接受檢查。

Wiki：agent-basics；證據：C01, C03, C08

## 02 先把不能動的時間留下來

自編教學日 D1｜可安排時段 15:00–21:00。

Wiki：schedule-case；證據：C01, C08

## 03 每項任務，要有時長與期限

資料不足先問，不用猜測填空。

Wiki：schedule-case；證據：C03, C08, C13

## 04 誰負責安排，誰負責檢查？

AI 出草稿；工具查規則；人確認採用。

Wiki：agent-basics；證據：C01, C03, C08

## 05 每做一步，都讀回饋

觀察會影響下一步，避免整張盲目重排。

Wiki：react-loop；證據：C01, C02, C10

## 06 檢查器需要什麼輸入？

Toolformer 研究工具資料篩選與微調；此處只借用介面觀點。

Wiki：tool-use；證據：C03, C04, C11

## 07 把錯誤，寫成能執行的修正

文字記憶影響下一輪；此機制不更新模型權重。

Wiki：feedback-memory；證據：C05, C12, C13

## 08 只移動 T1，其他事件不動

刻意注入衝突後，AI 作者修正並用程式重跑。

Wiki：schedule-case；證據：C01, C05, C08

## 09 沒重疊，還不一定排好了

借用 AgentBench 與 WebArena 的評量觀點：看實際條件。

Wiki：evaluation；證據：C06, C07, C08, C14

## 10 何時該問，何時該停？

不把「還在嘗試」寫成「已完成」。

Wiki：when-stop；證據：C07, C08, C13, C14

## 11 五篇研究，各支援一個觀點

前三篇談機制，後兩篇談評量；不是排程效能排名。

Wiki：methods-are-different；證據：C01, C04, C05, C08, C11, C14, C16

## 12 換成你來判斷

先選答案，再看原因。

Wiki：schedule-case；證據：C01, C08, C13

## 13 安排之前先定義「排好」

把限制、修正與完成證據連起來。

Wiki：react-loop；證據：C01, C03, C05, C08

## 14 五份來源，一份可追溯的 Wiki

各頁先連回 Wiki，再查研究版本與 PDF 頁碼。

Wiki：methods-are-different；證據：C01, C02, C03, C04, C05, C06, C07, C08, C09

