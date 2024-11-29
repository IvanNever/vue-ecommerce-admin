import { expect, describe, it } from 'vitest';
import { Entity } from '@/common/domain/Entity';

class Test1 extends Entity {
  constructor(id: number) {
    super(id);
  }
}

class Test2 extends Entity {
  constructor(id: number) {
    super(id);
  }
}

describe('Entity', () => {
  it('should be equal', () => {
    const test1 = new Test1(5);
    const test2 = new Test1(5);
    expect(test1.equals(test2)).toBeTruthy();
  });

  it('should be not equal by value', () => {
    const test1 = new Test1(5);
    const test2 = new Test1(6);
    expect(test1.equals(test2)).toBeFalsy();
  });

  it('should be not equal by type', () => {
    const test1 = new Test1(5);
    const test2 = new Test2(5);
    expect(test1.equals(test2)).toBeFalsy();
  });

  it('should be not equal by null', () => {
    const test1 = new Test1(5);
    expect(test1.equals(null)).toBeFalsy();
  });
});
