# S02｜Toolformer

類型：來源筆記

讓模型學會何時、如何呼叫工具。

## 研究問題

如何從少量 API 示範建立可用的工具訓練資料？

## 證據摘要

Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。

## 閱讀限制

這是包含資料篩選與微調的方法；在聊天介面提供工具名稱，不等於重現 Toolformer 的訓練。

## 在 Wiki 的位置

連到工具呼叫與方法比較，避免把「能使用工具」和「工具一定用對」混在一起。

## 來源證據

- C03：Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 [S02, PDF p.1, Abstract](https://arxiv.org/pdf/2302.04761v1#page=1)
- C04：Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。 [S02, PDF p.2, §2 / Figure 2](https://arxiv.org/pdf/2302.04761v1#page=2)

## 相關筆記

- [工具呼叫：名稱、參數、結果](tool-use.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)

## 反向連結

- [工具呼叫：名稱、參數、結果](tool-use.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
