import { test, expect } from "@playwright/test";
import { createBookingBody } from "../utils/helper";

let bookingId: any;
test.beforeAll(async ({ request }) => {
  const postBody = createBookingBody();
  const res = await request.post("/booking", {
    data: postBody,
  });
  const body = await res.json();
  bookingId = body.bookingid;
  });

  const putBody = {
    firstname: "ggg",
    lastname: "Doeee",
    totalprice: 1256,
    depositpaid: false,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Extra pillows please",
  };


  test("Put api Test",async({request})=>{
    const putResponse = await request.put(`/booking/${bookingId}`,{
        data:putBody,
        headers:{
            Authorization:"Basic YWRtaW46cGFzc3dvcmQxMjM="
        }
    })
    const body = await putResponse.json();
    expect(body.firstname).toBe(putBody.firstname)

  })

