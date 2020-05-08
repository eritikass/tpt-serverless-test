import {
	add,
	substract,
	multiply,
	divide,
	greaterThan,
	greaterThanOrEqual,
	equal,
	lessThanOrEqual,
	lessThan,
} from '../src/components/Equation';

// Add tests
test('add | 2 + 4 should be 6', () => {
	const value = add(2, 4);
	expect(value).toBe(6);
});
test('add | 3 + 4 should not be 12', () => {
	const value = add(3, 4);
	expect(value).not.toBe(12);
});

// Substract tests
test('substract | 2 - 4 should be -2', () => {
	const value = substract(2, 4);
	expect(value).toBe(-2);
});
test('substract | 8 - 4 should be 4', () => {
	const value = substract(8, 4);
	expect(value).toBe(4);
});
test('substract | 8 - 4 should not be 12', () => {
	const value = substract(8, 4);
	expect(value).not.toBe(12);
});

// Multiply tests
test('multiply | 2 * 6 is 12', () => {
	const value = multiply(2, 6);
	expect(value).toBe(12);
});
test('multiply | 5 * 5 should not be 12', () => {
	const value = multiply(5, 5);
	expect(value).not.toBe(12);
});

// Divide tests
test('divide | 15 / 5 is 3', () => {
	const value = divide(15, 5);
	expect(value).toBe(3);
});
test('divide | 12 / 4 should not be 22', () => {
	const value = divide(12, 4);
	expect(value).not.toBe(22);
});

// Greater Than tests
test('greaterThan | 126 should be greater than 12', () => {
	const value = greaterThan(126, 12);
	expect(value).toBe('true');
});

test('greaterThan | 12 should not be greater than 126', () => {
	const value = greaterThan(12, 126);
	expect(value).toBe('false');
});

// Greater Than Or Equal tests
test('greaterThanOrEqual | 126 should be greater than 12', () => {
	const value = greaterThanOrEqual(126, 12);
	expect(value).toBe('true');
});
test('greaterThanOrEqual | 12 should be equal to 12', () => {
	const value = greaterThanOrEqual(12, 12);
	expect(value).toBe('true');
});
test('greaterThanOrEqual | 12 should not be greater than 126', () => {
	const value = greaterThanOrEqual(12, 126);
	expect(value).toBe('false');
});

// Equal tests
test('equal | 2 should be equal to 2', () => {
	const value = equal(2, 2);
	expect(value).toBe('true');
});
test('equal | 2 should not be equal to 12', () => {
	const value = equal(2, 12);
	expect(value).toBe('false');
});

// Less Than Or Equal tests
test('lessThanOrEqual | 5 should be less than 12', () => {
	const value = lessThanOrEqual(5, 12);
	expect(value).toBe('true');
});
test('lessThanOrEqual | 12 should be equal to 12', () => {
	const value = lessThanOrEqual(12, 12);
	expect(value).toBe('true');
});

test('lessThanOrEqual | 126 should not be less than 12', () => {
	const value = lessThanOrEqual(126, 12);
	expect(value).toBe('false');
});

// Less Than tests
test('lessThan | 5 should be less than 12', () => {
	const value = lessThan(5, 12);
	expect(value).toBe('true');
});

test('lessThan | 126 should not be less than 12', () => {
	const value = lessThan(126, 12);
	expect(value).toBe('false');
});
