
/*Bài tập 1:
Bài tập 1:
Viết chương trình Java mà khi chạy, màn hình console sẽ cho phép ta nhập vào một số nguyên, in ra màn hình “Đây là
số nguyên dương”
Nếu số vừa nhập vào là một số nhỏ hơn 0, ngược lại in ra “Đây là số nguyên âm”. */
function bai1() {
    var number = prompt('Nhập một số nguyên bất kỳ');
    number = Number.parseFloat(number);
    if (Number.isInteger(number)) {
        var text;
        if (number > 0) {
            text = 'Đây là số nguyên dương';
        } else if (number < 0) {
            text = 'Đây là số nguyên âm';
        }
        alert(text);
    } else {
        alert('Số nhập vào không phải số nguyên');
    }
}

/* Bài tập 2:
Viết chương trình cho phép nhập vào một số nguyên dạng số, sau khi chạy thì chương trình sẽ ghi số đó ra dưới dạng chữ.
VD: 1 -> Một, 2 -> Hai, … */
function bai2() {
    var number = prompt('Nhập số nguyên bất kỳ');
    number = Number.parseFloat(number);
    if (Number.isInteger(number) && number != 0) {
        number = number.toString();
        alert("Type of"+ " " + number + " " + "is" + " " + typeof number);
    } else {
        alert('Giá trị nhập vào không phải số nguyên');
    }
}

/* Bài tập 3:
Viết chương trình cho phép nhập vào 3 số thực
Chương trình này sẽ kiểm tra 3 số này có phải là 3 cạnh của một tam giác hay không. */
function bai3() {
    var a = prompt('Nhập cạnh a');
    var b = prompt('Nhập cạnh b');
    var c = prompt('Nhập cạnh c');
    a = Number.parseFloat(a)
    b = Number.parseFloat(b)
    c = Number.parseFloat(c)
    if ((a + b > c) && (a + c > b) && (b + c > a) &&
        (a > 0) && (b > 0) && (c > 0)) {
        alert('a,b,c là 3 cạnh của tam giác');
    } else {
        alert('a,b,c không phải là 3 cạnh của tam giác');
    }
}


/* Bài tập 4:
Viết chương trình cho phép nhập vào 3 số
Chương trình sẽ kiểm tra 3 số này có phải là 3 cạnh của một tam giác vuông hay không.
*/
function bai4() {
    var a = prompt('Nhập cạnh a');
    var b = prompt('Nhập cạnh b');
    var c = prompt('Nhập cạnh c');
    a = Number.parseFloat(a)
    b = Number.parseFloat(b)
    c = Number.parseFloat(c)
    if ((a * a == b * b + c * c) ||
        (b * b == a * a + c * c) ||
        (c * c == a * a + b * b)) {
        alert ('a,b,c là 3 cạnh của tam giác vuông');
    } else {
        alert('a,b,c không phải 3 cạnh của tam giác vuông');
    }
}


/*
Bài tập 5*:
Viết chương trình cho phép người dùng nhập vào mã số sinh viên
Sau đó kiểm tra xem mã số này có đúng với định dạng đã cho hay không.
Định dạng mã số sinh viên là “Bxxxxxxx” với x là số nguyên từ 1-9. (Sử dụng biểu thức chính quy để ràng buộc định dạng) */

function bai5() {
    var maSv = prompt('Nhập mã số sinh viên');
    var nhapMa = new RegExp("^B[1-9]{7}$/");
    var testMa = nhapMa.test(maSv);
    if (testMa) {
        alert('Mã sinh viên hợp lệ');
    } else {
        alert('Mã sinh viên không hợp lệ');
    }
}


/*Bài tập 6:
Viết chương trình cho phép nhập vào một số nguyên dương n, tính tổng tất cả số chẵn trong khoảng từ 0 - n. */

function bai6() {
    var n = prompt('Nhập vào số nguyên dương bất kỳ');
    var sum = 0;
    var i = 0;
    while (i <= n) {
        if (i % 2 == 0) {
            sum += i;
        }
        i++;
    }
    alert('Tổng các số chẵn từ 0 -'+" "+ n +" " +'là'+" "+sum);
}

/*
Bài tập 7:
Viết chương trình để nhập nhập một số nguyên, tìm kết quả phép nhân của số đó với các số từ 1 - 20 , sau đó in kết quả ra màn hình.*/
function bai7() {
    var n = prompt('Nhập số nguyên bất kỳ');
    for (var i = 1; i <= 20; i++) {
        console.log('Kết quả của', n, '*', i, '=', n * i);
    }
}



/*Bài tập 8:
Viết chương trình cho phép nhập vào một số nguyên n ( n < 1000 )
In ra tất cả số nguyên tố trong khoảng từ 0 - n. */

function bai8() {
    var n = prompt('Nhập số nguyên bất kỳ');
    for (var i = 2; i < n; i++) {
        primeNumber = true;
        if (i < 2) {
            primeNumber = false;
        }
        else {
            for (var p = 2; p < i - 1; p++) {
                if (i % p == 0) {
                    primeNumber = false;
                    break;
                }
            }
            if (primeNumber == true) {
                console.log(i)
            }
        }
    }
}

/*Bài tập 9:
Viết chương trình cho phép nhập vào số nguyên n(n <= 20), in ra số Fibonacci ứng với nó.
Số Fibonacci là số mà nó bằng tổng của 2 số Fibonacci trước nó.
Với giả thuyết là Fi(0) = 1, Fi(1) = 1.
Ta có ví dụ: Fi(2) = Fi(0) + Fi(1) = 1 + 1 = 2, Fi(3) = Fi(2) + Fi(1) = 2 + 1 = 3, Fi(4) = Fi(3) + Fi(2) = 3 + 2 = 5, … 
Giả sử n = 4, đầu ra sẽ là 5. */


/*Bài tập 10 *:
Viết chương trình cho phép người dùng nhập vào 5 mã số sinh viên.
Kiểm tra xem mã số sinh viên này có đúng với định dạng hay chưa.
Với định dạng mã số sinh viên là “B170xxxx” với x là số nguyên từ 1 - 9.(Sử dụng biểu thức chính quy để ràng buộc định dạng)*/


/*
Bài tập 11:
Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên.
Cuối cùng, chương trình sẽ xuất ra giá trị trung bình của mảng này.*/
function bai11() {
    var number = prompt('Nhập vào n với điều kiện n là số nguyên dương');
    var n = Number.parseInt(number);
    var myArray = new Array();

    for (var i = 0; i < n; i++) {
        var number1 = prompt('Nhập vào n' + i);
        var n1 = Number.parseInt(number1); 
        myArray[i] = n1;
    }
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += myArray[i];
    }
    var avg = sum / n;
    console.log(avg);
}

/*Bài tập 12:
Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên dương.
Cuối cùng, chương trình sẽ xuất ra phần tử có giá trị lớn nhất.*/
function bai12() {
    var number = prompt('Nhập vào n với điều kiện n là số nguyên dương');
    var n = Number.parseInt(number);
    if (n > 0) {
        var myArray = new Array();

        for (var i = 0; i < n; i++) {
            var number1 = prompt('Nhập vào n' + i);
            var n1 = Number.parseInt(number1); // chạy nhiều prompt

            if (n1 > 0) {
                myArray[i] = n1;
            } else {
                alert(n1 + " " + "không phải là số nguyên dương");
                break;
            }
        }
        var max = myArray[0];
        for (var i = 0; i < n; i++) {
            if (myArray[i] > max) {
                max = myArray[i]
            };
        }
        console.log(max);
    } else { alert("n không phải là số nguyên dương"); }
}

/*Bài tập 13:
Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên (có thể dương hoặc âm).
Cuối cùng, chương trình sẽ xuất ra phần tử có giá trị nhỏ nhất.*/

function bai13() {
    var number = prompt('Nhập vào n với điều kiện n là số nguyên bất kỳ');
    var n = Number.parseInt(number);
    var myArray = new Array();
    for (var i = 0; i < n; i++) {
        var number1 = prompt('Nhập vào n' + i);
        var n1 = Number.parseInt(number1);
        myArray[i] = n1;
    }

    var min = myArray[0];
    for (var i = 1; i < n; i++) { // gán i=0 vẫn chạy được nhưng dư, do i=0 ở my array
        if (myArray[i] < min) {
            min = myArray[i]
        };
    }
    console.log(min);
}

/*Bài tập 14:
Viết chương trình cho phép nhập vào n, sau đó nhập vào n phần tử số nguyên.
Sắp xếp các phần tử trong mảng theo thứ tự ngược lại.*/


/*Bài tập 15(*):
Viết chương trình cho phép người dùng nhập vào 5 mã số, lưu 5 mã số này vào một mảng.
Chương trình sẽ kiểm tra xem trong 5 mã số này có mã số nào sai định dạng hay không 
(định dạng là “00yLxxxx” với y là số nguyên từ 2 - 5, x là số nguyên từ 0-9).
Nếu có bất kỳ mã số nào sai định dạng thì chương trình in ra “Sai rồi” rồi kết thúc chương trình, 
ngược lại thì in ra “Đúng rồi”. (Sử dụng biểu thức chính quy để ràng buộc định dạng) */

/*
Bài tập 16:
Viết chương trình cho phép người dùng nhập vào một chuỗi, sau đó nhập vào một ký tự.
Kiểm tra xem ký tự đó có xuất hiện trong chuỗi hay không? Nếu có in ra “Có”, ngược lại in ra “Không”. */
function bai16() {
    var myString = prompt('Nhập một chuỗi bất kỳ');
    var character = prompt('Nhập một kí tự bất kỳ');
    if (myString.indexOf(character) != -1) {
        alert('Có');
    } else {
        alert('Không');
    }
}

/*
Bài tập 17:
Viết chương trình cho phép người dùng nhập vào một chuỗi, sau đó nhập vào một ký tự.
Kiểm tra xem ký tự nhập vào đó nằm ở vị trí thứ mấy trong chuỗi(nếu có, số đếm bắt đầu từ 0).
Nếu nó có xuất hiện trong chuỗi thì in ra vị trí của nó trong chuỗi, nếu không thì in ra “Không tồn tại trong chuỗi”. */
function bai17() {
    var myString = prompt('Nhập một chuỗi bất kỳ');
    var character = prompt('Nhập một kí tự bất kỳ');
    if (myString.indexOf(character) != -1) {
        var order = myString.indexOf(character);
        console.log(order);
    } else {
        alert('Không tồn tại trong chuỗi');
    }
}
/* 
Bài tập 18:
Viết chương trình cho phép nhập vào một chuỗi, kiểm tra xem chuỗi này có xuất hiện số hay không.
Nếu có tin ra “Có”, ngược lại, in ra “Không”. */
function bai18() {
    var myString = prompt('Nhập một chuỗi bất kỳ');
    var number = /\d+/;
    var checkNumber = number.test(myString);
    if (checkNumber) {
        alert('Có');
    } else {
        alert('Không');
    }
}
/* 
Bài tập 19:
Viết chương trình cho phép nhập vào một chuỗi
Kiểm tra xem chuỗi này ký tự “a” xuất hiện bao nhiêu lần
In ra số lần đó.*/
//Cách 2: for

function bai19() {
    var myString = prompt('Nhập một chuỗi bất kỳ');
    var n;
    if (
    n = myString.split('a').length -1) {
        alert('Ký tự \a\ xuất hiện'+" "+ n + " " + 'lần');
    } else 
        { alert(' Không có ký tự a xuất hiện trong chuỗi');  
    }
}


/*Bài tập 20*:
Viết chương trình cho phép người dùng nhập vào 1 chuỗi, kiểm tra chuỗi này có phù hợp với yêu cầu hay không.
Nếu có thì in ra “Duyệt!”, ngược lại in ra “Không duyệt”.
Yêu cầu về chuỗi là: Có độ dài không quá 20 ký tự, không được chứa ký tự khoảng trắng, bắt đầu bằng một ký tự chữ viết hoa (A - Z),
kết thúc bằng một số (0 - 9). (Sử dụng biểu thức chính quy để ràng buộc định dạng)*/

function bai20() {
    var myString = prompt('Nhập một chuỗi bất kỳ');
    var string = /^[A-Z]\S{0,18}[0-9]$/g;
    var checkString = string.test(myString);
    if (checkString) {
        alert('Duyệt');
    } else {
        alert('Không duyệt');
    }
}
