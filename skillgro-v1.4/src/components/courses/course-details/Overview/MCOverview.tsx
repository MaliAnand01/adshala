import { CourseDataType } from "@/data/inner-data/InnerCourseData";

const MCOverview = ({ single_course }: { single_course?: CourseDataType }) => {
   if (!single_course || !single_course.courseOverview) return null;
   const { description, learningsIntro, learnings, closing } = single_course.courseOverview;

   return (
      <div className="courses__overview-wrap">
         <h3 className="title">Course Description</h3>
         <p>{description}</p>
         <h3 className="title">What you&apos;ll learn in this course?</h3>
         <p>{learningsIntro}</p>
         <ul className="about__info-list list-wrap">
            {learnings.map((learning, index) => (
               <li className="about__info-list-item" key={index}>
                  <i className="flaticon-angle-right"></i>
                  <p className="content">{learning}</p>
               </li>
            ))}
         </ul>
         <p className="last-info">{closing}</p>
      </div>
   )
}

export default MCOverview
