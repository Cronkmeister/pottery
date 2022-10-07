import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import PaymentForm from "../PaymentForm/PaymentForm";

const PUBLIC_KEY =
  "pk_test_51Lim4SHSPkDxEKZc16FrRxj7ZPlicPFE0xg4fEwjItg7kcw4Z8639u3pmbp04jYXaA7eUeOZ6AnytpkpZ00dAhGO00lSxlM11v";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
