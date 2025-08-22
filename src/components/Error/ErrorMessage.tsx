"use client";

import { MdErrorOutline } from "react-icons/md";
import { IconBaseProps } from "react-icons";
import AnimatedDiv from "../AnimatedDiv/AnimatedDiv";
import Button from "@/components/Button/Button";

const ErrorIcon = MdErrorOutline as unknown as React.FC<IconBaseProps>;

export default function ErrorMessage({
  message = "An unexpected error occurred.",
  reset,
}: {
  message?: string;
  reset?: () => void;
}) {
  return (
    <AnimatedDiv className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <ErrorIcon className="text-[100px] text-elements-secondary-main" />
      <h1 className="text-3xl font-bold text-text-primary mt-4">
        Something went wrong
      </h1>
      <p className="text-text-secondary mt-2">{message}</p>
      <div className="mt-6 flex gap-4">
        {reset && <Button onClick={reset}>Try Again</Button>}
        <Button href="/">Go Home</Button>
      </div>
    </AnimatedDiv>
  );
}
