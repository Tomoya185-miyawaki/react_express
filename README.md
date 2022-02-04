# 1on1システム開発
## 便利コマンド
### 各サーバを立ち上げる
```
$ docker-compose up -d
```
### サーバを止める
```
$ docker-compose stop
```
### 動いているサーバ（コンテナ）の確認
```
$ docker-compose ps
```
### フロント（React）用のサーバ（コンテナ）にアクセス
```
$ docker-compose run front sh
```
### API（Express）用のサーバ（コンテナ）にアクセス
```
$ docker-compose run api sh
```
### DB（MySQL）用のサーバ（コンテナ）にアクセスし、ローカル環境のデータベース選択
```
$ docker-compose run db sh
$ mysql -u root -p
$ use react_express
```