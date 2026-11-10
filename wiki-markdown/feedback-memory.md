# 回饋與記憶：把錯誤變成可用資訊

類型：概念整理

「再試一次」之外，還要留下可執行的修正。

## 研究依據

Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。

## 自編例子

檢查說「引用沒有頁碼」；可用的反思是「下一輪先補 PDF 頁碼，再寫逐頁稿」。只有「下次更小心」無法明確改變流程。

## 容易混淆

Reflexion 的文字記憶並不是重新訓練權重。把記憶附進下一次輸入，也不代表模型已永久學會。

## 本作業的做法

將問題、修正位置、重跑結果存成檔案。記錄可以協助後續工作，但本網站沒有實作論文的完整 Reflexion 代理。

## 來源證據

- C05：Reflexion 把任務回饋整理成文字反思，存入情節記憶以影響之後的嘗試；此機制不更新模型權重。 [S03, PDF p.1, Abstract](https://arxiv.org/pdf/2303.11366v4#page=1)

## 相關筆記

- [S03｜Reflexion](reflexion-paper.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
- [成果驗收：以狀態和證據判斷完成](evaluation.md)

## 反向連結

- [S03｜Reflexion](reflexion-paper.md)
- [ReAct：每次動作後看結果](react-loop.md)
- [ReAct、Toolformer、Reflexion 一樣嗎？](methods-are-different.md)
