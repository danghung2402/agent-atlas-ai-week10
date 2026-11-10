# 案例：工作與課業排程助手

類型：概念整理

以使用者選定的情境，把目標、草稿、檢查與局部修正串起來。

## 情境與資料邊界

使用者於 2026-11-11 選擇工作與課業排程情境。本頁所有時段、任務與期限均為自編教學 fixture，不是使用者的真實行事曆，也沒有連接或寫入任何外部日曆。

## 可檢查的完成條件

固定工作 15:00–16:00、課程 18:00–19:00 不可移動。T1 報告 90 分鐘須於 18:00 前完成；T2 AI 練習 60 分鐘須於 21:00 前完成；T3 複習 30 分鐘須於 21:00 前完成。所有任務在 15:00–21:00 內，每項恰好出現一次，不能重疊。

## 資料不足就停止

若任務缺少所需時間或期限，先回報缺欄位，不能自己猜。本 fixture 不含優先度最佳化、通勤、跨日與真實日曆權限；「通過」僅代表明列規則全部滿足。

## 一次可重現的局部修正

刻意注入衝突的初始草稿將 T1 放在 15:30–17:00；檢查器應指出與固定工作重疊。AI 作者把 T1 改為 16:00–17:30，T2 19:00–20:00 與 T3 20:00–20:30 保持不動，再重跑。這是故障注入驗證，不能冒稱模型自動發現或自主修好。

## 對應五篇研究的方式

ReAct 提供行動後讀觀察的概念；Toolformer 提醒分清 API 與參數，但不保證多步驟排程；Reflexion 提醒具體回饋與記憶；AgentBench 提醒區分結束原因；WebArena 提醒核對實際狀態。這是跨文獻的教學設計。

## 到實際結果

可在「排程實驗」頁比較原始草稿與修正版，切換驗收案例並看錯誤定位。執行紀錄、完整輸入及檢查結果可以下載；重跑指令為 python scripts/run_schedule.py。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C03：Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 [S02, PDF p.1, Abstract](https://arxiv.org/pdf/2302.04761v1#page=1)
- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1, Abstract](https://arxiv.org/pdf/2303.11366v4#page=1)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6, §3.2](https://arxiv.org/pdf/2307.13854v4#page=6)
- C10：ReAct 的 HotpotQA 錯誤分析發現重複先前推理與動作、無法跳出循環，以及檢索結果缺乏資訊等失敗模式。 [S01, PDF p.6, §3 / Error analysis](https://arxiv.org/pdf/2210.03629v3#page=6)
- C11：Toolformer 本版的該評估設定每個輸入至多一次 API 呼叫；不能把其結果直接當成多步驟行事曆代理的驗證。 [S02, PDF p.6, §4.2 / Decoding setup](https://arxiv.org/pdf/2302.04761v1#page=6)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2, Introduction](https://arxiv.org/pdf/2303.11366v4#page=2)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4, §2 / Typical finish reasons](https://arxiv.org/pdf/2308.03688v2#page=4)

## 相關筆記

- [ReAct：每次動作後看結果](react-loop.md)
- [工具呼叫：名稱、參數、結果](tool-use.md)
- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)
- [成果驗收：以狀態和證據判斷完成](evaluation.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
- [代理何時應該停止？](when-stop.md)

## 反向連結

- [AI Agent 的基本組件](agent-basics.md)
- [ReAct：每次動作後看結果](react-loop.md)
- [工具呼叫：名稱、參數、結果](tool-use.md)
- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)
- [成果驗收：以狀態和證據判斷完成](evaluation.md)
- [代理何時應該停止？](when-stop.md)
