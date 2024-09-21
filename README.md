# MaterialUI の学習

MaterialUI に慣れたくて動画を参考に真似しながらやってます。
[参考サイト](https://www.youtube.com/watch?v=fzxEECHnsvU)

## ブランチの内容

- main
  MaterialUI のデザインの共通化の方法について記載
- feature/responsePage
  レスポンシブデザイン？の記述

## Layout について

- Box
  div のようなものコンポーネントをラップするだけ
- Container
  div とにているが、margin と padding が設定されている。
- Stack
  グリッドシステムだけど、1 次元にすぎない。垂直や平行方向にすることができる。

## レスポンシブデザインについて

デフォルトで以下のようになっている ThemeProvider の breakPoint でカスタマイズすることもできるよ。

- xs: 0,
- sm: 600,
- md: 900,
- lg: 1200,
- xl: 1536,
