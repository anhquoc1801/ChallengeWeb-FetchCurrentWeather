# Dùng hàm const vì key đó không thay đổi trong quá trình sau này
# Sau đó click function để xin quyền truy cập để gọi vị trí hiện tại mình đang ở getCurrentPosition bằng API với appkey thông qua jquery ajax.
# hàm theResponse được gọi dữ liệu trả về , nếu dữ liệu trả về là success thì dữ liệu đó sẽ được gán vào các DOM và ngược lại dữ liệu trả về là error thì sẽ hiện lên dòng thông báo lỗi
# dùng JSON.parse để chuyển error từ string sang object
