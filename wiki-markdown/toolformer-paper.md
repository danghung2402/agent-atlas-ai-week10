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

## 深入閱讀：方法與評估

候選呼叫先由模型產生，再執行 API；以後續文字預測損失篩選有幫助的呼叫，最後微調。工具收益須放在同一資料集、可用工具與評估方式下解讀。

## 深入閱讀：重要邊界

本版 p.6 的評估限制每個輸入至多一次 API 呼叫；p.8 也討論這會限制先查日期再查知識的組合。它不是「讀行事曆、改事件、讀回驗證」的完整多步驟日程系統。

## 深入閱讀：本作業如何使用

綜合設計：把工具名稱、輸入參數與回傳狀態分開。本作業的檢查器以固定規則執行，並未訓練模型學習呼叫 API。

## 來源證據

- C03：Toolformer 學習選擇 API、呼叫時機與參數，並將工具結果納入後續文字生成。 [S02, PDF p.1, Abstract](https://arxiv.org/pdf/2302.04761v1#page=1)
- C04：Toolformer 會產生候選 API 呼叫、執行、篩選有幫助的結果，再用保留的資料微調模型。 [S02, PDF p.2, §2 / Figure 2](https://arxiv.org/pdf/2302.04761v1#page=2)
- C11：Toolformer 本版的該評估設定每個輸入至多一次 API 呼叫；不能把其結果直接當成多步驟行事曆代理的驗證。 [S02, PDF p.6, §4.2 / Decoding setup](https://arxiv.org/pdf/2302.04761v1#page=6)

## 相關筆記

- [工具呼叫：名稱、參數、結果](tool-use.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)

## 反向連結

- [工具呼叫：名稱、參數、結果](tool-use.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
