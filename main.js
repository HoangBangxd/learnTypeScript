/*
1. alert :goi ham thong bao
2. console: 
3. confirm: thong bao xac nhan
4. prompt: thong bao xac nhan dien thong tin
5. setTimeout
var fullName = "Hoang Van Bang";
setTimeout(function () {
  alert("thong bao");
}, 1000);
6.setInterval
*/

/*
Lam quen voi toan tu
1 toan tu so hoc- arithmetic: + - * /, ** luy thua, % chia lay so du, ++ tang 1 gia tri so, -- giam 1 gia tri so 
2 toan tu gan- assignment
3 toan tu so sanh- comparison
4 toan tu logic- 
*/
// const now = 2037;
// const ageBang = now - 2000;
// const ageHong = now - 2001;
// console.log(ageBang, ageHong);
// console.log(ageBang * 2, ageHong / 10, 2 ** 3);
// const firstName = "Bang";
// const lastName = "Hoang";
// console.log(firstName + " " + lastName);
// let x = 10 + 5;
// x += 10;
// x *= 4;
// x++;
// x--;
// console.log(x);

// console.log(ageBang > ageHong);
// console.log(ageBang >= 18);
// const isFullAge = ageBang >= 18;
// console.log(now - 1991 > now - 2019);

//Thu thach 1
// let MarkWeight = 78;
// let MarkTall = 1.69;
// let JohnWeight = 92;
// let JohnTall = 1.95;

// let BMIMark = MarkWeight / (MarkTall * MarkTall);
// let BMIJohn = JohnWeight / (JohnTall * JohnTall);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn);
// console.log(markHigherBMI);

// chuoi va chu mau
// const firstName = "Hoang";
// const age = 24;

// console.log(`I'm ${firstName}, a ${age} year old! `);
// console.log("hoang\n van\n bang");
// console.log(`hoang
//  van bang`);

// if..else

// const age = 15;

// if (age >= 18) {
//   console.log("du dieu kien lai xe");
// } else {
//   console.log("khong du dieu kien lai xe");
// }

// Thử thách lập trình # 2
// Sử dụng ví dụ BMI từ Thử thách số 1 và mã bạn đã viết, và
// cải thiện nó.
// Nhiệm vụ của bạn:
// 1. In một kết quả đẹp ra bảng điều khiển, cho biết ai có chỉ số BMI cao hơn. Thông điệp
// là "Chỉ số BMI của Mark cao hơn của John!" hoặc "Chỉ số BMI của John cao hơn của Mark!"
// 2. Sử dụng một ký tự mẫu để bao gồm các giá trị BMI trong kết quả đầu ra. Ví dụ: "Mark's
// BMI (28,3) cao hơn John's (23,9)! "
// Gợi ý: Sử dụng câu lệnh if / else 😉
// CHÚC CÁC BẠN THÀNH CÔNG 😀

// let MarkWeight = 78;
// let MarkTall = 1.69;
// let JohnWeight = 92;
// let JohnTall = 1.95;

// let BMIMark = MarkWeight / (MarkTall * MarkTall);
// let BMIJohn = JohnWeight / (JohnTall * JohnTall);

// if (BMIMark < BMIJohn) {
//   console.log("Chỉ số BMI của Mark thap hơn của John!");
// } else {
//   console.log(`chi so cua Mark ${BMIMark} cao hon cua John ${BMIJohn}`);

// const hasDriveLicense = true; //a
// const hasGoodVision = false; //b

// console.log(hasDriveLicense && hasGoodVision);
// console.log(hasDriveLicense || hasGoodVision);
// console.log(!hasDriveLicense);

// const shouldDrive = hasDriveLicense && hasGoodVision;
// if (shouldDrive) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }
// Có hai đội thể dục là Dolphins và Koalas. Họ cạnh tranh với từng
// 3 lần khác. Người chiến thắng với điểm số trung bình cao nhất sẽ giành được cúp!
// Nhiệm vụ của bạn:
// 1. Tính điểm trung bình cho mỗi đội, sử dụng dữ liệu kiểm tra dưới đây
// 2. So sánh điểm trung bình của đội để xác định đội chiến thắng trong cuộc thi,
// và in nó ra bảng điều khiển. Đừng quên rằng có thể có một trận hòa, vì vậy hãy kiểm tra điều đó
// cũng như vậy (hòa có nghĩa là họ có cùng điểm trung bình)
// 3. Phần thưởng 1: Bao gồm yêu cầu đạt điểm tối thiểu là 100. Với quy tắc này, a
// đội chỉ thắng nếu có số điểm cao hơn đội kia và đồng thời
// đạt từ 100 điểm trở lên. Gợi ý: Sử dụng toán tử logic để kiểm tra mức tối thiểu
// điểm số, cũng như nhiều khối khác-if 😉
// 4. Tiền thưởng 2: Điểm tối thiểu cũng được áp dụng cho một trận hòa! Vì vậy, một trận hòa chỉ xảy ra khi
// cả hai đội có cùng số điểm và cả hai đều có số điểm lớn hơn hoặc bằng 100
// điểm. Nếu không, không đội nào giành được cúp
// Dữ liệu thử nghiệm:
// § Dữ liệu 1: Cá heo điểm 96, 108 và 89. Koalas điểm 88, 91 và 110
// § Phần thưởng dữ liệu 1: Cá heo đạt điểm 97, 112 và 101. Koalas điểm 109, 95 và 123
// § Phần thưởng dữ liệu 2: Cá heo đạt điểm số 97, 112 và 101. Điểm số 109, 95 và 106 của Koalas

// const Dolphins = (96 + 108 + 89) / 3;
// const Koalas = (88 + 91 + 110) / 3;

// console.log(Dolphins, Koalas);

// if (Dolphins > Koalas) {
//   console.log("Dolphins Win");
// } else if (Dolphins < Koalas) {
//   console.log("Koalas Win");
// } else if (Dolphins === Koalas) {
//   console.log("No Win");
// }

// const Dolphins = (97 + 112 + 101) / 3;
// const Koalas = (109 + 95 + 123) / 3;

// console.log(Dolphins, Koalas);

// if (Dolphins > Koalas && Dolphins >= 100) {
//   console.log("Dolphins Win");
// } else if (Dolphins < Koalas && Koalas >= 100) {
//   console.log("Koalas Win");
// } else if (Dolphins === Koalas) {
//   console.log("No Win");
// }
// const Dolphins = (97 + 112 + 101) / 3;
// const Koalas = (109 + 95 + 106) / 3;

// console.log(Dolphins, Koalas);

// if (Dolphins > Koalas && Dolphins >= 100) {
//   console.log("Dolphins Win");
// } else if (Dolphins < Koalas && Koalas >= 100) {
//   console.log("Koalas Win");
// } else if (Dolphins === Koalas && Dolphins >= 100 && Koalas >= 100) {
//   console.log("hoa");
// } else {
//   console.log("loser");
// }

// const day = "thu tu";

// switch (day) {
//   case "thu hai":
//     console.log("di boi");
//     break;
//   case "thu ba":
//     console.log("di du lich");
//     break;
//   case "thu tu":
//   case "thu nam":
//     console.log("di ve que");
//     break;
//   case "thu sau":
//   case "thu bay":
//   case "chu nhat":
//     console.log("o nha");
//     break;
//   default:
//     console.log("xem lai");
// }
// if (23 > 10) {
//   const str = "23 is bigger";
// }

// const me = "bang";
// console.log(`I'm ${99 - 80} year old ${me}`);
// const age = 13;

// const drink = age >= 18 ? "ruou" : "nuoc";
// console.log(drink);

// age >= 18 ? console.log("ruou") : console.log("nuoc");
// console.log(`toi muon uong ${age >= 18 ? "ruou" : "nuoc"}`);
// Steven muốn xây dựng một máy tính tiền boa rất đơn giản cho bất cứ khi nào anh ấy đi ăn trong một
// nhà hàng. Ở đất nước của anh ấy, thông thường sẽ boa 15% nếu giá trị hóa đơn từ 50 đến
// 300. Nếu giá trị khác, tiền boa là 20%.
// Nhiệm vụ của bạn:
// 1. Tính tiền boa, tùy thuộc vào giá trị hóa đơn. Tạo một biến có tên là 'tip' cho
// cái này. Không được phép sử dụng câu lệnh if / else 😅 (Nếu nó dễ dàng hơn cho bạn, bạn có thể
// bắt đầu bằng câu lệnh if / else, sau đó cố gắng chuyển nó thành câu lệnh bậc ba
// nhà điều hành!)
// 2. In một chuỗi vào bảng điều khiển có chứa giá trị hóa đơn, tiền boa và giá trị cuối cùng
// (hóa đơn + tiền boa). Ví dụ: “Hóa đơn là 275, tiền boa là 41,25 và tổng giá trị
// 316,25 ”
// Dữ liệu thử nghiệm:
// § Dữ liệu 1: Kiểm tra các giá trị hóa đơn 275, 40 và 430
// Gợi ý:
// § Để tính 20% của một giá trị, chỉ cần nhân nó với 20/100 = 0,2
// § Giá trị X nằm trong khoảng từ 50 đến 300, nếu nó> = 50 && <= 300 😉

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `Hóa đơn là ${bill}, tiền boa là ${tip} và tổng giá trị ${bill + tip} `
);
