import sum from "../src/sum.js";
const expect = require("expect"); // 无法使用node核心模块assert

describe("测试sum模块", function() {
    it("1+1=2?", function(){
        expect(sum(1,1)).toBe(2);
    })
})