# 工具呼叫：名稱、參數、結果

類型：概念整理

有工具還需要正確的輸入，並檢查回傳值。

## 研究依據

Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。

## 自編教學例子

計算工具的名稱為 calculator；輸入是 240 × 3；回傳值是 720。三者各有角色。若把工具失敗當成成功，後面的文字再流暢也無法補救。這是一般教學例子。

## 本作業的規則

執行前核對檔案路徑與輸入格式；執行後讀回傳值與輸出檔；有外部影響的操作，依人類授權範圍處理。這些是專案設計原則。

## 來源證據

- C03：Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 [S02, PDF p.1, Abstract](https://arxiv.org/pdf/2302.04761v1#page=1)
- C04：Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。 [S02, PDF p.2, §2 / Figure 2](https://arxiv.org/pdf/2302.04761v1#page=2)

## 相關筆記

- [S02｜Toolformer](toolformer-paper.md)
- [AI Agent 的基本組件](agent-basics.md)
- [代理何時應該停止？](when-stop.md)

## 反向連結

- [S02｜Toolformer](toolformer-paper.md)
- [AI Agent 的基本組件](agent-basics.md)
- [代理何時應該停止？](when-stop.md)
