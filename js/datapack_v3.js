
//Get locally configured Snippets (Lấy danh sách Snippet được cài đặt cục bộ)
function GetSnippetText() {
	var snippet = "\n\
snippet local Create variable (Tạo biến)\n\
	local ${1:val} = 0\n\
snippet local Create empty table (Tạo bảng rỗng)\n\
	local ${1:tab}= {} \n\
snippet function Create function (Tạo hàm)\n\
	function ${1:game}(obj) \n\
		${2:--Function body (Thân hàm)}\n\
	end\n\
snippet if Conditional statement (Câu lệnh điều kiện)\n\
	if ${1:true} then\n\
		${2:--Body if condition is true (Khối thực thi khi điều kiện đúng)}\n\
	end\n\
snippet if.elseConditional statement (Câu lệnh điều kiện)\n\
	if ${1:true} then\n\
		${2:--Body if condition is true (Khối thực thi khi điều kiện đúng)}\n\
	else\n\
		${3:--Body if condition is false (Khối thực thi khi điều kiện sai)}\n\
	end\n\
snippet for Loop statement (Câu lệnh vòng lặp)\n\
	for i = 0 ,${1:10} do\n\
		--Loop body (Thân vòng lặp)\n\
		print(i)\n\
	end\n\
snippet for pairsIterator statement (Câu lệnh iterator)\n\
	for k ,v in pairs(${1:tab}) do\n\
		--Loop body (Thân vòng lặp)\n\
		print(k,v)\n\
	end\n\
snippet while Loop statement (Câu lệnh vòng lặp)\n\
	${1:val} = 0\n\
	while ${2:val < 5} do\n\
		${3:--Loop until val is false (Lặp đến khi val sai)}\n\
		${4:val = val + 1}\n\
	end\n\
snippet repeat Loop statement (Câu lệnh vòng lặp)\n\
	${1:val} = 0\n\
	repeat\n\
		${2:--Loop until val is false (Lặp đến khi val sai)}\n\
		${3:val = val + 1}\n\
	until ${4:val > 5}\n\
snippet math.sinTrigonometric sine (Hàm lượng giác sin)\n\
	math.sin(${1:deg})\n\
snippet math.asinArc sine (Nghịch sin)\n\
	math.asin(${1:rad})\n\
snippet math.cosCosine (Cos)\n\
	math.cos(${1:deg})\n\
snippet math.acos反Cosine (Cos)\n\
	math.acos(${1:rad})\n\
snippet math.tanTangent (Tang)\n\
	math.tan(${1:deg})\n\
snippet math.atan反Tangent (Tang)\n\
	math.atan(${1:rad})\n\
snippet math.expGet e^x (Lấy e mũ x)\n\
	math.exp(${1:x})\n\
snippet math.logNatural logarithm of x (Logarit tự nhiên của x)\n\
	math.log(${1:x})\n\
snippet math.log10Log base 10 of x (Logarit cơ số 10 của x)\n\
	math.log(${1:x})\n\
snippet math.frexpSplit val into x*(2^y) form (Tách val thành dạng x*(2^y))\n\
	math.frexp(${1:val})\n\
snippet math.ldexpCalculate x*(2^y) (Tính x*(2^y))\n\
	math.ldexp(${1:x},y)\n\
snippet math.piPi (Số Pi)\n\
	math.pi\n\
snippet math.absAbsolute value (Giá trị tuyệt đối)\n\
	math.abs(${1:val})\n\
snippet math.powPower operation (Lũy thừa)\n\
	math.pow(${1:m},n)\n\
snippet math.sqrtSquare root (Căn bậc hai)\n\
	math.sqrt(${1:m})\n\
snippet math.modModulo (Lấy phần dư)\n\
	math.mod(${1:val1},val2)\n\
snippet math.modfGet integer and decimal parts (Lấy phần nguyên và thập phân)\n\
	math.modf(${1:float})\n\
snippet math.radDegrees to radians (Độ sang radian)\n\
	math.rad(${1:val})\n\
snippet math.degRadians to degrees (Radian sang độ)\n\
	math.deg(${1:val})\n\
snippet math.floorRound up (Làm tròn lên)\n\
	math.floor(${1:val})\n\
snippet math.ceilRound down (Làm tròn xuống)\n\
	math.ceil(${1:val})\n\
snippet math.maxGet max value (Lấy giá trị lớn nhất)\n\
	math.max(${1:str})\n\
snippet math.minGet min value (Lấy giá trị nhỏ nhất)\n\
	math.min(${1:str})\n\
snippet math.randomseedRandom seed (Hạt giống ngẫu nhiên)\n\
	math.randomseed(os.time())\n\
snippet math.randomRandom number (0-1) (Số ngẫu nhiên 0-1)\n\
	math.random()\n\
snippet math.randomRandom number (0-n) (Số ngẫu nhiên 0-n)\n\
	math.random(${1:n})\n\
snippet math.randomRandom number (m-n) (Số ngẫu nhiên m-n)\n\
	math.random(${1:m},n)\n\
snippet table.insertInsert at end (Chèn vào cuối)\n\
	table.insert(${1:tab}, ${2:val})\n\
snippet table.insertInsert at position n (Chèn vào vị trí n)\n\
	table.insert(${1:tab},${2:n},${3:val})\n\
snippet table.removeRemove last element (Xóa phần tử cuối)\n\
	table.remove(${1:tab})\n\
snippet table.removeRemove element at position n (Xóa phần tử tại vị trí n)\n\
	table.remove(${1:tab},n)\n\
snippet table.concatConcatenate string (Nối chuỗi)\n\
	table.concat(${1:tab})\n\
snippet table.concatConcat string with separator (Nối chuỗi với ký tự ngăn cách)\n\
	table.concat(${1:tab},',')\n\
snippet table.concatConcat string with index and separator (Nối chuỗi với chỉ mục và ký tự ngăn cách)\n\
	table.concat(${1:tab},',',m,n)\n\
snippet table.sortSort ascending ↑ (Sắp xếp tăng dần)\n\
	table.sort(${1:tab})\n\
snippet table.sortSort descending ↓ (Sắp xếp giảm dần)\n\
	table.sort(${1:tab}, function (a, b) if a > b then return true end end)  --Sort table elements z-a descending (Sắp xếp phần tử bảng z-a giảm dần)\n\
snippet OS library (Thư viện OS) clock - Get approximate CPU time (Lấy xấp xỉ thời gian CPU)\n\
	os.clock() --Return approximate CPU runtime (Trả về xấp xỉ thời gian chạy CPU)\n\
snippet OS library (Thư viện OS) time - Current time (Thời gian hiện tại)\n\
	os.time() --Return seconds since 1970.1.1 (Trả về giây từ 1970.1.1)\n\
snippet OS library (Thư viện OS) difftime - Return time difference (Trả về chênh lệch thời gian)\n\
	os.difftime(m,n) --Return time diff between m and n, use os.time() to get m,n (Trả về chênh lệch giữa m và n)\n\
snippet OS library (Thư viện OS) date - Time list (Danh sách thời gian)\n\
	os.date('*t') --Return current time as list (Trả về danh sách thời gian hiện tại)\n\
snippet OS library (Thư viện OS) date - String parameters (Tham số chuỗi ngày giờ)\n\
	--%a  Abbreviated weekday name (Tên viết tắt thứ trong tuần)Wed）\n\
	--%A  Full weekday name (Tên đầy đủ thứ trong tuần)（Wednesday）\n\
	--%b  Abbreviated month name (Tên viết tắt tháng)（Sep）\n\
	--%B  Full month name (Tên đầy đủ tháng)（September）\n\
	--%c  Date and time (Ngày và giờ)（09/16/98 23:48:10）\n\
	--%d  Day of month (Ngày trong tháng)[0 ~ 31]\n\
	--%H  Hour in 24h format (Giờ định dạng 24h)[00 ~ 23]\n\
	--%I  Hour in 12h format (Giờ định dạng 12h)[01 ~ 12]\n\
	--%j  Day of year (Ngày trong năm)[01 ~ 366]\n\
	--%M  Minutes (Phút)[00 ~ 59]\n\
	--%m  Month number (Số tháng)[01 ~ 12]\n\
	--%P  AM (Buổi sáng)(am) or (hoặc) PM (Buổi chiều)(pm)\n\
	--%S  Seconds (Giây)[00 ~ 59]\n\
	--%w  Day of week (Ngày trong tuần)[0 ~ 6 = Sunday (Chủ nhật) ~ Saturday (Thứ bảy)]\n\
	--%W　Week of year (Tuần trong năm)0 ~ 52\n\
	--%x  Date (Ngày)（09/16/98）\n\
	--%X  Time (Giờ)（23:48:10）\n\
	--%y  2-digit year (Năm 2 chữ số)[00 ~ 99]\n\
	--%Y  Full year (Năm đầy đủ)\n\
	--%%  Literal percent sign (Ký tự phần trăm)\n\
snippet string.len String length (Độ dài chuỗi)\n\
	string.len(${1:str}) --Return string (Trả về chuỗi)String length (Độ dài chuỗi)（no Chinese support (không hỗ trợ tiếng Trung)）\n\
snippet string.sub Substring (Cắt chuỗi)\n\
	string.sub(${1:str},m,n) --Return content from position m to n in str (Trả về nội dung từ vị trí m đến n)\n\
snippet string.rep Repeat (Lặp lại)\n\
	string.rep(${1:str},n) --Repeat (Lặp lại)ntimes (lần)str，and return result (và trả về kết quả)\n\
snippet string.lower Convert to lowercase (Chuyển thành chữ thường)\n\
	string.lower(${1:str}) --Convert uppercase to lowercase in str (Chuyển chữ hoa thành chữ thường)\n\
snippet string.upper Convert to uppercase (Chuyển thành chữ hoa)\n\
	string.upper(${1:str}) --Convert lowercase to uppercase in str (Chuyển chữ thường thành chữ hoa)\n\
snippet string.char Convert character (Chuyển đổi ký tự)\n\
	string.char(${1:ASCII}) --Convert ASCII code to character (Chuyển mã ASCII thành ký tự)\n\
snippet string.byte Convert to ASCII code (Chuyển thành mã ASCII)\n\
	string.byte(${1:str},n) --Return ASCII code of nth character in str (Trả về mã ASCII của ký tự thứ n)\n\
snippet string.reverse Reverse string (Đảo ngược chuỗi)\n\
	string.reverse(${1:str}) --Reverse string (Đảo ngược chuỗi)\n\
snippet string.format Format string (Định dạng chuỗi)\n\
	string.format(${1:val},str) --Format str according to val parameter (Định dạng str theo tham số val)\n\
snippet string.find String search (Tìm kiếm chuỗi)\n\
	string.find(${1:str},n,1) --Search if n exists in str and return position (Tìm n trong str và trả về vị trí)\n\
snippet string.gmatch String search (Tìm kiếm chuỗi)\n\
	string.gmatch(${1:str},st) --Iterator search for st in str, return st if found (Iterator tìm st trong str, trả về st nếu tìm thấy)\n\
snippet string.match String match (Khớp chuỗi)\n\
	string.match(${1:st1},st2) --Find only first match of st2 in st1 and return (Chỉ tìm lần khớp đầu tiên của st2 trong st1)\n\
snippet string.gsub String replace (Thay thế chuỗi)\n\
	string.gsub(${1:str},m,n,num) --Replace m with n in str, num times (Thay m bằng n trong str, num lần)\n\
snippet string library (Thư viện string) String match (Khớp chuỗi)escape codes (mã thoát)\n\
	--.(dot (dấu chấm)): Match any character (Khớp với bất kỳ ký tự nào)\n\
	--%a: Match any letter (Khớp với bất kỳ chữ cái nào)\n\
	--%c: Match any control character (Khớp với ký tự điều khiển)\n\
	--%d: Match any digit (Khớp với bất kỳ chữ số nào)\n\
	--%l: Match any lowercase letter (Khớp chữ thường)\n\
	--%p: Match any punctuation (Khớp dấu câu)\n\
	--%s: Match whitespace (Khớp khoảng trắng)\n\
	--%u: Match any uppercase letter (Khớp chữ hoa)\n\
	--%w: Match any letter or digit (Khớp chữ cái hoặc số)\n\
	--%x: Match any hex digit (Khớp số thập lục phân)\n\
	--%z: Match any character representing 0 (Khớp ký tự đại diện 0)\n\
	--%x(x is non-alphanumeric character (x là ký tự không phải chữ cái/số)): Match character x. Mainly for escaping special regex chars (Khớp ký tự x, dùng xử lý ký tự đặc biệt)(^$()%.[]*+-?)escape problem, e.g. %%%% matches %% (vấn đề thoát, ví dụ %%%% khớp với %%)\n\
	--[multiple character classes (nhiều lớp ký tự)]: Match any character class in []. E.g. (Khớp bất kỳ lớp ký tự trong [], ví dụ)[%w_]matches any letter/digit or underscore (_) (khớp chữ cái/số hoặc dấu gạch dưới)\n\
	--[^multiple character classes (nhiều lớp ký tự)]: Match any character class NOT in []. E.g. (Khớp lớp ký tự KHÔNG có trong [], ví dụ)[^%s]Match any non-whitespace character (Khớp ký tự không phải khoảng trắng)\n\
snippet string library (Thư viện string) String format escape codes (Mã thoát định dạng chuỗi)\n\
	--%s - Accept a string and format it by given params (Nhận chuỗi và định dạng theo tham số)\n\
	--%d - Accept a number and convert to signed integer (Nhận số và chuyển thành số nguyên có dấu)\n\
	--%f - Accept number, convert to float (6 decimal places by default, pad with 0) (Nhận số, chuyển thành số thực, mặc định 6 chữ số thập phân)\n\
	--%x - Accept number, convert to lowercase hex (Nhận số, chuyển sang hex chữ thường)\n\
	--%X - Accept number, convert to uppercase hex (Nhận số, chuyển sang hex chữ hoa)\n\
	--%c - Accept number, convert to ASCII character (Nhận số, chuyển thành ký tự ASCII)\n\
	--%d, %i - Accept a number and convert to signed integer (Nhận số và chuyển thành số nguyên có dấu)\n\
	--%o - Accept number, convert to octal (Nhận số, chuyển sang hệ bát phân)\n\
	--%u - Accept number, convert to unsigned integer (Nhận số, chuyển thành số nguyên không dấu)\n\
	--%x - Accept number, convert to hex using lowercase (Nhận số, chuyển sang hex dùng chữ thường)\n\
	--%X - Accept number, convert to hex using uppercase (Nhận số, chuyển sang hex dùng chữ hoa)\n\
	--%e - Accept number, convert to scientific notation using lowercase e (Nhận số, chuyển sang ký hiệu khoa học, chữ e thường)\n\
	--%E - Accept number, convert to scientific notation using uppercase E (Nhận số, chuyển sang ký hiệu khoa học, chữ E hoa)\n\
	--%f - Accept number, convert to float format (Nhận số, chuyển thành dạng số thực)\n\
	--%g(%G) - Accept number, use shorter of %%e(%%E/%%G) or %%f format (Nhận số, dùng định dạng ngắn hơn giữa %%e và %%f)\n\
	--%q - Accept string, convert to format safely readable by Lua compiler (Nhận chuỗi, chuyển sang định dạng Lua đọc được an toàn)\n\
	--%s - Accept a string and format it by given params (Nhận chuỗi và định dạng theo tham số)\n\
	";
	return snippet;
}

//Get locally configured Completer (Lấy danh sách Completer được cài đặt cục bộ)
function GetServiceFuncs() {
	var jsonObj = [
	]
	return jsonObj
}

function GetGlobalVars() {
	var jsonObj = [
	]
	return jsonObj
}