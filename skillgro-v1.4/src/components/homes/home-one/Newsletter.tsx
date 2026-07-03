"use client"
import Image from "next/image"
import { useState } from "react";
import { toast } from "react-toastify";

import newsletter_img1 from "@/assets/img/others/newsletter_img.png"
import newsletter_img2 from "@/assets/img/others/newsletter_shape01.png"
import newsletter_img3 from "@/assets/img/others/newsletter_shape02.png"
import newsletter_img4 from "@/assets/img/others/newsletter_shape03.png"

const Newsletter = () => {
   const [email, setEmail] = useState("");
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) {
         toast.error("Please enter a valid email address");
         return;
      }

      setIsSubmitting(true);
      try {
         const response = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
         });

         const data = await response.json();

         if (response.ok) {
            toast.success("Successfully subscribed to the newsletter!");
            setEmail("");
         } else {
            toast.error(data.error || "Failed to subscribe. Please try again.");
         }
      } catch (error) {
         toast.error("An unexpected error occurred.");
         console.error("Newsletter submission error:", error);
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="newsletter__area">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-4">
                  <div className="newsletter__img-wrap">
                     <Image src={newsletter_img1} alt="img" />
                     <Image src={newsletter_img2} alt="img" />
                     <Image src={newsletter_img3} alt="img" className="alltuchtopdown" />
                  </div>
               </div>
               <div className="col-lg-8">
                  <div className="newsletter__content">
                     <h2 className="title">Want to stay <span>informed</span> about <br /> new <span>courses & study?</span></h2>
                     <div className="newsletter__form">
                        <form onSubmit={handleSubmit}>
                           <input
                              type="email"
                              placeholder="Type your e-mail"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              disabled={isSubmitting}
                           />
                           <button type="submit" className="btn" disabled={isSubmitting}>
                              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="newsletter__shape">
            <Image src={newsletter_img4} alt="img" />
         </div>
      </section>
   )
}

export default Newsletter