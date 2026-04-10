import { test, expect } from "@playwright/test";

test("generic assertion test", async ({  }) => {
  let say1 = 5;
  let say2 = 10;
//primitive tipler icin toBe() ve not.toBe() kullanilir
  expect(say1).not.toBe(say2);

  //komplek data tiplerde toEqual() ve not.toEqual() kullanilir

  let str1 = "string";
  let str2 = "string";
  expect(str1).toBe(str2);

  let say3 = 0.1;
  let say4 = 0.2;
  //binary tiplerdeki degerler tam olarak birbirine esit olmayabilir, bu nedenle toBe() kullanmak yerine toBeCloseTo() kullanilir
  //expect(say3 + say4).toBeCloseTo(0.3, 10);
  

  //ondalikli sayilarda tam olarak birbirine esit olmayabilir, bu nedenle toBe() kullanmak yerine toBeCloseTo() kullanilir
  expect(say3 + say4).toBeCloseTo(0.3);


  const obj1 = { name: "Ayshen", age: 30 };
  const obj2 = { name: "Ayshen", age: 70 };

//obj1 ve obj2 ayni degerlere sahip olsa da, farkli referanslara sahip olduklari icin toBe() kullanmak yerine toEqual() kullanilir
  expect(obj1).not.toEqual(obj2);
  //icinde name propertysi olan objelerin name propertysinin degerlerinin birbirine esit olup olmadigini yoxlamaq ucun toBe() kullanilir
  expect(obj1.name).toBe(obj2.name);

  let str3 = "Hello s World";
//str3un icinde "lo" textinin olup olmadigini yoxlamaq ucun toContain() ve not.toContain() kullanilir
  expect(str3).toContain('lo');

  const arr=[1,2,3,4,5];
  expect(arr).toContain(4)


  const arr2=[{name:"Ayshen"}, {name:"Ayshen"}];
  
  //expect(arr2).toContain({name:"Ayshen"});error verir cunku arr2deki objeler ile verilen obje farkli referanslara sahip olduklari icin toContain() kullanmak yerine toContainEqual() kullanilir
  
  expect(arr2).toContainEqual({name:"Ayshen"});
});



test("generic assertion test 2", async({page}) =>{
    await page.goto("https://www.google.com/");

    await page.locator("#APjFqb").fill("nutella");
    // await page.locator("//*[@name='btnK']").nth(1).click();
})
