'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import BtnArrow from '@/svg/BtnArrow'

type FormData = {
  user_name: string;
  user_email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({ mode: "onChange" })

  const [status, setStatus] = useState<{
    loading: boolean;
    success: boolean | null;
    message: string;
  }>({
    loading: false,
    success: null,
    message: '',
  })

  const onSubmit = async (data: FormData) => {
    setStatus({ loading: true, success: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          message: 'Message sent successfully!',
        })
        reset()
      } else {
        setStatus({
          loading: false,
          success: false,
          message: result.error || 'Something went wrong.',
        })
      }
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        message: 'Network error. Please try again later.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form">
      <div className="row">
        <div className="col-md-4">
          <div className="form-grp">
            <input
              type="text"
              placeholder="Name *"
              {...register('user_name', {
                required: 'Name is required',
                validate: (value) => {
                  if (!value) return undefined;
                  if (value.trim().length < 2) return 'Name must be at least 2 characters';
                  if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name should contain only alphabets';
                  return undefined;
                }
              })}
            />
            {errors.user_name && <p className="text-danger mt-1 mb-0" style={{ fontSize: "12px", textAlign: "left" }}>{errors.user_name.message}</p>}
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-grp">
            <input
              type="email"
              placeholder="E-mail *"
              {...register('user_email', {
                required: 'Email is required',
                validate: (value) => {
                  if (!value) return undefined;
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) return 'Invalid email address';
                  return undefined;
                }
              })}
            />
            {errors.user_email && <p className="text-danger mt-1 mb-0" style={{ fontSize: "12px", textAlign: "left" }}>{errors.user_email.message}</p>}
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-grp">
            <input
              type="tel"
              placeholder="Phone *"
              {...register('phone', {
                required: 'Phone is required',
                validate: (value) => {
                  if (!value) return undefined;
                  if (!/^[0-9]{10}$/.test(value)) return 'Phone number must be exactly 10 digits';
                  return undefined;
                }
              })}
            />
            {errors.phone && <p className="text-danger mt-1 mb-0" style={{ fontSize: "12px", textAlign: "left" }}>{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      <div className="form-grp">
        <textarea
          placeholder="Comment"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <p className="text-danger mt-1 mb-0" style={{ fontSize: "12px", textAlign: "left" }}>{errors.message.message}</p>}
      </div>

      <button type="submit" className="btn btn-two arrow-btn" disabled={status.loading}>
        {status.loading ? 'Sending...' : 'Submit Now'} <BtnArrow />
      </button>

      {status.success === true && (
        <p className="text-success mt-2">{status.message}</p>
      )}
      {status.success === false && (
        <p className="text-danger mt-2">{status.message}</p>
      )}
    </form>
  )
}