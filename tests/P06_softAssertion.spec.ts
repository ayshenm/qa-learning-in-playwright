import {test,expect} from "@playwright/test";


//test.descibe qelib yaradir icinde page yazilmir test qruplari yaradmaga imkan verir

test.describe("soft assertion test",()=>{
    test("DemoQa.com sort assertion test", async({page})=>{
        await page.goto("https://demoqa.com/");
        //soft assertion ile testin icinde birden cox assert yazilir ve butun assertler yoxlanilir, hard assertionda ise ilk assertde xeta olarsa diger assertler yoxlanmaz                     
        await expect.soft(page.getByText("Book Store Application")).toBeInViewport();
        await expect(page.getByAltText("Selenuim Online Training")).toBeInViewport();

         
    })



});