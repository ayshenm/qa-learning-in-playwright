import { randFirstName, randLastName } from "@ngneat/falso";

export function createBookingBody() {
  const bookingBody = {
    firstname: randFirstName(),
    lastname: randLastName(),
    totalprice: "1000",
    depositpaid: true,
    bookingdates: {
      checkin: "2026-04-19",
      checkout: "2026-04-29",
    },
    additionalneeds: "Breakfast",
  };
  return bookingBody;
}
