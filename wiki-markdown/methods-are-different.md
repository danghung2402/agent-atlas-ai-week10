# ReAct、Toolformer、Reflexion 一樣嗎？

類型：問答連結

三篇研究處理不同層次，不能只因都有工具就視為同一方法。

## 先分層，才比較

ReAct、Toolformer、Reflexion 討論代理機制；AgentBench、WebArena 提供互動任務評量環境。它們不在同一比較層次，不能直接排出單一高低名次。

## 三個機制差異

ReAct：在主要提示設定交錯推理、動作與觀察，論文也含微調實驗。Toolformer：產生、執行、篩選 API 資料再微調。Reflexion：以文字回饋與情節記憶影響後續嘗試，不更新權重。

## 為何不直接比較百分比

資料集、模型、工具權限、可嘗試次數及指標不同。WebArena 的任務成功率、程式生成 pass@1 或問答分數不是同一把尺。應先固定條件，才討論差異。

## 跨文獻結論

綜合推論：動作需要可讀的觀察、反思需要可信評估、驗收需要可觀察的完成條件。沒有哪一篇單獨證明排程助手一定可靠；本作業用局部可重跑檢查把觀點落實。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C04：Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。 [S02, PDF p.2, §2 / Figure 2](https://arxiv.org/pdf/2302.04761v1#page=2)
- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1, Abstract](https://arxiv.org/pdf/2303.11366v4#page=1)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6, §3.2](https://arxiv.org/pdf/2307.13854v4#page=6)
- C10：ReAct 的 HotpotQA 錯誤分析發現重複先前推理與動作、無法跳出循環，以及檢索結果缺乏資訊等失敗模式。 [S01, PDF p.6, §3 / Error analysis](https://arxiv.org/pdf/2210.03629v3#page=6)
- C11：Toolformer 本版的該評估設定每個輸入至多一次 API 呼叫；不能把其結果直接當成多步驟行事曆代理的驗證。 [S02, PDF p.6, §4.2 / Decoding setup](https://arxiv.org/pdf/2302.04761v1#page=6)
- C12：Reflexion 的模組化描述區分 Actor、Evaluator 與 Self-Reflection：產生行動、評估結果與整理文字反思各有角色。 [S03, PDF p.3, §3](https://arxiv.org/pdf/2303.11366v4#page=3)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2, Introduction](https://arxiv.org/pdf/2303.11366v4#page=2)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4, §2 / Typical finish reasons](https://arxiv.org/pdf/2308.03688v2#page=4)
- C15：WebArena 用獨立部署的網站環境提高可重現性，避免即時網站變動與驗證碼等因素干擾比較；此設定仍不同於任意真實網站。 [S05, PDF p.3, §2](https://arxiv.org/pdf/2307.13854v4#page=3)
- C16：ReAct 論文除了主要少量示範提示設定，也分析微調實驗；不能把 ReAct 一概定義成永遠不訓練的方法。 [S01, PDF p.6, §3 / Fine-tuning analysis](https://arxiv.org/pdf/2210.03629v3#page=6)

## 相關筆記

- [S01｜ReAct](react-paper.md)
- [S02｜Toolformer](toolformer-paper.md)
- [S03｜Reflexion](reflexion-paper.md)
- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)

## 反向連結

- [S01｜ReAct](react-paper.md)
- [S02｜Toolformer](toolformer-paper.md)
- [S03｜Reflexion](reflexion-paper.md)
- [回饋與記憶：把錯誤變成可用資訊](feedback-memory.md)
- [案例：工作與課業排程助手](schedule-case.md)

## 跨文獻比較表

| 研究與層次 | 機制 | 限制 | 教學借鑑 | 證據 |
|---|---|---|---|---|
| ReAct / 互動機制 | 在主要提示設定中交錯推理、動作、觀察；另有微調分析 | 可能重複與檢索失敗；不是有 loop 就成功 | 讀取排程檢查結果後再決定修正位置 | C01, C02, C10, C16 |
| Toolformer / 工具學習 | 生成、執行、篩選 API 訓練資料，再微調 | 該評估每輸入至多一次 API；不等於多步驟日曆代理 | 明確區分工具名稱、時間參數與回傳狀態 | C03, C04, C11 |
| Reflexion / 回饋與記憶 | Actor、Evaluator、Self-Reflection 角色分工 | 依賴回饋品質，沒有形式成功保證 | 記錄衝突原因與可執行修正，再次檢查 | C05, C12, C13 |
| AgentBench / 評量框架 | 跨互動環境觀察多輪決策與結束原因 | 正常結束仍需驗收；不同環境指標不可亂排名 | 分清缺資料、無效草稿、達上限與驗收通過 | C06, C07, C14 |
| WebArena / 網站評量環境 | 可部署網站、任務與功能結果檢查 | 特定可重現環境與歷史模型，不代表任意真實網站 | 檢查事件與期限，不以流暢文字當完成證明 | C08, C09, C15 |
