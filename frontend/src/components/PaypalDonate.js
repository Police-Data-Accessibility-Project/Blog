import React from "react"
const PaypalDonate = () => {
  var hostedButtonIdVal = process.env.GATSBY_PAYPAL_HOSTED_BUTTON_ID || 'TLZCVC8DPL2XY';
  return (
    <form action="https://www.paypal.com/donate" method="post" target="_blank">
      <input type="hidden" name="hosted_button_id" value={hostedButtonIdVal} />
      <button
        type="submit"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
        border="0"
        name="submit"
        value="Donate"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
        className="btn bg-accent py-1 px-2 font-bold"
        style={{color: "#FFF"}}
      >
        Donate
      </button>
      {/* <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      /> */}
    </form>
  )
}

export default PaypalDonate
