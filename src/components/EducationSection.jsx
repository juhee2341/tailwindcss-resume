import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle"

export const EducationSection = () => {
  return (
    <Section>
      <SectionTitle>
        Education
      </SectionTitle>

      <div>
        <div className="text-xl">
          Physical Theraoist, Care Mount Medical Center
        </div>
        <div className="flex">
          <div>
            Jan 2013 ㅡ Aug 2019
          </div>
          <div className="pl-6 text-gray-500">
            I. Poughkeepsie
          </div>
        </div>
        <div>
          <ul className="list-disc pl-10 text-sm text-gray-500 leading-6 py-4">
            <li>Graduated at the top of my class.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}