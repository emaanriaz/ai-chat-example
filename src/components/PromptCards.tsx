const PromptCards = ({ handleSubmit }: any) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
      <div
        onClick={() => handleSubmit("What's today's date?")}
        className="flex flex-col justify-between p-4 h-[10rem] rounded-xl border cursor-pointer duration-150 ease-in transition-border hover:scale-[1.015] shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path stroke="#1C274C" strokeWidth="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z"/>
          <path stroke="#1C274C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.009m3.982 0H12m3.991 0H16" opacity=".5"/>
        </svg>
        What's today's date?
      </div>

      <div
        onClick={() => handleSubmit("Tell me a fun fact about whales")}
        className="flex flex-col justify-between p-4 h-[10rem] rounded-xl border cursor-pointer duration-150 ease-in transition-border hover:scale-[1.015] shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 56 56">
          <path d="M26.688 12.66c.28 0 .421-.164.492-.422.726-3.914.68-4.008 4.758-4.781.28-.047.445-.21.445-.492 0-.281-.164-.446-.446-.492-4.054-.82-3.937-.914-4.757-4.782-.07-.257-.211-.421-.492-.421-.282 0-.422.164-.493.421-.82 3.868-.68 3.961-4.758 4.782-.257.046-.445.21-.445.492 0 .281.188.445.445.492 4.079.82 4.032.867 4.758 4.781.07.258.211.422.492.422ZM15.344 28.785c.445 0 .75-.281.797-.703.843-6.258 1.054-6.258 7.523-7.5.422-.07.727-.352.727-.797 0-.422-.305-.726-.727-.797-6.469-.89-6.703-1.101-7.523-7.476-.047-.422-.352-.727-.797-.727-.422 0-.727.305-.774.75-.773 6.281-1.101 6.258-7.523 7.453-.422.094-.727.375-.727.797 0 .469.305.727.82.797 6.376 1.031 6.657 1.195 7.43 7.453.047.469.352.75.774.75Zm15.89 25.945c.61 0 1.055-.445 1.172-1.078 1.664-12.843 3.469-14.789 16.172-16.195.656-.07 1.102-.563 1.102-1.172 0-.61-.446-1.078-1.102-1.172-12.703-1.406-14.508-3.351-16.172-16.195-.117-.633-.562-1.055-1.172-1.055-.609 0-1.054.422-1.148 1.055-1.664 12.844-3.492 14.789-16.172 16.195-.68.094-1.125.563-1.125 1.172 0 .61.445 1.102 1.125 1.172 12.656 1.664 14.414 3.375 16.172 16.195.094.633.539 1.078 1.148 1.078Z"/>
        </svg>
        Tell me a fun fact about whales
      </div>
    </div>
  );
};

export default PromptCards;
