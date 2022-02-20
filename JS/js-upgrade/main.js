const str = `
010-1234-5678.
theghl12078@gmail.com.
https://naver.com
The lazy dog jumps over the lazy fox
abbcccdddd.
http_
`;

const regExp = /.{1,}(?=@)/g;

console.log(str.match(regExp));
