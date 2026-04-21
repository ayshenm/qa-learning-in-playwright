import { test, expect } from "@playwright/test";

test.describe("Get API Test", () => {

  test("GetBookingIds", async ({ request }) => {
    const res = await request.get("/booking");
    const body = await res.json();
    console.log(body);
    expect(res.status()).toBe(200);
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty("bookingid");
    // expect(body[0]).tohav("bookingid");
    expect(typeof body[28].bookingid).toBe('number');
  });

  test("GetBookingId", async ({ request }) => {
    const res = await request.get("/booking/20");
    const body = await res.json();
    console.log(body);
    expect(res.status()).toBe(200);
    expect(body.firstname).toBe("Josh");
    expect(body.lastname).toBe("Allen");
    expect(body.totalprice).toBe(111);
    expect(body.depositpaid).toBe(true);
    expect(body.bookingdates.checkin).toBe("2018-01-01");
    expect(body.bookingdates.checkout).toBe("2019-01-01");

  })

});
