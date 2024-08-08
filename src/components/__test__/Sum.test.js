import { Sum } from "../../Sum"

test("Sum of two numbers",()=>{
    const result=Sum(6,5);
    //Assertion
    expect(result).toBe(11);

})