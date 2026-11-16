# 五篇研究如何支援 AI 排程教學？

類型：問答連結

分清機制與評量，避免把不同研究當成排程效能排名。

## 先區分層次

ReAct 說明行動與觀察；Reflexion 研究文字回饋與記憶；兩篇談代理機制。AgentBench 與 WebArena 是一般代理任務的評量框架或環境；NATURAL PLAN 則直接評量 LLM 安排行程與會議的能力。三類研究不在同一比較層次。

## 如何連成一條流程

整理限制 → AI 產生草稿 → 工具回報違規 → 記錄具體修正 → 重跑驗收。NATURAL PLAN 說明為何不能直接相信草稿，其他四篇提供觀察、回饋與驗收的觀點；這是本 Wiki 的綜合設計，不是任何單篇研究證明的完整排程系統。

## 訓練與記憶不能混同

ReAct 主要提示設定用凍結模型，但另有微調分析；Reflexion 此機制不更新權重；NATURAL PLAN 以 few-shot 提示評估現成模型，沒有訓練排程模型。不能統稱成同一種自我學習。

## 自我修正與外部檢查

綜合推論：Reflexion 的自我評估訊號在其實驗中有幫助，但作者指出反思依賴評估品質、沒有成功保證；NATURAL PLAN 在 Trip Planning 的消融中發現，沒有外部訊號的自我檢查修正反而降低表現。本作業因此讓修正依據可重跑的外部規則檢查；這是設計選擇，兩篇都沒有直接測試這種做法。

## 證據與案例的界線

NATURAL PLAN 是排程評量，不是排程演算法；其餘四篇也不是排程方法。各篇百分比有各自的版本、任務與計分條件，不能互相排名，也不能推成本案例的成功率。所有時段由作者自編，實際執行證據是固定規則結果與局部修正紀錄。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3](https://arxiv.org/pdf/2210.03629v3#page=3)
- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1](https://arxiv.org/pdf/2303.11366v4#page=1)
- C08：WebArena 依任務類型檢查答案或網站狀態，重點是實際結果是否滿足目標。 [S05, PDF p.6](https://arxiv.org/pdf/2307.13854v4#page=6)
- C10：ReAct 的 HotpotQA 錯誤分析發現重複先前推理與動作、無法跳出循環，以及檢索結果缺乏資訊等失敗模式。 [S01, PDF p.6](https://arxiv.org/pdf/2210.03629v3#page=6)
- C12：Reflexion 的模組化描述區分 Actor、Evaluator 與 Self-Reflection：產生行動、評估結果與整理文字反思各有角色。 [S03, PDF p.3](https://arxiv.org/pdf/2303.11366v4#page=3)
- C13：Reflexion 依賴自我評估或啟發式回饋的品質，論文指出其沒有成功的形式保證。 [S03, PDF p.2](https://arxiv.org/pdf/2303.11366v4#page=2)
- C14：AgentBench 區分格式無效、動作無效、上下文或任務輪數超限等結束原因；正常結束與任務成功仍須分開判斷。 [S04, PDF p.4](https://arxiv.org/pdf/2308.03688v2#page=4)
- C15：WebArena 用獨立部署的網站環境提高可重現性，避免即時網站變動與驗證碼等因素干擾比較；此設定仍不同於任意真實網站。 [S05, PDF p.3](https://arxiv.org/pdf/2307.13854v4#page=3)
- C16：ReAct 論文除了主要少量示範提示設定，也分析微調實驗；不能把 ReAct 一概定義成永遠不訓練的方法。 [S01, PDF p.6](https://arxiv.org/pdf/2210.03629v3#page=6)
- C17：NATURAL PLAN 的 Calendar Scheduling 任務，是依多人既有行程與各種限制安排工作會議；研究以參與人數與工作日數調整難度。 [S06, PDF p.3](https://arxiv.org/pdf/2406.04520v1#page=3)
- C20：NATURAL PLAN v1 在 5-shot 提示、以完全符合標準答案（exact match）計分下，Calendar Scheduling 各模型為：Gemini 1.5 Pro 48.9%、GPT-4o（gpt-4o-2024-05-13）43.7%、GPT-4（gpt-4-turbo-2024-04-09）41.2%、Gemini 1.5 Flash 34.3%、GPT-3.5（gpt-3.5-turbo-0125）19.9%（p.5 Table 2；模型版本見 p.4 §3.1）；作者指出所有模型在三項任務都低於 50%，即使所需工具資訊已放在提示中。 [S06, PDF p.5](https://arxiv.org/pdf/2406.04520v1#page=5)
- C22：論文報告的自我修正實驗針對 Trip Planning：要求模型自行檢查並修正計畫，反而使所有模型表現顯著下降，GPT-4、Gemini 1.5 Pro 比 GPT-3.5 下降更多；這不是日曆排程任務的結果。 [S06, PDF p.8](https://arxiv.org/pdf/2406.04520v1#page=8)

## 相關筆記

- [S01｜ReAct：依檢查結果修正排程](react-paper.md)
- [S03｜Reflexion：保留具體修正經驗](reflexion-paper.md)
- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S05｜WebArena：檢查實際成果](webarena-paper.md)
- [S06｜NATURAL PLAN：LLM 排日程的實測結果](natural-plan-paper.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)

## 反向連結

- [S01｜ReAct：依檢查結果修正排程](react-paper.md)
- [S03｜Reflexion：保留具體修正經驗](reflexion-paper.md)
- [S04｜AgentBench：分開結束與成功](agentbench-paper.md)
- [S05｜WebArena：檢查實際成果](webarena-paper.md)
- [S06｜NATURAL PLAN：LLM 排日程的實測結果](natural-plan-paper.md)
- [一日案例：從衝突草稿到可驗收日程](schedule-case.md)
