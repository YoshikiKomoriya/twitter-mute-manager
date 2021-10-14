# preferences

アプリケーション内で使われる固有の設定（値やロジック）を格納する
ビジネスロジック的に意味がある値を対象としていて、インフラ層やアプリケーションの基本的な設定には**依存しないもの**のみを扱う

e.g. ナビゲーションで表示するリンク先・コンポーネント固有のバリデーション設定

## 含めるファイル

- アプリケーション内で固有の設定に関する情報
  - 値
  - 関数
  - 型

## ファイル作成の基準

基本的にはファイルを作成せずに、**コンポーネント内で完結することが望ましい**
以下のような例外的な場合にのみ、ファイルを作成する

- コンポーネントに書くと可読性が悪化する
  - 以下の設定をファイルに分離する
    - コード量の多い煩雑な処理
    - コンポーネントの主な関心（UI の表示・変更）から遠い概念
      - e.g. バリデーション用の検証処理
- 複数のコンポーネントから呼び出されることが想定されるもの
  - e.g. ボタンコンポーネントの属性に設定する値