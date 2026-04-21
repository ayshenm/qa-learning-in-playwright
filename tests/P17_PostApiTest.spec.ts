import { test, expect } from "@playwright/test";
import { createBookingBody } from "../utils/helper";

test.describe("Post API Test", () => {
  test("post api test 1", async ({ request }) => {
    const res = await request.post("/booking", {
      data: {
        firstname: "Ayshen",
        lastname: "Mirzeyeva",
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: "2026-04-19",
          checkout: "2026-04-29",
        },
        additionalneeds: "Breakfast",
      },
    });
    const body = await res.json();
    console.log(body);

    expect(res.status()).toBe(200);
    expect(await body.booking.firstname).toBe("Ayshen");
    expect(await body.booking.lastname).toBe("Mirzeyeva");
    expect(await body.booking.totalprice).toBe(150);
  });


  //classla yaratdigimiz helper.ts file bax

  test("Post api test and funtion",async({request})=>{
    const bookingBody = createBookingBody();
    const firstName = bookingBody.firstname;
    const lastName = bookingBody.lastname;
console.log("BOOKING BODY:", bookingBody);
    const res = await request.post("/booking",{
        data:bookingBody
    });
    const body = await res.json();
    console.log(body);
    expect(res.status()).toBe(200);
    expect(body.booking.firstname).toBe(firstName)
    expect(body.booking.lastname).toBe(lastName)
    expect(body.booking.totalprice).toBe(1000);
    expect(body.booking.depositpaid).toBe(bookingBody.depositpaid);
    expect(body.booking.bookingdates.checkin).toBe("2026-04-19");
    expect(body.booking.bookingdates.checkout).toBe("2026-04-29");


  });
});
