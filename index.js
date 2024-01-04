
// BÀI 1

document.getElementById('btnTuyenSinh').onclick = function () {
    var diemMon1 = document.getElementById('txtDiem1').value * 1;
    var diemMon2 = document.getElementById('txtDiem2').value * 1;
    var diemMon3 = document.getElementById('txtDiem3').value * 1;
    var ans = diemMon1 + diemMon2 + diemMon3;
    var KhuVuc = document.getElementById('txtKhuVuc');
    var KhuVuc_index = KhuVuc.selectedIndex;
    var KhuVuc_value = KhuVuc.options[KhuVuc_index].value;

    if(KhuVuc_value === 'khuvucA'){
        ans += 2;
    }else if(KhuVuc_value === 'khuvucB'){
        ans += 1
    }else if(KhuVuc_value === 'khuvucC'){
        ans += 0.5;
    }

    
    var doiTuong = document.getElementById('txtDoiTuong');
    console.log(doiTuong);
    var doiTuong_index = doiTuong.selectedIndex;
    console.log(doiTuong_index);
    var doiTuong_value = doiTuong.options[doiTuong_index].value;
    console.log(doiTuong_value);
    
    if(doiTuong_value === 'doituong1'){
        ans += 2.5;
    }else if(doiTuong_value === 'doituong2'){
        ans += 1.5;
    }else if(doiTuong_value === 'doituong3'){
        ans += 1;
    }

    var diemChuan = document.getElementById('txtDiemChuan').value * 1;

    if(ans >= diemChuan){
        document.getElementById('ketQua1').innerHTML = "Bạn đã đậu." + " Tổng Điểm: " + ans;
    }else {
        document.getElementById('ketQua1').innerHTML = "Bạn đã rớt." + " Tổng Điểm: " + ans;
    }
}

// BÀI 2

document.getElementById('btnkw').onclick = function() {
    var soKW = document.getElementById('txtKw').value * 1;
    var hoTen = document.getElementById('txtName').value;
    var ans = 0;
    if(soKW > 350){
        ans += (soKW - 350) * 1300;
        soKW = 350;
    }
    if(soKW > 200){
        ans += (soKW - 200) * 1100;
        soKW = 200;
    }
    if(soKW > 100){
        ans += (soKW - 100) * 850;
        soKW = 100;
    }
    if(soKW > 50){
        ans += (soKW - 50) * 650;
        soKW = 50;
    }
    if(soKW > 0){
        ans += soKW * 500;
        soKW = 0;
    }

    document.getElementById('ketQua2').innerHTML = "Họ tên: " + hoTen + " Tiền điện: " + ans.toLocaleString();
}

// BÀI 3

document.getElementById('btnTienThue').onclick = function() {
    var thuNhap = document.getElementById('txtIncome').value * 1;
    var phuThuoc = document.getElementById('txtBase').value * 1;
    var hoTen = document.getElementById('txtHoTen').value;

    thuNhap -= 4000000;
    thuNhap -= phuThuoc * 1600000;
    console.log(thuNhap);
    var per = -1;
    if(thuNhap > 960000000){
        per = 35;
    }else if(thuNhap > 624000000){
        per = 30;
    }else if(thuNhap > 384000000){
        per = 25;
    }else if(thuNhap > 210000000){
        per = 20;
    }else if(thuNhap > 120000000){
        per = 15;
    }else if(thuNhap > 60000000){
        per = 10;
    }else per = 5;

    var ans = thuNhap * per / 100;
    console.log(per);
    console.log(ans);

    ans = ans.toLocaleString();

    document.getElementById('ketQua3').innerHTML = "Họ tên: " + hoTen + " Tiền thuế thu nhập cá nhân: " + ans;
}

// BÀI 4 



function myFunction() {
    var x = document.getElementById('txtKhachHang').value;
    if(x === 'nhaDan'){
        document.getElementById('txtSoKetNoi').disabled = true;
        
        document.getElementById('btnTienCap').onclick = function() {
            var maKH = document.getElementById('txtMaKhachHang').value;
            var soKenhCC = document.getElementById('txtSoKenhCaoCap').value * 1;
            var ans = 25 + 7.5 * soKenhCC;
            // ans = ans.toLocaleString();
            document.getElementById('ketQua4').innerHTML = "Mã khách hàng: " + maKH + " Tiền cáp: " + "$" + ans.toLocaleString();
        }


    }else {
        document.getElementById('txtSoKetNoi').disabled = false;
        document.getElementById('btnTienCap').onclick = function() {
            var maKH = document.getElementById('txtMaKhachHang').value;
            var soKenhCC = document.getElementById('txtSoKenhCaoCap').value * 1;
            var soKetNoi = document.getElementById('txtSoKetNoi').value * 1;
            var ans = soKenhCC * 50 + 15;
            ans += 75;
            if(soKetNoi > 10){
                ans += 5 * (soKetNoi - 10);
            }
            document.getElementById('ketQua4').innerHTML = "Mã khách hàng: " + maKH + " Tiền cáp: " + "$" + ans.toLocaleString();
        }
    }
}







