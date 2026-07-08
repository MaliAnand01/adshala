import React from "react";
import Image from "next/image";
import { CourseDataType } from "@/data/inner-data/InnerCourseData";

const AdvanceDMCertificate = ({ single_course }: { single_course?: CourseDataType }) => {
  const certificates = single_course?.certificateImages;

  if (!certificates || certificates.length === 0) {
    return null; // Or return a placeholder if desired
  }

  return (
    <section className="py-5">
      <div className="container">
        <div className="row g-4">
          {certificates.map((certificate, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div
                className="card h-100 shadow-sm border-0"
                style={{ borderRadius: "12px" }}
              >
                <div className="card-body">
                  <h5 className="card-title text-center mb-4">
                    {certificate.title}
                  </h5>

                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    className="img-fluid rounded"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvanceDMCertificate;