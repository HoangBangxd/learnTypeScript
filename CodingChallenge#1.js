/*Mark và John đang cố gắng so sánh chỉ số BMI (Chỉ số khối cơ thể) của họ,
được tính bằng công thức:
BMI = khối lượng / chiều cao ** 2 = khối lượng / (chiều cao * chiều cao) (khối lượng tính bằng kg
và chiều cao tính bằng mét).
Nhiệm vụ của bạn:
1. Lưu trữ khối lượng và chiều cao của Mark và John trong các biến
2. Tính chỉ số BMI của cả hai bằng công thức (bạn thậm chí có thể thực hiện cả hai
phiên bản)
3. Tạo một biến Boolean 'markHigherBMI' chứa thông tin về
liệu Mark có chỉ số BMI cao hơn John hay không.
Dữ liệu thử nghiệm:
§ Dữ liệu 1: Mark nặng 78 kg và cao 1,69 m. John nặng 92 kg và cao 1,95
cao m.
§ Dữ liệu 2: Mark nặng 95 kg và cao 1,88 m. John nặng 85 kg và cao 1,76
cao m.
dlcs 1*/

let MarkWeight = 78;
let MarkTall = 1.69;
let JohnWeight = 92;
let JohnTall = 1.95;

let BMIMark = MarkWeight / (MarkWeight * MarkTall);
let BMIJohn = JohnWeight / (JohnWeight * JohnTall);

let markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI)


