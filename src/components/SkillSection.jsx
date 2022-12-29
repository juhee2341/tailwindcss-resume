import { Section } from "./Section"
import { SectionTitle } from "./SectionTitle"

export const SkillSection = () => {
  return (
    <Section>
      <SectionTitle>
        Skills
      </SectionTitle>

      <div className="py-2">
        <div className="font-bold">
          Patient Education
        </div>
        <div>
          <div>● ● ● ● ●</div>
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold">
          Physical Evaluations
        </div>
        <div>
          <div>● ● ● ● ●</div>
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold">
          Treatment Plans
        </div>
        <div>
          <div>● ● ● ● ●</div>
        </div>
      </div>
      <div className="py-2">
        <div className="font-bold">
          Excellent Communication
        </div>
        <div>
          <div>● ● ● ● ●</div>
        </div>
      </div>
    </Section>

  )
}