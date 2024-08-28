import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("testgetFullYear", function() {
    it("should return the correct year", function() {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
    });
});

describe("testgetFooter", function() {
    it("should return the correct footer copy", function() {
    expect(getFooterCopy(true)).toBe("Hoberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
    });
});

describe("testgetLastestNotification", function() {
    it('should return Urgent requirement', function() {
    const notifications = '<strong>Urgent requirement</strong> - complete by EOD';
    expect(notifications).toBe(getLatestNotification());
    });
});