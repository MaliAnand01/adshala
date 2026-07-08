import CourseDetails from "@/components/courses/course-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "AdShalaa | Best Digital Marketing Courses in Mumbai",
};
const page = () => {
   return (
      <Wrapper>
         <CourseDetails />
      </Wrapper>
   )
}

export default page