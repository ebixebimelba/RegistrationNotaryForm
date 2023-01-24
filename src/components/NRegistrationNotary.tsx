import Rectangle1635 from "assets/Rectangle1635";
import Footer from "components/Footer";
import Layer3 from "assets/Layer3";
import Buttons from "components/Buttons";
import TitleField from "components/TitleField";
import ComponentCheckbox from "components/ComponentCheckbox";
import SelectTitleField from "components/SelectTitleField";

export default function NRegistrationNotary(props: NRegistrationNotaryProps) {
  return (
    <div
      className={`relative bg-white w-[1440px] h-[900px] overflow-clip font-['Poppins']`}
      style={props.style}
    >
      <div
        className="inset-x-0 top-0 absolute h-[900px] bg-[rgba(8,37,68,1)]"
       />
      <div
        className="h-20 absolute rounded-md w-[500px] left-[135px] top-[469px] bg-[rgba(15,50,87,1)]"
       />
      <div
        className="absolute rounded-md w-[500px] h-[72px] left-[135px] top-[565px] bg-[rgba(15,50,87,1)]"
       />
      <div
        className="h-8 w-28 absolute text-left leading-none inline-block left-[159px] top-[585px]"
      >
        <p className="text-2xl font-medium leading-6 text-white inline m-0">
          {"20 "}
        </p>
        <p
          className="text-base font-normal leading-6 inline m-0 text-[rgba(124,154,187,1)]"
        >
          Sessions
        </p>
      </div>
      <div
        className="h-8 absolute text-left leading-none inline-block w-[189px] left-[319px] top-[585px]"
      >
        <p
          className="text-base font-medium leading-6 inline m-0 text-[rgba(124,154,187,1)]"
        >
          $
        </p>
        <p className="text-2xl font-medium leading-6 text-white inline m-0">
          50.
        </p>
        <p className="text-base font-medium leading-6 text-white inline m-0">
          00
        </p>
        <p className="text-2xl font-medium leading-6 text-white inline m-0">
          {" "}
        </p>
        <p
          className="text-base font-normal leading-6 inline m-0 text-[rgba(124,154,187,1)]"
        >
          / Per Month
        </p>
      </div>
      <div
        className="[rotate:90deg] origin-top-left opacity-20 w-10 h-0 absolute left-[295px] top-[581px] outline outline-1 outline-[rgba(124,154,187,1)]"
       />
      <p
        className="h-6 absolute text-sm font-semibold leading-6 text-left text-white inline m-0 w-[233px] left-[207px] top-[497px]"
      >
        Annual Subscription
      </p>
      <div
        className="h-8 absolute text-right leading-none inline-block font-semibold w-[142px] left-[469px] top-[493px]"
      >
        <p
          className="text-base leading-6 inline m-0 text-[rgba(124,154,187,1)]"
        >
          $
        </p>
        <p className="leading-6 text-white inline m-0 text-[32px]">
          120.
        </p>
        <p className="text-base leading-6 text-white inline m-0">00</p>
      </div>
      <div
        className="opacity-20 w-8 h-8 absolute rounded left-[159px] top-[493px] bg-[rgba(63,140,255,1)]"
       />
      <Rectangle1635 />
      <p
        className="absolute text-5xl font-semibold text-left text-white inline m-0 w-[505px] left-[135px] top-[306px] leading-[68px]"
      >
        Executor of Remote Online Notary
      </p>
      <p
        className="absolute text-lg font-medium text-left inline m-0 left-[135px] top-[263px] tracking-[11px] leading-[normal] text-[rgba(0,158,247,1)]"
      >
        BECOME A CORPORATE RON
      </p>
      <Footer />
      <Layer3 />
      <div
        className="absolute bg-white rounded w-[570px] h-[632px] top-[145px] left-[calc(50%_-_285px_+_300px)] drop-shadow-lg"
       />
      <Buttons type="DISABLE_TYPE" text="Register" />
      <TitleField
        type="DEFAULT_TYPE"
        text="0000 0000 0000 0000"
        text1="Subscription Payment"
        text2="*"
       />
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(228,_230,_239,_1)_inset] [box-shadow-width:1px] w-28 h-10 absolute bg-white rounded top-[561px] left-[calc(50%_-_56px_+_369px)]"
       />
      <p
        className="h-6 absolute text-sm font-normal text-left inline m-0 w-[88px] top-[569px] left-[calc(50%_-_44px_+_373px)] leading-[normal] text-[rgba(179,182,197,1)]"
      >
        MM / YY
      </p>
      <div
        className="[box-shadow:0px_0px_0px_1px_rgba(228,_230,_239,_1)_inset] [box-shadow-width:1px] w-28 h-10 absolute bg-white rounded top-[561px] left-[calc(50%_-_56px_+_497px)]"
       />
      <p
        className="h-6 absolute text-sm font-normal text-left inline m-0 w-[88px] top-[569px] left-[calc(50%_-_44px_+_501px)] leading-[normal] text-[rgba(179,182,197,1)]"
      >
        CVC
      </p>
      <ComponentCheckbox />
      <div
        className="h-4 absolute text-left leading-none inline-block font-normal w-[298px] left-[799px] top-[637px]"
      >
        <p className="text-sm text-black inline m-0 leading-[normal]">
          {"I agree to the "}
        </p>
        <p
          className="text-sm inline m-0 leading-[normal] text-[rgba(0,158,247,1)]"
        >
          Terms of Service
        </p>
      </div>
      <TitleField
        type="DEFAULT_TYPE1"
        text="Enter your first name"
        text1="First Name"
        text2="*"
       />
      <TitleField
        type="DEFAULT_TYPE2"
        text="Enter your email"
        text1="Email"
        text2="*"
       />
      <SelectTitleField type="SELECTED_TYPE" />
      <SelectTitleField type="SELECTED_TYPE1" />
      <TitleField
        type="DEFAULT_TYPE3"
        text="Enter your last name"
        text1="Last Name"
        text2="*"
       />
      <p
        className="h-6 absolute text-sm font-normal text-center text-white inline m-0 w-[72px] left-[978px] right-[390px] top-[calc(50%_-_12px_+_-402px)] leading-[normal]"
      >
        For Notary
      </p>
      <p
        className="h-6 absolute text-sm font-normal text-center text-white inline m-0 w-[100px] left-[1074px] right-[266px] top-[calc(50%_-_12px_+_-402px)] leading-[normal]"
      >
        For Consumer
      </p>
      <Buttons type="BLUE_TYPE" text="Register" />
      <p
        className="h-6 right-40 absolute text-sm font-medium text-center text-white inline m-0 w-[42px] left-[1238px] top-[calc(50%_-_12px_+_-402px)] leading-[normal]"
      >
        Log In
      </p>
      <div
        className="h-1 absolute rounded w-[122px] top-[235px] left-[calc(50%_-_61px_+_-524px)] drop-shadow-lg bg-[rgba(71,190,125,1)]"
       />
      <p
        className="h-4 absolute font-semibold text-left inline m-0 w-[122px] left-[135px] top-[215px] right-[1183px] text-[10px] leading-[normal] text-[rgba(71,190,125,1)]"
      >
        Step 1
      </p>
      <p
        className="h-4 absolute font-semibold text-left inline m-0 w-[122px] left-[261px] top-[215px] right-[1057px] text-[10px] leading-[normal] text-[rgba(71,190,125,1)]"
      >
        Step 2
      </p>
      <p
        className="h-4 absolute font-semibold text-left inline m-0 w-[122px] left-[387px] top-[215px] right-[931px] text-[10px] leading-[normal] text-[rgba(71,190,125,1)]"
      >
        Step 3
      </p>
      <p
        className="h-4 absolute font-semibold text-left inline m-0 w-[122px] left-[513px] top-[215px] right-[805px] text-[10px] leading-[normal] text-[rgba(71,190,125,1)]"
      >
        Step 4
      </p>
      <div
        className="h-1 absolute rounded w-[122px] top-[235px] left-[calc(50%_-_61px_+_-398px)] drop-shadow-lg bg-[rgba(71,190,125,1)]"
       />
      <div
        className="h-1 absolute rounded w-[122px] top-[235px] left-[calc(50%_-_61px_+_-272px)] drop-shadow-lg bg-[rgba(71,190,125,1)]"
       />
      <div
        className="opacity-50 h-1 absolute rounded w-[122px] top-[235px] left-[calc(50%_-_61px_+_-146px)] drop-shadow-lg bg-[rgba(71,190,125,1)]"
       />
    </div>
  );
}

NRegistrationNotary.defaultProps = {
  style: {},
};

interface NRegistrationNotaryProps {
  style: Object;
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
