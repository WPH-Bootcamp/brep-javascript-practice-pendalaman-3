import CourseCard from '@/src/components/course/CourseCard';
import SearchCourse from '@/src/components/course/SearchCourse';

import { getCourses } from '@/src/lib/courses';

export default async function CoursesPage() {
  const courses = await getCourses();
  return (
    <div>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}

      <SearchCourse />
    </div>
  );
}
