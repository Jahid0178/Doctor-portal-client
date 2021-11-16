import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JvnznGZoAvyjisOLSVWbMHce3gikfa4jn9KOgSaYXKWSIQp5JhGzKmNJ7ZaWnFPIBkAKURIRg7I9pFWUBoCTRAP00srJK406n"
);

const Payment = () => {
  const { appointmentId } = useParams();
  const [appointment, setAppointment] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);
  return (
    <div>
      <h2>
        Please Pay For: {appointment?.patientName} for{" "}
        {appointment?.serviceName}
      </h2>
      <h4>Pay: ${appointment?.price}</h4>
      {appointment?.price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm appointment={appointment}></CheckoutForm>
        </Elements>
      )}
    </div>
  );
};

export default Payment;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-------------------
5. Create Payment method
6. server create payment intent api
7. load client secret
8. confirmCard payment
9. handle user error
*/
