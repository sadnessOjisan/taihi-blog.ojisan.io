---
path: /gatsby-scaffold
created: "2021-10-17"
title: Gatsby の scaffold コマンドが良い感じ
visual: "./visual.png"
tags: ["gatsby"]
userId: sadnessOjisan
isFavorite: false
isProtect: false
---

Gatsby V4 のドキュメントを眺めると、`gatsby new` や `npm init gatsby` などのコマンドを見ます。
これは gatsby-cli と create-gatsby + npm-init によるものなのですが、v4 になってとても便利になっていたので紹介します。

## これまでの Gatsby の始め方

当時のドキュメントを正確に覚えているわけではないですが、getting-start などを見ると、gatsby new DIR_NAME TEMPLATE_URL で starter kit を手元に落としてきて、それを改造していく始め方だった気がします。
それは Gatsby v3 の CLI のオプションもそのようになっています。

FYI: https://github.com/gatsbyjs/gatsby/tree/c7207674248f5e7fcb96a900fce934e4bc25a203/packages/gatsby-cli

もちろん 0 から Gatsby 環境を作ることもできましたが、V3 以前であればファイル名を利用したルーティング機能もなかったため作らないといけないファイルも多く、なんらかの scaffold に頼って削って行ったほうが環境構築しやすいという事情もありました。

## gatsby-cli

さて、V4 系になると CLI は intercative なものになりました。
質問に答えていくだけで scaffold してくれます。

## create-gatsby

実は先ほどの scaffold と同等の機能が npm-init にあります。

### npm-init

### create-gatsby

これも同じように interactive に質問を聞かれます

画像

画像

画像

画像

画像

画像

この command は 1 年以上前からあります。
つまり Gatsby V4 の CLI 同等の機能が昔から使えていたこととなります。

FYI: https://github.com/gatsbyjs/gatsby/tree/936c74ea7ff9965c993541bd8feea82e40c0919b/packages/create-gatsby

なのに内部ではお互い依存しあっていないので似たような機能がそれぞれ実装されていますし、そもそも作者も違っています。
