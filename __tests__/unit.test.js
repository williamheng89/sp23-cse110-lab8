// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

/*
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
*/
test('Phone Number Validity', () => {
    expect(functions.isPhoneNumber('(559)832-1402')).toBe(true);
    expect(functions.isPhoneNumber('(559)253-1865')).toBe(true);
    expect(functions.isPhoneNumber('hello')).toBe(false);
    expect(functions.isPhoneNumber('1111111111')).toBe(false);
});

test('Email Validity', () => {
    expect(functions.isEmail('wheng@ucsd.edu')).toBe(true);
    expect(functions.isEmail('williamheng89@gmail.com')).toBe(true);
    expect(functions.isEmail('wheng')).toBe(false);
    expect(functions.isEmail('william')).toBe(false);
});

test('Password Strength', () => {
    expect(functions.isStrongPassword('hello5')).toBe(true);
    expect(functions.isStrongPassword('hello2')).toBe(true);
    expect(functions.isStrongPassword('hel')).toBe(false);
    expect(functions.isStrongPassword('123')).toBe(false);
});

test('Date Validity', () => {
    expect(functions.isDate('05/12/2003')).toBe(true);
    expect(functions.isDate('06/02/2000')).toBe(true);
    expect(functions.isDate('NO')).toBe(false);
    expect(functions.isDate('Juneteenth')).toBe(false);
});

test('Hex Validity', () => {
    expect(functions.isHexColor('#ffffff')).toBe(true);
    expect(functions.isHexColor('#f1f11f')).toBe(true);
    expect(functions.isHexColor('BLACK')).toBe(false);
    expect(functions.isHexColor('#')).toBe(false);
});
