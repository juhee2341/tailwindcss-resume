import { EducationSection } from "./EducationSection"
import { EmploymentHistorySection } from "./EmploymentHistorySection"
import { InfoSection } from "./InfoSection"
import { NameSection } from "./NameSection"
import { Photo } from "./Photo"
import { ProfileSection } from "./ProfileSection"
import { SkillSection } from "./SkillSection"

export const Resume = () => {
  return (
    <div className="p-32 bg-blue-200">
      <div className="p-12 bg-white">
        <div className="grid grid-cols-3">
          <div>
            <Photo />
            <InfoSection />
            <SkillSection />
          </div>

          <div className="col-span-2">
            <NameSection />
            <ProfileSection />
            <EmploymentHistorySection />
            <EducationSection />
          </div>
        </div>
      </div>
    </div>
  )

}

export default Resume