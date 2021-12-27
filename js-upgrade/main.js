const str = `
010-1234-5678
ghl12078@gmail.com
https://naver.com
The lazy dog jumps over the lazy fox
abbcccdddd
`;

const regExp = /the/gi;

console.log(str.match(regExp));
