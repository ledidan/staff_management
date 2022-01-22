let mangThongBao = [
  "Vui lòng nhập vào mã nhân viên",
  "Vui lòng nhập vào tên",
  "Vui lòng chọn chức vụ ",
  "Vui lòng nhập vào lương căn bản",
  "Vui lòng nhập vào số giờ làm",
];

function getMyEle(el) {
  return document.getElementById(el);
}

function kiemTraNhap(idField, idThongBao, indexTB) {
  var valueField = getMyEle(idField).value;
  var thongBao = getMyEle(idThongBao);
  thongBao.style.color = "red";
  if (valueField === "") {
    thongBao.innerHTML = mangThongBao[indexTB];
  } else {
    thongBao.style.display = "none";
  }
}

function kiemTraChucVu() {
  var theSelect = getMyEle("chucVu");
  var thongBao = getMyEle("thongBaoChucVu");
  thongBao.style.color = "red";
  if (theSelect.selectedIndex === 0) {
    thongBao.innerHTML = mangThongBao[2];
  } else {
    thongBao.style.display = "none";
  }
}

getMyEle("btnXacNhan").addEventListener("click", function () {
  kiemTraNhap("maNhanVien", "thongBaoMa", 0);
  kiemTraNhap("tenNhanVien", "thongBaoTen", 1);
  kiemTraNhap("luongCanBan", "thongBaoLuong", 3);
  kiemTraNhap("soGioLam", "thongBaoGio", 4);
  kiemTraChucVu();
});
