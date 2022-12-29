import { Section } from './Section';
import { SectionTitle } from './SectionTitle';

export const InfoSection = () => {
  return (
    <Section>
      <SectionTitle>
        Info
      </SectionTitle>

      <div className="py-2">
        <div className="font-bold">
          Address
        </div>
        <div className="text-gray-500">
          <div className="py-2">20 Kimlin Court,</div>
          <div className="py-2">Poughkeepsie, 12603, United States</div>
        </div>
      </div>

      <div className="py-2">
        <div className="font-bold">
          Phone
        </div>
        <div className="text-gray-500">
          <div className="py-2">(000) 000 - 000</div>
        </div>
      </div>

      <div className="py-2">
        <div className="font-bold">
          Email
        </div>
        <div className="text-gray-500">
          <div className="py-2">adwad@gmail.com</div>
        </div>
      </div>
    </Section>
  )
}