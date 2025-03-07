import { EducationItem, educationItems } from "@/api";

interface EducationProps {
  items?: EducationItem[];
}

export const Education = ({ items = educationItems }: EducationProps) => {
  const renderEducationItem = (item: EducationItem, index: number) => (
    <div
      key={index}
      className="pl-5 pb-5 mt-[-8px] border-l-2 border-primary-dark relative last:pb-0"
    >
      <div className="absolute w-4 h-4 rounded-full left-[-9px] top-0 bg-white border-2 border-primary-dark"></div>

      {item.title && (
        <h4 className="leading-[18px] text-lg font-semibold uppercase font-['Poppins',sans-serif] text-heading mb-2.5">
          {item.title}
        </h4>
      )}

      <h5 className="text-base bg-secondary py-1.5 px-4 inline-block font-semibold mb-2.5">
        {item.period}
      </h5>

      {item.institution && (
        <p>
          <em>{item.institution}</em>
        </p>
      )}

      {item.details && item.details.map((detail, i) => <p key={i}>{detail}</p>)}

      {item.listItems && (
        <ul className="pl-5">
          {item.listItems.map((listItem, i) => (
            <li key={i} className="pb-2.5 list-disc">
              {listItem}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <>
      <h3 className="text-2xl font-bold mt-5 mb-5 text-heading">Education</h3>
      {items.map(renderEducationItem)}
    </>
  );
};
