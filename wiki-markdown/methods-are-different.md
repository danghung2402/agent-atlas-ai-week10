# 五篇研究如何支援 AI 排程教學？

類型：問答連結

分清機制與評量，避免把不同研究當成排程效能排名。

## 先區分層次

ReAct 說明行動與觀察；Toolformer 研究工具使用學習；Reflexion 研究文字回饋與記憶。AgentBench 與 WebArena 是評量框架或環境，與前三篇不在同一比較層次。

## 如何連成一條流程

整理限制 → AI 產生草稿 → 工具回報違規 → 記錄具體修正 → 重跑驗收。這是本 Wiki 依五篇觀點綜合的教學設計，不是任何單篇研究證明的完整排程系統。

## 訓練與記憶不能混同

ReAct 主要提示設定用凍結模型，但另有微調分析；Toolformer 透過工具資料微調；Reflexion 此機制不更新權重。不能統稱成同一種自我學習。

## 證據與案例的界線

五篇不是五種排程演算法，也沒有證明本案例最佳。所有時段由作者自編，實際執行證據是固定規則結果與局部修正紀錄。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3](https://arxiv.org/pdf/2210.03629v3#page=3)
- C04：Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。 [S02, PDF p.2](https://arxiv.org/pdf/2302.04761v1#page=2)
- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1](https://arxiv.org/pdf/2303.11366v4#page=1)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6](https://arxiv.org/pdf/2307.13854v4#page=6)
- C10：ReAct 的 HotpotQA 錯誤分析發現重複先前推理與動作、無法跳出循環，以及檢索結果缺乏資訊等失敗模式。 [S01, PDF p.6](https://arxiv.org/pdf/2210.03629v3#page=6)
- C11：Toolformer 本版的該評估設定每個輸入至多一次 API 呼叫；不能把其結果直接當成多步驟行事曆代理的驗證。 [S02, PDF p.6](https://arxiv.org/pdf/2302.04761v1#page=6)
- C12：Reflexion 的模組化描述區分 Actor、Evaluator 與 Self-Reflection：產生行動、評估結果與整理文字反思各有角色。 [S03, PDF p.3](https://arxiv.org/pdf/2303.11366v4#page=3)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2](https://arxiv.org/pdf/2303.11366v4#page=2)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4](https://arxiv.org/pdf/2308.03688v2#page=4)
- C15：WebArena 用獨立部署的網站環境提高可重現性，避免即時網站變動與驗證碼等因素干擾比較；此設定仍不同於任意真實網站。 [S05, PDF p.3](https://arxiv.org/pdf/2307.13854v4#page=3)
- C16：ReAct 論文除了主要少量示範提示設定，也分析微調實驗；不能把 ReAct 一概定義成永遠不訓練的方法。 [S01, PDF p.6](https://arxiv.org/pdf/2210.03629v3#page=6)

## 相關筆記

- [S01｜ReAct：依檢查結果修正排程](react-paper.md)
- [S02｜Toolformer：分清工具、參數與結果](toolformer-paper.md)
- [S03｜Reflexion：保留具體修正經驗](reflexion-paper.md)
- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S05｜WebArena：檢查實際成果](webarena-paper.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)

## 反向連結

- [S01｜ReAct：依檢查結果修正排程](react-paper.md)
- [S02｜Toolformer：分清工具、參數與結果](toolformer-paper.md)
- [S03｜Reflexion：保留具體修正經驗](reflexion-paper.md)
- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S05｜WebArena：檢查實際成果](webarena-paper.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
