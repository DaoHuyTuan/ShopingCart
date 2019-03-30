### Thiếu sót 

**User case**
#### Cart 
- với mỗi User phải có cart riêng, nếu đúng user phải load cart hiện tại lên (cart mặc định là của badman)
- Trên trang list nhấn add product add 1 product đó vào cart => quanlity của product phải tăng theo => icon cart trên header phải hiển thị tăng theo 
- Trên Trang detail khi nhấn add product phải add thêm product vào cart (function add trên trang detail có thể add nhiều 1 hay nhiều product cùng loại)

+ Phỏng đoán vấn đề:
  - API của putCart là sửa trực tiếp quanlity ko phải API cộng dồn nên ko biết React cần update ra sao 
  - Đã có thể load cart lên nhưng ko update trực tiếp từ list page do đụng API của putCart 
+ Giãi pháp dự đoán (chưa giải quyết dc)
  1. Load cart lên list lọc id của các product trong cart nếu id nào trùng với product id nào trên list page thì sẽ bóc quanlity từ cart item truyền props vào Product component 
  2. Viết thêm API cho các button add product trên list page (function này sẽ get quanlity dựa trên id của product và user name ) => mỗi khi bấm add product sẽ get ra quanlity theo product id 

#### Fetch 
- Liệu có cách nào ko cần dùng redux-thunk để thực hiện async fetch ? 
- Làm sao truyền param cho 1 function nằm trong mapDispatchToProps() (hiện tại đang phải truyền thông qua 1 props và 1 biến trung gian)

#### Router 
- khi thực hiện xem detail page khi trở lại home page cart hiển thị tự động thêm gấp đôi (bug) (data thực ko bị thay đổi)
