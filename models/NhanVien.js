function NhanVien() {
  this.maNhanVien = "";
  this.tenNhanVien = "";
  this.chucVu = "";
  this.luongCanBan = "";
  this.soGioLam = "";
  this.heSoLuong = "";
  this.tinhLuong = function () {
    var tongLuong = Number(this.luongCanBan) * Number(this.heSoLuong);
    // hệ số lương là <option value của thẻ cha select
    return tongLuong;
  };
  this.xepLoaiNhanVien = function () {
    var loaiNhanVien = "";
    if (this.soGioLam < 50) {
      loaiNhanVien = "Yếu";
    } else if (this.soGioLam >= 50 && this.soGioLam < 75) {
      loaiNhanVien = "Trung bình";
    } else if (this.soGioLam >= 75 && this.soGioLam < 100) {
      loaiNhanVien = "Khá";
    } else if (this.soGioLam >= 100 && this.soGioLam < 150) {
      loaiNhanVien = "Giỏi";
    } else if (this.soGioLam >= 150) {
      loaiNhanVien = "xuất sắc";
    } else {
      loaiNhanVien = "Không hợp lệ !";
    }
    return loaiNhanVien;
  };
}
