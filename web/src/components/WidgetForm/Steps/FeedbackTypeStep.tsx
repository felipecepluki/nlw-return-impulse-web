import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "..";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-zinc-900 dark:text-zinc-100 text-xl leading-6">
          Deixe seu feedback
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-[#F4F4F5] dark:bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span className="text-zinc-800 dark:text-zinc-100">
                {value.title}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
