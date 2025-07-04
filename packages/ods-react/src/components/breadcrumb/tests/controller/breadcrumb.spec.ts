import { isItemCollapsed } from '../../src/controller/breadcrumb';

describe('Breadcrumb controller', () => {
  describe('isItemCollapsed', () => {
    it('should return false if item should not be collapsed', () => {
      expect(isItemCollapsed(0, 5, 1, 1)).toBe(false);
      expect(isItemCollapsed(4, 5, 1, 1)).toBe(false);
      expect(isItemCollapsed(0, 5, 2, 1)).toBe(false);
      expect(isItemCollapsed(1, 5, 2, 1)).toBe(false);
      expect(isItemCollapsed(3, 5, 1, 2)).toBe(false);
      expect(isItemCollapsed(4, 5, 1, 2)).toBe(false);
    });

    it('should return true if item should be collapsed', () => {
      expect(isItemCollapsed(1, 5, 1, 1)).toBe(true);
      expect(isItemCollapsed(2, 5, 1, 1)).toBe(true);
      expect(isItemCollapsed(3, 5, 1, 1)).toBe(true);
      expect(isItemCollapsed(2, 5, 2, 1)).toBe(true);
      expect(isItemCollapsed(3, 5, 2, 1)).toBe(true);
      expect(isItemCollapsed(2, 5, 1, 2)).toBe(true);
    });
  });
});
