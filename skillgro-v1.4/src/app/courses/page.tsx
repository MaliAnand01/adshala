import Course from "@/components/courses/course";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
   title: "AdShalaa | Best Digital Marketing Courses in Mumbai",
};
const page = () => {
   return (
      <Wrapper>
         <Course />
      </Wrapper>
   )
}

export default page