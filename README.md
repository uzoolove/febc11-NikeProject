# 바닐라프로젝트 샘플코드

## 링크
[나이키 샘플사이트](https://seokki2222.github.io/NikeProject/vanilaproject/pages/main/index.html)

## 폴더 구조

```
📦Project
 ┣ 📂components *공통 컴포넌트(header, footer)
 ┃ ┣ 📂footer
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂header
 ┃ ┃ ┗ 📜index.js
 ┃ ┗ 📜.DS_Store
 ┣ 📂css -> *공통 css
 ┃ ┣ 📜global.css
 ┃ ┗ 📜reset.css
 ┣ 📂js -> js파일
 ┗ 📂pages -> *각페이지(index.html, index.css)로 구성됨
 ┃ ┣ 📂customerService
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂findStore
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂itemDetail
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂itemList
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂myCart
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂signIn
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂signUp
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂termsOfService
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┣ 📂wishList
 ┃ ┃ ┣ 📜index.css
 ┃ ┃ ┗ 📜index.html
 ┃ ┗ 📜.DS_Store
```

### 컴포넌트
네비게이션, 푸터의 경우 WebComponets를 사용하여 컴포넌트 형식으로 제작했습니다. 컴포넌트 방식으로 제작할경우 쉽게 컴포넌트로 불러와서 사용이 가능하며 **디자인 및 기능수정이 한곳에서 이루어지기 떄문에** 유지보수성이 증가합니다.

nav-bar 
```html
 <nav-bar menu-items='["New & Featured", "Men", "Women", "Kids", "Sale"]'></nav-bar>
```
menu-items 으로 메뉴를 전달합니다.

footer
```html
 <nike-footer></nike-footer>
```
test
