import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";

const Payment = ({form}) => {
  const username = useSelector((state) => state.auth.name);
  const useremail = useSelector((state) => state.auth.email);
  const cartitems = useSelector((state) => state.cart.items);
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if(form.username==="" || form.address==="" )
    {
      toast.error("Please fill the details")
      return
    }
    setLoading(true);
    try {
      const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
      const response = await fetch(`${process.env.REACT_APP_URL}stripe/create-checkout-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include', 
        body: JSON.stringify({
          cartitems,
          username,
          useremail,
        }),
      });

      if (response.ok) {
        const session = await response.json();
        const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (result.error) {
          toast.error(result.error.message);
        }
      } else {
        toast.error('Payment initiation failed.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error('Error during checkout:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Place your order'}
      </Button>
    </>
  );
};

export default Payment;
