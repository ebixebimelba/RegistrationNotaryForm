export default function Buttons(props: ButtonsProps) {
  return (
    <>
      <div
        className={`absolute text-center font-medium font-['Poppins'] transition-all ${
          props.type === "DISABLE_TYPE"
            ? "h-12 w-[506px] top-[689px] left-[calc(50%_-_253px_+_300px)] text-[rgba(179,182,197,1)]"
            : ""
        } ${
          props.type === "BLUE_TYPE"
            ? "w-24 h-8 top-8 right-10 text-[rgba(0,158,247,1)]"
            : ""
        }`}
      >
        <div
          className={`inset-0 absolute rounded transition-all ${
            props.type === "DISABLE_TYPE" ? "bg-[rgba(228,230,239,1)]" : ""
          } ${props.type === "BLUE_TYPE" ? "bg-white" : ""}`}
         />
        <p
          className={`inset-x-2 h-6 absolute text-sm inline m-0 top-[calc(50%_-_12px_+_0px)] leading-[normal] transition-all ${
            props.type === "DISABLE_TYPE" ? "w-[490px]" : ""
          } ${props.type === "BLUE_TYPE" ? "w-20" : ""}`}
        >
          {props.text}
        </p>
      </div>
    </>
  );
}

Buttons.defaultProps = {
  type: "DISABLE_TYPE",
  text: "Register",
};

interface ButtonsProps {
  type: "DISABLE_TYPE" | "BLUE_TYPE";
  text: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
