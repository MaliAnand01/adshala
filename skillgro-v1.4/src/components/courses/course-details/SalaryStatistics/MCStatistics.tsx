import React from "react";
import Image from "next/image";
import { CourseDataType } from "@/data/inner-data/InnerCourseData";

function MCStatistics({ single_course }: { single_course?: CourseDataType }) {
  const statsImage = single_course?.statisticsImage;

  if (!statsImage) {
    return null;
  }

  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          Salary Growth
        </h2>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <Image
              src={statsImage}
              alt="Salary Statistics"
              className="img-fluid rounded shadow"
              style={{
                width: "100%",
                height: "auto",
              }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MCStatistics;