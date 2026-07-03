"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import BtnArrow from "@/svg/BtnArrow"

type FormData = {
  username: string;
  userphone: string;
  useremail: string;
}

interface BrochurePopupProps {
  isOpen: boolean
  onClose: () => void
}

const BrochurePopupInner = ({ onClose }: { onClose: () => void }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    mode: "onChange",
    defaultValues: { username: '', userphone: '', useremail: '' }
  })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async (data: FormData) => {
    console.log("Brochure Data", data)
    try {
      const response = await fetch('/api/brochure', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        console.log("brochure data saved")
      }
    } catch (err) {
      console.log(err)
    }
    // Trigger PDF download
    const link = document.createElement("a")
    link.href = "/Adshalaa-Brochure.pdf"
    link.download = "Adshalaa-Brochure.pdf"
    link.click()
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    // reset after close animation
    setTimeout(() => { reset(); setSubmitted(false) }, 300)
  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={handleClose}
        style={{
          position: "fixed", inset: 0,
          background: "rgba(0,0,0,0.55)",
          zIndex: 9998, cursor: "pointer"
        }}
      />

      {/* Modal */}
      <div style={{
        position: "fixed", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        background: "#fff", borderRadius: "16px",
        padding: "40px 36px", width: "90%", maxWidth: "460px",
        zIndex: 9999, boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
      }}>

        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "none", border: "none", fontSize: "20px",
            cursor: "pointer", color: "#999", lineHeight: 1
          }}
        >
          ✕
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: "48px", marginBottom: "16px" }}>📄</div>
            <h3 style={{ marginBottom: "8px", color: "#161439" }}>
              Your download has started!
            </h3>
            <p style={{ color: "#666", marginBottom: "24px" }}>
              Didn't start? <a href="/Adshalaa-Brochure.pdf" download="Adshala-Brochure.pdf" style={{ color: "#4263eb" }}>Click here</a>
            </p>
            <button onClick={handleClose} className="btn btn-two arrow-btn">
              Close <BtnArrow />
            </button>
          </div>
        ) : (
          <>
            <h3 style={{ marginBottom: "6px", color: "#161439", fontSize: "22px" }}>
              Download Our Brochure
            </h3>
            <p style={{ color: "#666", marginBottom: "28px", fontSize: "14px" }}>
              Get detailed course info, fees &amp; placement stats — free.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-grp" style={{ marginBottom: "16px" }}>
                <input
                  type="text"
                  placeholder="Your Full Name *"
                  {...register('username', {
                    required: 'Name is required',
                    validate: (value) => {
                      if (!value) return undefined;
                      if (value.trim().length < 2) return 'Name must be at least 2 characters';
                      if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should contain only alphabets';
                      return undefined;
                    }
                  })}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, '');
                  }}
                  style={{ width: "100%", padding: "7px", borderRadius: "16px", border: "0.5px solid black" }}
                />
                {errors.username && <p className="text-danger mt-1 mb-0" style={{ fontSize: "12px", textAlign: "left" }}>{errors.username.message}</p>}
              </div>
              <div className="form-grp" style={{ marginBottom: "16px" }}>
                <input
                  type="tel"
                  placeholder="Your Phone Number *"
                  maxLength={10}
                  {...register('userphone', {
                    required: 'Phone is required',
                    validate: (value) => {
                      if (!value) return undefined;
                      if (!/^[0-9]{10}$/.test(value)) return 'Phone number must be exactly 10 digits';
                      return undefined;
                    }
                  })}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                  style={{ width: "100%", padding: "7px", borderRadius: "16px", border: "0.5px solid black" }}
                />
                {errors.userphone && <p className="text-danger mt-1 mb-0" style={{ fontSize: "12px", textAlign: "left" }}>{errors.userphone.message}</p>}
              </div>
              <div className="form-grp" style={{ marginBottom: "24px" }}>
                <input
                  type="email"
                  placeholder="Your Email Address *"
                  {...register('useremail', {
                    required: 'Email is required',
                    validate: (value) => {
                      if (!value) return undefined;
                      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return 'Invalid email address';
                      return undefined;
                    }
                  })}
                  style={{ width: "100%", padding: "7px", borderRadius: "16px", border: "0.5px solid black" }}
                />
                {errors.useremail && <p className="text-danger mt-1 mb-0" style={{ fontSize: "12px", textAlign: "left" }}>{errors.useremail.message}</p>}
              </div>
              <button
                type="submit"
                className="btn btn-two arrow-btn"
                style={{ width: "100%" }}
              >
                Download Brochure <BtnArrow />
              </button>
            </form>
          </>
        )}
      </div>
    </>
  )
}

const BrochurePopup = ({ isOpen, onClose }: BrochurePopupProps) => {
  if (!isOpen) return null;
  return <BrochurePopupInner onClose={onClose} />;
}

export default BrochurePopup