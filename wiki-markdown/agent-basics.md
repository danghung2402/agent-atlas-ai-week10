# AI Agent 的基本組件

類型：概念整理

本 Wiki 用「目標、決策、工具、觀察」理解語言代理。

## 一句話理解

本作業的教學性歸納：AI Agent 是能圍繞目標，選擇動作並利用回饋繼續處理任務的系統。這不是所有研究共用的唯一正式定義。

## 四個組件

目標：要完成什麼；決策：下一步做什麼；工具：實際執行動作；觀察：執行後發生什麼。組件整理依 ReAct 的互動設定，並以 Toolformer 補充工具呼叫。

## 自編例子

使用者說「把資料整理成摘要」。只列整理步驟是建議；真的讀取指定資料、產出檔案並檢查結果，才展現此處關心的代理行為。例子不是論文實驗。

## 常見誤解

外表是聊天介面，也可能連接代理工作流。應看實際動作與回饋，不能只看有沒有對話框。

## 來源證據

- C01：ReAct 讓語言推理與動作交錯進行，並用環境回傳的觀察更新下一步。 [S01, PDF p.3, §2](https://arxiv.org/pdf/2210.03629v3#page=3)
- C03：Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 [S02, PDF p.1, Abstract](https://arxiv.org/pdf/2302.04761v1#page=1)
- C07：AgentBench 指出的障礙包括長期推理、決策及遵循指令的不足。 [S04, PDF p.1, Abstract](https://arxiv.org/pdf/2308.03688v2#page=1)

## 相關筆記

- [ReAct：每次動作後看結果](react-loop.md)
- [工具呼叫：名稱、參數、結果](tool-use.md)
- [成果驗收：以狀態和證據判斷完成](evaluation.md)
- [S01｜ReAct](react-paper.md)
- [案例：工作與課業排程助手](schedule-case.md)

## 反向連結

- [S01｜ReAct](react-paper.md)
- [S04｜AgentBench](agentbench-paper.md)
- [ReAct：每次動作後看結果](react-loop.md)
- [工具呼叫：名稱、參數、結果](tool-use.md)
