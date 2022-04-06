import React from "react";

const PopunderCheckbox = () => {
  return (
    <>
      <input id="search_hotels" type="checkbox" data-provider="BookingCom" />
      <label id="label_search_hotels" htmlFor="search_hotels">
        Search accommodation with Booking.com
      </label>
    </>
  );
};

export default PopunderCheckbox;
