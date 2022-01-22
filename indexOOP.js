document.getElementById("btnXacNhan").onclick = function () {
  var nv = new NhanVien();
  nv.maNhanVien = document.querySelector("#maNhanVien").value;
  nv.tenNhanVien = document.querySelector("#tenNhanVien").value;
  nv.luongCanBan = document.querySelector("#luongCanBan").value;
  nv.soGioLam = document.querySelector("#soGioLam").value;
  nv.heSoLuong = document.querySelector("#chucVu").value;
  var slChucVu = document.querySelector("#chucVu");
  var arrOption = slChucVu.options;
  var optionDuocChon = arrOption[slChucVu.selectedIndex];
  nv.chucVu = optionDuocChon.innerHTML;
  document.querySelector("#txtChucVu").innerHTML = nv.chucVu;
  document.querySelector("#txtMaNhanVien").innerHTML = nv.maNhanVien;
  document.querySelector("#txtTenNhanVien").innerHTML = nv.tenNhanVien;
  document.querySelector("#txtXepLoaiTrongThang").innerHTML =
    nv.xepLoaiNhanVien();
  document.querySelector("#txtTongLuong").innerHTML = nv.tinhLuong();

  //Lấy giá trị innerHTML của thẻ option được chọn trong thẻ select
  //B1: Dom đến thẻ select
  // options: trả về arrTag option bên trong thẻ select đó
  // selectedIndex: trả về index của option được chọn
};
